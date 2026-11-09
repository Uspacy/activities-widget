import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

// i18next is shared through Module Federation, so its default export is the same object in every remote on the page.
// A separate instance keeps other widgets from loading their translations into ours.
// It reaches components only through I18nextProvider in App: initReactI18next is not used, because it would set
// this instance as the global one in the react-i18next shared with the host.
const i18n = createInstance();

i18n.use(
	resourcesToBackend((language: string, namespace: string, callback) => {
		import(`./locales-widget/${language}/${namespace}.json`)
			.then((resources) => {
				callback(null, resources);
			})
			.catch((error) => {
				callback(error, null);
			});
	}),
).init({
	fallbackLng: 'uk',
});

export default i18n;
