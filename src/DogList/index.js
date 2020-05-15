import React from 'react'
import {Card, Image} from 'semantic-ui-react'


export default function DogList(props) {
	const dogs = props.dogs.map(dog => {
		console.log(props.dogs)
		return(
			<Card key={dog.id}>
				<Card.Content>
					<Image
						onClick={() => props.view(dog.id)}  
						src={dog.image}
					/>
				</Card.Content>
			</Card>
		)
	})
	return(
		<div className="MySongList">
			<Card.Group>
				{dogs}
			</Card.Group>
		</div>
	)
}