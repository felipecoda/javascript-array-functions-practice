const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
// const allNames = characters.map((character => character.name))
// const allNames = characters.map((character) => character.name)
// console.log(allNames)
//2. Get array of all heights
// const allheights = characters.map((character => {
//     return character.height
// }))
// console.log(allheights)
//3. Get array of objects with just name and height properties
// const minifiedArray = characters.map(character => {
//     return {name: character.name, height: character.height}
// })
// console.log(minifiedArray)
//4. Get array of all first names
// const firstnames = characters.map(character => character.name.split(' ')[0])
// console.log(firstnames)

//***REDUCE***
//1. Get total mass of all characters
//const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)
// const totalMass = characters.reduce((acc, cur) => {
//     return acc + cur.mass
// }, 0)
//console.log(totalMass)
//2. Get total height of all characters
// const totalHeight = characters.reduce((acc, cur) => {
//     return acc + cur.height
// }, 0)
// console.log(totalHeight)
//3. Get total number of characters by eye color
// const totalByHairColor = characters.reduce((acc, cur) => {
//     const color = cur.eye_color
//     if (acc[color]) {
//         acc[color]++
//     } else {
//         acc[color] = 1
//     }
//     return acc
// }, {})
//console.log(totalByHairColor)
//4. Get total number of characters in all the character names
// const totalNameChar = characters.reduce((acc, cur) => acc + cur.name.length, 0)
// console.log(totalNameChar)


//***FILTER***
//1. Get characters with mass greater than 100
//const char100 = characters.filter((character) => character.mass > 100)
//const char100 = characters.filter((character) => {
//return character.mass > 200
//})
//console.log(char100)
//2. Get characters with height less than 200
//const short = characters.filter((character) => {
//    return character.height < 200
//})
//console.log(short)
//3. Get all male characters
// const male = characters.filter((character) => {
//     return character.gender === "male"
// })
//console.log(male)
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
// const everyEyeColor = characters.every((character => character.eye_color === "blue"))
// console.log(everyEyeColor)
//2. Does every character have mass more than 40?
//const mass40 = characters.every((character => character.mass > 40))
// const mass40 = characters.every((character) => {
//     return character.mass > 40
// })
// console.log(mass40)
//3. Is every character shorter than 200?
// const shorter200 = characters.every((charater => characters.height < 200))
// console.log(shorter200);
//4. Is every character male?
// const male = characters.every((character => character.gender === "male"))
// console.log(male)

//***SOME***
//1. Is there at least one male character?
const oneMale = characters.some((character => character.gender === "male"))
console.log(oneMale)
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
