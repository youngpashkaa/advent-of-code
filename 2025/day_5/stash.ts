const computeFreshIngridients = (ranges: string[]) => {
	const fresh: number[] = [];

	ranges.forEach((range) => {
		const [start, end] = range.split("-").map((str) => +str);

		for (let i = start; i <= end; i++) {
			fresh.push(i);
		}
	});

	return fresh;
};
