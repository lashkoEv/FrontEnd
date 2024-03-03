import "./Footer.css";

const socialMedia = [
  {
    href: "https://www.facebook.com/",
    class: "fa-brands fa-facebook",
  },
  {
    href: "https://www.instagram.com/",
    class: "fa-brands fa-instagram",
  },
  {
    href: "https://www.linkedin.com/",
    class: "fa-brands fa-linkedin",
  },
  {
    href: "https://github.com/",
    class: "fa-brands fa-github",
  },
];

const links = [
  {
    href: "https://www.google.com/",
    title: "Google",
  },
  {
    href: "https://www.udemy.com/",
    title: "Udemy",
  },
  {
    href: "https://www.coursera.org/",
    title: "Coursera",
  },
  {
    href: "https://www.codewars.com/",
    title: "Codewars",
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        {socialMedia.map((item) => (
          <a href={item.class}>
            <i className={item.class + " icon"}></i>
          </a>
        ))}
      </div>

      <div className="links">
        {links.map((item) => (
          <a href={item.href} className="link">
            {item.title}
          </a>
        ))}
      </div>
    </footer>
  );
};
