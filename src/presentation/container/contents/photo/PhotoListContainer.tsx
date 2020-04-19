import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { ScrollWrap } from 'presentation/components/ScrollWrap';
import photoData from 'assets/datas/photo.json';

const PhotoListContainer: FunctionComponent<{}> = () => {
  // TODO: photoData 및 videoData 를 가공해서 list 에 넣어줘야 함.
  // TODO: cur index width slice + width 계산
  // const [list, setList] = useState([]);
  // const [idx, setIdx] = useState(0);
  // 이미지 LazyLoading, throttle, click modal 등 해줘야할게 겁나 많음!!
  // `#/photo/all/viewer/${photoData[0].id} is Modal Route Path

  return (
    <Wrap>
      <ListContainer>
        <ScrollWrap>
          <AllPhotoList>
            {/* TODO: 얘네 컴포넌트로 빼줘야 할듯. 2018, 2019, 2020 ... 계속 재활용 됨 */}
            <h4 className="photo_title">
              <CheckBox isChecked={false}>
                <input id="this" type="checkbox" value="2018" />
                2018년
              </CheckBox>
            </h4>
            <PhotoList style={{ height: `1974.12px`, position: `relative` }}>
              <li
                style={{
                  top: `0px`,
                  left: `0px`,
                  width: `160.6px`,
                  height: `120.45px`,
                  position: `absolute`,
                  backgroundColor: `rgb(255, 255, 255)`,
                }}
              >
                <Item>
                  <a href={`#/photo/all/viewer/${photoData[0].id}`}>
                    <img
                      src={photoData[0].url}
                      alt={photoData[0].alt}
                      title={photoData[0].title}
                    />
                  </a>
                </Item>
              </li>
              <li
                style={{
                  top: `0px`,
                  left: `163.6px`,
                  width: `160.6px`,
                  height: `120.45px`,
                  position: `absolute`,
                  backgroundColor: `rgb(255, 255, 255)`,
                }}
              >
                <Item>
                  <a href={`#/photo/all/viewer/${photoData[1].id}`}>
                    <img
                      src={photoData[1].url}
                      alt={photoData[1].alt}
                      title={photoData[1].title}
                    />
                  </a>
                </Item>
              </li>
              <li
                style={{
                  top: `0px`,
                  left: `327.2px`,
                  width: `398.159px`,
                  height: `120.45px`,
                  position: `absolute`,
                  backgroundColor: `rgb(255, 255, 255)`,
                }}
              >
                <Item>
                  <a href={`#/photo/all/viewer/${photoData[2].id}`}>
                    <img
                      src={photoData[2].url}
                      alt={photoData[2].alt}
                      title={photoData[2].title}
                    />
                  </a>
                </Item>
              </li>
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
  overflow-y: auto;
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
      isChecked ? `-191px -322px;` : `-166px -322px;`}
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
  margin: -3px 0 0 -3px;

  li {
    position: relative;
    float: left;
    margin: 3px 0 0 3px;
  }
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
