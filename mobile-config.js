App.info({
  id: 'com.bifty.wallet',
  name: '비프티',
  description: '안전한 상품권 비프티',
  author: 'Bift Group',
  email: 'contact@bift.com',
  website: 'http://bifty.com',
  version: '0.0.1'
});
// Set up resources such as icons and launch screens.
App.icons({
  // iOS
  // 'iphone': 'resources/icons/ios/icon-60.png',
  // 'iphone_2x': 'resources/icons/ios/icon-60@2x.png',
  // 'iphone_3x': 'resources/icons/ios/icon-60@3x.png',

  // Android
  // 'android_ldpi': 'resources/icons/android/drawable-ldpi.png',
  'android_hdpi': 'resources/icons/android/drawable-hdpi.png',
  'android_mdpi': 'resources/icons/android/drawable-mdpi.png',
  'android_xhdpi': 'resources/icons/android/drawable-xhdpi.png',
  'android_xxhdpi': 'resources/icons/android/drawable-xxhdpi.png',
  'android_xxxhdpi': 'resources/icons/android/drawable-xxxhdpi.png',
});
//
App.launchScreens({
  // 'iphone': 'resources/splash/ios/Default.png',
  // 'iphone_2x': 'resources/splash/ios/Default@2x.png',
  // 'iphone5': 'resources/splash/ios/Default-586h@2x.png',
  // 'iphone6': 'resources/splash/ios/Default-iPhone6.png',
  // 'iphone6p_portrait': 'splash/Default-iPhone6Plus.png',
  // 'android_ldpi_portrait': 'resources/splash/android/drawable-ldpi.png',
  'android_mdpi_portrait': 'resources/splash/android/drawable-mdpi.png',
  'android_hdpi_portrait': 'resources/splash/android/drawable-hdpi.png',
  'android_xhdpi_portrait': 'resources/splash/android/drawable-xhdpi.png',
  'android_xxhdpi_portrait': 'resources/splash/android/drawable-xxhdpi.png',
  'android_xxxhdpi_portrait': 'resources/splash/android/drawable-xxxhdpi.png',
  // More screen sizes and platforms...
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

// // Set PhoneGap/Cordova preferences.
// App.setPreference('BackgroundColor', '0xff0000ff');
// App.setPreference('HideKeyboardFormAccessoryBar', true);
// App.setPreference('Orientation', 'portrait');
// App.setPreference('Orientation', 'all', 'ios');
// // Pass preferences for a particular PhoneGap/Cordova plugin.
//
// // Add custom tags for a particular PhoneGap/Cordova plugin to the end of the
// // generated config.xml. 'Universal Links' is shown as an example here.
// App.appendToConfig(`
//   <universal-links>
//     <host name="localhost:3000" />
//   </universal-links>
// `);
