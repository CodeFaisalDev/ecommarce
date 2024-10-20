import Featured from "@/components/Featured/Featured";
import Hero from "@/components/Hero/Hero";
import MainService from "@/components/MainService/MainService";
import MostPopular from "@/components/MostPopular/MostPopular";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1920px]">
      <Hero />
      <Featured />
      <MostPopular />
      <MainService />
    </div>
  );
}
