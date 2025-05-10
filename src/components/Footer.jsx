import "../css/Footer.css";

const Footer = () => {
  //4. Create a Footer.jsx component that renders a <footer> element
  //to show a copyright message in a <p> with a dynamically updated year.

  return (
    <footer>
      <p>copyright @ {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
