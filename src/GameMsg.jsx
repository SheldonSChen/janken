import React from 'react';

class GameMsg extends React.Component {
    render() {
        const playerHand = this.props.playerHand;
        const opponentHand = this.props.opponentHand;
        
        var result;
        switch (this.props.result) {
            case "win":
                result = "勝った!";
                break;
            case "lost":
                result = "負けた〜";
                break;
            case "draw":
                result = "あいこだ。";
                break;
            default:
                result = "";
        }
        
        if (this.props.result != null) {
            return (
                <div className='game-msg'>
                    <h2>{playerHand}を出した!</h2>
                    <h2>相手は{opponentHand}を出した!</h2>
                    <h2>{result}</h2>
                </div>
            );
        } else {
            return (
                <div className='game-msg'>
                    <h2>遊ぼう!</h2>
                </div>
            );
        }
    }
}
export default GameMsg;