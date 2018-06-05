function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

/*
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    },
  }).then(res => console.log(res))
}
*/
function forkRepo(){
  const baseApi = 'https://api.github.com/'
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
    }
  }).then(resp => console.log(resp))
  }

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '2398fa2c9484bb689171034bf1d8e08446447ccf'
}
