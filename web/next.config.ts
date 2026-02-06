import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactCompiler: true,
};

const withMDX = createMDX({});

export default withMDX({
  ...nextConfig,
  output: "export",
  // Optional: Add basePath if deploying to a subdirectory (e.g. /repo-name)
  // basePath: "/repo-name", 
});
