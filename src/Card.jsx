import { useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./redux/counter/counterSlice"
import { useSelector } from "react-redux"

export const Card = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector((state) => state.counter.value)
    
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrementByAmount = (amount) => {
        dispatch(incrementByAmount(amount))
    }

    return (
        <div className="card">
            <h1>{counterValue}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
        </div>
    )
}