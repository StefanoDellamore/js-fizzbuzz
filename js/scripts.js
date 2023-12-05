// ciclo for

for (let contatore = 0;
    contatore <= 100;
    contatore ++   
) {
    console.log (contatore)
    const resto = contatore % 3;
    const restoDue = contatore % 5;

    if (resto == 0) {
        console.log (contatore,'fiz')
    }

    if (restoDue == 0) {
        console.log (contatore,'buz')
    }

    if (resto, restoDue == 0) {
        console.log (contatore, 'fizbuz')
    }
    
}


