document.getElementById("btnMaiusculo").addEventListener("click", function() {
            let texto = document.getElementById("maiusculo").value;
            document.getElementById("resultadoMaiusculo").textContent = texto.toUpperCase();
        });

        
        document.getElementById("btnCpf").addEventListener("click", function() {
            let cpf = document.getElementById("semPonto").value;
            let apenasNumeros = cpf.replace(/\D/g, "");
            document.getElementById("resultadoCpf").textContent = apenasNumeros;
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