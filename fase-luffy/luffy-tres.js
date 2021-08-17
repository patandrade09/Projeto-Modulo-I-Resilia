function escolhaLuffy3() {

    var escolhaLuffy3 = ""

    while (true) {
        escolhaLuffy3 = prompt("1- Já manda um GOMU GOMU NO na corujona. \n 2- Tenta entender qual é a da corujona e daquele lugar doido.")

        if (escolhaLuffy3 == 1) {

            window.location.href = "./luffy_dois_GO.html"



        } else if (escolhaLuffy3 == 2) {

            window.location.href = "./luffy_quatro.html"


        } else { alert("Dado inválido - digite 1 ou 2 apenas") }
        break
    }
}