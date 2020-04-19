import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhotoTitleContainer from './PhotoTitleContainer';
import PhotoListContainer from './PhotoListContainer';

const PhotoAllContainer: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <PhotoTitleContainer />
      <PhotoListContainer />
    </>
  );
};

export default PhotoAllContainer;
