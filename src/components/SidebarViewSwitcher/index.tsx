import * as React from 'react';

interface Props {
  switchSidebarView(): void;
}

const SidebarViewSwitcher = (props: Props) => {
  return (
    <div className="sidebarViewSwitcher">
      <button onClick={() => props.switchSidebarView()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </button>
    </div>
  );
};

export default SidebarViewSwitcher;
