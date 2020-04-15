export const SNBData = {
  photo: {
    title: `포토`,
    list: [
      { contents: `특별한 순간`, link: `/special` },
      { contents: `사진·동영상`, link: `/photo/all` },
      { contents: `앨범`, link: `/photo/album` },
      { contents: `사진 폴더`, link: `/photo/folder` },
    ],
  },
  drive: {
    title: `드라이브`,
    list: [
      { contents: `동영상`, link: `/video` },
      { contents: `문서`, link: `/document` },
      { contents: `음악`, link: `/music` },
      { contents: `즐겨 찾는 파일`, link: `/protect` },
      { contents: `모든 파일`, link: `` },
    ],
  },
  share: {
    title: `공유`,
    list: [
      { contents: `함께보기`, link: `` },
      { contents: `공유 파일`, link: `` },
    ],
  },
};

export const getLastViewKey = (href: string): string => {
  let ret = `/my`;
  if ([`/special`, `/photo/all`].includes(href)) ret = href;
  else if (href.includes(`/photo`)) ret = `/photo/all`;

  return ret;
};
