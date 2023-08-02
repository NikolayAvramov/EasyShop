import logo from "../../assets/logo.png";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";
export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo-box">
                <img src={logo} alt="logo" className="footer-logo" />
            </div>

            <div className="footer-navigation">
                <ul className="footer-list">
                    <li className="footer-item">
                        <Link href="#" className="footer-link">
                            About
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link href="#" className="footer-link">
                            Contact us
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link href="#" className="footer-link">
                            Carrers
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link href="#" className="footer-link">
                            Privacy policy
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link href="#" className="footer-link">
                            Terms
                        </Link>
                    </li>
                </ul>
                <h3 className="footer-message">Follow us on:</h3>
                <ul className="footer-list">
                    <li className={`footer-item, icons`}>
                        <BsFacebook className="footer-follow-link" />
                    </li>
                    <li className={`footer-item, icons`}>
                        <BsInstagram className="footer-follow-link" />
                    </li>
                    <li className={`footer-item, icons`}>
                        <BsTiktok className="footer-follow-link" />
                    </li>
                    <li className={`footer-item, icons`}>
                        <BsTwitter className="footer-follow-link" />
                    </li>
                </ul>
            </div>
            <div className="footer-copyright">
                &copy; EasyShop: All rights reserved.Design by N.Avramov
            </div>
        </footer>
    );
}
