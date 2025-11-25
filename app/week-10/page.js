"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Week 9: Firebase Auth</h1>

      {/* Show login button if no user is signed in */}
      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Sign in with GitHub
        </button>
      ) : (
        <>
          {/* Show user info and logout if signed in */}
          <p className="mb-2">Signed in as: {user.displayName}</p>
          <button
            onClick={firebaseSignOut}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Sign out
          </button>

          {/* Link to shopping list */}
          <div className="mt-4">
            <Link
              href="/week-9/shopping-list"
              className="text-blue-600 underline"
            >
              Go to Shopping List
            </Link>
          </div>
        </>
      )}
    </main>
  );
}