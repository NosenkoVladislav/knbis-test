from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer

class TodoApiView(APIView):
    def get(self, request):
        w = Todo.objects.all().order_by('order')
        return Response({'data': TodoSerializer(w, many=True).data})

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'data': serializer.data})

    def put(self, request, *args, **kwargs):
        todos_list = request.data['todos']
        instances = []
        for task in todos_list:
            obj = self.get_object(obj_id=task.id)
            obj.done = True
            obj.save()
            instances.append(obj)
        serializer = TodoSerializer(instances, many=True)
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk:
            return Response({"error": "Method DELETE not allowed"})

        return Response({"post": "delete post " + str(pk)})
