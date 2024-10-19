// import ai.djl.Model;
import java.io.IOException;

import ai.djl.ModelException;
import ai.djl.modality.nlp.qa.QAInput;
import ai.djl.repository.zoo.Criteria;
import ai.djl.repository.zoo.ModelZoo;
import ai.djl.repository.zoo.ZooModel;
import ai.djl.translate.TranslateException;

public class Main {

    public static void main(String[] args) {
        try {
            // Define criteria to load the question-answering model from DJL's model zoo
            Criteria<QAInput, String> criteria = Criteria.builder()
                    .setTypes(QAInput.class, String.class)
                    .optApplication(ai.djl.Application.NLP.QUESTION_ANSWER)
                    .build();

            // Log the criteria being used
            System.out.println("Loading model with criteria: " + criteria);
            

            // Try-with-resources to ensure the model is automatically closed
            try (ZooModel<QAInput, String> model = ModelZoo.loadModel(criteria)) {
                // Debugging: Check if the model is loaded
                System.out.println("Model loaded successfully");

                // Create input: context and question
                QAInput input = new QAInput("What is DJL?", 
                    "Deep Java Library (DJL) is an open-source library to build, train, and deploy deep learning models in Java.");

                // Predict the answer
                String answer = model.newPredictor().predict(input);

                // Debugging: Check if prediction is successful
                System.out.println("Prediction successful");

                // Output the result
                System.out.println("Answer: " + answer);
            } // Model is automatically closed here

        } catch (ModelException e) {
            System.err.println("Model loading failed: ");
            e.printStackTrace();
        } catch (TranslateException e) {
            System.err.println("Translation error: ");
            e.printStackTrace();
        } catch (IOException e) {
            System.err.println("I/O error: ");
            e.printStackTrace();
        }
    }
}