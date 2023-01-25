import React from 'react'
import Project from './Project'

function Main(props) {


    return (
        <main className='mainSection'>
            <div className="mainTitle">Here's a sample of my work:</div>
            <div className="mainWrapper">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </main>
    )
}

export default Main