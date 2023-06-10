import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Settings(props) {
  return (
    <div className="popup settings-container">
      <div className="close-window" onClick={props.handleClick}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <ul>
        <li>
          <button>SETTING 1</button>
        </li>
        <li>
          <button>SETTING 2</button>
        </li>
        <li>
          <button
            style={{
              backgroundColor: "#913228",
            }}
          >
            <Link href="/api/auth/logout">LOG OUT</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
