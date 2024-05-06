import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Service } from './pages/Service';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';
import { Error } from './pages/Error';
import { Logout } from './pages/Logout';
import { Profile } from './pages/profile/Profile';
import { AdminLayout } from './components/layouts/Admin-Layout';
import { AdminUsers } from './pages/Admin-Users';
import { AdminContacts } from './pages/Admin-Contacts';
import { AdminUpdate } from './pages/AdminUpdate';
import { AdminAddService } from './pages/Admin-AddService';
import { AdminServices } from './pages/Admin-Services';
import { UserProfile } from './pages/profile/UserProfile';
import { Footer } from './components/Footer';
import { AdminServiceUpdate } from './pages/AdminServiceUpdate';
import { AdminAddUser } from './pages/Admin-AddUser';
import { UserProfileEdit } from './pages/profile/UserProfileEdit';
import { WebDesign } from './pages/WebDesign';
import { WebDevelopment } from './pages/WebDevelopment';
import { SEOOptimization } from './pages/Seo';
import { ScrollTop } from './pages/ScrollTop';
import { BuyNow } from './pages/BuyNow';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollTop/>
        <Routes>
          <Route path='*' element={<Error></Error>} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact></Contact>} />
          <Route path='/service' element={<Service />} />
          <Route path='/Webdesign' element={<WebDesign/>} />
          <Route path='/Webdevelopment' element={<WebDevelopment/>} />
          <Route path='/seo' element={<SEOOptimization/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Profile/user/:id/edit' element={<UserProfileEdit />} />
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/buynow' element={<BuyNow/>} />
          <Route path='/admin/' element={<AdminLayout></AdminLayout>}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='AdminAddUser' element={<AdminAddUser/>} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='users/:id/edit' element={<AdminUpdate />} />
            <Route path='AdminServices' element={<AdminServices />} />
            <Route path='AddServices' element={<AdminAddService />} />
            <Route path='AdminServices/:id/edit' element={<AdminServiceUpdate/>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
