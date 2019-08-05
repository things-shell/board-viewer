import { css } from 'lit-element'

export const style = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; /* 전체화면보기를 위해서 필요함. */
    overflow: hidden;
    position: relative;
  }

  :host {
    background-color: #fff;
  }

  #target {
    flex: 1;
    width: 100%; /* 전체화면보기를 위해서 필요함. */
    height: 100%;
  }

  #target:fullscreen {
    background-color: #fff;
  }

  /* navigation buttons */
  mwc-icon {
    position: absolute;
    min-width: 50px;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    color: #fff;

    --mdc-icon-size: 3em;

    background-color: var(--board-viewer-nav-button-bg-color, tomato);
    border-radius: 50%;
    opacity: 0.7;
  }

  mwc-fab {
    --mdc-theme-secondary: var(--board-viewer-fab-bg-color, tomato);
  }

  mwc-icon[hidden] {
    display: none;
  }

  mwc-icon:hover {
    opacity: 1;
  }

  #prev {
    left: 15px;
  }

  #next {
    right: 15px;
  }

  #fullscreen {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  /* for scroller */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #aa866a;
  }
`
