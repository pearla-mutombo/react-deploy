import { useState, useEffect } from "react";
import useSecret from "../hooks/useSecret.js";

export default function Home() {
  const [secretValue, handleSubmit, didMount] = useSecret("apiKey");

  return (
    <main>
      <h2>Main Content Area</h2>
      <p>{"Component Status: DidMount " + didMount}</p>
      
      <p className="mt-6 text-md text-limegreen-300 dark:text-limegreen-300 border-t pt-4">
        <strong>
        How to create a 404 page that automatically redirects to a URL:{" "}
      </strong>
      <br />
        To create a 404 page that automatically redirects to a specific URL, you
        construct a custom hook like useRedirect that takes target url string
        parameters and a milliseconds countdown timing constraint. Inside this
        hook, a useEffect block running on the initial component mount phase
        instantiates a browser setTimeout schedule block, storing its unique
        identifier sequence tracking code inside a timerId local variable
        context. When the designated timeframe expires, an automated handler
        execution function fires to forcefully trigger navigate location
        changes. Lastly, the hook must return a clean-up function wrapper
        containing a clearTimeout invocation to instantly wipe away the
        scheduled background thread tasks if an explicit navigation change
        occurs prematurely.
      </p>
    </main>
  );
}
