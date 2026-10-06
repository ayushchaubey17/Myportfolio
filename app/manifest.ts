import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ayush Kumar — Java Backend & MERN Developer",
    short_name: "Ayush Kumar",
    description:
      "Java Backend and MERN Developer specializing in Spring Boot, Node.js, Next.js, microservices, REST APIs and full-stack applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090c",
    theme_color: "#08090c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
