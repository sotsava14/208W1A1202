import React from 'react'
import mainlappy from '../Assets/main-lappy.gif'
import { Link } from 'react-router-dom'
import maintrain from '../Assets/main-train.gif'

export default function MainTrack() {
  return (
    <div className='main-track'>

      <h1>Here's Where You can book TICKETS With your Details</h1>
 

	  <div className='main-div2'>
      
	  <div>

	  <Link to ="/explore">
	  <button className="button" >

	  <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
		<path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
	  	Explore
		</button></Link>
		
		<Link to ="/tickets">
		<button className="btn"> Tickets Here</button><br/>

		<button className="button">
   			<svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
			<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z">
				</path></svg>
  		Status
		</button></Link>

		<button className="btn">Train Plan</button><br/>

	  	<button className="button">
		  <svg className="svgIcon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
			<path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>

  		Timeline
		</button>


		<button className="btn"> Track Flow</button>
		</div>

	  <img src={maintrain} alt ="sample-image"></img>
	  

		
		</div>
       </div>
  )
}
