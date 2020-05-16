import React from 'react'
import {Card, Image} from 'semantic-ui-react'


export default function UserInterestsList(props) {
	const interests = props.interests.map((interest) => {
		console.log(props.interests)
		return(
			<Card key={interest.id}>
				<Card.Content>
					{interest.name}
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