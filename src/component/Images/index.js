import { forwardRef, useState } from "react";
import styles from "./Image.module.scss";
import classNames from "classnames";
import images from "../../assets/images";

function Image({ src, alt,className,fallback: customfallback =images.logo , ...props }, ref) {
  const [fallbacks, setFallback] = useState("");
  const handleError = () => {
    setFallback(customfallback);
  };
  return (
    <img
      onError={handleError}
      ref={ref}
      {...props}
      src={fallbacks || src}
      alt={alt}
      className={classNames(className, styles.wrapper)} // nối classname
    ></img>
  );
}

export default forwardRef(Image);
