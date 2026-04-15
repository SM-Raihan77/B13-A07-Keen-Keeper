import React, { createContext, useState } from 'react';


export const TimelineContext = createContext();


const TimelineProvider = ({children}) => {

     const [timeline, setTimeline] = useState([]);



      const addEntry = (type, name) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      title: `${type} with ${name}`,
      type
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