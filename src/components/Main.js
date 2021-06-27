import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {
    
    render() {
        return (
            <div>
                {/* Sending the props to HornedBeasts */}

                {this.props.DataArray.map((elemnet,index) => {
                    return(
                        <HornedBeasts //This's the call back function
                        title={elemnet.title}
                        imageUrl={elemnet.image_url}
                        description={elemnet.description}
                        key={index}
                        displayAsModal={this.props.displayAsModal}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Main;