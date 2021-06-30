import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {

    render() {
        return (
            <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', padding: '4rem' }}>
                {/* Sending the props to HornedBeasts */}

                {/* (2) Map over the JSON data in your Main component to render each beast */}
                {this.props.DataArray.map((elemnet, index) => {
                    return (
                        <HornedBeasts //This's the call back function
                            title={elemnet.title}
                            imageUrl={elemnet.image_url}
                            description={elemnet.description}
                            key={index}
                            DisplayModalFun={this.props.DisplayModalFun}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Main;