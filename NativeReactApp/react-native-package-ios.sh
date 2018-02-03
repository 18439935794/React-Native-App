#!/bin/sh

basepath=$(cd `dirname $0`; pwd)

cd $basepath

react-native bundle --entry-file index.js --bundle-output ./ios/ReactApp/bundle/main.jsbundle --platform ios --assets-dest ./ios/ReactApp/bundle --dev false

echo 'done'
