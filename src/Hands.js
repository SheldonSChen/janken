export class Hands {
    static ROCK = "グー";
    static PAPER = "パー";
    static SCISSOR = "チョキ";
}

export const ALL_HANDS = Object.entries(Hands).map(e => e[1]);

var winHands = {};
winHands[Hands.ROCK] = new Set([Hands.SCISSOR]);
winHands[Hands.PAPER] = new Set([Hands.ROCK]);
winHands[Hands.SCISSOR] = new Set([Hands.PAPER]);
export const WIN_HANDS = winHands;