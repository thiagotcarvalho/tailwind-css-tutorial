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
          <div className="flex">
            <div>Main content</div>
            <div>Sidebar</div>
          </div>
        </div>
    </div>
  );
}
