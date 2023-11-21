"use client"; // Error components must be Client Components

// pagefor: Error page for the whole Application

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(
    () => {
      // Log the error to an error reporting service
      console.error(error);
    },
    [error]
  );

  return (
    <div>
      <h2>Valami hiba tortent!</h2>
      <button
        onClick={// Attempt to recover by trying to re-render the segment
        () => reset()}
      >
        Újrapróbálom
      </button>
    </div>
  );
}
