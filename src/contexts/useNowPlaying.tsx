import { createContext, FunctionComponent, ReactNode, useContext, useState } from "react";

type NowPlaying = {
    isMinimized: boolean;
    setIsMinimized: (value: boolean) => void;
    media: {
        image: string;
        title: string;
        interpreter: string;
    }
}

const initialState: NowPlaying = {
    isMinimized: false,
    setIsMinimized: () => { },
    media: {
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Life is easy',
        interpreter: 'The Truth \'bout Success'
    }
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