import React, { useEffect } from "react";
import styles from "@/components/home/counter/Counter.module.css";

const Counter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const animationDuration = 2000;

    const startCounterAnimation = (element) => {
      const target = +element.getAttribute("data-target");
      const start = 0;
      let startTime = null;

      const animate = (timestamp) => {
        if (element.dataset.animating === "false") return;

        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;

        const progressRatio = Math.min(progress / animationDuration, 1);
        const currentValue = Math.floor(
          progressRatio * (target - start) + start,
        );

        element.textContent = currentValue;

        if (progress < animationDuration) {
          requestAnimationFrame(animate);
        } else {
          element.textContent = target;
        }
      };

      element.dataset.animating = "true";
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounterAnimation(entry.target);
          } else {
            entry.target.dataset.animating = "false";
            entry.target.textContent = "0";
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  return (
    <section className="sitePadding bgPrimary py-4 overflow-hidden">
      <div className="container-fluid">
        <div className="row row-cols-md-4 row-cols-2 text-center g-sm-4 gx-2 gy-4">
          <div className={`${styles.statBox} col`}>
            <div className={`${styles.statNo}`}>
              {" "}
              <span className="counter" data-target="25">
                0
              </span>
              +
            </div>
            <div>YEARS OF EXCELLENCE</div>
          </div>
          <div className={`${styles.statBox} col`}>
            <div className={`${styles.statNo}`}>
              {" "}
              <span className="counter" data-target="5000">
                0
              </span>
              +
            </div>
            <div>HAPPY FAMILIES</div>
          </div>
          <div className={`${styles.statBox} col`}>
            <div className={`${styles.statNo}`}>
              {" "}
              <span className="counter" data-target="12">
                0
              </span>
            </div>
            <div>LANDMARK PROJECTS</div>
          </div>
          <div className={`${styles.statBox} col`}>
            <div className={`${styles.statNo}`}>
              {" "}
              <span className="counter" data-target="4">
                0
              </span>
              M+
            </div>
            <div>SQ. FT. DELIVERED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
