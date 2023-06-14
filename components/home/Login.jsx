import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="login-container">
      <button>
        <Link href="/api/auth/login">Login</Link>
      </button>
    </div>
  );
}
