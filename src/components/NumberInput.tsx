import { useContext, useState } from "react";
import { NumberContext } from "../contexts/NumberContext";

export const NumberInput = () => {
    const { numbers, setNumbers } = useContext(NumberContext);
    const [numberInput, setNumberInput] = useState<string>("");

    function logSomething() {
        console.log("something")
    } 

    return (
        <div>
            <input
                value={numberInput}
                onChange={(e) => setNumberInput(e.target.value)}
            />
            <button
                onClick={() => {
                    if (!numberInput) return;
                    setNumbers([...numbers, parseInt(numberInput)]);
                    setNumberInput("");
                }}
            >
                Add Number
            </button>
            <button onClick={() => setNumbers([])}>
                Clear Numbers
            </button>
            <button onClick={logSomething}>
                Log Something
            </button>
        </div>
    );
}

export default NumberInput;