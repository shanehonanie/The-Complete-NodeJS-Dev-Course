console.log('strt ');

setTimeout(() => {
    console.log('Inside of cllbck');
}, 2000);

setTimeout(() => {
    console.log('2nd cllbck');
}, );

console.log('Finishing up');