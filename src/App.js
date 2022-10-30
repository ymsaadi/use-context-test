import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

import styles from './App.module.css'
import {useState} from "react";

function App() {
    const [index, setIndex] = useState(1);

    const increaseIndexByOne = () => {
        setIndex(prevState => ++prevState)
    }

    return (
        <div className={styles.container}>
            <Display index={index}/>
            <Button onIncreaseIndex={increaseIndexByOne}/>
        </div>
    );
}

export default App;
