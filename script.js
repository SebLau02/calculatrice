const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
let premierTerme = "";
let secondTerme = "";

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", (e) => {
		const val = btn[i].value;
		if (
			premierTerme.length < 9 &&
			val !== "=" &&
			val !== "." &&
			val !== "+" &&
			val !== "-" &&
			val !== "X" &&
			val !== "/" &&
			val !== "%"
		) {
			premierTerme += val;
			screen.innerHTML = premierTerme;
		} else {
			secondTerme += val;
			screen.innerHTML = secondTerme;
			console.log("secondterme = " + secondTerme);
		}

		if (
			val === "+" ||
			val === "-" ||
			val === "X" ||
			val === "/" ||
			val === "%"
		) {
			screen.innerHTML = "";
			console.log(status);
		}

		if (val === "AC") {
			screen.innerHTML = "";
			premierTerme = "";
		}
		// console.log(premierTerme);
	});
}
