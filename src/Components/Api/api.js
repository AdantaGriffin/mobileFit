import React, {useState, useEffect, createContext, useContext} from 'react';

const ApiContext = createContext();

export function ApiProvider({children}){
    const [exercises, setExercises] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [history, setHistory] = useState([]);
    const [weekly, setWeekly] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        async function getExercises(){
            const response = await fetch('data.json');
            const result = await response.json();
            //console.log(result.data);
            setExercises(result.data)
        }
        getExercises()
    }, [])
    const addExercise = (item) => {
        const existingItem = routines.find(i => i.id === item.id);
        if(existingItem){
            //alert('exercise already set')
        } else{
            //alert(`${item.name} added to list`) 
            setRoutines(prev => [...prev, item]);
        }
    };
    const removeExercise = (id) => {
        setRoutines(prev => prev.filter(item => item.id !== id));
    };
    const handleTextChange = (event) => {
        event.preventDefault()
        setText(event.target.value.toLowerCase()); 
        
    };
    const findExercise = (letter) => (ex) => ex.name.toLowerCase().includes(letter) ||
    ex.type.toLowerCase().includes(letter)

    return(
        <ApiContext.Provider
            value={{text, setText, exercises, routines, history, weekly, addExercise, removeExercise, handleTextChange, findExercise}}    
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    return useContext(ApiContext);
}