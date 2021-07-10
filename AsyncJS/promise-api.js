const log = require('debug')('app:db');
const p = Promise.resolve({ id:1 });
p.then(result => log(result));

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        log('operation 1 ...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        log('operation 2 ...');
        resolve(2);
    }, 4000);
});

Promise.all([p1, p2])
    .then(result => log(result));

