
function calc() {
	var first = parseInt(document.querySelector("#value1").value);

var second = parseInt(document.querySelector("#value2").value);

	var third = document.querySelector("#sel").value;

	var calculate;

	if (third == "add") {
		calculate = first + second;
	} else if (third == "minus") {
		calculate = first - second;
	} else if (third == "divide") {
		calculate = first / second;
	}
else if (third == "multiply") {
		calculate = first * second;
	}
document.write(calculate);
}







