import React, { createContext } from "react";

export const TypeContext = createContext();
export const TypeContextProviders = ({ children }) => {
    const typeTrending = "trending";
    const typeUpcoming = "upcoming";
    const typeTopRated = "top-rated";
    const typePopular = "popular";

    return (
        <div>
            <TypeContext.Provider
                value={{
                    typeTrending,
                    typeUpcoming,
                    typeTopRated,
                    typePopular,
                }}
            >
                {children}
            </TypeContext.Provider>
        </div>
    );
};
