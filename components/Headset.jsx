import React from "react";

const Headset = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-offset="300"
          className="text-3xl font-bold mb-6"
        >
          Mixed Reality Headsets
        </h2>
        <div
          className="grid gap-y-4 lg:grid-cols-2 lg:gap-9"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-delay="1000"
        >
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            <img src="/img/headset-1.png" alt="" />

            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dolore nobis delectus earum at laudantium doloremque
                expedita provident. Aut cumque voluptates repellendus cupiditate
                labore qui blanditiis a veritatis ullam perspiciatis.
              </p>
            </div>
          </div>

          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            <img src="/img/headset-2.png" alt="" />

            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dolore nobis delectus earum at laudantium doloremque
                expedita provident. Aut cumque voluptates repellendus cupiditate
                labore qui blanditiis a veritatis ullam perspiciatis.
              </p>
            </div>
          </div>

          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <img src="/img/headset-3.png" alt="" />

            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dolore nobis delectus earum at laudantium doloremque
                expedita provident. Aut cumque voluptates repellendus cupiditate
                labore qui blanditiis a veritatis ullam perspiciatis.
              </p>
            </div>
          </div>

          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <img src="/img/headset-4.png" alt="" />

            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCSATT</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dolore nobis delectus earum at laudantium doloremque
                expedita provident. Aut cumque voluptates repellendus cupiditate
                labore qui blanditiis a veritatis ullam perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headset;
