import * as React from "react";
/** Context */
import { definitionContext } from "../contexts/DefinitionsContext";
/** Styles */
import { WordItem } from "../components/Styles";
/** Utils */

const DefinitionList = () => {
    const { state, updateDefinitionList } = React.useContext(definitionContext);
    return (
        <React.Fragment>
            {state.definitionList.map(({ id, word, definition, complete }, i) => {
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
                    </WordItem>
                );
            })}
        </React.Fragment>
    );
};
export default DefinitionList;
