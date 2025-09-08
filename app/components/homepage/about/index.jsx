import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-0 md:my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          {/* <p className="text-gray-200 text-sm lg:text-lg font-extralight">
            I'm Saad, a passionate and innovative programmer with a relentless drive for excellence and a self-learning attitude. With expertise in the MERN stack, DevOps, and a deep command of JavaScript, I specialize in crafting cutting-edge, scalable applications and solving intricate problems with creativity and precision.
            <br />
            <br />
            Fueled by curiosity and a commitment to continuous growth, I thrive on exploring emerging technologies and pushing the boundaries of what's possible. My adaptability and full-stack proficiency enable me to excel in diverse environments, delivering high-impact solutions that are efficient, accessible, and future-ready.
            <br />
            <br />
            I’m inspired by the opportunity to create meaningful digital experiences, and my collaborative mindset ensures success in every project I undertake. Whether leading complex initiatives or contributing as part of a team, I bring a unique blend of technical expertise, strategic thinking, and a passion for innovation to the table.
          </p> */}
          <p className="text-gray-200 text-sm lg:text-lg font-extralight">
            I’m Saad — a passionate and innovative programmer with a relentless drive for excellence and a strong self-learning mindset.
            With expertise in the MERN stack, DevOps, and advanced JavaScript, I specialize in building scalable, modern applications and solving complex problems with creativity and precision.
            <br /><br />
            Guided by curiosity and continuous growth, I thrive on exploring emerging technologies and pushing the boundaries of what’s possible. My adaptability and full-stack proficiency allow me to excel in diverse environments, delivering impactful solutions that are efficient, accessible, and future-ready.
            <br /><br />
            I’m driven by the opportunity to create meaningful digital experiences, and my collaborative approach ensures success in every project I take on. Whether leading challenging initiatives or contributing as part of a team, I bring a unique blend of technical expertise, strategic thinking, and a passion for innovation.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={350}
            height={60}
            alt="Profile Image"
            className="rounded-lg  transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
