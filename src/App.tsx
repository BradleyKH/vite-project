import { useState } from "react";
import "./App.css";
import { NumberList } from "./components/NumberList";
import { NumberProvider } from "./contexts/NumberContext";
import { MaxNumber } from "./components/MaxNumber";
import { NumberInput } from "./components/NumberInput";

function App() {
    const [count, setCount] = useState<number>(0);

    return (
        <NumberProvider>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <NumberInput />
            <NumberList name="first" />
            <MaxNumber />
        </NumberProvider>
    );
}

export default App;
