import React from 'react';

export function GameInactive(props) {
	return (
		<button
			className="btn btn--start"
			onClick={ props.startCallback }
		>
			Start the game
		</button>
	)
}
