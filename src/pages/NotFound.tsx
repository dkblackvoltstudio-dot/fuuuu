import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Compass } from "lucide-react";
import { usePageMeta } from "@/components/site/SiteChrome";

export default function NotFound() {
  usePageMeta("Page not found", "The page you are looking for could not be found.");
  useEffect(() => {
    if (window.location.pathname !== "/404") {
      window.location.replace("/404");
    }
  }, []);

  return (
    <main className="section-pad" style={{ minHeight: "70vh", display: "grid", placeItems: "center", textAlign: "center" }}>
      <div className="site-container" style={{ maxWidth: "600px" }}>
        <span className="eyebrow" style={{ justifyContent: "center" }}><i></i>404 ERROR</span>
        <h1 style={{ fontSize: "3rem", margin: "1rem 0" }}>Page not found</h1>
        <p style={{ color: "var(--text)", marginBottom: "2rem" }}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="button">Return to home <ArrowRight size={16} /></Link>
          <Link href="/services" className="button button-outline">Explore services <Compass size={16} /></Link>
        </div>
      </div>
    </main>
  );
}
