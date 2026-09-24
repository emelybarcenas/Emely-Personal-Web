import { useState } from "react";

export default function LazyVideo({ className = "", onLoadedData, ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <video
      {...props}
      onLoadedData={(e) => {
        setLoaded(true);
        onLoadedData?.(e);
      }}
      className={`${className} ${loaded ? "" : "bg-gray-200 animate-pulse"}`}
    />
  );
}
