import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://piratetaylorsmarine.com/sitemap.xml",
    host: "https://piratetaylorsmarine.com",
  };
}
