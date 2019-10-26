
// 4) Po kliknięciu na każdy link w menu zrób następujące czynności:
//     - zatrzymaj domyślną akcję
//     - wszystkim LI poza tym w którym znajduje się kliknięty link dodaj klasę `.collased`
//     - rodzicowi klikniętego linka dodaj klasę `.expand`
//     - rodzicowi klikniętego linka dodaj event "transitionend", w którym podepniesz funkcję przez nazwę (nie anonimową).

//     Funkcja ta może się dla przykładu nazywać expandElementTransitionEnd.
//     W funkcji tej:
//     - usuń event transitionend który właśnie dodałeś
//     - wypisz w konsoli href linka w tym LI (alternatywnie użyj `location.href = pobranyHref`)
// 5) Dodatkowe dla chętnych:
//     W powyższej funkcji którą podpiąłeś pod zdarzenie transition end:
//     - stwórz dodatkowo nowy element który jest buttononem z klasą `.close` i tekstem Zamknij
//     - element ten dodaj do tego LI

//     Po kliknięciu na `.close` rodzicowi usuń klasę `.expand`
//     Wszystkim LI usuń klasę collapsed
//     Usuń klikniety `.close`

document.addEventListener('DOMContentLoaded', function() {

    function expandElementTransitionEnd() {
        //this === LI któremu poniżej dodałem event transitionend
        this.removeEventListener("transitionend", expandElementTransitionEnd)
        const link = this.querySelector('a');
        console.log(this.getAttribute('href'))

        const btn = document.createElement('button');
        btn.classList.add('close');
        btn.innerText = "Zamknij";
        this.appendChild(btn);

        btn.addEventListener("click", function() {
            for (const el of li) {
                el.classList.remove('expand')
                el.classList.remove('collapsed')
            }
            this.remove();
        })
    }

    const menu = document.querySelector("#menu");
    menu.classList.add('menu');

    const links = menu.querySelectorAll('a');
    const li = menu.querySelectorAll('li');

    for (const el of li) {
        el.addEventListener("mouseenter", function() {
            console.log(this);
            for (const el of li) {
                el.classList.remove("active");
            }
            this.classList.add("active");
        });
    }

    for (const el of links) {
        el.addEventListener("click", function(e) {
            e.preventDefault();
            for (const el of li) {
                el.classList.add("collapsed");
            }
            this.parentElement.classList.remove('collapsed');
            this.parentElement.classList.add("expand");
            this.parentElement.addEventListener("transitionend", expandElementTransitionEnd);

        });
    }

});

