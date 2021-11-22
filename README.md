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
* CreateGame
    * req: /quiz-list
    * action: összeálíltáni az aktuális quizekből egy JSON-t
    * res: quizek neve és a leírása
* EnterTeamName
    * req: /team-name (in the URL)
    * action: store team name, generate PIN, store PIN
    * res: send PIN to admin
* JoinGame
    * req: /pin
    * action: create session ID
    * res: send session ID (??)