import { createContext, useMemo, useState } from "react";

interface INumberContext {
    numbers: number[];
    setNumbers: React.Dispatch<React.SetStateAction<number[]>>;
}

export const NumberContext = createContext<INumberContext>({} as INumberContext);

export const NumberProvider = ({ children }: { children: React.ReactNode }) => {
    const [numbers, setNumbers] = useState<number[]>([]);

    const value = useMemo(() => ({
        numbers,
        setNumbers
    }), [numbers])

    return (
        <NumberContext.Provider value={value}>
            {children}
        </NumberContext.Provider>
    );
}