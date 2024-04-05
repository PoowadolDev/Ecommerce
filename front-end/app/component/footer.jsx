export default function Footer() {
    return (
<footer className="absolute bottom-0 divide-x flex footer p-10 bg-neutral text-neutral-content justify-around">
  
  <nav>
    <h6 className="footer-title">CUSTOMER SERVICE</h6> 
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Sell With Us</a>
    <a className="link link-hover">Shipping</a>
  </nav> 
  <nav className="px-10">
    <h6 className="footer-title">LINKS</h6> 
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Sell With Us</a>
    <a className="link link-hover">Shipping</a>
  </nav> 
  <nav className="px-10">
    <h6 className="footer-title">NEWSLETTER</h6> 
    <a className="link link-hover">Terms of use</a>
  </nav>
</footer>
                )
}