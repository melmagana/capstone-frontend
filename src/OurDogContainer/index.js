import React, {Component} from 'react'
import AddDogForm from '../AddDogForm'
import EditDogForm from '../EditDogForm'
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
	deleteDog = async (idOfDogToDelete) => {
		const url = process.env.REACT_APP_API_URL + '/api/v1/dogs/' + idOfDogToDelete

		try {
			const deleteDogResponse = await fetch(url, {
				credentials: 'include',
				method: 'DELETE'
			})
			console.log('deleteDogResponse', deleteDogResponse)
			const deleteDogJson = await deleteDogResponse.json()
			console.log('deleteDogJson', deleteDogJson)

			if(deleteDogResponse.status === 200) {
				this.setState({
					dogs: this.state.dogs.filter(dog => dog.id !== idOfDogToDelete)
				})
			}

		} catch(err) {
			console.error('Error deleting dog with API')
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
	editDog = (idOfDogToEdit) => {
		console.log('idOfDogToEdit', idOfDogToEdit)
		this.setState({
			idOfDogToEdit: idOfDogToEdit,
			currentView: 'edit'
		})
	}
	updateDog = async (updateDogInfo) => {
		const url =process.env.REACT_APP_API_URL + '/api/v1/dogs/' + this.state.idOfDogToEdit

		try {
			const updateDogResponse = await fetch(url, {
				credentials: 'include',
				method: 'PUT',
				body: JSON.stringify(updateDogInfo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('updateDogResponse', updateDogResponse)
			const updateDogJson = await updateDogResponse.json()
			console.log('updateDogJson', updateDogJson)

			if(updateDogResponse.status === 200) {
				const dogs = this.state.dogs
				const indexOfDogBeingUpdated = dogs.findIndex(dog => dog.id === this.state.idOfDogToEdit)
				dogs[indexOfDogBeingUpdated] = updateDogJson.data
				this.setState({
					dogs: dogs,
					currentView: 'show'
				})
			}

		} catch(err) {
			console.error('Error trying to update dog with API')
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
			<span onClick={() => this.setViews('show')}>Our Dogs</span>
			<span onClick={() => this.setViews('add')}>Add Dog</span>
			<span onClick={() => this.setViews('edit')}>Edit Dog</span>
			<h2>Our Dogs</h2>
			{
				this.state.currentView === 'show'
				?
				<OurDogList 
					dogs={this.state.dogs}
					editDog={this.editDog}
					deleteDog={this.deleteDog}
				/>
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
			{
				this.state.currentView === 'edit'
				?
				<EditDogForm
					key={this.state.idOfDogToEdit}
					dogToEdit={this.state.dogs.find((dog) => dog.id === this.state.idOfDogToEdit)}
					updateDog={this.updateDog}
				/>
				:
				null
			}
			</div>
		)
	}
}