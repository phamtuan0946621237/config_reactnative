// import {AppAlertProps} from 'App';
import {AlertButton, Dimensions, Platform, StatusBar} from 'react-native';
// import {global} from '../../App'
// import {
//   check,
//   request,
//   PERMISSIONS,
//   RESULTS,
//   requestMultiple,
//   checkMultiple,
// } from 'react-native-permissions';
// import {showMessage} from 'react-native-flash-message';
// const dimen = Dimensions.get('window');
// export const SCREEN_HEIGHT = Dimensions.get('window').height;
// export const SCREEN_WIDTH = Dimensions.get('window').width;


export function showLoading() {
  global.showLoading();
}

export function dismissLoading() {
  global.dismissLoading();
}


// export const isEmptyOrSpaces = (str: string) => {
//   return str === null || str.match(/^ *$/) !== null;
// };
// export function showAlert(data: AppAlertProps) {
//   global.showAlert(data);
// }

// export function dismissAlert() {
//   global.dismissAlert();
// }

// export function showMessageSuccess(message: string | undefined) {
//   if (!!message) {
//     showMessage({
//       message: message,
//       type: 'success',
//     });
//   }
// }
// export function showMessageWarning(message: string | undefined) {
//   if (!!message) {
//     showMessage({
//       message: message,
//       type: 'warning',
//     });
//   }
// }

// export const getAmountNumber = (text?: string) => {
//   if (!text) return '';
//   const min = 0;
//   const max = 100000000;
//   const number = text.replace(/[^0-9]+/g, '');
//   if (Number(number) < min) return min.toString();
//   if (Number(number) > max) return max.toString();
//   return number.toString();
// };

// // export function calcFontSize(fontSize: number, standardScreenWidth: number = 375) {
// //     return Math.round(fontSize * dimen.width / standardScreenWidth);
// // }

// export async function checkPermissionLocation() {
//   let resultCheck = await checkMultiple([
//     PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//     PERMISSIONS.IOS.LOCATION_ALWAYS,
//     PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//   ]);

//   if (
//     resultCheck['android.permission.ACCESS_FINE_LOCATION'] ===
//       RESULTS.GRANTED ||
//     resultCheck['ios.permission.LOCATION_ALWAYS'] === RESULTS.GRANTED ||
//     resultCheck['ios.permission.LOCATION_WHEN_IN_USE'] === RESULTS.GRANTED
//   )
//     return true;
//   return requestLocation();
// }

// export async function requestLocation() {
//   await requestMultiple([
//     PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//     PERMISSIONS.IOS.LOCATION_ALWAYS,
//     PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//   ]);
//   let resultCheck = await checkMultiple([
//     PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//     PERMISSIONS.IOS.LOCATION_ALWAYS,
//     PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//   ]);

//   return (
//     resultCheck['android.permission.ACCESS_FINE_LOCATION'] ===
//       RESULTS.GRANTED ||
//     resultCheck['ios.permission.LOCATION_ALWAYS'] === RESULTS.GRANTED ||
//     resultCheck['ios.permission.LOCATION_WHEN_IN_USE'] === RESULTS.GRANTED
//   );
// }

// export async function checkPermissionCamera() {
//   const permission =
//     Platform.OS == 'android'
//       ? PERMISSIONS.ANDROID.CAMERA
//       : PERMISSIONS.IOS.CAMERA;
//   let resultCheck = await check(permission);
//   if (resultCheck === RESULTS.GRANTED) return true;
//   return requestCamera();
// }

// export async function requestCamera() {
//   await requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.IOS.CAMERA]);
//   const permission =
//     Platform.OS == 'android'
//       ? PERMISSIONS.ANDROID.CAMERA
//       : PERMISSIONS.IOS.CAMERA;
//   let resultCheck = await check(permission);
//   return resultCheck === RESULTS.GRANTED;
// }

// export async function checkPermissionContact() {
//   const permission =
//     Platform.OS == 'android'
//       ? PERMISSIONS.ANDROID.READ_CONTACTS
//       : PERMISSIONS.IOS.CONTACTS;
//   let resultCheck = await check(permission);
//   if (resultCheck == RESULTS.GRANTED) return true;
//   return requestContact();
// }

// export async function requestContact() {
//   await requestMultiple([
//     PERMISSIONS.ANDROID.READ_CONTACTS,
//     PERMISSIONS.IOS.CONTACTS,
//   ]);
//   const permission =
//     Platform.OS == 'android'
//       ? PERMISSIONS.ANDROID.READ_CONTACTS
//       : PERMISSIONS.IOS.CONTACTS;
//   let resultCheck = await check(permission);
//   return resultCheck == RESULTS.GRANTED;
// }

// export async function checkPermissionMicro() {
//   const permission =
//     Platform.OS == 'android'
//       ? PERMISSIONS.ANDROID.RECORD_AUDIO
//       : PERMISSIONS.IOS.MICROPHONE;
//   let resultCheck = await check(permission);
//   if (resultCheck === RESULTS.GRANTED) return true;
//   return requestMicro();
// }

// export async function requestMicro() {
//   await requestMultiple([
//     PERMISSIONS.ANDROID.RECORD_AUDIO,
//     PERMISSIONS.IOS.MICROPHONE,
//   ]);
//   const permission =
//     Platform.OS == 'android'
//       ? PERMISSIONS.ANDROID.RECORD_AUDIO
//       : PERMISSIONS.IOS.MICROPHONE;
//   let resultCheck = await check(permission);
//   return resultCheck === RESULTS.GRANTED;
// }

