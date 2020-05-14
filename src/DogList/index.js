import React from 'react'
import './index.css'

export default function DogList(props) {
	const dogs = props.dogs.map(dog => {
		return(
			<div key={dog.id}>
				<div className="Card">
					<img src={dog.image} alt="pup"/>
					<div className="InfoContainer">
						<h4>{dog.name}</h4>
						<p className="Meta">
							{dog.breed} &mdash; {dog.gender}
						</p>
						<hr/>
						<p className="Data">
							<br/>
							<b>AGE</b> &mdash; {dog.age}
							<br/>
							<b>TYPE</b> &mdash; {dog.personality_type}
							<br/>
							<b>ARRIVED</b> &mdash;{dog.date_arrived}
							<br/>
							<b>STATUS</b> &mdash; {dog.status}
							<br/>
							<b>SHELTER</b> &mdash; {dog.shelter.name}
						</p>
					</div>
				</div>
			</div>
		)
	})
	return(
		<div className="DogList">
			<div>{dogs}</div>
		</div>
	)
}