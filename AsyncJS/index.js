const log = require('debug')('app:db');
log('Before');
const userAS = getUserAsync(1);// gives undefined as getUser takes 2 secs
const userS = getUser(1, getRepos);
log(userAS);
log('After');

//to solve callback hellusing funciton refference
function getRepos(user){
    log('User',user);
    getRepos(user.gitUserName, getCommits);
}
function getCommits(repos){
    log('Repos', repos);
    getCommits(repo, displayCommits); // instead of (repo, (commits) => {}); 
                                        //passing function reference
}
function displayCommits(commits) {
    log(commits);
}

//Promise holds eventual result of an asynch operation


// To handle
// Callbacks
// Promises
// Async/await 


function getUserAsync(id){
    setTimeout(() => {
        log('Reading from db AS funciton');
        return {id:id, gitUserName:'Aniket'};
    }, 2000);
}

function getUser(id, callback){
    setTimeout(() => {
        log('Reading from db via call back');
        callback({id:id, gitUserName:'Aniket'});
    }, 2000);
}

function getRepos(username, callback){
    setTimeout(() => {
        log('Calling git api ...');
        callback(['repo1','repo2','repo3']);
    }, 1000);
}