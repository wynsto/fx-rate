# -*- coding: utf8 -*-
import json
import requests

def main_handler(event, context):
    query = event['queryStringParameters']
    
    if ('base' in query and query['base'] != ''):
        base = query['base']
        currency = query['currency']
        res = requests.get('https://houyewei.com/fxrate/' + currency + '/' + base)
    else:
        res = requests.get('https://houyewei.com/fxrate')
    return res.json()

if __name__ == "__main__":
    main_handler()