import path from 'path';

export default function(filePath: string) {
  return path.basename(filePath, '.stories.tsx');
}
