
console.log(location);


function rollDie(dieNumber) {
	let roll = Math.floor(Math.random() * dieNumber) + 1;
	return roll;
}

function gameLevel() {
	let level = [];
	level = [zone(), move(), battle(), move(), battle(), move(), battle(), move(), battle(), battle()];
	for (i = 0; i < level.length; i++) {

	}
	}


function die20() {
	let dieNumber = 20;
	let result = rollDie(dieNumber)
	console.log(result);
	return result;
	alert();
}

function die12() {
	let dieNumber = 12;
	let result = rollDie(dieNumber)
	return result;
}

function die10() {
	let dieNumber = 10;
	let result = rollDie(dieNumber)
	console.log(result);
	return result;	
}

function die6() {
	let dieNumber = 6;
	let result = rollDie(dieNumber)
	console.log(result);
	return result;
	
}
function die4() {
	let dieNumber = 4;
	let result = rollDie(dieNumber)
	console.log(result);
	return result;
}

function zone() {
	let zoneArray = ["forest","desert","barren tundra","rainforest","pine forest","grassland"];
	let result = die6();
	currentZone = zoneArray[result-1];
	alert("You start your adventure in the " + currentZone);
	return currentZone;
}

function move() {
	let movement = die10()
	alert("You travel " + movement + " more miles on your journey")
	movementTotal(movement);
	getLocation();
}

function getLocation() {
	let locationType = ["lake", "cabin", "village", "castle"];
	let locationNumber = die12()
	if (locationNumber <= 4) {
		alert("You come upon a " + locationType[locationNumber-1]);
	}

	else {
		alert("You find yourself on the road, far from any sign of civilization");
	}
}


function getMonster() {
	let monsterType = ["goblin", "ghost","bear","demon",];
	let result = die4()
	let monster = monsterType[result-1];
	return monster
}

function battle() {
	let monster = getMonster();
	alert("You have entered a battle against a " + monster);
	let result = die4();
	if (result === 1) {
		alert("The " + monster + " has struck you")
		injuries();
	}
	else if (result === 2) {
		alert("You have struck the " + monster + " and it has retreated")
	}
	else {
		alert("You have blocked the " + monster + "'s attack")
			battleRoundTwo(monster);
	}
	}
function battleRoundTwo(monster) {
	let opponent = monster
	let result = die4();
		if (result >= 2) {
			alert("You have struck back, dealing fatal damage to the " + opponent);
		}
		else if( result === 3){
			alert("The " + opponent + " has struck you")
			injuries();
		}
		else


	}


function injuries() {
	let injuryArray = ["left leg","right leg","left arm","right arm","left ear","right ear","right eye","left eye","Head","left foot","right foot", "right ankle", "left ankle", "left ear", "right ear",];
	let injuryType = ["cut", "bruised", "severed", "lacerated"];
	let result20 = die20()
	let injuryPart = injuryArray[result20-1];
	let result4 = die4()
	let injury = injuryType[result4-1];
	injuryCount()
	alert("You have been injured in your " + injuryPart + " this part has been " + injury); 
}

function injuryCount() {
	for (i = 0; i < 4; i++) {
		if (i >= 4) {
			gameOver()
		}

	}
}



function gameOver() {
	alert("You have taken fatal damage! GAME OVER!");

}
	



gameLevel()