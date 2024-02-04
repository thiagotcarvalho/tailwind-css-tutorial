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
    </div>
  );
}
