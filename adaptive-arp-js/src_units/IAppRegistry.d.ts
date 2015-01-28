/// <reference path="IAcceleration.d.ts" />
/// <reference path="IAds.d.ts" />
/// <reference path="IAlarm.d.ts" />
/// <reference path="IAmbientLight.d.ts" />
/// <reference path="IAnalytics.d.ts" />
/// <reference path="IAudio.d.ts" />
/// <reference path="IBarcode.d.ts" />
/// <reference path="IBarometer.d.ts" />
/// <reference path="IBluetooth.d.ts" />
/// <reference path="IBrowser.d.ts" />
/// <reference path="ICalendar.d.ts" />
/// <reference path="ICamera.d.ts" />
/// <reference path="ICapabilities.d.ts" />
/// <reference path="ICloud.d.ts" />
/// <reference path="ICompression.d.ts" />
/// <reference path="IConcurrent.d.ts" />
/// <reference path="IContact.d.ts" />
/// <reference path="ICrypto.d.ts" />
/// <reference path="IDataStream.d.ts" />
/// <reference path="IDatabase.d.ts" />
/// <reference path="IDesktop.d.ts" />
/// <reference path="IDevice.d.ts" />
/// <reference path="IDisplay.d.ts" />
/// <reference path="IFacebook.d.ts" />
/// <reference path="IFile.d.ts" />
/// <reference path="IFileSystem.d.ts" />
/// <reference path="IGeolocation.d.ts" />
/// <reference path="IGlobalization.d.ts" />
/// <reference path="IGooglePlus.d.ts" />
/// <reference path="IGyroscope.d.ts" />
/// <reference path="IImaging.d.ts" />
/// <reference path="IInternalStorage.d.ts" />
/// <reference path="ILifecycle.d.ts" />
/// <reference path="ILinkedIn.d.ts" />
/// <reference path="ILogging.d.ts" />
/// <reference path="IMagnetometer.d.ts" />
/// <reference path="IMail.d.ts" />
/// <reference path="IManagement.d.ts" />
/// <reference path="IMap.d.ts" />
/// <reference path="IMessaging.d.ts" />
/// <reference path="INFC.d.ts" />
/// <reference path="INetworkInfo.d.ts" />
/// <reference path="INetworkNaming.d.ts" />
/// <reference path="INetworkReachability.d.ts" />
/// <reference path="INetworkStatus.d.ts" />
/// <reference path="INotification.d.ts" />
/// <reference path="INotificationLocal.d.ts" />
/// <reference path="IOAuth.d.ts" />
/// <reference path="IOCR.d.ts" />
/// <reference path="IOS.d.ts" />
/// <reference path="IOpenId.d.ts" />
/// <reference path="IPrinting.d.ts" />
/// <reference path="IProximity.d.ts" />
/// <reference path="IQRCode.d.ts" />
/// <reference path="IRSS.d.ts" />
/// <reference path="IRuntime.d.ts" />
/// <reference path="ISecurity.d.ts" />
/// <reference path="IService.d.ts" />
/// <reference path="ISettings.d.ts" />
/// <reference path="ISocket.d.ts" />
/// <reference path="IStore.d.ts" />
/// <reference path="ITelephony.d.ts" />
/// <reference path="ITimer.d.ts" />
/// <reference path="ITwitter.d.ts" />
/// <reference path="IUI.d.ts" />
/// <reference path="IUpdate.d.ts" />
/// <reference path="IVibration.d.ts" />
/// <reference path="IVideo.d.ts" />
/// <reference path="IWallet.d.ts" />
/// <reference path="IXML.d.ts" />
/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Interface to retrieve auto-registered service implementation references.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IAppRegistry
    */
    interface IAppRegistry {
        /**
           @method
           Returns a reference to the registered AccelerationBridge.

           @return {Adaptive.AccelerationBridge} reference or null if a bridge of this type is not registered.
        */
        getAccelerationBridge(): IAcceleration;
        /**
           @method
           Returns a reference to the registered AdsBridge.

           @return {Adaptive.AdsBridge} reference or null if a bridge of this type is not registered.
        */
        getAdsBridge(): IAds;
        /**
           @method
           Returns a reference to the registered AlarmBridge.

           @return {Adaptive.AlarmBridge} reference or null if a bridge of this type is not registered.
        */
        getAlarmBridge(): IAlarm;
        /**
           @method
           Returns a reference to the registered AmbientLightBridge.

           @return {Adaptive.AmbientLightBridge} reference or null if a bridge of this type is not registered.
        */
        getAmbientLightBridge(): IAmbientLight;
        /**
           @method
           Returns a reference to the registered AnalyticsBridge.

           @return {Adaptive.AnalyticsBridge} reference or null if a bridge of this type is not registered.
        */
        getAnalyticsBridge(): IAnalytics;
        /**
           @method
           Returns a reference to the registered AudioBridge.

           @return {Adaptive.AudioBridge} reference or null if a bridge of this type is not registered.
        */
        getAudioBridge(): IAudio;
        /**
           @method
           Returns a reference to the registered BarcodeBridge.

           @return {Adaptive.BarcodeBridge} reference or null if a bridge of this type is not registered.
        */
        getBarcodeBridge(): IBarcode;
        /**
           @method
           Returns a reference to the registered BarometerBridge.

           @return {Adaptive.BarometerBridge} reference or null if a bridge of this type is not registered.
        */
        getBarometerBridge(): IBarometer;
        /**
           @method
           Returns a reference to the registered BluetoothBridge.

           @return {Adaptive.BluetoothBridge} reference or null if a bridge of this type is not registered.
        */
        getBluetoothBridge(): IBluetooth;
        /**
           @method
           Returns a reference to the registered BrowserBridge.

           @return {Adaptive.BrowserBridge} reference or null if a bridge of this type is not registered.
        */
        getBrowserBridge(): IBrowser;
        /**
           @method
           Returns a reference to the registered CalendarBridge.

           @return {Adaptive.CalendarBridge} reference or null if a bridge of this type is not registered.
        */
        getCalendarBridge(): ICalendar;
        /**
           @method
           Returns a reference to the registered CameraBridge.

           @return {Adaptive.CameraBridge} reference or null if a bridge of this type is not registered.
        */
        getCameraBridge(): ICamera;
        /**
           @method
           Returns a reference to the registered CapabilitiesBridge.

           @return {Adaptive.CapabilitiesBridge} reference or null if a bridge of this type is not registered.
        */
        getCapabilitiesBridge(): ICapabilities;
        /**
           @method
           Returns a reference to the registered CloudBridge.

           @return {Adaptive.CloudBridge} reference or null if a bridge of this type is not registered.
        */
        getCloudBridge(): ICloud;
        /**
           @method
           Returns a reference to the registered CompressionBridge.

           @return {Adaptive.CompressionBridge} reference or null if a bridge of this type is not registered.
        */
        getCompressionBridge(): ICompression;
        /**
           @method
           Returns a reference to the registered ConcurrentBridge.

           @return {Adaptive.ConcurrentBridge} reference or null if a bridge of this type is not registered.
        */
        getConcurrentBridge(): IConcurrent;
        /**
           @method
           Returns a reference to the registered ContactBridge.

           @return {Adaptive.ContactBridge} reference or null if a bridge of this type is not registered.
        */
        getContactBridge(): IContact;
        /**
           @method
           Returns a reference to the registered CryptoBridge.

           @return {Adaptive.CryptoBridge} reference or null if a bridge of this type is not registered.
        */
        getCryptoBridge(): ICrypto;
        /**
           @method
           Returns a reference to the registered DataStreamBridge.

           @return {Adaptive.DataStreamBridge} reference or null if a bridge of this type is not registered.
        */
        getDataStreamBridge(): IDataStream;
        /**
           @method
           Returns a reference to the registered DatabaseBridge.

           @return {Adaptive.DatabaseBridge} reference or null if a bridge of this type is not registered.
        */
        getDatabaseBridge(): IDatabase;
        /**
           @method
           Returns a reference to the registered DesktopBridge.

           @return {Adaptive.DesktopBridge} reference or null if a bridge of this type is not registered.
        */
        getDesktopBridge(): IDesktop;
        /**
           @method
           Returns a reference to the registered DeviceBridge.

           @return {Adaptive.DeviceBridge} reference or null if a bridge of this type is not registered.
        */
        getDeviceBridge(): IDevice;
        /**
           @method
           Returns a reference to the registered DisplayBridge.

           @return {Adaptive.DisplayBridge} reference or null if a bridge of this type is not registered.
        */
        getDisplayBridge(): IDisplay;
        /**
           @method
           Returns a reference to the registered FacebookBridge.

           @return {Adaptive.FacebookBridge} reference or null if a bridge of this type is not registered.
        */
        getFacebookBridge(): IFacebook;
        /**
           @method
           Returns a reference to the registered FileBridge.

           @return {Adaptive.FileBridge} reference or null if a bridge of this type is not registered.
        */
        getFileBridge(): IFile;
        /**
           @method
           Returns a reference to the registered FileSystemBridge.

           @return {Adaptive.FileSystemBridge} reference or null if a bridge of this type is not registered.
        */
        getFileSystemBridge(): IFileSystem;
        /**
           @method
           Returns a reference to the registered GeolocationBridge.

           @return {Adaptive.GeolocationBridge} reference or null if a bridge of this type is not registered.
        */
        getGeolocationBridge(): IGeolocation;
        /**
           @method
           Returns a reference to the registered GlobalizationBridge.

           @return {Adaptive.GlobalizationBridge} reference or null if a bridge of this type is not registered.
        */
        getGlobalizationBridge(): IGlobalization;
        /**
           @method
           Returns a reference to the registered GooglePlusBridge.

           @return {Adaptive.GooglePlusBridge} reference or null if a bridge of this type is not registered.
        */
        getGooglePlusBridge(): IGooglePlus;
        /**
           @method
           Returns a reference to the registered GyroscopeBridge.

           @return {Adaptive.GyroscopeBridge} reference or null if a bridge of this type is not registered.
        */
        getGyroscopeBridge(): IGyroscope;
        /**
           @method
           Returns a reference to the registered ImagingBridge.

           @return {Adaptive.ImagingBridge} reference or null if a bridge of this type is not registered.
        */
        getImagingBridge(): IImaging;
        /**
           @method
           Returns a reference to the registered InternalStorageBridge.

           @return {Adaptive.InternalStorageBridge} reference or null if a bridge of this type is not registered.
        */
        getInternalStorageBridge(): IInternalStorage;
        /**
           @method
           Returns a reference to the registered LifecycleBridge.

           @return {Adaptive.LifecycleBridge} reference or null if a bridge of this type is not registered.
        */
        getLifecycleBridge(): ILifecycle;
        /**
           @method
           Returns a reference to the registered LinkedInBridge.

           @return {Adaptive.LinkedInBridge} reference or null if a bridge of this type is not registered.
        */
        getLinkedInBridge(): ILinkedIn;
        /**
           @method
           Returns a reference to the registered LoggingBridge.

           @return {Adaptive.LoggingBridge} reference or null if a bridge of this type is not registered.
        */
        getLoggingBridge(): ILogging;
        /**
           @method
           Returns a reference to the registered MagnetometerBridge.

           @return {Adaptive.MagnetometerBridge} reference or null if a bridge of this type is not registered.
        */
        getMagnetometerBridge(): IMagnetometer;
        /**
           @method
           Returns a reference to the registered MailBridge.

           @return {Adaptive.MailBridge} reference or null if a bridge of this type is not registered.
        */
        getMailBridge(): IMail;
        /**
           @method
           Returns a reference to the registered ManagementBridge.

           @return {Adaptive.ManagementBridge} reference or null if a bridge of this type is not registered.
        */
        getManagementBridge(): IManagement;
        /**
           @method
           Returns a reference to the registered MapBridge.

           @return {Adaptive.MapBridge} reference or null if a bridge of this type is not registered.
        */
        getMapBridge(): IMap;
        /**
           @method
           Returns a reference to the registered MessagingBridge.

           @return {Adaptive.MessagingBridge} reference or null if a bridge of this type is not registered.
        */
        getMessagingBridge(): IMessaging;
        /**
           @method
           Returns a reference to the registered NFCBridge.

           @return {Adaptive.NFCBridge} reference or null if a bridge of this type is not registered.
        */
        getNFCBridge(): INFC;
        /**
           @method
           Returns a reference to the registered NetworkInfoBridge.

           @return {Adaptive.NetworkInfoBridge} reference or null if a bridge of this type is not registered.
        */
        getNetworkInfoBridge(): INetworkInfo;
        /**
           @method
           Returns a reference to the registered NetworkNamingBridge.

           @return {Adaptive.NetworkNamingBridge} reference or null if a bridge of this type is not registered.
        */
        getNetworkNamingBridge(): INetworkNaming;
        /**
           @method
           Returns a reference to the registered NetworkReachabilityBridge.

           @return {Adaptive.NetworkReachabilityBridge} reference or null if a bridge of this type is not registered.
        */
        getNetworkReachabilityBridge(): INetworkReachability;
        /**
           @method
           Returns a reference to the registered NetworkStatusBridge.

           @return {Adaptive.NetworkStatusBridge} reference or null if a bridge of this type is not registered.
        */
        getNetworkStatusBridge(): INetworkStatus;
        /**
           @method
           Returns a reference to the registered NotificationBridge.

           @return {Adaptive.NotificationBridge} reference or null if a bridge of this type is not registered.
        */
        getNotificationBridge(): INotification;
        /**
           @method
           Returns a reference to the registered NotificationLocalBridge.

           @return {Adaptive.NotificationLocalBridge} reference or null if a bridge of this type is not registered.
        */
        getNotificationLocalBridge(): INotificationLocal;
        /**
           @method
           Returns a reference to the registered OAuthBridge.

           @return {Adaptive.OAuthBridge} reference or null if a bridge of this type is not registered.
        */
        getOAuthBridge(): IOAuth;
        /**
           @method
           Returns a reference to the registered OCRBridge.

           @return {Adaptive.OCRBridge} reference or null if a bridge of this type is not registered.
        */
        getOCRBridge(): IOCR;
        /**
           @method
           Returns a reference to the registered OSBridge.

           @return {Adaptive.OSBridge} reference or null if a bridge of this type is not registered.
        */
        getOSBridge(): IOS;
        /**
           @method
           Returns a reference to the registered OpenIdBridge.

           @return {Adaptive.OpenIdBridge} reference or null if a bridge of this type is not registered.
        */
        getOpenIdBridge(): IOpenId;
        /**
           @method
           Returns a reference to the registered PrintingBridge.

           @return {Adaptive.PrintingBridge} reference or null if a bridge of this type is not registered.
        */
        getPrintingBridge(): IPrinting;
        /**
           @method
           Returns a reference to the registered ProximityBridge.

           @return {Adaptive.ProximityBridge} reference or null if a bridge of this type is not registered.
        */
        getProximityBridge(): IProximity;
        /**
           @method
           Returns a reference to the registered QRCodeBridge.

           @return {Adaptive.QRCodeBridge} reference or null if a bridge of this type is not registered.
        */
        getQRCodeBridge(): IQRCode;
        /**
           @method
           Returns a reference to the registered RSSBridge.

           @return {Adaptive.RSSBridge} reference or null if a bridge of this type is not registered.
        */
        getRSSBridge(): IRSS;
        /**
           @method
           Returns a reference to the registered RuntimeBridge.

           @return {Adaptive.RuntimeBridge} reference or null if a bridge of this type is not registered.
        */
        getRuntimeBridge(): IRuntime;
        /**
           @method
           Returns a reference to the registered SecurityBridge.

           @return {Adaptive.SecurityBridge} reference or null if a bridge of this type is not registered.
        */
        getSecurityBridge(): ISecurity;
        /**
           @method
           Returns a reference to the registered ServiceBridge.

           @return {Adaptive.ServiceBridge} reference or null if a bridge of this type is not registered.
        */
        getServiceBridge(): IService;
        /**
           @method
           Returns a reference to the registered SettingsBridge.

           @return {Adaptive.SettingsBridge} reference or null if a bridge of this type is not registered.
        */
        getSettingsBridge(): ISettings;
        /**
           @method
           Returns a reference to the registered SocketBridge.

           @return {Adaptive.SocketBridge} reference or null if a bridge of this type is not registered.
        */
        getSocketBridge(): ISocket;
        /**
           @method
           Returns a reference to the registered StoreBridge.

           @return {Adaptive.StoreBridge} reference or null if a bridge of this type is not registered.
        */
        getStoreBridge(): IStore;
        /**
           @method
           Returns a reference to the registered TelephonyBridge.

           @return {Adaptive.TelephonyBridge} reference or null if a bridge of this type is not registered.
        */
        getTelephonyBridge(): ITelephony;
        /**
           @method
           Returns a reference to the registered TimerBridge.

           @return {Adaptive.TimerBridge} reference or null if a bridge of this type is not registered.
        */
        getTimerBridge(): ITimer;
        /**
           @method
           Returns a reference to the registered TwitterBridge.

           @return {Adaptive.TwitterBridge} reference or null if a bridge of this type is not registered.
        */
        getTwitterBridge(): ITwitter;
        /**
           @method
           Returns a reference to the registered UIBridge.

           @return {Adaptive.UIBridge} reference or null if a bridge of this type is not registered.
        */
        getUIBridge(): IUI;
        /**
           @method
           Returns a reference to the registered UpdateBridge.

           @return {Adaptive.UpdateBridge} reference or null if a bridge of this type is not registered.
        */
        getUpdateBridge(): IUpdate;
        /**
           @method
           Returns a reference to the registered VibrationBridge.

           @return {Adaptive.VibrationBridge} reference or null if a bridge of this type is not registered.
        */
        getVibrationBridge(): IVibration;
        /**
           @method
           Returns a reference to the registered VideoBridge.

           @return {Adaptive.VideoBridge} reference or null if a bridge of this type is not registered.
        */
        getVideoBridge(): IVideo;
        /**
           @method
           Returns a reference to the registered WalletBridge.

           @return {Adaptive.WalletBridge} reference or null if a bridge of this type is not registered.
        */
        getWalletBridge(): IWallet;
        /**
           @method
           Returns a reference to the registered XMLBridge.

           @return {Adaptive.XMLBridge} reference or null if a bridge of this type is not registered.
        */
        getXMLBridge(): IXML;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
}
