import React from 'react'
import {Card, Image} from 'semantic-ui-react'


export default function DogList(props) {
	const dogs = props.dogs.map((dog, i) => {
		console.log(props.dogs)
		return(
			<Card key={dog.id + "-" + i}>
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
		<div className="DogList">
			<Card.Group>
				{dogs}
			</Card.Group>
		</div>
	)
}