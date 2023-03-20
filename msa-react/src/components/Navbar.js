import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <table>
            <tr>
                <td>
                    <Link to="/">Home</Link>
                </td>
                <td>
                    <Link to="/about">About Us</Link>
                </td>
                <td>
                    <Link to="/contact">Contact</Link>
                </td>
                <td>
                    <Link to="/islamic-house">The IH</Link>
                </td>
                <td>
                    <Link to="/events">Events</Link>
                </td>
                <td>
                    <Link to="/resources">Resources</Link>
                </td>
                <td>
                    <Link to="/donate">Donate</Link>
                </td>
            </tr>
        </table>
    </nav>
  )
};

export default Navbar;