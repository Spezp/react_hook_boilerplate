import * as React from "react";
const initialState = { definitions: [] };
const reducer = (state, action) => {
switch (action.type) {
    case 'ADD':
        return {
            definitions: [...state.definitions, action.payload]
        };
    case 'UPDATE':
        return {
            definitions: state.definitions.map(def => {
                if (def.id === action.payload.id) {
                    return { ...def, complete: !def.complete };
                }
                    return def;
            })
        };
    case 'DELETE':
        return {
            definitions: state.definitions.filter(def => def.id !== action.payload.id)
        };
    default:
        throw new Error();
    }
};

export const definitionContext = React.createContext({
    state: {
        definitions: []
    },
    updateDefinitions: () => {}
});
const { Provider } = definitionContext;
const DefinitionProvider = ({
    children
}) => {
    const [definitions, updateDefinitions] = React.useReducer(reducer, initialState);
    return (
        <Provider value={{ state: definitions, updateDefinitions}}>
              {children}
        </Provider>
    );
};

export default DefinitionProvider;
