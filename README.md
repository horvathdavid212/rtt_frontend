## Telepítés

Ezekkel a lépésekkel klónozhatod és futtathatod a projektet a helyi gépeden.

**Klónozd a Repót**
   
   ```bash
   git clone https://github.com/horvathdavid212/rtt_frontend
  ```

## Docker

Ez az alkalmazás Docker segítségével is futtatható. Ehhez először telepítened kell a Docker Desktop alkalmazást, ha még nem tetted meg.

### Alkalmazás Futtatása Dockerrel

Miután telepítetted és elindítottad a Docker Desktopot, a következő parancsot használhatod az alkalmazás elindításához:

```bash
docker-compose up
```

Ez a parancs elindítja az összes szükséges szolgáltatást a docker-compose.yml fájlban megadott konfiguráció alapján. Amint a szolgáltatások elindultak, megnyithatod a böngésződet a következő címen: http://localhost:5173.

Ez az útmutató leírja, hogyan lehet Docker segítségével elindítani az alkalmazást és hogyan lehet a Docker-t használni a fejlesztés során. Fontos, hogy a `docker-compose.yml` fájlodban a portok és egyéb beállítások megfeleljenek az alkalmazásod specifikációinak. Az útmutatóban szereplő portokat és utasításokat szükség szerint módosítsd a projekt sajátosságaihoz igazodva. Valamint a `Dockerfile` mezőit se felejtsd el átírni, ha szükség lenne rá.

