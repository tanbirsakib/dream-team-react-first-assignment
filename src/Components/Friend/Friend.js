import React from 'react';
import './friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFutbol } from '@fortawesome/free-solid-svg-icons';
const Friend = (props) => {
    const {id,grade,name,imageUrl,salary} = props.friend;
    //console.log(props);

    return (
        <div className='friend'>
            <div className="friend-image">
            <img src={imageUrl} alt=""/>
            </div>
            <div className='friend-info'>
            <h2 className='player-name'>{name}</h2>
            <h3 className='club-nakme'>Club : {grade}</h3>
            <h5 className='player-id'>ID : {id}</h5>
            <p className='salary'>Salary : ${salary}</p>
            <button className='add-button' onClick={()=> props.handleHirePlayer(props.friend)}><FontAwesomeIcon icon={faFutbol}/> Hire Player</button>
            </div>
        </div>
    );
};

export default Friend;