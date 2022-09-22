#!/bin/sh

envsubst '$PORT' < "/nginx_template.conf" > "/etc/nginx/conf.d/default.conf"

source /docker-entrypoint.sh

nginx -g "daemon off;"