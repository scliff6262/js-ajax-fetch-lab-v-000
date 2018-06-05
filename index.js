function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = '2ba9da89e870077ddfb14f6b7099691f02be8a0a'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => console.log(res))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '2398fa2c9484bb689171034bf1d8e08446447ccf'
}
