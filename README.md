# Universo Craft Stats NodeModule

A simple node module to get the stats of Player in UniversoCraft.

# Installation

It's recommended to install the module with npm:

 ```bash
npm install universocraft-stats
 ```

# Usage 
 The module is a simple node module. It has 2 functions:  
        - `getUserStats(username)`: returns the stats of a player, if the player exists, else returns `[]`.  
        - `userHasPlayed(username)`: returns true if the player has played before.  
# Example
```js
        const stats = require('universocraft-stats');
        stats.getUserStats('playerName').then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        });
```
# Liscence

# Contributing

Just make a PR, or an issue and I might fix it

# Contact

If you want to contact me for any reason, DM on ![Discord Logo](https://user-images.githubusercontent.com/56611379/151561997-2904ab29-4b9a-4190-adf9-a6edc6ce3b3e.png)


> Ftsos - *F_tsos#4081*
