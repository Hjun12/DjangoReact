#backend/post/serializers.py
from rest_framework import serializers
from .models import charts

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'OTT',
            'rank',
            'name',
            'date',
        )
        model = charts