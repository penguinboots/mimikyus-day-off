export default function Settings(props) {
  return (
    <div className="settings-container">
      <div className="close-window" onClick={props.handleClick}>
        X
      </div>
      <ul>
        <li>SETTING 1</li>
        <li>SETTING 2</li>
        <li>SETTING 3</li>
        <li>
          <a href="/api/auth/logout">LOG OUT</a>
        </li>
      </ul>
    </div>
  );
}
