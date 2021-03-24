import React from 'react';
import './style.scss';

function User(props) {
	const {name, lastname, age, sex} = props;

	return (
		<li className='user'>
			<p>{name} {lastname}</p>
			<p>Возраст: {age}</p>
			<p>Пол: {sex === 'm' ? 'мужской' : 'женский'}</p>
		</li>
	);
}

export default User;