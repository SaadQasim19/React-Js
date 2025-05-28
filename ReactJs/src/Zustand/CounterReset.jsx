import  useStore  from "./store.js";

export default function CounterReset(){

    const reset = useStore((state)=> state.reset);
    return(
        <>
        <button onClick={reset}>Reset</button>
        </>
    )
}