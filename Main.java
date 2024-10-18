import java.util.Scanner;
public class Main{
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        //prompt user to enter height and weight
        System.out.print("What is your height unit preference: ");
        String heightPreference = input.next();

        System.out.print("Enter your height: ");
        
        
    }

    //method for bmi
    public static void calculateBMI(String sex, double height, double weight, int age) {
        if(heightPreference.equals("ft")){)
            double heightInMeters = (0.3048*height);
        }
        else() {
            heightInMeters = height;
        }
    }
}