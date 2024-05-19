//função normal
function soma(num1, num2){
  som = num1 + num2;
  return som;
}

//Arrow function
const somar = (x , y) => {
    return x + y;
}
//Arrow function mais resumida()
const some = (a, b) => a + b;

console.log(soma(6, 24))
console.log(somar(5, 123))
console.log(some(23, 6))