function verifyWinner(){

    //Data
    let nameRacer1 = document.getElementById('nameRacer1').value
    let ageRacer1 = document.getElementById('ageRacer1').value
    let timeRacer1 = document.getElementById('timeRacer1').value

    let nameRacer2 = document.getElementById('nameRacer2').value
    let ageRacer2 = document.getElementById('ageRacer2').value
    let timeRacer2 = document.getElementById('timeRacer2').value

    //verifiers
    let firstRacer = document.getElementById('timeRacer1').value
    let secondRacer = document.getElementById('timeRacer2').value

    let verifierArray = [nameRacer1, nameRacer2, ageRacer1, ageRacer2, timeRacer1, timeRacer2]

    let flag = true

    for (let i = 0; i < verifierArray.length; i++){
        if (verifierArray[i] === ""){
            flag = false
            swal({
                title: "¡Recuerda que debes ingresar todos los campos!",
                text: "Error",
                icon: "error",
            });
            break
        }
    }

    console.log(`${firstRacer} ${secondRacer} ${flag}`)

    if ((parseInt(firstRacer) > parseInt(secondRacer) && flag === true)){
        swal({
            title: "Corredor 2 Gana!",
            text: `Nombre: ${nameRacer2}\nEdad: ${ageRacer2}\nTiempo 1/4 milla: ${timeRacer2}Seconds`,
            icon: "success",
        });
    } else if ((parseInt(firstRacer) < parseInt(secondRacer)) && flag === true){
        swal({
            title: "Corredor 1 Gana!",
            text: `Nombre: ${nameRacer1}\nEdad: ${ageRacer1}\nTiempo de 1/4 milla: ${timeRacer1}Seconds`,
            icon: "success",
        }); 
    } else if ((parseInt(firstRacer) === parseInt(secondRacer)) && flag === true){
        swal({
            title: "¡Es un Empate!",
            text: "Felicitaciones",
            icon: "success",
        });
    }
}