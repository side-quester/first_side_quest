const promptInput = document.getElementById("prompt_input");
const gallery = document.getElementById("gallery");

// Random prompt
document.getElementById("random_button").onclick = () => {
  const random =
    prompts[Math.floor(Math.random() * prompts.length)];

  promptInput.value = random;
};

// Generate image
document.getElementById("generate_button").onclick = async () => {
  const prompt = promptInput.value;

  // call your backend (Cloudflare Worker)
const res = await fetch(
  "https://image-generator.heheheha9926.workers.dev/generate",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  }
);

  const data = await res.json();

  // create image
  const img = document.createElement("img");
  img.src = data.imageUrl;

  gallery.prepend(img);
};