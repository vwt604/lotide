'use strict';

let args = 0;
for (let i = 2; i < process.argv.length; i++) {
  args += Number(process.argv[i]);
}

console.log(args);