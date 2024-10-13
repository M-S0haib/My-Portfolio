import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <>
    <Header/>

    <main className="wrapper wrapper2 flex items-start justify-between  my-28">
      <div className=" intro flex-1 flex flex-col items-start justify-between gap-7">
        <h1 className="gradient-text text-6xl font-semibold">{`Hello, I'm Sohaib`}</h1>
        <h1 className="text-white text-6xl font-semibold">frontend developer</h1>

        <p className="text-wrap text-[#929EB0]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est doloribus architecto iste laborum adipisci incidunt, velit magni eaque nemo eum repellat inventore perferendis neque reiciendis. Modi eveniet labore illum.</p>
      
        <button className="gradient text-white py-4 px-9 rounded-full hover:drop-shadow-[0_2px_2px_rgba(255,255,255,0.5)]">Download cv</button>
      </div>

      <div className="img flex-1 flex items-end justify-end px-5">
        <Image
          src="/soh.png
          "
          alt="Profile Picture "
          height={300}
          width={300}
          className="blur-[2px] grayscale mr-8 -rotate-[30deg] -translate-x-16 border-4 rounded-[30px] border-transparent bg-gradient-to-r from-[#31CBE5] to-[#B27BF4] transition ease-out duration-500 hover:grayscale-0 hover:blur-none hover:rotate-0 hover:translate-x-0 hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.5)] "
        />
      </div>
    </main>
    </>
  );
}
