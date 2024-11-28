import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="m-5">
            <p className="text-3xl text-center font-bold">About Us</p>

            <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://previews.123rf.com/images/andreypopov/andreypopov1303/andreypopov130300013/18205480-group-of-business-people-presenting-empty-banner-isolated-on-white.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Details Information
            </h1>
           <Link to='/aboutDetails'> 
           <button className="btn bg-gray-500 hover:bg-slate-300 text-white">Details</button>
           </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;