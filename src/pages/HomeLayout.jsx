import {Outlet} from 'react-router-dom';
// import {Logo} from '../components';
const HomeLayout=()=> {
    return (
        <div>
            {/* <Logo /> */}
            {/* <h1>Home Layout</h1> */}
            <Outlet />
        </div>
    );
};
export default HomeLayout;