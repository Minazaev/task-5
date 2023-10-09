import { useState } from "react";



function Detective() {
    const [sherlock, setState] = useState('психопат') 

    const handlerChange = () => {
        setState('высокоактивный социопат')
    }


    return (
        <div>
            <div>Шерлок - {sherlock}</div>
            <button onClick={handlerChange}>Узнать правду</button>
        </div>
        )
  }
  
  export default Detective;