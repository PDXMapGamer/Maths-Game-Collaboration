document
  .getElementById("usernameForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    let user_name = document.getElementById(`username`).value;
    try {
      const response = await fetch("/submitUserScore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_name }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      document.getElementById("userEmoji").textContent = JSON.stringify(
        data,
        null,
        2
      );
    } catch (error) {
      console.error("fail to fetch username", error);
      document.getElementById("userEmoji").textContent =
        "error cannot find username";
    }
  });

// function submitButton1(event) {
//   event.preventDefault();
//   const formData = new FormData(form);
//   const formValues = Object.fromEntries(formData);
//   console.log(formValues);
//   let username = formValues.username;
//   console.log(username);
// }
