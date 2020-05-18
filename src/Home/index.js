import React from 'react'
import './index.css'

export default function Home() {
	return(
		<div className="Home">
			<aside>
				<h1>Welcome</h1>
				<h2>REFUGIOS DE PERRITOS</h2>
				<p>
					Noluisse singulis deserunt has eu, per esse iusto scripta ne. 
					Te iusto eripuit epicuri nam, vel purto natum cu. 
					Te nam fabulas platonem conclusionemque, ex novum quidam facete sea.
					Nec ne nemore liberavisse, no justo alterum eam. An latine detracto reprehendunt vim. 
					Choro salutatus sit eu.
				</p>
				<h2>ADOPTERS</h2>
				<p>
					Noluisse singulis deserunt has eu, per esse iusto scripta ne. 
					Te iusto eripuit epicuri nam, vel purto natum cu. 
					Te nam fabulas platonem conclusionemque, ex novum quidam facete sea.
					Nec ne nemore liberavisse, no justo alterum eam. An latine detracto reprehendunt vim. 
					Choro salutatus sit eu.
				</p>
			</aside>
			<main>
				<div className="One">
					<img src="https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Dog In Mexico"/>
				</div>
				<div className="Two">
					<img src="https://images.unsplash.com/photo-1537151641189-e685b67326c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80" alt="Corgi"/>
					<p>
						<h2>Meet Homeless Dogs</h2> 
						Thousands of dogs in shelters are waiting for a home. 
						Open your home and heart to a vulnerable dog today. Aliquam malesuada, felis eget 
						eleifend dignissim, est velit tempor quam, at posuere ipsum 
						lacus eget neque. Curabitur eu sodales lectus. Nullam eros 
						metus, finibus eget placerat eu, posuere non leo. 
					</p>
				</div>
			</main>
		</div>
	)
}