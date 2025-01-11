const Services = () => {
    const Services = [
        {
          id: 1,
          image: "https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?t=st=1736628983~exp=1736632583~hmac=8fc55b024299eb9faff394724edb6ffcfac6768c6b68be68eb52f47688b666cf&w=1060", // Replace with your image path
          icon: "https://doccure.dreamstechnologies.com/html/template/assets/img/icons/benefit-icon-01.svg", // Replace with your icon path
          title: "Prenatal care",
          description:
            "Regular medical check-ups during pregnancy to monitor the health of the mother and the developing baby.",
          link: "#",
        },
        {
          id: 2,
          image: "path-to-image-2.jpg", // Replace with your image path
          icon: "path-to-icon-2.svg", // Replace with your icon path
          title: "Obstetric care",
          description:
            "Medical care provided by obstetricians or midwives throughout pregnancy, labor, and delivery.",
          link: "#",
        },
        {
          id: 3,
          image: "path-to-image-3.jpg", // Replace with your image path
          icon: "path-to-icon-3.svg", // Replace with your icon path
          title: "Ultrasound imaging",
          description:
            "Using sound waves to create images of the fetus in the womb, which helps monitor fetal development and detect any potential issues.",
          link: "#",
        },
        {
            id: 4,
            image: "path-to-image-3.jpg", // Replace with your image path
            icon: "path-to-icon-3.svg", // Replace with your icon path
            title: "Ultrasound imaging",
            description:
              "Using sound waves to create images of the fetus in the womb, which helps monitor fetal development and detect any potential issues.",
            link: "#",
          },
      ];
    return (
    
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Our Pregnancy Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 mb-46">
                <div className="flex items-center mb-46">
                  <img
                    src={service.icon}
                    alt=""
                    className="w-16 h-16 bg-blue-100 p-2 rounded mb-46 pb-46"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="text-blue-600 font-semibold hover:underline flex items-center"
                >
                  Learn More{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Services;