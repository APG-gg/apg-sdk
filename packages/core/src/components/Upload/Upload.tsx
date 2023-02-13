import React, { FC, useEffect, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload as AntdUpload } from 'antd';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

const beforeUpload = (file: File) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    // TODO
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    // TODO
  }
  return isJpgOrPng && isLt2M;
}

const UploadWrapper = styled(AntdUpload)`
  .ant-upload-select {
    margin-bottom: 1rem;
    margin-right: 0;
  }
`

interface UploadInterface {
  apiUrl: string,
  logo: string,
  onComplete: (imageUrl: string) => void
}

const Upload: FC<UploadInterface> = ({ apiUrl, logo, onComplete }: UploadInterface) => {
  const [cookies] = useCookies();
  const [loading, setLoading] = useState(false);
  const [teamLogo, setTeamLogo] = useState('');

  useEffect(() => {
    setTeamLogo(logo);
  }, [setTeamLogo, logo])

  const handleChange = () => {
    setLoading(true)
  };

  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file } = options;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("removeImageURL", teamLogo);

    const headers = {
      Authorization: `${cookies.APGTOKEN}`,
    };

    try {
      const response = await fetch(`${apiUrl}/tools/upload`, {
        method: 'POST',
        headers,
        body: formData
      });

      const result = await response.json();

      onSuccess("Ok");
      onComplete(result);
      setTeamLogo(result);
      setLoading(false);
    } catch (err) {
      onError({ err });
    }
  };
  
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <UploadWrapper
      name="team2-logo"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      customRequest={uploadImage}
    >
      {teamLogo ? <img src={teamLogo} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </UploadWrapper>
  )
}

export default Upload;