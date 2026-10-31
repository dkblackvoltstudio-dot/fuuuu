import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const isProd = process.env.NODE_ENV === "production";

  const routes = ["", "services", "pricing", "portfolio", "about", "contact"];

  app.get("/robots.txt", (req, res) => {
    const host = req.get("host") || "ais-pre-6tzapbwj2nfmidms25f2ed-454837743083.asia-southeast1.run.app";
    const protocol = req.protocol === "https" || req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
    const content = [
      "# Robots.txt for Hinton Evolution Tech",
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${protocol}://${host}/sitemap.xml`,
      "",
    ].join("\n");
    res.type("text/plain").send(content);
  });

  app.get("/sitemap.xml", (req, res) => {
    const host = req.get("host") || "ais-pre-6tzapbwj2nfmidms25f2ed-454837743083.asia-southeast1.run.app";
    const protocol = req.protocol === "https" || req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
    const base = `${protocol}://${host}`;
    const today = new Date().toISOString().split("T")[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${base}/${r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${r === "" ? "1.0" : r === "pricing" || r === "services" ? "0.9" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
    res.type("application/xml").send(xml);
  });

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  const port = Number(process.env.PORT || 3000);
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

startServer();
