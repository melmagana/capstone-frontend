import React from 'react'

export default function DogList(props) {
	const dogs = props.dogs.map(dog => {
		return(
			<div key={dog.id}>
				{dog.name}
				<br/>
				{dog.age}
				<br/>
				{dog.breed}
				<br/>
				{dog.gender}
				<br/>
				{dog.personality_type}
				<br/>
				{dog.date_arrived}
				<br/>
				{dog.status}
			</div>
		)
	})
	return(
		<div className="DogList">
			<div>{dogs}</div>
		</div>
	)
}