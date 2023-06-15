import Link from "next/link";

import localFont from "next/font/local";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function Login() {
  return (
    <div className="login-container">
      <button
        style={{
          fontFamily: vt.style.fontFamily,
        }}
      >
        <Link href="/api/auth/login">Login</Link>
      </button>
    </div>
  );
}
