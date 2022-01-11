let val = 'b';
let others = ['b', 'c', 'd', 'e'];

if (val === 'a') {
    console.log('a');
} else if (others.includes(val)) {
    console.log('others');
} else {
    console.log('unknown');
}