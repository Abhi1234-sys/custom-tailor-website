import React, { useState, useEffect } from "react";
import "./NoticeModal.css";

const NoticeModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={() => setShowModal(false)}>
          ×
        </button>
        <span className="badge">বিশেষ ঘোষণা</span>
        <h3>৬ মাসের সেলাই কোর্স!</h3>
        <p>এখন থেকে আমাদের এখানে অনলাইন ও অফলাইন উভয় মাধ্যমেই প্রফেশনাল সেলাই কোর্স করানো হচ্ছে। আজই যোগাযোগ করুন!</p>
        <button className="modal-btn" onClick={() => setShowModal(false)}>
          ঠিক আছে
        </button>
      </div>
    </div>
  );
};

export default NoticeModal;