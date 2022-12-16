let person = prompt("Insert your name = "); //Prompt to insert name

let newPerson = () =>{
    let firstLetter = person[0]; //Extract the first letter of the name
    if (firstLetter === 'a' || firstLetter === 'b' || firstLetter === 'c' || firstLetter ===  'd') { //checking the first name letter
        console.log("in the first group"); //assign it to group
    } else if (firstLetter === 'e' ||firstLetter === "f"|| firstLetter === "g" || firstLetter === "h"){
            console.log("in the second group");
    } else { //if none match the condition the name will moved to the last group
                 console.log("in the last group");
                 
    }
}
newPerson(person); //Calling out the function
