import React, {useState} from "react";
import "./index.css";

function Counter() {
    const [Counter, setCounter] = useState(0);
    function getModifier(){
        if(Counter > 0) return "counter__title--increment";
        if(Counter < 0) return "counter__title--decrement";
        return "";
    }
        return(
            <div className="counter">
                <h1 className={`counter__title ${getModifier()}`}>{Counter}</h1>
                <section className="buttons">
                    <button
                        onClick={() => setCounter(Counter + 1)}
                        className="button button--increment"
                    >
                        incrementar
                    </button>
                    <button
                        onClick={() => setCounter(Counter - 1)}
                        className="button button--decrement"
                    >
                        decrementar
                    </button>
                </section>
            </div>
        );
  }
  export default Counter;
