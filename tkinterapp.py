import tkinter as tk
from tkinter import messagebox
from workoutgenerate import generate_workout_routine  # Import the function

def generate_workout():
    try:
        # Get the score from the input field
        score = int(score_entry.get())

        # Call the imported function to generate the workout routine
        workout_routine = generate_workout_routine(score)

        # Display the generated workout routine
        result_text.set(f"Workout Routine:\n{workout_routine}")

    except ValueError:
        # Handle invalid input
        messagebox.showerror("Input Error", "Please enter a valid integer score.")

# Create the main window
root = tk.Tk()
root.title("Personalized Workout Generator")

# Create and place widgets
tk.Label(root, text="Enter Physical Capability Score:").pack(pady=10)

score_entry = tk.Entry(root)
score_entry.pack(pady=5)

generate_button = tk.Button(root, text="Generate Workout", command=generate_workout)
generate_button.pack(pady=10)

result_text = tk.StringVar()
result_label = tk.Label(root, textvariable=result_text, justify="left")
result_label.pack(pady=20)

# Run the app
root.mainloop()
