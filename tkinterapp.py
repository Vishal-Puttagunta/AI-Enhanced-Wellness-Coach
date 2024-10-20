import requests
import tkinter as tk

# Create the main application window
root = tk.Tk()
root.title("Personalized Workout Generator")
root.geometry("400x300")

# Set up your API key
API_URL = "https://api-inference.huggingface.co/models/gpt2"  # You can change this to another model
headers = {"Authorization": f"Bearer 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"}

# Function to send request to Hugging Face's API
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

# Example usage: generating a workout routine
def generate_workout_routine(score):
    prompt = """1. For a score of 5:  

       - Monday: Chest and Back 

       - Tuesday: Legs 

       - Wednesday: Shoulders and Arms 

       - Thursday: Cardio 

       - Friday: Full Body 

       - Saturday: Active Recovery 

       - Sunday: Rest 

  

    2. For a score of 8: 

       - Monday: Push (Bench Press, Overhead Press) 

       - Tuesday: Pull (Pull-Ups, Rows) 

       - Wednesday: Legs (Squats, Deadlifts) 

       - Thursday: Core (Planks, Russian Twists) 

       - Friday: Cardio (Running, HIIT) 

       - Saturday: Flexibility (Yoga, Stretching) 

       - Sunday: Rest 
    """
    
    data = query({"inputs": prompt, "max_length": 100})
    return data[0]['generated_text']

# Function to handle the generation of the workout routine
def get_workout():
    try:
        score = int(entry.get())  # Get the score from user input
        result = generate_workout_routine(score)  # Generate the workout routine
        output_label.config(text=f"Workout Routine:\n{result}")  # Display the result
    except Exception as e:
        output_label.config(text=f"Error: {e}")

# Create UI components
label = tk.Label(root, text="Enter your Physical Capability Score:")
label.pack(pady=10)

entry = tk.Entry(root)
entry.pack(pady=10)

button = tk.Button(root, text="Generate Workout", command=get_workout)
button.pack(pady=10)

output_label = tk.Label(root, text="Your workout will appear here.")
output_label.pack(pady=20)

# Start the main loop of the application
root.mainloop()
