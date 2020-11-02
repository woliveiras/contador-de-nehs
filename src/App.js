import React, { useEffect, useState } from 'react'

const App = () => {
    const [ count, setCount ] = useState(0);

    const incrementCounter = (count, handler) => {
        const incrementedCounter = count + 1

        localStorage.setItem('counter', incrementedCounter)
        handler(incrementedCounter)
    }

    const resetCounter = handler => {
        localStorage.removeItem('counter')
        handler(0)
    }

    useEffect(() => {
        if(!localStorage.getItem('counter')) {
            localStorage.setItem('counter', 0);
        }

        const storedValue = localStorage.getItem('counter');

        setCount(parseInt(storedValue))
    }, [])

    return (
        <>
            <header>
                <h1>Contador de nehs</h1>
                <h2>Quantos nés será que o William falou durante a aula?</h2>
            </header>
            <main className="container">
                <section>
                    <p>Até agora, foram: <strong className="contador-container">{count} nés</strong></p>
                    <button onClick={() => incrementCounter(count, setCount)}>Mais um!</button>
                    <button onClick={() => resetCounter(setCount)}>Limpar</button>
                </section>
            </main>
            <footer className="container">
                <p>Site desenvolvido na <a href="https://twitch.tv/uillaz">Twitch.tv/uillaz</a></p>
            </footer>
        </>
    )
}

export default App