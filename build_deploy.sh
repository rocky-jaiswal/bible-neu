#!/bin/sh

yarn build &&
./node_modules/.bin/firebase deploy --project bible-neu
