import React from 'react';
import {useSelector} from 'react-redux';
import {getFilteredUsers, getUsers} from '../../store/selectors';
import User from '../User/User';
import './style.scss';

function UsersList(props) {

	const users = useSelector(getUsers());
	const filteredUsers = useSelector(getFilteredUsers());

	const usersToShow = filteredUsers || users;

	return (
		<ul className='user-list'>
			{usersToShow && usersToShow.map(el => {
				const {name, lastname, age, sex, id} = el;
				return (
					<User key={id} name={name} lastname={lastname} age={age} sex={sex}/>
					)
				})}
		</ul>
	);
}

export default UsersList;