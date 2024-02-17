import Link from "next/link";
import facebook from "../../public/images/pictograms/facebook.svg";
import insta from "../../public/images/pictograms/instagram.svg";
import linkedin from "../../public/images/pictograms/linkedin.svg";
import Image from "next/image";

const currentYear = (() => {
  const date = new Date();
  return date.getFullYear();
})();

export const Footer = () => {
  return (
    <footer>
      <section className="main-footer">
        <div className="footer-col-1">
          <span>Get Help</span>
          <Link href="/contact">Contact</Link>
          <Link href="/shipping-return">Shipping & Return</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-col-2">
          <span>Join Our Newsletter</span>
          <p>Stay Ahead and Receive Exclusive Deals</p>
          <input type="text" placeholder="example@domain.com" />
        </div>

        <div className="footer-col-3">
          <Link href="/">
            <Image src={facebook} alt="facebook" className="social facebook" />
          </Link>
          <Link href="/">
            <Image src={insta} alt="instagram" className="social instagram" />
          </Link>
          <Link href="/">
            <Image src={linkedin} alt="facebook" className="social facebook" />
          </Link>
        </div>
      </section>

      <section className="copyright">
        <p>© {currentYear} Just A Dash Beauty. All Rights Reserved</p>
        <p>
          <Link href="/">Term of Use</Link>
        </p>
      </section>
    </footer>
  );
};
