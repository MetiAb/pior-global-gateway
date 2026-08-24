import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const routes = ["/", "/about", "/products", "/contact"];
const outputDirectory = resolve("dist/client");
const server = (await import("../dist/server/server.js")).default;

for (const route of routes) {
  const response = await server.fetch(new Request(`http://localhost${route}`), {}, {});
  if (!response.ok) {
    throw new Error(`Failed to prerender ${route}: ${response.status}`);
  }

  const directory = resolve(outputDirectory, route.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), await response.text());
}

console.log(`Prerendered ${routes.length} routes to ${outputDirectory}`);
