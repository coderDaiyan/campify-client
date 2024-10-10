import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-200 flex justify-between rounded p-10 mt-32">
        <div>
          <p>Copyright © 2024 - All right reserved by Campify</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="cursor-pointer">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a className="cursor-pointer">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a className="cursor-pointer">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
