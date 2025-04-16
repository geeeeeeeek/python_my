from rest_framework.decorators import api_view

from myapp.handler import APIResponse
from myapp.models import BasicSite, Category, BasicGlobal
from myapp.serializers import CategorySerializer, BasicGlobalSerializer



@api_view(['GET'])
def section(request):
    if request.method == 'GET':
        basicSite = BasicSite.get_solo()
        basicGlobal = BasicGlobal.get_solo()

        basicGlobalSerializer = BasicGlobalSerializer(basicGlobal, many=False)

        sectionData = {'siteLogo': basicSite.site_logo, 'basicGlobal': basicGlobalSerializer.data}

        navigationItems = []

        navigationItems.append({
            "name": "Home",
            "href": "/",
            "type": "link"
        })

        if basicSite.site_switch_product == '1':
            navigationItems.append({
                "name": "Product",
                "href": "/product",
            })

        if basicSite.site_switch_about == '1':
            navigationItems.append({
                "name": "About",
                "href": "/about",
            })

        if basicSite.site_switch_contact == '1':
            navigationItems.append({
                "name": "Contact",
                "href": "/contact",
            })

        if basicSite.site_switch_news == '1':
            navigationItems.append({
                "name": "News",
                "href": "/news",
            })


        if basicSite.site_switch_faq == '1':
            navigationItems.append({
                "name": "Faq",
                "href": "/faq",
            })

        sectionData['navigationItems'] = navigationItems

        return APIResponse(code=0, msg='查询成功', data=sectionData)
