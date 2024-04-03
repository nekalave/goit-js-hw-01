document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-5-button').addEventListener('click', function () {
        let cost;
        let country;
        let countryDelivery = prompt("Enter your country");
        switch (countryDelivery.trim().toLowerCase()) {
            case "china":
                country = "China"
                cost = 100;
                alert(`Delivery to ${country} will cost ${cost} credits`)
                break;

            case "chile":
                country = "Chile"
                cost = 250;
                alert(`Delivery to ${country} will cost ${cost} credits`)
                break;

            case "australia":
                country = "Australia"
                cost = 170;
                alert(`Delivery to ${country} will cost ${cost} credits`)
                break;

            case "india":
                country = "India"
                cost = 80;
                alert(`Delivery to ${country} will cost ${cost} credits`)
                break;

            case "jamaica":
                country = "Jamaica"
                cost = 120;
                alert(`Delivery to ${country} will cost ${cost} credits`)
                break;

            case "":
                alert("Please enter your country");
                break;

            default:
                alert("Delivery is not available in your country");
        }
    });
});