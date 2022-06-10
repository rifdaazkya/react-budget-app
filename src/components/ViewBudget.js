import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: Rp.{props.budget}</span>
			<button type='button' class='btn btn-dark' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;
