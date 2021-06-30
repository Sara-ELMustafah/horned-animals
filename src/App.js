import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
//(1)Import the data.json file into your App component and send that data into the Main component
import HornsData from './components/HornsData.json';
//(4)Create a SelectedBeast component and include it in your App
import SelectedBeast from './components/SelectedBeast';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      DataArray: HornsData,
      ModalDisplay: false,
      selectedBeast: {},
    }

  }

  // Function for desplaying the modal
  DisplayModalFun = (ImgTitle) => {
    let selectedBeast = HornsData.find(
      element => element.title === ImgTitle
    );

    this.setState(
      {
        selectedBeast: selectedBeast,
        ModalDisplay: true
      }
    );
  }

  CloseFun = () => {
    this.setState(
      {
        ModalDisplay: false
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        {/* (3)Send a function into your Main component that allows the user to update state in the App */}
        <Main DataArray={this.state.DataArray}
          DisplayModalFun={this.DisplayModalFun} />
        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.ModalDisplay}
          CloseFun={this.CloseFun} />
        <Footer />
      </div>
    )
  }
}

export default App;


// You can use an empty tag <></> instead of the <div></div> 
