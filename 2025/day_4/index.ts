import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "./input.txt")).toString();

const lines = input.split("\n").filter((line) => line !== "");

// Part one
function isRollAccessable({ x, y }: { x: number; y: number }, arr: string[]) {
	// Check if there's a roll of paper
	if (arr[y][x] !== "@") return false;

	let countRolls = 0;

	for (let yc = y - 1; yc <= y + 1; yc++) {
		if (yc < 0 || yc === arr.length) continue;

		for (let xc = x - 1; xc <= x + 1; xc++) {
			if (arr[yc][xc] === "@") {
				countRolls++;
			}
		}
	}

	return countRolls < 5;
}

function countAcceptableRolls() {
	let res = 0;

	let l = lines.concat();
	let nextL = lines.concat();

	do {
		l = nextL.concat();

		for (let y = 0; y < l.length; y++) {
			for (let x = 0; x < l.length; x++) {
				const isAcceptable = isRollAccessable({ x, y }, l);
				if (isAcceptable) {
					const newLine =
						nextL[y].substring(0, x) + "X" + nextL[y].substring(x + 1);

					nextL[y] = newLine;
					res++;
				}
			}
		}

		console.count();
	} while (JSON.stringify(l) !== JSON.stringify(nextL));

	return res;
}

console.log("Part one.");

console.log("Part two.");
console.log(countAcceptableRolls());
