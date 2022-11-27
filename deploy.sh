#!/bin/bash
npm run build
scp -r ./build/* ubuntu@fxrate.cn:/var/www/html
