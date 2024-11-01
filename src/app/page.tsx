import Image from "next/image";
import Header from "./myComponents/header";
import Projects from "./myComponents/project";
import { Progress } from "@/components/ui/progress"
export default function Home() {
  return (
    <>
    <Header/>

    <main className="wrapper pb-10 grid items-start justify-start grid-cols-1 min-[300px]:my-20 sm:grid-cols-2 sm:my-28">
      <div className=" intro  flex flex-col items-start justify-start gap-y-9">
        <h1 className="gradient-text text-6xl font-semibold min-[860px]:text-nowrap">{`Hello, I'm Sohaib`}</h1>
        <h1 className="text-white text-6xl font-semibold min-[910px]:text-nowrap">frontend developer</h1>

        <p className="text-wrap text-[#929EB0]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est doloribus architecto iste laborum adipisci incidunt, velit magni eaque nemo eum repellat inventore perferendis neque reiciendis. Modi eveniet labore illum.</p>
      </div>

      <div className="img  sm:flex items-end justify-end sm:pl-7">
        <Image
          src="/soh.png"
          alt="Profile Picture "
          width={200}
          height={200}
          className="pfp w-[200px] h-[200px] blur-[2px] grayscale mr-8 mt-8 border-4 rounded-[30px] border-transparent bg-gradient-to-r from-[#31CBE5] to-[#B27BF4] transition ease-out duration-1000 delay-150 hover:grayscale-0 hover:blur-none  hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.5)] min-[320]:justify-self-start sm:h-[250px] sm:w-[250px] lg:mt-0 lg:mr-0 lg:grid-cols-[2fr_1fr] "
        />
      </div>

      <div className="button">
          
          <button className="gradient text-white mt-7 py-3 px-6 rounded-full hover:drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)] md:py-4 md:px-9 ">Download cv</button>
          </div>
    </main>

    <h2 className="text-white text-xl md:text-3xl font-semibold wrapper mt-[50px]">Projects</h2>

    <div className="projects wrapper flex items-end justify-evenly gap-8 flex-wrap mt-[50px]">

      
      <Projects url="/project1.webp" projectUrl="/" alt="Project 1" name="Furniture store landing page" description="Responsive Nextjs layout for online furniture store. Nextjs.14, tailwind" />

      <Projects url="/project2.png" projectUrl="/" alt="Project 2" name="Designer furniture store landing page" description="Responsive Nextjs layout for online store of designer furniture. Nextjs.14, tailwind "/>

      <Projects url="/Project3.png" projectUrl="/" alt="Project 2" name="Personal Portfolio" description="Responsive Personal Portfolio for front-end developer. Nextjs, Tailwind, Shadcn"/>

      <Projects url="/project4.png" projectUrl="/" alt="Project 2" name="Website redesign for The Venus project" description="Responsive Nextjs layout for The Venus project. Nextjs.14, tailwind "/>

    </div>



    <div className="progress wrapper w-full flex flex-col items-start justify-end gap-y-9 md:gap-y-14
     mt-40" >

      <h2 className="text-white text-xl md:text-3xl font-semibold">Technologies</h2>

      <div className="technolgy w-full flex flex-col gap-y-4">
        <div className="progressInfo flex justify-between items-start md:items-end">
          <h3  className="text-white text-[14px] md:text-2xl  font-semibold">Html, CSS</h3>
          <p className="text-[12px]  md:text-base text-[#FFFFFF]">Advanced</p>
        </div>
        <Progress className="" value={100}/>
      </div>

      <div className="technolgy w-full flex flex-col gap-y-4">
        <div className="progressInfo flex justify-between items-start md:items-end">
          <h3  className="text-white text-[14px] md:text-2xl  font-semibold">Tailwind, Bootstrap, Shadcn & Redux</h3>
          <p className="text-[12px]  md:text-base text-[#FFFFFF]">Advanced</p>
        </div>
        <Progress value={100}/>
      </div>

      <div className="technolgy w-full flex flex-col gap-y-4">
        <div className="progressInfo flex justify-between items-start md:items-end">
          <h3  className="text-white text-[14px] md:text-2xl  font-semibold">JavaScript & TypeScript</h3>
          <p className="text-[12px]  md:text-base text-[#FFFFFF]">Advanced</p>
        </div>
        <Progress value={100}/>
      </div>

      <div className="technolgy w-full flex flex-col gap-y-4">
        <div className="progressInfo flex justify-between items-start md:items-end">
          <h3  className="text-white text-[14px] md:text-2xl  font-semibold">React & Nextjs</h3>
          <p className="text-[12px] md:text-base text-[#FFFFFF]">Intermediate</p>
        </div>
        <Progress value={80}/>
      </div>

      <div className="technolgy w-full flex flex-col gap-y-4">
        <div className="progressInfo flex justify-between items-start md:items-end">
          <h3  className="text-white text-[14px] md:text-2xl  font-semibold">Python, Tkinter & Turtle</h3>
          <p className="text-[12px]  md:text-base text-[#FFFFFF]">Intermediate</p>
        </div>
        <Progress value={80}/>
      </div>

    </div>




    <div className="skills wrapper mt-32 flex flex-col justify-between gap-y-16">
      <h2 className="text-white text-xl md:text-3xl font-semibold">Additional technologies and skills</h2>

      <ul className="ul-skills grid grid-cols-2 justify-start items-start text-nowrap gap-y-10 gap-x-9 sm:grid-cols-3 ">

        <li className="li-skills text-white text-[14px] md:text-2xl  font-medium ">Git & GitHub</li>
        <li className="li-skills text-white text-[14px] md:text-2xl  font-medium">Linux / Ubuntu</li>
        <li className="li-skills text-white text-[14px] md:text-2xl  font-medium">TeamWork</li>
        <li className="li-skills text-white text-[14px] md:text-2xl  font-medium">Quick learning</li>
        <li className="li-skills text-white text-[14px] md:text-2xl  font-medium">Engagement</li>
        <li className="li-skills text-white text-[14px] md:text-2xl  font-medium">B2 English</li>
        <li className="li-skills text-white text-[14px] md:text-2xl  font-medium">Problem Solving</li>
      </ul>

    </div>

    </>
  );
}
