import * as React from 'react';

import { LocaleEnum } from '../../constants/enums';

interface Props {
  selectedLocale: LocaleEnum;
  switchLanguage(payload: LocaleEnum): void;
  toggleRightSidebar(): void;
}

const LanguageSwitcher = (props: Props) => {
  return (
    <div className="buttonBar">
      <button
        className={props.selectedLocale === LocaleEnum.EN ? 'selectedLangButton' : 'langButton'}
        onClick={() => { props.switchLanguage(LocaleEnum.EN); props.toggleRightSidebar(); }}
      >
        EN
      </button>
      <button
        className={props.selectedLocale === LocaleEnum.DE ? 'selectedLangButton' : 'langButton'}
        onClick={() => { props.switchLanguage(LocaleEnum.DE); props.toggleRightSidebar(); }}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
