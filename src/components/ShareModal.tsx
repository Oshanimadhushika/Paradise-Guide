import React from "react";
import { Modal, Typography } from "antd";
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

const { Title } = Typography;

const ShareModal = ({ visible, onClose, detailData }: any) => {
  if (!visible || !detailData) return null;

  const url = `https://paradiseguide.netlify.app/place/${detailData?.location_code}`;
  const title = detailData?.location_name || "Paradise Guide";

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
