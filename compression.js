

const CompressJs = require('compressjs');
const colors = require('colors');





function startTimer() { const t = Date.now(); return { stop: function () { return Date.now() - t } } }

const timer = startTimer();
// Do some work...
const elapsedTime = timer.stop();
console.log(`Elapsed time: ${elapsedTime}ms`);





Number.prototype.toKb = function () { return (this / 1024).toFixed(2) + 'kB'; }


const compressStringToBytes = (str) => {
    const compressor = CompressJs.Lzp3;
    const data = new Buffer(str, 'utf8');
    const compressed = compressor.compressFile(data);
    return compressed;
};

const decompressBytesToString = (bytes) => {
    const compressor = CompressJs.Lzp3;
    const decompressed = compressor.decompressFile(bytes);
    const str = new Buffer(decompressed).toString('utf8');
    return str;
};

const compressStringToString64 = (str) => {
    let timer = startTimer();
    const compressed = compressStringToBytes(str);
    const base64 = Buffer.from(compressed).toString('base64');
    uncompressedSize = str.length
    compressedSize = base64.length
    compressionRatio = (compressedSize / uncompressedSize) * 100

    console.log(`  Compressed  ║`.bgGreen.black + ` ${compressionRatio.toFixed(2)}%\t│`.green + ` ${uncompressedSize.toKb()} -> ${compressedSize.toKb()}`.gray + `\t${timer.stop()}ms`.gray);
    return base64;

};

const decompressString64ToString = (base64) => {
    const bytes = Buffer.from(base64, 'base64');
    const str = decompressBytesToString(bytes);
    uncompressedSize = str.length
    compressedSize = base64.length
    compressionRatio = (uncompressedSize / compressedSize) * 100

    console.log(` DeCompressed ║`.bgGreen.black + ` ${compressionRatio.toFixed(2)}%\t│`.green + ` ${compressedSize.toKb()} -> ${uncompressedSize.toKb()}`.gray + `\t${timer.stop()}ms`.gray);
    return str;
};





/* test: */




