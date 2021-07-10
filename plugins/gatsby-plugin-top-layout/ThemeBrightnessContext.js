import React from 'react';

const ThemeBrightnessContext = React.createContext({
	isDark: false,
	toggleBrightness: () => null,
});

export default ThemeBrightnessContext;