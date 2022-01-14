const puppeteer = require("puppeteer");

//Keys and values to export to the api
//Code from https://github.com/C4rluX/universocraft-stats-scrapper/blob/main/scrape-universocraft-stats.js


var getUserStats = async (username) => {
    if (!username) throw new Error('Username is required');
	if (typeof username !== "string") throw new Error('Username must be a string');
    if (username.length < 3) throw new Error('Username must be at least 3 characters long');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://stats.universocraft.com/stats.php?player=${username}`);
    const stats = await page.evaluate(() => {

        const gamemodesKeyNames = {
            "Destruye el Nexus": "destroyTheNexus",
            "SkyWars": "skywars",
            "LuckyWars": "luckyWars",
            "EggWars": "eggwars",
            "BedWars": "bedwars",
            "TeamSkyWars": "teamSkywars",
            "SpeedBuilders": "speedBuilders",
            "BuildBattle": "buildBattle",
            "Escapa de la Bestia": "runFromTheBeast",
            "Party Games": "partyGames",
            "Juegos del Hambre": "hungerGames",
            "SkyPit": "skyPit",
            "ArenaPvP": "arenaPvp",
            "UHC": "uhc",
            "MurderMystery": "murderMystery",
            "Captura la Lana": "captureTheWool"
        };

        const statsKeyNames = {
            "VICTORIAS": "victories",
            "ASESINATOS": "kills",
            "ASESINATOS CON ARCO": "killsWithBow",
            "MUERTES": "deaths",
            "DAÑOS AL NEXUS": "damageToNexus",
            "DESTRUCCIONES DEL NEXUS": "nexusDestructions",
            "BLOQUES COLOCADOS": "blocksPlaced",
            "BLOQUES DESTRUIDOS": "blocksDestroyed",
            "MENAS DESTRUIDAS": "destroyedOres",
            "TRONCOS DESTRUIDOS": "destroyedLogs",
            "PROJECTILES LANZADOS": "projectilesLaunched",
            "PROJECTILES IMPACTADOS": "projectilesImpacted",
            "PERDIDAS": "loses",
            "PARTIDAS JUGADAS": "gamesPlayed",
            "HUEVOS ROTOS": "brokenEggs",
            "ASESINATOS FINALES": "finalKills",
            "CAMAS DESTRUIDAS": "brokenBeds",
            "MUERTES FINALES": "finalDeaths",
            "CONSTRUCCIONES PERFECTAS": "perfectBuilds",
            "PUNTAJE": "score",
            "VICTORIAS TOTALES": "totalVictories",
            "VICTORIAS COMO CORREDOR": "victoriesAsRunner",
            "VICTORIAS COMO BESTIA": "victoriesAsBeast",
            "ASESINATO COMO CORREDOR": "killsAsRunner",
            "ASESINATO COMO BESTIA": "killsAsBeast",
            "NIVEL": "level",
            "UNICOINS": "unicoins",
            "ASISTENCIAS": "assistances",
            "DISTANCIA MÁXIMA DE MUERTE CON ARCO": "maximumBowKillDistance",
            "LANAS COLOCADAS": "woolsPlaced",
        }

        const statsPuppeter = document.querySelectorAll('.stats-container .game');
        const data = [];
        for (let i = 0; i < statsPuppeter.length; i++) {
            var statGamemode = statsPuppeter[i].querySelectorAll('.game-stat');
            var statGamemodeName = statsPuppeter[i].querySelector('.game-header-title').innerText;
            var statGamemodeData = {name: gamemodesKeyNames[statGamemodeName], data: []};
            statGamemode.forEach(stat => {
                var statValue = stat.querySelector('.game-stat-count')
                var statKey = stat.querySelector('.game-stat-title')
                
                statGamemodeData.data.push({
                    name: statsKeyNames[statKey.innerText],
                    value: parseInt(statValue.innerText)
                });
            })

            data.push(statGamemodeData);
        }
        return data;
    })

    await browser.close();
    return stats;
    
}

getUserStats('ftsos').then(data => {
    /*data.forEach(stat => {
        console.log(stat.name);
        stat.data.forEach(stat => {
            console.log(stat.name, stat.value);
        })
    })*/
    console.log(data);
}).catch(err => console.log(err));

module.exports = {
    getUserStats
}