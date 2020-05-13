import React, {Component} from 'react'
import AddDogForm from '../AddDogForm'
import OurDogList from '../OurDogList'

export default class OurDogContainer extends Component {
	constructor() {
		super()

		this.state = {
			dogs: [],
			currentView: 'show'
		}
	}
	componentDidMount() {
		this.getDogs()
	}
	getDogs = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/dogs/our_dogs'
			const dogsResponse = await fetch(url, {
				credentials: 'include'
			})
			console.log('dogsResponse', dogsResponse)
			const dogsJson = await dogsResponse.json()
			console.log('dogsJson', dogsJson)

			this.setState({
				dogs: dogsJson.data
			})
		} catch(err) {
			console.error('Error getting user dogs from API')
			console.error(err)
		}
	}
	createDog = async (dogToAdd) => {
		console.log('here is the dog you are trying to add')
		console.log(dogToAdd)

		try {
			const url = process.env.REACT_APP_API_URL + '/api/v1/dogs/'
			const createDogResponse = await fetch(url, {
				credentials: 'include',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(dogToAdd),
			})
			console.log('createDogResponse', createDogResponse)
			const createDogJson = await createDogResponse.json()
			console.log('createDogJson', createDogJson)

			if(createDogResponse.status === 201) {
				const dogs = this.state.dogs
				dogs.push(createDogJson.data)
				this.setState({
					dogs: dogs,
					currentView: 'show'
				})
			}
		} catch(err) {
			console.error('Error trying to add dog with API')
			console.error(err)
		}
	}
	setViews = (newView) => {
		this.setState({
			currentView: newView
		})
	}
	render() {
		return (
			<div className="OurDogContainer">
			<span onClick={() => this.setViews('add')}>Add Dog</span>
			<span onClick={() => this.setViews('show')}>Our Dogs</span>
			<h2>Our Dogs</h2>
			{
				this.state.currentView === 'show'
				?
				<OurDogList dogs={this.state.dogs}/>
				:
				null
			}
			{
				this.state.currentView === 'add'
				?
				<AddDogForm createDog={this.createDog}/>
				:
				null
			}
			</div>
		)
	}
}