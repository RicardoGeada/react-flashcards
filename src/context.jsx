import { createContext, useState, useContext, useEffect } from "react";
import { categoriesData , flashcardsData } from "./data/data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [categories, setCategories] = useState(() => {
        const savedCategories = localStorage.getItem("categories");
        return savedCategories ? JSON.parse(savedCategories) : categoriesData;
    });

    
    const [flashcards, setFlashcards] = useState(() => {
        const savedFlashcards = localStorage.getItem("flashcards");
        return savedFlashcards ? JSON.parse(savedFlashcards) : flashcardsData;
    });


    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);


    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
    }, [flashcards]);


    return (
        <DataContext.Provider value={{ categories, setCategories, flashcards, setFlashcards }}>
            { children }
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    return useContext(DataContext);
}