function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

/*function forkRepo(){
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
  const repo = 'scliff6262/kick_up'
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
  return '32ee7ad1e8a3b165794fd4deb00f4411add13342'
}
