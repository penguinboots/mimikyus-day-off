import IconButton from "./IconButton";

export default function Nav() {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <div className="nav-left">
          <div className="logo">PLACEHOLDER LOGO</div>
        </div>
        <div className="nav-right">
          <IconButton buttonName="Stickers"/>
          <IconButton buttonName="Settings"/>
          <IconButton buttonName="Mute"/>
        </div>
      </nav>
    </div>
  );
}
