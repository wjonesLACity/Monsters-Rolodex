import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    // This is an object
    this.state = {
      monsters: [],
      searchField: ''
    };
    // Declare the functipn 
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

handleChange(e) {
  {/* Show typed input in real-time */}
  this.setState({ searchField: e.target.value }, () =>
  console.log(this.state)
  );
}

  render(){
    {/*
      Equivalent to 
      const monsters = this.state.monsters;
      const searchField = this.state.searchField;
    */}
    const { monsters, searchField } = this.state;
    {/* Get back a new array by filter, take a name and make it lowercase 
      and .includes to determine whether the array contains certain values and lowercase.
    */}
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
