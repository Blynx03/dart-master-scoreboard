import { createContext, type Dispatch, type RefObject, type SetStateAction } from 'react'

export interface UserContextType {
    playerName: string;
    setPlayerName: Dispatch<SetStateAction<string>>;
    playerIndex: number;
    setPlayerIndex: Dispatch<SetStateAction<number>>;
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
    scoreChoicesIsVisible: boolean;
    setScoreChoicesIsVisible: Dispatch<SetStateAction<boolean>>;
    chosenScore: string;
    setChosenScore: Dispatch<SetStateAction<string>>;
    weHaveAWinner: boolean;
    setWeHaveAWinner: Dispatch<SetStateAction<boolean>>;
    playingAgain: boolean;
    setPlayingAgain: Dispatch<SetStateAction<boolean>>;
}

export interface PlayersType {
    name: string,
    numberScores?: Record<number, number>,
    stringScores?: Record<number, string>,
    setPointScore?: number
}



const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext