#!/bin/sh

yarn build &&
firebase deploy --project bible-neu
