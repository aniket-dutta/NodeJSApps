const log = require('debug')('app:db');
// 

// getUser(1, user => {
//     getRepos(user.gitUserName, repos => {
//         getCommits(repos[0], commits => {
//             //
//         })
//     })
// })
log('Before');
//via promise
// getUser(1)
//     .then(user => getRepos(user.gitUserName))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => log('Commits : ',commits))
//     .catch(err => log('Error : ', err.message));

//     log('After');

//Promise holds eventual result of an asynch operation
function getUserAsync(id){
    setTimeout(() => {
        log('Reading from db AS funciton');
        return {id:id, gitUserName:'Aniket'};
    }, 2000);
}

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            log('Reading from db via promise');
            resolve({id:id, gitUserName:'Aniket'});
        }, 2000);
    });  
}

function getRepos(username){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            log('Calling git api ...');
            //reject(new Error('Git API failed ...'));
            resolve(['repo1','repo2','repo3']);
        }, 2000);
    })  
}

function getCommits(commits){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            log('Calling git api for commits...');
            resolve(['commit']);
        }, 2000);
    })  
}

function getStart(id){
    setTimeout(() => {
        log('Starting');
        return(['commit']);
    }, 2000); 
}

//asycn and await way
// any method using await shoudl be enclosed in a async function
//
async function displayCommits() {
    try{
        const user = await getUser(1);
        //const startMessage = getStart(user.id);
        const repos = await getRepos(user.gitUserName);
        const commits= await getCommits(repos[0]);
        log(commits);
    }
    catch (err) {
        log(err.message);
    }
}
displayCommits();