import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state={
           favorites:0
        }
    }

    increaseNumOfFav=() => {
        this.setState({
            favorites:this.state.favorites+1
        })
    }

    render(){
        return(
         <div>
             {/* <h2>{this.props.title}</h2>
             <img onClick={this.increaseNumOfFav} src={this.props.imageUrl} alt={this.props.title} title={this.props.title} className='img'/>
             <p>{this.props.description}</p>
             <p>😸: {this.state.favorites}</p> */}


             <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.increaseNumOfFav} variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                             {this.props.description} <br/>
                        😸 : {this.state.favorites}
                        </Card.Text>
                        <Button variant="primary">Fav</Button>
                    </Card.Body>
                </Card>
                
         </div>
        )
    }
}

export default HornedBeasts;

  {/* <p>😸:{this.props.description}</p> */}