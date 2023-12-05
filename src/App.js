// App.js
import React from 'react';
import "./App.css"
import LessonCard from './LessonCard';
import Header from './Header';
import { data } from './data';

const App = () => {
  return (
    <>
      <Header />
      
        {data.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      
    </>
  );
};

export default App;
