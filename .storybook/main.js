const config = {
  stories: [
    '../src/**/*.mdx', 
    '../src/**/*.stories.@(js|jsx|ts|tsx)', 
    '../src/**/stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  staticDirs: ['..\\public'],

  docs: {
    autodocs: true
  }
};

export default config;
