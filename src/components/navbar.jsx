import { NavLink } from "react-router-dom"
function Navbar(){
return (
    <div className="flex flex-row place-content-between ml-5.5 mr-5.5 pr-7.5 text-3xl">
        <NavLink to='/'>
            Home
        </NavLink>
        <NavLink to='/paste'>
            Notes
        </NavLink>
    </div>

)
}

export default Navbar