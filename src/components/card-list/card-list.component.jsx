import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
	return (
		<div className="row mt-5">
			{props.monsters.map((monster) => {
				return <Card key={monster.id} monster={monster} />;
			})}
		</div>
	);
};
