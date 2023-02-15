import React, { createContext, useState } from "react";

export const TypeContext = createContext();
export const TypeContextProviders = ({ children }) => {
    const [type, setType] = useState("trending");
    const typeTrending = "trending";
    const typeUpcoming = "upcoming";
    const typeTopRated = "top-rated";
    const typePopular = "popular";

    const activeComponentStyles = {
        border: "1px solid red",
    };
    return (
        <div>
            <TypeContext.Provider
                value={{
                    activeComponentStyles,
                    typeTrending,
                    typeUpcoming,
                    typeTopRated,
                    typePopular,
                    type,
                    setType,
                }}
            >
                {children}
            </TypeContext.Provider>
        </div>
    );
};
