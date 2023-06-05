import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
//import { PrismaClient } from '@prisma/client';
import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Landing from '@/components/home/Landing';
import Dashboard from '@/components/home/Dashboard/Dashboard';
import Login from '@/components/home/Login';
import Play from '@/components/play/Play'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  const [mode, setMode] = useState("LANDING");

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;

  useEffect(() => {
    if (user) {
      setMode("DASH");
    }
  }, [user]);

  return (
    <div className="app-wrapper">
      <div className="view-wrapper">
        {mode === "LANDING" &&
          <Landing setMode={setMode} user={user} />}
        {mode === "LOGIN" &&
          <Login />}
        {mode === "DASH" &&
          <Dashboard setMode={setMode}/>
        }
        {mode === "PLAY" &&
          <Play setMode={setMode}/>
        }
      </div>
    </div>
  )
}

//   if (user) {
//     return (
//       <div>
//         {/* <div>Welcome {user.name}! <a href="/api/auth/logout">Logout</a></div> */}
//       </div>
//     )
//   } else return (
//     <a href="/api/auth/login">Login</a>
//   );
// }

// export async function getStaticProps() {
//   const prisma = new PrismaClient();

//   return {
//     props : {}
//   };
// }