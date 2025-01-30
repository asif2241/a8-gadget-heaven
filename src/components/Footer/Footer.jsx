

const Footer = () => {
  return (
    <div className="lg:px-20 bg-base-200">
        <footer className="footer bg-base-200 justify-center text-base-content border-base-300 border-t px-10 py-4">
  <aside className="items-center ">
 
    <h3 className="font-bold text-4xl mx-auto">
    Gadget Heaven
    </h3>
    <p className="font-medium">Leading the way in cutting-edge technology and innovation.</p>
  </aside>

</footer>

<div className="border-t-1 border-gray-300 my-5"></div>

        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

    </div>
  )
}

export default Footer