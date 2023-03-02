let time = document.querySelectorAll(".time span");
let cards = document.querySelectorAll(".card");
let current = document.querySelectorAll(".current");
let previous = document.querySelectorAll(".previous");

window.onload = () => {
	time.forEach((e) => {
		if (e.classList.contains("active")) {
			timeFrame = e.dataset.timeFrame;
			getData(timeFrame);
		}
	});
};

time.forEach((e) => {
	e.addEventListener("click", () => {
		time.forEach((e) => {
			e.classList.remove("active");
		});
		e.classList.add("active");
		timeFrame = e.dataset.timeFrame;

		getData(timeFrame);
	});
});

function getData(timeFrame) {
	fetch("data.json")
		.then((response) => {
			let data = response.json();
			return data;
		})
		.then((data) => {
			data.forEach((e) => {
				check(e, timeFrame);
			});
		});
}

function check(e, timeFrame) {
	cards.forEach((card, index) => {
		if (card.classList.contains(e.title.split(" ").join("-").toLowerCase())) {
			current[index].innerHTML = `${e.timeframes[timeFrame].current}hr`;
			previous[index].innerHTML = `${e.timeframes[timeFrame].previous} hour`;
		}
	});
}
