import React from 'react';
// import './App.css';

function Timelines({datatime}){
console.log("🚀 ~ file: Timeline.js ~ line 5 ~ Timelines ~ datatime", datatime)


return(
     <div>
    <h1>{datatime.evnt}</h1>
    <p>{datatime.year}</p>
    </div>
);
};

export default Timelines;