import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const MyInfoContainer: FunctionComponent<{}> = () => {
  return (
    <MyInfoArea>
      <CapacityArea>
        <CapacityBoldP>
          <CapacityBoldText>4.4GB</CapacityBoldText>
          <CapacitySlash>/</CapacitySlash>
          30GB
          <CapacityStatus>여유 25.6GB</CapacityStatus>
        </CapacityBoldP>
        <CapacityGraph>
          <BarGraph style={{ width: `15%` }} />
        </CapacityGraph>
      </CapacityArea>
      <VoucherInfo>
        무료 이용 중<PurchaseButton>이용권 구매</PurchaseButton>
      </VoucherInfo>
    </MyInfoArea>
  );
};

const MyInfoArea = styled.div`
  padding: 22px 25px 22px;
`;

const CapacityArea = styled.div`
  padding-bottom: 8px;
`;

const CapacityBoldP = styled.p`
  margin: 0 auto;
  display: flex;
  font-size: 15px;
  line-height: 21px;
  color: #222;
  letter-spacing: -0.25px;
`;

const CapacityBoldText = styled.strong`
  font-weight: 600;
`;

const CapacitySlash = styled.span`
  margin: 0 4px;
  font-weight: 300;
  color: #ccc;
`;

const CapacityStatus = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  margin: 3px 0 0 5px;
  font-size: 11px;
  line-height: 15px;
  color: #888;
  letter-spacing: 0;
  text-align: right;
`;

const CapacityGraph = styled.div`
  overflow: hidden;
  position: relative;
  height: 2px;
  margin-top: 6px;
  border-radius: 2px;
  background-color: #e5e5e5;
`;

const BarGraph = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 2px;
  background-color: #444;
`;

const VoucherInfo = styled.p`
  position: relative;
  margin: 0 auto;
  margin-top: 6px;
  font-size: 12px;
  line-height: 15px;
  color: #555;
`;

const PurchaseButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: -3px;
  height: 21px;
  margin-top: -5px;
  padding: 0 7px;
  border: 1px solid #ddd;
  border-radius: 1px;
  font-size: 11px;
  line-height: 20px;
  color: #444;
  letter-spacing: -0.3px;
`;

export default MyInfoContainer;
