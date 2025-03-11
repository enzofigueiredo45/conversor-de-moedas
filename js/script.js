document.getElementById("converter").addEventListener("click", function() {
    const valor = parseFloat(document.getElementById("valor").value);
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    
    if (isNaN(valor) || valor <= 0) {
      alert("Por favor, insira um valor válido.");
      return;
    }
  
    const apiKey = "42cc5e32c0254300694915e2";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${moedaOrigem}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.result === "success") {
          const taxa = data.conversion_rates[moedaDestino];
          const resultado = valor * taxa;
          document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(2)} ${moedaDestino}`;
        } else {
          alert("Erro ao buscar taxas de câmbio.");
        }
      })
      .catch(error => {
        alert("Erro na requisição: " + error.message);
      });
  });
  