### Universo Craft Stats NodeModule

A simple node module to get the stats of Player in UniversoCraft.

- - -

### Installation

It's recommended to install the module with npm:
 ```bash
    npm install universocraft-stats
 ```

### Usage 

    The module is a simple node module. It has 2 functions:
        - `getUserStats(username)`: returns the stats of a player, if the player exists, else returns `[]`.
        - `userHasPlayed(username)`: returns true if the player has played before.

### Example
    ```js
        const stats = require('universocraft-stats');
        stats.getStats('playerName').then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
    ```
