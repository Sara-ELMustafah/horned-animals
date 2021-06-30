import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import {Button,Card} from 'react-bootstrap/';

class SelectedBeast extends React.Component {

    render() {
        return (

          //(5)Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Boothstrap
            <Modal show={this.props.show} onHide={this.props.CloseFun}>
              
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Card 
              bg="dark"
              text="light"
              onClick={this.displayAsModal}
            >
              <Card.Img variant="top" alt={this.props.selectedBeast.title} src={this.props.selectedBeast.image_url} />
              <Card.Body>
                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                <Card.Text>
                  {this.props.selectedBeast.description}
                </Card.Text>
              </Card.Body>
            </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
               
            </Modal>
        )
    }
}

export default SelectedBeast;