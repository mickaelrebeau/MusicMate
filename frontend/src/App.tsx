import './App.css';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Hero } from './pages/auth/HeroPage';
import { SignUp } from './pages/auth/SignUpPage';
import { Login } from './pages/auth/LoginPage';
import { Home } from './pages/home/HomePage';
import { Sidebar } from './components/sidebar';
import { SearchPage } from './pages/home/SearchPage';
import { Playlists } from './pages/playlists/Playlists';
import { ArtistsPage } from './pages/home/ArtistsPage';

function App() {
   return (
     <Routes>
       <Route path="/" element={<Layout />}>
         {/* Auth pages */}
         <Route index element={<Hero />} />
         <Route path="signup" element={<SignUp />} />
         <Route path="login" element={<Login />} />

         {/* Website pages */}
         <Route path="home" element={<Home />} />
         <Route path="songs" element={<>Songs</>} />
         <Route path="search" element={<SearchPage />} />
         <Route path="artists" element={<ArtistsPage />} />
         <Route path="albums" element={<>Albums</>} />

         {/* Playlists pages */}
         <Route path="/playlists">
           <Route index element={<Playlists />} />
           <Route
             path="recently-added"
             element={<>Playlists recently added</>}
           />
           <Route
             path="recently-played"
             element={<>Playlists recently played</>}
           />

           {/* loader pour récuperer les datas des playlits */}
           <Route
             path=":slug"
             element={<>My playlist 1</>}
             loader={() => ['hello', 'world']}
           />
         </Route>
       </Route>
     </Routes>
   );
}

function Layout() {
   const { pathname } = useLocation();
   const authPages = ['/', '/signup', '/login'];
   const isAuthPage = authPages.includes(pathname);

   if (isAuthPage) return <Outlet />;

   return (
      <div className="flex">
         <Sidebar />
         <Outlet />
      </div>
   );
}

export default App;
