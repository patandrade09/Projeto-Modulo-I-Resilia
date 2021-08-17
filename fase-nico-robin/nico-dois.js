function escolhaNico2() {

    var escolhaNico2 = ""

    while (true) {
        escolhaNico2 = prompt("1-Foge da coruja.\n 2-Espera a coruja e se prepara para atacar.")

        if (escolhaNico2 == 1) {

            window.location.href = "./nico_tres_GO.html"



        } else if (escolhaNico2 == 2) {

            window.location.href = "./nico_tres.html"


        } else { alert("Dado inválido - digite 1 ou 2 apenas") }
        break
    }
}