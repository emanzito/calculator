function adicionarNumero(numero) {
  var input = document.getElementById("resultado");
  //nao sei oque isto faz, pedi ajuda ao chatgpt
  input.value = input.value === "0" ? numero : input.value + numero;
}

function adicionarSinal(sinal) {
  var input = document.getElementById("resultado");
  var ultimoCaractere = input.value.slice(-1);

  //Também perguntei isto ao chatgpt
  if (!["+", "-", "*", "/"].includes(ultimoCaractere)) {
    input.value += sinal;
  }
}

function removerUltimo() {
  var input = document.getElementById("resultado");
  if (input.value.length > 1) {
    // Remove o último caractere
    input.value = input.value.slice(0, -1);
  } else {
    // Se só sobrar um caractere, volta para "0"
    input.value = "0";
  }
}

function soma() {
  window.alert(nm1 + nm2);
}

function subtracao() {
  window.alert(nm1 - nm2);
}

function multiplicacao() {
  window.alert(nm1 * nm2);
}

function divisao() {
  if (nm1 === 0 || nm2 === 0) {
    window.alert("Não é possivel dividir por 0!");
    return;
  } else {
    window.alert(nm1 / nm2);
  }
}
