// Create app namespace to hold all methods
const app = {};

// Collect user input
app.collectInfo = function () {

    function getAge() {

        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const dateChosen = new Date (date)

        const patientAge = new Date(document.getElementById("age").value);
        console.log('this is todays date', date)
        console.log('this is the patient', patientAge)

        // const calc = date - patientAge;
        // console.log('the age', calc)
        console.log(typeof date)

    }
    getAge();
};

// Display data on the page
app.displayInfo = function () {};

// Start app
app.init = function () {
    app.collectInfo();
};

document.addEventListener("DOMContentLoaded", function () {
    app.init();
});