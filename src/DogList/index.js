import React from 'react'

export default function DogList(props) {
	const dogs = props.dogs.map(dog => {
		return(
			<li key={dog.id}>
				{dog.name}
			</li>
		)
	})
	return(
		<div className="DogList">
			<ul>{dogs}</ul>
		</div>
	)
}