import "./Header.css";

export const Header = ({ children }) => {
  return (
    <header className="w-full p-6">
      <nav className="w-full flex justify-center align-center gap-4">
        {children}
      </nav>
    </header>
  );
};
