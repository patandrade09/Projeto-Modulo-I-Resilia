function escolhaNami1() {

    var escolhaNami1 = ""

    while (true) {
        escolhaNami1 = prompt("1-Corre desesperadamente de medo.\n 2-Segue a coruja discretamente.")

        if (escolhaNami1 == 1) {

            window.location.href = "./nami_dois_GO.html"


        } else if (escolhaNami1 == 2) {

            window.location.href = "./nami_dois.html"

        } else { alert("Dado inválido - digite 1 ou 2 apenas") }
        break
    }
}