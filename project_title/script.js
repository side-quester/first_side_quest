const promptInput = document.getElementById("promptInput");
const gallery = document.getElementById("gallery");

// Random prompt
document.getElementById("randomBtn").onclick = () => {
  const random =
    prompts[Math.floor(Math.random() * prompts.length)];

  promptInput.value = random;
};

// Generate image
document.getElementById("generateBtn").onclick = async () => {
  const prompt = promptInput.value;

  // call your backend (Cloudflare Worker)
  const res = await fetch("image-generator.heheheha9926.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();

  // create image
  const img = document.createElement("img");
  img.src = data.imageUrl;

  gallery.prepend(img);
};