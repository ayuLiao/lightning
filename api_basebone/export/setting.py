from django.conf import settings
from django.apps import apps
from bsm_config.models import Setting

WEBSITE_CONFIG = settings.WEBSITE_CONFIG

def get_settins():
    data = Setting.objects.values('key','value')
    data_map_key = {item['key']: item['value'] for item in data}
    setting_data = {}
    view_keys = []
    if WEBSITE_CONFIG:
        for section in WEBSITE_CONFIG:
            for field in section['fields']:
                if field.get('public',False):
                    view_keys.append(field['name'])
    
    for key in view_keys:
        if key in data_map_key:
            setting_data.update({
                key: data_map_key[key]
            })

    return setting_data

def get_setting_config():
    config = []
    data = Setting.objects.values('key','value')
    data_map_key = {item['key']: item['value'] for item in data}
    if WEBSITE_CONFIG:
        for section in WEBSITE_CONFIG:
            values = {}
            fields = []
            formFields = []
            model = section['key']
            group_name = f'{model}_group'
            for field in section['fields']:
                f = {
                    "displayName": field.get('displayName',''),
                    "help": field.get('help',''),
                    "name": field['name'],
                    "type": field.get('type','string'),
                    "required": field.get('required',False),
                }
                if 'choices' in field:
                    f['choices'] = field['choices']
                if 'default' in field:
                    f['default'] = field['default']
                if 'validators' in field:
                    f['validators'] = field['validators']
                fields.append(f)
                formField = {'name': field.get('name',''),}
                if 'widget' in field:
                    formField['widget'] = field['widget']
                if 'show' in field:
                    formField['show'] = field['show'] 
                if 'options' in field:
                    formField['options'] = field['options']
                formFields.append(formField)
                value = data_map_key.get(field['name'],None) 
                if value==None:
                    value = field.get('default',None)
                if f['type'] in ('mref',):
                    f['ref'] = field['ref']
                    if not value:
                        value = []
                    if value:
                        app, model = f['ref'].split('__')
                        Model = apps.get_app_config(app).get_model(model.capitalize())
                        print(Model)
                        value = Model.objects.filter(pk__in=value).values()
                values[field['name']] = value

            setting = {
                "title": section.get('title',None), "model": model,
                "schemas": {model:{"fields":fields}},
                'admins': {model: {"formFields": formFields}},
                "values": values,
                "help_text": section.get('help_text',''),
                "permission_code": f'bsm_config.{section.get("permission_code","")}'
            }
            config.append(setting)
            print(setting['model'],setting)

    return config