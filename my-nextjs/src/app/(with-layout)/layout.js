import Navbar from "@/Components/Navbar";

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;