const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 3001);
const buildDir = path.resolve(__dirname, "..", "build");
const basePath = "/devcard";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function resolveFilePath(requestUrl) {
  const url = new URL(requestUrl, `http://localhost:${port}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") {
    pathname = `${basePath}/`;
  }

  if (pathname.startsWith(basePath)) {
    pathname = pathname.slice(basePath.length) || "/";
  }

  const requestedPath = path.normalize(path.join(buildDir, pathname));

  if (!requestedPath.startsWith(buildDir)) {
    return path.join(buildDir, "index.html");
  }

  if (fs.existsSync(requestedPath) && fs.statSync(requestedPath).isFile()) {
    return requestedPath;
  }

  return path.join(buildDir, "index.html");
}

const server = http.createServer((req, res) => {
  const filePath = resolveFilePath(req.url || "/");
  const ext = path.extname(filePath).toLowerCase();

  res.setHeader("Content-Type", contentTypes[ext] || "application/octet-stream");
  res.setHeader("Cache-Control", "no-store");
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, () => {
  console.log(`Serving production build at http://localhost:${port}${basePath}/`);
});
