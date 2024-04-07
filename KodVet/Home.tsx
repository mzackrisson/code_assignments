import { tinaField } from "tinacms/dist/react";
import { PageBlocksHome } from "@/tina/__generated__/types";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export const Home = (props: { data: PageBlocksHome }) => {
const locale: string = "se"
  return (
    <div className="w-screen w-full flex flex-col justify-center align-middle items-center">
      <div className="flex w-full flex-col justify-center align-middle items-center">
        <div
          className="text-3xl z-10 text-white backdrop-blur-sm absolute"
          data-tina-field={tinaField(props.data, "imageTitle")}
        >
          {props.data.imageTitle}
        </div>
        <div className="bg-green-700 w-full h-56 hidden md:block"></div> 
        {/* <img alt="background" src="/uploads/stuff-background.png" className="hidden md:block"></img> */}
        <div className="bg-green-700 w-full h-56 block md:hidden"></div> 
      </div>
      <div className="grid home-grid">
        <img
          src="/uploads/left-leaves.svg"
          className="hidden lg:block row-span-1"
        ></img>
        <div className="flex flex-col items-center row-span-1">
          <h2
            className="m-4 text-black flex self-start px-7 mb-0"
            data-tina-field={tinaField(props.data, "paragraphTitle")}
          >
            {props.data.paragraphTitle}
          </h2>
          <Disclosure>
          {({ open }) => (
            <>
          <p
            className={`m-4 ${open ? "" : "h-28"} w-4/5	overflow-hidden md:overflow-hidden border-green-700 border-t-2 p-8`}
            data-tina-field={tinaField(props.data, "text")}
          >
            {props.data.text}
          </p>
          <Disclosure.Button className="flex items-center mt-2">
                <span>{locale === "en" ? "Read more" : "Läs mer"}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${open ? "-rotate-180 transform" : ""}`}
                  aria-hidden="true"
                />
              </Disclosure.Button>
          </>
          )}
        </Disclosure>
        <button
            data-tina-field={tinaField(props.data, "buttonText")}
            type="button"
            className="rounded-full w-56 h-20 mt-24 bg-green-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            {props.data.buttonText}
          </button>
          <div className="flex flex-col justify-center align-middle items-center">
        <div className="bg-green-700 w-4/12 h-56 block md:hidden"></div> 
      </div>
        <div className="flex flex-col items-center">
          <div className="border-y-green-700 h-14 w-4/5 border-b-2 m-4 mx-4">
          <h2
            className=" text-black flex self-start px-7 mb-0"
            data-tina-field={tinaField(props.data, "paragraphTitle")}
          >
            {props.data.paragraphTitle}
          </h2>
          </div>
          <div>
          </div>
          <div>
          <Disclosure>
          {({ open }) => (
            <>
          <div className="flex flex-col items-center w-4/5 border-4 shadow-2xl border-gray-400 rounded-3xl">
            <div className="h-36 w-full rounded-3xl	bg-orange-700"></div>
            <p
              className={`m-4 ${open ? "" : "h-28"} w-4/5 rounded overflow-hidden md:overflow-hidden border-green-700 p-8`}
              data-tina-field={tinaField(props.data, "text")}
            >
              {props.data.text}
            </p>
            <Disclosure.Button className="flex items-center mt-2">
                <span>{locale === "en" ? "Read more" : "Läs mer"}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${open ? "-rotate-180 transform" : ""}`}
                  aria-hidden="true"
                />
              </Disclosure.Button>
          </div>
          </>
          )}
        </Disclosure>
        <div>
        <Disclosure>
          {({ open }) => (
            <>
          <div className="flex flex-col items-center w-4/5 border-4 shadow-2xl border-gray-400 rounded-3xl">
            <div className="h-36 w-full rounded-3xl	bg-orange-700"></div>
            <p
              className={`m-4 ${open ? "" : "h-28"} w-4/5 rounded overflow-hidden md:overflow-hidden border-green-700 p-8`}
              data-tina-field={tinaField(props.data, "text")}
            >
              {props.data.text}
            </p>
            <Disclosure.Button className="flex items-center mt-2">
                <span>{locale === "en" ? "Read more" : "Läs mer"}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${open ? "-rotate-180 transform" : ""}`}
                  aria-hidden="true"
                />
              </Disclosure.Button>
          </div>
          <div>
            
          </div>
          </>
          )}
        </Disclosure>
        </div>
        </div>
        <button
            data-tina-field={tinaField(props.data, "buttonText")}
            type="button"
            className="rounded-full w-56 h-20 mt-24 bg-green-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            {props.data.buttonText}
          </button>
        </div>
        </div>
        
        <img
          src="uploads/did-you-know.svg"
          className="self-center hidden lg:block row-span-1"
        ></img>
      </div>
    </div>
  
  ); 
};
