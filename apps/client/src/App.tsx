import './App.css';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Hero } from './pages/auth/HeroPage';
import { SignUp } from './pages/auth/SignUpPage';
import { Login } from './pages/auth/LoginPage';
import { Home } from './pages/home/HomePage';
import { Sidebar } from './components/sidebar';
import { SearchPage } from './pages/home/SearchPage';
import { ArtistsPage } from './pages/home/ArtistsPage';
import { Header } from './components/header';
import { SongsPage } from './pages/home/SongsPage';
import { Profil } from './pages/profil/ProfilPage';
import { EditProfil } from './pages/profil/EditProfilPage';

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
        <Route path="profil" element={<Profil />} />
        <Route path="profil/edit" element={<EditProfil />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  const { pathname } = useLocation();
  const authPages = ['/', '/signup', '/login'];
  const isAuthPage = authPages.includes(pathname);
  const access_token = localStorage.getItem('access_token');
  const auth = { access_token: access_token };

  if (isAuthPage) return <Outlet />;

  return auth.access_token ? (
    <>
      <div className="h-full overflow-hidden">
        <Header />
        <div className="flex h-[calc(100vh-80px)]">
          <Sidebar />
          <div className="h-full overflow-y-scroll w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default App;
