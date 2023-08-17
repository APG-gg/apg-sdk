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

import 'react-image-crop/dist/ReactCrop.css'
import { canvasPreview } from '../../utils/canvasPreview';
import { useDebounceEffect } from '../../utils/useDebounceEffect';

export interface UploadProps {
  endpoint: string;
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

const Upload: FC<UploadProps> = forwardRef<HTMLInputElement, UploadProps>(
  (
    { 
      endpoint, 
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
    const [imageToShow, setImageToShow] = useState<string | null>(image);
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [aspect] = useState<number | undefined>(1.875) 
    
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0] || null;

      if (selectedFile) {
        if (cropable) {
          fetchImage(selectedFile);
        } else {
          fetchImage(selectedFile);
        }
      }
    };

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
          <input type="file" ref={inputRef} onChange={handleFileChange} accept="image/*,video/*" className="hidden" />
          {imageToShow ? (
            <div className="relative group">
              <img src={imageToShow} alt="Upload" className="w-full h-full object-cover" />
              {editMode ? (
                <div className={classNames(
                  `absolute bg-opacity-75 items-center justify-center hidden group-hover:flex flex-col gap-1 ${bgClass}`,
                  {
                    'inset-0': shape === 'square' || shape === 'circle',
                  }
                )}>
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
      </div>
    );
  }
);

export default Upload;
