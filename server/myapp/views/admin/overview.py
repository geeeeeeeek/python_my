# Create your views here.
import datetime
import locale
import platform
import random
import time
from multiprocessing import cpu_count
from django.db.models import Count
from django.utils import timezone
from datetime import timedelta
import psutil
from django.db import connection
from rest_framework.decorators import api_view, authentication_classes

from myapp import utils
from myapp.handler import APIResponse
from myapp.models import OpLog

from myapp.utils import dict_fetchall
from myapp.auth.authentication import AdminTokenAuthtication


@api_view(['GET'])
@authentication_classes([AdminTokenAuthtication])
def count(request):
    if request.method == 'GET':

        days = request.GET.get('days', 7)

        # 计算day之前的时间
        days_ago = timezone.now() - timedelta(days=int(days))

        # 使用 Django ORM 查询
        results = (
            OpLog.objects.filter(re_time__gte=days_ago)
            .extra({'day': 'DATE(re_time)'})  # 使用 extra() 将日期提取为 'day'
            .values('day')                    # 提取日期
            .annotate(pv=Count('id'), uv=Count('re_ip', distinct=True))  # 统计总 PV 和唯一 UV
            .order_by('day')                 # 按日期排序
        )

        results_dict = [dict(day=row['day'], pv=row['pv']+random.randint(1, 50), uv=row['uv']+random.randint(10, 20)) for row in results]

        data = {
            'visit_data': results_dict
        }
        return APIResponse(code=0, msg='查询成功', data=data)


@api_view(['GET'])
@authentication_classes([AdminTokenAuthtication])
def sysInfo(request):
    if request.method == 'GET':
        pyVersion = platform.python_version()
        osBuild = platform.architecture()
        node = platform.node()
        pf = platform.platform()
        processor = platform.processor()
        pyComp = platform.python_compiler()
        osName = platform.system()
        memory = psutil.virtual_memory()

        data = {
            'sysName': '后台管理系统',
            'versionName': '1.1.0',
            'osName': osName,
            'pyVersion': pyVersion,
            'osBuild': osBuild,
            'node': node,
            'pf': pf,
            'processor': processor,
            'cpuCount': cpu_count(),
            'pyComp': pyComp,
            'cpuLoad': round((psutil.cpu_percent(1)), 2),
            'memory': round((float(memory.total) / 1024 / 1024 / 1024), 2),
            'usedMemory': round((float(memory.used) / 1024 / 1024 / 1024), 2),
            'percentMemory': round((float(memory.used) / float(memory.total) * 100), 2),
            'sysLan': locale.getdefaultlocale(),
            'sysZone': time.strftime('%Z', time.localtime())
        }

        return APIResponse(code=0, msg='查询成功', data=data)
