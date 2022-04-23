import React from "react";
import MadlibForm from "./MadlibForm";
import './Madlib.css';

const Madlib = (noun1, noun2, adjective, color) => {


	return (
		<div className="Madlib" >
			<h1>Madlibs!</h1>
			<MadlibForm />
		</div>
	);


};


export default Madlib;