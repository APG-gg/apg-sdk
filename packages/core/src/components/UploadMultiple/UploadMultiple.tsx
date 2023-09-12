import React, { useState, FC, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper, { Area } from 'react-easy-crop';
import Button from '../Button';
import { loadImagesAndCalculateCroppedAreaPixels, loadImagesAndCalculateInitialCroppedAreaPixels } from '../../utils/imageUtils';
import { ImageData } from '../../domain/imageData.interface';
import AspectRatioIcon from '@apg.gg/icons/lib/AspectRatioIcon';
import Tooltip from '../Tooltip';
import FloatingMenu, { Directions } from '../FloatingMenu';
import MainButton from '../FloatingMenu/MainButton';
import ChildButton from '../FloatingMenu/ChildButton';
import XIcon from '@apg.gg/icons/lib/XIcon';
import CropSquareIcon from '@apg.gg/icons/lib/CropSquareIcon';
import CropLandscapeIcon from '@apg.gg/icons/lib/CropLandscapeIcon';
import CropPortraitIcon from '@apg.gg/icons/lib/CropPortraitIcon';
import PlusIcon from '@apg.gg/icons/lib/PlusIcon';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import StrictModeDroppable from '../StrictModeDroppable';
import ChildContent from '../FloatingMenu/ChildContent';
import ImagesIcon from '@apg.gg/icons/lib/ImagesIcon';
import classNames from 'classnames';

export interface UploadMultipleProps {
  images: ImageData[];
  maxImages: number;
  dragAndDropText?: string;
  buttonSelectText?: string;
  changeAspectRatioText?: string;
  viewGalleryText?: string;
  wrapperClassName?: string;
  cropperClassName?: string;
  onError: (message: string) => void;
  onChange: (croppedImages: ImageData[]) => void;
}

const UploadMultiple: FC<UploadMultipleProps> = ({
  images: initialImages = [],
  maxImages = 10,
  dragAndDropText = `Drag photos and videos here (max ${maxImages} images).`,
  buttonSelectText = 'Select from computer',
  changeAspectRatioText = 'Change aspect ratio',
  viewGalleryText = 'View gallery',
  wrapperClassName = 'h-[400px]',
  cropperClassName = 'h-[400px]',
  onError,
  onChange
}) => {
  const [images, setImages] = useState<ImageData[]>(initialImages);
  const [selectedAspect, setSelectedAspect] = useState<number>(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isGalleryOpen) {
      setIsGalleryOpen(false);
    }
  };
  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const onDrop = (acceptedFiles: File[]) => {
    if ((acceptedFiles.length + images.length) <= maxImages) {
      loadImagesAndCalculateInitialCroppedAreaPixels(acceptedFiles, selectedAspect || 1).then((newImagesData) => {
        setImages((prevImages) => [...prevImages, ...newImagesData]);
        setContainerWidth(((acceptedFiles.length + images.length) * 64) + ((acceptedFiles.length + images.length) * 8))
        setSelectedImageIndex(0);
      });
    } else {
      onError(`Solo puedes cargar hasta ${maxImages} imágenes.`);
    }
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
      'image/gif': ['.gif'],
    },
    noClick: true,
  });

  const handleAspectChange = (aspect: number) => {
    setSelectedAspect(aspect);
    loadImagesAndCalculateCroppedAreaPixels(images, aspect || 1).then((newImagesData) => {
      setImages(newImagesData);
    });
  };

  const handleCropChange = (index: number, crop: { x: number; y: number }) => {
    const updatedImages = [...images];
    updatedImages[index].crop = crop;
    setImages(updatedImages);
  };

  const handleZoomChange = (index: number, zoom: number) => {
    const updatedImages = [...images];
    updatedImages[index].zoom = zoom;
    setImages(updatedImages);
  };

  const handleCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area, index: number) => {
    if (images.length > 0 && selectedImageIndex !== null) {
      const updatedImages = [...images];
      updatedImages[index as number].croppedAreaPixels = croppedAreaPixels;
      setImages(updatedImages);
      onChange(updatedImages)
    }
  }, [images])

  const handleClearImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setSelectedImageIndex(0);
    setImages(updatedImages);
    onChange(updatedImages);
    setContainerWidth((updatedImages.length * 64) + ((updatedImages.length) * 8))
  };

  // const handleCompleteCropStep = async () => {
  //   // Genera las imágenes recortadas para todas las imágenes cargadas
  //   const croppedImageUrls: string[] = [];

  //   for (const image of images) {
  //     if (image.croppedAreaPixels) {
  //       try {
  //         const imageUrl = URL.createObjectURL(image.file); // Obtiene la URL de la imagen
  //         const croppedImage = await getCroppedImg(imageUrl, image.croppedAreaPixels);
  //         croppedImageUrls.push(croppedImage);
  //         URL.revokeObjectURL(imageUrl); // Libera la URL de la imagen
  //       } catch (error) {
  //         console.error('Error al obtener la imagen recortada:', error);
  //       }
  //     }
  //   }

  //   // Actualiza el estado con las imágenes recortadas
  //   setCroppedImages(croppedImageUrls);
  // };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const onDragEnd = async (result: any) => {
    if (!result.destination) {
      return;
    }

    const reorderedImages = Array.from(images);
    const [removed] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, removed);

    setImages(reorderedImages);
  };

  return (
    <div className={classNames(
      "flex w-full max-h-[30rem] max-w-6xl bg-black-800",
      wrapperClassName
    )}>
      {images.length > 0 ? (
        <div className="flex flex-col w-full gap-4">
          <div className="w-full relative">
            {images.map((image, index) => (
              <div key={index}>
                {/* Renderiza el Cropper solo cuando la imagen es visible */}
                {selectedImageIndex === index && (
                  <div className={classNames(
                    "flex flex-col items-center relative",
                    cropperClassName
                  )}>
                    <Cropper
                      image={image.source}
                      crop={image.crop}
                      zoom={image.zoom}
                      aspect={selectedAspect || 1}
                      onCropChange={(crop) => handleCropChange(index, crop)}
                      onZoomChange={(zoom) => handleZoomChange(index, zoom)}
                      onCropComplete={(croppedArea, croppedAreaPixels) => handleCropComplete(croppedArea, croppedAreaPixels, index)}
                    />
                  </div>
                )}
              </div>
            ))}
            <div className="absolute bottom-2 left-2 z-10">
              <FloatingMenu
                isOpen={isOpen}
                slideSpeed={100}
                direction={Directions.Up}
                index={0}
              >
                <Tooltip text={changeAspectRatioText} placement="right">
                  <MainButton
                    iconResting={<AspectRatioIcon className=" text-white" />}
                    iconActive={<XIcon className=" text-white-100" />}
                    isOpen={isOpen}
                    background="bg-blue-500"
                    onClick={toggleMenu}
                  />
                </Tooltip>
                <Tooltip text="16:9" placement="right">
                  <ChildButton
                    direction={Directions.Up}
                    index={1}
                    isOpen={isOpen}
                    icon={<CropLandscapeIcon className="text-white" />}
                    background="bg-black-800"
                    onClick={() => handleAspectChange(16 / 9)}
                  />
                </Tooltip>
                <Tooltip text="4:5" placement="right">
                  <ChildButton
                    direction={Directions.Up}
                    index={2}
                    isOpen={isOpen}
                    icon={<CropPortraitIcon className="text-white" />}
                    background="bg-black-800"
                    onClick={() => handleAspectChange(4 / 5)}
                  />
                </Tooltip>
                <Tooltip text="1:1" placement="right">
                  <ChildButton
                    direction={Directions.Up}
                    index={3}
                    isOpen={isOpen}
                    icon={<CropSquareIcon className="text-white" />}
                    background="bg-black-800"
                    onClick={() => handleAspectChange(1)}
                  />
                </Tooltip>
              </FloatingMenu>
            </div>
            <div className="absolute bottom-2 right-2">
              <FloatingMenu
                isOpen={isGalleryOpen}
                slideSpeed={500}
                direction={Directions.UpRight}
                index={0}
              >
                <Tooltip text={viewGalleryText} placement="left">
                  <MainButton
                    iconResting={<ImagesIcon className=" text-white" />}
                    iconActive={<XIcon className=" text-white-100" />}
                    isOpen={isGalleryOpen}
                    background="bg-blue-500"
                    onClick={toggleGallery}
                  />
                </Tooltip>
                <ChildContent
                  direction={Directions.UpRight}
                  index={1}
                  isOpen={isGalleryOpen}
                  content={
                    <div className="flex flex-wrap">
                      <DragDropContext onDragEnd={onDragEnd}>
                        <StrictModeDroppable droppableId="socials-droppable" direction="horizontal">
                          {(provided) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              className="flex flex-wrap"
                              style={{ width: containerWidth }}
                            >
                              {images.map((image, index) => (
                                <Draggable key={index + 1} draggableId={(index + 1).toString()} index={index}>
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className={`relative group mr-2 ${selectedImageIndex === index ? 'border-blue-500' : 'border-black-800'
                                        }`}
                                    >
                                      <div
                                        className={`border w-16 h-16 overflow-hidden ${selectedImageIndex === index ? 'border-blue-500' : 'border-black-800'
                                          }`}
                                        onClick={() => handleThumbnailClick(index)}
                                      >
                                        <img src={image.source} alt="Thumbnail" className="w-16 h-16 object-cover" />
                                      </div>
                                      <XIcon
                                        className="absolute text-white text-lg top-1 right-1 z-50 bg-black-900 p-1 opacity-50 group-hover:opacity-100 rounded-full cursor-pointer"
                                        role="button"
                                        area-label="Remove image"
                                        onClick={() => handleClearImage(index)}
                                      />
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                            </div>
                          )}
                        </StrictModeDroppable>
                      </DragDropContext>
                      {images.length < maxImages ? (
                        <div {...getRootProps()}
                          className="flex items-center justify-center border overflow-hidden w-16 h-16 rounded-full border-black-800 bg-black cursor-pointer"
                          onClick={open}
                        >
                          <input {...getInputProps()} />
                          <PlusIcon type="outline" className="text-4xl text-white" />
                        </div>
                      ) : null}
                    </div>
                  }
                  background="bg-black-800"
                />

              </FloatingMenu>
            </div>
          </div>
        </div>
      ) : (
        <div {...getRootProps()} className="border-2 border-black-700 border-dashed rounded-lg gap-4 p-2 flex flex-col items-center justify-center w-full h-full">
          <input {...getInputProps()} />
          <p className="text-white">
            {dragAndDropText}
          </p>
          <Button onClick={open} type="primary">
            {buttonSelectText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadMultiple;
