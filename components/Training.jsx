import React from "react";

const Training = () => {
  return (
    <div className="container mx-auto bg-yellow-500 md:h-8 p-2 flex items-center">
      <p className="text-black">
        Hi, this is a training project to master{" "}
        <span className="font-bold">
          NextJS, TailwindCSS. Adapted from{" "}
          <a
            className="underline"
            href="https://www.youtube.com/c/CristianMihai01"
            target="_blank"
            rel="noreferrer"
          >
            Cristian Mihai
          </a>
        </span>
      </p>
    </div>
  );
};

export default Training;
