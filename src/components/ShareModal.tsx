// import React from "react";
// import { Modal, Button } from "antd";
// import {
//   FacebookShareButton,
//   WhatsappShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
// } from "react-share";
// import { FacebookIcon, WhatsappIcon, LinkedinIcon, TwitterIcon } from "react-share";

// interface ShareModalProps {
//   visible: boolean;
//   onClose: () => void;
//   url: string;
//   title: string;
//   imageUrl: string;
//   detailData: any;
// }

// const ShareModal: React.FC<ShareModalProps> = ({
//   visible,
//   onClose,
//   url,
//   title,
//   imageUrl,
//   detailData,
// }) => {
//   const handleShareClick = () => {
//     sessionStorage.setItem("sharedDetailData", JSON.stringify(detailData));

//     console.log("clicked url", url);
//   };
//   return (
//     <Modal
//       title="Share This Page"
//       open={visible}
//       onCancel={onClose}
//       footer={[
//         <Button key="cancel" onClick={onClose}>
//           Close
//         </Button>,
//       ]}
//     >
//       <div className="flex justify-center space-x-4">
//         <FacebookShareButton
//           url={url}
//           hashtag="#paradise_guide"
//           onClick={handleShareClick}
//         >
//           <FacebookIcon size={32} round />
//         </FacebookShareButton>
//         <WhatsappShareButton url={url} title={title} onClick={handleShareClick}>
//           <WhatsappIcon size={32} round />
//         </WhatsappShareButton>
//         <LinkedinShareButton
//           url={url}
//           title={title}
//           source={imageUrl}
//           onClick={handleShareClick}
//         >
//           <LinkedinIcon size={32} round />
//         </LinkedinShareButton>

//         <TwitterShareButton
//         url={url}
//         title={title}
//         hashtags={['paradise_guide']} 
//         onClick={handleShareClick}
//       >
//         <TwitterIcon size={32} round />
//       </TwitterShareButton>
//       </div>
//     </Modal>
//   );
// };

// export default ShareModal;




import React from "react";
import { Modal, Button } from "antd";
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
  const handleShare = (platform: string) => {
    const shareData = {
      title,
      url,
      imageUrl,
      description: detailData?.description,
    };

    if (platform === "facebook") {
      // Facebook Share URL including image as thumbnail
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&picture=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(detailData?.description)}`,
        "_blank"
      );
    } else if (platform === "twitter") {
      // Twitter Share URL including image
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=paradise_guide`,
        "_blank"
      );
    } else if (platform === "whatsapp") {
      // WhatsApp Share URL
      window.open(
        `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
        "_blank"
      );
    } else if (platform === "linkedin") {
      // LinkedIn Share URL including image as thumbnail
      window.open(
        `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(detailData?.description)}&source=${encodeURIComponent(imageUrl)}`,
        "_blank"
      );
    }
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
        <div onClick={() => handleShare("facebook")}>
          <FacebookIcon size={32} round />
        </div>
        <div onClick={() => handleShare("whatsapp")}>
          <WhatsappIcon size={32} round />
        </div>
        <div onClick={() => handleShare("linkedin")}>
          <LinkedinIcon size={32} round />
        </div>
        <div onClick={() => handleShare("twitter")}>
          <TwitterIcon size={32} round />
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
