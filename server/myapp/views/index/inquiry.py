# Create your views here.

from rest_framework.decorators import api_view, throttle_classes
from rest_framework.throttling import AnonRateThrottle

from myapp import utils
from myapp.handler import APIResponse
from myapp.serializers import InquirySerializer


class MyRateThrottle(AnonRateThrottle):
    # 限流 每分钟5次
    THROTTLE_RATES = {"anon": "5/min"}


@api_view(['POST'])
@throttle_classes([MyRateThrottle])
def create(request):
    data = request.data.copy()
    data['ip'] = utils.get_ip(request)
    serializer = InquirySerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return APIResponse(code=0, msg='创建成功', data=serializer.data)
    else:
        print(serializer.errors)

    return APIResponse(code=1, msg='创建失败')
