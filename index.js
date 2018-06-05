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
  const apiLink = "https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks"
  //use fetch to fork it!
  fetch(apiLink, {
    method: "POST",
    headers: {
      Authorization: 'token 29fe5c75d8b39e72f502dc4719212013e693af3e'
    }
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
