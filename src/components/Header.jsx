import logo from "../assets/logo.png";
import { format } from "date-fns";
export const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-3">
      <img src={logo} alt="Logo" className="w-[350px]" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
    </div>
  );
};
