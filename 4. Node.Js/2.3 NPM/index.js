// var generateName = require('sillyname');

import generateName from 'sillyname';
import {randomSuperhero} from 'superheroes';

var name = generateName();
var sp = randomSuperhero();

console.log(`My silly name is: ${name}`);
console.log(`My superhero name is: ${sp}`);