from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

print("🔄 正在加载 Qwen-1.8B-Chat 模型，请稍等...")

tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen-1_8B-Chat", trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen-1_8B-Chat",
    trust_remote_code=True,
    torch_dtype=torch.float16,
    device_map="auto"
).eval()

print("🤖 Qwen 面试机器人已准备就绪！输入 'exit' 可退出对话")

while True:
    user_input = input("\n👤 你：")
    if user_input.lower().strip() in ["exit", "quit"]:
        print("✅ 退出成功，再见！")
        break

    inputs = tokenizer(user_input, return_tensors="pt").to(model.device)
    output = model.generate(**inputs, max_new_tokens=150, do_sample=True, top_p=0.9, temperature=0.8)
    response = tokenizer.decode(output[0], skip_special_tokens=True)

    print("🤖 AI：", response)
