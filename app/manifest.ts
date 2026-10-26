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
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon"
      },
      {
        src: "/og-image.png",
        sizes: "1200x630",
        type: "image/png"
      }
    ]
  };
}
