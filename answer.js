let charactersArr = [];

function createCharacter(name, height, gender, mass, eyeColor) {
    let user = {
        name,
        height,
        gender,
        mass,
        eyeColor
    };
    charactersArr.push(user);
}

createCharacter("John", 176, 'M', 43, "blue");
createCharacter("Ali", 146, 'M', 63, "brown");
createCharacter("Rick", 184, 'M', 47, "green");
createCharacter("Mary", 166, 'F', 51, "black");
createCharacter("Morty", 202, 'M', 36, "blue");
createCharacter("Tom", 212, 'M', 46, "blue");

// MAP
// Get array of objects with just name and height properties
let newObj = charactersArr.map((char) => {
    return{
        name: char.name,
        height: char.height,
    }
});
console.log(newObj);
// Get array of all first names
let newNameObj = charactersArr.map((char) => {
    return{
        name: char.name
    }
});
console.log(newNameObj);

// REDUCE
// Get total mass of all characters
let totalMass = charactersArr.reduce(((a,b) => a+b.height),0);
console.log("total mass = "+ totalMass)

// Get total number of characters in all the character names
let totalNumber = charactersArr.reduce(((a) => a+1),0);
console.log("total number = "+ totalNumber)

// FILTER
// Get characters with mass greater than 100
let charsWithMass = charactersArr.filter((char) => char.mass>40)
console.log("characters with mass greater than 40",charsWithMass);
// Get all female characters
let femChars=charactersArr.filter((char) => char.gender === 'F')
console.log("all female characters: ",femChars)

// SORT
// Sort by name
let sortedByName = charactersArr.sort((a,b) => {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
})
console.log("Sort by Name: ")
console.log(sortedByName)
// Sort by gender
let sortedByGender = charactersArr.sort((a,b) => {
    if ( a.gender < b.gender ){
        return -1;
    }
    if ( a.gender > b.gender ){
        return 1;
    }
    return 0;
})
console.log("Sort by Gender: ")
console.log(sortedByGender)

// ERY
// Does every character have blue eyes?
console.log("Does every character have blue eyes? ",charactersArr.every(char => char.eyeColor === 'blue'))
//     Is every character male?
console.log("Is every character male? ", charactersArr.every(char => char.gender === 'M'))

// SOME
// Is there at least one male character?
console.log("Is there at least one male character? ", charactersArr.some(char => char.gender === 'M'))
//     Is there at least one character that has mass less than 50?
console.log("Is there at least one character that has mass less than 50? ", charactersArr.some(char => char.mass > 50 ))


