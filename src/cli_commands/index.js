import inquirer from "inquirer";

async function authenticate() {
  const questions = [
    {
      type: "input",
      name: "username",
      message: "Please enter your Spotify username:",
    },
    {
      type: "password",
      name: "password",
      message: "Please enter your Spotify password:",
      mask: "*", // This hides the password input
    },
  ];

  const answers = await inquirer.prompt(questions);
  console.log(`Username: ${answers.username}`);
  // Here you can handle the authentication logic, e.g., sending the credentials to your Spotify API
}

// Export the authenticate function
export default authenticate;
