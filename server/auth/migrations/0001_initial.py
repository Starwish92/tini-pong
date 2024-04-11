# Generated by Django 5.0.4 on 2024-04-11 07:25

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RefreshToken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_uuid', models.UUIDField(default=uuid.uuid4)),
                ('token', models.CharField(db_index=True)),
                ('expiration_time', models.IntegerField()),
            ],
        ),
    ]
