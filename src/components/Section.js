import React from 'react'

function Section(props){

    const style = {
        backgroundImage: "url('"+ props.element.img + " ')",

    }

    let gitHub = ''

    if(props.element.git){
        gitHub = (
            <a href={props.element.git}><button>GitHub</button></a>
        )
    }

    return(
        <div class="categorias" >
        <div class="cat" >
        
            <div id="text">
                <h1>{props.element.title}</h1>
                <h3>{props.element.description}</h3>
                <a href={props.element.url}><button>Abrir</button></a>
                {gitHub}
                

                

            </div>
        </div>
        <div class="catbg"  style={style}></div>
    </div>
    )
}


export default Section