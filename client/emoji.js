console.log("Hello there");
//  this should maybe all be done in the backend so we can safely store the API key - this will also make it easier to to check with the database if an emoji has been used by a user before asigning a random one to a new user

const API_KEY = "6985c654612638a057cc18234a12b8e195d350ee";
async function getEmoji() {
  const response = await fetch(
    `https://emoji-api.com/categories/animals-nature?access_key=${API_KEY}`
  );
  console.log(response);

  const data = await response.json();
  console.log(data);

  const wrangledData = data.text;
  console.log(wrangledData);

  return wrangledData;
}

const emojiContainer = document.getElementById("emoji-container");

function createEmoji(emojiUrl) {
  const emojiImage = document.createElement("div");

  emojiImage.textContent = emojiUrl;
  emojiImage.alt = "A picture of a emoji";

  emojiContainer.appendChild(emojiImage);
}

async function addEmojisToThePage() {
  const getEmojiData = await getEmoji();
  createEmoji(getEmojiData);
}

addEmojisToThePage();
