import { FaGithub } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Links = () => {
  return (
    <div className="w-full pb-2 flex flex-col lg:flex-row gap-4 justify-center items-center text-lg border-black/20 border-t-0 border-b-2 border-l-0">
      <div className="flex flex-row gap-2 justify-center items-center">
        <FaMapPin />
        <div>Spring Hill, TN</div>
      </div>
      <a
        href="mailto:jasoncbura@gmail.com"
        className="flex flex-row gap-2 justify-center items-center hover:text-blue-500"
      >
        <FaInbox />
        <div>jasoncbura@gmail.com</div>
      </a>
      <a
        href="tel:+19253575971"
        className="flex flex-row gap-2 justify-center items-center hover:text-blue-500"
      >
        <FaPhone />
        <div>(925) 357-5971</div>
      </a>
      <a
        href="https://www.linkedin.com/in/jason-bura/"
        target="_blank"
        className="flex flex-row gap-2 justify-center items-center hover:text-blue-500"
      >
        <FaLinkedin />
        <div>in/jason-bura</div>
      </a>
      <a
        href="https://github.com/jcbura"
        target="_blank"
        className="flex flex-row gap-2 justify-center items-center hover:text-blue-500"
      >
        <FaGithub />
        <div>github.com/jcbura</div>
      </a>
    </div>
  );
};

export default Links;
