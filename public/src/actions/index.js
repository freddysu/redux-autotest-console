import axios from 'axios';

const ROOT_URL = 'http://localhost:8888/api/';;

export const GET_DEVICES = 'GET_DEVICES';
export const GET_FEATURE_OPTIONS = 'GET_FEATURE_OPTIONS';
export const CHANGE_DEVICE_FEATURE = 'CHANGE_DEVICE_FEATURE';
export const CHANGE_APK = 'CHANGE_APK';
export const GET_APK_LIST = 'GET_APK_LIST';
export const GET_APK_LIST_BEFORE = 'GET_APK_LIST_BEFORE';
export const RESIGN_APK = 'RESIGN_APK';
export const RESIGN_APK_BEFORE = 'RESIGN_APK_BEFORE';

export function getDevices() {
  const url = ROOT_URL + 'devices';
  const request = axios.get(url);

  return {
    type: GET_DEVICES,
    payload: request
  };
}

export function getFeatureOptions() {
  const url = ROOT_URL + 'features';
  const request = axios.get(url);

  return {
    type: GET_FEATURE_OPTIONS,
    payload: request
  };
}

export function onChangeDeviceFeature(name, feature) {
  return {
    type: CHANGE_DEVICE_FEATURE,
    payload: { name, feature }
  }
}

export function onChangeApk(event) {
  return {
    type: CHANGE_APK,
    payload: event.target.value
  }
}

export function getApkListBefore() {
  return {
    type: GET_APK_LIST_BEFORE
  }
}

export function getApkList() {
  const url = ROOT_URL + 'apk-list';
  const request = axios.get(url);

  return {
    type: GET_APK_LIST,
    payload: request
  }
}

export function resignApkBefore() {  
  return {
    type: RESIGN_APK_BEFORE
  }
}

export function resignApk(selectedApk) {
  const url = ROOT_URL + 'resign';
  const request = axios.post(url, { selectedApk });

  return {
    type: RESIGN_APK,
    payload: request
  }
}