// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin, BiLogoDevTo } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY)
          ? <ContactWithCaptcha /> : <ContactWithoutCaptcha />}

        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">

            <a href= "mailto:saadziauddin6@gmail.com?subject=Portfolio%20Visitor&body=I%20have%20viewed%20your%20portfolio.">
              <p className="text-sm md:text-lg flex items-center gap-3 font-light">
                <MdAlternateEmail className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={34} />
                <span>{personalData.email}</span>
              </p>
            </a>

            <a href="tel:+923052586061">
              <p className="text-sm md:text-lg flex items-center gap-3 font-light">
                <IoMdCall className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer" size={34} />
                <span>{personalData.phone}</span>
              </p>
            </a>

            <p className="text-sm md:text-lg flex items-center gap-3 font-light">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={34}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>

          <div className="mt-6 lg:mt-10 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.whatsapp}>
              <FaWhatsapp
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={44}
              />
            </Link>
            <Link target="_blank" href={personalData.dev}>
              <BiLogoDevTo
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={44}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;