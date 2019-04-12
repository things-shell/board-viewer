import { css } from 'lit-element'

export const style = css`
  :host {
    display: flex;
    flex-direction: column;
    width: 100%; /* 전체화면보기를 위해서 필요함. */
    overflow: hidden;
    position: relative;
  }

  #target {
    flex: 1;
    width: 100%; /* 전체화면보기를 위해서 필요함. */
    height: 100%;
  }

  /* navigation buttons */
  mwc-icon {
    z-index: 10;
    position: absolute;
    top: 45%;
    min-width: 50px;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    color: #fff;

    --mdc-icon-size: 3em;
  }

  mwc-icon[hidden] {
    display: none;
  }

  mwc-icon:hover {
    background-color: tomato;
    border-radius: 50%;
  }

  #prev {
    left: 5px;
  }

  #next {
    right: 5px;
  }

  #fullscreen {
    position: absolute;
    bottom: 15px;
    right: 16px;
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
