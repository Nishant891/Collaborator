import editorPic from "../assets/editorPic.webp";
import { BsFillTriangleFill } from "react-icons/bs";
import { useNavigation } from "@/lib/utils";
import Navbar from "@/components/build/navbar";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  const { performNavigation } = useNavigation();
  return (
    <>
    <Navbar />
      <div className="w-screen h-[38rem] sm:h-[50rem] flex flex-col justify-center items-center background px-2 pt-0 sm:pt-20">
        <div className="max-w-[36rem] text-center sm:py-10">
          <p className="text-4xl bg-gradient-to-r mb-2 from-green-400 to-blue-500 text-transparent bg-clip-text">
            CODING FLUX
          </p>
          <p className="text-xl sm:text-3xl text-gray-50 mb-4">
            Revolutionize{" "}
            <span className="text-blue-500 italic">collaborative</span> coding
            with our &#123;
            <span className="text-green-600"> feature-packed </span>&#125;{" "}
            <span className="underline">code editor</span>
          </p>
          <Button
            className="text-md gap-2"
            variant={"outline"}
            size={"lg"}
            onClick={() => {
              performNavigation("/login");
            }}>
            Get Started
            <FaArrowRight/>
          </Button>
        </div>
        <div className="w-full h-[14rem] sm:h-[22rem] flex flex-col justify-center items-center gap-2">
          <div className="h-[10rem] w-full sm:h-[19rem] sm:w-[36rem] mx-3">
            <img
              className="h-auto max-w-full rounded-md bg-white border-4 border-gray-300"
              src={editorPic}
              alt="Register"
            />
          </div>
          <BsFillTriangleFill size={50} fill="white" className="hide-icon" />
        </div>
      </div>
    </>
  );
}

export default Home;
