import React from 'react'
import Home from './components/Home'
import Section from './components/Section'
import  sectionElements from './components/sectionElements'

function App(){
    return(
       <div>
           <Home/>
           <div className="hArea">Proyectos</div>
            {sectionElements.map( element => {
                return(
                    <Section element={element}/>
                )
             })
            } 
       </div>
    )
    
}

export default App