// Function to get the selected age from radio buttons
function getSelectedAge() {
    const ageOptions = document.getElementsByName('age');
    for (let i = 0; i < ageOptions.length; i++) {
        if (ageOptions[i].checked) {
            return ageOptions[i].value;
        }
    }
    return null;
}

// Function to get the selected activity level from radio buttons
function getSelectedActivityLevel() {
    const activityOptions = document.getElementsByName('activity');
    for (let i = 0; i < activityOptions.length; i++) {
        if (activityOptions[i].checked) {
            return activityOptions[i].value;
        }
    }
    return null;
}

// Function to calculate BMI
function calculateBMI(height, weight) {
    return weight / (height * height);
}

// Function to calculate score
function calculateScore(sex, activityLevel, bmi, motivationLevel) {
    let points = 0;

    // BMI category points
    if (bmi < 18.5) points += 10;
    else if (bmi >= 18.5 && bmi <= 25) points += 20;
    else if (bmi > 25 && bmi <= 30) points += 15;
    else if (bmi > 30) points += 5;

    // Sex points
    if (sex === "male") points += 6;
    else if (sex === "female") points += 4;
    else points += 3;

    // Activity level points
    if (activityLevel === "sedentary") points += 5;
    else if (activityLevel === "light") points += 15;
    else if (activityLevel === "moderate") points += 20;
    else if (activityLevel === "very") points += 30;

    // Motivation level points
    if (motivationLevel < 20) points += 5;
    else if (motivationLevel >= 20 && motivationLevel < 70) points += 15;
    else if (motivationLevel >= 70) points += 30;

    // Final score calculation
    const bmiMultiplier = points * (100.0 / 86);
    return Math.floor(bmiMultiplier);
}

// Event handler for form submission
function handleClick() {
    const heightFeet = parseInt(document.getElementById('height_ft').value);
    const heightInches = parseInt(document.getElementById('height_in').value);
    const totalHeightInches = heightFeet * 12 + heightInches;
    const heightInMeters = totalHeightInches * 0.0254;

    const weight = parseFloat(document.getElementById('weight').value);
    const weightInKg = weight / 2.25;

    const sex = document.getElementById('sex').value;
    const activityLevel = getSelectedActivityLevel();
    const motivationLevel = parseInt(document.getElementById('motivation_level').value);

    const bmi = calculateBMI(heightInMeters, weightInKg);
    const score = calculateScore(sex, activityLevel, bmi, motivationLevel);

    //document.getElementById('final_score').innerText = "Your BMI is: " + bmi.toFixed(2) + ", Your Score: " + score;

    // Download file with score
    const blob = new Blob([`${score}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'score.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Attach event listener to the submit button
document.getElementById('submit_button').onclick = handleClick;
