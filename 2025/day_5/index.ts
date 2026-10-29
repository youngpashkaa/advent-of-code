import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "./input.txt")).toString();

const lines = input.split("\n").filter((line) => line !== "");

type Range = [number, number];

// Split out ranges & products from input lines
const [ranges, products] = lines.reduce(
	(res: [Range[], number[]], line, index) => {
		if (line.includes("-")) {
			res[0].push(line.split("-").map((str) => +str) as Range);
		} else {
			res[1].push(+line);
		}

		return res;
	},
	[[], []],
);

// console.log(ranges, products);

// Part one
function getFreshProductIds(ranges: Range[], products: number[]) {
	return products.filter((productId) => {
		for (let i = 0; i < ranges.length; i++) {
			if (productId >= ranges[i][0] && productId <= ranges[i][1]) {
				return true;
			}
		}

		return false;
	});
}

console.log("Part one.");
console.log(getFreshProductIds(ranges, products).length);
