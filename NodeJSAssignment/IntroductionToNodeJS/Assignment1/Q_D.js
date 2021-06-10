displayMessage = () => ( console.log(`Welcome to Node JS`) );

for( let i = 1; i<=10; i++){
  setTimeout(displayMessage, i * 1000);
}