import NavLink from "@/Components/NavLink";
import Link from "next/link";

const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/all-product',
        title: 'All Product'
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Product'
    },
    {
        path: '/',
        title: 'Home'
    },

]

const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h1 className="text-3xl font-semibold">DashBoard</h1>
            <ul className="">
                {
                    navLinks.map(({ path, title }) => (
                        <li className="my-2" key={path}><NavLink exect activeClassName={"text-blue-500"} href={path}>{title}</NavLink></li>))
                }
            </ul>
        </aside>
    );
};

export default Sidebar;