import pathToRegexp from 'path-to-regexp';
import isEqual from 'lodash/isEqual';
import memoizeOne from 'memoize-one';
// import {router} from 'umi';
import { menu, title } from '../defaultSettings';

export const matchParamsPath = (pathname, breadcrumbNameMap) => {
  const pathKey = Object.keys(breadcrumbNameMap).find(key => pathToRegexp(key).test(pathname));
  return breadcrumbNameMap[pathKey];
};

const getPageTitle = (pathname, breadcrumbNameMap) => {

  const currRouterData = matchParamsPath(pathname, breadcrumbNameMap);

  if (!currRouterData) {
    return title;
  }
  const pageName =
     currRouterData.name
   ;

  return `首页列表`;
};

export default memoizeOne(getPageTitle, isEqual);
