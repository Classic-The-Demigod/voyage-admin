import Image from "next/image";

const Footer = () => {
  return (
    <section className="p-10 font-outfit">
      <div className="flex md:flex-row flex-col justify-center items-center gap-8 md:justify-between border-t border-t-white/60 pt-10">
        <div className="flex items-center gap-4">
          <div className="bg-primary rounded w-16 h-16 flex items-baseline-last justify-center">
            <Image
              src="/assets/svgs/logo-alone.svg"
              width={100}
              height={100}
              alt="logo"
            />
          </div>

          <h1 className="text-2xl text-white font-medium">Voyage</h1>
        </div>

        <div className="flex items-center gap-4">
          <h1 className="text-white text-base">Follow us:</h1>

          <Image
            src={"/assets/svgs/facebook.svg"}
            width={30}
            height={30}
            alt="social"
          />
          <Image
            src={"/assets/svgs/instagram.svg"}
            width={30}
            height={30}
            alt="social"
          />
          <Image
            src={"/assets/svgs/tiktok.svg"}
            width={30}
            height={30}
            alt="social"
          />
          <Image
            src={"/assets/svgs/linkedin.svg"}
            width={30}
            height={30}
            alt="social"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
