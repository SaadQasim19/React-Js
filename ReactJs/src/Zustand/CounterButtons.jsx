import useStore from "./store";
export default function CounterButtons() {

    const increase = useStore((state) => state.increase);
    const decrease = useStore((state) => state.decrease);



return(
    <>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        </>
)

}