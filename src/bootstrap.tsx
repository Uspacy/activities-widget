import { StoreProvider } from '@uspacy/store';
import FetchCommonData from '@uspacy/store/lib/components/FetchCommonData';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';

const container = document.getElementById('root');
if (!container) {
	throw new Error('Failed to find root element');
}
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreProvider>
				<FetchCommonData />
				<App />
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
