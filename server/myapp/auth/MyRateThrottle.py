from rest_framework.throttling import AnonRateThrottle


class MyRateThrottle(AnonRateThrottle):
    # 限流 每分钟2次
    THROTTLE_RATES = {"anon": "2/min"}


class UserRateThrottle(AnonRateThrottle):
    # 限流 每分钟10次
    THROTTLE_RATES = {"anon": "10/min"}
