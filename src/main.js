import Actor from './Actor';
import Counter  from './Counter';
import Hello from './Hello';

const first_address = Actor.start(Counter);
const second_address = Actor.start(Hello);

function ready () {
    let el = document.getElementById('button');
    el.addEventListener('click', onclick);
}

function onclick() {
    console.log('to first_address:');
    Actor.send(first_address, ["logTotal"]);
    Actor.send(first_address, ["incrementBy", { number: 2 }]);
    Actor.send(first_address, ["logTotal"]);

    console.log('to second_address:');
    Actor.send(second_address, ["logTotal"]);
    Actor.send(second_address, ["incrementBy", { number: 20 }]);
    Actor.send(second_address, ["logTotal"]);
}

document.addEventListener("DOMContentLoaded", ready);
