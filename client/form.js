document
  .getElementById("usernameForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    let user_name = document.getElementById(`username`).value;
    console.log(user_name);
    try {
      const response = await fetch("http://localhost:8080/submitUserScore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_name }),
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(JSON.stringify(user_name));
      document.getElementById("userEmoji").textContent = user_name;
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
