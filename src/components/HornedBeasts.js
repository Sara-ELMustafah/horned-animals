import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component{

    constructor(props){
        super(props);
        this.state={
           Fav:0
        }
    }

    increaseNumOfFav=() => {
        this.setState({
            Fav:this.state.Fav+1
        })
        this.props.DisplayModalFun(this.props.title);
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
                        😸 : {this.state.Fav}
                        </Card.Text>
                        <Button variant="primary">Fav</Button>
                    </Card.Body>
                </Card>
                
         </div>
        )
    }
}

export default HornedBeasts;