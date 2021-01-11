import styled from 'styled-components';

// styles
const IconStyle = styled.i`
    font-size: 30px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    &.navigator {
        font-size: 50px;
        cursor: pointer;
    }
`;

const Icon = ({ ...props }) => {
    const { purpose, iconName } = props;
    return (
        <IconStyle
            className={`icon icofont-${iconName} ${purpose}`}
        ></IconStyle>
    );
};
export default Icon;
