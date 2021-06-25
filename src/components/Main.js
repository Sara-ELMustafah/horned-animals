import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornsData from './HornsData.json';


class Main extends React.Component {
    
    render() {
        return (
            <div>
                {/* Sending the props to HornedBeasts */}

                {HornsData.map((elemnet,index) => {
                    return(
                        <HornedBeasts //This's the call back function
                        title={elemnet.title}
                        imageUrl={elemnet.image_url}
                        description={elemnet.description}
                        key={index}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Main;