import React, { createContext, type Dispatch, type RefObject, type SetStateAction } from 'react'

export type UserContextType = {
    playerName: string;
    setPlayerName: Dispatch<SetStateAction<string>>;
    players: PlayersType[];
    setPlayers: Dispatch<SetStateAction<PlayersType[]>>;
    inputPlayerNameRef: RefObject<HTMLInputElement | null>;
    selectedMinimumRangeValue: number;
    setSelectedMinimumRangeValue: Dispatch<SetStateAction<number>>;
    playersTurn: string;
    setPlayersTurn: Dispatch<SetStateAction<string>>;
    playerScoreContainerClass: string;
    setPlayerScoreContainerClass: Dispatch<SetStateAction<string>>;
    scoreboardPlayersNameContainerClass: string;
    setScoreboardPlayersNameContainerClass: Dispatch<SetStateAction<string>>;
    showInputScoreContainer: boolean;
    setShowInputScoreContainer: Dispatch<SetStateAction<boolean>>;
    playerScoreColumn: number;
    setPlayerScoreColumn: Dispatch<SetStateAction<number>>;
    playerScoreRow: number;
    setPlayerScoreRow: Dispatch<SetStateAction<number>>;
    playerTargetScore: number[][];
    setPlayerTargetScore: Dispatch<SetStateAction<number[][]>>;
    playerTileScore: string[][];
    setPlayerTileScore: Dispatch<SetStateAction<string[][]>>;
    chosenScore: string;
    setChosenScore: Dispatch<SetStateAction<string>>;
}

export type ScorePerTargetType = {
    target: string,
    score: number,
    choicesVisible: boolean
}

export type PlayersType = {
    name: string,
    scorePerTarget?: ScorePerTargetType[],
    totalScore?: number
}



const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext