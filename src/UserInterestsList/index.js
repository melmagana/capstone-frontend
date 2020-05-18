import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import './index.css'


export default function UserInterestsList(props) {
	const interests = props.interests.map((interest) => {
		console.log(props.interests)
		return(
			<Card className="Key" key={interest.id}>
				<Card.Content className="Content">
					<h1>{interest.name}</h1>
					<small>
						{interest.breed}
					</small>
					<Image src={interest.image}/>
					<h2>
						About
					</h2>
					<hr/>
					<p><span>Adoption Status &mdash;</span> {interest.status}</p>
					<h2 className="Located">
						Located @
					</h2>
					<hr/>
					<p><span>Shelter &mdash;</span> {interest.shelter.name} <span>in</span> {interest.shelter.city}, {interest.shelter.state}, {interest.shelter.country}</p>
				</Card.Content>
			</Card>
		)
	})
	return(
		<div className="UserInterestsList">
			<Card.Group>
				{interests}
			</Card.Group>
		</div>
	)
}