/* global prompt:true */
'use strict';
var prompt = require('sync-prompt').prompt;

var Dogs = [], Cats = [], Lizards = [], Person = [];


var menu = prompt('Add (d)og, (c)at, (l)izard, or (q)uit: ');
var name, age, gender;

var person1 = {name: 'bob', age: '10', pets:[]};
var person2 = {name: 'sam', age: '15', pets:[]};
var person3 = {name: 'jill', age: '20', pets:[]};

Person.push(person3, person2, person1);


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
	menu = prompt('Add (d)og, (c)at, (l)izard, or (q)uit: ');


}

menu = prompt('Pick a person: (s)am, (j)ill, (b)ob, or (q)uit: ');

while (menu !== 'q'){

	for(var i = 0; i < Person.length; i++){
		if(Person[i].name[0] === menu){
			var client = Person[i];
			break;
		}
		else { client = 'No client selected.'; }
	}

var choice = prompt('What pet do you want to adopt? (d)og, (c)at, (l)izard: ');
var cage = [];

	switch(choice){
		case 'd':
			console.log('Dogs: ', Dogs);
			cage = Dogs;
			break;
		case 'l':
			console.log('Lizards: ', Lizards);
			cage = Lizards;
			break;
		case 'c':
			console.log('Cats: ', Cats);
			cage = Cats;		
			break;
	}

var name = prompt('Type the name of the animal you\'d like: ');

	for(var k = 0; k < cage.length; k++){
		if(cage[k].name === name){
			var takeHome = cage[k];
			var index = k;
			break;
		}
	}

	//Take out of animals
	//splice(where to start, how many places to go);
	client.pets.push(takeHome);

	menu = prompt('Pick a person: (s)am, (j)ill, (b)ob, or (q)uit: ');
}

console.log('After adoption ', client);
console.log('Animals array ', takeHome);

console.log('Dogs: ', Dogs);
console.log('Cats: ', Cats);
console.log('Lizards: ', Lizards);

