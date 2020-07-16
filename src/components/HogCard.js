import React from 'react'

export default class HogCard extends React.Component {
    state = {
        active: false
    }

handleClick = () => {
    this.setState( { active: !this.state.active })
}


    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Name: {this.props.name}</h1>
                <img src={`.../public/hog-imgs/${this.props.name.split(' ').join('_').toLowerCase()}.jpg`} alt={this.props.name}/>
            {this.state.active ? 
                (<div>
                    <p>Specialty: {this.props.specialty}</p>
                    <p>Greased: {this.props.greased}</p>
                    <p>Weight: {this.props.weight} Lbs</p>
                    <p>{this.props["highest medal achieved"]}</p>
                </div>)
             : (<div></div>)
            }
            </div>
        )
    }









}