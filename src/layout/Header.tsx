import logo from "../../public/1.webp";

export default function Header() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 pt-4 md:pt-6">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          className="aspect-square w-24 md:w-[70%] shadow-xl col-span-1"
        />
      </div>
      <div className="self-center md:col-span-3 col-span-2">Legend</div>
    </div>
  );
}
