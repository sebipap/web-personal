import React from 'react'
import Home from './components/Home'
import Section from './components/Section'
import  sectionElements from './components/sectionElements'

function App(){
    return(
       <div>
           <Home/>
            {sectionElements.map( element => {
                return(
                    <Section 
                        title = {element.title} 
                        description = {element.description} 
                        img = {element.img} 
                        url = {element.url}
                    />
                )
             })
            } 
       </div>
    )
    
}

export default App