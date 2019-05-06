import React from "react";

class Joke extends React.Component {
    render() {
        if (this.props.joke) {
            const { question, answer, author, createdAt } = this.props.joke;

            return (
                <div className="joke">
                    <h1 className="question">{question}</h1>
                    <h2 className="answer">{answer}</h2>
                    <h4 className="author">Submetida por: {author}</h4>
                    <h4 className="date">Em: {createdAt}</h4>
                </div>
            );
        } else {
            return (
                <div className="joke">
                    <h1 className="semPiadas">Sem piadas</h1>
                </div>
            );
        }
    }
}

export default Joke;
