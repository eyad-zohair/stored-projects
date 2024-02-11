fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=d0f2974e69cc4c63b723340d3b3474fc")
    .then((result) => {
        // console.log(result)
        let myData = result.json()
        // console.log(myData)
        return myData
    }).then((currecy) => {
        let amount = document.querySelector(".amount")
        document.getElementById("see").addEventListener("click", function (event) {
            event.preventDefault()
            let egpPrice = document.querySelector(".egp span")
            let sarPrice = document.querySelector(".sar span")

            egpPrice.innerHTML = (amount.value * currecy.rates["EGP"]).toFixed(2)
            sarPrice.innerHTML = (amount.value * currecy.rates["SAR"]).toFixed(2)
        })
    })
