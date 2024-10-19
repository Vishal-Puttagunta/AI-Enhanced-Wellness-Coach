//the following code was copy pasted from converted.js and paste here, and changed


//initializing the scanner
const input = require('readline-sync');
var age;
var heightInches;
var heightFeet;
var weight;
var sex;
var activity_level;
var motivation_level;

//getting age (q1)

function getSelectedAge()
{
    const ageOptions = document.getElementsByName('age');
    for (let i = 0; i < ageOptions.length; i++)
    {
        if (ageOptions[i].checked)
        {
            return ageOptions[i].value;
        }
        
    }

    //if no options are picked, null is returned
    return null;
}


age = getSelectedAge();


//getting height (q2)

heightInches = document.getElementById('height_ft').value;
heightFeet = document.getElementById('height_in').value;

heightInches = heightInches + heightFeet * 12;

const heightInMeters = heightInches * 0.0254;

//prompting user to enter which preference for weight

//asking user to enter their weight
weight = document.getElementById('weight').value;
const weightInKg = weight / 2.25;

//getting gender (q4)
sex = document.getElementById('sex').value;

//getting activity level (q5)

function getSelectedActivityLevel()
{
    const ActivityOptions = document.getElementsByName('activity');
    for (let i = 0; i < ageOptions.length; i++)
    {
        if (ActivityOptions[i].checked)
        {
            return ActivityOptions[i].value;
        }
        
    }

    //if no options are picked, null is returned
    return null;
}
activity_level = getSelectedActivityLevel();

//getting motivation level (q6)
motivation_level = document.getElementById('motivation_level').value;





//displaying the final bmi
process.stdout.write("Your BMI is: ");

//formatting the BMI to two decimals
const bmi = calculateBMI(heightInMeters, weightInKg);
console.log(bmi.toFixed(2));

//implementing the calculate score method
var Score;

function handleClick() {
    Score = calculateScore(sex, activity_level, bmi, motivation_level);

}
document.getElementById('submit_button').onclick() = handleClick;
document.getElementById('final_score').innerHTML = Score;
console.log("Score is: " + Score);

//the code below is chat gpted, idk if it works

const myVariable = 'This is the content of the file.'; // Your variable content
myVariable = Score;
const blob = new Blob([myVariable], { type: 'text/plain' }); // Create a Blob
const url = URL.createObjectURL(blob); // Create a URL for the Blob

const a = document.createElement('a'); // Create an anchor element
    a.href = url; // Set the href to the Blob URL
        a.download = 'myfile.txt'; // Set the desired file name
        document.body.appendChild(a); // Append to the document
        a.click(); // Trigger the download
        document.body.removeChild(a); // Remove the anchor from the document
        URL.revokeObjectURL(url); // Clean up the Blob URL

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
