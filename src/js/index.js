import '../scss/main.scss';

/* place your code below */
const name = "Dominik";
const age = 30;

console.log('HELLO 🚀')

console.log(`Hello my name is ${name}, i'm ${age} year old`);
console.log(name + " wita na swojej stronie");

typeof name;
console.log(typeof name);
console.log(typeof age);
console.log(typeof computer);

const hello = document.querySelector(`.javascript-content--js`);
hello.innerHTML = `Hello! <em>this message generate from JavaScript !!</em>`;

//  const greeting =
function helloWorld() {
  return (document.querySelector(
    `.hello-world--js`
  ).innerHTML = `witaj świecie !!!`);
}
helloWorld();
const greetings = (myGreetings) =>{
  return (document.querySelector(`.greetings--js`).innerHTML = myGreetings);
}
greetings(`helloł`);
