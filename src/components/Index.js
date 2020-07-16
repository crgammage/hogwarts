import React from 'react'
import HogCard from './HogCard'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                {this.props.hogs.map((hog, index) =>
                <HogCard 
                key={index}
                {...hog}
                />)}
            </div>
            
        )
    }  
}