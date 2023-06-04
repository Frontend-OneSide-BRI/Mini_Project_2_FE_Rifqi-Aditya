import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-4xl">PEOPL.</h1>
        <p>
          <strong>404.</strong> That's an error.
        </p>
        <p>
          The requested URL <strong>{pathname}</strong> was not found on this
          server.
        </p>
        <p>
          Let's go back to{" "}
          <a className="underline" href="/">
            our homepage.
          </a>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
