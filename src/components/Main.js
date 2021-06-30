import React from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import HornsData from './HornsData.json';

class Main extends React.Component {

    filter = (e) => {
        const numHorns = parseInt(e.target.value);
        let gallery = HornsData;
        if (numHorns) {
          gallery = HornsData.filter((creature) => creature.horns === numHorns);
        }
        this.props.displayFilteredImages(gallery);
      };

    render() {
        return (
            <div id="beast-container">
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>How Many Horns?</Form.Label>
            <Form.Control as="select" onChange={this.filter}>
              <option value="">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow...</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <CardColumns>
        {this.props.DataArray.map((elemnet, index) => (
            <HornedBeasts //This's the call back function
            title={elemnet.title}
            imageUrl={elemnet.image_url}
            description={elemnet.description}
            key={index}
            DisplayModalFun={this.props.DisplayModalFun}
        />
          
        ))}
        </CardColumns>

            </div>
        )
    }
}

export default Main;