import { NavLinks } from "./NavLinks";

export const NavLinksAfter = () => {
  console.log("nav After");
  return (
    <div className="navAfter">
      <div className="navAfterChild">
        <NavLinks />
      </div>
    </div>
  );
};
