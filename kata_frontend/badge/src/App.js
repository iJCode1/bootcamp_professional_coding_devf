import Navbar from "./Components/Navbar";
import Badge from './Components/Badge';
import BadgeForm from './Components/BadgeForm';
import CharacterItem from './Components/CharacterItem';
import React from "react";
import axios from 'axios';
import './styles/Main.css';
class App extends React.Component {
  state = {
    characters: [],
    form: {
      firstName: "",
      lastName: "",
    }
  }
  componentDidMount(){
    console.log("ComponentDidMount");
    this.fetchApi();
  }

  componenteDidUpdate(){
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount(){
    console.log("ComponentWillUnmount");
  }

  fetchApi = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      const characters = res.data.results;
      this.setState({
        ...this.state,
        characters
      })
    });
  };

  handleChangle = e => {
    // Se modifica el estado
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  };
  render() {
    console.log(this.state);
    return (
      <>
        <Navbar />
        <main className="main">
          <Badge firstName="Joel" lastName="DoMe" job="Frontend" username="iJCode1" state={this.state} />
          <BadgeForm handleChangle={this.handleChangle} />
        </main>
        <div className="container">
          <div className="App">
            <ul className="row">
              <li className="col-3 col-md-3">
                {
                  this.state.characters.map(character => (<CharacterItem character={character} key={character} />))
                }
              </li>
            </ul>
          </div>
        </div>
      </>

    )
  }
}

export default App;
