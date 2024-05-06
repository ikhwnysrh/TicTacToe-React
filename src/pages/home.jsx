import { Link } from "react-router-dom"

const home = () => {
    return (
        <div className="home">
            <h1>Tic Tac Toe</h1>
            <p>by Muhammad Ikhwan</p>
            <Link to="/app"><button className="button-home">PLAY</button></Link>
        </div>
    )
}

export default home