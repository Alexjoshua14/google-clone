import { GoSearch } from 'react-icons/go';
import { TbCameraSearch } from 'react-icons/tb';

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center gap-6">
      <span className="text-8xl h-1/3 font-medium flex items-end p-2">Google</span>
      <div className="flex gap-2 items-center py-3 px-4 w-3/4 max-w-xl rounded-full border-[1px] border-zinc-500 
                    hover:bg-zinc-800 hover:border-transparent focus-within:bg-zinc-800 focus-within:border-transparent">
        <GoSearch size={18} className="text-zinc-400" />
        <input className="flex-1 bg-transparent focus:outline-none" />
        <TbCameraSearch size={21} className="text-teal-600 cursor-pointer" />
      </div>
      <div className="flex p-2 gap-4 items-center text-zinc-100 text-sm">
        <span className="py-2 px-4 bg-zinc-800 rounded-[.25rem] border-[1px] border-transparent hover:border-zinc-500 cursor-pointer">Google Search</span>
        <span className="py-2 px-4 bg-zinc-800 rounded-[.25rem] border-[1px] border-transparent hover:border-zinc-500 cursor-pointer">I'm Feeling Lucky</span>
      </div>
    </div>
  )
}
