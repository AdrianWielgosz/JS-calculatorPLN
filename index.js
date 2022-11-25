const convert = document.getElementById("convert");
const result = document.getElementById("result");
const amount = document.getElementById("amount");

convert.addEventListener("click", function () {
	fetch(`https://api.nbp.pl/api/exchangerates/tables/a/`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const rates = data[0].rates;
			const selectedRate = rates.find(
				(el) => el.code === document.querySelector("#from").value
			);

			const total = amount.value * selectedRate.mid;
			if (amount.value <= 0) {
				return alert("musisz podać liczbę większą od zera!");
			}
			result.innerHTML = ` to ${total.toFixed(2)} PLN`;
		});
});
