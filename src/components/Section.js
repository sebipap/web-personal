import React from 'react'

function Section(props){

    const style = {
        backgroundImage: "url('"+ props.img + " ')",

    }

    return(
        <div class="categorias" >
        <div class="cat" >
    
            <div id="text">
                <h1>{props.title}</h1>
                <h3>{props.description}</h3>
                <a href={props.url}><button>Abrir</button></a>

            </div>
        </div>
        <div class="catbg"  style={style}></div>
    </div>
    )
}


export default Section