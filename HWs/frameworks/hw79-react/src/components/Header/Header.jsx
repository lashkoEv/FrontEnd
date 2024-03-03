import "./Header.css";

const navLinks = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

export const Header = () => {
  return (
    <header className="header">
      <div className="input-wrapper">
        <input type="text" className="input" placeholder="Search..." />
      </div>

      <nav className="navigation">
        {navLinks.map((item) => (
          <a href={item.href} className="link">
            {item.title}
          </a>
        ))}
      </nav>

      <div className="login-wrapper">
        <button className="login">Login</button>
      </div>
    </header>
  );
};
