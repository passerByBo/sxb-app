import type { Preview } from "@storybook/react";
import '../packages/components/main.css'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // 配置预览生效暗黑模式
    darkMode: {
      classTarget: 'body',
      stylePreview: true
    },
    webpackFinal: (config) => {

    }
  },
 
};

export default preview;
