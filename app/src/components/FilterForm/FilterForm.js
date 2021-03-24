import Input from '../Input/Input';
import {filterUsers} from './filterUsers';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../store/selectors';
import {updateFilteredUsers} from '../../store/actions';
import './style.scss';


function FilterForm() {

	let searchParams = {};
	const users = useSelector(getUsers())
	const dispatch = useDispatch()

	const changeSearchParams = (event) => {
		const { target } = event;

		const toggleSex = (userSex) => {
			let sexArray = searchParams.searchingSex || [];
			const index = sexArray.indexOf(userSex);
			if (sexArray.length === 0 || index === -1) {
				sexArray.push(userSex)
				searchParams = {...searchParams, searchingSex: sexArray}
			} else {
				sexArray = sexArray.filter(el => el !== userSex)
			}
			searchParams = {...searchParams, searchingSex: sexArray}
		}

		switch (target.name) {
			case 'name-input':
				searchParams = {...searchParams, searchingName: target.value}
				break
			case 'lastname-input':
				searchParams = {...searchParams, searchingLastname: target.value}
				break
			case 'age-input':
				searchParams = {...searchParams, searchingAge: target.value}
				break
			case 'sex-male':
				toggleSex('m')
				break
			case 'sex-female':
				toggleSex('f')
				break
			default:
				throw new Error('No such search params...')
		}
		const filteredUsers = filterUsers(users, searchParams);
		dispatch(updateFilteredUsers(filteredUsers));
	}

	return (
		<div className='filter-form'>
			<Input name={'name-input'} label={'Имя'} type={'text'} onChange={(ev) => changeSearchParams(ev)}/>
			<Input name={'lastname-input'} label={'Фамилия'} type={'text'} onChange={(ev) => changeSearchParams(ev)}/>
			<Input name={'age-input'} label={'Возраст'} type={'number'} onChange={(ev) => changeSearchParams(ev)}/>
			<div className='sex-filter'>
				<span>Пол: </span>
				<Input name={'sex-male'} label={'муж'} type={'checkbox'} onChange={(ev) => changeSearchParams(ev)}/>
				<Input name={'sex-female'} label={'жен'} type={'checkbox'} onChange={(ev) => changeSearchParams(ev)}/>
			</div>
		</div>
	);
}

export default FilterForm;