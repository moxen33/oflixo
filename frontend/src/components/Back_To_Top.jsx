import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Back_To_Top = () => {
    const backToTopRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = document.documentElement.scrollTop;
      setShow(scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div
        id="back-to-top"
         className={`back-to-top animate__animated ${
        show ? 'animate__fadeIn' : 'animate__fadeOut'
      }`}
      >
        <Link
          className="p-0 btn bg-primary btn-sm position-fixed top border-0 rounded-circle text-white"
          id="top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to=""
        >
          <i className="ph ph-caret-up fw-bold"></i>
        </Link>
      </div>
    </>
  );
};

export default Back_To_Top;
