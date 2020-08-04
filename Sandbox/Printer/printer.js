window.onload = buttons;
function buttons() {
	var slow = document.getElementById("slow");
	slow.onclick = slowOutputStart;
	var medium = document.getElementById("medium");
	medium.onclick = mediumOutputStart;
	var fast = document.getElementById("fast");
	fast.onclick = fastOutputStart;
}

var input = document.getElementById("input");
var counter = 0;

function slowOutputStart() {
	var ip = document.getElementById("input");
	var op = ip.value;

	if (op == "") {
		alert("Please type an input!");
	} else if (counter < 1) {
		setInterval(slowOutput, 5000);
		counter++;
	} else {
		document.getElementById("input").disabled = true;
	}
}

function slowOutput() {
	var slowInput = document.getElementById("input");
	var slowOutput = slowInput.value;

	if (slowOutput == "") {
		null;
	} else {
		var li = document.createElement("li");
		li.innerHTML = slowOutput;
		var finalOutput = document.getElementById("output");
		finalOutput.appendChild(li);
	}
}

function mediumOutputStart() {
	var ip = document.getElementById("input");
	var op = ip.value;

	if (op == "") {
		alert("Please type an input!");
	} else if (counter < 1) {
		setInterval(mediumOutput, 3000);
		counter++;
	} else {
		document.getElementById("input").disabled = true;
	}
}

function mediumOutput() {
	var mediumInput = document.getElementById("input");
	var mediumOutput = mediumInput.value;

	if (mediumOutput == "") {
		null;
	} else {
		var li = document.createElement("li");
		li.innerHTML = mediumOutput;
		var finalOutput = document.getElementById("output");
		finalOutput.appendChild(li);
	}
}

function fastOutputStart() {
	var ip = document.getElementById("input");
	var op = ip.value;

	if (op == "") {
		alert("Please type an input!");
	} else if (counter < 1) {
		setInterval(fastOutput, 1000);
		counter++;
	} else {
		document.getElementById("input").disabled = true;
	}
}

function fastOutput() {
	var fastInput = document.getElementById("input");
	var fastOutput = fastInput.value;

	if (fastOutput == "") {
		null;
	} else {
		var li = document.createElement("li");
		li.innerHTML = fastOutput;
		var finalOutput = document.getElementById("output");
		finalOutput.appendChild(li);
	}
}
