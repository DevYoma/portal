import "./Footer.scss";

const Footer = () => {
    return(
        <footer id="footer">
            <div className="footerGroup">
                <h1>Company</h1>

                <div>
                    <p>About Us</p>
                    <p>Our Services</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                </div>
            </div>

            <div className="footerGroup">
                <h1>Product</h1>

                <div>
                    <p>Blog</p>
                    <p>Portal</p>
                </div>
            </div>

            <div className="footerGroup">
                <h1>Support</h1>

                <div>
                    <p>Help Center</p>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                </div>
            </div>

            <div className="footerGroup">
                <h1>Legal</h1>

                <div>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;