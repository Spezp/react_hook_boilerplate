import * as React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import { authContext } from "./contexts/AuthContext";
import { Wrapper } from "./components/Styles"

import Login from "./containers/Login";
import Definitions from "./containers/Definitions";
function RootContainer(){
    const { auth } = React.useContext(authContext);

    return(
        <AuthContextProvider>
            <Wrapper>
                {auth.id ? <Definitions /> : null}
                {!auth.id && <Login /> }
            </Wrapper>
        </AuthContextProvider>
    );
}

export default RootContainer;

