import React from "react";
import axios from "axios";

import Joke from "./components/Joke";
import NewJoke from "./components/NewJoke";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            jokes: [],
            currentJoke: null,
            newJokeFlag: false
        };

        this.seeAnotherJoke = this.seeAnotherJoke.bind(this);
        this.sendJoke = this.sendJoke.bind(this);
    }

    async componentDidMount() {
        console.log("componentDidMount");
        await this.fetchJokes();
    }

    async fetchJokes() {        
        const jokes = await axios.get("http://localhost:3500/joke/getAll");
        console.log(jokes);
        await this.setState({
            jokes: jokes.data,
            currentJoke: jokes.data[0]
        });
    }

    seeAnotherJoke() {
        console.log("seeAnotherJoke");
        const { jokes, currentJoke } = this.state;
        this.setState({
            currentJoke: jokes[jokes.indexOf(currentJoke) + 1]
        });
    }

    async sendJoke() {
        console.log("sendJoke");
        await this.fetchJokes();
        this.setState({newJokeFlag: true});
    }

    render() {
        console.log("render");
        console.log(this.state);

        if (!this.state.newJokeFlag) {
            return (
                <div className="App">
                    <Joke joke={this.state.currentJoke} />
                    <button onClick={this.seeAnotherJoke}>
                        Ver outra piada
                    </button>
                    <button onClick={this.sendJoke}>Mandar piada</button>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <NewJoke joke={this.state.currentJoke} jokeSent={() => this.setState({newJokeFlag: false})} />
                </div>
            );
        }
    }
}

export default App;
