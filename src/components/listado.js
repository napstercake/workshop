import React from "react";

function Listado (props) {

  


    return (
        <div>
            <div>LIstado AMIGOS</div>
            <ul>
                { props.amigos.map((ami, index) => <li key={index}>{ami}</li>) }
            </ul>
            <button onClick={props.test}> clickame</button>
            <button onClick={props.otro}> otro click</button>
        </div>

    );
}

export default Listado;