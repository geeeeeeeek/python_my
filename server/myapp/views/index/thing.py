# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination

from myapp import utils
from myapp.handler import APIResponse
from myapp.models import Category, Thing
from myapp.serializers import ThingSerializer


class MyPageNumberPagination(PageNumberPagination):
    page_size = 10  # 每页的默认项
    page_size_query_param = 'pageSize'  # 允许通过 URL 参数设置每页的大小
    max_page_size = 100  # 最大页尺寸


@api_view(['GET'])
def list_api(request):
    if request.method == 'GET':
        keyword = request.GET.get("keyword", None)
        c = request.GET.get("c", None)
        if keyword:
            things = Thing.objects.filter(title__contains=keyword).order_by('-create_time')
        elif c:
            category = Category.objects.get(pk=c)
            things = category.category_thing.all()
        else:
            things = Thing.objects.all().order_by('-create_time')

        # 分页
        paginator = MyPageNumberPagination()
        paginated_things = paginator.paginate_queryset(things, request)
        total = things.count()

        serializer = ThingSerializer(paginated_things, many=True)
        return APIResponse(code=0, msg='查询成功', data=serializer.data, total=total)


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



