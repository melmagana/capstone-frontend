import React from 'react'

export default function OurDogList(props) {
	const dogs = props.dogs.map(dog => {
		console.log(props.dogs)
		return (
			<div key={dog.id}>
				{dog.name}
				<br/>
				{dog.breed}
				<br/>
				{dog.status}
				<button onClick={() => props.editDog(dog.id)}>
					Edit
				</button>
				<button onClick={() => props.deleteDog(dog.id)}>
					Delete
				</button>
			</div>
		)
	})
	return (
		<div className="OurDogList">
			{dogs}
		</div>
	)
}