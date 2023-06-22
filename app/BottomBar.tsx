import { IoLeaf } from 'react-icons/io5';

const BottomBar = () => {
  return (
    <div className="h-[8.8rem] py-2 px-6 flex flex-col  items-center justify-around
                  bg-zinc-950 text-zinc-400 text-sm 
                    sm:h-[5.8rem] 
                    xl:h-[3rem] xl:py-4">

      <div className="flex xl:hidden gap-1 w-full justify-center">
        <IoLeaf className="text-green-600" />
        <span className="hover:underline cursor-pointer">Carbon neutral since 2007</span>
      </div>

      <div className="flex flex-col gap-6 justify-around w-full sm:gap-0 sm:flex-row">
        <div className="flex gap-6 w-full  justify-center sm:w-auto xl:w-1/3 xl:justify-start">
          <span className="hover:underline cursor-pointer">Advertising</span>
          <span className="hover:underline cursor-pointer">Business</span>
          <span className="hover:underline cursor-pointer">How Search works</span>
        </div>
        <div className="hidden xl:flex gap-1 w-1/3 justify-center">
          <IoLeaf className="text-green-600" />
          <span className="hover:underline cursor-pointer">Carbon neutral since 2007</span>
        </div>
        <div className="flex gap-6 w-full  justify-center px-4 sm:w-auto xl:w-1/3 xl:justify-end">
          <span className="hover:underline cursor-pointer">Privacy</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Settings</span>
        </div>
      </div>
    </div>
  )
};

export default BottomBar;


