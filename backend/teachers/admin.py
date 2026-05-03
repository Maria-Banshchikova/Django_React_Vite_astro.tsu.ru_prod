from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from .models import teachers


@admin.register(teachers)
class teachersAdmin(SortableAdminMixin, admin.ModelAdmin):
    sortable_field_name = "order"
    list_display = ("name", "position", "is_published", "order")
    fields = ("name", "position", "persona", "is_published", "image")
