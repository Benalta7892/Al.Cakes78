import { useEffect, useState } from "react";

export const useIsMobile = (maxWidth = 500) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= maxWidth);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [maxWidth]);

  return isMobile;
};
