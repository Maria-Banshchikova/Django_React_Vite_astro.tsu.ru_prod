from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin # для сортировки
from .models import Alumni

#admin.site.register(Alumni) # было
@admin.register(Alumni)
class AlumniAdmin(SortableAdminMixin, admin.ModelAdmin):
    sortable_field_name = "order"
    list_display = ("year", "is_published", "order")
    fields = ('year', 'spisok', 'is_published', 'image')