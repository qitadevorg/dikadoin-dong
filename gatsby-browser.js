import './src/styles/global.css';

export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps,
}) => {
  return prevRouterProps?.location?.pathname !== routerProps?.location?.pathname
}
