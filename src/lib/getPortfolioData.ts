import fs from 'fs';
import path from 'path';
import { Project } from '@/components/sections/Portfolio';

export function getPortfolioData(): Project[] {
  const portfolioDir = path.join(process.cwd(), 'public', 'portfolio');
  const projects: Project[] = [];
  
  if (!fs.existsSync(portfolioDir)) {
    return projects;
  }

  const categories = fs.readdirSync(portfolioDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .map(dirent => dirent.name);

  let idCounter = 1;

  for (const category of categories) {
    const categoryPath = path.join(portfolioDir, category);
    const contents = fs.readdirSync(categoryPath, { withFileTypes: true });

    for (const item of contents) {
      if (item.name.startsWith('.')) continue;

      const aspects = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[4/3]"];
      const aspect = aspects[idCounter % aspects.length];
      const isVideo = category.toLowerCase() === "films";

      if (item.isDirectory()) {
        const projectTitle = item.name;
        const projectPath = path.join(categoryPath, projectTitle);
        const files = fs.readdirSync(projectPath)
          .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
          .sort(); 

        if (files.length > 0) {
          const galleryImages = files.map(file => `/portfolio/${encodeURIComponent(category)}/${encodeURIComponent(projectTitle)}/${encodeURIComponent(file)}`);
          
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
      } else if (item.isFile() && /\.(jpg|jpeg|png|webp|gif)$/i.test(item.name)) {
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
