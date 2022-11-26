from rest_framework import serializers
from .models import Todo

# class TodoSerializer(serializers.Serializer):
#   class Meta:
#     model = Todo
#     fields = ['content', 'id']


class TodoSerializer(serializers.Serializer):
    content = serializers.CharField()
    done = serializers.BooleanField(read_only=True)
    order = serializers.IntegerField()
    id = serializers.IntegerField()

    def create(self, validated_data):
        return Todo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.content = validated_data.get("content", instance.content)
        instance.done = validated_data.get("done", instance.done)
        instance.order = validated_data.get("order", instance.order)
        instance.save()
        return instance
