import Navbar from "./Components/Navbar";
import Badge from './Components/Badge';
import BadgeForm from './Components/BadgeForm';
import React from "react";

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
        <Badge firstName="Joel" lastName="DoMe" job="Frontend" username="iJCode1" state={this.state} />
        <BadgeForm handleChangle={this.handleChangle} />
      </>

    )
  }
}

export default App;
