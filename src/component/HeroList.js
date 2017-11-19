import React, { Component } from 'react';
import {connect} from 'react-redux';
import { removeCharacterById } from "../actions";

class HeroList extends Component {
    render(){
        console.log('this.props', this.props);            
        return (
            <div>
                <h4>HeroList</h4>
                <ul className='list-group'>
                    {
                        this.props.heroes.map(hero => {
                            return (
                                <li key={hero.id} className='list-group-item'>
                                    <div className='list-item'>{hero.name}</div>
                                    <div className='list-item right-button'
                                        onClick={()=>this.props.removeCharacterById(hero.id)}
                                    >-</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      heroes: state.heroes
    }
}


export default connect(mapStateToProps, {removeCharacterById})(HeroList);