'use strict';

const random = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

/* ---- names ---- */

const genName = () => {
	const names = [
		'Sandra',
		'Micle',
		'Jess',
		'Franclin',
		'Markus',
		'Margara',
		'Pit',
		'Samon',
		'Alex',
		'Nicol',
		'Zuhra',
		'Pastila',
		'Lilu',
		'Corbin',
		'MultiPasport',
	];
	
	return names[random(0, names.length)];
};

/* ---- surnames ---- */

const genSurname = () => {
	const surnames = [
		'Makee', 
		'Cree', 
		'Lom',
		'Perker', 
		'Manson',
		'Dalas',
	];
	
	const rndSurnameIndex = random(0, surnames.length + surnames.length / 2);
	const rndSurname = rndSurnameIndex >= surnames.length ? '' : surnames[rndSurnameIndex];
	return rndSurname;
};

/* ---- salary ---- */

const genFullName = () => {
	const name = genName();
	const surname = genSurname();
	const space = surname === '' ? '' : ' ';
	return `${name}${space}${surname}`
}
/* ---- salary full ---- */

const genSalary = () => {
	const salaryTypes = [
		'$', 
		'€',
		'£', 
		'₽',
	];
	
	const rndSalary = random(57, 613);
	const rndSalaryType = salaryTypes[random(0, salaryTypes.length)];
	
	return `${rndSalary}${rndSalaryType}`;
};

/* ---- pets ---- */

const genPet = () => {
	const pets = [
		'hamster',
		'cat',
		'dog',
		'parrot',
	];
	
	const rndPetIndex = random(0, pets.length + pets.length / 2);
	const rndPet = rndPetIndex >= pets.length ? '' : pets[rndPetIndex];
	return rndPet;
};
const genPets = () => {
	const pet1 = genPet();
	
	if (pet1 === '') {
		return 'none';
	} 
	
	// pet 2
	const shouldOneMorePet = Boolean(random(0, 2));
	
	if (!shouldOneMorePet) { return pet1; }
	
	const pet2 = genPet();
	
	if (pet2 === '') {
		return pet1;
	} 
	
	return `${pet1} ${pet2}`;
}

/* ---- full ---- */

const genProfile = () => {
	return `
		Name: ${genFullName()}, 
		salary: ${genSalary()}, 
		pets: ${genPets()}
	`.replace(/[(\n)(\t)]/g,'');
};
const genProfiles = (count) => {
	const profiles = [];
	for (let i = 0; i < count; i += 1) {
		profiles.push(genProfile());
	}
	return profiles;
};