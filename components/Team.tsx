import React from 'react';

const Team = () => {
  return (
    <section id="portfolio">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">Our dedicated and experienced team is at the heart of our website development services. We're passionate about helping businesses thrive in the digital world. Get to know the faces behind the creativity and innovation:</p>
          </div>

          {/* Team members */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* Team member 1 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-90 h-40 mb-4" src="images/01.jpg" alt="Team Member 1" />
              <h4 className="h4 mb-2">Rex Posadas</h4>
              <p className="text-lg text-gray-400 text-center">Technical Lead</p>
            </div>

            {/* Team member 2 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-90 h-40 mb-4" src="images/01.jpg" alt="Team Member 2" />
              <h4 className="h4 mb-2 text-center">Lanz Montelibano</h4>
              <p className="text-lg text-gray-400 text-center">Software Engineer</p>
            </div>

            {/* Team member 3 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-90 h-40 mb-4" src="images/01.jpg" alt="Team Member 3" />
              <h4 className="h4 mb-2">Ziegfred Carmona</h4>
              <p className="text-lg text-gray-400 text-center">Software Engineer</p>
            </div>

            {/* Team member 4 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-90 h-40 mb-4" src="images/01.jpg" alt="Team Member 4" />
              <h4 className="h4 mb-2">Ariel Parcon</h4>
              <p className="text-lg text-gray-400 text-center">Software Engineer</p>
            </div>

             {/* Team member 5 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-90 h-40 mb-4" src="images/01.jpg" alt="Team Member 5" />
              <h4 className="h4 mb-2">Azaleah Caram</h4>
              <p className="text-lg text-gray-400 text-center">Project Manager</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
