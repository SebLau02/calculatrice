const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
let termes = "";
let termesArray = [];
let result = 0;

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", (e) => {
		const val = btn[i].value;
		if (
			termes.length < 9 &&
			val !== "=" &&
			val !== "." &&
			// val !== "+" &&
			val !== "-" &&
			val !== "X" &&
			val !== "/" &&
			val !== "%"
		) {
			termes += val;
			screen.innerHTML = termes;
		}

		if (
			val === "+" ||
			val === "-" ||
			val === "X" ||
			val === "/" ||
			val === "%"
		) {
			// screen.innerHTML = "";
			termesArray.push(termes);
			termesArray.push(val);
			// termes = "";
		}
		if (val === "=") {
			termesArray.push(termes);
			// let i = termesArray.length;
			// result = Number(termesArray[0]) + Number(termesArray[2]);
			// screen.innerHTML = result;
			result = eval(termes);
			screen.innerHTML=result
			termes=""
		}

		if (val === "AC") {
			screen.innerHTML = "";
			termes = "";
			termesArray.length = 0;
		}
	});
}
