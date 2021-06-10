let colors = require('colors');

const WelcomeText = " Welcome to the Module Demo";
const Addition = (a,b) => ( a+b )
const Multiplication = (a,b) => ( a*b )
const Division = (a,b) => ( a/b )
const Subtraction = (a,b) => {
    if( a > b){
        return ( a-b ); 
    }
    else{
        return( b-a); 
    }
} 

module.exports = {

    WelcomeText : WelcomeText.rainbow,
    Addition : Addition,
    Subtraction : Subtraction,
    Division : Division,
    Multiplication : Multiplication

}
