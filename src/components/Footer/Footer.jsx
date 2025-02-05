const Footer = () => {
    return (
        <div className='bg-white md:mt-[30rem] font-sora'>
                <h3 className='text-center text-black font-bold md:text-5xl pt-5'>Gadget Heaven</h3>
                <p className='text-center mt-4 text-[rgba(9,8,15,0.62)] pb-3'>Leading the way in cutting-edge technology and innovation.</p>
                <hr />
            <footer className="footer text-base-content p-10 md:w-7/12 mx-auto flex items-center justify-around">
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

Footer.propTypes = {}

export default Footer