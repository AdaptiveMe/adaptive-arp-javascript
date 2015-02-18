#!/bin/bash
echo "Post-processing TypeScript code."
HOME_DIR=`pwd`
cd $HOME_DIR/src_global
tsc -d -m commonjs --sourcemap --target ES6 Adaptive.ts
cd $HOME_DIR/src_units
rm -rf *.d.ts
tsc -d -m commonjs --sourcemap --target ES6 *.ts
