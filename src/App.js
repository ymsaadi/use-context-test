import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

import styles from './App.module.css'

function App() {
    return (
        <div className={styles.container}>
            <Display/>
            <Button/>
        </div>
    );
}

export default App;
