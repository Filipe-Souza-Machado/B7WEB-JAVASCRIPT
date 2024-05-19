
function verificar_idade(idade){
  let maior = `É maior de idade`;
  let menor = `É menor de idade`;
  
  if (idade >= 18){
    return maior;
  }else{
    return menor;
  }
}

idede_Do_Usuario = 19;

console.log(verificar_idade(idede_Do_Usuario));