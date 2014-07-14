/* global prompt:true */
var prompt = require('sync-prompt').prompt;

var Dogs = [], Cats = [], Lizards = [];


var menu = prompt('Add (d)og, (c)at, (l)izard, or (q)uit');
var name, age, gender;

while (menu !== 'q'){
	var animal = {};
	if(menu === 'c'){
		//Ask Info
		name = prompt('Name?: ');
		age = prompt('Age?: ');
		gender = prompt('Gender? :');

		animal = {name: name, age: age, gender: gender};

		//Push into cats array
		Cats.push(animal);
	}
	if(menu === 'l'){
		//Ask Info
		name = prompt('Name?: ');
		age = prompt('Age?: ');
		gender = prompt('Gender? :');

		animal = {name: name, age: age, gender: gender};

		//Push into cats array
		Lizards.push(animal);
	}
	if(menu === 'd'){
		//Ask Info
		name = prompt('Name?: ');
		age = prompt('Age?: ');
		gender = prompt('Gender? :');

		animal = {name: name, age: age, gender: gender};

		//Push into cats array
		Dogs.push(animal);
	}

	//Display promot again until done
	menu = prompt('Add (d)og, (c)at, (l)izard, or (q)uit');


}

console.log(Dogs);
console.log(Cats);
console.log(Lizards);

