import React from 'react'
import './pages.css'

export default function ProjectForm(){
  return (
	// <div></div>
      <div className="inner">
		
				<form action="">
					
					<h3>DashBoard</h3>
					<div className="form-row">
						<div className="form-wrapper">
							<label>Name *</label>
							<input type="text" className="form-control" placeholder="Full Name"/>
						</div>
						<div className="form-wrapper">
							<label >Status *</label>
							<input type="text" className="form-control" placeholder="Ticket Status"/>
						</div>
					</div>
					
					<div class="form-row">
						<div class="form-wrapper">
							<label for="">Level*</label>
							<input type="text" class="form-control" />
						</div>
						<div class="form-wrapper">
							<label for="">Train Name</label>
							<input type="text" class="form-control" />
						</div>
					</div>
					
					

          <div className="form-wrapper">
            <label>Upload Your Proof of Citizianship:</label> <input type="file" /><br/>
          </div>


					<button data-text="Upload Now">
						<span>Upload</span>
					</button>



				</form>
			</div>
		
  )
}
