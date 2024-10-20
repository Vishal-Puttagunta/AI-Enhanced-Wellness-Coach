import requests
import tkinter as tk
from tkinter import messagebox, scrolledtext  # Import scrolledtext for scrollable text area

# Set up your OpenAI API endpoint and API key
API_URL = "https://api.openai.com/v1/chat/completions"  # OpenAI chat completion endpoint
API_KEY = "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"  # Replace with your actual OpenAI API key

def generate_weekly_workout_routine(score):
    # Create the input prompt for a weekly workout routine
    input_prompt = (
        f"You are an AI-powered workout routine generator. "
        f"Create a personalized weekly workout routine for a person with a physical capability score of {score}.\n"
        f"Provide a different workout for each day of the week, including:\n"
        f"- Warm-up\n"
        f"- Main workout with exercises, sets, and repetitions\n"
        f"- Cool down\n"
        f"Make sure the workouts vary in intensity throughout the week according to the given score.\n\n"
        f"### Guidelines:\n"
        f"- For scores between 1 and 20: Focus on basic movements suitable for beginners.\n"
        f"- For scores between 21 and 40: Introduce moderate exercises with light weights.\n"
        f"- For scores between 41 and 60: Incorporate a mix of strength training and cardio.\n"
        f"- For scores between 61 and 80: Include high-intensity workouts with complex movements.\n"
        f"- For scores between 81 and 100: Provide intense routines that may include heavy lifting and advanced techniques.\n"
        f"Please generate the weekly workout routine."
    )

    # Prepare the request to OpenAI API
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "gpt-3.5-turbo",  # Specify the model you want to use
        "messages": [{"role": "user", "content": input_prompt}],
        "max_tokens": 600,  # Adjust based on how detailed you want the output to be
        "temperature": 0.9  # Adjust for creativity
    }

    # Make the API call
    response = requests.post(API_URL, headers=headers, json=payload)

    # Check the response
    if response.status_code == 200:
        data = response.json()
        return data['choices'][0]['message']['content']  # Adjust based on actual API response format
    else:
        return f"Error: {response.status_code} - {response.text}"

def generate_workout():
    try:
        # Get the score from the input field
        score = int(score_entry.get())
        # Call the function to generate the weekly workout routine
        workout_routine = generate_weekly_workout_routine(score)
        # Display the generated workout routine
        result_text.delete(1.0, tk.END)  # Clear previous text
        result_text.insert(tk.END, f"Weekly Workout Routine:\n{workout_routine}")  # Insert new text
    except ValueError:
        # Handle invalid input
        messagebox.showerror("Input Error", "Please enter a valid integer score.")

# Create the main window
root = tk.Tk()
root.title("Personalized Weekly Workout Generator")

# Create and place widgets
tk.Label(root, text="Enter Physical Capability Score:").pack(pady=10)

score_entry = tk.Entry(root)
score_entry.pack(pady=5)

generate_button = tk.Button(root, text="Generate Weekly Workout", command=generate_workout)
generate_button.pack(pady=10)

# Use a scrolled text widget for displaying the output
result_text = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=60, height=20)  # Change width and height as needed
result_text.pack(pady=20)

# Start the GUI event loop
root.mainloop()
