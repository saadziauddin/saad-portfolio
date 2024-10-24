import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
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
          <p className="text-gray-200 text-sm lg:text-lg font-extralight">
            I'm Saad, a passionate and professional programmer with a self-learning attitude. I specialize in the MERN stack and DevOps, with a strong focus on JavaScript. I love exploring new technologies and solving complex problems, constantly striving to make the web more accessible.
            <br />
            <br />
            A quick learner, I enjoy working across all web development stacks and adapting to new challenges. My drive for continuous improvement pushes me to stay ahead of industry trends, always looking for ways to enhance the quality and efficiency of my work. My commitment to quality and excellence ensures that every project I work on is a success.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={360}
            height={160}
            alt="Saad Image"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
