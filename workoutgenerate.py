from transformers import LlamaForCausalLM, LlamaTokenizer

# Load the Llama model and tokenizer
tokenizer = LlamaTokenizer.from_pretrained("openlm-research/open_llama_7b")
model = LlamaForCausalLM.from_pretrained("openlm-research/open_llama_7b")

def generate_workout_routine(score):
    input_prompt = f"Create a personalized workout routine for a person with a physical capability score of {score}:"
    inputs = tokenizer(input_prompt, return_tensors="pt")
    outputs = model.generate(**inputs, max_new_tokens=100)

    # Decode the generated workout routine
    workout_routine = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return workout_routine
