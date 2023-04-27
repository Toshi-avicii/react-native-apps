import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: function(id) {},
    removeFavorite: function(id) {}
});

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds((prevFavIds) => [...prevFavIds, id]);
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds((prevFavIds) => prevFavIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;

