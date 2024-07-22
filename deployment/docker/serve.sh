#!/bin/bash
nohup nginx -g "daemon off;" & cd backend && gunicorn -b 0.0.0.0:5000 --workers=3 -t 600 "app:app" "$1"