'use client';

import { useEffect } from 'react';

const AdSter = () => {
	useEffect(() => {
		const loadAdsterSDK = async () => {
			try {
				console.log('AdPlatform.jsx: DOM loaded, initializing Adster SDK...');

				const script = document.createElement('script');
				script.src =
					'https://storage.googleapis.com/public-assets-websdk/bighaat.com.min.js';
				script.async = true;
				document.body.appendChild(script);

				script.onload = async () => {
					console.log('AdPlatform.jsx: Adster SDK loaded.');
					if (window.AdsterSDK) {
						const adsterSDK = new window.AdsterSDK();
						console.log('AdPlatform.jsx: Initializing Adster SDK...');
						await adsterSDK.init();
						console.log('AdPlatform.jsx: Adster SDK setup complete');
					} else {
						console.error(
							'AdPlatform.jsx: AdsterSDK is not available. Check if the script loaded correctly.'
						);
					}
				};

				script.onerror = (error) => {
					console.error('AdPlatform.jsx: Error loading Adster SDK:', error);
				};
			} catch (error) {
				console.error('AdPlatform.jsx: Error initializing Adster SDK:', error);
			}
		};

		loadAdsterSDK();

		return () => {
			const scriptTag = document.querySelector(
				'script[src="https://storage.googleapis.com/public-assets-websdk/bighaat.com.min.js"]'
			);
			if (scriptTag) {
				scriptTag.remove();
			}
			// Optional cleanup
			// if (window.AdsterSDK) {
			//   delete window.AdsterSDK;
			// }
		};
	}, []);

	return <div id="adster"></div>;
};

export default AdSter;
