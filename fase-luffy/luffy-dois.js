function escolhaLuffy2() {

    var escolhaLuffy2 = ""

    while (true) {
        escolhaLuffy2 = prompt("1- Despeja um golpe na corujona.\n 2- Escuta a Nami e segue a coruja de fininho para ver se acham ouro.")

        if (escolhaLuffy2 == 1) {

            window.location.href = "./luffy_dois_GO.html"



        } else if (escolhaLuffy2 == 2) {

            window.location.href = "./luffy_tres.html"


        } else { alert("Dado inválido - digite 1 ou 2 apenas") }
        break
    }
}