function calcularGestacion() {
    const fumInput = document.getElementById("fum").value;
    const fechaBuscarInput = document.getElementById("fechaBuscar").value;
    const fechaEcoInput = document.getElementById("fechaEco").value;
    const semanasEco = parseInt(document.getElementById("semanasEco").value) || 0;
    const diasEco = parseInt(document.getElementById("diasEco").value) || 0;
    
    if (!fumInput && !fechaEcoInput) {
        document.getElementById("resultado").innerText = "Debes ingresar FUM o datos de ecografía.";
        return;
    }

    let fumDate;

    if (fechaEcoInput && (semanasEco > 0 || diasEco > 0)) {
        // Si se usa la ecografía, calcular FUM estimada
        let fechaEco = new Date(fechaEcoInput);
        let diasTotalesEco = (semanasEco * 7) + diasEco;
        fumDate = new Date(fechaEco);
        fumDate.setDate(fumDate.getDate() - diasTotalesEco);
    } else {
        // Usar FUM ingresada
        fumDate = new Date(fumInput);
    }

    if (fechaBuscarInput) {
        let fechaBuscar = new Date(fechaBuscarInput);
        let diferenciaDias = Math.floor((fechaBuscar - fumDate) / (1000 * 60 * 60 * 24));
        let semanas = Math.floor(diferenciaDias / 7);
        let dias = diferenciaDias % 7;

        let fechaParto = new Date(fumDate);
        fechaParto.setDate(fechaParto.getDate() + 280); // Fecha probable de parto

        document.getElementById("resultado").innerHTML = 
            `Para la fecha ${fechaBuscar.toLocaleDateString()}, la edad gestacional es: ${semanas} semanas y ${dias} días.<br>
            Fecha probable de parto: ${fechaParto.toLocaleDateString()}`;
    } else {
        let fechaParto = new Date(fumDate);
        fechaParto.setDate(fechaParto.getDate() + 280); // Fecha probable de parto

        document.getElementById("resultado").innerHTML = 
            `FUM estimada: ${fumDate.toLocaleDateString()}<br>
             Fecha probable de parto: ${fechaParto.toLocaleDateString()}`;
    }
}
