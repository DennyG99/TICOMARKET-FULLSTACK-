import React from "react";

const Footer = () => {
  const upDate = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <p className="mb-0">TICOMARKET. Copyright © {upDate}. All right reserved.</p>
    </footer>
  );
};

export default Footer;
