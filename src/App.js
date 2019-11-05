import React from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ monsters: users }) });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  handleElement = (e) => {
    console.log(e.target.value);
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="container bg-gradient">
        <h1 className="header text-center spooky fs-5rem">
          Monster Rolodex
        </h1>
        <div className="row my-3 justify-content-center">
          <div className="col-md-6">
            <SearchBox placeholder="Search Monster"
              handleChange={this.handleChange} />
          </div>
        </div>
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
