const Footer = () => {
  return (
    <footer className="p-6 mt-24 bg-[#6fc7d8] text-gray-800">
      <div className="container grid grid-cols-3 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-3">
        <div className="flex flex-col mx-auto space-y-4">
          <h2 className="font-medium">Resources</h2>
          <div className="flex flex-col space-y-2 text-l font-semibold text-gray-800">
            <a rel="noopener noreferrer" href="#">
              About US
            </a>
            <a rel="noopener noreferrer" href="#">
              Our Team
            </a>
            <a rel="noopener noreferrer" href="#">
              Productsss
            </a>
            <a rel="noopener noreferrer" href="#">
              Contact
            </a>
            {/* <a rel="noopener noreferrer" href="#">Optimizing for Production</a>
                        <a rel="noopener noreferrer" href="#">Browser Support</a>
                        <a rel="noopener noreferrer" href="#">IntelliSense</a> */}
          </div>
        </div>
        <div className="flex flex-col space-y-4 mx-auto">
          <h2 className="font-medium">About Us</h2>
          <div className="flex flex-col space-y-2 text-l font-semibold text-gray-800">
            <p>
              TutorSheba.com is a platform where parents, students and tutors
              can easily connect with each other. We provide qualified
              Home/Online tutors to help your child with studies and helping
              them perform better in exams. We are a group of 2,50,000+ Tutors
              and 30,000+ satisfied parents/students in Dhaka, Chattagram,
              Rajshahi, Sylhet, Khulna, Barishal, Rangpur, Mymensingh cities for
              different academic and professional Subjects.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4 mx-auto">
          <h2 className="font-medium">Contact US</h2>
          <div className="flex flex-col space-y-2 text-l font-semibold text-gray-800">
            <p>contact: 01628311569</p>
            <p>Email: nishat1582@gmail.com</p>
            <p>Adress: Mirpur, Dhaka, Bangladesh</p>
            <p>Google Map: https://mylocation.map</p>
          </div>
        </div>

        {/* <div className="flex flex-col space-y-4 mx-auto">
          <h2 className="font-medium">Community</h2>
          <div className="flex flex-col space-y-2 text-sm text-white">
            <a rel="noopener noreferrer" href="#">
              GitHub
            </a>
            <a rel="noopener noreferrer" href="#">
              Discord
            </a>
            <a rel="noopener noreferrer" href="#">
              Twitter
            </a>
            <a rel="noopener noreferrer" href="#">
              YouTube
            </a>
          </div>
        </div> */}
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="text-gray-800 font-bold ">
          © Copyright 2024. All Rights Reserved by Nishat Abid.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
