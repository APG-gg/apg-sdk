import PlusIcon from '@apg.gg/icons/lib/PlusIcon';
import classNames from 'classnames';
import React, { FC, forwardRef, useEffect, useRef, useState } from 'react';
import EditIcon from '@apg.gg/icons/lib/EditIcon';
import AvatarEditor from 'react-avatar-editor';
import Drawer from '../Drawer';
import Button from '../Button';
import { base64ToFile } from '../../utils/base64ToFile';
import PulseRingIcon from '@apg.gg/icons/lib/PulseRingIcon';

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
  editText?: string;
  uploadingText?: string;
  iconAdd?: React.ReactNode;
  iconEdit?: React.ReactNode;
  iconUploading?: React.ReactNode;
  image?: string;
  width?: number;
  height?: number;
  bgClass?: string;
  isLoading?: boolean;
  circularCrop?: boolean;
}

export interface ApiResponse {
  url: string;
  message: string;
}

const MAX_WIDTH = 510;

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
      editText = 'Choose photo',
      uploadingText = 'Uploading...',
      authToken, 
      iconAdd = <PlusIcon className="text-white text-lg" />,
      iconEdit = <EditIcon className="text-white text-lg" />,
      iconUploading = <PulseRingIcon className="text-white text-lg" />,
      image = null,
      width = 200,
      height = 200,
      bgClass = 'bg-black',
      isLoading = false,
      circularCrop = false
    }, 
    ref
  ) => {
    const editor = useRef<AvatarEditor | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [imgSrc, setImgSrc] = useState('');
    const [cropedFile, setFile] = useState<File>();
    const [imageToShow, setImageToShow] = useState<string | null>(image);
    const [showModal, setShowModal] = useState(false);
    const [isUploading, setIsUploading] = useState(isLoading);
    const [scale, setScale] = useState(1);
    
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
        const canvas = editor.current?.getImageScaledToCanvas();
        const dataURL = canvas?.toDataURL(cropedFile.type);
        const file = dataURL && base64ToFile(dataURL, cropedFile.name)
        fetchImage(file as File);
        setShowModal(false);
      }
    }

    const fetchImage = async (selectedFile: File) => {
      setIsUploading(true);

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
        setIsUploading(false);
        onSuccess(data);
      } catch (error) {
        setIsUploading(false);
        onError?.(error);
      } finally {
        setScale(1);
        setFile(undefined);
        setImgSrc('');
      }
    }

    const handleIconClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    const handleWheel = (e: React.WheelEvent) => {
      const minScale = 1;
      const maxScale = 2;
  
      const deltaY = e.deltaY;

      if (deltaY > 0) {
        const newScale = scale - 0.1;
        if (newScale >= minScale) {
          setScale(newScale);
        }
      } else if (deltaY < 0) {
        const newScale = scale + 0.1;
        if (newScale <= maxScale) {
          setScale(newScale);
        }
      }
    };

    useEffect(() => {
      setIsUploading(isLoading);
    }, [isLoading])

    return (
      <div>
        <div 
          className={
            classNames(
              `flex flex-col cursor-pointer overflow-hidden items-center justify-center ${bgClass}`,
              shape === 'square' && "rounded-xl",
              shape === 'banner' && "rounded-none",
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
            <div 
              className="relative group"
              style={{
                width: width,
                height: height,
              }}
            >
              <img src={imageToShow} alt="Upload" className="w-full h-full object-cover" height={height} />
              {editMode && !isUploading ? (
                <div className={`absolute inset-0 !bg-opacity-[0.75] items-center justify-center hidden group-hover:flex flex-col gap-1 ${bgClass}`}>
                  <div className="flex items-center justify-center rounded-full bg-blue p-2">
                    {iconEdit}
                  </div>
                  <h1 className="text-white font-poppins font-bold text-center px-4 text-sm">
                    {editText}
                  </h1>
                </div>
              ) : null}
              {editMode && isUploading ? (
                <div className={`absolute inset-0 !bg-opacity-[0.75] items-center justify-center flex flex-col gap-1 ${bgClass}`}>
                  <div className="flex items-center justify-center rounded-full bg-blue p-2">
                    {iconUploading}
                  </div>
                  <h1 className="text-white font-poppins font-bold text-center px-4 text-sm">
                    {uploadingText}
                  </h1>
                </div>
              ) : null}
            </div>
          ) : (
            <>
              {isUploading ? (
                <>
                  <div className="flex items-center justify-center rounded-full bg-blue p-2">
                    {iconUploading}
                  </div>
                  <h1 className="text-white font-poppins font-bold text-center px-4 text-sm">
                    {uploadingText}
                  </h1>
                </>
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
              <div 
                className="flex justify-center flex-1 items-center min-h-[200px]"
                onWheel={handleWheel}
              >
                <AvatarEditor
                  ref={editor}
                  image={imgSrc}
                  width={
                    shape == 'banner' ? MAX_WIDTH : width === 200 ? 500 : width}
                  height={shape == 'banner' ? MAX_WIDTH/aspectRatio : height === 200 ? 500/aspectRatio : height}
                  border={0}
                  color={[0, 0, 0, 0.7]}
                  scale={scale}
                  rotate={0}
                  borderRadius={circularCrop ? 999 : 0}
                  className={classNames(
                    shape !== 'banner' && "!w-full !h-auto",
                  )}
                />
              </div>
            }
          />
        ) : null}
      </div>
    );
  }
);

export default Upload;
