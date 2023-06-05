import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faGear, faVolumeXmark, faVolumeLow } from "@fortawesome/free-solid-svg-icons";

export default function IconButton(props) {
  const { buttonName, handleClick } = props;

  const getIcon = (name) => {
    switch (name) {
      case "ACHIEVEMENTS":
        return <FontAwesomeIcon icon={faCertificate} />;
      case "SETTINGS":
        return <FontAwesomeIcon icon={faGear} />;
      case "MUTE_ON":
        return <FontAwesomeIcon icon={faVolumeXmark} />;
      case "MUTE_OFF":
        return <FontAwesomeIcon icon={faVolumeLow} />;
    }
  }

  return (
    <div className="icon-button" onClick={handleClick}>
      {getIcon(buttonName)}
    </div>
  );
}
