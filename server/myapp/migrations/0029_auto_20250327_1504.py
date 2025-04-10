# Generated by Django 3.2.11 on 2025-03-27 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0028_oplog_re_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='basicsite',
            name='site_switch_about',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
        migrations.AddField(
            model_name='basicsite',
            name='site_switch_case',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
        migrations.AddField(
            model_name='basicsite',
            name='site_switch_contact',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
        migrations.AddField(
            model_name='basicsite',
            name='site_switch_download',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
        migrations.AddField(
            model_name='basicsite',
            name='site_switch_faq',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
        migrations.AddField(
            model_name='basicsite',
            name='site_switch_news',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
        migrations.AddField(
            model_name='basicsite',
            name='site_switch_product',
            field=models.CharField(blank=True, max_length=2, null=True),
        ),
    ]
