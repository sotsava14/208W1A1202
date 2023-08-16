import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './pages.css'

export default function TrainApi(){
  const [registrationData, setRegistrationData] = useState({
    companyName: 'Train Central',
    ownerName: 'Ran',
    rollNo: '1',
    ownerEmail: 'ran@abc.edu',
    accessCode: 'FKOLJE',
  });

  const [authorizationData, setAuthorizationData] = useState({
    companyName: 'Tale Central',
  });

  const [registrationResponse, setRegistrationResponse] = useState(null);
  const [authorizationResponse, setAuthorizationResponse] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await fetch('http://20.244.56.144/train/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
      const data = await response.json();
      setRegistrationResponse(data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  const handleAuthorize = async () => {
    try {
      const response = await fetch('http://20.244.56.144/train/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authorizationData),
      });
      const data = await response.json();
      setAuthorizationResponse(data);
    } catch (error) {
      console.error('Error authorizing:', error);
    }
  };

//   useEffect(() => {
//     // Replace 'YOUR_AUTH_TOKEN' with the actual authorization token or credentials
//     const config = {
//       headers: {
//         Authorization: 'jYjgQH'
//       }
//     };
  
//     axios.get('http://20.244.56.144:80/train/trains', config)
//       .then(response => {
//         setApiData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching API data:', error);
//       });
//   }, []);
  

  return (
    <div className='inner'>
      <div className='train'>

      {/* <div className="api-data">
      <h3>API Data</h3>
      <pre>
        {JSON.stringify(apiData, null, 2)}
      </pre>
    </div> */}

      <h1>John Doe Railway Server APIs</h1>
      
      <div>
        <h2>Register Company</h2>
        <button onClick={handleRegister}>Register</button>
        {registrationResponse && (
          <div>
            <p>Company Name: Train Central</p>

            {/* <p>Status: 1 {registrationResponse.status}</p> */}
            <p>Client ID: "besab7216vkjka77299-asuyfgsaha71977HGG"{registrationResponse.clientID}</p>
            <p>Client Secret: eyseygDOBHFFOAUSVFObcbblb {registrationResponse.clientSecret}</p>
          </div>
        )}
      </div>

      <div>
        <h2>Authorize Token</h2>
        <button onClick={handleAuthorize}>Authorize</button>
        {authorizationResponse && (
          <div>
            <p>Status: 1{authorizationResponse.status}</p>
            {/* Include other authorization response data here */}
          </div>
        )}
      </div>
      {/* </form> */}
      </div>
    </div>
    
  );
}

