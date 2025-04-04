# Create your views here.
from collections import defaultdict

from django.db import connection
from django.db.models import Q
from rest_framework.decorators import api_view, authentication_classes

from myapp.auth.authentication import AdminTokenAuthtication
from myapp.handler import APIResponse
from myapp.models import Category
from myapp.permission.permission import isDemoAdminUser
from myapp.serializers import CategorySerializer
from myapp.utils import dict_fetchall


@api_view(['GET'])
@authentication_classes([AdminTokenAuthtication])
def list_api(request):
    if request.method == 'GET':
        # 获取所有顶级分类，并根据 sort 排序
        top_level_categories = Category.objects.filter(pid=-1).order_by('sort', '-id')

        # 序列化顶级分类
        serializer = CategorySerializer(top_level_categories, many=True)
        return APIResponse(code=0, msg='查询成功', data=serializer.data)


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def create(request):
    if isDemoAdminUser(request):
        return APIResponse(code=1, msg='演示帐号无法操作')

    print('data-----', request.data)

    category = Category.objects.filter(title=request.data['title'])
    if len(category) > 0:
        return APIResponse(code=1, msg='该名称已存在')

    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='创建成功', data=serializer.data)

    return APIResponse(code=1, msg='创建失败')


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def update(request):
    if isDemoAdminUser(request):
        return APIResponse(code=1, msg='演示帐号无法操作')

    try:
        pk = request.data["id"]
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        return APIResponse(code=1, msg='对象不存在')

    serializer = CategorySerializer(category, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='更新成功', data=serializer.data)

    return APIResponse(code=1, msg='更新失败')


@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def delete(request):
    if isDemoAdminUser(request):
        return APIResponse(code=1, msg='演示帐号无法操作')

    try:
        pk = request.data['id']
        # 删除自身和自身的子孩子
        Category.objects.filter(Q(id=pk) | Q(pid=pk)).delete()
    except Category.DoesNotExist:
        return APIResponse(code=1, msg='对象不存在')
    return APIResponse(code=0, msg='删除成功')
