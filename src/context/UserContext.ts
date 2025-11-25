import React, { createContext, type Dispatch, type RefObject, type SetStateAction } from 'react'

export interface UserContextType {
    playerName: string;
    setPlayerName: Dispatch<SetStateAction<string>>;
    players: string[];
    setPlayers: Dispatch<SetStateAction<string[]>>;
    inputPlayerNameRef: RefObject<HTMLInputElement | null>;
    selectedMinimumRangeValue: number;
    setSelectedMinimumRangeValue: Dispatch<SetStateAction<number>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext