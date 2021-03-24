import React, { Fragment } from 'react';

function Input(props) {
	const {name, label, type, onChange} = props;
	return (
		<Fragment>
			<label>
				{label} :
				<input name={name} type={type} onChange={onChange}/>
			</label>
		</Fragment>
	);
}

export default Input;