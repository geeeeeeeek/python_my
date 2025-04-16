
export default function WhoWeAre() {

    let content = "Welcome to BlueTech, a forward-thinking company dedicated to harnessing innovation and technology to create meaningful solutions for a rapidly evolving world. Founded in [Year], BlueTech specializes in [your industry or focus, e.g., cutting-edge software development, sustainable technology, etc.] and has grown to become a trusted name in the industry.\n" +
        "\n" +
        "Guided by our core values of integrity, collaboration, and creativity, we strive to push boundaries and deliver excellence in everything we do. Whether developing advanced technologies, optimizing processes, or solving complex challenges, BlueTech is committed to helping our clients achieve their goals.\n" +
        "\n" +
        "As a company, we also believe in sustainability and responsible innovation. We aim to contribute positively to the environment and society through the thoughtful application of technology.\n" +
        "\n" +
        "Join us on our journey to shape a smarter, more connected future. Learn more about what we do and how we can work together by exploring our website or contacting our team today."

  return (
      <div className="bg-mainColorLight py-8 lg:py-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8  px-6 lg:px-8">
              <div className="flex flex-col w-full lg:w-1/2 p-0">
                  <div className="h-1 w-28 bg-gradient-to-r from-mainColorNormal to-mainColorNormal/50 mb-6"></div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                  <p id="content"
                     className="flex-1 text-gray-700 mb-4 overflow-hidden relative">
                      {content}
                  </p>
              </div>
              <div className="w-full lg:w-1/2 ">
                  <div className="relative h-full  bg-gray-100 rounded-lg overflow-hidden overflow-hidden">
                      <img
                          src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img.jpg"
                          alt="Our Team"
                          className="object-cover w-full h-full"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}
