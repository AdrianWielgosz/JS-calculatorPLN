const convert = document.getElementById("convert");
const result = document.getElementById("result");
const amount = document.getElementById("amount");

convert.addEventListener("click", function () {

	fetch(`http://api.nbp.pl/api/exchangerates/tables/a/`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const rate = data[0].rates;
			const selectedRate = rate.filter((item) =>
					item.code === document.querySelector("#from").value
				)
			const total = amount.value * selectedRate[0].mid;
			result.innerHTML = ` to ${total.toFixed(2)} PLN`;
		});
});