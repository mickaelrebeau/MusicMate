import './App.css';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Hero } from './pages/auth/HeroPage';
import { SignUp } from './pages/auth/SignUpPage';
import { Login } from './pages/auth/LoginPage';
import { Home } from './pages/home/HomePage';
import { Sidebar } from './components/sidebar';
import { SearchPage } from './pages/home/SearchPage';
import { ArtistsPage } from './pages/home/ArtistsPage';
import { Header } from './components/header';
import { SongsPage } from './pages/home/SongsPage';

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
         <Route path="songs" element={<SongsPage />} />
         <Route path="search" element={<SearchPage />} />
         <Route path="artists" element={<ArtistsPage />} />
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
     <>
       <Header />
       <div className="flex h-full">
         <Sidebar />
         <div className="overflow-y-scroll w-full">
           <Outlet />
         </div>
       </div>
     </>
   );
}

export default App;
