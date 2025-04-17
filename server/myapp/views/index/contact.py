from rest_framework.decorators import api_view

from myapp.handler import APIResponse
from myapp.models import BasicSite, Category, BasicGlobal, BasicBanner, Thing
from myapp.serializers import CategorySerializer, BasicGlobalSerializer, ThingSerializer


@api_view(['GET'])
def section(request):
    if request.method == 'GET':
        sectionData = {}

        # banner数据
        basicBanner = BasicBanner.get_solo()
        sectionData['bannerData'] = basicBanner.banner_contact

        # 联系信息
        basicGlobal = BasicGlobal.get_solo()
        basicGlobalSerializer = BasicGlobalSerializer(basicGlobal, many=False)
        sectionData['contactData'] = basicGlobalSerializer.data

        # 推荐数据
        things = Thing.objects.filter(status=0).order_by('-create_time')[:4]
        thingSerializer = ThingSerializer(things, many=True)
        sectionData['recommendData'] = thingSerializer.data

        return APIResponse(code=0, msg='查询成功', data=sectionData)
