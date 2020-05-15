import React, {Component} from 'react'
import {Modal} from 'semantic-ui-react'

export default class ShowDogContainer extends Component {
	render() {
		return(
			<div>
				<h2>{this.props.showDogData.name}</h2>
				{
					this.props.showDogData.name !== undefined
					&&
					<Modal open={true} closeIcon onClose={this.props.closeModal}>
						<div className="ShowDogContainer">
							<h3>{this.props.showDogData.name}</h3>
						</div>
					</Modal>
				}
			</div>
		)
	}
}