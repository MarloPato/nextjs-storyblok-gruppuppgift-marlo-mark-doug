function Header(props) {
  const menuLinks = props.menuLinks || [];
  return (
    /* React still needs JSX to render HTML */
    <header>
      <nav>
        <ul>
          {menuLinks.map(function (item, i) {
            return (
              <li key={i}>
                <a href={item.link.cached_url}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
