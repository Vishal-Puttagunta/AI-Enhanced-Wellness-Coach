import requests

# Set up your API key
API_URL = "https://api-inference.huggingface.co/models/gpt2"  # You can change this to another model
headers = {"Authorization": f"Bearer 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"}

# Function to send request to Hugging Face's API
def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

# Example usage: generating a workout routine
def generate_workout_routine(score):
    prompt = """
    Prompt for Generating a Workout Routine
Task: Generate a personalized workout routine for a user with a specified physical capability score.

Context:

The user has a physical capability score of [insert score here].
They are looking for a workout routine that includes a warm-up, main workout, and cool-down.
The user is level {score}.
Format:

Warm-Up: Include 3-5 minutes of warm-up activities.
Main Workout: Provide 3-5 exercises with sets and repetitions or duration.
Cool-Down: Suggest 3-5 minutes of cool-down stretches or activities.

Example Request:

Physical Capability Score: 6
Fitness Level: Intermediate
Goal: Muscle Gain
Expected Output:

"Here’s a personalized workout routine for a user with a capability score of 6, focusing on muscle gain:

Warm-Up (5 minutes):
Dynamic stretches: Arm circles, leg swings, and torso twists.
Main Workout:
Push-Ups: 3 sets of 10-15 reps
Squats: 3 sets of 12-15 reps
Dumbbell Rows: 3 sets of 10 reps (per arm)
Plank: Hold for 30-60 seconds, 3 times
Burpees: 3 sets of 8-10 reps
Cool-Down (5 minutes):
Static stretches: Hold each stretch for 20-30 seconds, focusing on arms, legs, and back."

    """
    
    data = query({"inputs": prompt, "max_length": 100})
    return data[0]['generated_text']
