import { version } from '../package';
// import { plugins } from '@alilc/lowcode-engine';
// export { default as ProCard } from './components/pro-card';
// export type { CardProps, CardSectionProps } from './components/pro-card';

export { default as PieChart } from './components/pie-chart';
export { default as ColumnChart } from './components/column-chart';
export { default as BarChart } from './components/bar-chart';
export { default as LineChart } from './components/line-chart';
export { default as AreaChart } from './components/area-chart';
export { default as DonutChart } from './components/donut-chart';

export * from './components/page-header';
export * from './components/pro-form';
export * from './components/pro-table';
export * from './components/expand-table';
export * from './components/filter';
export * from './components/a11y-filter';
export * from './components/anchor';
export * from './components/pro-dialog';
export * from './components/tab-container';
export * from './components/pro-drawer';
export * from './components/button';
export * from './components/button-group';
export { default as StoryPlaceholder } from './components/story-placeholder';

export * from './components/a11y-table';

export * from './variables';

const bizCssPrefix = 'fusion-ui';
const displayName = 'FusionUI';

export { bizCssPrefix, displayName, version };


// if (process.env.NODE_ENV === 'development') {
//   const plugin = require('./plugins/index');
//   async function registerPlugins() {
//     await plugins.register(plugin.default);
//     await plugins.init({});
//   }
//   registerPlugins();
// }
