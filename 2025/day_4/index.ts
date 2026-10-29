import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "./input.txt")).toString();

const lines = input.split("\n").filter((line) => line !== "");

// Part one
function isRollAccessable({ x, y }: { x: number; y: number }) {
	// Check if there's a roll of paper
	if (lines[y][x] !== "@") return false;

	let countRolls = 0;

	for (let yc = y - 1; yc <= y + 1; yc++) {
		if (yc < 0 || yc === lines.length) continue;

		for (let xc = x - 1; xc <= x + 1; xc++) {
			if (lines[yc][xc] === "@") {
				countRolls++;
			}
		}
	}

	return countRolls < 5;
}

function countAcceptableRolls() {
	let res = 0;

	for (let y = 0; y < lines.length; y++) {
		for (let x = 0; x < lines.length; x++) {
			const isAcceptable = isRollAccessable({ x, y });
			if (isAcceptable) res++;
		}
	}

	return res;
}

console.log("Part one.");
console.log(countAcceptableRolls());

console.log("Part two.");
// Solve function execution
