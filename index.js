// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching = (drivers,name) => {
    return drivers = drivers.filter(x => x.toUpperCase() === name.toUpperCase())
};

const fuzzyMatch = (drivers,letter) => {
    return drivers = drivers.filter(y => y.startsWith(letter))
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const matchName = (drivers, l) => {
    return drivers.filter(j => j.name === l)
}


// const matchName = (drivers, name) => {
//     return drivers.filter(driver => driver.name === name); // Filter the drivers by matching the name
// };