import Display from "./components/Display/Display";
import Button from "./components/Button/Button";

import styles from './App.module.css'
import {IndexProvider} from "./IndexContext";

function App() {
    return (
        <div className={styles.container}>
            <IndexProvider>
                <Display/>
                <Button/>
            </IndexProvider>
        </div>
    );
}

export default App;
