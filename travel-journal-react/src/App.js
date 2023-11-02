import './App.css';
import Main from "./components/Main.js"
import Header from "./components/Header.js"
import data from "./data"

export default function App(){
    const main = data.map((places) => {
        return (
            <Main
            key={places.location}
            places = {places}/>
            )
    })
    return(
        <>
            <Header/>
            {main}
       </>
    )
}


