# Generated by Django 5.0.3 on 2024-04-01 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_user_online_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='has_logged_in',
            field=models.BooleanField(default=False),
        ),
    ]