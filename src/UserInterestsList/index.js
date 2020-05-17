import React from 'react'
import {Card, Image} from 'semantic-ui-react'
import './index.css'


export default function UserInterestsList(props) {
	const interests = props.interests.map((interest) => {
		console.log(props.interests)
		return(
			<Card key={interest.id}>
				<Card.Content>
					<h1>{interest.name}</h1>
					<Image src={interest.image}/>
					{interest.shelter.name}
					<Card.Meta>
						{interest.shelter.city}, {interest.shelter.state}, {interest.shelter.country}
					</Card.Meta>
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