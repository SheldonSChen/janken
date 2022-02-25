import React from 'react';
import GameMsg from './GameMsg';
import { Hands, ALL_HANDS, WIN_HANDS } from './Hands';
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.generatePlayer(),
            opponent: this.generatePlayer(),
            result: null,
            totalPlays: 0
        };
    }

    generatePlayer(hand=null, score=0) {
        let player = {
            hand: hand,
            score: score
        };
        return player;
    }

    pickHand() {
        var handIndex = Math.floor(Math.random() * 3);
        return ALL_HANDS[handIndex];
    }

    playHand(playerHand) {
        var oppHand = this.pickHand();
        var playerScore = this.state.player.score;
        var oppScore = this.state.opponent.score;

        if (playerHand === oppHand) {
            this.setState({result: "draw"});
        }
        else if (WIN_HANDS[playerHand].has(oppHand)) {
            playerScore += 1;
            this.setState({result: "win"});
        } else if (WIN_HANDS[oppHand].has(playerHand)) {
            oppScore += 1;
            this.setState({result: "lost"});
        }

        this.setState({ player: this.generatePlayer(playerHand, playerScore)});
        this.setState({ opponent: this.generatePlayer(oppHand, oppScore)});
        this.setState({ totalPlays: this.state.totalPlays + 1 });
    };

    render() {
        return (
            <div>
                <h1>じゃんけん あそぼう!</h1>

                <GameMsg
                    playerHand={this.state.player.hand}
                    opponentHand={this.state.opponent.hand}
                    result={this.state.result}
                ></GameMsg>

                <h2>{this.state.player.score} WIN</h2>
                <h2>{this.state.opponent.score} LOSS</h2>
                <h2>{this.state.totalPlays} PLAYED</h2>

                <button onClick={() => { return this.playHand(Hands.ROCK) }}>グー</button>
                <button onClick={() => { return this.playHand(Hands.SCISSOR) }}>チョキ</button>
                <button onClick={() => { return this.playHand(Hands.PAPER) }}>パー</button>
            </div>
        );
    }
}

export default Game;