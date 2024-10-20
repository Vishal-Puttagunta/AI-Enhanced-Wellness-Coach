from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/getWorkoutRoutine', methods=['POST'])
def get_workout_routine():
    try:
        # Get the score from the incoming JSON request
        score = request.json.get('score', 0)

        # Generate a workout routine based on the score
        if score < 30:
            routine = "Beginner Workout: 15 min walk, 10 push-ups, 10 squats."
        elif score < 70:
            routine = "Intermediate Workout: 30 min jog, 20 push-ups, 20 squats."
        else:
            routine = "Advanced Workout: 45 min run, 30 push-ups, 30 squats."

        return jsonify(workoutRoutine=routine), 200

    except Exception as e:
        return jsonify(error=str(e)), 400

if __name__ == '__main__':
    app.run(debug=True)
