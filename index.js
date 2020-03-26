
class Lesbean {
	constructor(name) {
		this.name = name;
		this.hearts = 0;
		this.emoji = 0;
	}

	addHeart() {
		this.hearts++;
		if (this.name === "dessa") {
			document.getElementById("dessa_heart_txt").innerHTML = "dessa gets " + this.hearts + " 💞(s) from her gf!";
		}
		if (this.name === "das") {
			document.getElementById("das_heart_txt").innerHTML = "das gets " + this.hearts + " 💖(s) from her gf!";
		}
	}

	addEmoji() {
		this.emoji++;
		if (this.name === "dessa") {
			document.getElementById("dessa_emoji_txt").innerHTML = "dessa gets " + this.emoji + " ✨(s) from her gf!";
		}
		if (this.name === "das") {
			document.getElementById("das_emoji_txt").innerHTML = "das gets " + this.emoji + " 🍒(s) from her gf!";
		}
	}
}

function appear() {
	if (dessa.hearts > 10) {
		// dessa appears slowly
		// she loves you a heck ton!!
	}
	if (das.hearts > 10) {
		// das appears slowly
		// she loves you a heck ton!!
	}
}

let dessa = new Lesbean("dessa");
let das = new Lesbean("das");