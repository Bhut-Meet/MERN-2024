import { useAuth } from '../../store/auth';
import { Navbar } from '../Navbar';
import { AdminLayout } from './Admin-Layout';

export const Layout = () => {
    const {user} = useAuth();
    return (
        <div>
            {user.isAdmin ? <AdminLayout/> : <Navbar />}
            {/* {children} */}
        </div>
    );
};