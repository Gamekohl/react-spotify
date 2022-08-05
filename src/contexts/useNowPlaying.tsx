import { createContext, FunctionComponent, ReactNode, useContext, useState } from "react";

type NowPlaying = {
    isMinimized: boolean;
    setIsMinimized: (value: boolean) => void;
}

const initialState: NowPlaying = {
    isMinimized: false,
    setIsMinimized: () => { }
};

const NowPlayingContext = createContext(initialState);

export const NowPlayingProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [value, setValue] = useState(initialState);

    const setIsMinimized = (value: boolean) => {
        setValue({
            ...initialState,
            isMinimized: value
        });
    }

    return (
        <NowPlayingContext.Provider value={{
            ...value,
            setIsMinimized
        }}>
            {children}
        </NowPlayingContext.Provider>
    )
}

export const useNowPlayingContext = () => useContext(NowPlayingContext);