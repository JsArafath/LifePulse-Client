import '../../../Css/Home/Benefits/Benefits.css';

const Benefits = () => {
   
      return (
        <div>
            <div className="benefits-section px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <h2 className="benefits-title">Benefits With Us</h2>
                        <p className="benefits-description">
                            Pregnancy services typically refer to a range of medical, emotional, and practical support provided to individuals who are pregnant or planning a pregnancy.
                        </p>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="benefit-card px-12 text-center sm:px-0">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                    <img className="" src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/benefit-icon-01.svg"></img>
                    </div>
                    <h1 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase benefit-title">
                    Qualified Doctors
                    </h1>
                    <div className="mb-2 text-gray-700 benefit-description">
                    Meet Our Trusted Team of Experienced Doctors.
                    </div>
                    </div>
                    <div className="benefit-card px-12 text-center sm:px-0">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                    <img className="benefit-icon" src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/benefit-icon-02.svg"></img>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase benefit-title">
                    Modern Equipments
                    </h6>
                    <div className="mb-2 text-gray-700 benefit-description">
                    Experience Cutting-Edge Technology for Superior Care.
                    </div>
                    </div>
                    <div className="benefit-card px-12 text-center sm:px-0">
                    <div className="flex items-center justify-start w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                    <img className="benefit-icon" src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/benefit-icon-04.svg"></img>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase benefit-title">
                    Individual Approach
                    </h6>
                    <div className="mb-2 text-gray-700 benefit-description">
                    Experience Personalized Care Like Never Before.
                    </div>
                    </div>
                    <div className="benefit-card px-12 text-start sm:px-0">
                    <div className="flex items-center justify-start w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                    <img className="benefit-icon" src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/benefit-icon-03.svg"></img>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase benefit-title">
                    Qualified Doctors
                    </h6>
                    <div className="mb-2 text-gray-700 benefit-description">
                    Urgent Help When You Need It Most
                    </div>
                    </div>
                </div>
                </div>
        </div>
      );
    };

export default Benefits;
