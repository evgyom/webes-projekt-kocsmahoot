# Kocsmahoot

## Frontend fejlesztői beröffentés:

0. Legyen telepítve npm
1. `git clone https://github.com/evgyom/webes-projekt-kocsmahoot`
2. `cd kocsma-kahoot-projekt/kocsma-kahoot-frontend-routing`
3. `npm install`
4. `npm run serve`

## Deployment

* `npm run build`
* a dist mappába pakolja, a lefordított dolgokat.

## Nodejs szerver

### Indítás
* `cd kocsma-serve`
* `npm install` (csak egyszer a dependenciák telepítéséhez)
* `node  server`

### összekötés a frontenddel
* az assets/dist mappa helyére kell berkani a legfrissebb frontend fájlokat


## Kommunikáció

* /quiz-list 
    * összes quizhez küld
    * ID, name, description

* /quiz-questions?quizID=xxxxx&teamName=xxxxxxxxx_xxxx
    * elküldi a szervernek a quiz-id-t és a team-name-et
    * a szerver visszaküldi:
        * adott quiz össze kérdéséhez: question-id, layout-id, kérdés, válasz1, válasz2, válasz3, válasz4
        * PIN

* /join-game?game-pin=953353133215
    * egy guest akar csatlakozni a játékhoz
    * a szerver visszaadja:
        * adott quiz össze kérdéséhez: question-id, layout-id, kérdés, válasz1, válasz2, válasz3, válasz4
        * aktuális kérdés

* /submit-quiz
    * ez egy POST request lesz
    * küld egy JSON-t:
        * PIN, valaszok

* /get-leaderboard
    * az összes eddigi eredményt elkéri
    * szerver visszaadja:
        * 

## Megoldandó szarságok
* újratöltéskor befosódunk, mert a szerver nem tud jó választ adni a ./ize dolgokra.
    * minden ilyen ./ize -re vissza mehetnénk a kezdőoldalra
* a vissza gombra néha jobb lenne, ha máshova menne vissza (pl. nem az enter)