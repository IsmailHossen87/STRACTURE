const Banner = () => {
    return (
      <div className="mt-5">
        <div
          className="hero h-96"
          style={{
            backgroundImage:
              "url(https://www.shutterstock.com/image-vector/mega-sale-advertiving-banner-3d-600w-2000590271.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
              </h1>
              <p className="mb-5  text-white"></p>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  