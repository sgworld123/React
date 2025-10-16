import React from "react";

function ICard(props) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{ border: '2px solid black',
                padding: '10px',
                margin: '10px',
                textAlign: 'center',
                width: '300px',
                borderRadius: '10px',
                boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.90)',
                backgroundColor: 'lightgrey',
                fontFamily: 'Arial, sans-serif',
             }}>
                <h1>ID CARD</h1>
                <h2>Name: {props.name}</h2>
                <h2>Age: {props.age}</h2>
                <h2>Branch: {props.branch}</h2>
                <h2>College: {props.college}</h2>
                <h2>Location: {props.location}</h2>
            </div>
        </div>)
}
export default ICard