import React from 'react'
import { useHistory } from 'react-router-dom'

import Terminal from 'react-console-emulator'


const NavTerminal = (props) => {
    const terminal = React.createRef()
    const history = useHistory()
    
    const commands = {
        cd: {
            description: 'Navigating between pages.',
            usage: 'cd home|cv',
            fn: function () {
                const keys = Object.keys(arguments);
                if (keys.length !== 1) {
                    return "Invalid. Usage: cd home|cv"
                }
                const page = arguments[keys[0]];
                if (page === "home") {
                    history.push(`/`)
                } else if (page === "cv") {
                    history.push(`/cv`)
                } else {
                    return "cd home|cv"
                }
                return `${page} loading`
            }
        }
    }

    return (
        <div className={props.className} style={{
            height: "300px"
        }}>
            <Terminal
                ref={terminal}
                commands={commands}
                welcomeMessage={'Welcome to white rabbit hole!'}
                promptLabel={'maemresen@mywebsite:~$'}
            />
        </div>
    )
}

export default NavTerminal;