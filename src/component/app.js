import React,{ Component } from "react";
import CharacterList from "./CharacterList";
import HeroList from './HeroList'
import SquadStats from "./SquaState";
import '../style/index.css';

class App extends Component {
    render(){
        return(
            <div className="App">
                <div className='col-md-4'>
                    <CharacterList/>
                </div>
                <div className='col-md-4'>
                    <HeroList/>
                </div>
                <div className='col-md-4'>
                    <SquadStats/>
                </div>
            </div>
        )
    }
}

export default App;