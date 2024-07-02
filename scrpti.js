function somarNumeros() {
  var valorA = parseInt(document.getElementById("numberA").value);
  var valorB = parseInt(document.getElementById("numberB").value);
  
  if (!isNaN(valorA) && !isNaN(valorB)) {
      var soma = valorA + valorB;
      
      alert("A soma é: " + soma);
  } else {
      alert("Por favor, insira números válidos.");
  }
}

document.getElementById('vermelhoBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
  });

  document.getElementById('verdeBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
  });

  document.getElementById('azulBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
  });

  document.getElementById('amareloBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
  });
  document.getElementById('vermelho').onmouseover = function() {
    changeColor('red');
  };
  document.getElementById('verde').onmouseover = function() {
    changeColor('green');
  };
  document.getElementById('azul').onmouseover = function() {
    changeColor('blue');
  };
  document.getElementById('amarelo').onmouseover = function() {
    changeColor('yellow');
  };

  function changeColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  document.getElementById('cores').onchange = function() {
    var selectedColor = this.value;
    document.body.style.backgroundColor = selectedColor;
  };


  function Paragrafo() {
    var paragrafo = document.getElementById("paragrafo");
    if (paragrafo.style.display === "none") {
      paragrafo.style.display = "block";
    } else {
      paragrafo.style.display = "none";
    }
  }

document.getElementById("botao").addEventListener("click", Paragrafo)

function verificarDivisibilidade(numero) {
  if (numero === 0) {
      return "Fim do programa.";
  }
  if (numero < 0) {
      return "Por favor, insira apenas números positivos.";
  }
  if (numero % 3 === 0 && numero % 5 === 0) {
      return numero + " é divisível por 3 e 5 ao mesmo tempo.";
  } else {
      return numero + " não é divisível por 3 e 5 ao mesmo tempo.";
  }
}
function verificarNumero() {
  var entrada = parseInt(document.getElementById("numero").value);
  var resultado = verificarDivisibilidade(entrada);
  alert(resultado);
  if (entrada !== 0) {
      document.getElementById("numero").value = ""; // Limpa o campo de entrada
  }
}
