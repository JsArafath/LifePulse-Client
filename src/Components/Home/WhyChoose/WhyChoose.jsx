const WhyChoose = () => {
    return (
        <div className="whychoose">
      <div className=" sm:p-8 manPowerTxt rounded ml-[-0px] pt-9 pb-9">
        <div className="justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div className="sm:w-auto pl-8  bg-white  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center  manPowerTxt">
            <div className="text-left pr-5">
              <p className="text-gray-900 font-semibold">
                Why Choose us
              </p>
              <h1 className="pe-6 text-3xl md:text-4xl pr-2 font-semibold text-gray-700 mb-6">
              We’ll Ensure You Always Get the Best Treatment.
              </h1>
              <p className="text-base font-normal text-gray-900 mb-5 dark:text-gray-900">
              We are effectively communicate the compassionate care,<br></br> 
              expertise, and comprehensive services offered by your fertility <br></br>
              hospital, inspiring hope and confidence in patients seeking <br></br>
              assistance with their fertility challenges.
              </p>
             
              <p className="text-base font-normal text-gray-500 mb-5 dark:text-gray-400">
                Core of our mission is commitment to excellence in patient care.
                <br></br>We strive to enhance the quality of life for individuals of all ages
                <br></br>Addressing with precision & latest medical advancements.
              </p>

              <div className="flex justify-between items-center bg-white sm:flex mb-5">
                <div className="font-medium text-gray-800">
                  <div className="text-2xl text-gray-700">500+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Doctors Available </div>
                </div>
                <div className="font-medium text-gray-700 mr-9">
                  <div className="text-2xl">2k+ </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Appointments</div>
                </div>
                <div className="font-medium text-gray-700 mr-9">
                  <div className="text-2xl">100% </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Patient Satisfaction
                  </div>
                </div>
                <br></br>
              </div>

            </div>
          </div>
          <div className="sm:w-auto bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center p-5">
            <div className="text-left">
              <img
                // style={styleObject.size}
                className="bottom-0 right-0 relative manPowerImg"
                src="https://i.postimg.cc/Dyp3dC99/choose-us-six.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default WhyChoose;