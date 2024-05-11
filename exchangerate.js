let fetch_api = "https://restcountries.com/v3.1/all";
let currency_api =
  "https://v6.exchangerate-api.com/v6/9118c305a035d0b345a65122/latest/";

async function findExRates() {
  try {
    let data = await fetch(fetch_api);
    let result = await data.json();
    let cc = document.getElementById("cc").value;

    let url = `${currency_api}/${cc}/`;

    let ex_rates = await (await fetch(url)).json();
    document.getElementById(
      "result"
    ).innerHTML = `<div class="col-4">India : ${ex_rates.conversion_rates.INR}</div><div class="col-4"> US : ${ex_rates.conversion_rates.USD}</div><div class="col-4">AED : ${ex_rates.conversion_rates.AED}</div>`;
  } catch (e) {
    document.getElementById(
        "result"
      ).innerHTML ="Invalid code"
  }
}
findExRates();
