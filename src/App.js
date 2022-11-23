import React from 'react'

const random = Math.floor(Math.random() * (5 - -5)) + -5;

function HellowWorld() {
    return <h1>Hello World {random}</h1>;
} 

function App() {
    return(
        <div>
            App
            <HellowWorld />
        </div>
    )
}
// const App = () => (
//     <div>
//         App
//         <HellowWorld />
//     </div>
// );

export default App