import * as React from "react";
/** Context */
import { definitionContext } from "../contexts/DefinitionsContext";
/** Styles */
import { WordItem } from "../components/Styles";
/** Utils */

const DefinitionList = () => {
    const { state, updateDefinitionList } = React.useContext(definitionContext);
            console.log(state)
    return (
        <React.Fragment>
            {state.definitions.map(({ id, word, definition, complete }, i) => {
                return (
                    <WordItem
                        key={id}
                        onClick={() =>
                            updateDefinitionList({
                                type: "UPDATE",
                                payload: { id }
                            })
                        }
                        complete={complete}
                    >
                        {i + 1}. {word}
                        <br />
                        {definition}
                        <br />
                    </WordItem>
                );
            })}
        </React.Fragment>
    );
};
export default DefinitionList;
