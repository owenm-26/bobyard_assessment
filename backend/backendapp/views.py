from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .admin import Comment
from .serializers import CommentSerializer

@api_view(["GET", "POST"])
def comments_collection(request):
    if request.method == "GET":
        comments = Comment.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["PUT", "PATCH"])
def edit_comment(request, pk):
    try:
        comment = Comment.objects.get(pk=pk)
    except Comment.DoesNotExist:
        return Response({"error": "Comment not found"}, status=status.HTTP_404_NOT_FOUND)

    serializer = CommentSerializer(comment, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
def delete_comment(request, pk):
    try:
        comment = Comment.objects.get(pk=pk)
    except Comment.DoesNotExist:
        return Response({"error": "Comment not found"}, status=status.HTTP_404_NOT_FOUND)

    comment.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
