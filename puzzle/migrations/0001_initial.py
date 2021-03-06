# Generated by Django 2.2.9 on 2020-10-28 11:20

from django.db import migrations, models
import django.db.models.deletion
import mptt.fields
import puzzle.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Block',
            fields=[
                ('id', models.SlugField(default=puzzle.models.uuid4_hex, primary_key=True, serialize=False, unique=True, verbose_name='标识')),
                ('component', models.CharField(default='', max_length=20, verbose_name='组件')),
                ('lft', models.PositiveIntegerField(editable=False)),
                ('rght', models.PositiveIntegerField(editable=False)),
                ('tree_id', models.PositiveIntegerField(db_index=True, editable=False)),
                ('level', models.PositiveIntegerField(editable=False)),
                ('parent', mptt.fields.TreeForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='puzzle.Block', verbose_name='父结点')),
            ],
            options={
                'verbose_name': '渲染块',
                'verbose_name_plural': '渲染块',
            },
        ),
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='名称')),
                ('root', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='puzzle.Block', verbose_name='根结点')),
            ],
            options={
                'verbose_name': '页面',
                'verbose_name_plural': '页面',
            },
        ),
    ]
