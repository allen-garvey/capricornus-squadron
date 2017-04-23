/*
 * Logic for unit pathfinding
 */
var app = app || {};
app.pathfinder = (function(){

	/*
	* @param unitCoordinate - coordinate {x, y} of the unit
	* (Coordinates start at the top left of the screen at {x: 0, y: 0} and move downwards and to the right with increasing numbers)
	* @param gamboard - 2 dimensional array of units and terrain
	* @param - unitStatsArray - array of unit stats, cross-indexed to unit.type
	* @param - terrainStatsArray - array of terrain stats, cross-indexed to terrain.type
	* @returns array of coordinates (in any order) that the unit at unitCoordinate can travel to (not including starting unitCoordinate)
	(should also probably return coordinates of units that can be attacked, with additional property to coordinate, such as {x: 1, y: 1, attack: true})
	*/
    function movementCoordinatesFor(unitCoordinate, gameboard, unitStatsArray, terrainStatsArray){
    	//get the unit
    	var unitToBeMoved = gameboard[unitCoordinate.x][unitCoordinate.y].unit;
    	//get stats about the unit
    	var unitStats = unitStatsArray[unitToBeMoved.type];

    	//example of getting terrain at coordinate {x: 1, y: 2}
    	var terrain = gameboard[1][2].terrain;
    	//see if unit can traverse that terrain
    	if(unitStats.canTraverse[terrain.type]){

    	}

    	//for now just return squares around the unit
    	return [{x: unitCoordinate.x + 1, y: unitCoordinate.y}, {x: unitCoordinate.x - 1, y: unitCoordinate.y}, {x: unitCoordinate.x, y: unitCoordinate.y + 1}, {x: unitCoordinate.x, y: unitCoordinate.y - 1}];
    }


    //exported functions
    return {
    	movementCoordinatesFor: movementCoordinatesFor
    };
})();