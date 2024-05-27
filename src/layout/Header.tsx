import logo from "../../public/1.webp";

export default function Header() {
  return (
    <div className="flex p-4 gap-4">
      <img src={logo} className="aspect-square w-24 shadow-xl" />
      <div className="self-center">Legend</div>
    </div>
  );
}
