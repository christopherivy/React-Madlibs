import React, { useState } from "react";
import './MadlibForm.css';

const MadlibForm = () => {
	const [ formData, setFormData ] = useState({
		noun1: '',
		noun2: '',
		adjective: '',
		color: '',
		verb: ''
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(data => ({
			...data,
			[ name ]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { color, noun1, noun2, adjective, verb } = formData;
		alert(`There was a  ${color} ${noun1} who ${verb} a ${adjective} ${noun2} `);
	};

	return (
		<div className="MadlibForm" >
			<form onSubmit={ handleSubmit } >
				<p>
					<input
						id="noun1"
						type="text"
						placeholder="noun1"
						value={ formData.noun1 }
						name="noun1"
						onChange={ handleChange }
					/>
				</p>

				<p>

					<input
						id="noun2"
						type="text"
						placeholder="noun2"
						value={ formData.noun2 }
						name="noun2"
						onChange={ handleChange } />
				</p>

				<p>
					<input
						id="adjective"
						type="text"
						placeholder="adjective"
						value={ formData.adjective }
						name="adjective"
						onChange={ handleChange } />
				</p>

				<p>

					<input
						id="color"
						type="text"
						placeholder="color"
						value={ formData.color }
						name="color"
						onChange={ handleChange } />
				</p>

				<p>

					<input
						id="verb"
						type="text"
						placeholder="verb"
						value={ formData.verb }
						name="verb"
						onChange={ handleChange } />
				</p>

				<button >Get Story!</button>
			</form>
		</div>
	);
};


export default MadlibForm;