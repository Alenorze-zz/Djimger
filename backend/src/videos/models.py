from django.db import models


class Video(models.Model):
    name      = models.Charfield(max_length=220)
    slug      = models.SlugField(unique=True, blank=True)
    embed     = models.Charfield(max_length=120, null=True, blank=True)
    featured  = models.BooleandField(default=False)
    updated   = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name 
