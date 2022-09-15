import React from 'react';
import Table from "./Table";

class App extends React.Component {
    render() {
        const characters = [
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
                job: 'Bartender'
            }
        ]

        return (
        <div className='App'>
            <h1>This is 🔥</h1>
            <Table characterData={characters}/>
        </div>
        )
    }
}

export default App;