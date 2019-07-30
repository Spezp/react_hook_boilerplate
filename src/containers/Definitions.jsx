import * as React from "react";
/** Styles */
/** Components */
import AddDefinition from "./AddDictionaryEntry";
import DefinitionList from "./DefinitionList";
/** Presentation/UI */
import { DefinitionContainer } from "../components/Styles";
function ToDo() {
  return (
    <DefinitionContainer>
      <h2>My to do list</h2>
      <AddDefinition/>
      <DefinitionList/>
    </DefinitionContainer>
  );
}
export default ToDo;
