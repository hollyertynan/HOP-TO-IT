function NavigationBar() {
    return (
        <nav>
            <div className="border border-alert">Navigation</div>
        </nav>
    )
}

//ReactDOM.render(<header>There is something written here</header>, document.getElementById('root'))

function App() {
    return (
        <div>
            <NavigationBar />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))