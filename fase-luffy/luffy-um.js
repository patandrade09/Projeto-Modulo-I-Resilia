function escolhaLuffy1() {

    var escolhaLuffy1 = ""

    while (true) {
        escolhaLuffy1 = prompt("1- Manda o GOMU GOMU NO na corujona antes que ela ataque.\n 2- Se concentra em achar a Nami.")

        if (escolhaLuffy1 == 1) {

            window.location.href = "./luffy_dois_GO.html"


        } else if (escolhaLuffy1 == 2) {

            window.location.href = "./luffy_dois.html"

        } else { alert("Dado inválido - digite 1 ou 2 apenas") }
        break
    }
}