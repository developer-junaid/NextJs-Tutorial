import React, { useEffect } from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter(); // For redirect

  // UseEffect
  useEffect(() => {
    setTimeout(() => {
      router.push("/"); // redirect to homepage
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooopss...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
