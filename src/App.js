import * as React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import { Wrapper } from "./components/Styles"

import Login from "./containers/Login";

function RootContainer(){
    return(
        <AuthContextProvider>
            <Wrapper className="test">
                <Login />
            </Wrapper>
        </AuthContextProvider>
    );
}

export default RootContainer;

