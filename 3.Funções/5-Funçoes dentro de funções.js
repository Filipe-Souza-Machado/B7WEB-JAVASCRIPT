
function addSquares(a, b){
  const square = (x) =>{
    return x * x;
  }
  
  sqrA = square(a);
  sqrB = square(b);
  return sqrA + sqrB;
}

console.log(addSquares(4, 8));