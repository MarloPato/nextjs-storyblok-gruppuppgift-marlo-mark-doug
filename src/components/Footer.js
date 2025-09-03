function Footer(props) {
  const footerLinks = props.footerLinks || [];
  const footerText = props.footerText || "";
  return (
    <footer>
      <p>{footerText}</p>
      <ul>
        {footerLinks.map(function (item, i) {
          return (
            <li key={i}>
              <a href={item.link.cached_url}>{item.label}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;
