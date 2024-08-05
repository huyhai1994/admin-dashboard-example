import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {DarkModeContextProvider} from "./context/darkModeContext";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

ReactDOM.render(<React.StrictMode>
    <DarkModeContextProvider>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </DarkModeContextProvider>
</React.StrictMode>, document.getElementById("root"));
