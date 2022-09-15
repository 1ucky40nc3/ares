import React from 'react'
import Table from "./Table"


class App extends React.Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer'
            },
            {
                name: 'Bee',
                job: 'Aspiring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            }
        ]
    }

    removeCharacter = (index) => {
        const { characters } = this.state
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    render() {
        const { characters } = this.state

        return (
        <div className='App'>
            <h1>This is 🔥</h1>
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        </div>
        )
    }
}

export default App