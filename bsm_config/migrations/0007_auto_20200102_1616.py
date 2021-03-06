# Generated by Django 2.2 on 2020-01-02 08:16

import api_basebone.core.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bsm_config', '0006_auto_20190712_1658'),
    ]

    operations = [
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('model', models.CharField(max_length=30, verbose_name='模型名称')),
                ('config', api_basebone.core.fields.JSONField(default={})),
            ],
            options={
                'verbose_name': 'Admin配置',
                'verbose_name_plural': 'Admin配置',
            },
        ),
        migrations.AlterField(
            model_name='menu',
            name='page',
            field=models.CharField(blank=True, choices=[['list', '列表页'], ['detail', '详情页'], ['adminConfig', '页面配置面板']], default='list', help_text='前端功能页面的标识', max_length=200, null=True, verbose_name='页面'),
        ),
    ]
