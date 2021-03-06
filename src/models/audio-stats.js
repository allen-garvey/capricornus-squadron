/*
 * Stores information about audio sound effects
 */

//array of information about sound effects for units - cross referenced to unit stats array
function audioStats(){
    var stats = {
        units: []
    };

    stats.units.push({
        name: 'Infantry', //for debugging purposes
        attackUrl: 'sounds/soldierAttackShort.ogg', //url for sound effect audio file used when unit attacks 
        moveUrl: 'sounds/soldierMove.ogg', //url for sound effect audio file used when unit moves
        damageUrl: '', //url for sound effect audio file used when unit takes damage
        dieUrl: 'sounds/death.ogg', //url for sound effect audio file used when unit dies
        move: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        attack: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        damage: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        die: null //AudioBuffer object is placed here once corresponding audio file is preloaded
    });
    stats.units.push({
        name: 'Tank', //for debugging purposes
        attackUrl: 'sounds/tankAttack.ogg', //url for sound effect audio file used when unit attacks 
        moveUrl: 'sounds/tankMove.ogg', //url for sound effect audio file used when unit moves
        damageUrl: '', //url for sound effect audio file used when unit takes damage
        dieUrl: 'sounds/death.ogg', //url for sound effect audio file used when unit dies
        move: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        attack: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        damage: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        die: null //AudioBuffer object is placed here once corresponding audio file is preloaded
    });
    stats.units.push({
        name: 'Plane', //for debugging purposes
        attackUrl: 'sounds/planeAttack.ogg', //url for sound effect audio file used when unit attacks 
        moveUrl: 'sounds/planeMove.ogg', //url for sound effect audio file used when unit moves
        damageUrl: '', //url for sound effect audio file used when unit takes damage
        dieUrl: 'sounds/death.ogg', //url for sound effect audio file used when unit dies
        move: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        attack: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        damage: null, //AudioBuffer object is placed here once corresponding audio file is preloaded
        die: null //AudioBuffer object is placed here once corresponding audio file is preloaded
    });

    //sounds for when level is passed or failed
    stats.level = {
        passed: {
            url: 'sounds/levelComplete.ogg', //location of audio file
            audio: null //AudioBuffer object placed here when audio file is loaded
        },
        failed: {
            url: 'sounds/levelFailure.ogg',
            audio: null
        }
    };

    //sounds cursor, such as selecting and deselecting units
    stats.cursor = {
        select: {
            url: 'sounds/select.ogg', //location of audio file
            audio: null //AudioBuffer object placed here when audio file is loaded
        },
        deselect: {
            url: 'sounds/deselect.ogg',
            audio: null
        }
    };

    stats.music = [
        {
            url: 'sounds/ready-steady-stinger.ogg',
            audio: null
        },
        {
            url: 'sounds/panic-attack-stinger.ogg',
            audio: null
        },
        {
            url: 'sounds/marche-grotesque-stinger.ogg',
            audio: null
        },
        {
            url: 'sounds/visions-of-apocalypse-stinger.ogg',
            audio: null
        }

    ];

    return stats;
}

export default {
    get: audioStats
};