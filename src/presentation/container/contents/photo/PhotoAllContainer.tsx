import React, { FunctionComponent } from 'react';
import PhotoTitleContainer from './PhotoTitleContainer';
import { RouteComponentProps } from 'react-router-dom';

const PhotoAllContainer: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <PhotoTitleContainer />
    </>
  );
};

export default PhotoAllContainer;
