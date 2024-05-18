

const Footer = () => {
    return (
        <footer className="p-6 mt-24 bg-[#255ED6] text-white">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Resources</h2>
                    <div className="flex flex-col space-y-2 text-sm text-white">
                        <a rel="noopener noreferrer" href="#">About US</a>
                        <a rel="noopener noreferrer" href="#">Our Team</a>
                        <a rel="noopener noreferrer" href="#">Products</a>
                        <a rel="noopener noreferrer" href="#">Contact</a>
                        {/* <a rel="noopener noreferrer" href="#">Optimizing for Production</a>
                        <a rel="noopener noreferrer" href="#">Browser Support</a>
                        <a rel="noopener noreferrer" href="#">IntelliSense</a> */}
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">About Us</h2>
                    <div className="flex flex-col space-y-2 text-sm text-white">
                        <p>TutorSheba.com is a platform where parents, students and tutors can easily connect with each other. We provide qualified Home/Online tutors to help your child with studies and helping them perform better in exams. We are a group of 2,50,000+ Tutors and 30,000+ satisfied parents/students in Dhaka, Chattagram, Rajshahi, Sylhet, Khulna, Barishal, Rangpur, Mymensingh cities for different academic and professional Subjects.</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Contact US</h2>
                    <div className="flex flex-col space-y-2 text-sm text-white">
                        <p>contact: 01628311569</p>
                        <p>Email: nishat1582@gmail.com</p>
                        <p>Adress: Mirpur, Dhaka, Bangladesh</p>
                        <p>Google Map: https://mylocation.map</p>
                    </div>
                </div>
                {/* <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Core Concepts</h2>
                    <div className="flex flex-col space-y-2 text-sm text-white">
                        <a rel="noopener noreferrer" href="#">Utility-First</a>
                        <a rel="noopener noreferrer" href="#">Responsive Design</a>
                        <a rel="noopener noreferrer" href="#">Hover, Focus, &amp; Other States</a>
                        <a rel="noopener noreferrer" href="#">Dark Mode</a>
                        <a rel="noopener noreferrer" href="#">Adding Base Styles</a>
                        <a rel="noopener noreferrer" href="#">Extracting Components</a>
                        <a rel="noopener noreferrer" href="#">Adding New Utilities</a>
                    </div>
                </div> */}
                {/* <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Customization</h2>
                    <div className="flex flex-col space-y-2 text-sm text-white">
                        <a rel="noopener noreferrer" href="#">Configuration</a>
                        <a rel="noopener noreferrer" href="#">Theme Configuration</a>
                        <a rel="noopener noreferrer" href="#">Breakpoints</a>
                        <a rel="noopener noreferrer" href="#">Customizing Colors</a>
                        <a rel="noopener noreferrer" href="#">Customizing Spacing</a>
                        <a rel="noopener noreferrer" href="#">Configuring Variants</a>
                        <a rel="noopener noreferrer" href="#">Plugins</a>
                    </div>
                </div> */}
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Community</h2>
                    <div className="flex flex-col space-y-2 text-sm text-white">
                        <a rel="noopener noreferrer" href="#">GitHub</a>
                        <a rel="noopener noreferrer" href="#">Discord</a>
                        <a rel="noopener noreferrer" href="#">Twitter</a>
                        <a rel="noopener noreferrer" href="#">YouTube</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="text-white">© Copyright 2024. All Rights Reserved by Nishat Abid.</span>
            </div>
        </footer>
    );
};

export default Footer;