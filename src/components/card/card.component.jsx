import React from 'react';
import './card.styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const Card = (props) => {
	return (
		<div className="col-md-3">
			<div className="card">
				<div className="card-image">
					<img
						className="img-responsive"
						src={`http://robohash.org/${props.monster.id}?set=set2&size=180x180`}
						alt="monster"
					/>
				</div>
				<div className="card-title text-center">
					<h2>{props.monster.name}</h2>
				</div>
				<div className="card-body text-center">
					<p>{props.monster.email}</p>
				</div>
			</div>
		</div>
	);
};