// export function isIphoneX() {
//   return (
//     Platform.OS === 'ios' &&
//     !Platform.isPad &&
//     !Platform.isTVOS &&
//     (dimen.height === 812 ||
//       dimen.width === 812 ||
//       dimen.height === 896 ||
//       dimen.width === 896)
//   );
// }
// export const HeaderSize = {
//   height:
//     Platform.OS === 'ios'
//       ? isIphoneX()
//         ? 94
//         : 74
//       : 54 + StatusBar.currentHeight,
//   paddingTop: isIphoneX()
//     ? 77
//     : Platform.OS === 'ios'
//     ? 54
//     : StatusBar.currentHeight || 0,
// };
// export const HeaderTab = {
//   height:
//     Platform.OS === 'ios'
//       ? isIphoneX()
//         ? 94
//         : 74
//       : 54 + StatusBar.currentHeight,
//   paddingTop: isIphoneX()
//     ? 56
//     : Platform.OS === 'ios'
//     ? 54
//     : StatusBar.currentHeight || 0,
// };

// export const TabBarSize = {
//   height: 60,
//   paddingBottom: isIphoneX() ? 81 : 0,
// };
// export const SafeAreaSize = {
//   height: 60,
//   paddingBottom: isIphoneX() ? 45 : 0,
// };

// export const toAmount = (number?: number | string) => {
//   if (number === undefined) return '';
//   const sNumber = String(number);
//   const re = `\\d(?=(\\d{${3}})+` + `$` + `)`;
//   const n = Number(sNumber).toFixed(0).replace(new RegExp(re, 'g'), '$&,');
//   return n;
// };

// export const validatePhone = (phone: string) => {
//   const reg = /((09|03|07|08|05)+([0-9]{8})\b)/g;
//   return reg.test(phone);
// };

// export const spellOut = (number?: number | string) => {
//   if (number === undefined) return '';

//   const sNumber = String(number);
//   // Tao mot bien tra ve
//   var sReturn = '';
//   // Tim chieu dai cua chuoi
//   var iLen = sNumber.length;
//   // Lat nguoc chuoi nay lai
//   var sNumber1 = '';
//   for (var i = iLen - 1; i > -1; i--) {
//     sNumber1 += sNumber[i];
//   }
//   // Tao mot vong lap de doc so
//   // Tao mot bien nho vi tri cua sNumber
//   var iRe = 0;
//   do {
//     // Tao mot bien cat tam
//     var sCut = '';
//     if (iLen > 3) {
//       sCut = sNumber1.substring(iRe * 3, iRe * 3 + 3);
//       sReturn = read(sCut, iRe) + sReturn;
//       iRe++;
//       iLen -= 3;
//     } else {
//       sCut = sNumber1.substring(iRe * 3, iRe * 3 + iLen);
//       sReturn = read(sCut, iRe) + sReturn;
//       break;
//     }
//   } while (true);
//   if (sReturn.length > 1) {
//     sReturn = sReturn.substring(0, 1).toUpperCase() + sReturn.substring(1);
//   }
//   return `(${sReturn}đồng)`;
// };

// const read = (sNumber: string, iPo: number) => {
//   // Tao mot bien tra ve
//   var sReturn = '';
//   // Tao mot bien so
//   const sPo = ['', 'nghìn' + ' ', 'triệu' + ' ', 'tỷ' + ' '];
//   const sSo = [
//     'không' + ' ',
//     'một' + ' ',
//     'hai' + ' ',
//     'ba' + ' ',
//     'bốn' + ' ',
//     'năm' + ' ',
//     'sáu' + ' ',
//     'bảy' + ' ',
//     'tám' + ' ',
//     'chín' + ' ',
//   ];
//   const sDonvi = ['', 'mươi' + ' ', 'trăm' + ' '];
//   // Tim chieu dai cua chuoi
//   const iLen = sNumber.length;
//   // Tao mot bien nho vi tri doc
//   var iRe = 0;
//   // Tao mot vong lap de doc so
//   for (var i = 0; i < iLen; i++) {
//     var sTemp = '' + sNumber.charAt(i);
//     var iTemp = Number(sTemp);
//     // Tao mot bien ket qua
//     var sRead = '';
//     // Kiem tra xem so nhan vao co = 0 hay ko
//     if (iTemp === 0) {
//       switch (iRe) {
//         case 0:
//           break; // Khong lam gi ca
//         case 1: {
//           if (Number('' + sNumber.charAt(0)) != 0) {
//             sRead = 'lẻ' + ' ';
//           }
//           break;
//         }
//         case 2: {
//           if (
//             Number('' + sNumber.charAt(0)) != 0 &&
//             Number('' + sNumber.charAt(1)) != 0
//           ) {
//             sRead = 'không trăm' + ' ';
//           }
//           break;
//         }
//       }
//     } else if (iTemp === 1) {
//       switch (iRe) {
//         case 1:
//           sRead = 'mười' + ' ';
//           break;
//         default:
//           sRead = 'một' + ' ' + sDonvi[iRe];
//           break;
//       }
//     } else if (iTemp === 5) {
//       switch (iRe) {
//         case 0: {
//           if (sNumber.length <= 1) {
//             sRead = 'năm' + ' ';
//           } else if (Number('' + sNumber.charAt(1)) != 0) {
//             sRead = 'lăm' + ' ';
//           } else sRead = 'năm' + ' ';
//           break;
//         }
//         default:
//           sRead = sSo[iTemp] + sDonvi[iRe];
//       }
//     } else {
//       sRead = sSo[iTemp] + sDonvi[iRe];
//     }

//     sReturn = sRead + sReturn;
//     iRe++;
//   }
//   if (sReturn.length > 0) {
//     sReturn += sPo[iPo];
//   }

//   return sReturn;
// };
