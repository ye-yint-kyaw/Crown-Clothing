import { Link, Outlet } from "react-router"
import { Fragment } from "react/jsx-runtime"
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.style.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="link" to = '/shop'>SHOP</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation;