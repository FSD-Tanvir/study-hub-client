import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col-reverse md:flex-row-reverse items-center">
        <div className="md:w-1/2 px-4">
          <img
            src="https://i.ibb.co/LNbCw9p/Hero-Students.webp"
            className="max-w-full mx-auto rounded-lg shadow-2xl h-96 object-cover"
            alt="Students working"
          />
        </div>
        <div className="md:w-1/2 px-4 text-center md:text-left">
          <h1 className="text-2xl lg:text-5xl font-bold mb-4">
            Unlock Your Academic Potential
          </h1>
          <p className="py-4 md:py-6">
            Welcome to StudyHub, your trusted platform for submitting, managing,
            and excelling in your assignments. We provide seamless assignment
            submission, expert grading, and valuable feedback to help you
            succeed in your academic journey. Get started today and take the
            first step towards academic excellence.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to={`/all-assignments`}>
              <button
                className="  block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                type="submit"
              >
                Explore Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
