import React, { Component } from 'react';

//const Joke = ({ joke }) => {
    //const { setup, punchline } = joke;
const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }))
        .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }))
        .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <p>A React JS app I wrote that hits an API to get stupid jokes.</p>
                <hr />
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <hr />
                <h3>Want 10 new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(joke => (
                        //const { id, setup, punchline } = joke;
                        //return <p key={id}>{setup} <em>{punchline}</em></p>
                        <Joke key={joke.id} joke={joke} />
                    ))
                }
            </div>
        )
    }
}

export default Jokes;