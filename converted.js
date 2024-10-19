//initializing the scanner
const input = require('readline-sync');

//getting height
const height = input.question("Enter your height in inches: ");
const heightInMeters = height * 0.0254;

//prompting user to enter which preference for weight

//asking user to enter their weight
const weight = input.question("Enter your weight in lbs: ");
const weightInKg = weight / 2.25;

//displaying the final bmi
process.stdout.write("Your BMI is: ");

//formatting the BMI to two decimals
const bmi = calculateBMI(heightInMeters, weightInKg);
console.log(bmi.toFixed(2));

//ask user for their sex
const sex = input.question("What is your sex (Male or Female): ");
console.log();

//ask user for their activity level
const activityLevel = input.question("How would you rate your activity level? (Sedentary, Lightlyactive, Moderatelyactive, Veryactive): ");
console.log();

//ask user to rank their motivation level 1-100
const motivation = input.question("Rank your motivation level from 1-100: ");
console.log();

//implementing the calculate score method
console.log("Score is: " + calculateScore(sex, activityLevel, bmi, motivation));

/*
Give each person a score 1-100

If they are most physically gifted they get a higher score

If they are weaker or not in shape, less score

Aspects that play into it include, BMI, sex, Activity Level, motivation/goals

The score we assign to the user in the end is the score that the AI model will use to create the personalized workout routine.

Ex.

Score = 81,      person is above average in physical capability, therefore will get a somewhat difficult routine

Score = 35.      Person is not in shape, will get an easier or less intensive routine
*/



//method for bmi
function calculateBMI(height, weight) {
    //initializing variable to empty value

    //calculating the BMI using formula
    const bmi = weight / (height * height);

    //returning final value
    return bmi;
}

function calculateScore(sex, activityLevel, bmi, motivationLevel){
    //initializing the points variable
    let points = 0;

    //if statements for the BMI category
    if(bmi < 18.5) {
        points += 10;
    }
    else if(bmi >= 18.5 && bmi <= 25) {
        points += 20;
    }
    else if(bmi > 25 && bmi <= 30) {
        points += 15;
    }
    else if(bmi > 30) {
        points += 5;
    }


    //if statements for sex
    if(sex === "Male"){
        points += 6;
    }
    if(sex === "Female"){
        points += 4;
    }
    else{
        points += 3;
    }


    //if statements for activity level
    if(activityLevel === "Sedentary"){
        points += 5;
    }
    if(activityLevel === "Lightlyactive"){
        points += 15;
    }
    if(activityLevel === "Moderatelyactive"){
        points += 20;
    }
    if(activityLevel === "Veryactive"){
        points += 30;
    }

    //if statements for motivation
    if(motivationLevel < 20){
        points += 5;
    }
    else if(motivationLevel >=20 && motivationLevel < 70){
        points += 15;
    }
    else if(motivationLevel >= 70){
        points += 30;
    }

    const bmiMultiplier = points * (100.0/86);
    return Math.floor(bmiMultiplier);
}
