import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import team from "../assets/image/team.jpg";

const About = () => {
  return (
    <>
      <div className="text-black-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-900">
              Our story
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <button className="btn btn-primary text-white">Learn more</button>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={team}
            />
          </div>
        </div>
      </div>
      <div className="text-black body-font">
        <h1 className="text-center text-3xl font-bold">Our mission</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          {[1, 2, 3].map(() => (
            <div className="card bg-base-100 w-96 shadow-xl hover:translate-y-[-6px] transition-all ease-in cursor-pointer">
              <div className="card-body text-center">
                <div className="flex rounded-full w-16  h-16 justify-center mx-auto  items-center bg-primary bg-opacity-20">
                  <RocketLaunchIcon className="w-8 h-8  text-primary " />
                </div>
                <h2 className="card-title mx-auto mt-3">Execute at Speed</h2>
                <p>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <div className="card-actions justify-end mx-auto">
                  <button className="btn btn-ghost">Learn more</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-black-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-center text-3xl font-bold mb-4">Our team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[1, 2, 3, 4].map(() => (
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?w=360"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-lg">
                      Holden Caulfield
                    </h2>
                    <h3 className="text-gray-500 mb-3">Founder & CEO</h3>
                    <p className="mb-4">
                      DIY tote bag drinking vinegar cronut adaptogen squid fanny
                      pack vaporware.
                    </p>
                    <span className="flex gap-2 justify-center md:justify-normal ">
                      <FaFacebook className="w-6 h-6 cursor-pointer" />
                      <FaTwitter className="w-6 h-6 cursor-pointer" />
                      <FaInstagram className="w-6 h-6 cursor-pointer" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col md:flex-row my-32">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14761.002866044155!2d91.8393502!3d22.3441602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad27286b39ba21%3A0x17828aa6440452d1!2sT.M.%20Palacio!5e0!3m2!1sen!2sbd!4v1727525357869!5m2!1sen!2sbd"
            style={{ border: 0 }}
            loading="lazy"
            className="w-[400px] md:w-[500px] h-[500px] mx-auto"
          ></iframe>
        </div>
        <div className="m-10">
          <h1 className="text-3xl font-bold mb-3">Contact</h1>
          <div className="mb-3">
            <h3 className="font-semibold">Address: </h3>
            <h3>T.M. Palacio 10 Kazem Ali Rd, Chattogram 4000</h3>
          </div>
          <div className="mb-3">
            <h3 className="font-semibold">Email: </h3>
            <h3>example@email.com</h3>
          </div>{" "}
          <div className="mb-3">
            <h3 className="font-semibold">Phone: </h3>
            <h3>01723360022</h3>
          </div>
          <div className="flex mt-10">
            <FaFacebook className="w-6 h-6 cursor-pointer" />
            <FaTwitter className="w-6 h-6 cursor-pointer ml-2" />
            <FaInstagram className="w-6 h-6 cursor-pointer ml-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
