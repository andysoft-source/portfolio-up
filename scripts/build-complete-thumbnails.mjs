// Builds 2x2 mosaic WebP thumbnails from numbered PNGs under src/Complete.
// Run: node scripts/build-complete-thumbnails.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const completeDir = path.join(root, "src", "Complete");
const outDir = path.join(root, "src", "assets", "projects");

const OUT_W = 960;
const OUT_H = 540;
const CELL_W = Math.floor(OUT_W / 2);
const CELL_H = Math.floor(OUT_H / 2);

const jobs = [
  {
    name: "complete-concontown-cover.webp",
    pngs: ["1.png", "2.png", "3.png", "English.png"],
    dir: path.join(completeDir, "Concontown"),
  },
  {
    name: "complete-cuping-cover.webp",
    pngs: ["1.png", "2.png", "3.png", "4.png"],
    dir: path.join(completeDir, "Cuping"),
  },
  {
    name: "complete-moonoh-cover.webp",
    pngs: ["1.png", "2.png", "3.png", "4.png"],
    dir: path.join(completeDir, "Moonoh"),
  },
  {
    name: "complete-autowini-cover.webp",
    pngs: ["1.png", "2.png", "3.png", "4.png"],
    dir: path.join(completeDir, "Autowini"),
  },
];

const positions = [
  { left: 0, top: 0 },
  { left: CELL_W, top: 0 },
  { left: 0, top: CELL_H },
  { left: CELL_W, top: CELL_H },
];

async function buildMosaic(job) {
  const composites = [];
  for (let i = 0; i < 4; i++) {
    const file = path.join(job.dir, job.pngs[i]);
    if (!fs.existsSync(file)) {
      console.warn(`Missing ${file}, skipping slot ${i}`);
      continue;
    }
    const buf = await sharp(file)
      .resize(CELL_W, CELL_H, { fit: "cover", position: "centre" })
      .toBuffer();
    composites.push({
      input: buf,
      ...positions[i],
    });
  }
  if (composites.length === 0) {
    throw new Error(`No images for ${job.name}`);
  }
  const outPath = path.join(outDir, job.name);
  await sharp({
    create: {
      width: OUT_W,
      height: OUT_H,
      channels: 3,
      background: { r: 17, g: 17, b: 24 },
    },
  })
    .composite(composites)
    .webp({ quality: 88 })
    .toFile(outPath);
  console.log("Wrote", outPath);
}

for (const job of jobs) {
  await buildMosaic(job);
}
