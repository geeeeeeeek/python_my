# Create your views here.
import os
from pathlib import Path

from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes

from myapp import utils
from myapp.auth.authentication import AdminTokenAuthtication
from myapp.handler import APIResponse
from myapp.models import Category, Thing
from myapp.permission.permission import isDemoAdminUser
from myapp.serializers import ThingSerializer, UpdateThingSerializer
from server.settings import MEDIA_ROOT


@api_view(['GET'])
def list_api(request):
    if request.method == 'GET':
        keyword = request.GET.get("keyword", None)
        c = request.GET.get("c", None)
        if keyword:
            things = Thing.objects.filter(title__contains=keyword).order_by('-create_time')
        elif c:
            category = Category.objects.get(pk=c)
            things = Category.category_thing.all()
        else:
            things = Thing.objects.all().order_by('-create_time')

        serializer = ThingSerializer(things, many=True)
        return APIResponse(code=0, msg='查询成功', data=serializer.data)


@api_view(['GET'])
def detail(request):
    try:
        pk = request.GET.get('id', -1)
        thing = Thing.objects.get(pk=pk)
    except Thing.DoesNotExist:
        utils.log_error(request, '对象不存在')
        return APIResponse(code=1, msg='对象不存在')

    if request.method == 'GET':
        serializer = ThingSerializer(thing)
        return APIResponse(code=0, msg='查询成功', data=serializer.data)


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def create(request):
    if isDemoAdminUser(request):
        return APIResponse(code=1, msg='演示帐号无法操作')

    serializer = ThingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='创建成功', data=serializer.data)
    else:
        print(serializer.errors)
        utils.log_error(request, '参数错误')

    return APIResponse(code=1, msg='创建失败')


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def update(request):
    if isDemoAdminUser(request):
        return APIResponse(code=1, msg='演示帐号无法操作')

    try:
        pk = request.GET.get('id', -1)
        thing = Thing.objects.get(pk=pk)
    except Thing.DoesNotExist:
        return APIResponse(code=1, msg='对象不存在')

    serializer = UpdateThingSerializer(thing, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='查询成功', data=serializer.data)
    else:
        print(serializer.errors)
        utils.log_error(request, '参数错误')

    return APIResponse(code=1, msg='更新失败')


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def delete(request):
    if isDemoAdminUser(request):
        return APIResponse(code=1, msg='演示帐号无法操作')

    try:
        ids = request.GET.get('ids')
        ids_arr = ids.split(',')
        Thing.objects.filter(id__in=ids_arr).delete()
    except Thing.DoesNotExist:
        return APIResponse(code=1, msg='对象不存在')
    return APIResponse(code=0, msg='删除成功')


@api_view(['POST'])
def upload(request):
    try:
        # 【1】 鉴权
        authorization = request.META.get('HTTP_AUTHORIZATION')
        print('authorization-----' + authorization)
        myfile = request.FILES['my-file']
        file_extension = Path(myfile.name).suffix
        new_name = str(utils.get_timestamp()) + file_extension
        # 【2】拼接图片保存路径+图片名
        save_path = MEDIA_ROOT + os.path.sep + 'img' + os.path.sep + new_name
        print('save_path-----' + save_path)

        # 【3】保存图片到指定路径，因为图片是2进制式，因此用wb，
        with open(save_path, 'wb') as f:
            # pic.chunks()为图片的一系列数据，它是一一段段的，所以要用for逐个读取
            for content in myfile.chunks():
                f.write(content)

        resp_json = {
            "code": 0,
            "data": new_name
        }

        return JsonResponse(resp_json)

    except Exception as e:
        print(str(e))
        return APIResponse(code=1, msg='fail')
