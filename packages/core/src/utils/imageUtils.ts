import { Area } from 'react-easy-crop';
import { ImageData } from '../domain/imageData.interface';

export const calculateCroppedAreaPixels = (image: HTMLImageElement, aspect: number): Area => {
  let croppedAreaPixels: Area = { x: 0, y: 0, width: 0, height: 0 };

  if (image.width > image.height * aspect) {
    // Imagen horizontal
    const aspectHeight = image.width / aspect;
    const centerY = image.height / 2;
    const width = image.height * aspect;
    const height = image.height;
    const positionX = aspectHeight / 2 - centerY;

    croppedAreaPixels = {
      width,
      height,
      x: positionX,
      y: 0,
    };
  } else {
    // Imagen vertical
    const aspectWidth = image.height * aspect;
    const centerX = image.width / 2;
    const width = image.width;
    const height = image.width / aspect;
    const positionY = aspectWidth / 2 - centerX;

    croppedAreaPixels = {
      width,
      height,
      x: 0,
      y: positionY,
    };
  }

  return croppedAreaPixels;
};

// Función para cargar imágenes y calcular croppedAreaPixels
export const loadImagesAndCalculateInitialCroppedAreaPixels = async (
  files: File[],
  aspect: number
): Promise<ImageData[]> => {
  const imageDataArray: ImageData[] = [];

  for (const file of files) {
    const image = new Image();
    const imageData: ImageData = {
      file,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect,
      croppedAreaPixels: null,
      croppedImage: null,
      source: ''
    };

    imageDataArray.push(imageData);

    await new Promise((resolve) => {
      image.onload = () => {
        const croppedAreaPixels = calculateCroppedAreaPixels(image, aspect);
        imageData.croppedAreaPixels = croppedAreaPixels;
        resolve(null);
      };

      image.src = URL.createObjectURL(file);
      imageData.source = image.src;
    });
  }

  return imageDataArray;
};

export const loadImagesAndCalculateCroppedAreaPixels = async (
  existingImages: ImageData[],
  newAspect: number
): Promise<ImageData[]> => {
  const updatedImages: ImageData[] = [];

  for (const imageData of existingImages) {
    const { file, crop, zoom } = imageData;

    const image = new Image();
    image.src = URL.createObjectURL(file);

    await new Promise((resolve) => {
      image.onload = () => {
        let newCrop: { x: number; y: number } = crop;
        let newCroppedAreaPixels: Area | null = null;

        newCroppedAreaPixels = calculateCroppedAreaPixels(image, newAspect);

        updatedImages.push({
          file,
          crop: newCrop,
          zoom,
          aspect: newAspect || 1,
          croppedAreaPixels: newCroppedAreaPixels,
          croppedImage: null,
          source: image.src
        });

        resolve(null);
      };
    });
  }

  return updatedImages;
};