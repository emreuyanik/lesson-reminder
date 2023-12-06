// App.js
import React from 'react';
import "./App.css"
import LessonCard from './LessonCard';
import Header from './Header';
import { data } from './data';

const App = () => {
  return (
    <div className='emre'>
      <Header className="" />

      <div className='emre2'>
        {data.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
        ))}</div>
      
      
    </div>
  );
};

export default App;
