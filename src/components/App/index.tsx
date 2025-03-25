import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import UserSettingsContextProvider from '../../context/UserSettings';
import i18n from '../../i18n';
import ActivitiesWidget from '../ActivitiesWidget';
import { IProps } from './types';

export const App: React.FC<IProps> = ({ userSettings }) => {
	useEffect(() => {
		i18n.changeLanguage(userSettings?.lang);
	}, [userSettings?.lang]);

	return (
		<React.Suspense>
			<I18nextProvider i18n={i18n}>
				<UserSettingsContextProvider userSettings={userSettings}>
					<ActivitiesWidget />
				</UserSettingsContextProvider>
			</I18nextProvider>
		</React.Suspense>
	);
};

export default App;
