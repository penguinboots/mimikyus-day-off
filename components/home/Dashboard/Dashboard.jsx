import CharSection from "./CharSection";
import Nav from "../../common/Nav";
import EnterGame from "./EnterGame";
import { useEffect, useState } from "react";

export default function Dashboard(props) {
  const { mode, setMode, isMusicPlaying, handleMusicToggle } = props;

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user?auth0Sub=auth0sub123`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  console.log(userData);

  return (
    <div className="dashboard">
      <Nav
        mode={mode}
        isMusicPlaying={isMusicPlaying}
        handleMusicToggle={handleMusicToggle}
        windowTitle="POKÉDEX"
      />
      <div className="dash-body">
        <CharSection />
        <EnterGame setMode={setMode} />
      </div>
    </div>
  );
}
