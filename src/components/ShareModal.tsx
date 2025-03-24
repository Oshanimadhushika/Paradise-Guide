import React, { useState } from "react";
import { Button, Input, message, Modal, Typography } from "antd";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

import { CopyOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ShareModal = ({ visible, onClose, detailData }: any) => {
  if (!visible || !detailData) return null;

  const url = `https://paradiseguide.netlify.app/place/${detailData?.location_code}`;
  const title = detailData?.location_name || "Paradise Guide";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    message.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      title="Share This Place"
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      className="rounded-lg"
    >
      <div className="text-center">
        <Title level={4}>{detailData?.location_name}</Title>

        <div className="mb-4 flex items-center justify-center gap-2 bg-gray-100 p-2 rounded-md">
          <Input value={url} readOnly className="w-full text-center" />
          <Button
            type="primary"
            icon={<CopyOutlined />}
            onClick={handleCopy}
            className="flex items-center"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <FacebookShareButton url={url} title={title}>
            <FacebookIcon size={50} round />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={50} round />
          </TwitterShareButton>

          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={50} round />
          </WhatsappShareButton>

          <LinkedinShareButton url={url} title={title}>
            <LinkedinIcon size={50} round />
          </LinkedinShareButton>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
