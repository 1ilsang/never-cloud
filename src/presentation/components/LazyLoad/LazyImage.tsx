import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { CSSProp } from 'styled-components';
import { placeHolder, Image } from './styles';

type TLazyImage = {
  myStyle?: CSSProp;
  src: string;
  alt: string;
  title?: string;
};

// REVIEW: Image lazy loading
const LazyImage: FunctionComponent<TLazyImage> = ({
  myStyle,
  src,
  alt,
  title,
}) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  const onLoad = (event: Event) => {
    (event.target as HTMLImageElement).classList.add(`loaded`);
  };
  const onError = (event: Event) => {
    (event.target as HTMLImageElement).classList.add(`has-error`);
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;
    const curImage = imageRef.current;

    const retFunc = () => {
      didCancel = true;
      if (observer && observer.unobserve) observer.unobserve(curImage);
    };

    if (!(curImage && imageSrc !== src)) return retFunc;
    if (!IntersectionObserver) {
      setImageSrc(src);
      return retFunc;
    }
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            !didCancel &&
            (entry.intersectionRatio > 0 || entry.isIntersecting)
          ) {
            setTimeout(() => setImageSrc(src), 500);
            observer.unobserve(curImage);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: `75%`,
      },
    );
    observer.observe(curImage);
  }, [src, imageSrc, imageRef]);

  return (
    <Image
      myStyle={myStyle}
      ref={imageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      title={title}
    />
  );
};

export default LazyImage;
