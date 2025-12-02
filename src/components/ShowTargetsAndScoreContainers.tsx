import React, { useContext, useEffect, useState } from 'react'
import UserContext, { type PlayersType, type UserContextType } from '../context/UserContext';

const ShowTargetsAndScoreContainers = () => {
    const totalTargets = Array.from({ length: 20 });
    const { 
        selectedMinimumRangeValue, 
        players, setPlayers, 
        playerScoreContainerClass, setShowInputScoreContainer, 
        setPlayerScoreColumn, 
        setPlayerScoreRow,
        playerTileScore, setPlayerTileScore, } = useContext(UserContext) as UserContextType;

    
    // initialize score choices container to be hidden
    useEffect(() => {
        const newPlayers: PlayersType[] = players.map(player => {
            return {
                ...player,
                name: player.name,
                scorePerTarget: player.scorePerTarget?.map(target => {
                    return {
                        ...target, 
                        choicesVisible: false
                    };
                })
            };
        });
        setPlayers(newPlayers);
    },[]);


    const handleClick = (row: number, col: number) => {
        console.log('col = ', col, 'row = ', row);
        setShowInputScoreContainer(true);
        setPlayerScoreColumn(col);
        setPlayerScoreRow(row);
    }
    
//     return (
//               <div className='target-score-area-container'>
//                 {totalTargets.map((_, rowIndex) => {
//                     const range = totalTargets.length - rowIndex >= selectedMinimumRangeValue ? totalTargets.length - rowIndex : 'Bull';
//                     const isEqualToSelectedMinRange: boolean = (totalTargets.length - rowIndex) < (selectedMinimumRangeValue - 1);

//                     if (isEqualToSelectedMinRange)  {
//                         return null;
//                     } else {
//                         return (
//                         <div className='target-score-container' key={`target${rowIndex}`}>
//                             <div className='target-container' >
//                                 {range}
//                             </div>
//                             <div className='player-score-container'>
//                                 {(totalTargets.length - rowIndex) >= selectedMinimumRangeValue - 1 && players.map((player, colIndex) => 
//                                     <React.Fragment key={`${player.name}${totalTargets.length - rowIndex}`}>
//                                         <div className={`player-score-wrapper ${playerScoreContainerClass}`} onClick={() => handleClick(rowIndex, colIndex)}>
//                                             {playerTileScore[colIndex][rowIndex]}
//                                             {/* insert the scoring logic here */}
//                                         </div>
//                                     </React.Fragment>
//                                 )}
//                             </div>
//                         </div>
//                         )
//                     }
//                     }
//                 )}
//             </div>
//   )

// reversing the initial row to players instead of totalTargets
    return (
        <div className='target-score-area-container'>
        {players.map((player, colIndex) => {
            const range = players.length - colIndex >= selectedMinimumRangeValue ? players.length - colIndex : 'Bull';
            const isEqualToSelectedMinRange: boolean = (totalTargets.length - colIndex) < (selectedMinimumRangeValue - 1);

            return (
                <div className='target-score-container' key={`targetcolIndex}`}>
                    <div className='target-container' >
                        {range}
                    </div>
                    <div className='player-score-container'>
                        {(players.length - colIndex) >= selectedMinimumRangeValue - 1 && totalTargets.map((_, rowIndex) => 
                            {if (isEqualToSelectedMinRange) {
                                return null; 
                            } else {
                                return (
                                    <React.Fragment key={`${player.name}${totalTargets.length - colIndex}`}>
                                        <div className={`player-score-wrapper ${playerScoreContainerClass}`} onClick={() => handleClick(colIndex, rowIndex)}>
                                            {playerTileScore[colIndex][rowIndex]}
                                            {/* insert the scoring logic here */}
                                        </div>
                                    </React.Fragment>
                                )
                            }}
                        )}
                    </div>
                </div>
            )    
        })}
    </div>
    )
}

export default ShowTargetsAndScoreContainers