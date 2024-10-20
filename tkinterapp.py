import tkinter as tk
from workoutgenerate import generate_workout_routine

# Create the main application window
root = tk.Tk()
root.title("Personalized Workout Generator")
root.geometry("400x300")

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
