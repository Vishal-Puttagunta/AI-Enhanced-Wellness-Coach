import java.util.Scanner;
public class Main{
    public static void main(String[] args){

        //initializing the scanner
        Scanner input = new Scanner(System.in);

        //prompt user to enter height and weight
        System.out.print("What is your height unit preference (imperial or metric): ");
        String heightPreference = input.next();

        //initializing height to empty value
        double height = 0;

        //two if statements for whichever system the user uses
        if(heightPreference.equals("imperial")){
            System.out.print("Enter your height in inches: ");
            height = input.nextDouble();
        }
        
        if(heightPreference.equals("metric")){
            System.out.print("Enter your height in cm: ");
            height = input.nextDouble();
        }


        //prompting user to enter which preference for weight
        System.out.print("What is your weight preference (kg or lb): ");
        String weightPrefrence = input.next();

        //asking user to enter their weight
        System.out.print("Enter your weight: ");
        double weight = input.nextDouble();

        //displaying the final bmi
        System.out.print("Your BMI is: ");

        //formatting the BMI to two decimals
        System.out.printf("%.2f", calculateBMI(heightPreference, weightPrefrence, height, weight));
        


        /*Give each person a score 1-100

        If they are most physically gifted they get a higher score

        If they are weaker or not in shape, less score

        Aspects that play into it include, BMI, sex, Activity Level, motivation/goals

        The score we assign to the user in the end is the score that the AI model will use to create the personalized workout routine.

        Ex.

        Score = 81,      person is above average in physical capability, therefore will get a somewhat difficult routine

        Score = 35.      Person is not in shape, will get an easier or less intensive routine
        */
        
        System.out.println(calculateScore("Male", "Sedentary", 20, 60));
    }

    //method for bmi
    public static double calculateBMI(String heightPreference, String weightPreference, double height, double weight) {
        //initializing variable to empty value
        double weightInKG = 0;

        //converting the height into meters for the final calculation
        if(heightPreference.equals("imperial")){
            height = height*0.0254;
        }
        if(heightPreference.equals("metric")){
            height = height/100;
        }

        //converting the weight into kilograms
        if(weightPreference.equals("lb")){
            weightInKG = (weight/2.25);
        }
        else{
            weightInKG = weight;
        }

        //calculating the BMI using formula
        double bmi = weightInKG/(height*height);

        //returning final value
        return(bmi);
    }

    public static int calculateScore(String sex, String activityLevel, double bmi, int motivationLevel){
        //initializing the points variable
        int points = 0;

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
        if(sex.equals("Male")){
            points += 6;
        }
        if(sex.equals("Female")){
            points += 4;
        }


        //if statements for activity level
        if(activityLevel.equals("Sedentary")){
            points += 5;
        }
        if(activityLevel.equals("Lightly active")){
            points += 15;
        }
        if(activityLevel.equals("Moderately active")){
            points += 20;
        }
        if(activityLevel.equals("Very active")){
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

        return(points);
    }
}