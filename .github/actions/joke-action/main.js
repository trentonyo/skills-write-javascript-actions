const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const numJokes = parseInt(process.env.INPUT_NUMBER_OF_JOKES, 10) || 1
  let jokes = []
  
  for (let i = 0; i < numJokes; i++) {
    const joke = await getJoke();
    jokes.push(joke);
    console.log(joke);
  }
  
  core.setOutput("joke-output", jokes);
}

run();