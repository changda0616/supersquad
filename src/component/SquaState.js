import React, { Component } from 'react';
import { connect } from 'react-redux';
class SquadStats extends Component {
    strength(){
        let strength=0
        this.props.heroes.forEach(item=>strength+=item.strength)
        return strength
    }
    intelligence(){
        let intelligence=0
        this.props.heroes.forEach(item=>intelligence+=item.intelligence)
        return intelligence
    }
    speed(){
        let speed=0
        this.props.heroes.forEach(item=>speed+=item.speed)
        return speed
    }
    render(){
        return(
            <div >
                <h4>SquadStats</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <b>Strength:</b> {this.strength()}
                    </li>
                    <li className='list-group-item'>
                        <b>intelligence:</b> {this.intelligence()}
                    </li>
                    <li className='list-group-item'>
                        <b>speed:</b> {this.speed()}
                    </li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        heroes: state.heroes
    }
}

export default connect(mapStateToProps,null)(SquadStats)