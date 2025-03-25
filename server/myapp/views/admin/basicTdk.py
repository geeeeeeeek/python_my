# Create your views here.

from rest_framework.decorators import api_view, authentication_classes

from myapp.auth.authentication import AdminTokenAuthtication
from myapp.handler import APIResponse
from myapp.models import BasicTdk
from myapp.permission.permission import isDemoAdminUser
from myapp.serializers import BasicTdkSerializer


@api_view(['GET'])
@authentication_classes([AdminTokenAuthtication])
def list_api(request):
    if request.method == 'GET':
        basicTdk = BasicTdk.get_solo()

        serializer = BasicTdkSerializer(basicTdk, many=False)
        return APIResponse(code=0, msg='查询成功', data=serializer.data)




@api_view(['POST'])
@authentication_classes([AdminTokenAuthtication])
def update(request):
    if isDemoAdminUser(request):
        return APIResponse(code=1, msg='演示帐号无法操作')

    try:
        basicTdk = BasicTdk.get_solo()
        serializer = BasicTdkSerializer(basicTdk, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return APIResponse(code=0, msg='更新成功', data=serializer.data)
        else:
            print(serializer.errors)
    except BasicTdk.DoesNotExist:
        return APIResponse(code=1, msg='对象不存在')

    return APIResponse(code=1, msg='更新失败')


