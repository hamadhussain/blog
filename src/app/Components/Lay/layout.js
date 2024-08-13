import Nav from '../Nav/page'
import Footer from '../Footer/page'

const Layout = ({ children }) => {
    return (
        <div><Nav/>
            {children}<Footer/>
        </div>
    );
};

export default Layout;