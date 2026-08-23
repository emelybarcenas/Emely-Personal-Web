import { useState } from "react";

export default function LazyImage({ className = "", onLoad, loading = "lazy", ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      {...props}
      loading={loading}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={`${className} ${loaded ? "" : "bg-gray-200 animate-pulse"}`}
    />
  );
}
