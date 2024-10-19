import java.util.Scanner;
public class Main{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        //prompt user to enter height and weight
        System.out.print("What is your height unit preference (imperial or metric): ");
        String heightPreference = input.next();
        double height = 0;

        if(heightPreference.equals("imperial")){
            System.out.print("Enter your height in inches: ");
            height = input.nextDouble();
        }
        
        if(heightPreference.equals("metric")){
            System.out.print("Enter your height in cm: ");
            height = input.nextDouble();
        }

        System.out.print("What is your weight preference (kg or lb): ");
        String weightPrefrence = input.next();


        System.out.print("Enter your weight: ");
        double weight = input.nextDouble();

        System.out.print("Your BMI is: ");
        System.out.printf("%.2f", calculateBMI(heightPreference, weightPrefrence, height, weight));
        
        
    }

    //method for bmi
    public static double calculateBMI(String heightPreference, String weightPreference, double height, double weight) {
        double heightInMeters = 0;
        double weightInKG = 0;
        if(heightPreference.equals("imperial")){
            height = height*0.0254;
        }
        if(heightPreference.equals("metric")){
            height = height/100;
        }


        if(weightPreference.equals("lb")){
            weightInKG = (weight/2.25);
        }
        else{
            weightInKG = weight;
        }

        double bmi = weightInKG/(height*height);
        return(bmi);
    }
}