import  useStore  from "./store.js";
export default function CounterDisplay(){
    
        
        
        const count = useStore((state)=> state.count);
        return(
            <p>Counter: {count}</p>
        )
        
    
}