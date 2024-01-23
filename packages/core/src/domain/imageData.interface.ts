import { Area } from "react-easy-crop";

export interface ImageData {
  file: File;
  crop: { x: number; y: number };
  zoom: number;
  aspect: number;
  croppedAreaPixels: Area | null;
  croppedImage: string | null;
  source: string;
}