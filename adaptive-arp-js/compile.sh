#!/bin/bash
echo "Post-processing TypeScript code."
# npm install replace -g required!
HOME_DIR=`pwd`
cd $HOME_DIR/src_global
tsc -d -m commonjs --sourcemap --target ES5 Adaptive.ts
replace -s "for \(var p in b\) if \(b.hasOwnProperty\(p\)\) d\[p] = b\[p];" "for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }" *.js
cd $HOME_DIR/src_units
rm -rf *.d.ts
tsc -d -m commonjs --sourcemap --target ES5 *.ts
replace -s "for \(var p in b\) if \(b.hasOwnProperty\(p\)\) d\[p] = b\[p];" "for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } }" *.js