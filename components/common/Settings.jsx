import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Settings(props) {
  return (
    <div className="popup settings-container">
      <div className="close-window" onClick={props.handleClick}>
        <FontAwesomeIcon icon={faXmark} />
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
