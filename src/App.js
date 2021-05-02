import React, { Component } from 'react';
import Contacts from './components/contacts';



var s="saifalsohad";





    class App extends Component {
    
      state = {
        contacts: []
      }
       
      componentDidMount() {
        fetch('https://api.github.com/users/saifalsohad')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }



      render() {
        return (
          <div className="d">
          
          <Contacts contacts={this.state.contacts} />
          </div>
        );
      }
    }

    export default App;