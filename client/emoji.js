console.log("Hello there")

async function getEmoji() {
    const response = await fetch("https://emoji-api.com/");
    console.log(response);
  
    const data = await response.json();
    console.log(data);
  
    const wrangledData = data.image;
    console.log(wrangledData);

    return wrangledData;
  }

const emojiContainer = document.getElementById("emoji-container");

function createEmoji(emojiUrl) {
  const emojiImage = document.createElement("img");

  emojiImage.src = emojiUrl;
  emojiImage.alt = "A picture of a emoji";

  emojiContainer.appendChild(emojiImage);
}

async function addEmojisToThePage() {
  const getEmojiData = await getEmoji();
  createEmoji(getEmojiData);
}

addEmojisToThePage();
