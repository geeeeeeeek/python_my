from rest_framework.decorators import api_view

from myapp.handler import APIResponse
from myapp.models import BasicSite, Category, BasicGlobal
from myapp.serializers import CategorySerializer, BasicGlobalSerializer


def get_category_data():
    parent_categories = Category.objects.filter(pid=-1).order_by('sort', '-id')
    result = []
    for parent in parent_categories:
        # 获取当前一级分类的信息
        parent_data = {
            'id': parent.id,
            'name': parent.title,
            'href': '/product/' + str(parent.id),
            'type': 'link',
            'subItems': []
        }

        # 获取该一级分类下的所有二级分类
        child_categories = Category.objects.filter(pid=parent.id).order_by('sort', '-id')
        if child_categories.count() > 0:
            parent_data['type'] = 'dropdown'

        # 将二级分类添加到sub列表中
        for child in child_categories:
            child_data = {
                'id': child.id,
                'name': child.title,
                'href': '/product/' + str(child.id),
                'type': 'link',
                'sort': child.sort
            }
            parent_data['subItems'].append(child_data)

        result.append(parent_data)

    return result


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
                "type": "dropdown",
                "subItems": get_category_data()
            })

        if basicSite.site_switch_about == '1':
            navigationItems.append({
                "name": "About",
                "href": "/about",
                "type": "link"
            })

        if basicSite.site_switch_contact == '1':
            navigationItems.append({
                "name": "Contact",
                "href": "/contact",
                "type": "link"
            })

        if basicSite.site_switch_news == '1':
            navigationItems.append({
                "name": "News",
                "href": "/news",
                "type": "link"
            })

        if basicSite.site_switch_download == '1':
            navigationItems.append({
                "name": "Download",
                "href": "/download",
                "type": "link"
            })

        if basicSite.site_switch_case == '1':
            navigationItems.append({
                "name": "Case",
                "href": "/case",
                "type": "link"
            })

        if basicSite.site_switch_faq == '1':
            navigationItems.append({
                "name": "Faq",
                "href": "/faq",
                "type": "link"
            })

        sectionData['navigationItems'] = navigationItems

        return APIResponse(code=0, msg='查询成功', data=sectionData)
