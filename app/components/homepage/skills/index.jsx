import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-gray-200 text-xs">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;

// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
// // import { SiTypescript, SiVite, SiExpress, SiNextdotjs, SiNestjs, SiNuxtdotjs, SiVueDotJs, SiMongodb, SiFirebase, SiMysql, SiTailwindcss, SiMaterialui, SiBootstrap, SiGit, SiGithub, SiGitlab, SiBitbucket, SiFigma, SiCanva, SiPhotoshop, SiAws, SiGooglecloud, SiMicrosoftazure } from 'react-icons/si';
// import { SiTypescript, SiVite, SiExpress, SiNextdotjs, SiNestjs, SiNuxtdotjs, SiVueDotJs, SiMongodb, SiFirebase, SiMysql, SiTailwindcss, SiMaterialui, SiBootstrap, SiGit, SiGithub, SiGitlab, SiBitbucket, SiFigma, SiCanva, SiPhotoshop, SiGooglecloud, SiMicrosoftazure } from 'react-icons/si'; 
// import Marquee from 'react-fast-marquee';

// const skillsData = [
//   { name: 'HTML', icon: <FaHtml5 /> },
//   { name: 'CSS', icon: <FaCss3Alt /> },
//   { name: 'JavaScript', icon: <FaJsSquare /> },
//   { name: 'TypeScript', icon: <SiTypescript /> },
//   { name: 'React', icon: <FaReact /> },
//   { name: 'ViteJS', icon: <SiVite /> },
//   { name: 'ExpressJS', icon: <SiExpress /> },
//   { name: 'NodeJS', icon: <FaNodeJs /> },
//   { name: 'NextJS', icon: <SiNextdotjs /> },
//   { name: 'NestJS', icon: <SiNestjs /> },
//   { name: 'NuxtJS', icon: <SiNuxtdotjs /> },
//   { name: 'VueJS', icon: <SiVueDotJs /> },
//   { name: 'MongoDB', icon: <SiMongodb /> },
//   { name: 'Firebase', icon: <SiFirebase /> },
//   { name: 'MySQL', icon: <SiMysql /> },
//   { name: 'Tailwind', icon: <SiTailwindcss /> },
//   { name: 'MaterialUI', icon: <SiMaterialui /> },
//   { name: 'Bootstrap', icon: <SiBootstrap /> },
//   { name: 'Git', icon: <SiGit /> },
//   { name: 'GitHub', icon: <SiGithub /> },
//   { name: 'GitLab', icon: <SiGitlab /> },
//   { name: 'Bitbucket', icon: <SiBitbucket /> },
//   { name: 'Figma', icon: <SiFigma /> },
//   { name: 'Canva', icon: <SiCanva /> },
//   { name: 'Photoshop', icon: <SiPhotoshop /> },
//   // { name: 'AWS', icon: <SiAws /> },
//   { name: 'GCP', icon: <SiGooglecloud /> },
//   { name: 'Azure', icon: <SiMicrosoftazure /> },
// ];

// function Skills() {
//   return (
//     <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
//       <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
//         </div>
//       </div>

//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
//             Skills
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="w-full my-12">
//         <Marquee
//           gradient={false}
//           speed={80}
//           pauseOnHover={true}
//           pauseOnClick={true}
//           delay={0}
//           play={true}
//           direction="left"
//         >
//           {skillsData.map((skill, id) => (
//             <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer" key={id}>
//               <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
//                 <div className="flex -translate-y-[1px] justify-center">
//                   <div className="w-3/4">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center gap-3 p-6">
//                   <div className="h-8 sm:h-10">
//                     {skill.icon}
//                   </div>
//                   <p className="text-white text-sm sm:text-lg">
//                     {skill.name}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// }

// export default Skills;
