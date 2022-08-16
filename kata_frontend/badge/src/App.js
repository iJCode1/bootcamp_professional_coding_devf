import Navbar from "./Components/Navbar";
import Badge from './Components/Badge';
import BadgeForm from './Components/BadgeForm';
import React from "react";
import './styles/Main.css';

class App extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
    }
  }

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
      </>

    )
  }
}

export default App;
