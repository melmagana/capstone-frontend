import React from 'react'
import './index.css'

export default function OurDogList(props) {
	const dogs = props.dogs.map(dog => {
		console.log(props.dogs)
		return (
			<div className="Key" key={dog.id}>
				<div className="One">
					<img src={dog.image} alt="pup"/>
				</div>
				<div className="Two">
					<h1>{dog.name}</h1>
					<small>{dog.breed}</small>
					<p><span>Adoption Status &mdash;</span> {dog.status}</p>
				</div>
				<div className="Admin">
					<button className="Edit" onClick={() => props.editDog(dog.id)}>
						Edit
					</button>
					<button className="Delete" onClick={() => props.deleteDog(dog.id)}>
						Delete
					</button>
				</div>
			</div>
		)
	})
	return (
		<div className="OurDogList">
			<h1>Our Dogs</h1>
			{dogs}
		</div>
	)
}