import React, { FunctionComponent, useState, useEffect } from 'react';
import { CSSProp } from 'styled-components';
import { placeHolder, Image } from './styles';

type TLazyImage = {
  myStyle?: CSSProp;
  src: string;
  alt: string;
};

// REVIEW: Image lazy loading
const LazyImage: FunctionComponent<TLazyImage> = ({ myStyle, src, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [imageRef, setImageRef] = useState(
    document.getElementById(`ref-image`) as HTMLImageElement,
  );

  const onLoad = (event: Event) => {
    (event.target as HTMLImageElement).classList.add(`loaded`);
  };
  const onError = (event: Event) => {
    (event.target as HTMLImageElement).classList.add(`has-error`);
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    const retFunc = () => {
      didCancel = true;
      if (observer && observer.unobserve) observer.unobserve(imageRef);
    };

    if (!(imageRef && imageSrc !== src)) return retFunc;
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
            setImageSrc(src);
            observer.unobserve(imageRef);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: `75%`,
      },
    );
    observer.observe(imageRef);
  }, [src, imageSrc, imageRef]);

  return (
    <Image
      id={`ref-image`}
      myStyle={myStyle}
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default LazyImage;
