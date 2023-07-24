import PlusIcon from '@apg.gg/icons/lib/PlusIcon';
import classNames from 'classnames';
import React, { FC, forwardRef, useRef, useState } from 'react';

export interface UploadProps {
  endpoint: string;
  onSuccess: (response: ApiResponse) => void;
  onError?: (error: any) => void;
  shape?: 'square' | 'circle';
  authToken?: string;
  title?: string;
  textSize?: 8 | 12 | 16 | 20 | 24;
  icon?: React.ReactNode;
  image?: string;
  width?: number;
  height?: number;
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
      shape = 'square', 
      title = 'Upload', 
      textSize = 24,
      authToken, 
      icon = <PlusIcon className="text-white text-4xl" />,
      image = null,
      width = 200,
      height = 200,
      bgClass = 'bg-black-900'
    }, 
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [imageToShow, setImageToShow] = useState<string | null>(image);
    
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0] || null;

      if (selectedFile) {
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
    };

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
              `flex flex-col items-center justify-center cursor-pointer overflow-hidden ${bgClass}`,
              shape === 'square' && "rounded-xl",
              shape === 'circle' && "rounded-full"
            )
          } 
          onClick={handleIconClick}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <input type="file" ref={inputRef} onChange={handleFileChange} accept="image/*,video/*" className="hidden" />
          {imageToShow ? (
            <div className="relative group">
              <img src={imageToShow} alt="Upload" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-opacity-50 items-center justify-center hidden group-hover:flex flex-col ${bgClass}`}>
                <div className="flex items-center justify-center rounded-full bg-blue p-2">
                  {icon}
                </div>
                <h1 
                  className="text-white font-poppins font-bold uppercase text-center px-4"
                  style={{
                    fontSize: `${textSize}px`,
                  }}
                >
                  Change {title}
                </h1>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center rounded-full bg-blue p-2">
                {icon}
              </div>
              <h1 
                className="text-white font-poppins font-bold uppercase text-center px-4"
                style={{
                  fontSize: `${textSize}px`,
                }}
              >
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
