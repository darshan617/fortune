"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./CustomPopup.module.css";
import { IoMdClose } from "react-icons/io";

const TRANSITION_MS = 250; // keep in sync with the CSS transition duration

const CustomPopup = ({
  isOpen = true,
  onclose,
  onClose,
  children,
  wide = false,
  closeIcon = true,
  maxWidth,
}) => {
  const handleClose = onclose || onClose || (() => {});

  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false); // in the DOM
  const [visible, setVisible] = useState(false); // drives the CSS transition

  useEffect(() => {
    setMounted(true);
  }, []);

  // Enter / exit transition
  useEffect(() => {
    if (!mounted) return undefined;

    if (isOpen) {
      setShouldRender(true);
      // wait two frames so the "hidden" state paints before animating in
      let raf2;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setVisible(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }

    setVisible(false);
    const t = setTimeout(() => setShouldRender(false), TRANSITION_MS);
    return () => clearTimeout(t);
  }, [mounted, isOpen]);

  // Lock page scroll while in the DOM (no position: fixed => no jump)
  useEffect(() => {
    if (!shouldRender) return undefined;

    const body = document.body;
    const html = document.documentElement;
    const prev = {
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
      htmlOverflow: html.style.overflow,
    };

    const scrollbarWidth = window.innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    window.lenis?.stop?.();

    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.paddingRight = prev.bodyPaddingRight;
      window.lenis?.start?.();
    };
  }, [shouldRender]);

  // Close on Escape
  useEffect(() => {
    if (!mounted || !isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mounted, isOpen, handleClose]);

  if (!mounted || !shouldRender) return null;

  return createPortal(
    <div
      className={`${styles.root} ${visible ? styles.isVisible : ""}`}
      data-lenis-prevent
    >
      <div className={styles.overlay} onClick={handleClose}>
        <div
          className={`${styles.popup} ${wide ? styles.popupWide : ""}`}
          style={maxWidth ? { maxWidth } : undefined}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {children}

          {closeIcon && (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Close"
            >
              <IoMdClose />
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default CustomPopup;
