#!/bin/bash

npm install
mocha test/test.js --timeout 10000 --reporter tap > results.tap

