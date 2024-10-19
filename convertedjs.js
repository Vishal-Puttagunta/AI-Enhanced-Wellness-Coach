//initializing the input using prompt
const prompt = require('prompt-sync')();

//prompt user to enter height and weight
const heightPreference = prompt("What is your height unit preference (imperial or metric): ");

//initializing height to empty value
let height = 0;

//two if statements for whichever system the user uses
if (heightPreference === "imperial") {
    height = parseFloat(prompt("Enter your height in inches: "));
}

if (heightPreference === "metric") {
    height = parseFloat(prompt("Enter your height in cm: "));
}

//prompting user to enter which preference for weight
const weightPreference = prompt("What is your weight preference (kg or lb): ");

//asking user to enter their weight
const weight = parseFloat(prompt("Enter your weight: "));

//displaying the final BMI
console.log("Your BMI is: ", calculateBMI(heightPreference, weightPreference, height, weight).toFixed(2));

//Example score calculation (this can be dynamic as well)
console.log(calculateScore("Male", "Sedentary", 20, 60));

//function for bmi
function calculateBMI(heightPreference, weightPreference, height, weight) {
    let weightInKG = 0;

    //converting the height into meters for the final calculation
    if (heightPreference === "imperial") {
        height = height * 0.0254;
    }
    if (heightPreference === "metric") {
        height = height / 100;
    }

    //converting the weight into kilograms
    if (weightPreference === "lb") {
        weightInKG = weight / 2.25;
    } else {
        weightInKG = weight;
    }

    //calculating the BMI using formula
    const bmi = weightInKG / (height * height);

    //returning final value
    return bmi;
}

function calculateScore(sex, activityLevel, bmi, motivationLevel) {
    let points = 0;

    //if statements for the BMI category
    if (bmi < 18.5) {
        points += 10;
    } else if (bmi >= 18.5 && bmi <= 25) {
        points += 20;
    } else if (bmi > 25 && bmi <= 30) {
        points += 15;
    } else if (bmi > 30) {
        points += 5;
    }

    //if statements for sex
    if (sex === "Male") {
        points += 6;
    }
    if (sex === "Female") {
        points += 4;
    }

    //if statements for activity level
    if (activityLevel === "Sedentary") {
        points += 5;
    }
    if (activityLevel === "Lightly active") {
        points += 15;
    }
    if (activityLevel === "Moderately active") {
        points += 20;
    }
    if (activityLevel === "Very active") {
        points += 30;
    }

    //if statements for motivation
    if (motivationLevel < 20) {
        points += 5;
    } else if (motivationLevel >= 20 && motivationLevel < 70) {
        points += 15;
    } else if (motivationLevel >= 70) {
        points += 30;
    }

    return points * (100.0/86);
}
