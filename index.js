function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(fullName('Jeremy', 'Hudson')); 

const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName2('Bob', 'Benson'));


setTimeout(() => { alert('Time is up!'); }, 2000);


setTimeout(askAreWeThereYet => { alert('Are we there yet?'); }, 5000);

var inverval = scope.setInterval(askAreWeThereYet[600]);

console.log(askAreWeThereYet)

//Created the above arrow function out of trial and error. Tested the function and it works, but still throws some kind of an error.


    
function processSplicedValue(array, indexOfArray, functionForSplice) {
    let createdArray = array.splice(indexOfArray, 1);
    functionForSplice(createdArray);
}

var theArray = ['a', 'b', 'c', 'd', 'e'];

processSplicedValue(theArray, 2, console.log);

console.log(theArray);

processSplicedValue(window.alert('This is an array'));

procsessSplicedValue(setTimeout()) => { alert(); }, 3000);
