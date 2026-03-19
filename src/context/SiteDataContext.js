import { createContext, useContext, useEffect, useMemo, useState } from "react";
import fallbackSiteData from "../../data/site.json";

const SiteDataContext = createContext({
  siteData: fallbackSiteData,
  isLoading: true,
  refreshSiteData: async () => {},
});

export const SiteDataProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(fallbackSiteData);
  const [isLoading, setIsLoading] = useState(true);

  const refreshSiteData = async () => {
    try {
      const response = await fetch("/api/site-data");
      if (!response.ok) return;
      const json = await response.json();
      if (json?.data) {
        setSiteData(json.data);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshSiteData();
  }, []);

  const value = useMemo(
    () => ({ siteData, isLoading, refreshSiteData }),
    [siteData, isLoading]
  );

  return (
    <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  return useContext(SiteDataContext);
};
