"use client" 
import Image from "next/image";

interface projectInfo {
  url: string; 
  alt: string; 
  name: string; 
  description: string; 
  projectUrl: string; 
}

const Projects = ({ url, alt, name, description, projectUrl }: projectInfo) => {
  return (
    <div className="project flex flex-col justify-between items-start w-[320px] min-h-[398px] p-5 gap-y-4 rounded-2xl md:w-[400px] md:h-[500px] border md:rounded-3xl border-x-[#13ADC7] border-y-[#945DD6] md:p-8">
      <div className="pInfo flex flex-col items-start gap-y-3 md:gap-y-5">
        <Image
          src={url}
          alt={alt}
          width={260}
          height={138}
          className="pImage w-[335px] h-[200px] object-none"
        />
        <h3 className="text-white text-[16px] md:text-2xl">{name}</h3>
        <p className="text-[#929EB0] text-[12px] md:text-base text-wrap">
          {description}
        </p>
      </div>

      
      <button
        type="button"
        className="gradient text-white font-medium rounded-3xl py-2 px-3 text-[14px] md:text-base md:rounded-[30px] hover:drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)] md:py-3 md:px-4"
        onClick={() => {
          window.location.href = projectUrl; 
        }}
      >
        Check on Github
      </button>
    </div>
  );
};

export default Projects;
