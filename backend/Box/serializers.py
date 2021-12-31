#backend/post/serializers.py
from rest_framework import serializers
from .models import Box

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'rank',
            'movieNm',
            'openDT',
            'salesAmt',
            'salesAcc',
            'audiCnt',
            'audiAcc',
        )
        model = Box