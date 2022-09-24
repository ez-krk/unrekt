import { flags } from '../../utils/flags';
const RedFlags = () => {
  return (
    <div className="container flex flex-col justify-center items-center p-2 bg-[#6abd4c]">
      <h2 className="prose text-sm p-2 text-[#e00]">RED FLAGS</h2>

      {flags.map((flag) => {
        return (
          <div className="">
            <p className="text-sm prose text-white">{flag.flag}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RedFlags;
