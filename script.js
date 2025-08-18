document.getElementById("btnMaiusculo").addEventListener("click", function() {
            let texto = document.getElementById("maiusculo").value;
            document.getElementById("resultadoMaiusculo").textContent = texto.toUpperCase();
        });

        
    // Botão copiar manual (maiusculo)
    document.getElementById("copyMaiusculo").addEventListener("click", function() {
      let texto = document.getElementById("resultadoMaiusculo").textContent;
      if (texto) copiarTexto(texto);
    });

        
        document.getElementById("btnCpf").addEventListener("click", function() {
            let cpf = document.getElementById("semPonto").value;
            let apenasNumeros = cpf.replace(/\D/g, "");
            document.getElementById("resultadoCpf").textContent = apenasNumeros;
        });

        document.getElementById("copyCpf").addEventListener("click", function() {
      let texto = document.getElementById("resultadoCpf").textContent;
      if (texto) copiarTexto(texto);
    });

        
        document.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); 
                if (document.activeElement.id === "maiusculo") {
                    document.getElementById("btnMaiusculo").click();
                } else if (document.activeElement.id === "semPonto") {
                    document.getElementById("btnCpf").click();
                }
            }
        });

function copiarTexto(texto){
    navigator.clipboard.writeText(texto).then (() => {
        alert("Resultado copiado para área de transferência");
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (document.activeElement.id === "maiusculo")  {
          document.getElementById("btnMaiusculo").click();
        } else if (document.activeElement.id === "semPonto") {
          document.getElementById("btnCpf").click();
        }
    }
})