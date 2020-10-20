import React from 'react'

const App = () => {
    return (
        <>
            <header>
                <h1>Contador de nehs</h1>
                <h2>Quantos nés será que o William falou durante a aula?</h2>
            </header>
            <main className="container">
                <section>
                    <p>Até agora foram <strong id="contador-container"><span id="contador">0</span> nés</strong> até agora!</p>
                    <button id="increment">Mais um!</button>
                    <button id="clear">Limpar</button>
                </section>
            </main>
            <footer className="container">
                <p>Site desenvolvido na <a href="https://twitch.tv/uillaz">Twitch.tv/uillaz</a></p>
            </footer>
        </>
    )
}

export default App