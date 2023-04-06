import React, { useEffect, useState } from 'react'

function Test() {
    let [state, setState] = useState(0)

    useEffect(() => {
        const change = setInterval(() => {
            setState(state + 1)
        }, 1000)


        return () => {
            clearInterval(change)
        }
    }, [state])


    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}

export default Test
