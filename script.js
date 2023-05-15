const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
let termes = "";
let termesArray = [];
let result = 0;

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", (e) => {
		const val = btn[i].value;

		if (
			val !== "=" &&
			val !== "%" &&
			val !== "+" &&
			val !== "-" &&
			val !== "*" &&
			val !== "/"
		) {
			termes += val;
			screen.innerHTML = termes;
		}

		if (val === "=") {
			result = eval(termes);
			screen.innerHTML = result;
		}

		if (val === "AC") {
			screen.innerHTML = "";
			termes = "";
		}
		if (val === "+" || val === "-" || val === "*" || val === "/") {
			termes += val;
			screen.innerHTML = termes;
		}
	});
}

window.addEventListener("keydown", (e) => {
	if (e.key !== "=" && e.key !== "Backspace" && e.key !== "Enter") {
		termes += e.key;
		screen.innerHTML = termes;
	}

	if (e.key === "=" || e.key === "Enter") {
		result = eval(termes);
		screen.innerHTML = result;
	}
	if (e.key === "Backspace") {
		termes = termes.substring(0, termes.length - 1);
		screen.innerHTML = termes;
	}
});
