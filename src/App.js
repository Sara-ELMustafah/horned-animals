import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import HornsData from './components/HornsData.json';
import SelectedBeast from './components/SelectedBeast';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      DataArray: HornsData,
      displayModal: false,
      selectedBeast: {},
    }

  }

  // Function for desplaying the modal
  displayAsModal = (name) => {
    let selectedBeast = HornsData.find(beast => beast.title === name);
    this.setState({ selectedBeast, displayModal: true });
  }

  handleClose = () => {
    this.setState({ displayModal: false });
  }

  render() {
    return (
      <div>
        <Header />
        <Main DataArray={this.state.DataArray}
              displayAsModal={this.displayAsModal} />
        <SelectedBeast
         selectedBeast={this.state.selectedBeast}
          show={this.state.displayModal}
          handleClose={this.handleClose} />
        <Footer />
      </div>
    )
  }
}

export default App;


// You can use an empty tag <></> instead of the <div></div> 
