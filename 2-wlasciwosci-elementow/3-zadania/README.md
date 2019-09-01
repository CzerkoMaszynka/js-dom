![](../../../kursjs.png)

# KursJS - DOM

## Zadanie 1
Napisz konstruktor/klasę "HTMLInfo" który będzie miał 2 początkowe właściwości:
* **selector** - string podawany przy tworzeniu instancji. Oznacza selektor użyty do pobrania elementów np. `.btn`
* **elements** - pseudo tablica elementów pobranych ze strony przy wykorzystaniu powyższego selektora np. `document.querySelectorAll(this.selector)`

Załóżmy, że zawsze pobieramy wiele elementów - nawet jak wiemy, że będzie tylko jeden.

Niech konstruktor ma dodatkowe wspólne dla wszystkich instancji metody:

* **showElements()** - wypisuje w konsoli wszystkie elementy `elements`
* **showTags()** - wypisuje w konsoli tagi elementów `elements`
* **showCount()** - wypisuje liczbę elementów `elements`
* **showClass()** - wypisuje klasy wszystkich elementów `elements`
* **showHtml()** - wypisuje html z wszystkich elementów `elements`
* **showData()** - wypisuje wszystkie atrybuty data- z wszystkich elementów `elements`

## Zadanie 2
Stwórz nową instancję na bazie naszego elementu. Przekaż jej selektor, którym wybierzesz wszystkie elementy wewnątrz elementu `.test` na stronie.
Następnie odpal wszystkie powyższe metody sprawdzając czy działają.