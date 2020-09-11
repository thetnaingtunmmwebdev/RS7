const fs = require('fs');

console.log('Proces one\n');

fs.readFile('data.txt', 'utf-8', function(err, data) {
    console.log(data);
});

console.log('More Process');