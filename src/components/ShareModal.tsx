import React from "react";
import { Modal, Button } from "antd";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, WhatsappIcon, LinkedinIcon, TwitterIcon } from "react-share";

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
  url: string;
  title: string;
  imageUrl: string;
  detailData: any;
}

const ShareModal: React.FC<ShareModalProps> = ({
  visible,
  onClose,
  url,
  title,
  imageUrl,
  detailData,
}) => {
  const handleShareClick = () => {
    sessionStorage.setItem("sharedDetailData", JSON.stringify(detailData));

    console.log("clicked url", url);
  };
  return (
    <Modal
      title="Share This Page"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <div className="flex justify-center space-x-4">
        <FacebookShareButton
          url={url}
          hashtag="#paradise_guide"
          onClick={handleShareClick}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={url} title={title} onClick={handleShareClick}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton
          url={url}
          title={title}
          source={imageUrl}
          onClick={handleShareClick}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <TwitterShareButton
        url={url}
        title={title}
        hashtags={['paradise_guide']} 
        onClick={handleShareClick}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      </div>
    </Modal>
  );
};

export default ShareModal;
