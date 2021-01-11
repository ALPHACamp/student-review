import React, { useEffect, useRef, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { NavigatorDirectionTypes } from './navigation/navigator';

import styled from 'styled-components';

// assets
import EVERYBODY_IMG from '../assets/img/page/everybody.jpg';
import SCROLL_DOWN_ARROW_SVG from '../assets/img/svg/icon_scoll-down.svg';

// constants
import {
    growthContexts,
    activitiesLogosData,
    photoSrcFromType,
    headerMode,
} from '../constants/constants';
import { scrollDownArrowAnimation } from '../constants/constantStyle';

// utils
import { urlHashParser } from '../utils/functions';

// actions
import { setHeaderMode, showScrollArrow } from '../store/actions/ui.action';

// components
import PageTemplate from '../templates/pageTemplate';
import SummaryArticleTemplate from '../templates/summaryArticleTemplate';
import BigTxtArticleTemplate from '../templates/bigTxtArticleTemplate';
import PhotoGridTemplate from '../templates/photoGridTemplate';
import FullBackgroundCover from '../templates/fullBackgroundCover';
import BigTxt from './title/bigTxt';
import GradientCountNumber from './text/GradientCountNumber';
import ArticleTitle from './title/aticleTitle';
import Companies from '../pages/companies';
import PhotoReader from './popup/photoReader';
import { useDispatch, useSelector } from 'react-redux';
import ThreeColCount from '../pages/threeColCount';

const MainBgContainer = styled.div`
    &:before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background: ${({ theme }) => theme.color.gradient.mainBG};
    }

    /* p1 */
    .scroll-down-arrow {
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin-left: -25px;
        width: 50px;
        height: 75px;
        background-image: url(${SCROLL_DOWN_ARROW_SVG});
        background-position: center;
        background-size: cover;
        z-index: 1;
        visibility: hidden;
        opacity: 0;

        animation: ${scrollDownArrowAnimation} 2s 3s ease-in-out infinite;

        &.isShow {
            visibility: visible;
            opacity: 1;
            transition-duration: 0.3s;
        }
    }
`;

// Customized Fullpage configs
const { UP, DOWN } = NavigatorDirectionTypes;
const SEL = 'section';
const SECTION_SEL = `.${SEL}`;
const SCROLLING_SPEED = 600;
const anchors = [
    'p1',
    'p2',
    'p3',
    'p4',
    'p5',
    'p6',
    'p7',
    'p8',
    'p9',
    'p10',
    'p11',
];
const fullpageBgColors = [];

// const pluginWrapper = () => {
//     /*
//      * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
//      */
// };

const renderGrowthContexts = (growthContexts) => {
    if (growthContexts && growthContexts.length > 0) {
        return growthContexts.map((context, index) => (
            <div className="list-item" key={`growth-context-id-${index}`}>
                <div className={`title ${context.titleColor}`}>
                    {context.title}
                </div>
                <div className="description">
                    {context.description.replace('<br>', '\n')}
                    {context.listDescription &&
                        context.listDescription.map((item) => <p>{item}</p>)}
                </div>
            </div>
        ));
    } else {
        return null;
    }
};

const Fullpage = () => {
    const dispatch = useDispatch();
    const isShowScrollArrow = useSelector(
        (store) => store.ui.scrollArrow.isShow
    );
    const fullpageAPIRef = useRef();
    const [fullpageState, setFullpageState] = useState({
        sectionsColor: [...fullpageBgColors],
        anchors: [...anchors],
    });

    useEffect(() => {
        setFullpageState({
            sectionsColor: [...fullpageBgColors],
            anchors: [...anchors],
        });
    }, []);

    // set the Fullpage instance into fullpageAPIRef
    // this can let you trigger Fullpage API methods.
    const initRef = (API) => {
        if (API) {
            fullpageAPIRef.current = API;
        }
    };

    const setHeaderModeByUrlHashString = (urlHashString) => {
        if (urlHashString === 'p12') {
            dispatch(setHeaderMode(headerMode.COLORFULE));
        } else {
            dispatch(setHeaderMode(headerMode.WHITE));
        }
    };

    const showScrollArrowByUrlHashString = (urlHashString) => {
        if (urlHashString === 'p1' || urlHashString === '') {
            dispatch(showScrollArrow(true));
        } else {
            dispatch(showScrollArrow(false));
        }
    };

    // Section afterLoad
    const afterLoad = (origin, destination, direction) => {
        const hashString = urlHashParser();

        setHeaderModeByUrlHashString(hashString);
        showScrollArrowByUrlHashString(hashString);
    };

    return (
        <MainBgContainer className="bg-orange">
            <PhotoReader />
            <ReactFullpage
                licenseKey={null}
                // === for debugging use
                // debug
                // === navigation
                // navigation
                // === Required when using extensions
                // pluginWrapper={pluginWrapper}
                fadingEffect={true}
                scrollOverflow={true}
                autoScrolling={true}
                touchSensitivity={5}
                controlArrows={false}
                anchors={[...anchors]}
                scrollingSpeed={SCROLLING_SPEED}
                sectionSelector={SECTION_SEL}
                afterLoad={afterLoad}
                sectionsColor={fullpageState.sectionsColor}
                loopHorizontal={false}
                render={({ state, fullpageApi }) => (
                    <ReactFullpage.Wrapper>
                        {/* init fullpageApi */}
                        {initRef(fullpageApi)}

                        <div className="section" data-anchor="p1">
                            <FullBackgroundCover
                                withMask={true}
                                src={EVERYBODY_IMG}
                            />
                            <PageTemplate
                                pageName="1"
                                directions={[DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <BigTxt>
                                        <p className="big-wording">刻意練習</p>
                                        <p className="big-wording">的一年</p>
                                    </BigTxt>
                                </SummaryArticleTemplate>
                                <div
                                    className={`scroll-down-arrow ${
                                        isShowScrollArrow ? 'isShow' : ''
                                    }`}
                                ></div>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p2">
                            <FullBackgroundCover type="black" src="" />
                            <PageTemplate
                                pageIndex="2"
                                pageName="2"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate
                                    ticleTemplate
                                    pageIndex={2}
                                >
                                    <div className="pure-text-container">
                                        <p className="title">
                                            2020 對所有人都不是輕鬆的一年。
                                        </p>
                                        <p className="description">
                                            許多人在過去的這年，被迫面臨了工作和家庭的變動，有些人則是開始謹慎思考，要如何準備好自己面對更多未知的變動和衝擊。
                                        </p>
                                        <p className="description">
                                            數千位學生，選擇在 2020 年加入 ALPHA
                                            Camp，打破時間和空間的限制在線上學校中持續學習，深蹲累積自己的能力，拓展在軟體職涯裡發展的可能。在動盪的環境裡，AC
                                            學生們刻意練習並累積實力，讓自己變成更有選擇的人，拿回對生活的主控權。
                                        </p>
                                        <p className="description bold">
                                            我們迫不及待想與你分享， ALPHA Camp
                                            學生社群在 2020 年累積的成就！
                                        </p>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p3">
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                pageName="3"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="count-container">
                                        <ArticleTitle title="學習時數"></ArticleTitle>
                                        <GradientCountNumber text="140K" />
                                        <div className="description">
                                            <p>
                                                2020 AC 學生社群共投注了超過 14
                                                萬小時的學習時數
                                            </p>
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p4">
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="4"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <div className="bottom-cute-people"></div>
                                <SummaryArticleTemplate>
                                    <div className="diversity-bg">
                                        <div className="big-wording">
                                            <span>多樣化的背景</span>
                                        </div>
                                        <div className="description">
                                            正在安胎中的媽媽、消防員、音響店老闆、創業家、飾品工藝製作者、景觀設計工作者、Zumba
                                            老師、對科技有興趣的國中生、想要運用科技力量幫助資源運用的社會工作者
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p5">
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="5"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="count-container">
                                        <ArticleTitle title="同時上線"></ArticleTitle>
                                        <GradientCountNumber text="2500+" />
                                        <div className="description">
                                            <p>
                                                累積 2500+
                                                人次，同時上線在工作坊中學習
                                            </p>
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p6">
                            {/* <div className="slide" data-anchor="p6-1">
                                <PageTemplate
                                    customizedBgClassName=""
                                    pageName="6-1"
                                    directions={[UP, RIGHT]}
                                    fullpageApi={fullpageApi}
                                />
                            </div> */}
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="6"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="count-container">
                                        <ArticleTitle title="完成專案"></ArticleTitle>
                                        <GradientCountNumber text="3000" />
                                        <div className="description">
                                            <p>
                                                今年同學共完成超過 3000
                                                份的軟體專案
                                            </p>
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p7">
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="7"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="count-container">
                                        <ArticleTitle title="成功完課"></ArticleTitle>
                                        <GradientCountNumber text="1000" />
                                        <div className="description">
                                            <p>
                                                超過 1000
                                                人成功完課，通過技術驗收
                                            </p>
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p8">
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="8"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="growth-container">
                                        <div className="big-title">
                                            <GradientCountNumber
                                                fontSize="9vmin"
                                                text="完課之外還有許多成長"
                                            ></GradientCountNumber>
                                        </div>
                                        <div className="list">
                                            {renderGrowthContexts(
                                                growthContexts
                                            )}
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p9">
                            <FullBackgroundCover type="black" src="" />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="9"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <BigTxtArticleTemplate
                                    title="29"
                                    titleFontSize="10vmax"
                                    subtitle="累積了 29 份畢業多人協作專案，衝刺轉職"
                                >
                                    <div className="two-col">
                                        <p>
                                            互相 code review
                                            的過程以及尋找後端程式的 bug
                                            上，都能夠學習到很棒的想法和意見，這是個很棒的合作經驗!{' '}
                                        </p>
                                        <p>
                                            透過多人協作的開發方式，來驗收各方面的能力，很感謝
                                            AC 提供這樣難得的機會。
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>
                                            團體協作是轉職路上比較難可以練習的情境，一方面是身邊轉換跑道的朋友並不多，而要找到同樣轉職且願意一起做專案的又是少數，感謝AC提供機會，讓我可以認識隊友們，一起完成twitter專案。
                                        </p>
                                    </div>
                                </BigTxtArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p10">
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="10"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <ThreeColCount />
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p11">
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="11"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="count-container">
                                        <ArticleTitle title="轉職率"></ArticleTitle>
                                        <GradientCountNumber text="93%" />
                                        <div className="description">
                                            <p>
                                                同學從畢業後三個月內成功轉職率
                                                93%
                                            </p>
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p12">
                            <FullBackgroundCover type="white" src="" />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="12"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <Companies />
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p13">
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="13"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="count-container">
                                        <ArticleTitle title="平均月薪"></ArticleTitle>
                                        <GradientCountNumber
                                            fontSize="14vmax"
                                            text="53,000"
                                        />
                                        <div className="description">
                                            <p>
                                                AC學生畢業後轉職的平均月薪 5.3
                                                萬起
                                            </p>
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p14">
                            <FullBackgroundCover
                                type="black"
                                withPattern={true}
                                src=""
                            />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="14"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="count-container">
                                        <ArticleTitle title="回饋社群"></ArticleTitle>
                                        <GradientCountNumber text="35" />
                                        <div className="description">
                                            <p>
                                                35
                                                位學生來當實習助教、助教，回饋社群
                                            </p>
                                        </div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p15">
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="15"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <BigTxtArticleTemplate
                                        title="4000"
                                        titleFontSize="10vmax"
                                        subtitle="職涯嘉年華 30 場活動，近 4000 人次參與"
                                    >
                                        <PhotoGridTemplate
                                            srcFrom={photoSrcFromType.ACTIVITY}
                                            photoData={activitiesLogosData}
                                        />
                                    </BigTxtArticleTemplate>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                        <div className="section" data-anchor="p16">
                            <FullBackgroundCover type="black" />
                            <PageTemplate
                                customizedBgClassName=""
                                pageName="16"
                                directions={[UP, DOWN]}
                                fullpageApi={fullpageApi}
                            >
                                <SummaryArticleTemplate>
                                    <div className="outcome-container">
                                        <span>#outcomefirst</span>
                                        <div className="ac-horizontal-logo"></div>
                                    </div>
                                </SummaryArticleTemplate>
                            </PageTemplate>
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </MainBgContainer>
    );
};

export default Fullpage;
