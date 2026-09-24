import { Link } from "react-router-dom";
import { CASE_STUDIES } from "./caseStudies";

export default function ExploreCaseStudies({ currentId }) {
  const others = CASE_STUDIES.filter((cs) => cs.id !== currentId);

  return (
    <div className="border-t border-gray-200 pt-10 mt-14">
      <p className="text-2xl font-bold mb-6">Explore other case studies</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-12">
        {others.map((cs) => (
          <Link key={cs.id} to={cs.href} className="block group">
            <div className="relative w-full overflow-hidden rounded-[3px]">
              <img
                src={cs.imgSrc}
                alt={cs.title}
                className="w-full h-40 object-cover bg-[#181818] transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-3">
              <h4 className="text-gray-900 font-normal text-base mb-1 text-left">{cs.title}</h4>
              <p className="text-gray-500 text-sm font-light text-left">{cs.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
