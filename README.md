# Kocsmahoot

## Frontend fejlesztői indítása:

0. Legyen telepítve npm
1. `git clone https://github.com/evgyom/webes-projekt-kocsmahoot`
2. `cd kocsma-kahoot-projekt/kocsma-kahoot-frontend-routing`
3. `npm install`
4. `npm run serve` (így nem működik a szerverrel való kommunikáció)

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
* az assets/dist mappa helyére kell berkani a legfrissebb frontend fájlokat (az egész dist mappát kell kicserélni)