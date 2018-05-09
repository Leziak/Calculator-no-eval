let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let input = document.getElementById('input');
let acc = 0;

let addition = () => {
    acc+=Number(input.value);
    console.log(acc);
    input.value='';
}

let substraction = () => {
    acc-=Number(input.value);
    console.log(acc);
    input.value='';
}

let multiplication = () => {
    acc*=Number(input.value);
    console.log(acc);
    input.value='';
}

let division = () => {
    acc/=Number(input.value);
    console.log(acc);
    input.value='';
}

let equals = () => {
    input.value = acc
    acc=0;
    console.log(acc);
}