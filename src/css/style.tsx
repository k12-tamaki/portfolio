/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const style = () => [
  css`
    .mainContent {
      min-height: 100vh;
      height: 100vh;
      width: 100%;
    }

    .mainContent .title {
      font: bold 300% Consolas, Monaco, monospace;
      color: #f4fbfe;
      text-align: center;
      margin-bottom: 50px;
    }

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content-box {
      width: 80%;
      height: 80%;
      min-height: 80%;
      padding: 50px;
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
    }
  `,
];
