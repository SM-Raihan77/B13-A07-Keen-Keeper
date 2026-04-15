import React, { createContext, useState } from 'react';


export const TimelineContext = createContext();


const TimelineProvider = ({children}) => {

     const [timeline, setTimeline] = useState([]);



      const addEntry = (type, name, id) => {
    const newEntry = {
      id: Date.now(),
      friendId: id,
      date: new Date().toLocaleDateString(),
      name: name,  
      type: type,
      title: `${type} with ${name}`,
      
    };
     setTimeline(prev => [newEntry, ...prev]);
  };
     

    return(
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};


export default TimelineProvider;