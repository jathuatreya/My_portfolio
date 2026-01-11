import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jathushan Varnakulasingam Portfolio",
    short_name: "Jathu.V Portfolio",
    description: "Portfolio of Jathushan Varnakulasingam - Full Stack Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/logo.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable" as any
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
