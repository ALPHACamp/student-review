import { createGlobalStyle } from 'styled-components';

export const FullpageCustumizedStyles = createGlobalStyle`
  .fp-controlArrow.fp-prev {
      left: 0;
      border: none;
      width: 50px;
      height: 101px;
      /* background: url(left.png) no-repeat; */
      background: #000 !important;
      cursor: pointer;
  }
  .fp-controlArrow.fp-next {
      right: 0;
      border: none;
      width: 50px;
      height: 101px;
      /* background: url(right.png) no-repeat; */
      background: #000 !important;
      cursor: pointer;
  }
`;
