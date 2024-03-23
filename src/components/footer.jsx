import FooterNav from "./footer-nav";
import SubscribeMail from "./subscribe-mail";

const Footer = () => {
  return (
    <footer className="bg-[url('https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center p-4 mt-16">
      <SubscribeMail />
      <FooterNav />
    </footer>
  );
};

export default Footer;
