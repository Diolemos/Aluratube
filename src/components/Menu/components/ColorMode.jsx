import React from "react";


export const ColorModeContext = React.createContext(
    {mode: "dark",
setMode: "preciso ser configurada primeiro"}
)

export default function ColorModeProvider(props){
   
    const [mode, setMode] = React.useState(props.initialMode)
   
    return(
        <div>
            <ColorModeContext.Provider value={{mode: mode, setMode: setMode}} >
            {props.children}
            </ColorModeContext.Provider>
            
        </div>
    )
}