import { access } from "node:fs/promises";

const requiredFiles = [
  "public/index.html",
  "public/css/theme.css",
  "public/assets/avatar.jpg",
  "public/assets/CV_Luong_Duc_Phu_Full_stack_Developer.pdf",
];

await Promise.all(requiredFiles.map((file) => access(file)));

console.log("Static portfolio is ready in public/.");
