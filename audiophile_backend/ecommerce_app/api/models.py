from django.db import models

class ProductImage(models.Model):
    image = models.ImageField()
    image_type = models.CharField(max_length=50)
    image_size = models.CharField(max_length=20)


class Product(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    image = models.ForeignKey(ProductImage, on_delete=models.CASCADE)    
    description = models.CharField(max_length=500)
    is_new = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    quantity = models.IntegerField()
    order_time = models.DateTimeField(auto_now_add=True)
    