
let botton = document.querySelector(".card form input:last-child ");
let amount = document.querySelector(".card form input:first-child");
let result = document.querySelector(".card h2 ");

async function getCurrency() {


    try {
        const response = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=442f478f21db4fe9a1b511b70bb1c48b");
        const data = await response.json();

        botton.addEventListener("click", (e) => {

            result.innerHTML = "E£ " + (+data.rates.EGP * amount.value).toFixed(2);


        });
        amount.addEventListener("input", (e) => {
            console.log(e.target.value);
            if (e.target.value === "") {
                result.innerHTML = "E£ 00.00";
            }

        });
    } catch (error) {
        console.log(new Error(error));
    }


}



getCurrency();