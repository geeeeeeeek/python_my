
export default function WhoWeAre() {
  return (
      <div className="bg-mainColorLight p-8 lg:p-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 ">
              <div className="flex flex-col w-full lg:w-1/2 lg:h-[400px] bg-white p-8 lg:p-16">
                  <div className="h-1 w-16 bg-mainColorNormal mb-6"></div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                  <p id="content"
                     className="flex-1 text-gray-700 mb-4 overflow-hidden relative lg:max-h-[320px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                      ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a
                      ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                      pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                      mauris vitae erat consequat auctor eu in elit.
                      <span
                          className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></span>
                  </p>
              </div>
              <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px]">
                  <div className="relative h-full  bg-gray-100 rounded-0 overflow-hidden">
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
