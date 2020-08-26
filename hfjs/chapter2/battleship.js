window.onload = function() {
	var button = document.getElementById("button");
	var randomLoc = Math.floor(Math.random() * 5);
	var location1 = randomLoc;
	var location2 = location1 + 1;
	var location3 = location2 + 1;
	var guess;
	var hits = 0;
	var guesses = 0;
	var isSunk = false;
	var showScores = document.getElementById("showScores");
	var clearScores = document.getElementById("clearScores");

	button.onclick = functstart;
	function functstart() {
		while (isSunk == false) {
			guess = prompt("Ready, aim, fire! (enter a number 0-6):");
			if (guess == null) {
				return null;
			} else if (guess < 0 || guess > 6) {
				alert("Please enter a valid cell number!");
			} else if (guess === "") {
				alert("Please enter a valid cell number!");
			} else {
				guesses = guesses + 1;

				if (guess == location1 || guess == location2 || guess == location3) {
					alert("Hit!");
					hits = hits + 1;

					if (hits == 3) {
						isSunk = true;
						alert("You sank my Battleship!");
					}
				} else {
					alert("Miss!");
				}
			}
		}
		var stats =
			"You took " +
			guesses +
			" guesses to sink the battleship, " +
			"which means your accuracy was " +
			Math.floor((3 / guesses) * 100) +
			"%";
		alert(stats);
		var value = stats;
		var key = "stats" + localStorage.length;
		localStorage.setItem(key, value);
		location.reload();
		return false;
	}
	for (var i = 0, len = localStorage.length; i < len; ++i) {
		var key = localStorage.key(i);
		if (key.substring(0, 5) == "stats") {
			var value = localStorage.getItem(key);
			var li = document.createElement("li");
			li.innerHTML = value;
			var output = document.getElementById("output");
			output.appendChild(li);
		}
	}
	showScores.onclick = function() {
		var x = document.getElementById("field");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	};

	clearScores.onclick = function() {
		localStorage.clear();
		location.reload();
		return false;
	};
};
