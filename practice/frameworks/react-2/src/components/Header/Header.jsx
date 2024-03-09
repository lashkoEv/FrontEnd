import { Input } from "../Input/Input";

export const Header = ({ logoSrc, linksData }) => {
  return (
    <header className="header">
      <img src={logoSrc} alt="Logo" className="logo" />

      <Input type="text" />

      {linksData.map((link) => (
        <a href={link.href} className="link">
          {link.title}
        </a>
      ))}
    </header>
  );
};
