import PlusIcon from '@apg.gg/icons/lib/PlusIcon';
import classNames from 'classnames';
import React, { FC, forwardRef, useRef, useState } from 'react';
import EditIcon from '@apg.gg/icons/lib/EditIcon';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop
} from 'react-image-crop'

import { canvasPreview } from '../../utils/canvasPreview';
import { useDebounceEffect } from '../../utils/useDebounceEffect';
import Drawer from '../Drawer';
import Button from '../Button';
import { base64ToFile } from '../../utils/base64ToFile';

export interface UploadProps {
  endpoint: string;
  aspectRatio: number;
  onSuccess: (response: ApiResponse) => void;
  onError?: (error: any) => void;
  editMode?: boolean;
  cropable?: boolean;
  shape?: 'square' | 'circle' | 'banner';
  authToken?: string;
  title?: string;
  iconAdd?: React.ReactNode;
  iconEdit?: React.ReactNode;
  image?: string;
  width?: number | string;
  height?: number | string;
  bgClass?: string;
}

export interface ApiResponse {
  url: string;
  message: string;
}

const centerAspectCrop = (
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) => {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

const getBase64 = (img: File, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result?.toString() || ''));
  reader.readAsDataURL(img);
};

const Upload: FC<UploadProps> = forwardRef<HTMLInputElement, UploadProps>(
  (
    { 
      endpoint, 
      aspectRatio = 1,
      onSuccess, 
      onError, 
      editMode = true,
      cropable = false,
      shape = 'square', 
      title, 
      authToken, 
      iconAdd = <PlusIcon className="text-white text-lg" />,
      iconEdit = <EditIcon className="text-white text-lg" />,
      image = null,
      width = 200,
      height = 200,
      bgClass = 'bg-black'
    }, 
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const [imgSrc, setImgSrc] = useState('')
    const [cropedFile, setFile] = useState<File>();
    const [imageToShow, setImageToShow] = useState<string | null>(image);
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [aspect] = useState<number | undefined>(aspectRatio) 
    const [showModal, setShowModal] = useState(false)
    
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0] || null;

      if (selectedFile) {
        fetchImage(selectedFile);
      }
    };

    const handleCropChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0] || null;
      setFile(selectedFile as File);
      getBase64(selectedFile as File, (url) => {
        setImgSrc(url);
        setShowModal(true)
      });
    }

    const submitCropedImage = () => {
      if (cropedFile) {
        const base64Image = previewCanvasRef.current?.toDataURL('image/jpeg');
        const file = base64Image && base64ToFile(base64Image, cropedFile.name)
        console.log(file);
        fetchImage(file as File);
        setShowModal(false);
      }
    }

    const fetchImage = async (selectedFile: File) => {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile, selectedFile.name);

        const requestOptions = {
          method: 'POST',
          body: formData,
          headers: {
            ...(authToken ? { 'Authorization': `Bearer ${authToken}` } : {})
          }
        };

        const response = await fetch(endpoint, requestOptions);

        const data: ApiResponse = await response.json();
        setImageToShow(data.url);
        onSuccess(data);
      } catch (error) {
        onError?.(error);
      }
    }

    const handleIconClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (aspect) {
        const { width, height } = e.currentTarget
        setCrop(centerAspectCrop(width, height, aspect))
      }
    }

    useDebounceEffect(
      async () => {
        if (
          completedCrop?.width &&
          completedCrop?.height &&
          imgRef.current &&
          previewCanvasRef.current
        ) {
          // We use canvasPreview as it's much faster than imgPreview.
          canvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            completedCrop,
            1,
            0,
          )
        }
      },
      100,
      [completedCrop],
    )

    return (
      <div>
        <div 
          className={
            classNames(
              `flex flex-col cursor-pointer overflow-hidden items-center justify-center ${bgClass}`,
              shape === 'square' && "rounded-xl",
              shape === 'banner' && "rounded-none !w-full",
              shape === 'circle' && "rounded-full"
            )
          } 
          onClick={handleIconClick}
          style={{
            width: width,
            height: height,
          }}
        >
          <input 
            type="file" 
            ref={inputRef} 
            onChange={(event) => {
              if (cropable) {
                handleCropChange(event)
              } else {
                handleFileChange(event)
              }
            }} 
            accept="image/*,video/*" 
            className="hidden"
          />
          {imageToShow ? (
            <div className="relative group">
              <img src={imageToShow} alt="Upload" className="w-full h-full object-cover" height={height} />
              {editMode ? (
                <div className={`absolute inset-0 !bg-opacity-[0.75] items-center justify-center hidden group-hover:flex flex-col gap-1 ${bgClass}`}>
                  <div className="flex items-center justify-center rounded-full bg-blue p-2">
                    {iconEdit}
                  </div>
                  <h1 className="text-white font-poppins font-bold text-center px-4 text-sm">
                    Choose photo
                  </h1>
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center rounded-full bg-blue p-2 mb-1">
                {iconAdd}
              </div>
              <h1 className="text-white font-poppins font-bold text-center px-4 text-sm">
                {title}
              </h1>
            </>
          )}
        </div>

        {cropable && showModal ? (
          <Drawer
            header="Crop Image"
            footer={
              <div className="flex justify-end gap-2">
                <Button className="w-24" type="outline" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button className="w-40" onClick={() => submitCropedImage()}>
                  Crop
                </Button>
              </div>
            }
            isOpen={showModal}
            disableClickOutsideToClose={false}
            onClose={() => setShowModal(false)}
            content={
              <div className="flex justify-center">
                <ReactCrop
                  crop={crop}
                  onChange={(_: any, percentCrop: any) => setCrop(percentCrop)}
                  onComplete={(c: any) => setCompletedCrop(c)}
                  aspect={aspect}
                  className={
                    classNames(
                      'mx-auto',
                      {
                        'w-full max-h-none': shape === 'banner',
                        'w-64 max-h-none': shape === 'square' || shape === 'circle'
                      }
                    )
                  }
                >
                  <img
                    ref={imgRef}
                    alt="Crop me"
                    src={imgSrc}
                    onLoad={onImageLoad}
                    className="max-h-52 w-full"
                  />
                </ReactCrop>

                <div className="hidden">
                  {!!completedCrop && (
                    <canvas
                      ref={previewCanvasRef}
                      style={{
                        border: '1px solid black',
                        objectFit: 'contain',
                        width: completedCrop.width,
                        height: completedCrop.height,
                      }}
                    />
                  )}
                </div>
              </div>
            }
          />
        ) : null}
      </div>
    );
  }
);

export default Upload;
