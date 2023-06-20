import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import mimikyu from "@/public/sprites/mimikyu-idl.gif";
import localFont from "next/font/local";
import Image from "next/image";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });
const itim = localFont({ src: "../../public/fonts/Itim-Regular.ttf" });

export default function Landing(props) {
  const { setMode, user, isLoading } = props;

  const handleClick = () => {
    if (user) {
      setMode("DASH");
    } else {
      setMode("LOGIN");
    }
  };

  return (
    <div className="landing-container">
      <Image
        className="mimikyu-sprite"
        src={mimikyu}
        width={500}
        height={500}
        alt="Mimikyu"
      />
      <h1
        style={{
          fontFamily: itim.style.fontFamily,
        }}
      >
        Mimikyu&apos;s Day Off
      </h1>
      {!isLoading && !user && (
        <button
          style={{
            fontFamily: vt.style.fontFamily,
          }}
          onClick={handleClick}
        >
          Enter
        </button>
      )}
      {isLoading ||
        (user && (
          <>
            <FontAwesomeIcon className="spinner" icon={faFan} />
            <h4
              style={{
                fontFamily: vt.style.fontFamily,
                fontSize: "22px",
              }}
            >
              LOADING...
            </h4>
          </>
        ))}
    </div>
  );
}
