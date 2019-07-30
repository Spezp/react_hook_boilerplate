import * as React from "react";

import { Wrapper } from "./components/Styles"

import Login from "./containers/Login";

function RootContainer(){
    return(
        <Wrapper>
            <Login />
        </Wrapper>
    );
}

export default RootContainer;

