import { Share2 } from "lucide-react";
import { toast } from "react-toastify";
const NativeShareButton = ({ title, text }) => {
  const handleShare = async () => {
      const shareData = {
      title: title,
      text:text,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success('Content shared successfully');
      } catch (error) {
        toast.error('Error', error);
      }
    } else {
      alert('Web Share API not supported in this browser.');
    }

  };

  return (
    <button className="flex items-center gap-2 px-4 py-2 
                 bg-green-600 text-white font-medium 
                 rounded-2xl shadow-md
                 hover:bg-green-700 active:scale-95
                 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 
                 transition-all duration-200" onClick={handleShare}>
                     <Share2 size={18} /></button>
  );
};

export default NativeShareButton;