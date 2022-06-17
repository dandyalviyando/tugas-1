let texthtml = document.createElement("p");
let result = document.getElementById("result");

const checkInput = () => {

    let input = document.getElementById("input").value;

    if(input == 0){
        let invalid = document.createTextNode("Invalid Input");
        let messageInvalid = texthtml.appendChild(invalid);
        result.appendChild(messageInvalid);
    } else if(input%15 === 0) {
        let fizzBuzz = document.createTextNode("FizzBuzz");
        let messageFizzBuss = texthtml.appendChild(fizzBuzz);
        result.appendChild(messageFizzBuss)
    } else if (input%3 === 0) {
        let fizz = document.createTextNode("Fizz");
        let messageFizz = texthtml.appendChild(fizz);
        result.appendChild(messageFizz);
    } else if (input%5 === 0) {
        let buzz = document.createTextNode("Buzz");
        let messageBuzz = texthtml.appendChild(buzz);
        result.appendChild(messageBuzz);
    } else {
        let inputNumber = document.createTextNode(input)
        let messageInputNumber = texthtml.appendChild(inputNumber)
        result.appendChild(messageInputNumber);
    }    

    result.appendChild(document.createElement("br"));
}