import React, { Component } from 'react'

const  ChoiceButtons = ({onChoice}) => {
    return
    <div>
        <button onClick={() => onChoice('Rock')}>Rock</button>
        <button onClick={() => onChoice('Paper')}>Rock</button>
        <button onClick={() => onChoice('Scissors')}>Rock</button>   

    </div>
}
export default ChoiceButtons;