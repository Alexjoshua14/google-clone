import { CgMenuGridO } from 'react-icons/cg';
import { GiNinjaVelociraptor } from 'react-icons/gi';

const TopNav = () => {
  return (
    <div className="flex items-center h-14 p-4 justify-between text-sm border-2 border-pink-500">
      <div className="flex gap-4 p-2 text-zinc-400">
        <span className="hover:underline cursor-pointer">About</span>
        <span className="hover:underline cursor-pointer">Store</span>
      </div>

      <div className="flex gap-2 items-center">
        <span className="p-2 hover:underline cursor-pointer">Gmail</span>
        <span className="p-2 hover:underline cursor-pointer">Images</span>
        <CgMenuGridO size={40} className="p-2 rounded-full hover:bg-zinc-800 cursor-pointer" />
        <GiNinjaVelociraptor size={40} className="p-2 rounded-full hover:bg-zinc-800 cursor-pointer" />
      </div>
    </div>
  );
}

export default TopNav;