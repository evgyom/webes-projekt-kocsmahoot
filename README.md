# Kocsmahoot

## Frontend fejlesztői beröffentés:

0. Legyen telepítve npm
1. `git clone https://github.com/evgyom/webes-projekt-kocsmahoot`
2. `cd kocsma-kahoot-projekt/kocsma-kahoot-frontend-routing`
3. `npm install`
4. `npm run serve`

### Deployment

* `npm run build`
* a dist mappába pakolja, a lefordított dolgokat.

## Nodejs szerver

### MySQL telepítés
1. Linkről letölteni a MySQL-t (https://dev.mysql.com/downloads/installer/)
2. Az Authentication method fülön a Use Legacy Authentication Method-ot kell választani.
3. Ahol először megadsz Usert ott ökmindegy a jelszó de szerintem az is legyen az egységes jelszó, amit berakok majd a csopiba.
4. Ezt a felhasználót addolni is kell majd de majd irányít a telepítő.
5. Ahol felajánlja hogy a user legyen root, ott maradjon root, és a jelsó legyen ami a csopiban van.
6. Mást asszem nem kellett it módosítani.
7. A Viisual Studioban: npm install mysql
8. És kész

### Indítás
* `cd kocsma-serve`
* `npm install` (csak egyszer a dependenciák telepítéséhez)
* `node  server`

### összekötés a frontenddel
* az assets/dist mappa helyére kell berkani a legfrissebb frontend fájlokat


## Kommunikáció
Minden request egy get

* /quiz-list 
    * összes quizhez küld
    * ID, name, description

* /quiz-questions?quizID=xxxxx&teamName=xxxxxxxxx_xxxx
    * elküldi a szervernek a quiz-id-t és a team-name-et
    * a szerver visszaküldi:
        * adott quiz össze kérdéséhez: question-id, layout-id, kérdés, válasz1, válasz2, válasz3, válasz4
        * PIN

* /join-game?pin=953353133215
    * egy guest akar csatlakozni a játékhoz
    * a szerver visszaadja:
        * adott quiz össze kérdéséhez: question-id, layout-id, kérdés, válasz1, válasz2, válasz3, válasz4
        * aktuális kérdés
    * valid-pin = 1 // valid-pin = 0

* /current-question?pin=953353133215
    * a guest kéri le a szervertől az aktuális kérdés id-t
    * válasz:
        * active question-id

* /active-question?pin=953353133215&questionID=5
    * ez egy jelzés a szervernek az admin klienstől
    * válasz:
        * OK!

* /cancel?pin=953353133215
    * ez is egy jelzés a szervernek. az adott quiz session cancellve lett
    * válasz:
        * CANCELLED!

* /submit-quiz
    * ez egy POST request lesz
    * küld egy JSON-t:
        * PIN, valaszok

* /get-leaderboard
    * az összes eddigi eredményt elkéri
    * szerver visszaadja:

## Megoldandó szarságok
* újratöltéskor befosódunk, mert a szerver nem tud jó választ adni a ./ize dolgokra.
    * minden ilyen ./ize -re vissza mehetnénk a kezdőoldalra
    * https://stackoverflow.com/questions/36434978/how-to-redirect-to-another-page-in-node-js
* a vissza gombra néha jobb lenne, ha máshova menne vissza (pl. nem az enter)
* cancel request-et küldeni, amikor bezár az oldal. most csak az megy, hogy a "Are you sure you want to leave the page?" promptra elküldjük a cancel requestet