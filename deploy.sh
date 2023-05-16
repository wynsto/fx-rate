#!/bin/bash
npm run build
scp -r ./build/* root@fxrate.cn:/var/www/html
