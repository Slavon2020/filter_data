export const filterUsers = (users, searchParams) => {

	const {searchingName, searchingLastname, searchingAge, searchingSex} = searchParams;

	const usersToReturn = users.filter(user => {
		const {name, lastname, age, sex} = user;
		let nameFlag = searchingName ? (name.toLowerCase()).includes(searchingName.toLowerCase()) : true;
		let lastnameFlag = searchingLastname ? (lastname.toLowerCase()).includes(searchingLastname.toLowerCase()) : true;
		let ageFlag = searchingAge ? age === +searchingAge : true;
		let sexFlag = searchingSex && searchingSex.length > 0 ? searchingSex.some(el => el === sex) : true;

		return (nameFlag && lastnameFlag && ageFlag && sexFlag)
	})

	return usersToReturn;
}