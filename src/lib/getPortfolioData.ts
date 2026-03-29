import fs from 'fs';
import path from 'path';
import { Project } from '@/components/sections/Portfolio';

// Images in the root of public/portfolio that are NOT gallery projects
const RESERVED_FILES = ['atanu.jpg', 'atanu.jpeg', 'hero.jpg', 'hero.jpeg'];

export function getPortfolioData(): Project[] {
  const portfolioDir = path.join(process.cwd(), 'public', 'portfolio');
  const projects: Project[] = [];
  
  if (!fs.existsSync(portfolioDir)) {
    return projects;
  }

  // Only read top-level directories as categories — skip loose files
  const categories = fs.readdirSync(portfolioDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dirent => dirent.name);

  let idCounter = 1;

  for (const category of categories) {
    const categoryPath = path.join(portfolioDir, category);
    const contents = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(item => !item.name.startsWith('.'));

    for (const item of contents) {
      const aspects = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[4/3]"];
      const aspect = aspects[idCounter % aspects.length];
      const isVideo = category.toLowerCase() === "films";

      if (item.isDirectory()) {
        // Each subfolder = one project with a full gallery
        const projectTitle = item.name;
        const projectPath = path.join(categoryPath, projectTitle);
        const files = fs.readdirSync(projectPath)
          .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
          .filter(file => !file.startsWith('.'))
          .sort();

        if (files.length > 0) {
          const galleryImages = files.map(file =>
            `/portfolio/${encodeURIComponent(category)}/${encodeURIComponent(projectTitle)}/${encodeURIComponent(file)}`
          );
          projects.push({
            id: `local-${idCounter}`,
            category,
            title: projectTitle,
            coverImage: galleryImages[0],
            galleryImages,
            aspect,
            isVideo
          });
          idCounter++;
        }
      } else if (
        item.isFile() &&
        /\.(jpg|jpeg|png|webp|gif)$/i.test(item.name) &&
        !RESERVED_FILES.includes(item.name.toLowerCase())
      ) {
        // Loose image directly in a category folder = single-image project
        const projectTitle = path.parse(item.name).name;
        const imageUrl = `/portfolio/${encodeURIComponent(category)}/${encodeURIComponent(item.name)}`;
        projects.push({
          id: `local-${idCounter}`,
          category,
          title: projectTitle,
          coverImage: imageUrl,
          galleryImages: [imageUrl],
          aspect,
          isVideo
        });
        idCounter++;
      }
    }
  }

  return projects;
}
