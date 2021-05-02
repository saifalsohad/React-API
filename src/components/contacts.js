import React from 'react'

    const Contacts = ({ contacts }) => {
      return (
        <div>
          <center><h1>My github details from Github Public APi</h1></center>
         
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">{contacts.name}</h4>
                <h5 class="card-subtitle mb-2 text-muted">{contacts.company}</h5>
                <h5 class="card-subtitle mb-2 text-muted">{contacts.location}</h5>
                <h5 class="card-subtitle mb-2 text-muted">Last Update: {contacts.updated_at}</h5>
                <h5 class="card-subtitle mb-2 text-muted">Number of Public Repo : {contacts.public_repos}</h5>
              </div>
            </div>
          
        </div>
      )
    };

    export default Contacts