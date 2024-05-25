import bannerImage from "../assets/pictures/banner3.jpg";
const Banner = () => {
  return (
    // <div className="hero h-[50vh]" style={{ backgroundImage: `url(${bannerImage})` }}>
    //     <div className="hero-overlay bg-opacity-0 "></div>
    //     <div className="hero-content text-center text-neutral-content">
    //         <div className="max-w-md">
    //             <h1 className="mb-5 text-5xl font-bold text-black ">!! Find your tutor just a finger tip !!</h1>
    //             <p className="mb-5 text-[#536872]">Your Premier Platform for Education Enrichment. Discover Tailored Tuition Services Matching Your Needs. Effortlessly Connect with Experienced Tutors or Motivated Students. Explore Diverse Subjects, Flexible Scheduling, and Secure Payment Options. Transforming Learning Journeys, Simplified Through Technology.</p>
    //             <button className="btn btn-primary">Get Started</button>
    //         </div>
    //     </div>
    // </div>
    <div className="hero h-[50vh]  flex bg-base-100">
      <div className="hero-content  flex-row  " style={{maxWidth:"100%"}}>
        <img className="rounded-lg ml-20 shadow-2xl" src={`${bannerImage}`}
          
        />
        <div style={{paddingLeft:"40PX"}}>
          <h1 className="text-5xl font-bold ">
          Find Tutor for Your Academic Needs in Bangladesh <span className="text-[#DD761C]">Anytime, Anywhere</span>Tuitions
          </h1>
          <br />
          <p className="font-semibold text-gray-900">
          Empowering Education with Personalized Connections Between Students and Tutors Across Bangladesh
          
          </p>
          <br />
         <center><button className="btn  bg-[#5AB2FF] hover:text-white hover:bg-[#B0B0B0] ">Get Started</button></center> 
        </div>
      </div>
    </div>
  );
};

export default Banner;
