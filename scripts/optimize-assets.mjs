import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const staging = path.join(root, "_staging");
const imgOut = path.join(root, "public", "assets", "images");
const vidOut = path.join(root, "public", "assets", "videos");

const images = {
  "sakhti-poultry-logo.png": { name: "logo.png", copy: true },
  "DJI_0333.jpg.jpeg": "aerial-farm-01.jpg",
  "DJI_0334.jpg.jpeg": "aerial-farm-02.jpg",
  "DJI_0335.jpg.jpeg": "aerial-farm-03.jpg",
  "DJI_0336.jpg.jpeg": "aerial-farm-04.jpg",
  "DJI_0337.jpg.jpeg": "aerial-farm-05.jpg",
  "DJI_20260129074525_0433_D.jpg.jpeg": "aerial-complex-01.jpg",
  "DJI_20260129074622_0435_D.jpg.jpeg": "aerial-complex-02.jpg",
  "DJI_20260129074644_0436_D.jpg.jpeg": "aerial-complex-03.jpg",
  "DJI_20260129074749_0438_D.jpg.jpeg": "aerial-complex-04.jpg",
  "DJI_20260129122005_0456_D.jpg.jpeg": "aerial-complex-05.jpg",
  "DJI_20260129140516_0466_D.jpg.jpeg": "aerial-complex-06.jpg",
  "DJI_20260129143410_0481_D.jpg.jpeg": "aerial-complex-07.jpg",
  "DJI_20260129143937_0487_D.jpg.jpeg": "aerial-complex-08.jpg",
  "vlcsnap-2026-08-09-11h58m10s524.jpg.jpeg": "farm-aerial-sheds.jpg",
  "vlcsnap-2026-08-09-12h02m32s702.jpg.jpeg": "farm-complex.jpg",
  "vlcsnap-2026-08-09-12h04m17s970.jpg.jpeg": "chicken-drinker.jpg",
  "vlcsnap-2026-08-09-12h08m57s136.jpg.jpeg": "chickens-feeding.jpg",
  "vlcsnap-2026-08-09-12h10m45s025.jpg.jpeg": "cage-rows.jpg",
  "vlcsnap-2026-08-09-12h13m46s287.jpg.jpeg": "feed-trough.jpg",
  "vlcsnap-2026-08-09-12h14m16s557.jpg.jpeg": "feed-bags-chicks.jpg",
  "vlcsnap-2026-08-09-12h14m42s877.jpg.jpeg": "waste-management.jpg",
  "vlcsnap-2026-08-09-12h58m20s222.jpg.jpeg": "healthy-birds-01.jpg",
  "vlcsnap-2026-08-09-12h58m31s102.jpg.jpeg": "healthy-birds-02.jpg",
};

fs.mkdirSync(imgOut, { recursive: true });
fs.mkdirSync(vidOut, { recursive: true });

const blurs = {};

for (const [srcName, dest] of Object.entries(images)) {
  const src = path.join(staging, srcName);
  if (!fs.existsSync(src)) {
    console.warn("Missing", srcName);
    continue;
  }

  if (typeof dest === "object" && dest.copy) {
    const out = path.join(imgOut, dest.name);
    fs.copyFileSync(src, out);
    console.log("copied", dest.name);
    continue;
  }

  const outName = dest;
  const outPath = path.join(imgOut, outName);
  await sharp(src)
    .rotate()
    .resize({ width: 1920, height: 1280, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toFile(outPath);

  const blurBuf = await sharp(src)
    .rotate()
    .resize({ width: 16 })
    .jpeg({ quality: 40 })
    .toBuffer();
  blurs[outName] = `data:image/jpeg;base64,${blurBuf.toString("base64")}`;

  const stat = fs.statSync(outPath);
  console.log(
    "optimized",
    outName,
    `${(stat.size / 1024).toFixed(0)} KB`,
  );
}

const blurFile = path.join(root, "src", "lib", "blur-data.ts");
fs.mkdirSync(path.dirname(blurFile), { recursive: true });
const blurContents = `export const blurData: Record<string, string> = ${JSON.stringify(blurs, null, 2)};\n`;
fs.writeFileSync(blurFile, blurContents);

const heroSrc = path.join(staging, "001.mov");
if (fs.existsSync(heroSrc)) {
  fs.copyFileSync(heroSrc, path.join(vidOut, "hero.mov"));
  console.log("copied hero.mov");
}

console.log("Done.");
