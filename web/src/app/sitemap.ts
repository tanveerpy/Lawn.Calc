import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { NAV_LINKS } from "@/constants/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://lawncalc.com"; // Replace with actual domain

    // 1. Static Routes
    const staticRoutes = [
        "",
        "/about-us",
        "/contact-us",
        "/privacy-policy",
        "/terms-of-service",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1.0 : 0.8,
    }));

    // 2. Dynamic Calculator Routes (from Navigation)
    const calculatorRoutes = NAV_LINKS.map((link) => ({
        url: `${baseUrl}${link.path}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...calculatorRoutes];
}
