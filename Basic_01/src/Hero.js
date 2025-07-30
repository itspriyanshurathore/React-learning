import { useState } from "react"


function Hero() {
    const [count , setCount] = useState(0)

   const Increment = ()=>{
    // console.log("Print my self");
    console.log(setCount(count => count + 1));
    }
    const Decrement = ()=>{
        // console.log("tell me about your self");
        if (count === 0) {
            console.log(setCount( "Please enter the value greater than zero"));
                
        } else {
            console.log(setCount(count => count - 1 ));     
        }
    }
   
    
    return (
        <>
        <nav>
            <ul>
                <li>ONE</li>
                <li>TWO</li>
                <li>THREE</li>
                <li>FOUR</li>
            </ul>
            <button onClick={Increment}>for + 1</button>
            <p><strong>Count : {count} </strong></p>
            <button onClick={Decrement}>for - 1</button>
            
        </nav>
        </>
    )
};

export default Hero