from django.db import models
class Comment(models.Model):
    author = models.CharField(max_length=255)
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    image = models.URLField(blank=True, null=False, default="")

    def __str__(self):
        return f"{self.author}: {self.text[:30]}..."
