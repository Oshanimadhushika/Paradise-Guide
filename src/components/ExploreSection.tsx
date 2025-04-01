import Image from "next/image";
import ParadiseGuideLogo from "../assets/Paradise Guide logo.png";
import AppStoreBlack from "../assets/AppStore.png";
import PlayStoreBlack from "../assets/GooglePlay.png";
import MobileImg from "../assets/MobilePhone2.png";
import Sigiriya from "../assets/sigiriya2.png";
import Link from "next/link";

const ExploreSection = () => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return (
    <section className="grid grid-cols-12 gap-4 items-center mt-6 mx-auto px-4 py-5 pt-8 ">
      {/* Left Content */}
      <div className="col-span-12 lg:col-span-6 w-full flex flex-col items-center lg:items-start text-center lg:text-left bg-[#EFEFEF] h-full ">
        <div className="p-6 mt-7">
          <h2 className="text-3xl md:text-4xl font-anton text-black">
            Explore the Beauty and Mysteries <br /> of Sri Lanka
          </h2>
          <p className="text-gray-600 mt-5 text-left">
            Endless beaches, timeless ruins, welcoming people, oodles of
            elephants, rolling surf, cheap prices, fun trains, famous tea, and
            flavorful food make Sri Lanka irresistible.
          </p>

          {/* App Store Buttons */}
          <div className="flex justify-center lg:justify-start flex-col md:flex-row gap-4 mt-6">
            <Link href="/" passHref>
              <Image
                src={ParadiseGuideLogo}
                alt="Paradise Guide Logo"
                className="cursor-pointer w-[120px] h-[50px]"
                onClick={handleLogoClick}
              />
            </Link>

            <Image
                src={AppStoreBlack}
                alt="App Store"
                className="w-[140px] h-[50px]"
              />
              <Image
                src={PlayStoreBlack}
                alt="Google Play"
                className="w-[140px] h-[50px]"
              />
          </div>
        </div>

        {/* Mobile Image - Pushes to bottom */}
        <div className="flex flex-grow items-end justify-center w-full pt-4 pl-5">
          <Image
            src={MobileImg}
            alt="Mobile UI"
            className="rounded-xl shadow-lg w-[458px] h-full"
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="col-span-12 lg:col-span-6 flex justify-center relative h-full">
        <Image
          src={Sigiriya}
          alt="Sigiriya Rock"
          width={700}
          height={500}
          className="w-full h-auto "
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent text-white p-6 rounded-b-lg">
          <h3 className="text-3xl font-anton">Sigiriya Rock</h3>
          <p className="text-sm mt-4">
            Sigiriya or Sinhagiri is an ancient rock fortress located in the
            northern Matale District near the town of Dambulla in the Central
            Province, Sri Lanka.
          </p>
          <button className="mt-2 px-4 py-2 border border-gray-300 text-gray-300 bg-transparent font-semibold rounded-full hover:border-white hover:text-white transition text-sm">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
