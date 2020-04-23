import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { ScrollWrap } from 'presentation/components/ScrollWrap';
import { LazyImage } from 'presentation/components/LazyLoad';
import photoData from 'assets/datas/photo.json';
import { TPhoto } from 'store/_types/DataSet';
import { getSortedFunction } from 'utils/Functions';
import { TDefaultIdx, TJustifiedLayoutItem } from 'store/_types/Container';
import {
  getOriginList,
  getInitLayout,
  startScrollThrottle,
  DEFAULT_IDX,
  DEFAULT_CONDITION,
} from 'utils/helpers/PhotoListContainer';

// TODO: ContextAPI 를 통해서 데이터 가져오는거 해줘야 함.
const defaultPhotoList: TPhoto[] = JSON.parse(
  JSON.stringify(
    photoData.sort(getSortedFunction(DEFAULT_CONDITION.PHOTO_SORTS)),
  ),
);

const PhotoListContainer: FunctionComponent<{}> = () => {
  const [list, setList] = useState<
    Array<TPhoto & { style: TJustifiedLayoutItem }>
  >();
  const [curIdx, setCurIdx] = useState<TDefaultIdx>(DEFAULT_IDX);

  // TODO: click modal
  // `#/photo/all/viewer/${photoData[0].id} is Modal Route Path

  useEffect(() => {
    // TODO: defaultCondition 조정해줘야 함.(with window.localStorage.setItem)
    const originList = getOriginList({ defaultPhotoList, curIdx });
    const initLayout = getInitLayout({ originList });

    // TODO: 년도별 컴포넌트 분리 해주장
    const yearsList = originList.map((e, i) => {
      return {
        ...e,
        style: initLayout.boxes[i],
      };
    });

    // TODO: make custom hooks
    // FIXME: useThrottle 부터 해주면 됨. 여기 이상함 지금.
    const scrollListener = function (e: Event) {
      const target: any = e.target;
      console.info(`NOT throttle`, target.scrollTop);
      const callback = setCurIdx((prev) => {
        return { ...prev, start: prev.start + prev.stepping };
      });
      startScrollThrottle(callback, target);
    };

    // TODO: useRef
    const scrollWrap = document.getElementById(`scroll-wrap`) as HTMLElement;
    scrollWrap.addEventListener('scroll', scrollListener);

    setList(yearsList);
    return () => scrollWrap.removeEventListener(`scroll`, scrollListener);
  }, [curIdx]);

  return (
    <Wrap>
      <ListContainer>
        <ScrollWrap id="scroll-wrap">
          <AllPhotoList>
            {/* TODO: 얘네 컴포넌트로 빼줘야 할듯. 2018, 2019, 2020 ... 계속 재활용 됨 */}
            <h4 className="photo_title">
              <CheckBox isChecked={false}>
                <input id="this" type="checkbox" value="2018" />
                2018년
              </CheckBox>
            </h4>
            <PhotoList style={{ height: `1000px`, position: `relative` }}>
              {list
                ? list.map((cur, i) => {
                    return (
                      <li
                        style={{ ...cur.style, position: `absolute` }}
                        key={i}
                      >
                        <Item>
                          <a href={`#/photo/all/viewer/${cur.id}`}>
                            <LazyImage
                              src={cur.url}
                              alt={cur.alt}
                              title={cur.title}
                            />
                          </a>
                        </Item>
                      </li>
                    );
                  })
                : null}
            </PhotoList>
          </AllPhotoList>
        </ScrollWrap>
        <ReloadArea />
      </ListContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  display: block;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
  z-index: 10;
`;

const ListContainer = styled.div`
  height: 100%;
`;

const ReloadArea = styled.div`
  width: 100%;
  height: 50px;
`;

const AllPhotoList = styled.div`
  margin: 16px 0 0 30px;

  .photo_title {
    padding-bottom: 16px;
    font-size: 15px;
    line-height: 18px;
    white-space: nowrap;
  }

  .photo_title input[type='checkbox'] {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
  }
`;

const CheckBox = styled.label<{ isChecked: boolean }>`
  display: inline-block;
  font-size: 14px;
  line-height: 17px;
  color: #222;
  position: relative;
  padding-left: 25px;
  cursor: pointer;

  :before {
    background-image: linear-gradient(transparent, transparent),
      url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_d3b6eb01.svg);
    background-size: 386px 367px;
    background-position: ${({ isChecked }) =>
      isChecked ? `-191px -322px;` : `-166px -322px;`};
    width: 17px;
    height: 17px;
    content: '';
    position: absolute;
    top: 1px;
    left: 0;
    bottom: 0;
    margin: auto 0;
  }
`;

const PhotoList = styled.ul`
  margin: -9px 0 0 -9px;
`;

const Item = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    -ms-justify-content: center;
    -ms-flex-pack: center;
    position: relative;
    height: 100%;
    background-color: #f5f5f5;
  }

  a:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  a:after {
    background-position: -88px -184px;
    display: block;
    margin: 1px;

    background-image: linear-gradient(transparent, transparent),
      url(https://ssl.pstatic.net/static/pwe/cloud/img/sprite/sp_cloudsvg_d3b6eb01.svg);
    background-size: 386px 367px;
    background-position: -52px -184px;
    width: 28px;
    height: 28px;
    display: none;
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
  }

  a img {
    max-width: 100%;
  }
`;

export default PhotoListContainer;
