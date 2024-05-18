import bannerImage from '../assets/pictures/bnr.jpg'
const Banner = () => {
    return (
        <div className="hero h-[70vh]" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="hero-overlay bg-opacity-0 "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-[#36454f] ">!! Find your tutor just a finger tip !!</h1>
                    <p className="mb-5 text-[#536872]">Your Premier Platform for Education Enrichment. Discover Tailored Tuition Services Matching Your Needs. Effortlessly Connect with Experienced Tutors or Motivated Students. Explore Diverse Subjects, Flexible Scheduling, and Secure Payment Options. Transforming Learning Journeys, Simplified Through Technology.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;