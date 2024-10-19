import java.util.Scanner;
public class Main{
    public static void main(String[] args){

        //initializing the scanner
        Scanner input = new Scanner(System.in);


        //getting height
        System.out.print("Enter your height in inches: ");
        double height = input.nextDouble();

    


        //prompting user to enter which preference for weight

        //asking user to enter their weight
        System.out.print("Enter your weight in lbs: ");
        double weight = input.nextDouble();

        //displaying the final bmi
        System.out.print("Your BMI is: ");

        //formatting the BMI to two decimals
        double bmi = calculateBMI(height, weight);
        System.out.printf("%.2f", bmi);

        System.out.println();



        //ask user for their sex
        System.out.print("What is your sex (Male or Female): ");
        String sex = input.next();
        System.out.println();

        //ask user for their activity level
        System.out.print("How would you rate your activity level? (Sedentary, Lightly active, Moderately active, Very active): ");
        String activityLevel = input.next();
        System.out.println();

        //ask user to rank their motivation level 1-100
        System.out.print("Rank your motivation level from 1-100: ");
        int motivation = input.nextInt();
        System.out.println();


        //implementing the calculate score method
        System.out.println("Score is: " + calculateScore(sex, activityLevel, bmi, motivation));




        /*Give each person a score 1-100

        If they are most physically gifted they get a higher score

        If they are weaker or not in shape, less score

        Aspects that play into it include, BMI, sex, Activity Level, motivation/goals

        The score we assign to the user in the end is the score that the AI model will use to create the personalized workout routine.

        Ex.

        Score = 81,      person is above average in physical capability, therefore will get a somewhat difficult routine

        Score = 35.      Person is not in shape, will get an easier or less intensive routine
        */
        
        //calculateScore("Male", "Sedentary", 21.2, 60);

    }

    //method for bmi
    public static double calculateBMI(double height, double weight) {
        //initializing variable to empty value

        //converting the height into meters for the final calculation
        height = height*0.0254;

        //converting the weight into kilograms
        weight = (weight/2.25);
    

        //calculating the BMI using formula
        double bmi = weight/(height*height);

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
        if(activityLevel.equals("Veryactive")){
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

        double bmiMultiplier = points * (100.0/86);
        return (int) bmiMultiplier;
    }
}