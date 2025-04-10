# Generated by Django 3.2.11 on 2025-03-25 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0021_basicbanner'),
    ]

    operations = [
        migrations.CreateModel(
            name='BasicGlobal',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('global_phone', models.CharField(blank=True, max_length=100, null=True)),
                ('global_email', models.CharField(blank=True, max_length=100, null=True)),
                ('global_company_name', models.CharField(blank=True, max_length=100, null=True)),
                ('global_address', models.CharField(blank=True, max_length=100, null=True)),
                ('global_wechat', models.CharField(blank=True, max_length=100, null=True)),
                ('global_facebook', models.CharField(blank=True, max_length=100, null=True)),
                ('global_twitter', models.CharField(blank=True, max_length=100, null=True)),
                ('global_linkedin', models.CharField(blank=True, max_length=100, null=True)),
                ('global_whatsapp', models.CharField(blank=True, max_length=100, null=True)),
                ('global_youtube', models.CharField(blank=True, max_length=100, null=True)),
                ('global_instagram', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'db_table': 'b_basic_global',
            },
        ),
    ]
