import {router} from 'umi';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
    },
  },
};

export function render(oldRender) {
  oldRender();
}

export function patchRoutes(routes) {
  // routes[0].unshift({
  //   path: '/foo',
  //   component: require('./routes/foo').default,
  // });
}


// export function rootContainer(container) {
//   console.log('rootContainer');
// //   const DvaContainer = require('@tmp/DvaContainer').default;
// //   return React.createElement(DvaContainer, null, container);
// }



export function modifyRouteProps(props) {
  // console.log('modifyRouteProps',window.location.pathname.split('/')[2]==='login');
  // if(window.location.pathname.split('/')[2] !=='login'){
  //   setTimeout(
  //     ()=>
  //     router.push('/user/login')
  //   ,10000)
  // }

  return  props ;
}
