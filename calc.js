let equal_pressed = 0;
// Todos os botões menos AC e Del

let button_input = document.querySelectorAll(".input-button");

//Ao input, equal, clear e erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

//Acesso a classes usando forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    //Mostra o valor de cada botão
    input.value += button_class.value;
  });
});

//Resolve o input quando clicado
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    let solution = eval(inp_val);
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //Se o usuário utilizar um valor inválido
    alert("Inválido");
  }
});

//Deleta tudo
clear.addEventListener("click", () => {
  input.value = "";
});

//Deleta singulamente
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});