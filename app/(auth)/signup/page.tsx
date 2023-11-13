import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'BCD::GO',
  description: 'Meet the talented individuals behind our work.',
}

export default function Team() {

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Team header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Meet Our Team</h1>
            <p className="text-xl text-gray-400">Our dedicated and experienced team is at the heart of our website development services. We're passionate about helping businesses thrive in the digital world. Get to know the faces behind the creativity and innovation:</p>
          </div>

          {/* Team members */}
          <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* Team member 1 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-40 h-90 mb-4" src="images/01.jpg" alt="Team Member 1" />
              <h4 className="h4 mb-2">Rex Posadas</h4>
              <p className="text-lg text-gray-400 text-center">CEO / Developer</p>
              <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-90 mt-2">See Portfolio</button>
            </div>

            {/* Team member 2 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-40 h-90 mb-4" src="images/01.jpg" alt="Team Member 2" />
              <h4 className="h4 mb-2">Lanz Montelibano</h4>
              <p className="text-lg text-gray-400 text-center">Developer</p>
              <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-90 mt-2"><Link href='/signup/0'>See Portfolio</Link></button>
            </div>

            {/* Team member 3 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-40 h-90 mb-4" src="images/01.jpg" alt="Team Member 3" />
              <h4 className="h4 mb-2">Ziefred Carmona</h4>
              <p className="text-lg text-gray-400 text-center">Developer</p>
              <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-90 mt-2"><Link href='/signup/1'>See Portfolio</Link></button>
            </div>
          </div>

          {/* Spacing between the two groups of team members */}
          <div style={{ height: '40px' }} />

          {/* Center-aligned Team members 4 and 5 */}
          <div className="max-w-3xl mx-auto grid gap-0 md:grid-cols-2 items-center md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* Team member 4 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-40 h-90 mb-4" src="images/01.jpg" alt="Team Member 4" />
              <h4 className="h4 mb-2">Ariel Parcon</h4>
              <p className="text-lg text-gray-400 text-center">Developer</p>
              <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-90 mt-2"><Link href='/signup/2'>See Portfolio</Link></button>
            </div>

            {/* Team member 5 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="w-40 h-90 mb-4" src="images/01.jpg" alt="Team Member 5" />
              <h4 className="h4 mb-2">Azaleah Caram</h4>
              <p className="text-lg text-gray-400 text-center">Project Manager</p>
              <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-90 mt-2">See Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
