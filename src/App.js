    import React, {useState} from 'react';
    import "./App.css"

    const App = () => {
        const [state, setState] = useState(1)
        const [toggle, setToggle] = useState(false)
        return (
            <div>
                <button onClick={() => setToggle(!toggle)}>{state}</button>
                {toggle && (
                    <>
                        <button onClick={() => setState(1)}>1</button>
                        <button onClick={() => setState(2)}>2</button>
                        <button onClick={() => setState(3)}>3</button>
                    </>)}
            </div>
        );
    };

    export default App;