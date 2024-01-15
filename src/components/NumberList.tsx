import { useContext } from "react";
import { NumberContext } from "../contexts/NumberContext";

interface NumberListProps {
    name: string;
}


export function NumberList({ name }: Readonly<NumberListProps>) {
    const { numbers } = useContext(NumberContext);

    const doubled = [...numbers].map((number) => number * 2);

    return (
        <div>
            <h4>Number List: {name} </h4>
            <p>Actual</p>
            <ul>
                {numbers.map((number) => (
                    <li key={number}>{number}</li>
                ))}
            </ul>
            
            <p>Doubled:</p>
            <ul>
                {doubled.map((number) => (
                    <li key={number}>{number}</li>
                ))}
            </ul>
        </div>
    )
}
