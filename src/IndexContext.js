import React, {useContext, useState} from "react";

const IndexContext = React.createContext();
const IndexUpdateContext = React.createContext();

export const useIndex = () => {
    return useContext(IndexContext);
};

export const useIndexUpdate = () => {
    return useContext(IndexUpdateContext)
}

export const IndexProvider = ({children}) => {
    const [index, setIndex] = useState(1);

    const increaseIndexByOne = () => {
        setIndex(prevState => ++prevState);
    };

    return (
        <IndexContext.Provider value={index}>
            <IndexUpdateContext.Provider value={increaseIndexByOne}>
                {children}
            </IndexUpdateContext.Provider>
        </IndexContext.Provider>
    );
};