//const lorem = 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor adipiscing elit. Sed do eiusmod tempor fuck shit balls lol Lorem ipsum dolor sit amet incididunt ut labore Lorem ipsum dolor sit amet et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation quis nostrud quis nostrud quis nostrud quis nostrud quis nostrud Lorem ipsum dolor sit amet quis nostrud ullamco laboris nisi ut aliquip ex ea commodo quis nostrud quis nostrud quis nostrud consequat. Duis aute irure dolor in reprehenderit in quis nostrud voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
/*
const lorem2 = `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡿⣻⢽⢯⣻⢽⣫⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢿⢽⢕⡯⡯⡯⡯⣯⣺⣽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢛⢎⢏⢛⢪⢯⢾⣽⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡯⡿⣽⣻⣫⡓⡂⠄⠄⡤⣦⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢽⡪⡳⣕⡆⡒⡼⢹⢩⠹⡸⡘⡌⡎⡎⠭⠯⡿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢽⣝⣾⣨⡣⠣⢡⠑⢅⠕⢌⢊⠆⡕⢜⢌⢪⢱⢱⢩⢫⢿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣾⣿⣿⣿⠛⠠⠠⢁⠢⡈⡂⠪⡐⡐⡑⢌⢢⠱⡡⠣⡑⢥⢱⢸⣼⣺⢿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣵⣿⣿⣿⣿⣟⠐⠄⡁⠂⠂⢂⢐⢈⢂⠢⠑⢌⢌⠢⡑⢌⢪⡪⣵⣫⢟⣞⡽⣝⡯⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣽⣾⣿⣿⣿⣿⣿⡇⠇⠄⠂⠄⠁⠅⡐⠠⢂⠢⠨⡈⢂⢂⢌⡸⣸⢵⢯⢗⡯⣻⣪⢯⣳⢯⣗⡯⡿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⡗⡇⠄⢈⢐⠈⠄⠂⢂⢁⠢⠨⢈⢀⢂⡲⣸⡪⣳⢽⢝⡽⡽⡵⡯⣟⣾⣳⡳⡯⡯⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⡆⠨⠐⡐⢈⠨⠐⠐⠄⠂⢅⢢⢱⢱⢱⢱⢱⢱⢳⡹⣪⡫⣫⢟⡽⣞⡾⣽⢽⣝⣗⣟⣾⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣷⣿⡯⡆⠌⡀⠂⢀⠄⢀⠠⠡⡨⡊⡢⡱⡡⡣⡣⡱⡱⡱⡘⢆⢏⢎⢏⢇⠣⢓⠱⡑⡮⣺⣞⢾⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⡀⠄⠠⢐⠐⡑⢌⠢⡱⡐⡢⢪⢪⢪⢮⢲⡑⡕⢌⡢⡱⡪⡞⡭⡫⡪⢎⢗⢽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⡇⡇⠄⡀⠂⡁⢄⣈⣐⢐⢑⠔⡑⠜⡌⡎⣎⢎⢧⡣⡣⡃⡇⢏⢍⢎⢎⢂⢪⡘⡼⡕⡽⣽⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣽⣇⢃⠄⠂⠡⡨⢂⠂⠄⢊⠢⡈⠢⡑⢕⠜⡜⢜⢕⢕⢇⢇⢧⢣⢕⢜⠼⡌⣗⢽⡺⡽⡽⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠅⠠⠈⠄⡣⡣⡋⡊⠐⡨⢐⠅⠌⡆⡇⡇⢕⢕⢱⢑⢕⡳⡹⣕⢯⢕⡽⡼⣝⢞⣝⢾⡵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⡯⡃⢐⠄⡂⡅⡳⡕⡆⡀⢇⠕⡌⡊⢎⢎⢎⢎⢆⢣⢑⢕⢕⢵⢱⣝⢿⣺⢽⠸⢸⠮⠣⢫⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠆⢂⢐⢀⠡⢩⢑⢱⢢⠡⡑⢌⢌⠪⡪⡪⡪⡪⡢⡃⡎⡪⡪⡣⡳⣕⢯⢳⢢⡣⣕⢮⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣗⡇⠂⢄⠂⢌⠐⠌⡂⠕⡝⡌⡢⢂⢕⠸⡨⡊⢆⢣⢪⢪⢪⠢⡃⡇⡇⡇⡳⡱⡝⡞⡽⣾⣿⣟⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡇⠌⠄⡊⠄⠅⠅⡂⠅⡊⠔⡈⡂⡂⡣⡑⢌⢊⠢⢣⢱⠱⡱⡱⡱⢑⠈⡂⡑⢕⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⡏⠇⠡⢁⠂⠅⢅⢑⠄⢅⠂⠅⡂⢂⠌⢔⠨⡂⠅⠅⢕⠸⡸⢸⢸⢸⢐⡰⣐⢜⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⡿⡋⠅⡊⠌⠄⠅⢅⢑⠐⢌⠢⠨⢐⠐⡐⠨⢐⠨⡐⡡⠡⠡⡑⠜⢌⢎⢎⢕⢕⠕⢕⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣯⣿⣿⢻⢐⠅⠌⡂⡐⠡⠨⢐⠠⢑⠐⠌⠌⡐⢐⠠⢁⢂⠅⡂⠢⠡⡑⠌⢜⢸⢰⠡⡊⡎⣎⢎⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡻⡸⡸⡐⡅⢕⢐⠌⠄⠅⡂⠌⠄⠅⠅⢅⠂⡂⠨⠠⢐⠐⠌⠌⡪⢐⠅⡱⡑⢔⢑⢑⠔⡬⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣾⡿⡯⡪⣪⡺⣜⢮⢮⡣⣇⢇⡇⡇⡎⡌⡌⡌⡪⠠⡑⢄⠡⠨⠠⢡⠡⡑⢌⠢⡁⢔⢱⢱⢱⢒⢭⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡯⣫⡪⣏⡞⣞⢮⣳⡳⣝⡮⡷⣝⢞⡼⡸⡰⡑⣌⢪⠰⡐⠨⡀⠅⢂⠅⡂⠅⠕⡌⡐⠌⢎⠪⣑⢧⣟⣯⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢟⢎⡞⣮⣺⢵⢯⢯⣻⢮⡯⣗⡯⣟⡾⣽⣺⢽⢵⢽⢼⢔⡕⢜⢌⢢⢡⠠⡀⠂⠁⡃⠌⢄⢢⢬⡮⣗⣿⣺⣗⣿⣽⢾⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⡺⡜⡮⡳⣝⣞⢮⢯⢯⣟⡾⡽⣽⣳⣻⣳⢯⣗⡯⣯⢯⢯⢯⢷⢽⡵⡧⣇⢧⡣⣎⢬⠤⢄⢥⢹⢝⣗⡿⣽⣞⣷⣻⡾⣽⢿⣽⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣾⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡯⡏⣖⠵⡝⡮⣻⡺⣪⡯⡿⣽⣺⢽⢽⣳⣻⣺⡽⣽⣺⡽⣽⢽⢯⣻⡽⡽⣞⣯⢯⡷⣻⣺⣳⣻⢽⣺⢽⢯⢾⣽⣳⣟⣾⣳⣿⣻⣯⢿⣽⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢏⡣⡣⡣⡫⡮⡯⣺⣺⡳⡯⣟⣾⣺⢯⣟⣗⣟⡾⣽⡳⡯⡯⣯⢿⢽⣳⢿⢽⢯⣞⡯⣯⣟⡮⣗⣯⢯⡯⣟⣯⢿⣺⢾⣺⣗⣿⣺⢷⣻⣯⣷⢿⣞⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡿⣿⡻⣯⢿⠹⡭⣻⢿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣯⣿⣿⢪⠱⡸⡸⡸⣹⢪⢯⡺⡮⣯⣻⡽⡾⣽⣻⣺⣳⢯⣟⡾⡽⡽⣽⣳⢯⣟⡾⡽⡯⣟⡾⣽⣳⣗⡿⣽⣞⣯⣟⣯⣟⣯⣟⣯⣷⣻⢾⣽⣻⣽⣾⣻⡿⣽⣯⢿⣻⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣻⡊⢇⠣⡪⣳⡫⣟⡮⣗⢽⢽⣿⣿⣿⣯⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⢚⢔⢱⠱⡱⡱⣳⡹⣕⣯⣻⣺⣺⢽⢯⡷⣯⢷⣻⡽⡾⣽⢽⢯⣗⡯⣟⡾⡽⣯⣟⣷⣻⣳⣗⣷⣻⣗⣿⣺⣗⡿⣞⣷⣻⣞⡾⣽⣻⡾⣽⢷⣻⡷⣿⣻⣾⣻⣟⣟⣟⣟⣿⣻⣻⣟⣿⣻⣿⣻⣿⢿⣾⣿⣿⣿⣿⣿⣿⣻⢸⢈⠂⠅⠐⡑⢕⠯⣞⢧⡳⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢘⠔⢅⢇⢇⢗⢝⢮⡺⣕⢷⢵⣳⢯⢿⡽⣯⢿⡽⣗⡿⣯⢿⢽⣻⣺⡽⣯⢿⡽⣗⣷⣻⣞⣷⣟⣾⣗⡿⣞⣷⢯⣟⣯⣷⣻⢮⢯⣗⡯⣿⢽⡿⣽⣻⣽⣗⣿⣺⣗⣷⣳⢳⡳⣳⢳⢵⣳⢳⡳⣳⢽⢝⣞⢞⢮⡳⡳⡕⡧⡃⡢⢑⢑⠄⡁⠄⡂⢕⢕⢇⢏⢮⣺⢽⢽⢽⢽⢽⢯⢿⢽⢿⢽⢿⢿⢿⢿⡿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢩⠢⡣⢣⢣⢣⢳⢝⢞⢮⣳⣫⣗⢯⢯⡯⣯⢿⡽⣯⢿⡽⣽⢯⣟⡷⡯⡿⡽⣯⢿⡽⣯⡷⣟⣷⣻⣾⡽⣟⣯⣿⣽⣻⣞⡷⡯⡯⣗⣗⢯⣻⡽⣯⢿⣽⢾⣳⣟⣾⣺⣗⣯⣳⢝⡮⣫⣳⡳⣝⢾⢕⢯⡳⡳⡝⡕⡕⡕⢕⠕⢌⠢⢁⠢⠁⠄⠄⡪⡸⣸⡱⣕⢾⢮⡳⡽⡵⣫⢯⢯⣫⢗⡯⡯⡯⡯⡯⡯⡯⡯⣏⡯⣫⣟⣿⣿⣿⣿⣿⣿⡿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⢙⢔⠱⡘⡜⢜⢜⢎⢗⢽⢕⣗⡵⡯⡯⡯⡯⡿⣽⢽⡽⣽⢽⣽⣻⢾⡽⣯⣟⣯⢿⡽⣿⢽⣻⣽⣯⢿⣞⡿⣯⡿⡾⣞⣿⣺⢿⡽⡯⣗⡯⣟⢾⢽⢯⣟⣾⣻⡽⣞⣷⣳⣳⣳⢽⡱⣝⢵⡣⡫⣎⢗⢝⢕⢕⢕⢕⢑⢌⢊⠢⠡⡑⡨⠠⡈⡂⡈⠄⡊⡘⡂⢇⢎⢮⡳⡽⡽⣝⣗⢯⣳⣝⢷⢽⢽⢝⡾⡽⡽⣝⡽⣵⣫⡳⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣏⠢⡑⠅⡇⢎⢎⢎⢮⢫⡳⣝⢮⢞⡽⡽⡽⡽⡯⣯⢯⡯⣯⣟⣞⣞⡯⣟⣗⣟⡾⣯⢿⣽⣻⣽⢾⣽⢯⣿⢽⣯⣟⡿⣯⡷⣟⣯⣿⢽⣳⢯⡯⣿⢽⣻⣺⣞⡾⡽⣽⣺⣺⣺⡺⣕⢧⢳⡱⡕⣝⢜⢜⢜⢌⢆⢕⢐⠅⡢⠑⠌⠌⡢⠨⡈⡂⡂⠄⢂⠊⡪⡪⡓⡝⡮⣫⢯⣺⢵⡳⣯⡺⡮⡯⣫⣗⣟⢾⢽⣝⢾⣝⣞⣞⢮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡯⢯⡹⢭⡹⡱⡝⡽⡹⡡⡑⢌⠪⡘⡌⡎⡎⣎⢧⢳⢕⡽⣝⣞⢽⢽⢽⢽⡽⣽⢽⣳⣳⣳⡳⡯⣳⣻⣺⡽⡯⣟⣾⢽⣾⣻⣽⣻⢾⣻⣗⣿⡽⣷⣟⣯⡷⣿⢽⡽⡽⣽⢽⣽⣳⣗⡷⡯⡯⣗⣗⡯⡞⡮⡪⡪⡪⡪⡪⡪⢪⢊⠆⢕⢐⢢⢑⢌⠢⠣⢑⠡⠨⠄⣂⣲⣰⣨⣐⣀⣂⣆⢖⣞⣞⢷⣝⣞⢷⣝⡮⣯⡫⣯⣳⣳⡳⡯⡷⣝⣗⣗⣗⣗⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢿⢽⢽⢪⡣⣫⢣⢝⢕⢕⡕⡕⡕⡕⠰⠨⡂⢕⠱⡘⡜⡜⡜⡜⣎⢧⣫⡺⣪⢯⢯⢯⣗⡯⣯⣻⣺⣺⡪⡝⣭⣳⣳⣳⢿⢽⣻⣞⣿⣺⣗⣿⣺⢿⡽⣾⢷⣻⢷⡯⣷⣻⡽⣽⢽⢽⡽⣽⢾⣺⢾⢽⡽⡯⣗⣟⣞⢽⡸⡨⠢⡑⡅⡇⡕⠕⡅⡣⠱⡨⢂⠆⡢⠡⡡⠡⢈⣀⢗⣞⢮⣺⢮⣖⣗⢷⢽⢝⣞⢮⣳⣳⣳⣳⣳⢽⢮⣻⣺⣺⣺⡺⡽⣝⣗⣗⣗⣗⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⡻⡣⡳⡹⣪⢺⡸⡱⡹⡸⡸⡸⡸⡸⡸⡸⡘⡌⢜⠨⡂⢕⢅⢣⢱⢱⢱⢹⡸⡜⣖⣝⢮⢯⢯⣳⣳⢽⣺⣺⣺⢮⡫⡪⣎⢮⣺⣺⢽⢯⢷⣻⣺⣳⣗⡷⣯⢯⡿⡽⣽⢽⢯⢿⢽⢾⢽⢽⢽⢽⡽⣯⢿⡽⣯⢿⢽⣽⡳⣗⣯⡳⡣⢊⠌⡌⡢⡑⡌⣊⠢⡊⢌⠢⢑⠐⠄⡁⠄⣕⢵⢝⡽⣮⡻⣮⣳⡳⡽⣝⡽⣝⡾⣽⣺⣺⣺⡺⡮⡯⣗⣗⣗⣗⢷⢽⢽⣳⣳⣳⣳⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣻⡛⡞⣎⣖⢵⢝⢝⢎⢮⢪⡪⡪⡪⡪⡪⡪⢪⠪⡪⡘⠔⠌⢔⠨⡂⠕⢌⢪⢸⢸⢸⢱⡱⣝⡲⡵⡽⣕⣟⣞⢮⣻⣺⣺⣺⡳⡝⠔⡕⣕⢧⡳⡯⣯⣻⣺⣳⣳⢗⡿⡽⣽⢽⡽⣽⢽⢯⣻⢽⣫⢯⢯⣟⣽⢽⡽⣯⢿⡽⣯⣟⡾⣽⣳⣳⢽⠅⡢⢁⢂⠪⡐⢌⠢⡑⠨⡐⠨⠐⡈⠄⢔⢕⢵⢝⢵⢝⢮⣺⢺⣪⢞⡽⣪⢯⡺⣝⢞⡞⣮⣺⡺⡽⣝⢗⡗⣗⢽⢽⢽⡹⣚⡚⡎⢎⣟⢞⣗⣟⢾⣻⣻⣻⣟⣿⣻⣷⣿⣿⣿⣿⣿⣿⣿⣽⣿⣯⣿⣿⣿⣽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢿⢽⡳⡳⣕⢗⢵⡹⡹⣜⢜⢎⢧⢳⢱⢕⢕⢕⢕⢱⢑⢜⢌⢆⠣⢪⠨⡊⢌⠂⢅⠪⡘⢌⢪⢸⢸⢸⢱⡱⡕⣕⢗⣝⢮⡺⡮⣻⣺⣺⡺⡮⢯⢇⠕⡱⡱⡱⡝⡞⡮⣺⣺⣺⡺⡽⣽⣫⢯⡯⡯⣗⡯⣟⢮⡻⣪⢯⣗⣗⡯⣯⢿⡽⣯⣟⡷⣯⡯⣷⣳⢯⡯⣗⢐⠐⠄⠡⡈⡂⠅⠌⠂⡂⡁⡂⡆⢏⢎⢮⢪⡫⡮⣫⡣⡳⡝⣎⢗⢝⢎⢧⢫⡪⡇⣏⢮⢲⢹⢜⢜⢕⢕⠕⠕⢅⠕⠨⢐⠐⢌⢮⣺⢽⣺⣺⡽⣞⣾⣺⢞⣗⣟⣞⣗⡯⣞⣗⡯⡯⡯⣟⣽⣟⡿⣟⡿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⡿⡿⡿⡽⣝⣝⣕⢧⣫⡫⣎⢏⢧⢯⢺⡪⡳⡹⣜⢵⢱⢕⢕⢕⢕⢅⢇⢪⠢⡑⢅⠕⠨⠐⠄⡑⠄⡑⢌⠢⡑⡅⢇⢇⢧⢣⡫⡎⡧⡳⣝⢮⢯⣳⣳⡳⣝⡮⡯⡇⠂⠕⢜⢜⢎⢗⢝⢮⡺⣜⢾⢝⣗⢽⡳⡽⣝⣗⢽⢪⢣⢣⣳⢳⣳⡳⡯⡯⢯⢯⢗⡯⣟⣷⢿⢽⡽⣽⢽⢽⣒⢀⠁⠡⠄⠂⡁⡁⡂⡆⢆⢇⢎⢇⢇⢗⢕⢇⢏⢮⢪⢳⢹⢸⢪⢳⢹⢸⢱⠱⡍⡎⢎⠪⡪⡘⠔⢅⠢⠃⢅⠅⡊⠌⢄⢱⢹⢵⢯⣟⣞⣗⡯⣗⣷⣫⣟⣞⡷⣽⣺⢽⣽⣺⢽⢯⣻⢽⣺⣺⢽⣳⢯⢯⡯⣯⣻⣺⢽⣳⢯⣟⣿⣿⣿⣿⣿⣿⢿⣿
⣿⣿⣿⣿⣿⣟⣟⢟⡳⣳⢹⢪⢳⢹⢸⢸⠪⡓⢕⠕⡓⢝⠱⡙⡪⡊⢏⢚⢊⠪⢣⠣⡣⢣⠣⢪⢢⠣⡑⡈⠢⠨⠈⠄⠡⠠⢁⢂⠢⡁⡪⠨⢪⠸⡸⡸⡜⣎⢗⣝⢮⡳⣝⢮⣺⡪⣗⣝⢮⡊⠄⠅⢕⠸⡸⡸⡱⡕⣝⢮⡳⣝⢮⡳⡽⣝⢮⢺⠸⡌⡎⡎⣎⢗⡵⣱⢱⡹⡼⣜⢵⡫⣟⣾⣻⡽⣯⢯⢯⣻⡺⣔⠨⠠⡡⠱⡰⡘⢌⢜⢌⢖⢕⢕⢕⢕⢕⢕⢇⢇⢇⢇⢇⠇⡇⡣⡱⢡⠣⡑⢌⢌⠢⢑⠐⠌⠌⡐⠨⢈⢐⠐⢄⢑⢸⢼⢽⣝⣗⣗⣟⡾⣝⣷⡳⣗⣷⣳⢯⣗⡯⣟⣞⡾⣽⣻⣺⢽⣳⢯⣻⣺⢽⢯⣻⣺⣺⢞⣯⢯⣟⡾⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣗⣧⢧⣧⣧⣧⣵⣥⣧⣵⣵⣵⣽⣮⣷⣯⣯⣿⣽⣯⣿⣾⣯⣯⣿⣽⣯⣯⣿⣽⢯⡳⣕⢵⢬⡢⡥⡥⡥⡥⡥⡬⢤⢢⡰⡠⡪⡸⡰⡱⡱⡱⡱⣕⢧⡳⡵⣝⢮⡳⣣⢯⡺⡪⡇⡇⠄⠅⠢⡑⢕⢱⢱⢹⡸⡕⣝⢎⣗⢽⢕⢧⢳⢱⢹⢸⢘⢌⢜⢎⢮⢪⢎⢞⡺⣪⡳⣝⢵⡳⣯⢿⡽⡽⣽⣺⢽⣺⢌⠪⡐⠕⡌⢜⢌⢆⢇⢣⢪⠪⡪⡪⡪⢪⠪⡸⡐⢕⢌⠪⡨⡂⢎⠢⢑⢈⢂⠢⠨⠠⠡⢁⠅⡂⡑⡐⠄⡑⡐⠄⣗⡯⣗⣷⡻⡮⣗⣯⢷⣳⣻⣽⣺⢾⢽⢾⢽⣳⣗⣯⢷⣳⢯⣟⡾⣽⣺⢽⣽⣻⣺⣳⢯⢿⣝⣗⣷⣻⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢯⡫⡮⡳⣝⢮⡳⡳⣝⣝⢮⢯⡺⣪⢏⣗⢗⢽⡹⣝⢮⡳⡳⣝⢮⢯⢮⡳⡵⣝⢮⡳⡽⣕⢷⢝⣝⣞⢖⢶⢵⢕⣞⢼⡪⣞⢮⣺⡪⡮⣣⢇⣗⣝⢼⡸⣘⢌⣂⢢⢢⢱⢱⢹⢸⢸⢱⢹⢸⢸⢸⣸⣘⢭⢯⡯⡿⡵⣯⡻⡮⡯⡪⡘⢜⢌⢪⢂⢇⢕⢅⢣⠱⡑⢌⢊⠆⠕⢌⢌⠢⢂⠕⡐⠨⢐⠨⢐⠐⡐⠠⢑⠨⢈⢐⠐⡀⡂⠄⠅⠂⣂⢯⢾⢽⣻⢮⢿⢽⣻⣺⣽⣳⣻⣺⣞⡯⡿⣽⣻⣺⣞⡾⣽⢾⢽⣺⣽⣳⢯⣟⣞⣾⣺⣞⡯⣟⡾⡵⣗⣷⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢿⢽⡹⡪⣞⢝⢞⢮⡳⣝⢽⢜⢮⡳⡳⣝⢮⡳⡳⡽⡵⣝⢮⡳⣝⣝⢮⡳⣝⢞⢮⡫⣮⡳⣝⣞⢮⢯⡳⣳⢕⡯⣯⡺⣝⢮⣳⣝⢮⣳⡳⡽⣝⢷⣝⣞⢮⡳⡽⡮⣗⣗⢗⣗⢗⣗⢗⣗⢗⣗⡵⣳⣪⢞⣞⡮⡯⡯⡯⡯⣟⣮⣻⡪⣯⢲⡡⣃⢎⡢⣑⡑⡌⡢⡡⡑⢌⢊⠢⠑⢅⢑⠐⠌⡐⡐⠨⡈⡐⠨⢐⠨⠠⠑⡐⡈⡐⠠⢂⢂⠂⠌⠄⣑⢮⢯⣯⣻⣞⣯⢿⡽⣞⣗⣷⣻⣺⣳⣗⡿⣽⣳⣻⣺⢾⢽⡽⡽⡯⣗⡷⡯⣟⣞⣗⣷⣳⢯⡯⣷⣻⢽⣻⣞⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣟⢮⡣⣗⢵⢝⢽⡸⣝⣝⢮⡺⣪⡳⣝⢵⢝⣝⢮⡳⣝⣝⢞⡞⡮⡳⣝⢮⢮⡳⣝⢮⢯⡳⣝⣞⢮⡳⣕⢯⡳⣝⢮⣻⡺⣺⡪⣯⡳⣳⢵⣫⢞⡮⣻⡪⣗⣗⢗⡯⡯⡯⡾⣕⣗⡯⣞⡽⡮⡯⣞⡽⣮⣻⡺⡮⡯⣞⡽⡽⡽⡽⣝⣗⣗⡵⡯⣺⡳⡯⣗⣟⢾⢵⢯⢯⢯⢾⢽⢽⢵⣫⡯⡧⡧⡽⡬⣦⣪⢴⢤⣢⢥⢔⠤⡅⡆⡔⢄⠢⡁⡂⢐⠈⠨⢌⣮⡯⣟⣮⣗⡷⣯⢯⣯⢷⣻⣞⣾⣳⣗⣷⣻⣳⣻⢾⡽⣽⢯⢿⣽⣻⡽⣯⢿⡽⣞⣷⣳⢯⡿⣽⣳⢯⣟⡷⣯⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⢺⢜⣜⢞⢮⢮⡳⣝⢵⢝⢮⣪⡳⣝⢮⣺⡪⣏⢗⡗⣗⣝⢮⢮⡳⣝⢽⡹⡮⣫⡳⣝⣞⢽⢵⢝⣞⢮⡳⡽⣕⡯⣞⢽⣕⢷⢝⡮⡯⣺⢮⡳⡯⣞⣽⣺⡳⣝⣗⢗⡯⡾⡽⣝⢽⣺⡺⡮⣳⢯⢯⢯⣳⣻⡺⡺⡮⣯⣻⡺⡽⡽⡽⣝⣞⣞⡮⡯⣯⡳⣯⣻⣺⣺⢽⢽⢽⢽⢽⢽⢽⢽⢽⢮⢯⢯⢯⢯⣻⣺⣺⢽⢽⣺⢽⡽⣯⢯⣯⢯⡯⣯⣟⡾⣽⢽⡭⣓⢓⢫⡳⣳⣫⡻⣝⣟⣞⡯⣷⣳⢷⣳⣟⣞⡷⣯⢯⡯⣿⢽⢯⣟⣞⣷⣻⡽⣽⡽⣽⣞⡾⡯⣟⣗⣯⣟⡾⣽⢷⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⢽⢕⣗⢽⢕⡗⣗⢝⢮⡳⣕⢗⢽⢭⡳⣕⢗⡵⡳⡵⣝⢮⡳⣝⢮⢮⡫⡮⣫⢮⡳⣝⢮⡳⣝⣞⢮⡫⣞⢵⡳⣝⣞⢽⡺⣪⢗⡽⣪⢯⣳⣫⡻⡮⣳⢯⡻⣺⡺⣪⣞⣗⢽⣳⡫⡯⡯⣞⡽⣺⢮⢯⡳⣯⡳⡯⣞⣞⢾⢽⢽⣺⣺⡺⡽⡽⣝⣞⣞⡮⡯⡯⣞⣽⣺⣺⡺⡮⡯⡯⡯⡯⡯⡯⡯⡯⡯⡯⡯⡯⣯⣻⣺⢞⣞⡯⣟⡾⡯⣟⣾⣻⣞⣯⢯⣷⣗⡿⣽⢯⣟⢮⢊⡂⡪⡒⣆⢗⢵⣷⣷⣿⣾⣾⣯⣷⣫⣗⣯⡯⣯⢿⢽⢯⢿⣝⢷⣻⢾⣽⣳⢿⣳⡯⣿⢽⡯⣿⣺⣗⡿⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣽⣱⣱⣑⣕⣩⣑⣍⣪⡩⣱⢱⠵⡹⢕⠧⡫⢎⢗⠽⡺⡝⡮⡳⡝⡮⡺⡵⣝⣝⢮⡳⣝⢮⢗⢯⣺⣪⡳⣝⣞⢗⡽⣺⡪⣗⡽⡮⣻⡺⡽⣕⣗⢷⢽⢝⡾⡵⡻⡮⣻⡺⣺⡪⣗⢷⢽⢽⢝⣮⡻⡮⣯⣳⡻⡮⡯⡯⣞⡮⡯⣯⣳⣳⡳⡯⣯⣻⣺⡺⡮⡯⡯⣯⣳⣳⣳⡳⡽⡽⡽⡽⡽⡽⡽⡽⡽⣽⢽⢽⣫⢯⣗⣗⡯⡯⣗⡿⡽⡽⡯⣷⣳⣗⣟⡾⣻⣺⢷⣻⡽⢽⢾⢽⢸⢨⢪⢪⡺⡼⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣷⣷⣿⣽⣺⣽⣕⡿⡽⡷⣟⣯⢿⣽⣻⣾⣺⣽⢯⣟⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣗⠕⡈⡂⡊⠔⡁⢃⠊⠔⡐⠅⡪⢐⢑⢕⢑⢆⠣⡣⡓⡪⢓⠝⡚⡪⡓⢝⢎⢗⢝⢮⢳⢳⢝⣗⢽⡺⡽⣝⡽⣺⢮⡳⣝⢷⢽⢝⡽⣝⢮⢯⢯⣺⣺⡺⣝⢾⣝⡮⣯⣻⣺⡺⡮⣯⣻⣺⡺⡮⡯⡯⣯⣻⣺⣺⡺⡮⡯⡯⡯⡯⣯⢯⢯⡯⣟⣽⡳⡯⣟⡾⣽⣺⣺⢽⢽⣳⢯⢿⢽⢯⣗⣷⣻⣺⡽⣯⢿⢽⣗⢯⢺⡿⡽⡸⡜⣜⢮⡺⣺⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣽⣾⡵⣗⣟⣞⡯⣟⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢕⠠⢂⠄⠅⡂⠂⠅⡁⡂⠅⡐⡐⡐⡀⠢⠠⢁⠂⠔⡠⢑⠨⢐⢐⢘⢐⠡⠂⠕⠨⡂⠕⡡⠪⡊⢎⠪⡒⡹⡘⡕⡏⢗⢫⢫⡓⡟⡎⡯⡫⡳⣓⢗⡽⣝⢗⣗⢽⣺⣺⣺⡺⣝⣞⣞⢞⣞⡽⡽⣝⣞⣞⣞⢮⢯⢯⢯⢯⢯⢯⣗⡯⣟⣞⣗⣗⡯⣟⣗⡯⣗⣗⡯⣯⣟⡾⣽⢯⢿⡽⣾⣺⣗⣯⢿⣽⣝⣿⢪⡳⣹⡯⣯⢺⢜⢮⢺⡺⣺⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⡇⠌⠔⡨⠐⠄⠅⠅⡂⡂⠅⡂⠔⠠⠂⢅⢑⠠⠡⡁⡂⠢⠨⢐⢐⢐⢐⠌⠌⢌⢂⢆⢑⠌⡪⠨⡂⢅⢂⢂⢂⠢⡈⡂⢅⢂⠪⢐⠡⢊⠌⢌⠌⢌⠌⡢⢑⠌⡊⡢⢒⠔⠍⡎⠎⢎⠝⠬⠭⡹⡪⡺⡸⡪⡫⡫⡫⠯⠯⢯⠻⡮⢯⢟⣞⢾⢵⣻⡳⣗⣟⣗⣯⢯⣗⣷⣻⢽⢯⡯⣯⢷⣻⣺⣽⡻⡮⣾⢸⠵⡝⢼⣟⣮⡳⡕⣗⢽⣪⢷⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡣⠡⡁⡢⠡⠡⠡⡁⡂⡂⠅⡂⠅⢅⢑⢐⢐⢈⢂⢂⠪⠨⡈⡂⡂⡂⡂⡊⢔⠡⡊⢔⢑⠔⠌⠌⢄⢑⢐⢐⠅⡊⢔⠨⡐⢄⢑⠄⢕⠐⢅⠢⠡⡑⠌⢔⠡⡊⢔⠨⡂⢅⠕⠌⢜⢐⠅⡍⡊⡢⡑⢌⢌⢪⢘⢌⠎⡍⡝⢌⠇⡇⡇⡇⡇⡇⢧⢣⢫⢪⢎⠮⡍⣏⢮⢳⠽⡽⠯⡯⡯⡿⡽⣽⢾⣝⣽⢺⡸⣹⡪⣹⣷⡳⣝⢞⢮⣳⡳⡽⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡇⢅⠢⠨⠨⡈⡂⡢⠢⡈⡢⠨⠨⡐⡐⡐⡐⠔⡐⡐⡡⢁⢂⠢⠢⡑⢌⢌⢢⢑⠜⡨⢂⢅⠑⠅⢕⠐⢅⠢⡁⡪⠐⢅⠪⡐⢅⢊⠢⡑⢅⠪⡨⠢⡑⢅⠕⢌⠢⡑⢌⠢⡑⢍⢢⢑⡑⡌⡌⢆⢎⠪⡢⡑⢕⢸⠨⡪⡸⡰⡑⡅⡇⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡫⡪⡣⡣⡣⡳⡹⡸⣜⢜⢎⢖⢵⡱⣣⢻⡾⣝⢮⢏⣗⣗⢽⢽⣻⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⡢⠡⡃⠕⡐⢌⠐⢅⢂⠢⠡⡑⡐⡐⠌⢔⠡⡂⢅⠢⡑⢨⠨⡨⢌⢎⠢⡑⢔⠡⡊⠔⢄⠣⡑⠅⡅⢕⠨⡂⡪⢘⠄⢕⠨⡂⡊⡢⢊⠔⡡⡊⡌⡌⡢⡑⢅⢕⢘⢌⠪⡘⡌⡢⡱⢨⠢⡑⡕⢌⢪⢂⢇⢣⠱⡑⡕⢜⢔⠕⡕⡱⡑⡕⡜⡜⡜⡜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢎⢮⢪⢎⢮⢪⢪⡪⡺⡜⡮⣪⣻⡯⡯⣫⢗⣗⣗⢯⣻⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡗⠌⡌⠢⡑⡨⢐⠡⠡⡂⠅⢕⠐⢌⠢⠡⡑⡐⢌⢂⢊⢢⠱⢡⢊⢢⢑⡑⢌⠢⡑⢌⢌⠢⡑⢌⢌⠢⡑⢌⠢⡊⡢⡑⢅⠕⢌⠢⡊⡢⢱⠰⡨⠢⡊⡢⡊⢆⠪⡢⡑⡅⡣⡊⡆⡕⢅⢣⢱⠸⡸⡰⡑⡅⡇⡇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢎⢎⢎⢎⢎⢎⢎⢎⢎⢎⢎⢮⢪⡪⡪⡪⡪⡪⡪⣪⢪⡺⡸⡪⡇⡷⡽⣯⡻⡮⣗⣗⢷⣝⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⡌⢌⠪⡐⠌⡢⠡⡃⢌⠪⡐⢅⢑⠌⡪⢐⢌⠢⡑⢌⢢⢱⠡⠣⡡⠱⡨⠢⡑⢌⠢⡂⡣⡊⡢⡂⢇⢊⠆⡕⢌⠢⡊⡢⡑⡅⢕⢌⠪⢢⠱⡘⡌⡪⢢⢑⢕⢱⢨⠢⡣⡊⡆⡣⡪⢪⢊⢆⢇⢇⢎⠎⡎⡪⡪⡪⡪⢪⢢⢣⠣⡣⡱⡱⡱⡱⡱⣱⢱⢱⢱⢱⢱⢱⢕⢕⢕⢕⢝⢜⡪⡣⡫⡪⡪⣎⢮⢳⡹⣸⣟⣗⡯⣟⣞⢮⢷⢽⢽⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣗⠌⡢⡑⡐⢅⢊⠢⡊⢔⠡⢊⢔⢐⠅⡪⠰⡐⡱⡈⢎⢜⢐⠕⡑⢌⢊⠢⡑⡌⡢⡑⢌⠢⠪⡰⡘⠔⡅⢕⢌⢪⢘⠌⡆⢕⠜⢌⢆⢍⢆⢣⠱⡘⡌⢆⢣⢊⢆⠕⡕⢜⢌⢎⢜⠜⡌⡎⡪⡢⡣⡪⡪⡪⢪⠪⡢⡣⡣⡣⡱⡱⡱⡱⡱⡱⡱⡹⡸⡸⡪⡪⡪⡪⡪⡪⡪⡪⣪⢪⡪⡪⡪⣪⢪⢎⢎⡎⡧⡳⣸⡷⡯⡯⡷⡽⡽⡽⡽⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⢅⠢⡊⢌⠢⠢⡑⢌⠢⠡⡑⡐⢅⢪⠨⡊⡢⠣⡊⢆⠆⠥⡑⢅⠥⡡⡃⠕⢌⠢⡊⡢⡃⡣⡒⡸⠨⡊⡢⡱⡐⡅⡣⡊⢆⠣⡣⢢⢃⢎⢢⠣⡱⡸⡘⡌⢎⢢⢣⠱⡑⡜⡔⢕⠕⡕⢕⢕⢱⢱⢸⢨⢪⢪⢪⠪⡊⡆⡇⡣⡣⡣⡱⡱⡱⡱⡕⡕⡕⡕⡕⡕⡕⡕⡕⡕⡝⡜⡜⡜⡜⡜⣜⢜⢎⡕⣕⢧⢣⢳⣟⡯⡿⡽⡽⡽⡽⣽⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣷⢂⠕⢌⠢⡡⡑⢌⠢⡑⡑⢌⢪⢢⠣⡑⡕⢜⢌⢊⢢⠱⡑⢅⠕⡌⡢⡊⡪⠪⡨⡊⡢⡊⢆⢪⢘⢌⢪⠢⡊⡆⢕⢌⢎⠪⡪⢸⠰⡑⡜⢔⢕⢱⢘⢌⢎⢪⢊⢆⢇⢇⢕⢪⢪⢪⠪⡪⡊⡎⡪⡪⢪⠪⡪⡢⡫⢪⠪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡺⡸⡪⡪⡎⡮⡪⡎⡮⡪⣎⢇⢿⡽⡯⣟⣽⢽⢽⢽⣺⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠠⡑⢅⠕⡐⢌⠢⡑⢌⢌⠢⡣⡊⡎⠜⢌⢂⠆⡕⢌⠬⡨⡂⢇⢊⢆⢪⢘⢌⠆⡕⢌⢪⢨⠢⡣⢱⢘⢌⢪⢘⢌⠆⡎⡪⡸⡰⢱⠱⡸⡨⡢⡣⡱⢱⢘⢌⢎⠆⡇⢎⢪⠪⡢⡣⡣⢣⠣⡣⡣⡣⡣⡣⡣⡣⡪⡪⡪⡪⡪⡊⡎⡎⡎⡎⡎⡎⡮⡪⡪⡪⡪⡪⡪⡪⡺⡸⡪⣪⢪⡪⡪⣪⢪⡪⡺⡜⡮⡪⣺⣯⢿⢽⣺⡽⣯⣻⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⢐⠅⠕⢌⢌⠢⡑⡌⢆⠪⡨⡂⡪⡐⡅⢕⢔⢑⠌⡆⢕⠔⢅⠣⡑⡌⢆⠕⢔⢱⢘⢌⢆⢣⠱⡘⡌⡆⡣⡱⡡⢣⠱⡡⡣⢪⢸⢨⠪⡪⡸⡰⢱⠸⡸⡘⡜⡔⡕⡕⢕⢕⢕⢕⢜⠜⡜⢜⢜⢌⢎⢜⢌⢎⢪⢪⠪⡊⡎⡜⡜⡜⡌⡎⡎⡎⡎⡎⡎⡎⡎⡎⡎⡮⡺⡸⡸⡜⡜⡜⣜⢼⢸⢜⢜⢎⢞⢜⢮⣻⢾⢽⢯⣗⣟⣞⣞⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⢐⢕⠩⡂⢆⠕⢌⠢⡡⠱⡐⡌⡢⡊⢌⢢⠢⡑⡑⡌⢆⠕⢅⢣⠱⡘⢔⢱⠡⡃⢎⢢⠱⡘⡜⢌⢎⠜⡌⡆⡣⡃⡇⡕⡜⢜⢔⠕⡕⢕⢜⢸⢘⢜⠜⡌⡎⢆⢇⢎⢎⢆⢇⢎⢆⢇⢇⢇⢕⢕⢱⢑⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢝⢜⢜⢜⢜⢎⢇⢯⢺⢸⣺⢯⡯⣟⣞⣞⣗⣗⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⢸⠠⡃⡊⡢⡑⢅⢕⢘⠌⢆⠕⢔⢘⢌⢢⢑⢅⢕⠸⡐⠕⡅⢕⠱⡘⡌⢆⢣⠱⡑⡅⢇⢣⠪⡊⡆⢇⢣⠪⡪⡸⡰⢱⢸⢸⢰⢱⠱⡑⡅⡇⡕⢕⢱⢑⢕⠕⡅⡇⡎⡆⡇⡕⡅⡇⡕⡜⡜⡸⡸⡸⡸⡨⡢⡣⡱⣑⢅⢇⢕⢜⢔⢕⢕⢅⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢧⢓⢝⢜⢜⢎⢇⢧⢳⢹⢜⢵⢹⣺⢯⡯⣟⣞⣗⣟⣞⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡪⠢⡑⡑⢔⠸⡐⢔⠅⡕⢅⠕⢅⠕⡌⡢⡱⡐⡅⢕⢅⢣⢑⢅⠇⡕⢜⢸⢨⠪⡪⢸⢘⢔⠕⡕⢜⠜⡜⡸⡨⡢⢣⢣⢱⢸⢰⠱⡱⢱⢑⢕⠕⡕⢕⢕⢱⢑⢕⠕⡜⡌⡎⡪⡸⡨⡪⡪⡸⡸⡨⡢⡣⡣⢣⢣⢣⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢣⢣⢳⢱⢱⢕⢕⢵⢱⢱⡱⡕⡇⡯⣺⢸⡽⣯⢯⣟⣞⣗⣟⣾⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣪⢑⢅⠕⢅⢕⠸⡐⡱⢨⢂⠇⡕⡑⡌⢆⠪⡢⡑⢕⠌⡆⡣⡡⢣⢊⠎⡆⡣⡱⡸⡨⡊⡆⢇⢣⢃⢇⢕⠕⡜⡸⡨⡢⡣⡱⡸⡸⡘⡜⢜⢔⢕⠕⡕⡅⡇⡕⢕⢱⢑⢅⢇⢇⢣⢣⢱⢸⢸⢰⢱⢱⢱⢸⢸⢸⢨⢪⠪⡊⡎⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⣪⢪⡪⡪⣪⢪⡪⡪⡎⣗⢕⢽⢯⡯⣟⣞⣗⣿⣺⢾⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣺⢐⡑⡌⡒⢔⠱⡨⡊⡢⡑⡱⢨⠪⡨⡊⡪⢢⢑⢅⢣⢊⢆⢣⢑⢅⢇⢕⢱⢘⠔⡕⢜⢸⢘⢌⠎⡆⡣⡣⡱⡑⡅⡇⢎⢪⠢⡣⡱⡱⡑⡕⢜⠜⡌⡆⡇⡣⡣⡣⢣⠣⡣⡱⡑⡕⢕⢕⢱⢑⢕⢅⢇⢣⢣⢱⠱⡑⡕⡕⡕⡕⡕⢕⢕⢜⢜⢌⢆⢇⢇⢇⢇⢇⢇⢇⢏⢎⢎⢎⢮⢪⡪⡺⡸⡪⣎⢧⢻⡽⣯⣟⣾⣳⣟⡾⣽⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢾⢐⢌⢢⢑⢅⠕⢔⢑⢌⢪⢘⢔⠱⡨⢪⢨⠢⡃⢎⢢⢃⢎⠢⡣⢱⢨⢢⢣⠱⡑⡕⡱⡡⡣⡱⡑⡕⢕⢜⢌⢎⢜⢜⢸⢘⢜⢌⢆⢇⢕⢪⠪⡪⡊⡎⡜⡌⡆⡇⢇⢇⢣⢱⢱⠱⡱⡑⡕⡕⡅⡇⡕⡕⡅⡇⡇⡇⡇⡇⡕⡕⡜⡕⡕⡕⡕⡕⡕⡕⡕⡕⡕⡕⣕⢕⢇⢏⢎⢇⢇⢇⢇⢏⢎⡗⡵⡱⢽⡯⣷⣻⣺⣞⣷⣻⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⢐⠕⢌⢢⠡⡣⡑⡱⢨⠢⡱⢨⠪⡘⡔⢅⢣⠱⡑⢕⢌⢆⢇⢕⢅⢇⢪⠢⡣⢣⢱⠸⡰⢱⠸⡨⡪⢪⠢⡣⢪⠢⡣⡱⡑⡅⡇⡕⡅⡇⡣⡣⢣⢱⠱⡸⡘⡌⡎⢎⢪⠪⡪⡢⡣⡣⢣⢣⢱⢑⢕⢕⢱⢑⢕⢜⢌⢆⢇⢇⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢇⢏⢞⢜⢽⣯⢷⣻⣞⣷⢿⣺⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠰⡑⡅⢕⢑⢔⠱⡘⢔⠱⡘⡔⡱⡑⢜⢌⠆⡇⡣⢣⢊⢆⢕⢌⢆⢣⠱⡑⡕⢅⢇⢕⢕⢱⠱⡱⡸⡸⡘⡜⢜⢸⢨⢢⠣⡣⡪⢪⢸⢨⢪⢸⠸⡰⡱⡑⡕⡱⡑⡕⢕⠕⡕⢜⢔⢕⢕⢱⢸⠸⡰⡱⡱⡱⡱⡑⡕⡕⢕⢕⢱⢡⢣⢣⢱⢱⢑⢕⢕⢅⢇⢇⢇⢇⢇⢇⢇⢧⢣⢣⢣⢳⢱⢣⢫⡣⡫⣽⢯⣟⣞⡷⣿⢯⡷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢱⢑⠜⢌⠆⡕⢅⢣⠱⡑⢕⢸⢐⢕⢱⢘⢌⢎⢜⢌⢎⢢⠣⡪⡸⡨⡪⡪⡊⡎⢆⢇⢎⢪⠪⡊⡆⡣⡱⡸⡸⡘⡌⡆⡇⡇⡎⢎⢆⢇⢕⢅⢇⢇⢎⢎⢪⢊⢎⢪⠪⡪⢪⠪⡢⡣⡪⢪⢢⢣⢣⢱⢸⢰⢱⠱⡑⡕⡕⢕⠕⡕⡕⡕⡕⡕⡕⡕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢵⢱⢣⡫⡪⡾⣯⢷⡯⣟⣿⡽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⡱⡡⡑⡅⡣⡊⢎⠢⡣⡱⡑⢕⢌⢆⢣⠱⡑⡜⢔⠕⡜⢔⢕⢱⢘⢌⢆⢇⠎⡎⡪⡢⡣⡱⡱⡱⡑⡕⢕⢕⢜⠜⡜⡸⡨⡢⡣⡣⡱⡸⡨⡢⡣⡪⡢⡣⡱⡑⡕⡱⡑⡕⡕⢕⢕⢱⢸⠸⡰⡑⡕⡱⡑⡕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢵⢱⢣⢳⡹⡸⡽⣯⢯⡿⣽⣯⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣺⢐⠌⡆⡕⢜⠌⡎⡢⡱⡸⡨⡢⢣⠱⡑⡕⡱⡑⡕⡱⡑⡅⡇⡣⡣⡱⡸⡸⡘⡌⡆⡇⡕⡜⡌⡎⡎⢎⢆⢇⢣⠣⡣⡱⡱⡸⡨⡪⡸⡨⡪⡸⡰⡱⢸⢨⠪⡊⡎⡪⡪⡸⡘⡌⡎⡆⡇⡣⡱⡱⡱⡱⡑⡕⢕⢜⢔⢕⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢕⢕⢕⡕⣕⢕⢕⢵⢕⢕⣯⢿⡽⣽⢷⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢾⢐⢅⢣⠪⡢⢣⢱⢡⠣⡪⢢⠣⡃⡇⡣⡱⡡⡣⡪⢪⢊⢎⢪⢪⢸⢨⢪⠢⡣⡣⢣⢱⠱⡑⡕⢕⢜⢜⢔⢕⠕⡕⡱⡱⡸⡰⡑⡅⡇⡕⢕⢱⢸⢘⢜⢌⢎⢎⢪⢪⢸⢨⢪⠪⡊⡆⡇⡇⢇⢇⢎⢪⢸⢸⢸⢸⢸⢸⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢜⢕⢽⢸⣺⢯⡿⣽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⢿⢐⠥⡱⢱⠸⡘⡔⢕⠕⡕⢕⢕⠕⡕⢕⢕⢱⠱⡸⡸⡘⡜⢜⢔⢕⢕⢱⠱⡱⡸⡸⡸⡸⡸⡸⡸⡘⡬⡢⡣⡃⡇⡕⡜⡔⢕⢱⢑⢕⢱⢱⢑⢕⢱⢡⢣⢱⢑⢅⢇⢕⢅⢇⢣⢣⢱⢸⠸⡸⡨⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⡣⣫⢳⢕⡿⣽⢯⡷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣢⣓⢜⢜⢜⢜⢜⢜⢜⢜⢜⢔⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⠕⡕⡜⡜⡜⡜⡜⡌⡆⡇⡎⡎⡜⡜⡔⡕⡜⢜⢜⢌⢎⢪⢪⢪⠪⡪⡊⡎⡪⡊⡎⡪⡪⡸⡸⡘⡌⡎⡜⡌⡎⡪⡪⢢⢣⢣⢱⢱⠱⡕⡝⡜⡜⡜⡜⡜⡜⡜⢜⢜⢜⢌⢎⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⢪⡪⡪⡣⡳⡱⣝⢎⣯⢿⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣷⣗⣗⣵⣕⣕⣕⣕⣕⢕⡕⡵⡱⡱⣑⢅⢇⢇⢇⢇⢇⢎⢎⢎⢎⢎⢪⢪⢸⢸⢸⢸⢸⢘⢌⢎⡪⡸⡸⡸⡰⡱⡑⡕⡅⡇⡣⡣⡱⡑⡅⡇⡣⡣⡱⡸⡨⡪⢪⢸⢰⢑⢕⢱⢸⢸⢰⢱⢱⢱⢱⢕⢕⢕⢕⢜⢜⢌⢎⢎⢎⢆⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢇⢗⢝⣜⣵⢳⣻⡽⣞⣷⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣽⣮⣧⣷⢵⡵⡵⡵⣕⢵⢱⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢜⢜⢜⢌⢎⢎⢪⠪⡊⡎⡪⡪⡸⡨⡪⢪⢸⠰⡱⡘⡌⡎⡪⡪⡪⢪⢊⢎⢆⢇⢇⢇⢇⢇⢇⢇⢇⢣⢣⢱⢑⢕⢕⢱⢱⢱⢱⠱⡑⡕⡕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢮⡺⣕⣯⡿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣽⣽⣾⣼⣮⣮⡮⡮⡮⡮⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡪⡢⡣⡣⡣⡣⡱⡑⡕⡜⡜⢜⢌⢆⢇⢇⢇⢇⢇⢣⢱⢸⢨⢢⢣⢱⢡⠣⡣⡱⡑⡕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢕⢇⡗⣟⢜⡾⣯⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣷⣿⣾⣺⣞⣮⣮⣲⣕⣕⣕⣕⢜⢜⢜⢜⢌⢎⢎⢕⢕⢕⢕⠕⡅⡇⡎⢎⢪⢊⢆⢇⢎⢆⢇⢣⢣⢱⢑⠕⡕⢕⢕⢜⢜⢸⢸⢸⠸⡸⡸⡸⡘⡜⡜⡜⡜⡕⣕⢝⡮⡳⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣷⣿⣿⣷⣷⣷⣗⣷⣕⣧⣣⣣⣣⣱⣡⢣⡱⡱⡱⡑⡕⡜⡔⡕⡜⢜⢔⢕⢕⡑⡕⢕⢕⠕⡕⡕⡕⡱⡱⡱⡱⡸⡸⡸⡸⡸⡸⡸⡸⣕⢽⢝⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣽⣾⣮⣮⣮⣦⢧⣕⢬⢪⢪⢊⠎⡎⢎⢪⠪⡸⡸⡸⡸⡸⡸⡸⡸⡸⡸⡪⣎⢗⡯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣯⣷⣵⣽⣼⡼⣼⡸⣜⡜⣜⢜⢜⢜⢜⢎⢷⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣷⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣻⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`
*/



//let c = compressStringToString64(lorem2)

// console.log("\n\n\ncompressed:\n")
// console.log(c.length)

// console.log("\n\n\nDe-compressed:\n\n")
// console.log(decompressString64ToString(c).length)
//decompressString64ToString(c)




module.exports = { decompressString64ToString, compressStringToString64 }