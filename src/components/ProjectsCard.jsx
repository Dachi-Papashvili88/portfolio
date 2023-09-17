import { FaGithubSquare } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 p-4">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-80"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <div className="flex items-center justify-center border-2 border-gray-300 rounded-lg p-2">
            <p className="font-semibold text-lg text-gray-500"><a href={url} target="_blank">Live</a></p>
            <a href={url} target="_blank">
              <BiLinkAlt className="h-8 w-8 ml-4 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
          <div className="flex items-center justify-center border-2 border-gray-300 rounded-lg p-2">
            <p className="font-semibold text-lg text-gray-500"><a href={github} target="_blank">Code</a></p>
          <a href={github} target="_blank">
            <FaGithubSquare className="h-8 w-8 ml-4 text-slate-500 hover:text-black duration-300" />
          </a>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
