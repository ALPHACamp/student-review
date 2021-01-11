import React from 'react';
import styled from 'styled-components';
import { companyLogosData, photoSrcFromType } from '../constants/constants';
import PhotoGridTemplate from '../templates/photoGridTemplate';

// styles
const CompanyStyle = styled.div`
    width: calc(100% - 150px);
    padding: 150px 0px 0px 0px;
    .title {
        font-family: Noto Sans TC;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 46px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 104px;
        color: ${({ theme }) => theme.color.mono.black};
    }

    @media screen and (max-width: 576px) {
        .title {
            font-size: 6vmin;
            line-height: 7vmin;
            margin-bottom: 40px;
        }
    }
`;

const Companies = () => {
    return (
        <CompanyStyle>
            <div className="title">
                <p>學生成功轉職後，</p>
                <p>於海內外優質新創公司與企業擔任軟體工程師</p>
            </div>
            <div className="company-list">
                <PhotoGridTemplate
                    srcFrom={photoSrcFromType.COMPANY}
                    photoData={companyLogosData}
                ></PhotoGridTemplate>
            </div>
        </CompanyStyle>
    );
};
export default Companies;
