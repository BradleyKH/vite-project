import { useContext } from "react";
import { NumberContext } from "../contexts/NumberContext";

export function MaxNumber() {
    const { numbers } = useContext(NumberContext);
    
    return (
        <div>
            <h4>Max Number</h4>
            <p>Max Number: {Math.max(...numbers)}</p>
        </div>
    )
}