window.onload = function() {
	setInterval(handleRefresh, 3000);
};

var lastReportTime = 0;

function updateSales(sales) {
	var salesDiv = document.getElementById("sales");
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
	if (sales.length > 0) {
		lastReportTime = sales[sales.length - 1].time;
	}
}

function handleRefresh() {
	var url =
		"http://gumball.wickedlysmart.com/?callback=updateSales" +
		"&lastreporttime=" +
		lastReportTime +
		"&random" +
		new Date().getTime;

	var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	newScriptElement.setAttribute("id", "jsonp");

	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if (oldScriptElement == null) {
		head.appendChild(newScriptElement);
	} else {
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}

/* mightygumball.js */
/*
 * get the content of a JSON file using Ajax
 *
 */

/* NEW ONE
window.onload = init;

function init() {
	getSales();
}

NEW ONE*/

//
// This function is written using XMLHttpRequest Level 1, so if you're
// using IE or Opera, or a really old version of Safari, Firefox or
// Chrome, you can use this instead of Level 2 (below).
//
/* NEW ONE
function getSales_XHRv1() {
	// change the URL to match the location where you
	// put the sales.json file
	var url = "http://localhost/gumball/sales.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			updateSales(request.responseText);
		}
	};
	request.send(null);
}

//
// With XMLHttpRequest Level 2 (implemented in new versions of Firefox, Safari
// and Chrome) you can check progress and check for the "load" event with the
// onload event handler instead of checking the onreadystatechange
//
function getSales() {
	// change the URL to match the location where you
	// put the sales.json file
	var url = "http://localhost/gumball/sales.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			updateSales(request.responseText);
		}
	};
	request.send(null);
}

function updateSales(responseText) {
	var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(responseText);
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
}
NEW ONE*/
