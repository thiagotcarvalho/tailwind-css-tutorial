import Image from "next/image";

export default function Home() {
  return (
    <div>
        <h1 className="border-4 border-green-600">
          Hello world!
        </h1>
        <h1 className="text-vuejs-932">
          Hello world!
        </h1>

        <p className="text-xs sm:text-base md:text-lg lg:text-3xl">
          Hello, long sentence!
        </p>

        <p className="mb-1">
          Hello, long sentence!
        </p>
        <p>Another long sentence.</p>

        <h1 className="text-3xl italic">Title 1</h1>
        <h1 className="text-2xl">Title 1</h1>
        <h1 className="text-xl">Title 1</h1>
        <p className="text-base leading-loose underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4">
          A regular paragraph.
        </p>
        <p className="text-sm">A description paragraph.</p>
        <p className="text-xs note">A little note.</p>

        <div className='whitespace-nowrap' style={{ width: '200px' }}>
          <p>This is a long sentence with a lot of words to explain that truncate will truncate my sentence</p>
          <p className="truncate">This is a long sentence with a lot of words to explain that truncate will truncate my sentence</p>
        </div>

        <div id="padding-tutorial" className="bg-red-500 text-white font-bold px-1">
          Hello!
        </div>

        <div id="margin_tutorial">
          <div className="bg-blue-500 text-white font-bold m-4">
            Box with margin
          </div>
          <div className="bg-red-500 text-white font-bold p-4">
            Box with padding
          </div>

          <h1 className="mb-4 text-2xl font-bold">This is my title</h1>
          <p>This is my paragraph</p>

          <div class="h-16 bg-sky-400 opacity-20"></div>
          <div class="-mt-8 bg-sky-300">-mt-8</div>
        </div>

        <div id="space-between" className="flex space-x-4 w-full min-h-screen">
          <div className="w-1/5 bg-red-500">Sidebar</div>
          <div className="w-4/5 bg-green-500">Main content</div>
        </div>

        <div className="Parent">
          <div>Header</div>
          <div className="flex flex-row">
            <div className="basis-3/4">Main content</div>
            <div className="flex flex-col">
              <div>Sidebar</div>
              <div>Menu</div>
            </div>
          </div>
        </div>

        <div className="Parent">
          <div>Header</div>
          <div className="flex flex-col md:flex-row">
            <div className="flex w-full flex-wrap">
              <div className="w-32 grow">01</div>
              <div className="w-32 grow">02</div>
              <div className="w-32 grow">03</div>
              <div className="w-32 grow">04</div>
              <div className="w-32 grow">05</div>
            </div>
          </div>
        </div>
        
        <div className="Parent"> 
          <div>Header</div>
          <div className="flex items-center justify-evenly">
            <div>Sidebar</div>
            <div>
              <h1>Main content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>Another Sidebar</div>
          </div>
        </div>

        <div className="h-screen text-white Parent bg-slate-900">
          <div className="container mx-auto">
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 pt-5">
              <div className="col-span-2 p-6 rounded-lg bg-sky-500">01</div>
              <div className="col-span-2 p-6 rounded-lg bg-sky-500">02</div>
              <div className="p-6 rounded-lg bg-sky-500">03</div>
              <div className="p-6 rounded-lg bg-sky-500">04</div>
              <div className="p-6 rounded-lg bg-sky-500">05</div>
              <div className="col-span-2 p-6 rounded-lg bg-sky-500">06</div>
              <div className="p-6 rounded-lg bg-sky-500">07</div>
              <div className="p-6 rounded-lg bg-sky-500">08</div>
              <div className="p-6 rounded-lg bg-sky-500">09</div>
              <div className="col-span-2 p-6 rounded-lg bg-sky-500">10</div>
              <div className="p-6 rounded-lg bg-sky-500">11</div>
              <div className="p-6 rounded-lg bg-sky-500">12</div>
            </div>
          </div>
        </div>

        <div className="h-screen p-4 Parent">
          <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md blur hover:blur-none hover:invert transition">
            <img
              src="https://source.unsplash.com/a-couple-of-people-standing-on-top-of-a-hill-5jBY78hkqto" alt=""
              className="w-64 mb-4 brightness-125"
            />
            <h1 className="text-2xl">Hello</h1>
            <p className="mb-4">This is my div</p>
            <button className="px-3 py-2 text-white rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50 hover:-translate-y-1 transition">
              Say Hello
            </button>
          </div>
        </div>
    </div>
  );
}
