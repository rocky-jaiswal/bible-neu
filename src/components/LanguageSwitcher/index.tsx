import * as React from 'react';

import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';

interface Props {
  selectedLocale: LocaleEnum;
  switchLanguage(payload: LocaleEnum): ActionType<string>;
}

const LanguageSwitcher = (props: Props) => {
  return (
    <div className="buttonBar">
      <button
        className={props.selectedLocale === LocaleEnum.en ? 'selectedLangButton' : 'langButton'}
        onClick={() => props.switchLanguage(LocaleEnum.en)}
      >
        EN
      </button>
      <button
        className={props.selectedLocale === LocaleEnum.de ? 'selectedLangButton' : 'langButton'}
        onClick={() => props.switchLanguage(LocaleEnum.de)}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;
