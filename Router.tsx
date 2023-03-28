import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { DefaultLayout} from './src/layouts/DefaultLayout';
import { Home } from './src/components/Home';
import { Post } from './src/components/Post';

export function Router(){
   return (
      <Routes>
         <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="post" element={<Post />} />
         </Route>
      </Routes>
   );
}