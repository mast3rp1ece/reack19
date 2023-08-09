import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Posts from './components/Posts';
import Photos from './components/Photos';
import Contacts from './components/Contacts';
import likeButton from './images/like.svg'
import commentButton from './images/comment.svg'
import shareButton from './images/share.svg'
import downloadButton from './images/download.svg'

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    gender: "unspecified"
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }
];

const NATURE_IMAGE =
  'https://static.vecteezy.com/system/resources/previews/022/448/291/original/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg';

const NATURE_POST =
  'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={
            <Posts 
              author={{
                name: 'Nature',
                photo: NATURE_IMAGE,
                nickname: '@the_nature',
              }}
              content="Enjoy the World"
              image={NATURE_POST}
              date={'01-Aug-23'}
              like={'53'}
              comment={'13'}
              share={'4'}
              buttons={{
                likeButton: likeButton,
                commentButton: commentButton,
                shareButton: shareButton,
                downloadButton: downloadButton,
              }}
               />} />
           <Route path='/photos' element={<Photos />} />
           <Route path='/contacts' element={<Contacts contacts={contacts} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
