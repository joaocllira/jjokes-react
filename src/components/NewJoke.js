import React from "react";
import axios from "axios";

class NewJoke extends React.Component {
    constructor() {
        super();
        this.state = {
            question: "",
            answer: "",
            author: ""
        }

        this.sendJoke = this.sendJoke.bind(this);
    }

    async sendJoke() {
        const response = await axios.post("http://localhost:3500/joke/create", {
            question: this.state.question,
            answer: this.state.answer,
            author: this.state.author
        });
        console.log(response);
        this.props.jokeSent();
    }

    render() {
        return (
            <div className="new">
                <label>Pergunta (opcional)</label>
                <input name="question" type="text" value={this.state.question} onChange={(e) => this.setState({question: e.target.value})} className="question"/>

                <label>Resposta (ou texto da piada)</label>
                <input name="answer" type="text" value={this.state.answer} onChange={(e) => this.setState({answer: e.target.value})} className="answer"/>

                <label>Autor</label>
                <input name="author" type="text" value={this.state.author} onChange={(e) => this.setState({author: e.target.value})} className="author"/>

                <button onClick={this.sendJoke}>Mandar piada</button>
            </div>
        );
    }
}

export default NewJoke;
