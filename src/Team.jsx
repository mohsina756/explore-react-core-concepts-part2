import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const handlerAdd =() =>{
        // team = team + 1;
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handlerRemove =() =>{
        setTeam(team -1)
    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }


    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handlerAdd}>Add</button>
            <button onClick={handlerRemove}>Remove</button>
        </div>
    )
}