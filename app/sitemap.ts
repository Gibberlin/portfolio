import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://syeds.in",
      priority: 1.0,
    },
    {
      url: "https://syeds.in/projects",
      priority: 0.8,
    },
    {
      url: "https://syeds.in/about",
      priority: 0.7,
    },
    {
      url: "https://syeds.in/contact",
      priority: 0.6,
    },
  ];
}
