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
module Adaptive {

     /**
        @private
        @property {number} registeredCounter
        Global unique id for listeners and callbacks.
     */
     export var registeredCounter : number = 0;

     /**
        @private
        @property {string} bridgePath
        Base url for for http/https JSON requests.
     */
     export var bridgePath : string = "https://adaptiveapp";

     /**
        @class Adaptive.IDictionary
        @private
        Utility interface for Dictionary type support.
     */
     export interface IDictionary<V> {
          add(key: string, value: V): void;
          remove(key: string): void;
          containsKey(key: string): boolean;
          keys(): string[];
          values(): V[];
     }

     /**
        @private
        @class Adaptive.Dictionary
        Utility class for Dictionary type support.
     */
     export class Dictionary<V> implements IDictionary<V>{
     
         _keys: Array<string> = new Array<string>();
         _values: Array<V> = new Array<V>();
     
         constructor(init: { key: string; value: V; }[]) {
     
             for (var x = 0; x < init.length; x++) {
                 this[init[x].key] = init[x].value;
                 this._keys.push(init[x].key);
                 this._values.push(init[x].value);
             }
         }
     
         add(key: string, value: V) {
             this[key] = value;
             this._keys.push(key);
             this._values.push(value);
         }
     
         remove(key: string) {
             var index = this._keys.indexOf(key, 0);
             this._keys.splice(index, 1);
             this._values.splice(index, 1);
     
             delete this[key];
         }
     
         keys(): string[] {
             return this._keys;
         }
     
         values(): V[] {
             return this._values;
         }
     
         containsKey(key: string) {
             if (typeof this[key] === "undefined") {
                 return false;
             }
     
             return true;
         }
     
         toLookup(): IDictionary<V> {
             return this;
         }
     }

     /**
        This is a marker interface for bridge classes that invoke delegates.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     /**
        @class Adaptive.APIBridge
     */
     export interface APIBridge {
          /**
             @method
             Invokes the given method specified in the API request object.
             @param request APIRequest object containing method name and parameters.
             @return {Adaptive.APIResponse} Object with JSON response or a zero length string is the response is asynchronous.
          */
          invoke(request:APIRequest) : APIResponse;
     }
     /**
        Master interface for all the Groups and Types of Interfaces os the Project

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAdaptiveRP
     */
     export interface IAdaptiveRP {
          /**
             @method
             Method that returns the API group of the implementation
             @return {Adaptive.IAdaptiveRPGroup} API Group name.
             @since ARP1.0
          */
          getAPIGroup() : IAdaptiveRPGroup;
          /**
             @method
             Method that returns the API version of the implementation.
             @return {string} API Version string.
             @since ARP1.0
          */
          getAPIVersion() : string;
     }
     /**
        @class Adaptive.IAppContext
     */
     /**
        @class Adaptive.IAppContextWebview
     */
     /**
        Interface to retrieve auto-registered service implementation references.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAppRegistry
     */
     export interface IAppRegistry {
          /**
             @abstract
             Returns a reference to the registered AccelerationBridge.

             @return {Adaptive.AccelerationBridge} reference or null if a bridge of this type is not registered.
          */
          getAccelerationBridge() : IAcceleration;

          /**
             @abstract
             Returns a reference to the registered AdsBridge.

             @return {Adaptive.AdsBridge} reference or null if a bridge of this type is not registered.
          */
          getAdsBridge() : IAds;

          /**
             @abstract
             Returns a reference to the registered AlarmBridge.

             @return {Adaptive.AlarmBridge} reference or null if a bridge of this type is not registered.
          */
          getAlarmBridge() : IAlarm;

          /**
             @abstract
             Returns a reference to the registered AmbientLightBridge.

             @return {Adaptive.AmbientLightBridge} reference or null if a bridge of this type is not registered.
          */
          getAmbientLightBridge() : IAmbientLight;

          /**
             @abstract
             Returns a reference to the registered AnalyticsBridge.

             @return {Adaptive.AnalyticsBridge} reference or null if a bridge of this type is not registered.
          */
          getAnalyticsBridge() : IAnalytics;

          /**
             @abstract
             Returns a reference to the registered AudioBridge.

             @return {Adaptive.AudioBridge} reference or null if a bridge of this type is not registered.
          */
          getAudioBridge() : IAudio;

          /**
             @abstract
             Returns a reference to the registered BarcodeBridge.

             @return {Adaptive.BarcodeBridge} reference or null if a bridge of this type is not registered.
          */
          getBarcodeBridge() : IBarcode;

          /**
             @abstract
             Returns a reference to the registered BarometerBridge.

             @return {Adaptive.BarometerBridge} reference or null if a bridge of this type is not registered.
          */
          getBarometerBridge() : IBarometer;

          /**
             @abstract
             Returns a reference to the registered BluetoothBridge.

             @return {Adaptive.BluetoothBridge} reference or null if a bridge of this type is not registered.
          */
          getBluetoothBridge() : IBluetooth;

          /**
             @abstract
             Returns a reference to the registered BrowserBridge.

             @return {Adaptive.BrowserBridge} reference or null if a bridge of this type is not registered.
          */
          getBrowserBridge() : IBrowser;

          /**
             @abstract
             Returns a reference to the registered CalendarBridge.

             @return {Adaptive.CalendarBridge} reference or null if a bridge of this type is not registered.
          */
          getCalendarBridge() : ICalendar;

          /**
             @abstract
             Returns a reference to the registered CameraBridge.

             @return {Adaptive.CameraBridge} reference or null if a bridge of this type is not registered.
          */
          getCameraBridge() : ICamera;

          /**
             @abstract
             Returns a reference to the registered CapabilitiesBridge.

             @return {Adaptive.CapabilitiesBridge} reference or null if a bridge of this type is not registered.
          */
          getCapabilitiesBridge() : ICapabilities;

          /**
             @abstract
             Returns a reference to the registered CloudBridge.

             @return {Adaptive.CloudBridge} reference or null if a bridge of this type is not registered.
          */
          getCloudBridge() : ICloud;

          /**
             @abstract
             Returns a reference to the registered CompressionBridge.

             @return {Adaptive.CompressionBridge} reference or null if a bridge of this type is not registered.
          */
          getCompressionBridge() : ICompression;

          /**
             @abstract
             Returns a reference to the registered ConcurrentBridge.

             @return {Adaptive.ConcurrentBridge} reference or null if a bridge of this type is not registered.
          */
          getConcurrentBridge() : IConcurrent;

          /**
             @abstract
             Returns a reference to the registered ContactBridge.

             @return {Adaptive.ContactBridge} reference or null if a bridge of this type is not registered.
          */
          getContactBridge() : IContact;

          /**
             @abstract
             Returns a reference to the registered CryptoBridge.

             @return {Adaptive.CryptoBridge} reference or null if a bridge of this type is not registered.
          */
          getCryptoBridge() : ICrypto;

          /**
             @abstract
             Returns a reference to the registered DataStreamBridge.

             @return {Adaptive.DataStreamBridge} reference or null if a bridge of this type is not registered.
          */
          getDataStreamBridge() : IDataStream;

          /**
             @abstract
             Returns a reference to the registered DatabaseBridge.

             @return {Adaptive.DatabaseBridge} reference or null if a bridge of this type is not registered.
          */
          getDatabaseBridge() : IDatabase;

          /**
             @abstract
             Returns a reference to the registered DesktopBridge.

             @return {Adaptive.DesktopBridge} reference or null if a bridge of this type is not registered.
          */
          getDesktopBridge() : IDesktop;

          /**
             @abstract
             Returns a reference to the registered DeviceBridge.

             @return {Adaptive.DeviceBridge} reference or null if a bridge of this type is not registered.
          */
          getDeviceBridge() : IDevice;

          /**
             @abstract
             Returns a reference to the registered DisplayBridge.

             @return {Adaptive.DisplayBridge} reference or null if a bridge of this type is not registered.
          */
          getDisplayBridge() : IDisplay;

          /**
             @abstract
             Returns a reference to the registered FacebookBridge.

             @return {Adaptive.FacebookBridge} reference or null if a bridge of this type is not registered.
          */
          getFacebookBridge() : IFacebook;

          /**
             @abstract
             Returns a reference to the registered FileBridge.

             @return {Adaptive.FileBridge} reference or null if a bridge of this type is not registered.
          */
          getFileBridge() : IFile;

          /**
             @abstract
             Returns a reference to the registered FileSystemBridge.

             @return {Adaptive.FileSystemBridge} reference or null if a bridge of this type is not registered.
          */
          getFileSystemBridge() : IFileSystem;

          /**
             @abstract
             Returns a reference to the registered GeolocationBridge.

             @return {Adaptive.GeolocationBridge} reference or null if a bridge of this type is not registered.
          */
          getGeolocationBridge() : IGeolocation;

          /**
             @abstract
             Returns a reference to the registered GlobalizationBridge.

             @return {Adaptive.GlobalizationBridge} reference or null if a bridge of this type is not registered.
          */
          getGlobalizationBridge() : IGlobalization;

          /**
             @abstract
             Returns a reference to the registered GooglePlusBridge.

             @return {Adaptive.GooglePlusBridge} reference or null if a bridge of this type is not registered.
          */
          getGooglePlusBridge() : IGooglePlus;

          /**
             @abstract
             Returns a reference to the registered GyroscopeBridge.

             @return {Adaptive.GyroscopeBridge} reference or null if a bridge of this type is not registered.
          */
          getGyroscopeBridge() : IGyroscope;

          /**
             @abstract
             Returns a reference to the registered ImagingBridge.

             @return {Adaptive.ImagingBridge} reference or null if a bridge of this type is not registered.
          */
          getImagingBridge() : IImaging;

          /**
             @abstract
             Returns a reference to the registered InternalStorageBridge.

             @return {Adaptive.InternalStorageBridge} reference or null if a bridge of this type is not registered.
          */
          getInternalStorageBridge() : IInternalStorage;

          /**
             @abstract
             Returns a reference to the registered LifecycleBridge.

             @return {Adaptive.LifecycleBridge} reference or null if a bridge of this type is not registered.
          */
          getLifecycleBridge() : ILifecycle;

          /**
             @abstract
             Returns a reference to the registered LinkedInBridge.

             @return {Adaptive.LinkedInBridge} reference or null if a bridge of this type is not registered.
          */
          getLinkedInBridge() : ILinkedIn;

          /**
             @abstract
             Returns a reference to the registered LoggingBridge.

             @return {Adaptive.LoggingBridge} reference or null if a bridge of this type is not registered.
          */
          getLoggingBridge() : ILogging;

          /**
             @abstract
             Returns a reference to the registered MagnetometerBridge.

             @return {Adaptive.MagnetometerBridge} reference or null if a bridge of this type is not registered.
          */
          getMagnetometerBridge() : IMagnetometer;

          /**
             @abstract
             Returns a reference to the registered MailBridge.

             @return {Adaptive.MailBridge} reference or null if a bridge of this type is not registered.
          */
          getMailBridge() : IMail;

          /**
             @abstract
             Returns a reference to the registered ManagementBridge.

             @return {Adaptive.ManagementBridge} reference or null if a bridge of this type is not registered.
          */
          getManagementBridge() : IManagement;

          /**
             @abstract
             Returns a reference to the registered MapBridge.

             @return {Adaptive.MapBridge} reference or null if a bridge of this type is not registered.
          */
          getMapBridge() : IMap;

          /**
             @abstract
             Returns a reference to the registered MessagingBridge.

             @return {Adaptive.MessagingBridge} reference or null if a bridge of this type is not registered.
          */
          getMessagingBridge() : IMessaging;

          /**
             @abstract
             Returns a reference to the registered NFCBridge.

             @return {Adaptive.NFCBridge} reference or null if a bridge of this type is not registered.
          */
          getNFCBridge() : INFC;

          /**
             @abstract
             Returns a reference to the registered NetworkInfoBridge.

             @return {Adaptive.NetworkInfoBridge} reference or null if a bridge of this type is not registered.
          */
          getNetworkInfoBridge() : INetworkInfo;

          /**
             @abstract
             Returns a reference to the registered NetworkNamingBridge.

             @return {Adaptive.NetworkNamingBridge} reference or null if a bridge of this type is not registered.
          */
          getNetworkNamingBridge() : INetworkNaming;

          /**
             @abstract
             Returns a reference to the registered NetworkReachabilityBridge.

             @return {Adaptive.NetworkReachabilityBridge} reference or null if a bridge of this type is not registered.
          */
          getNetworkReachabilityBridge() : INetworkReachability;

          /**
             @abstract
             Returns a reference to the registered NetworkStatusBridge.

             @return {Adaptive.NetworkStatusBridge} reference or null if a bridge of this type is not registered.
          */
          getNetworkStatusBridge() : INetworkStatus;

          /**
             @abstract
             Returns a reference to the registered NotificationBridge.

             @return {Adaptive.NotificationBridge} reference or null if a bridge of this type is not registered.
          */
          getNotificationBridge() : INotification;

          /**
             @abstract
             Returns a reference to the registered NotificationLocalBridge.

             @return {Adaptive.NotificationLocalBridge} reference or null if a bridge of this type is not registered.
          */
          getNotificationLocalBridge() : INotificationLocal;

          /**
             @abstract
             Returns a reference to the registered OAuthBridge.

             @return {Adaptive.OAuthBridge} reference or null if a bridge of this type is not registered.
          */
          getOAuthBridge() : IOAuth;

          /**
             @abstract
             Returns a reference to the registered OCRBridge.

             @return {Adaptive.OCRBridge} reference or null if a bridge of this type is not registered.
          */
          getOCRBridge() : IOCR;

          /**
             @abstract
             Returns a reference to the registered OSBridge.

             @return {Adaptive.OSBridge} reference or null if a bridge of this type is not registered.
          */
          getOSBridge() : IOS;

          /**
             @abstract
             Returns a reference to the registered OpenIdBridge.

             @return {Adaptive.OpenIdBridge} reference or null if a bridge of this type is not registered.
          */
          getOpenIdBridge() : IOpenId;

          /**
             @abstract
             Returns a reference to the registered PrintingBridge.

             @return {Adaptive.PrintingBridge} reference or null if a bridge of this type is not registered.
          */
          getPrintingBridge() : IPrinting;

          /**
             @abstract
             Returns a reference to the registered ProximityBridge.

             @return {Adaptive.ProximityBridge} reference or null if a bridge of this type is not registered.
          */
          getProximityBridge() : IProximity;

          /**
             @abstract
             Returns a reference to the registered QRCodeBridge.

             @return {Adaptive.QRCodeBridge} reference or null if a bridge of this type is not registered.
          */
          getQRCodeBridge() : IQRCode;

          /**
             @abstract
             Returns a reference to the registered RSSBridge.

             @return {Adaptive.RSSBridge} reference or null if a bridge of this type is not registered.
          */
          getRSSBridge() : IRSS;

          /**
             @abstract
             Returns a reference to the registered RuntimeBridge.

             @return {Adaptive.RuntimeBridge} reference or null if a bridge of this type is not registered.
          */
          getRuntimeBridge() : IRuntime;

          /**
             @abstract
             Returns a reference to the registered SecurityBridge.

             @return {Adaptive.SecurityBridge} reference or null if a bridge of this type is not registered.
          */
          getSecurityBridge() : ISecurity;

          /**
             @abstract
             Returns a reference to the registered ServiceBridge.

             @return {Adaptive.ServiceBridge} reference or null if a bridge of this type is not registered.
          */
          getServiceBridge() : IService;

          /**
             @abstract
             Returns a reference to the registered SettingsBridge.

             @return {Adaptive.SettingsBridge} reference or null if a bridge of this type is not registered.
          */
          getSettingsBridge() : ISettings;

          /**
             @abstract
             Returns a reference to the registered SocketBridge.

             @return {Adaptive.SocketBridge} reference or null if a bridge of this type is not registered.
          */
          getSocketBridge() : ISocket;

          /**
             @abstract
             Returns a reference to the registered StoreBridge.

             @return {Adaptive.StoreBridge} reference or null if a bridge of this type is not registered.
          */
          getStoreBridge() : IStore;

          /**
             @abstract
             Returns a reference to the registered TelephonyBridge.

             @return {Adaptive.TelephonyBridge} reference or null if a bridge of this type is not registered.
          */
          getTelephonyBridge() : ITelephony;

          /**
             @abstract
             Returns a reference to the registered TimerBridge.

             @return {Adaptive.TimerBridge} reference or null if a bridge of this type is not registered.
          */
          getTimerBridge() : ITimer;

          /**
             @abstract
             Returns a reference to the registered TwitterBridge.

             @return {Adaptive.TwitterBridge} reference or null if a bridge of this type is not registered.
          */
          getTwitterBridge() : ITwitter;

          /**
             @abstract
             Returns a reference to the registered UIBridge.

             @return {Adaptive.UIBridge} reference or null if a bridge of this type is not registered.
          */
          getUIBridge() : IUI;

          /**
             @abstract
             Returns a reference to the registered UpdateBridge.

             @return {Adaptive.UpdateBridge} reference or null if a bridge of this type is not registered.
          */
          getUpdateBridge() : IUpdate;

          /**
             @abstract
             Returns a reference to the registered VibrationBridge.

             @return {Adaptive.VibrationBridge} reference or null if a bridge of this type is not registered.
          */
          getVibrationBridge() : IVibration;

          /**
             @abstract
             Returns a reference to the registered VideoBridge.

             @return {Adaptive.VideoBridge} reference or null if a bridge of this type is not registered.
          */
          getVideoBridge() : IVideo;

          /**
             @abstract
             Returns a reference to the registered WalletBridge.

             @return {Adaptive.WalletBridge} reference or null if a bridge of this type is not registered.
          */
          getWalletBridge() : IWallet;

          /**
             @abstract
             Returns a reference to the registered XMLBridge.

             @return {Adaptive.XMLBridge} reference or null if a bridge of this type is not registered.
          */
          getXMLBridge() : IXML;

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string;
     }
     /**
        Base application for Application purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseApplication
     */
     export interface IBaseApplication extends IAdaptiveRP {
     }
     /**
        Base application for Callback purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseCallback
     */
     export interface IBaseCallback extends IAdaptiveRP {

          /**
             @abstract
             Retrieve unique id of callback/listener.

             @return {number} Callback/listener unique id.
          */
          getId() : number;

     }
     /**
        Base application for Commerce purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseCommerce
     */
     export interface IBaseCommerce extends IAdaptiveRP {
     }
     /**
        Base application for Communication purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseCommunication
     */
     export interface IBaseCommunication extends IAdaptiveRP {
     }
     /**
        Base application for Data purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseData
     */
     export interface IBaseData extends IAdaptiveRP {
     }
     /**
        Base application for Listener purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseListener
     */
     export interface IBaseListener extends IAdaptiveRP {

          /**
             @abstract
             Retrieve unique id of callback/listener.

             @return {number} Callback/listener unique id.
          */
          getId() : number;

     }
     /**
        Base application for Media purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseMedia
     */
     export interface IBaseMedia extends IAdaptiveRP {
     }
     /**
        Base application for Notification purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseNotification
     */
     export interface IBaseNotification extends IAdaptiveRP {
     }
     /**
        Base application for PIM purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBasePIM
     */
     export interface IBasePIM extends IAdaptiveRP {
     }
     /**
        Base application for Reader purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseReader
     */
     export interface IBaseReader extends IAdaptiveRP {
     }
     /**
        Base application for Security purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseSecurity
     */
     export interface IBaseSecurity extends IAdaptiveRP {
     }
     /**
        Base application for Sensor purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseSensor
     */
     export interface IBaseSensor extends IAdaptiveRP {
     }
     /**
        Base application for Social purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseSocial
     */
     export interface IBaseSocial extends IAdaptiveRP {
     }
     /**
        Base application for System purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseSystem
     */
     export interface IBaseSystem extends IAdaptiveRP {
     }
     /**
        Base application for UI purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseUI
     */
     export interface IBaseUI extends IAdaptiveRP {
     }
     /**
        Base application for Utility purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBaseUtil
     */
     export interface IBaseUtil extends IAdaptiveRP {
     }
     /**
        Interface for Analytics purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAnalytics
     */
     export interface IAnalytics extends IBaseApplication {
     }
     /**
        Interface for Managing the Globalization results

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IGlobalization
     */
     export interface IGlobalization extends IBaseApplication {
          /**
             @method
             Returns the default locale of the application defined in the configuration file
             @return {Adaptive.Locale} Default Locale of the application
             @since ARP1.0
          */
          getDefaultLocale() : Locale;
          /**
             @method
             List of supported locales for the application defined in the configuration file
             @return {Adaptive.Locale[]} List of locales
             @since ARP1.0
          */
          getLocaleSupportedDescriptors() : Array<Locale>;
          /**
             @method
             Gets the text/message corresponding to the given key and locale.
             @param key    to match text
             @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
             @return {string} Localized text.
             @since ARP1.0
          */
          getResourceLiteral(key:string, locale:Locale) : string;
          /**
             @method
             Gets the full application configured literals (key/message pairs) corresponding to the given locale.
             @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
             @return {Adaptive.KeyPair[]} Localized texts in the form of an object.
             @since ARP1.0
          */
          getResourceLiterals(locale:Locale) : Array<KeyPair>;
     }
     /**
        Interface for Managing the Lifecycle listeners

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ILifecycle
     */
     export interface ILifecycle extends IBaseApplication {
          /**
             @method
             Add the listener for the lifecycle of the app
             @param listener Lifecycle listener
             @since ARP1.0
          */
          addLifecycleListener(listener:ILifecycleListener);
          /**
             @method
             Whether the application is in background or not
             @return {boolean} true if the application is in background;false otherwise
             @since ARP1.0
          */
          isBackground() : boolean;
          /**
             @method
             Un-registers an existing listener from receiving lifecycle events.
             @param listener Lifecycle listener
             @since ARP1.0
          */
          removeLifecycleListener(listener:ILifecycleListener);
          /**
             @method
             Removes all existing listeners from receiving lifecycle events.
             @since ARP1.0
          */
          removeLifecycleListeners();
     }
     /**
        Interface for Managing the Management operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IManagement
     */
     export interface IManagement extends IBaseApplication {
     }
     /**
        Interface for Managing the Printing operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IPrinting
     */
     export interface IPrinting extends IBaseApplication {
     }
     /**
        Interface for Managing the Settings operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ISettings
     */
     export interface ISettings extends IBaseApplication {
     }
     /**
        Interface for Managing the Update operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IUpdate
     */
     export interface IUpdate extends IBaseApplication {
     }
     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IContactPhotoResultCallback
     */
     export interface IContactPhotoResultCallback extends IBaseCallback {
          /**
             @method
             This method is called on Error
             @param error returned by the platform
             @since ARP1.0
          */
          onError(error:IContactPhotoResultCallbackError);
          /**
             @method
             This method is called on Result
             @param contactPhoto returned by the platform
             @since ARP1.0
          */
          onResult(contactPhoto:Array<number>);
          /**
             @method
             This method is called on Warning
             @param contactPhoto returned by the platform
             @param warning      returned by the platform
             @since ARP1.0
          */
          onWarning(contactPhoto:Array<number>, warning:IContactPhotoResultCallbackWarning);
     }
     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IContactResultCallback
     */
     export interface IContactResultCallback extends IBaseCallback {
          /**
             @method
             This method is called on Error
             @param error returned by the platform
             @since ARP1.0
          */
          onError(error:IContactResultCallbackError);
          /**
             @method
             This method is called on Result
             @param contacts returned by the platform
             @since ARP1.0
          */
          onResult(contacts:Array<Contact>);
          /**
             @method
             This method is called on Warning
             @param contacts returned by the platform
             @param warning  returned by the platform
             @since ARP1.0
          */
          onWarning(contacts:Array<Contact>, warning:IContactResultCallbackWarning);
     }
     /**
        Interface for Managing the Cloud operations

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IDatabaseResultCallback
     */
     export interface IDatabaseResultCallback extends IBaseCallback {
          /**
             @method
             Result callback for error responses
             @param error Returned error
             @since ARP1.0
          */
          onError(error:IDatabaseResultCallbackError);
          /**
             @method
             Result callback for correct responses
             @param database Returns the database
             @since ARP1.0
          */
          onResult(database:Database);
          /**
             @method
             Result callback for warning responses
             @param database Returns the database
             @param warning  Returned Warning
             @since ARP1.0
          */
          onWarning(database:Database, warning:IDatabaseResultCallbackWarning);
     }
     /**
        Interface for Managing the Cloud operations

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IDatabaseTableResultCallback
     */
     export interface IDatabaseTableResultCallback extends IBaseCallback {
          /**
             @method
             Result callback for error responses
             @param error Returned error
             @since ARP1.0
          */
          onError(error:IDatabaseTableResultCallbackError);
          /**
             @method
             Result callback for correct responses
             @param databaseTable Returns the databaseTable
             @since ARP1.0
          */
          onResult(databaseTable:DatabaseTable);
          /**
             @method
             Result callback for warning responses
             @param databaseTable Returns the databaseTable
             @param warning       Returned Warning
             @since ARP1.0
          */
          onWarning(databaseTable:DatabaseTable, warning:IDatabaseTableResultCallbackWarning);
     }
     /**
        Interface for Managing the File loading callback responses

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IFileDataLoadResultCallback
     */
     export interface IFileDataLoadResultCallback extends IBaseCallback {
          /**
             @method
             Error processing data retrieval/storage operation.
             @param error Error condition encountered.
             @since ARP1.0
          */
          onError(error:IFileDataLoadResultCallbackError);
          /**
             @method
             Result of data retrieval operation.
             @param data Data loaded.
             @since ARP1.0
          */
          onResult(data:Array<number>);
          /**
             @method
             Result with warning of data retrieval/storage operation.
             @param data    File being loaded.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          onWarning(data:Array<number>, warning:IFileDataLoadResultCallbackWarning);
     }
     /**
        Interface for Managing the File store operations callback

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IFileDataStoreResultCallback
     */
     export interface IFileDataStoreResultCallback extends IBaseCallback {
          /**
             @method
             Error processing data retrieval/storage operation.
             @param error Error condition encountered.
             @since ARP1.0
          */
          onError(error:IFileDataStoreResultCallbackError);
          /**
             @method
             Result of data storage operation.
             @param file File reference to stored data.
             @since ARP1.0
          */
          onResult(file:FileDescriptor);
          /**
             @method
             Result with warning of data retrieval/storage operation.
             @param file    File being loaded/stored.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          onWarning(file:FileDescriptor, warning:IFileDataStoreResultCallbackWarning);
     }
     /**
        Interface for Managing the File result operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IFileListResultCallback
     */
     export interface IFileListResultCallback extends IBaseCallback {
          /**
             @method
             On error result of a file operation.
             @param error Error processing the request.
             @since ARP1.0
          */
          onError(error:IFileListResultCallbackError);
          /**
             @method
             On correct result of a file operation.
             @param files Array of resulting files/folders.
             @since ARP1.0
          */
          onResult(files:Array<FileDescriptor>);
          /**
             @method
             On partial result of a file operation, containing a warning.
             @param files   Array of resulting files/folders.
             @param warning Warning condition encountered.
             @since ARP1.0
          */
          onWarning(files:Array<FileDescriptor>, warning:IFileListResultCallbackWarning);
     }
     /**
        Interface for Managing the File operations callback

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IFileResultCallback
     */
     export interface IFileResultCallback extends IBaseCallback {
          /**
             @method
             On error result of a file operation.
             @param error Error processing the request.
             @since ARP1.0
          */
          onError(error:IFileResultCallbackError);
          /**
             @method
             On correct result of a file operation.
             @param storageFile Reference to the resulting file.
             @since ARP1.0
          */
          onResult(storageFile:FileDescriptor);
          /**
             @method
             On partial result of a file operation, containing a warning.
             @param file    Reference to the offending file.
             @param warning Warning processing the request.
             @since ARP1.0
          */
          onWarning(file:FileDescriptor, warning:IFileResultCallbackWarning);
     }
     /**
        Interface for Managing the Messaging responses

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IMessagingCallback
     */
     export interface IMessagingCallback extends IBaseCallback {
          /**
             @method
             This method is called on Error
             @param error returned by the platform
             @since ARP1.0
          */
          onError(error:IMessagingCallbackError);
          /**
             @method
             This method is called on Result
             @param success true if sent;false otherwise
             @since ARP1.0
          */
          onResult(success:boolean);
          /**
             @method
             This method is called on Warning
             @param success true if sent;false otherwise
             @param warning returned by the platform
             @since ARP1.0
          */
          onWarning(success:boolean, warning:IMessagingCallbackWarning);
     }
     /**
        Interface for Managing the Network reachability callback result

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INetworkReachabilityCallback
     */
     export interface INetworkReachabilityCallback extends IBaseCallback {
          /**
             @method
             No data received - error condition, not authorized .
             @param error Error value
             @since ARP1.0
          */
          onError(error:INetworkReachabilityCallbackError);
          /**
             @method
             Correct data received.
             @param reachable Indicates if the host is reachable
             @since ARP1.0
          */
          onResult(reachable:boolean);
          /**
             @method
             Data received with warning - ie Found entries with existing key and values have been overriden
             @param reachable Indicates if the host is reachable
             @param warning   Warning value
             @since ARP1.0
          */
          onWarning(reachable:boolean, warning:INetworkReachabilityCallbackWarning);
     }
     /**
        Interface for Managing the Security result callback

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ISecurityResultCallback
     */
     export interface ISecurityResultCallback extends IBaseCallback {
          /**
             @method
             No data received - error condition, not authorized .
             @param error Error values
             @since ARP1.0
          */
          onError(error:ISecurityResultCallbackError);
          /**
             @method
             Correct data received.
             @param keyValues key and values
             @since ARP1.0
          */
          onResult(keyValues:Array<SecureKeyPair>);
          /**
             @method
             Data received with warning - ie Found entries with existing key and values have been overriden
             @param keyValues key and values
             @param warning   Warning values
             @since ARP1.0
          */
          onWarning(keyValues:Array<SecureKeyPair>, warning:ISecurityResultCallbackWarning);
     }
     /**
        Interface for Managing the Services operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IServiceResultCallback
     */
     export interface IServiceResultCallback extends IBaseCallback {
          /**
             @method
             This method is called on Error
             @param error returned by the platform
             @since ARP1.0
          */
          onError(error:IServiceResultCallbackError);
          /**
             @method
             This method is called on Result
             @param response data
             @since ARP1.0
          */
          onResult(response:ServiceResponse);
          /**
             @method
             This method is called on Warning
             @param response data
             @param warning  returned by the platform
             @since ARP1.0
          */
          onWarning(response:ServiceResponse, warning:IServiceResultCallbackWarning);
     }
     /**
        Interface for Advertising purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAds
     */
     export interface IAds extends IBaseCommerce {
     }
     /**
        Interface for Managing the Store operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IStore
     */
     export interface IStore extends IBaseCommerce {
     }
     /**
        Interface for Managing the Wallet operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IWallet
     */
     export interface IWallet extends IBaseCommerce {
     }
     /**
        Interface for Bluetooth purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBluetooth
     */
     export interface IBluetooth extends IBaseCommunication {
     }
     /**
        Interface for Managing the Network information operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INetworkInfo
     */
     export interface INetworkInfo extends IBaseCommunication {
     }
     /**
        Interface for Managing the Network naming operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INetworkNaming
     */
     export interface INetworkNaming extends IBaseCommunication {
     }
     /**
        Interface for Managing the Network reachability operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INetworkReachability
     */
     export interface INetworkReachability extends IBaseCommunication {
          /**
             @method
             Whether there is connectivity to a host, via domain name or ip address, or not.
             @param host     domain name or ip address of host.
             @param callback Callback called at the end.
             @since ARP1.0
          */
          isNetworkReachable(host:string, callback:INetworkReachabilityCallback);
          /**
             @method
             Whether there is connectivity to an url of a service or not.
             @param url      to look for
             @param callback Callback called at the end
             @since ARP1.0
          */
          isNetworkServiceReachable(url:string, callback:INetworkReachabilityCallback);
     }
     /**
        Interface for Managing the Network status

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INetworkStatus
     */
     export interface INetworkStatus extends IBaseCommunication {
          /**
             @method
             Add the listener for network status changes of the app
             @param listener Listener with the result
             @since ARP1.0
          */
          addNetworkStatusListener(listener:INetworkStatusListener);
          /**
             @method
             Un-registers an existing listener from receiving network status events.
             @param listener Listener with the result
             @since ARP1.0
          */
          removeNetworkStatusListener(listener:INetworkStatusListener);
          /**
             @method
             Removes all existing listeners from receiving network status events.
             @since ARP1.0
          */
          removeNetworkStatusListeners();
     }
     /**
        Interface for Managing the Services operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IService
     */
     export interface IService extends IBaseCommunication {
          /**
             @method
             Get a reference to a registered service by name.
             @param serviceName Name of service.
             @return {Adaptive.Service} A service, if registered, or null of the service does not exist.
             @since ARP1.0
          */
          getService(serviceName:string) : Service;
          /**
             @method
             Request async a service for an Url
             @param serviceRequest Service Request to invoke
             @param service        Service to call
             @param callback       Callback to execute with the result
             @since ARP1.0
          */
          invokeService(serviceRequest:ServiceRequest, service:Service, callback:IServiceResultCallback);
          /**
             @method
             Register a new service
             @param service to register
             @since ARP1.0
          */
          registerService(service:Service);
          /**
             @method
             Unregister all services.
             @since ARP1.0
          */
          unregisterServices();
          /**
             @method
             Unregister a service
             @param service to unregister
             @since ARP1.0
          */
          unregisterService(service:Service);
          /**
             Check whether a service by the given name is registered.
             @param serviceName Name of service.
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_serviceName(serviceName:string) : boolean;
          /**
             Check whether a service by the given name is registered.
             @param serviceName Name of service.
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_service(service:Service) : boolean;
     }
     /**
        Interface for Managing the Socket operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ISocket
     */
     export interface ISocket extends IBaseCommunication {
     }
     /**
        Interface for Managing the Telephony operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ITelephony
     */
     export interface ITelephony extends IBaseCommunication {
          /**
             @method
             Invoke a phone call
             @param number to call
             @return {Adaptive.ITelephonyStatus} Status of the call
             @since ARP1.0
          */
          call(number:string) : ITelephonyStatus;
     }
     /**
        Interface for Managing the Cloud operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ICloud
     */
     export interface ICloud extends IBaseData {
     }
     /**
        Interface for Managing the DataStream operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IDataStream
     */
     export interface IDataStream extends IBaseData {
     }
     /**
        Interface for Managing the Cloud operations

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IDatabase
     */
     export interface IDatabase extends IBaseData {
          /**
             @method
             Creates a database on default path for every platform.
             @param callback Asynchronous callback
             @param database Database object to create
             @since ARP1.0
          */
          createDatabase(database:Database, callback:IDatabaseResultCallback);
          /**
             @method
             Creates a databaseTable inside a database for every platform.
             @param database      Database for databaseTable creating.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @param callback      DatabaseTable callback with the response
             @since ARP1.0
          */
          createTable(database:Database, databaseTable:DatabaseTable, callback:IDatabaseTableResultCallback);
          /**
             @method
             Deletes a database on default path for every platform.
             @param database Database object to delete
             @param callback Asynchronous callback
             @since ARP1.0
          */
          deleteDatabase(database:Database, callback:IDatabaseResultCallback);
          /**
             @method
             Deletes a databaseTable inside a database for every platform.
             @param database      Database for databaseTable removal.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @param callback      DatabaseTable callback with the response
             @since ARP1.0
          */
          deleteTable(database:Database, databaseTable:DatabaseTable, callback:IDatabaseTableResultCallback);
          /**
             @method
             Executes SQL statement into the given database. The replacements
should be passed as a parameter
             @param database     The database object reference.
             @param statement    SQL statement.
             @param replacements List of SQL statement replacements.
             @param callback     DatabaseTable callback with the response.
             @since ARP1.0
          */
          executeSqlStatement(database:Database, statement:string, replacements:Array<string>, callback:IDatabaseTableResultCallback);
          /**
             @method
             Executes SQL transaction (some statements chain) inside given database.
             @param database     The database object reference.
             @param statements   The statements to be executed during transaction.
             @param rollbackFlag Indicates if rollback should be performed when any
                    statement execution fails.
             @param callback     DatabaseTable callback with the response.
             @since ARP1.0
          */
          executeSqlTransactions(database:Database, statements:Array<string>, rollbackFlag:boolean, callback:IDatabaseTableResultCallback);
          /**
             @method
             Checks if database exists by given database name.
             @param database Database Object to check if exists
             @return {boolean} True if exists, false otherwise
             @since ARP1.0
          */
          existsDatabase(database:Database) : boolean;
          /**
             @method
             Checks if databaseTable exists by given database name.
             @param database      Database for databaseTable consulting.
             @param databaseTable DatabaseTable object with the name of the databaseTable inside.
             @return {boolean} True if exists, false otherwise
             @since ARP1.0
          */
          existsTable(database:Database, databaseTable:DatabaseTable) : boolean;
     }
     /**
        Interface for Managing the File operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IFile
     */
     export interface IFile extends IBaseData {
          /**
             @method
             Determine whether the current file/folder can be read from.
             @param descriptor File descriptor of file or folder used for operation.
             @return {boolean} True if the folder/file is readable, false otherwise.
             @since ARP1.0
          */
          canRead(descriptor:FileDescriptor) : boolean;
          /**
             @method
             Determine whether the current file/folder can be written to.
             @param descriptor File descriptor of file or folder used for operation.
             @return {boolean} True if the folder/file is writable, false otherwise.
             @since ARP1.0
          */
          canWrite(descriptor:FileDescriptor) : boolean;
          /**
             @method
             Creates a file with the specified name.
             @param descriptor File descriptor of file or folder used for operation.
             @param callback   Result of the operation.
             @since ARP1.0
          */
          create(descriptor:FileDescriptor, callback:IFileResultCallback);
          /**
             @method
             Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.
             @param descriptor File descriptor of file or folder used for operation.
             @param cascade    Whether to delete sub-files and sub-folders.
             @return {boolean} True if files (and sub-files and folders) whether deleted.
             @since ARP1.0
          */
          delete(descriptor:FileDescriptor, cascade:boolean) : boolean;
          /**
             @method
             Check whether the file/path exists.
             @param descriptor File descriptor of file or folder used for operation.
             @return {boolean} True if the file exists in the filesystem, false otherwise.
             @since ARP1.0
          */
          exists(descriptor:FileDescriptor) : boolean;
          /**
             @method
             Loads the content of the file.
             @param descriptor File descriptor of file or folder used for operation.
             @param callback   Result of the operation.
             @since ARP1.0
          */
          getContent(descriptor:FileDescriptor, callback:IFileDataLoadResultCallback);
          /**
             @method
             Returns the file storage type of the file
             @param descriptor File descriptor of file or folder used for operation.
             @return {Adaptive.IFileSystemStorageType} Storage Type file
             @since ARP1.0
          */
          getFileStorageType(descriptor:FileDescriptor) : IFileSystemStorageType;
          /**
             @method
             Returns the file type
             @param descriptor File descriptor of file or folder used for operation.
             @return {Adaptive.IFileSystemType} Returns the file type of the file
             @since ARP1.0
          */
          getFileType(descriptor:FileDescriptor) : IFileSystemType;
          /**
             @method
             Returns the security type of the file
             @param descriptor File descriptor of file or folder used for operation.
             @return {Adaptive.IFileSystemSecurity} Security Level of the file
             @since ARP1.0
          */
          getSecurityType(descriptor:FileDescriptor) : IFileSystemSecurity;
          /**
             @method
             Check whether this is a path of a file.
             @param descriptor File descriptor of file or folder used for operation.
             @return {boolean} true if this is a path to a folder/directory, false if this is a path to a file.
             @since ARP1.0
          */
          isDirectory(descriptor:FileDescriptor) : boolean;
          /**
             @method
             List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.
             @param descriptor File descriptor of file or folder used for operation.
             @param regex      Filter (eg. *.jpg, *.png, Fil*) name string.
             @param callback   Result of operation.
             @since ARP1.0
          */
          listFilesForRegex(descriptor:FileDescriptor, regex:string, callback:IFileListResultCallback);
          /**
             @method
             List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.
             @param descriptor File descriptor of file or folder used for operation.
             @param callback   Result of operation.
             @since ARP1.0
          */
          listFiles(descriptor:FileDescriptor, callback:IFileListResultCallback);
          /**
             @method
             Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.
             @param descriptor File descriptor of file or folder used for operation.
             @param recursive  Whether to create all parent path elements.
             @return {boolean} True if the path was created, false otherwise (or it exists already).
             @since ARP1.0
          */
          mkDir(descriptor:FileDescriptor, recursive:boolean) : boolean;
          /**
             @method
             Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.
             @param source      File descriptor of file or folder used for operation as source.
             @param destination File descriptor of file or folder used for operation as destination.
             @param createPath  True to create the path if it does not already exist.
             @param callback    Result of the operation.
             @param overwrite   True to create the path if it does not already exist.
             @since ARP1.0
          */
          move(source:FileDescriptor, destination:FileDescriptor, createPath:boolean, overwrite:boolean, callback:IFileResultCallback);
          /**
             @method
             Sets the content of the file.
             @param descriptor File descriptor of file or folder used for operation.
             @param content    Binary content to store in the file.
             @param callback   Result of the operation.
             @since ARP1.0
          */
          setContent(descriptor:FileDescriptor, content:Array<number>, callback:IFileDataStoreResultCallback);
     }
     /**
        Interface for Managing the File System operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IFileSystem
     */
     export interface IFileSystem extends IBaseData {
          /**
             @method
             Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.
             @param parent Parent directory.
             @param name   Name of new file or directory.
             @return {Adaptive.FileDescriptor} A reference to a new or existing location in the filesystem.
             @since ARP1.0
          */
          createFileDescriptor(parent:FileDescriptor, name:string) : FileDescriptor;
          /**
             @method
             Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.
             @return {Adaptive.FileDescriptor} Path to the application's cache folder.
             @since ARP1.0
          */
          getApplicationCacheFolder() : FileDescriptor;
          /**
             @method
             Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.
             @return {Adaptive.FileDescriptor} Path to the application's cloud storage folder.
             @since ARP1.0
          */
          getApplicationCloudFolder() : FileDescriptor;
          /**
             @method
             Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.
             @return {Adaptive.FileDescriptor} Path to the application's documents folder.
             @since ARP1.0
          */
          getApplicationDocumentsFolder() : FileDescriptor;
          /**
             @method
             Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.
             @return {Adaptive.FileDescriptor} Path to the application folder.
             @since ARP1.0
          */
          getApplicationFolder() : FileDescriptor;
          /**
             @method
             Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.
             @return {Adaptive.FileDescriptor} Path to the application's protected storage folder.
             @since ARP1.0
          */
          getApplicationProtectedFolder() : FileDescriptor;
          /**
             @method
             Returns the file system dependent file separator.
             @return {string} char with the directory/file separator.
             @since ARP1.0
          */
          getSeparator() : string;
          /**
             @method
             Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.
             @return {Adaptive.FileDescriptor} Path to the application's documents folder.
             @since ARP1.0
          */
          getSystemExternalFolder() : FileDescriptor;
     }
     /**
        Interface for Managing the Internal Storage operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IInternalStorage
     */
     export interface IInternalStorage extends IBaseData {
     }
     /**
        Interface for Managing the XML operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IXML
     */
     export interface IXML extends IBaseData {
     }
     /**
        Interface defines the response methods of the acceleration operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAccelerationListener
     */
     export interface IAccelerationListener extends IBaseListener {
          /**
             @method
             No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.
             @param error Error fired
             @since ARP1.0
          */
          onError(error:IAccelerationListenerError);
          /**
             @method
             Correct data received.
             @param acceleration Acceleration received
             @since ARP1.0
          */
          onResult(acceleration:Acceleration);
          /**
             @method
             Data received with warning - ie. Needs calibration.
             @param acceleration Acceleration received
             @param warning      Warning fired
             @since ARP1.0
          */
          onWarning(acceleration:Acceleration, warning:IAccelerationListenerWarning);
     }
     /**
        Interface for Managing the button  operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IButtonListener
     */
     export interface IButtonListener extends IBaseListener {
          /**
             @method
             No data received
             @param error occurred
             @since ARP1.0
          */
          onError(error:IButtonListenerError);
          /**
             @method
             Called on button pressed
             @param button pressed
             @since ARP1.0
          */
          onResult(button:Button);
          /**
             @method
             Data received with warning
             @param button  pressed
             @param warning happened
             @since ARP1.0
          */
          onWarning(button:Button, warning:IButtonListenerWarning);
     }
     /**
        Interface for Managing the Geolocation results

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IGeolocationListener
     */
     export interface IGeolocationListener extends IBaseListener {
          /**
             @method
             No data received - error condition, not authorized or hardware not available.
             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          onError(error:IGeolocationListenerError);
          /**
             @method
             Correct data received.
             @param geolocation Geolocation Bean
             @since ARP1.0
          */
          onResult(geolocation:Geolocation);
          /**
             @method
             Data received with warning - ie. HighDoP
             @param geolocation Geolocation Bean
             @param warning     Type of warning encountered during reading.
             @since ARP1.0
          */
          onWarning(geolocation:Geolocation, warning:IGeolocationListenerWarning);
     }
     /**
        Interface for Managing the Lifecycle listeners

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ILifecycleListener
     */
     export interface ILifecycleListener extends IBaseListener {
          /**
             @method
             No data received - error condition, not authorized or hardware not available.
             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          onError(error:ILifecycleListenerError);
          /**
             @method
             Called when lifecycle changes somehow.
             @param lifecycle Lifecycle element
             @since ARP1.0
          */
          onResult(lifecycle:Lifecycle);
          /**
             @method
             Data received with warning
             @param lifecycle Lifecycle element
             @param warning   Type of warning encountered during reading.
             @since ARP1.0
          */
          onWarning(lifecycle:Lifecycle, warning:ILifecycleListenerWarning);
     }
     /**
        Interface for Managing the Network status listener events

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INetworkStatusListener
     */
     export interface INetworkStatusListener extends IBaseListener {
          /**
             @method
             No data received - error condition, not authorized or hardware not available.
             @param error Type of error encountered during reading.
             @since ARP1.0
          */
          onError(error:INetworkStatusListenerError);
          /**
             @method
             Called when network connection changes somehow.
             @param network Change to this network.
             @since ARP1.0
          */
          onResult(network:ICapabilitiesNet);
          /**
             @method
             Status received with warning
             @param network Change to this network.
             @param warning Type of warning encountered during reading.
             @since ARP1.0
          */
          onWarning(network:ICapabilitiesNet, warning:INetworkStatusListenerWarning);
     }
     /**
        Interface for Audio purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAudio
     */
     export interface IAudio extends IBaseMedia {
     }
     /**
        Interface for Managing the camera operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ICamera
     */
     export interface ICamera extends IBaseMedia {
     }
     /**
        Interface for Managing the Imaging operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IImaging
     */
     export interface IImaging extends IBaseMedia {
     }
     /**
        Interface for Managing the Video operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IVideo
     */
     export interface IVideo extends IBaseMedia {
          /**
             @method
             Play url video stream
             @param url of the video
             @since ARP1.0
          */
          playStream(url:string);
     }
     /**
        Interface for Alarm purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAlarm
     */
     export interface IAlarm extends IBaseNotification {
     }
     /**
        Interface for Managing the Notification operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INotification
     */
     export interface INotification extends IBaseNotification {
     }
     /**
        Interface for Managing the Local Notifications operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INotificationLocal
     */
     export interface INotificationLocal extends IBaseNotification {
     }
     /**
        Interface for Managing the Vibration operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IVibration
     */
     export interface IVibration extends IBaseNotification {
     }
     /**
        Interface for Managing the Calendar operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ICalendar
     */
     export interface ICalendar extends IBasePIM {
     }
     /**
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IContact
     */
     export interface IContact extends IBasePIM {
          /**
             @method
             Get the contact photo
             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          getContactPhoto(contact:ContactUid, callback:IContactPhotoResultCallback);
          /**
             @method
             Get all the details of a contact according to its id
             @param contact  id to search for
             @param callback called for return
             @since ARP1.0
          */
          getContact(contact:ContactUid, callback:IContactResultCallback);
          /**
             @method
             Get marked fields of all contacts
             @param callback called for return
             @param fields   to get for each Contact
             @since ARP1.0
          */
          getContactsForFields(callback:IContactResultCallback, fields:Array<IContactFieldGroup>);
          /**
             @method
             Get marked fields of all contacts according to a filter
             @param callback called for return
             @param fields   to get for each Contact
             @param filter   to search for
             @since ARP1.0
          */
          getContactsWithFilter(callback:IContactResultCallback, fields:Array<IContactFieldGroup>, filter:Array<IContactFilter>);
          /**
             @method
             Get all contacts
             @param callback called for return
             @since ARP1.0
          */
          getContacts(callback:IContactResultCallback);
          /**
             @method
             Search contacts according to a term with a filter and send it to the callback
             @param term     string to search
             @param callback called for return
             @param filter   to search for
             @since ARP1.0
          */
          searchContactsWithFilter(term:string, callback:IContactResultCallback, filter:Array<IContactFilter>);
          /**
             @method
             Search contacts according to a term and send it to the callback
             @param term     string to search
             @param callback called for return
             @since ARP1.0
          */
          searchContacts(term:string, callback:IContactResultCallback);
          /**
             @method
             Set the contact photo
             @param contact  id to assign the photo
             @param pngImage photo as byte array
             @return {boolean} true if set is successful;false otherwise
             @since ARP1.0
          */
          setContactPhoto(contact:ContactUid, pngImage:Array<number>) : boolean;
     }
     /**
        Interface for Managing the Mail operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IMail
     */
     export interface IMail extends IBasePIM {
          /**
             @method
             Send an Email
             @param data     Payload of the email
             @param callback Result callback of the operation
             @since ARP1.0
          */
          sendEmail(data:Email, callback:IMessagingCallback);
     }
     /**
        Interface for Managing the Messaging operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IMessaging
     */
     export interface IMessaging extends IBasePIM {
          /**
             @method
             Send text SMS
             @param number   to send
             @param text     to send
             @param callback with the result
             @since ARP1.0
          */
          sendSMS(number:string, text:string, callback:IMessagingCallback);
     }
     /**
        Interface for Barcode Reading purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBarcode
     */
     export interface IBarcode extends IBaseReader {
     }
     /**
        Interface for Managing the NFC operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.INFC
     */
     export interface INFC extends IBaseReader {
     }
     /**
        Interface for Managing the OCR operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IOCR
     */
     export interface IOCR extends IBaseReader {
     }
     /**
        Interface for Managing the QR Code operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IQRCode
     */
     export interface IQRCode extends IBaseReader {
     }
     /**
        Interface for Managing the OAuth operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IOAuth
     */
     export interface IOAuth extends IBaseSecurity {
     }
     /**
        Interface for Managing the OpenID operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IOpenId
     */
     export interface IOpenId extends IBaseSecurity {
     }
     /**
        Interface for Managing the Security operations

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ISecurity
     */
     export interface ISecurity extends IBaseSecurity {
          /**
             @method
             Deletes from the device internal storage the entry/entries containing the specified key names.
             @param keys             Array with the key names to delete.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          deleteSecureKeyValuePairs(keys:Array<string>, publicAccessName:string, callback:ISecurityResultCallback);
          /**
             @method
             Retrieves from the device internal storage the entry/entries containing the specified key names.
             @param keys             Array with the key names to retrieve.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          getSecureKeyValuePairs(keys:Array<string>, publicAccessName:string, callback:ISecurityResultCallback);
          /**
             @method
             Returns if the device has been modified in anyhow
             @return {boolean} true if the device has been modified; false otherwise
             @since ARP1.0
          */
          isDeviceModified() : boolean;
          /**
             @method
             Stores in the device internal storage the specified item/s.
             @param keyValues        Array containing the items to store on the device internal memory.
             @param publicAccessName The name of the shared internal storage object (if needed).
             @param callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          setSecureKeyValuePairs(keyValues:Array<SecureKeyPair>, publicAccessName:string, callback:ISecurityResultCallback);
     }
     /**
        Interface defining methods about the acceleration sensor

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAcceleration
     */
     export interface IAcceleration extends IBaseSensor {
          /**
             @method
             Register a new listener that will receive acceleration events.
             @param listener to be registered.
             @since ARP1.0
          */
          addAccelerationListener(listener:IAccelerationListener);
          /**
             @method
             De-registers an existing listener from receiving acceleration events.
             @param listener to be registered.
             @since ARP1.0
          */
          removeAccelerationListener(listener:IAccelerationListener);
          /**
             @method
             Removed all existing listeners from receiving acceleration events.
             @since ARP1.0
          */
          removeAccelerationListeners();
     }
     /**
        Interface for managinf the Ambient Light

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IAmbientLight
     */
     export interface IAmbientLight extends IBaseSensor {
     }
     /**
        Interface for Barometer management purposes

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBarometer
     */
     export interface IBarometer extends IBaseSensor {
     }
     /**
        Interface for Managing the Geolocation operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IGeolocation
     */
     export interface IGeolocation extends IBaseSensor {
          /**
             @method
             Register a new listener that will receive geolocation events.
             @param listener to be registered.
             @since ARP1.0
          */
          addGeolocationListener(listener:IGeolocationListener);
          /**
             @method
             De-registers an existing listener from receiving geolocation events.
             @param listener to be registered.
             @since ARP1.0
          */
          removeGeolocationListener(listener:IGeolocationListener);
          /**
             @method
             Removed all existing listeners from receiving geolocation events.
             @since ARP1.0
          */
          removeGeolocationListeners();
     }
     /**
        Interface for Managing the Giroscope operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IGyroscope
     */
     export interface IGyroscope extends IBaseSensor {
     }
     /**
        Interface for Managing the Magnetometer operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IMagnetometer
     */
     export interface IMagnetometer extends IBaseSensor {
     }
     /**
        Interface for Managing the Proximity operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IProximity
     */
     export interface IProximity extends IBaseSensor {
     }
     /**
        Interface for Managing the Facebook operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IFacebook
     */
     export interface IFacebook extends IBaseSocial {
     }
     /**
        Interface for Managing the Google Plus operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IGooglePlus
     */
     export interface IGooglePlus extends IBaseSocial {
     }
     /**
        Interface for Managing the Linkedin operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ILinkedIn
     */
     export interface ILinkedIn extends IBaseSocial {
     }
     /**
        Interface for Managing the RSS operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IRSS
     */
     export interface IRSS extends IBaseSocial {
     }
     /**
        Interface for Managing the Twitter operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ITwitter
     */
     export interface ITwitter extends IBaseSocial {
     }
     /**
        Interface for testing the Capabilities operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ICapabilities
     */
     export interface ICapabilities extends IBaseSystem {
          /**
             @method
             Determines whether a specific hardware button is supported for interaction.
             @param type Type of feature to check.
             @return {boolean} true is supported, false otherwise.
             @since ARP1.0
          */
          hasButtonSupport(type:ICapabilitiesButton) : boolean;
          /**
             @method
             Determines whether a specific Communication capability is supported by
the device.
             @param type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasCommunicationSupport(type:ICapabilitiesCommunication) : boolean;
          /**
             @method
             Determines whether a specific Data capability is supported by the device.
             @param type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasDataSupport(type:ICapabilitiesData) : boolean;
          /**
             @method
             Determines whether a specific Media capability is supported by the
device.
             @param type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasMediaSupport(type:ICapabilitiesMedia) : boolean;
          /**
             @method
             Determines whether a specific Net capability is supported by the device.
             @param type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasNetSupport(type:ICapabilitiesNet) : boolean;
          /**
             @method
             Determines whether a specific Notification capability is supported by the
device.
             @param type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasNotificationSupport(type:ICapabilitiesNotification) : boolean;
          /**
             @method
             Determines whether a specific Sensor capability is supported by the
device.
             @param type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasSensorSupport(type:ICapabilitiesSensor) : boolean;
     }
     /**
        Interface for Managing the Device operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IDevice
     */
     export interface IDevice extends IBaseSystem {
          /**
             @method
             Register a new listener that will receive button events.
             @param listener to be registered.
             @since ARP1.0
          */
          addButtonListener(listener:IButtonListener);
          /**
             @method
             Returns the device information for the current device executing the runtime.
             @return {Adaptive.DeviceInfo} DeviceInfo for the current device.
             @since ARP1.0
          */
          getDeviceInfo() : DeviceInfo;
          /**
             @method
             Gets the current Locale for the device.
             @return {Adaptive.Locale} The current Locale information.
             @since ARP1.0
          */
          getLocaleCurrent() : Locale;
          /**
             @method
             De-registers an existing listener from receiving button events.
             @param listener to be removed.
             @since ARP1.0
          */
          removeButtonListener(listener:IButtonListener);
          /**
             @method
             Removed all existing listeners from receiving button events.
             @since ARP1.0
          */
          removeButtonListeners();
     }
     /**
        Interface for Managing the Display operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IDisplay
     */
     export interface IDisplay extends IBaseSystem {
     }
     /**
        Interface for Managing the OS operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IOS
     */
     export interface IOS extends IBaseSystem {
          /**
             @method
             Returns the OSInfo for the current operating system.
             @return {Adaptive.OSInfo} OSInfo with name, version and vendor of the OS.
             @since ARP1.0
          */
          getOSInfo() : OSInfo;
     }
     /**
        Interface for Managing the Runtime operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IRuntime
     */
     export interface IRuntime extends IBaseSystem {
          /**
             @method
             Dismiss the current Application
             @since ARP1.0
          */
          dismissApplication();
          /**
             @method
             Whether the application dismiss the splash screen successfully or not
             @return {boolean} true if the application has dismissed the splash screen;false otherwise
             @since ARP1.0
          */
          dismissSplashScreen() : boolean;
     }
     /**
        Interface for Managing the browser operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IBrowser
     */
     export interface IBrowser extends IBaseUI {
          /**
             @method
             Method for opening a URL like a link in the native default browser
             @param url Url to open
             @return {boolean} The result of the operation
             @since ARP1.0
          */
          openExtenalBrowser(url:string) : boolean;
          /**
             @method
             Method for opening a browser embedded into the application in a modal window
             @param url            Url to open
             @param title          Title of the Navigation bar
             @param backButtonText Title of the Back button bar
             @return {boolean} The result of the operation
             @since ARP1.0
          */
          openInternalBrowserModal(url:string, title:string, backButtonText:string) : boolean;
          /**
             @method
             Method for opening a browser embedded into the application
             @param url            Url to open
             @param title          Title of the Navigation bar
             @param backButtonText Title of the Back button bar
             @return {boolean} The result of the operation
             @since ARP1.0
          */
          openInternalBrowser(url:string, title:string, backButtonText:string) : boolean;
     }
     /**
        Interface for Managing the Desktop operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IDesktop
     */
     export interface IDesktop extends IBaseUI {
     }
     /**
        Interface for Managing the Map operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IMap
     */
     export interface IMap extends IBaseUI {
     }
     /**
        Interface for Managing the UI operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IUI
     */
     export interface IUI extends IBaseUI {
     }
     /**
        Interface for Managing the Compression operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ICompression
     */
     export interface ICompression extends IBaseUtil {
     }
     /**
        Interface for Managing the Concurrent operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.IConcurrent
     */
     export interface IConcurrent extends IBaseUtil {
     }
     /**
        Interface for Managing the Cloud operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ICrypto
     */
     export interface ICrypto extends IBaseUtil {
     }
     /**
        Interface for Managing the Logging operations

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ILogging
     */
     export interface ILogging extends IBaseUtil {
          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.
             @param level    Log level
             @param category Category/tag name to identify/filter the log.
             @param message  Message to be logged
             @since ARP1.0
          */
          log_level_category_message(level:ILoggingLogLevel, category:string, message:string);
          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.
             @param level   Log level
             @param message Message to be logged
             @since ARP1.0
          */
          log_level_message(level:ILoggingLogLevel, message:string);
     }
     /**
        Interface for Managing the Timer operations

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     /**
        @class Adaptive.ITimer
     */
     export interface ITimer extends IBaseUtil {
     }
     /**
        @class Adaptive.APIBean
        Structure representing a native response to the HTML5

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export class APIBean {
          /**
             @method constructor
             Default constructor

             @since ARP1.0
          */
          constructor() {
          }
          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.APIBean.
             @return {Adaptive.APIBean} Wrapped object instance.
          */
          static toObject(object : any) : APIBean {
               var result : APIBean = new APIBean();

               return result;
          }
     }
     /**
        @class Adaptive.APIRequest
        Structure representing a HTML5 request to the native API.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export class APIRequest {
          /**
             Identifier of callback or listener for async operations.
          */
          asyncId : number;
          /**
             String representing the bridge type to obtain.
          */
          bridgeType : string;
          /**
             String representing the method name to call.
          */
          methodName : string;
          /**
             Parameters of the request as JSON formatted strings.
          */
          parameters : Array<string>;
          /**
             @method constructor
             Constructor with all the parameters

             @param {string} bridgeType Name of the bridge to be invoked.
             @param {string} methodName Name of the method
             @param {string[]} parameters Array of parameters as JSON formatted strings.
             @param {number} asyncId    Id of callback or listener or zero if none for synchronous calls.
             @since ARP1.0
          */
          constructor(bridgeType: string, methodName: string, parameters: Array<string>, asyncId: number) {
               this.bridgeType = bridgeType;
               this.methodName = methodName;
               this.parameters = parameters;
               this.asyncId = asyncId;
          }
          /**
             @method
             Returns the callback or listener id assigned to this request OR zero if there is no associated callback or
listener.

             @return {number} long with the unique id of the callback or listener, or zero if there is no associated async event.
          */
          getAsyncId() : number {
               return this.asyncId;
          }

          /**
             @method
             Sets the callback or listener id to the request.

             @param {number} asyncId The unique id of the callback or listener.
          */
          setAsyncId(asyncId: number) {
               this.asyncId = asyncId;
          }

          /**
             @method
             Bridge Type Getter

             @return {string} Bridge Type
             @since ARP1.0
          */
          getBridgeType() : string {
               return this.bridgeType;
          }

          /**
             @method
             Bridge Type Setter

             @param {string} bridgeType Bridge Type
             @since ARP1.0
          */
          setBridgeType(bridgeType: string) {
               this.bridgeType = bridgeType;
          }

          /**
             @method
             Method name Getter

             @return {string} Method name
             @since ARP1.0
          */
          getMethodName() : string {
               return this.methodName;
          }

          /**
             @method
             Method name Setter

             @param {string} methodName Method name
             @since ARP1.0
          */
          setMethodName(methodName: string) {
               this.methodName = methodName;
          }

          /**
             @method
             Parameters Getter

             @return {string[]} Parameters
             @since ARP1.0
          */
          getParameters() : Array<string> {
               return this.parameters;
          }

          /**
             @method
             Parameters Setter

             @param {string[]} parameters Parameters, JSON formatted strings of objects.
             @since ARP1.0
          */
          setParameters(parameters: Array<string>) {
               this.parameters = parameters;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.APIRequest.
             @return {Adaptive.APIRequest} Wrapped object instance.
          */
          static toObject(object : any) : APIRequest {
               var result : APIRequest = new APIRequest(null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.bridgeType!=null) result.bridgeType = object.bridgeType;
               if (object!=null && object.methodName!=null) result.methodName = object.methodName;
               if (object != null && object.parameters != null) {
                    result.parameters = new Array<string>();
                    for(var i = 0; i < object.parameters.length; i++) {
                         var __value__ = object.parameters[i];
                         if (__value__ != null) result.parameters.push(__value__);
                    }
               }
               if (object!=null && object.asyncId!=null) result.asyncId = object.asyncId;

               return result;
          }
     }
     /**
        @class Adaptive.APIResponse
        Structure representing a JSON response to the HTML5 layer.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export class APIResponse {
          /**
             String representing the JavaScript value or JSON object representation of the response.
          */
          response : string;
          /**
             Status code of the response
          */
          statusCode : number;
          /**
             Status message of the response
          */
          statusMessage : string;
          /**
             @method constructor
             Constructor with parameters.

             @param {string} response      String representing the JavaScript value or JSON object representation of the response.
             @param {number} statusCode    Status code of the response (200 = OK, others are warning or error conditions).
             @param {string} statusMessage Status message of the response.
          */
          constructor(response: string, statusCode: number, statusMessage: string) {
               this.response = response;
               this.statusCode = statusCode;
               this.statusMessage = statusMessage;
          }
          /**
             @method
             Response getter

             @return {string} String representing the JavaScript value or JSON object representation of the response.
             @since ARP1.0
          */
          getResponse() : string {
               return this.response;
          }

          /**
             @method
             Response setter

             @param {string} response String representing the JavaScript value or JSON object representation of the response.
          */
          setResponse(response: string) {
               this.response = response;
          }

          /**
             @method
             Status code getter

             @return {number} Status code of the response (200 = OK, others are warning or error conditions).
          */
          getStatusCode() : number {
               return this.statusCode;
          }

          /**
             @method
             Status code setter

             @param {number} statusCode Status code of the response  (200 = OK, others are warning or error conditions).
          */
          setStatusCode(statusCode: number) {
               this.statusCode = statusCode;
          }

          /**
             @method
             Status message getter

             @return {string} Status message of the response.
          */
          getStatusMessage() : string {
               return this.statusMessage;
          }

          /**
             @method
             Status message setter.

             @param {string} statusMessage Status message of the response
          */
          setStatusMessage(statusMessage: string) {
               this.statusMessage = statusMessage;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.APIResponse.
             @return {Adaptive.APIResponse} Wrapped object instance.
          */
          static toObject(object : any) : APIResponse {
               var result : APIResponse = new APIResponse(null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.response!=null) result.response = object.response;
               if (object!=null && object.statusCode!=null) result.statusCode = object.statusCode;
               if (object!=null && object.statusMessage!=null) result.statusMessage = object.statusMessage;

               return result;
          }
     }
     /**
        @class Adaptive.ServicePath
        Structure representing a service path for one endpoint

        @author fnva
        @since ARP1.0
        @version 1.0
     */
     export class ServicePath {
          /**
             The methods for calling a path
          */
          methods : Array<IServiceMethod>;
          /**
             The path for the endpoint
          */
          path : string;
          /**
             @method constructor
             Constructor with parameters

             @param {string} path    The path for the endpoint
             @param {Adaptive.IServiceMethod[]} methods The methods for calling a path
          */
          constructor(path: string, methods: Array<IServiceMethod>) {
               this.path = path;
               this.methods = methods;
          }
          /**
             @method
             Endpoint's path methods setter

             @return {Adaptive.IServiceMethod[]} Endpoint's path methods
          */
          getMethods() : Array<IServiceMethod> {
               return this.methods;
          }

          /**
             @method
             Endpoint's path methods setter

             @param {Adaptive.IServiceMethod[]} methods Endpoint's path methods
          */
          setMethods(methods: Array<IServiceMethod>) {
               this.methods = methods;
          }

          /**
             @method
             Endpoint's Path Getter

             @return {string} Endpoint's Path
          */
          getPath() : string {
               return this.path;
          }

          /**
             @method
             Endpoint's path setter

             @param {string} path Endpoint's path
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServicePath.
             @return {Adaptive.ServicePath} Wrapped object instance.
          */
          static toObject(object : any) : ServicePath {
               var result : ServicePath = new ServicePath(null, null);

               // Assign values to bean fields.
               if (object!=null && object.path!=null) result.path = object.path;
               if (object != null && object.methods != null) {
                    result.methods = new Array<IServiceMethod>();
                    for(var i = 0; i < object.methods.length; i++) {
                         var __value__ = object.methods[i];
                         if (__value__ != null) {
                              result.methods.push(IServiceMethod.toObject(__value__));
                         } else {
                              result.methods.push(IServiceMethod.toObject(null));
                         }
                    }
               }

               return result;
          }
     }
     /**
        @class Adaptive.Acceleration
        @extends Adaptive.APIBean
        Structure representing the data of a single acceleration reading.

        @author Carlos Lozano Diez
        @since ARP1.0
        @version 1.0
     */
     export class Acceleration extends APIBean {
          /**
             Timestamp of the acceleration reading.
          */
          timestamp : number;
          /**
             X-axis component of the acceleration.
          */
          x : number;
          /**
             Y-axis component of the acceleration.
          */
          y : number;
          /**
             Z-axis component of the acceleration.
          */
          z : number;
          /**
             @method constructor
             Constructor with fields

             @param {number} x         X Coordinate
             @param {number} y         Y Coordinate
             @param {number} z         Z Coordinate
             @param {number} timestamp Timestamp
             @since ARP1.0
          */
          constructor(x: number, y: number, z: number, timestamp: number) {
               super();
               this.x = x;
               this.y = y;
               this.z = z;
               this.timestamp = timestamp;
          }
          /**
             @method
             Timestamp Getter

             @return {number} Timestamp
             @since ARP1.0
          */
          getTimestamp() : number {
               return this.timestamp;
          }

          /**
             @method
             Timestamp Setter

             @param {number} timestamp Timestamp
             @since ARP1.0
          */
          setTimestamp(timestamp: number) {
               this.timestamp = timestamp;
          }

          /**
             @method
             X Coordinate Getter

             @return {number} X-axis component of the acceleration.
             @since ARP1.0
          */
          getX() : number {
               return this.x;
          }

          /**
             @method
             X Coordinate Setter

             @param {number} x X-axis component of the acceleration.
             @since ARP1.0
          */
          setX(x: number) {
               this.x = x;
          }

          /**
             @method
             Y Coordinate Getter

             @return {number} Y-axis component of the acceleration.
             @since ARP1.0
          */
          getY() : number {
               return this.y;
          }

          /**
             @method
             Y Coordinate Setter

             @param {number} y Y-axis component of the acceleration.
             @since ARP1.0
          */
          setY(y: number) {
               this.y = y;
          }

          /**
             @method
             Z Coordinate Getter

             @return {number} Z-axis component of the acceleration.
             @since ARP1.0
          */
          getZ() : number {
               return this.z;
          }

          /**
             @method
             Z Coordinate Setter

             @param {number} z Z Coordinate
             @since ARP1.0
          */
          setZ(z: number) {
               this.z = z;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Acceleration.
             @return {Adaptive.Acceleration} Wrapped object instance.
          */
          static toObject(object : any) : Acceleration {
               var result : Acceleration = new Acceleration(null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.x!=null) result.x = object.x;
               if (object!=null && object.y!=null) result.y = object.y;
               if (object!=null && object.z!=null) result.z = object.z;
               if (object!=null && object.timestamp!=null) result.timestamp = object.timestamp;

               return result;
          }
     }
     /**
        @class Adaptive.Button
        @extends Adaptive.APIBean
        Structure representing the a physical or logical button on a device.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Button extends APIBean {
          /**
             Button type
          */
          type : ICapabilitiesButton;
          /**
             @method constructor
             Constructor with fields

             @param {Adaptive.ICapabilitiesButton} type Button type.
             @since ARP1.0
          */
          constructor(type: ICapabilitiesButton) {
               super();
               this.type = type;
          }
          /**
             @method
             Returns the button type

             @return {Adaptive.ICapabilitiesButton} type Button type.
             @since ARP1.0
          */
          getType() : ICapabilitiesButton {
               return this.type;
          }

          /**
             @method
             Setter for the button type

             @param {Adaptive.ICapabilitiesButton} type Button Type
             @since ARP1.0
          */
          setType(type: ICapabilitiesButton) {
               this.type = type;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Button.
             @return {Adaptive.Button} Wrapped object instance.
          */
          static toObject(object : any) : Button {
               var result : Button = new Button(null);

               // Assign values to bean fields.
               if (object!=null && object.type!=null) {
                    result.type = ICapabilitiesButton.toObject(object.type);
               } else {
                    result.type = ICapabilitiesButton.toObject(null);
               }

               return result;
          }
     }
     /**
        @class Adaptive.ContactAddress
        @extends Adaptive.APIBean
        Structure representing the address data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactAddress extends APIBean {
          /**
             The address type
          */
          type : ContactAddressType;
          /**
             The Contact address
          */
          address : string;
          /**
             @method constructor
             Constructor with fields

             @param {string} address Address data.
             @param {Adaptive.ContactAddressType} type    Address type.
             @since ARP1.0
          */
          constructor(address: string, type: ContactAddressType) {
               super();
               this.address = address;
               this.type = type;
          }
          /**
             @method
             Returns the type of the address

             @return {Adaptive.ContactAddressType} AddressType Address type.
             @since ARP1.0
          */
          getType() : ContactAddressType {
               return this.type;
          }

          /**
             @method
             Set the address type

             @param {Adaptive.ContactAddressType} type Address type.
             @since ARP1.0
          */
          setType(type: ContactAddressType) {
               this.type = type;
          }

          /**
             @method
             Returns the Contact address

             @return {string} address Address data.
             @since ARP1.0
          */
          getAddress() : string {
               return this.address;
          }

          /**
             @method
             Set the address of the Contact

             @param {string} address Address data.
             @since ARP1.0
          */
          setAddress(address: string) {
               this.address = address;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactAddress.
             @return {Adaptive.ContactAddress} Wrapped object instance.
          */
          static toObject(object : any) : ContactAddress {
               var result : ContactAddress = new ContactAddress(null, null);

               // Assign values to bean fields.
               if (object!=null && object.address!=null) result.address = object.address;
               if (object!=null && object.type!=null) {
                    result.type = ContactAddressType.toObject(object.type);
               } else {
                    result.type = ContactAddressType.toObject(null);
               }

               return result;
          }
     }
     /**
        @class Adaptive.ContactEmail
        @extends Adaptive.APIBean
        Structure representing the email data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactEmail extends APIBean {
          /**
             The type of the email
          */
          type : ContactEmailType;
          /**
             Email of the Contact
          */
          email : string;
          /**
             Whether the email is the primary one or not
          */
          primary : boolean;
          /**
             @method constructor
             Constructor used by the implementation

             @param {Adaptive.ContactEmailType} type    Type of the email
             @param {boolean} primary Is email primary
             @param {string} email   Email of the contact
             @since ARP1.0
          */
          constructor(type: ContactEmailType, primary: boolean, email: string) {
               super();
               this.type = type;
               this.primary = primary;
               this.email = email;
          }
          /**
             @method
             Returns the type of the email

             @return {Adaptive.ContactEmailType} EmailType
             @since ARP1.0
          */
          getType() : ContactEmailType {
               return this.type;
          }

          /**
             @method
             Set the type of the email

             @param {Adaptive.ContactEmailType} type Type of the email
             @since ARP1.0
          */
          setType(type: ContactEmailType) {
               this.type = type;
          }

          /**
             @method
             Returns the email of the Contact

             @return {string} email
             @since ARP1.0
          */
          getEmail() : string {
               return this.email;
          }

          /**
             @method
             Set the email of the Contact

             @param {string} email Email of the contact
             @since ARP1.0
          */
          setEmail(email: string) {
               this.email = email;
          }

          /**
             @method
             Returns if the email is primary

             @return {boolean} true if the email is primary; false otherwise
             @since ARP1.0
          */
          getPrimary() : boolean {
               return this.primary;
          }

          /**
             @method
             Set if the email

             @param {boolean} primary true if the email is primary; false otherwise
             @since ARP1.0
          */
          setPrimary(primary: boolean) {
               this.primary = primary;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactEmail.
             @return {Adaptive.ContactEmail} Wrapped object instance.
          */
          static toObject(object : any) : ContactEmail {
               var result : ContactEmail = new ContactEmail(null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.type!=null) {
                    result.type = ContactEmailType.toObject(object.type);
               } else {
                    result.type = ContactEmailType.toObject(null);
               }
               if (object!=null && object.primary!=null) result.primary = object.primary;
               if (object!=null && object.email!=null) result.email = object.email;

               return result;
          }
     }
     /**
        @class Adaptive.ContactPersonalInfo
        @extends Adaptive.APIBean
        Structure representing the personal info data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactPersonalInfo extends APIBean {
          /**
             The title of the Contact
          */
          title : ContactPersonalInfoTitle;
          /**
             The last name of the Contact
          */
          lastName : string;
          /**
             The middle name of the Contact if it proceeds
          */
          middleName : string;
          /**
             The name of the Contact
          */
          name : string;
          /**
             @method constructor
             The Constructor used by the implementation

             @param {string} name       of the Contact
             @param {string} middleName of the Contact
             @param {string} lastName   of the Contact
             @param {Adaptive.ContactPersonalInfoTitle} title      of the Contact
             @since ARP1.0
          */
          constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitle) {
               super();
               this.name = name;
               this.middleName = middleName;
               this.lastName = lastName;
               this.title = title;
          }
          /**
             @method
             Returns the title of the Contact

             @return {Adaptive.ContactPersonalInfoTitle} Title
             @since ARP1.0
          */
          getTitle() : ContactPersonalInfoTitle {
               return this.title;
          }

          /**
             @method
             Set the Title of the Contact

             @param {Adaptive.ContactPersonalInfoTitle} title of the Contact
             @since ARP1.0
          */
          setTitle(title: ContactPersonalInfoTitle) {
               this.title = title;
          }

          /**
             @method
             Returns the last name of the Contact

             @return {string} lastName
             @since ARP1.0
          */
          getLastName() : string {
               return this.lastName;
          }

          /**
             @method
             Set the last name of the Contact

             @param {string} lastName of the Contact
             @since ARP1.0
          */
          setLastName(lastName: string) {
               this.lastName = lastName;
          }

          /**
             @method
             Returns the middle name of the Contact

             @return {string} middelName
             @since ARP1.0
          */
          getMiddleName() : string {
               return this.middleName;
          }

          /**
             @method
             Set the middle name of the Contact

             @param {string} middleName of the Contact
             @since ARP1.0
          */
          setMiddleName(middleName: string) {
               this.middleName = middleName;
          }

          /**
             @method
             Returns the name of the Contact

             @return {string} name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Set the name of the Contact

             @param {string} name of the Contact
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactPersonalInfo.
             @return {Adaptive.ContactPersonalInfo} Wrapped object instance.
          */
          static toObject(object : any) : ContactPersonalInfo {
               var result : ContactPersonalInfo = new ContactPersonalInfo(null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) result.name = object.name;
               if (object!=null && object.middleName!=null) result.middleName = object.middleName;
               if (object!=null && object.lastName!=null) result.lastName = object.lastName;
               if (object!=null && object.title!=null) {
                    result.title = ContactPersonalInfoTitle.toObject(object.title);
               } else {
                    result.title = ContactPersonalInfoTitle.toObject(null);
               }

               return result;
          }
     }
     /**
        @class Adaptive.ContactPhone
        @extends Adaptive.APIBean
        Structure representing the phone data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactPhone extends APIBean {
          /**
             The phone number phoneType
          */
          phoneType : ContactPhoneType;
          /**
             The phone number
          */
          phone : string;
          /**
             @method constructor
             Constructor used by implementation to set the contact Phone

             @param {string} phone     Phone number
             @param {Adaptive.ContactPhoneType} phoneType Type of Phone number
             @since ARP1.0
          */
          constructor(phone: string, phoneType: ContactPhoneType) {
               super();
               this.phone = phone;
               this.phoneType = phoneType;
          }
          /**
             @method
             Returns the phone phoneType

             @return {Adaptive.ContactPhoneType} phoneType
             @since ARP1.0
          */
          getPhoneType() : ContactPhoneType {
               return this.phoneType;
          }

          /**
             @method
             Set the phoneType of the phone number

             @param {Adaptive.ContactPhoneType} phoneType Type of Phone number
             @since ARP1.0
          */
          setPhoneType(phoneType: ContactPhoneType) {
               this.phoneType = phoneType;
          }

          /**
             @method
             Returns the phone number

             @return {string} phone number
             @since ARP1.0
          */
          getPhone() : string {
               return this.phone;
          }

          /**
             @method
             Set the phone number

             @param {string} phone number
             @since ARP1.0
          */
          setPhone(phone: string) {
               this.phone = phone;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactPhone.
             @return {Adaptive.ContactPhone} Wrapped object instance.
          */
          static toObject(object : any) : ContactPhone {
               var result : ContactPhone = new ContactPhone(null, null);

               // Assign values to bean fields.
               if (object!=null && object.phone!=null) result.phone = object.phone;
               if (object!=null && object.phoneType!=null) {
                    result.phoneType = ContactPhoneType.toObject(object.phoneType);
               } else {
                    result.phoneType = ContactPhoneType.toObject(null);
               }

               return result;
          }
     }
     /**
        @class Adaptive.ContactProfessionalInfo
        @extends Adaptive.APIBean
        Structure representing the professional info data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactProfessionalInfo extends APIBean {
          /**
             The company of the job
          */
          company : string;
          /**
             The job description
          */
          jobDescription : string;
          /**
             The job title
          */
          jobTitle : string;
          /**
             @method constructor
             Constructor used by implementation to set the ContactProfessionalInfo.

             @param {string} jobTitle       The job title
             @param {string} jobDescription The job description
             @param {string} company        The company of the job
             @since ARP1.0
          */
          constructor(jobTitle: string, jobDescription: string, company: string) {
               super();
               this.jobTitle = jobTitle;
               this.jobDescription = jobDescription;
               this.company = company;
          }
          /**
             @method
             Returns the company of the job

             @return {string} company
             @since ARP1.0
          */
          getCompany() : string {
               return this.company;
          }

          /**
             @method
             Set the company of the job

             @param {string} company The company of the job
             @since ARP1.0
          */
          setCompany(company: string) {
               this.company = company;
          }

          /**
             @method
             Returns the description of the job

             @return {string} description
             @since ARP1.0
          */
          getJobDescription() : string {
               return this.jobDescription;
          }

          /**
             @method
             Set the description of the job

             @param {string} jobDescription The job description
             @since ARP1.0
          */
          setJobDescription(jobDescription: string) {
               this.jobDescription = jobDescription;
          }

          /**
             @method
             Returns the title of the job

             @return {string} title
             @since ARP1.0
          */
          getJobTitle() : string {
               return this.jobTitle;
          }

          /**
             @method
             Set the title of the job

             @param {string} jobTitle The job title
             @since ARP1.0
          */
          setJobTitle(jobTitle: string) {
               this.jobTitle = jobTitle;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactProfessionalInfo.
             @return {Adaptive.ContactProfessionalInfo} Wrapped object instance.
          */
          static toObject(object : any) : ContactProfessionalInfo {
               var result : ContactProfessionalInfo = new ContactProfessionalInfo(null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.company!=null) result.company = object.company;
               if (object!=null && object.jobTitle!=null) result.jobTitle = object.jobTitle;
               if (object!=null && object.jobDescription!=null) result.jobDescription = object.jobDescription;

               return result;
          }
     }
     /**
        @class Adaptive.ContactSocial
        @extends Adaptive.APIBean
        Structure representing the social data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactSocial extends APIBean {
          /**
             The social network
          */
          socialNetwork : ContactSocialNetwork;
          /**
             The profileUrl
          */
          profileUrl : string;
          /**
             @method constructor
             Constructor used by the implementation

             @param {Adaptive.ContactSocialNetwork} socialNetwork of the profile
             @param {string} profileUrl    of the user
             @since ARP1.0
          */
          constructor(socialNetwork: ContactSocialNetwork, profileUrl: string) {
               super();
               this.socialNetwork = socialNetwork;
               this.profileUrl = profileUrl;
          }
          /**
             @method
             Returns the social network

             @return {Adaptive.ContactSocialNetwork} socialNetwork
             @since ARP1.0
          */
          getSocialNetwork() : ContactSocialNetwork {
               return this.socialNetwork;
          }

          /**
             @method
             Set the social network

             @param {Adaptive.ContactSocialNetwork} socialNetwork of the profile
             @since ARP1.0
          */
          setSocialNetwork(socialNetwork: ContactSocialNetwork) {
               this.socialNetwork = socialNetwork;
          }

          /**
             @method
             Returns the profile url of the user

             @return {string} profileUrl
             @since ARP1.0
          */
          getProfileUrl() : string {
               return this.profileUrl;
          }

          /**
             @method
             Set the profile url of the iser

             @param {string} profileUrl of the user
             @since ARP1.0
          */
          setProfileUrl(profileUrl: string) {
               this.profileUrl = profileUrl;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactSocial.
             @return {Adaptive.ContactSocial} Wrapped object instance.
          */
          static toObject(object : any) : ContactSocial {
               var result : ContactSocial = new ContactSocial(null, null);

               // Assign values to bean fields.
               if (object!=null && object.socialNetwork!=null) {
                    result.socialNetwork = ContactSocialNetwork.toObject(object.socialNetwork);
               } else {
                    result.socialNetwork = ContactSocialNetwork.toObject(null);
               }
               if (object!=null && object.profileUrl!=null) result.profileUrl = object.profileUrl;

               return result;
          }
     }
     /**
        @class Adaptive.ContactTag
        @extends Adaptive.APIBean
        Structure representing the assigned tags data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactTag extends APIBean {
          /**
             The tagName of the Tag
          */
          tagName : string;
          /**
             The tagValue of the Tag
          */
          tagValue : string;
          /**
             @method constructor
             Constructor used by the implementation

             @param {string} tagValue Value of the tag
             @param {string} tagName  Name of the tag
             @since ARP1.0
          */
          constructor(tagName: string, tagValue: string) {
               super();
               this.tagName = tagName;
               this.tagValue = tagValue;
          }
          /**
             @method
             Returns the tagName of the Tag

             @return {string} tagName
             @since ARP1.0
          */
          getTagName() : string {
               return this.tagName;
          }

          /**
             @method
             Set the tagName of the Tag

             @param {string} tagName Name of the tag
             @since ARP1.0
          */
          setTagName(tagName: string) {
               this.tagName = tagName;
          }

          /**
             @method
             Returns the tagValue of the Tag

             @return {string} tagValue
             @since ARP1.0
          */
          getTagValue() : string {
               return this.tagValue;
          }

          /**
             @method
             Set the tagValue of the Tag

             @param {string} tagValue Value of the tag
             @since ARP1.0
          */
          setTagValue(tagValue: string) {
               this.tagValue = tagValue;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactTag.
             @return {Adaptive.ContactTag} Wrapped object instance.
          */
          static toObject(object : any) : ContactTag {
               var result : ContactTag = new ContactTag(null, null);

               // Assign values to bean fields.
               if (object!=null && object.tagName!=null) result.tagName = object.tagName;
               if (object!=null && object.tagValue!=null) result.tagValue = object.tagValue;

               return result;
          }
     }
     /**
        @class Adaptive.ContactUid
        @extends Adaptive.APIBean
        Structure representing the internal unique identifier data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactUid extends APIBean {
          /**
             The id of the Contact
          */
          contactId : string;
          /**
             @method constructor
             Constructor used by implementation to set the Contact id.

             @param {string} contactId Internal unique contact id.
             @since ARP1.0
          */
          constructor(contactId: string) {
               super();
               this.contactId = contactId;
          }
          /**
             @method
             Returns the contact id

             @return {string} Contactid Internal unique contact id.
             @since ARP1.0
          */
          getContactId() : string {
               return this.contactId;
          }

          /**
             @method
             Set the id of the Contact

             @param {string} contactId Internal unique contact id.
             @since ARP1.0
          */
          setContactId(contactId: string) {
               this.contactId = contactId;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactUid.
             @return {Adaptive.ContactUid} Wrapped object instance.
          */
          static toObject(object : any) : ContactUid {
               var result : ContactUid = new ContactUid(null);

               // Assign values to bean fields.
               if (object!=null && object.contactId!=null) result.contactId = object.contactId;

               return result;
          }
     }
     /**
        @class Adaptive.ContactWebsite
        @extends Adaptive.APIBean
        Structure representing the website data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class ContactWebsite extends APIBean {
          /**
             The url of the website
          */
          url : string;
          /**
             @method constructor
             Constructor used by the implementation

             @param {string} url Url of the website
             @since ARP1.0
          */
          constructor(url: string) {
               super();
               this.url = url;
          }
          /**
             @method
             Returns the url of the website

             @return {string} website url
             @since ARP1.0
          */
          getUrl() : string {
               return this.url;
          }

          /**
             @method
             Set the url of the website

             @param {string} url Url of the website
             @since ARP1.0
          */
          setUrl(url: string) {
               this.url = url;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ContactWebsite.
             @return {Adaptive.ContactWebsite} Wrapped object instance.
          */
          static toObject(object : any) : ContactWebsite {
               var result : ContactWebsite = new ContactWebsite(null);

               // Assign values to bean fields.
               if (object!=null && object.url!=null) result.url = object.url;

               return result;
          }
     }
     /**
        @class Adaptive.Database
        @extends Adaptive.APIBean
        Structure representing a database reference.

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class Database extends APIBean {
          /**
             Indicates if database was created or needs to be created as Compressed.
          */
          compress : boolean;
          /**
             Database Name (name of the .db local file).
          */
          name : string;
          /**
             @method constructor
             Constructor using fields.

             @param {string} name     Name of the DatabaseTable.
             @param {boolean} compress Compression enabled.
             @since ARP1.0
          */
          constructor(name: string, compress: boolean) {
               super();
               this.name = name;
               this.compress = compress;
          }
          /**
             @method
             Returns if the table is compressed

             @return {boolean} Compression enabled
             @since ARP1.0
          */
          getCompress() : boolean {
               return this.compress;
          }

          /**
             @method
             Sets if the table is compressed or not.

             @param {boolean} compress Compression enabled
             @since ARP1.0
          */
          setCompress(compress: boolean) {
               this.compress = compress;
          }

          /**
             @method
             Returns the name.

             @return {string} The name of the table.
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Sets the name of the table.

             @param {string} name The name of the table.
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Database.
             @return {Adaptive.Database} Wrapped object instance.
          */
          static toObject(object : any) : Database {
               var result : Database = new Database(null, null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) result.name = object.name;
               if (object!=null && object.compress!=null) result.compress = object.compress;

               return result;
          }
     }
     /**
        @class Adaptive.DatabaseColumn
        @extends Adaptive.APIBean
        Structure representing the column specification of a data column.

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class DatabaseColumn extends APIBean {
          /**
             Name of the column
          */
          name : string;
          /**
             @method constructor
             Constructor with fields

             @param {string} name Name of the column
             @since ARP1.0
          */
          constructor(name: string) {
               super();
               this.name = name;
          }
          /**
             @method
             Returns the name of the column.

             @return {string} The name of the column.
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Sets the name of the column.

             @param {string} name The name of the column.
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.DatabaseColumn.
             @return {Adaptive.DatabaseColumn} Wrapped object instance.
          */
          static toObject(object : any) : DatabaseColumn {
               var result : DatabaseColumn = new DatabaseColumn(null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) result.name = object.name;

               return result;
          }
     }
     /**
        @class Adaptive.DatabaseRow
        @extends Adaptive.APIBean
        Structure representing a row for a data table.

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class DatabaseRow extends APIBean {
          /**
             The values of the row.
          */
          values : Array<string>;
          /**
             @method constructor
             Constructor for implementation using.

             @param {string[]} values The values of the row
             @since ARP1.0
          */
          constructor(values: Array<string>) {
               super();
               this.values = values;
          }
          /**
             @method
             Returns the values of the row.

             @return {string[]} The values of the row.
             @since ARP1.0
          */
          getValues() : Array<string> {
               return this.values;
          }

          /**
             @method
             Sets the values of the row.

             @param {string[]} values The values of the row.
             @since ARP1.0
          */
          setValues(values: Array<string>) {
               this.values = values;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.DatabaseRow.
             @return {Adaptive.DatabaseRow} Wrapped object instance.
          */
          static toObject(object : any) : DatabaseRow {
               var result : DatabaseRow = new DatabaseRow(null);

               // Assign values to bean fields.
               if (object != null && object.values != null) {
                    result.values = new Array<string>();
                    for(var i = 0; i < object.values.length; i++) {
                         var __value__ = object.values[i];
                         if (__value__ != null) result.values.push(__value__);
                    }
               }

               return result;
          }
     }
     /**
        @class Adaptive.DatabaseTable
        @extends Adaptive.APIBean
        Represents a data table composed of databaseColumns and databaseRows.

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class DatabaseTable extends APIBean {
          /**
             Number of databaseColumns.
          */
          columnCount : number;
          /**
             Definition of databaseColumns.
          */
          databaseColumns : Array<DatabaseColumn>;
          /**
             Rows of the table containing the data.
          */
          databaseRows : Array<DatabaseRow>;
          /**
             Name of the table.
          */
          name : string;
          /**
             Number of databaseRows.
          */
          rowCount : number;
          /**
             @method constructor
             Constructor using fields

             @param {string} name            The name of the table
             @param {number} columnCount     The number of databaseColumns
             @param {number} rowCount        The number of databaseRows
             @param {Adaptive.DatabaseColumn[]} databaseColumns The databaseColumns of the table
             @param {Adaptive.DatabaseRow[]} databaseRows    The databaseRows of the table
             @since ARP1.0
          */
          constructor(name: string, columnCount: number, rowCount: number, databaseColumns: Array<DatabaseColumn>, databaseRows: Array<DatabaseRow>) {
               super();
               this.name = name;
               this.columnCount = columnCount;
               this.rowCount = rowCount;
               this.databaseColumns = databaseColumns;
               this.databaseRows = databaseRows;
          }
          /**
             @method
             Get the number of databaseColumns

             @return {number} The number of databaseColumns
             @since ARP1.0
          */
          getColumnCount() : number {
               return this.columnCount;
          }

          /**
             @method
             Sets the number of databaseColumns

             @param {number} columnCount The number of databaseColumns
             @since ARP1.0
          */
          setColumnCount(columnCount: number) {
               this.columnCount = columnCount;
          }

          /**
             @method
             Get the databaseColumns

             @return {Adaptive.DatabaseColumn[]} The databaseColumns
             @since ARP1.0
          */
          getDatabaseColumns() : Array<DatabaseColumn> {
               return this.databaseColumns;
          }

          /**
             @method
             Sets the databaseColumns of the table

             @param {Adaptive.DatabaseColumn[]} databaseColumns The databaseColumns of the table
             @since ARP1.0
          */
          setDatabaseColumns(databaseColumns: Array<DatabaseColumn>) {
               this.databaseColumns = databaseColumns;
          }

          /**
             @method
             Get the databaseRows of the table

             @return {Adaptive.DatabaseRow[]} The databaseRows of the table
             @since ARP1.0
          */
          getDatabaseRows() : Array<DatabaseRow> {
               return this.databaseRows;
          }

          /**
             @method
             Sets the databaseRows of the table

             @param {Adaptive.DatabaseRow[]} databaseRows The databaseRows of the table
             @since ARP1.0
          */
          setDatabaseRows(databaseRows: Array<DatabaseRow>) {
               this.databaseRows = databaseRows;
          }

          /**
             @method
             Returns the name of the table

             @return {string} The name of the table
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Sets the name of the table

             @param {string} name The name of the table
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             Get the number of databaseRows

             @return {number} The number of databaseRows
             @since ARP1.0
          */
          getRowCount() : number {
               return this.rowCount;
          }

          /**
             @method
             Sets the number of databaseRows

             @param {number} rowCount The number of databaseRows
             @since ARP1.0
          */
          setRowCount(rowCount: number) {
               this.rowCount = rowCount;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.DatabaseTable.
             @return {Adaptive.DatabaseTable} Wrapped object instance.
          */
          static toObject(object : any) : DatabaseTable {
               var result : DatabaseTable = new DatabaseTable(null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) result.name = object.name;
               if (object!=null && object.columnCount!=null) result.columnCount = object.columnCount;
               if (object!=null && object.rowCount!=null) result.rowCount = object.rowCount;
               if (object != null && object.databaseColumns != null) {
                    result.databaseColumns = new Array<DatabaseColumn>();
                    for(var i = 0; i < object.databaseColumns.length; i++) {
                         var __value__ = object.databaseColumns[i];
                         if (__value__ != null) {
                              result.databaseColumns.push(DatabaseColumn.toObject(__value__));
                         } else {
                              result.databaseColumns.push(DatabaseColumn.toObject(null));
                         }
                    }
               }
               if (object != null && object.databaseRows != null) {
                    result.databaseRows = new Array<DatabaseRow>();
                    for(var i = 0; i < object.databaseRows.length; i++) {
                         var __value__ = object.databaseRows[i];
                         if (__value__ != null) {
                              result.databaseRows.push(DatabaseRow.toObject(__value__));
                         } else {
                              result.databaseRows.push(DatabaseRow.toObject(null));
                         }
                    }
               }

               return result;
          }
     }
     /**
        @class Adaptive.DeviceInfo
        @extends Adaptive.APIBean
        Structure representing the basic device information.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class DeviceInfo extends APIBean {
          /**
             Model of device - equivalent to device release or version.
          */
          model : string;
          /**
             Name of device - equivalent to brand.
          */
          name : string;
          /**
             Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
          */
          uuid : string;
          /**
             Vendor of the device hardware.
          */
          vendor : string;
          /**
             @method constructor
             Constructor for the implementation of the platform.

             @param {string} name   or brand of the device.
             @param {string} model  of the device.
             @param {string} vendor of the device.
             @param {string} uuid   unique* identifier (* platform dependent).
             @since ARP1.0
          */
          constructor(name: string, model: string, vendor: string, uuid: string) {
               super();
               this.name = name;
               this.model = model;
               this.vendor = vendor;
               this.uuid = uuid;
          }
          /**
             @method
             Returns the model of the device.

             @return {string} String with the model of the device.
             @since ARP1.0
          */
          getModel() : string {
               return this.model;
          }

          /**
             @method
             Sets Model of device - equivalent to device release or version.

             @param {string} model Model of device - equivalent to device release or version.
          */
          setModel(model: string) {
               this.model = model;
          }

          /**
             @method
             Returns the name of the device.

             @return {string} String with device name.
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Sets Name of device - equivalent to brand.

             @param {string} name Name of device - equivalent to brand.
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             Returns the platform dependent UUID of the device.

             @return {string} String with the 128-bit device identifier.
             @since ARP1.0
          */
          getUuid() : string {
               return this.uuid;
          }

          /**
             @method
             Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

             @param {string} uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
          */
          setUuid(uuid: string) {
               this.uuid = uuid;
          }

          /**
             @method
             Returns the vendor of the device.

             @return {string} String with the vendor name.
             @since ARP1.0
          */
          getVendor() : string {
               return this.vendor;
          }

          /**
             @method
             Sets Vendor of the device hardware.

             @param {string} vendor Vendor of the device hardware.
          */
          setVendor(vendor: string) {
               this.vendor = vendor;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.DeviceInfo.
             @return {Adaptive.DeviceInfo} Wrapped object instance.
          */
          static toObject(object : any) : DeviceInfo {
               var result : DeviceInfo = new DeviceInfo(null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) result.name = object.name;
               if (object!=null && object.model!=null) result.model = object.model;
               if (object!=null && object.vendor!=null) result.vendor = object.vendor;
               if (object!=null && object.uuid!=null) result.uuid = object.uuid;

               return result;
          }
     }
     /**
        @class Adaptive.Email
        @extends Adaptive.APIBean
        Structure representing the data elements of an email.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Email extends APIBean {
          /**
             Array of Email Blind Carbon Copy recipients
          */
          bccRecipients : Array<EmailAddress>;
          /**
             Array of Email Carbon Copy recipients
          */
          ccRecipients : Array<EmailAddress>;
          /**
             Array of attatchments
          */
          emailAttachmentData : Array<EmailAttachmentData>;
          /**
             Message body
          */
          messageBody : string;
          /**
             Message body mime type
          */
          messageBodyMimeType : string;
          /**
             Subject of the email
          */
          subject : string;
          /**
             Array of Email recipients
          */
          toRecipients : Array<EmailAddress>;
          /**
             @method constructor
             Constructor used by the implementation

             @param {Adaptive.EmailAddress[]} toRecipients        array of recipients
             @param {Adaptive.EmailAddress[]} ccRecipients        array of cc recipients
             @param {Adaptive.EmailAddress[]} bccRecipients       array of bcc recipients
             @param {Adaptive.EmailAttachmentData[]} emailAttachmentData array of attatchments
             @param {string} messageBody         body of the email
             @param {string} messageBodyMimeType mime type of the body
             @param {string} subject             of the email
             @since ARP1.0
          */
          constructor(toRecipients: Array<EmailAddress>, ccRecipients: Array<EmailAddress>, bccRecipients: Array<EmailAddress>, emailAttachmentData: Array<EmailAttachmentData>, messageBody: string, messageBodyMimeType: string, subject: string) {
               super();
               this.toRecipients = toRecipients;
               this.ccRecipients = ccRecipients;
               this.bccRecipients = bccRecipients;
               this.emailAttachmentData = emailAttachmentData;
               this.messageBody = messageBody;
               this.messageBodyMimeType = messageBodyMimeType;
               this.subject = subject;
          }
          /**
             @method
             Returns the array of recipients

             @return {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
             @since ARP1.0
          */
          getBccRecipients() : Array<EmailAddress> {
               return this.bccRecipients;
          }

          /**
             @method
             Set the array of recipients

             @param {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
             @since ARP1.0
          */
          setBccRecipients(bccRecipients: Array<EmailAddress>) {
               this.bccRecipients = bccRecipients;
          }

          /**
             @method
             Returns the array of recipients

             @return {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
             @since ARP1.0
          */
          getCcRecipients() : Array<EmailAddress> {
               return this.ccRecipients;
          }

          /**
             @method
             Set the array of recipients

             @param {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
             @since ARP1.0
          */
          setCcRecipients(ccRecipients: Array<EmailAddress>) {
               this.ccRecipients = ccRecipients;
          }

          /**
             @method
             Returns an array of attachments

             @return {Adaptive.EmailAttachmentData[]} emailAttachmentData array with the email attachments
             @since ARP1.0
          */
          getEmailAttachmentData() : Array<EmailAttachmentData> {
               return this.emailAttachmentData;
          }

          /**
             @method
             Set the email attachment data array

             @param {Adaptive.EmailAttachmentData[]} emailAttachmentData array of email attatchments
             @since ARP1.0
          */
          setEmailAttachmentData(emailAttachmentData: Array<EmailAttachmentData>) {
               this.emailAttachmentData = emailAttachmentData;
          }

          /**
             @method
             Returns the message body of the email

             @return {string} message Body string of the email
             @since ARP1.0
          */
          getMessageBody() : string {
               return this.messageBody;
          }

          /**
             @method
             Set the message body of the email

             @param {string} messageBody message body of the email
             @since ARP1.0
          */
          setMessageBody(messageBody: string) {
               this.messageBody = messageBody;
          }

          /**
             @method
             Returns the myme type of the message body

             @return {string} mime type string of the message boddy
             @since ARP1.0
          */
          getMessageBodyMimeType() : string {
               return this.messageBodyMimeType;
          }

          /**
             @method
             Set the mime type for the message body

             @param {string} messageBodyMimeType type of the body message
             @since ARP1.0
          */
          setMessageBodyMimeType(messageBodyMimeType: string) {
               this.messageBodyMimeType = messageBodyMimeType;
          }

          /**
             @method
             Returns the subject of the email

             @return {string} subject string of the email
             @since ARP1.0
          */
          getSubject() : string {
               return this.subject;
          }

          /**
             @method
             Set the subject of the email

             @param {string} subject of the email
             @since ARP1.0
          */
          setSubject(subject: string) {
               this.subject = subject;
          }

          /**
             @method
             Returns the array of recipients

             @return {Adaptive.EmailAddress[]} toRecipients array of recipients
             @since ARP1.0
          */
          getToRecipients() : Array<EmailAddress> {
               return this.toRecipients;
          }

          /**
             @method
             Set the array of recipients

             @param {Adaptive.EmailAddress[]} toRecipients array of recipients
             @since ARP1.0
          */
          setToRecipients(toRecipients: Array<EmailAddress>) {
               this.toRecipients = toRecipients;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Email.
             @return {Adaptive.Email} Wrapped object instance.
          */
          static toObject(object : any) : Email {
               var result : Email = new Email(null, null, null, null, null, null, null);

               // Assign values to bean fields.
               if (object != null && object.toRecipients != null) {
                    result.toRecipients = new Array<EmailAddress>();
                    for(var i = 0; i < object.toRecipients.length; i++) {
                         var __value__ = object.toRecipients[i];
                         if (__value__ != null) {
                              result.toRecipients.push(EmailAddress.toObject(__value__));
                         } else {
                              result.toRecipients.push(EmailAddress.toObject(null));
                         }
                    }
               }
               if (object != null && object.ccRecipients != null) {
                    result.ccRecipients = new Array<EmailAddress>();
                    for(var i = 0; i < object.ccRecipients.length; i++) {
                         var __value__ = object.ccRecipients[i];
                         if (__value__ != null) {
                              result.ccRecipients.push(EmailAddress.toObject(__value__));
                         } else {
                              result.ccRecipients.push(EmailAddress.toObject(null));
                         }
                    }
               }
               if (object != null && object.bccRecipients != null) {
                    result.bccRecipients = new Array<EmailAddress>();
                    for(var i = 0; i < object.bccRecipients.length; i++) {
                         var __value__ = object.bccRecipients[i];
                         if (__value__ != null) {
                              result.bccRecipients.push(EmailAddress.toObject(__value__));
                         } else {
                              result.bccRecipients.push(EmailAddress.toObject(null));
                         }
                    }
               }
               if (object != null && object.emailAttachmentData != null) {
                    result.emailAttachmentData = new Array<EmailAttachmentData>();
                    for(var i = 0; i < object.emailAttachmentData.length; i++) {
                         var __value__ = object.emailAttachmentData[i];
                         if (__value__ != null) {
                              result.emailAttachmentData.push(EmailAttachmentData.toObject(__value__));
                         } else {
                              result.emailAttachmentData.push(EmailAttachmentData.toObject(null));
                         }
                    }
               }
               if (object!=null && object.messageBody!=null) result.messageBody = object.messageBody;
               if (object!=null && object.messageBodyMimeType!=null) result.messageBodyMimeType = object.messageBodyMimeType;
               if (object!=null && object.subject!=null) result.subject = object.subject;

               return result;
          }
     }
     /**
        @class Adaptive.EmailAddress
        @extends Adaptive.APIBean
        Structure representing the data elements of an email addressee.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class EmailAddress extends APIBean {
          /**
             The Email address
          */
          address : string;
          /**
             @method constructor
             Constructor used by implementation

             @param {string} address of the Email
             @since ARP1.0
          */
          constructor(address: string) {
               super();
               this.address = address;
          }
          /**
             @method
             Returns the email address

             @return {string} address of the Email
             @since ARP1.0
          */
          getAddress() : string {
               return this.address;
          }

          /**
             @method
             Set the Email address

             @param {string} address of the Email
             @since ARP1.0
          */
          setAddress(address: string) {
               this.address = address;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.EmailAddress.
             @return {Adaptive.EmailAddress} Wrapped object instance.
          */
          static toObject(object : any) : EmailAddress {
               var result : EmailAddress = new EmailAddress(null);

               // Assign values to bean fields.
               if (object!=null && object.address!=null) result.address = object.address;

               return result;
          }
     }
     /**
        @class Adaptive.EmailAttachmentData
        @extends Adaptive.APIBean
        Structure representing the binary attachment data.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class EmailAttachmentData extends APIBean {
          /**
             The raw data for the current file attachment (byte array)
          */
          data : Array<number>;
          /**
             The name of the current file attachment
          */
          fileName : string;
          /**
             The mime type of the current attachment
          */
          mimeType : string;
          /**
             The relative path where the contents for the attachment file could be located.
          */
          referenceUrl : string;
          /**
             The data size (in bytes) of the current file attachment
          */
          size : number;
          /**
             @method constructor
             Constructor with fields

             @param {number[]} data         raw data of the file attachment
             @param {number} size         size of the file attachment
             @param {string} fileName     name of the file attachment
             @param {string} mimeType     mime type of the file attachment
             @param {string} referenceUrl relative url of the file attachment
             @since ARP1.0
          */
          constructor(data: Array<number>, size: number, fileName: string, mimeType: string, referenceUrl: string) {
               super();
               this.data = data;
               this.size = size;
               this.fileName = fileName;
               this.mimeType = mimeType;
               this.referenceUrl = referenceUrl;
          }
          /**
             @method
             Returns the raw data in byte[]

             @return {number[]} data Octet-binary content of the attachment payload.
             @since ARP1.0
          */
          getData() : Array<number> {
               return this.data;
          }

          /**
             @method
             Set the data of the attachment as a byte[]

             @param {number[]} data Sets the octet-binary content of the attachment.
             @since ARP1.0
          */
          setData(data: Array<number>) {
               this.data = data;
          }

          /**
             @method
             Returns the filename of the attachment

             @return {string} fileName Name of the attachment.
             @since ARP1.0
          */
          getFileName() : string {
               return this.fileName;
          }

          /**
             @method
             Set the name of the file attachment

             @param {string} fileName Name of the attachment.
             @since ARP1.0
          */
          setFileName(fileName: string) {
               this.fileName = fileName;
          }

          /**
             @method
             Returns the mime type of the attachment

             @return {string} mimeType
             @since ARP1.0
          */
          getMimeType() : string {
               return this.mimeType;
          }

          /**
             @method
             Set the mime type of the attachment

             @param {string} mimeType Mime-type of the attachment.
             @since ARP1.0
          */
          setMimeType(mimeType: string) {
               this.mimeType = mimeType;
          }

          /**
             @method
             Returns the absolute url of the file attachment

             @return {string} referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
             @since ARP1.0
          */
          getReferenceUrl() : string {
               return this.referenceUrl;
          }

          /**
             @method
             Set the absolute url of the attachment

             @param {string} referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
             @since ARP1.0
          */
          setReferenceUrl(referenceUrl: string) {
               this.referenceUrl = referenceUrl;
          }

          /**
             @method
             Returns the size of the attachment as a long

             @return {number} size Length in bytes of the octet-binary content.
             @since ARP1.0
          */
          getSize() : number {
               return this.size;
          }

          /**
             @method
             Set the size of the attachment as a long

             @param {number} size Length in bytes of the octet-binary content ( should be same as data array length.)
             @since ARP1.0
          */
          setSize(size: number) {
               this.size = size;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.EmailAttachmentData.
             @return {Adaptive.EmailAttachmentData} Wrapped object instance.
          */
          static toObject(object : any) : EmailAttachmentData {
               var result : EmailAttachmentData = new EmailAttachmentData(null, null, null, null, null);

               // Assign values to bean fields.
               if (object != null && object.data != null) {
                    result.data = new Array<number>();
                    for(var i = 0; i < object.data.length; i++) {
                         var __value__ = object.data[i];
                         if (__value__ != null) result.data.push(__value__);
                    }
               }
               if (object!=null && object.size!=null) result.size = object.size;
               if (object!=null && object.fileName!=null) result.fileName = object.fileName;
               if (object!=null && object.mimeType!=null) result.mimeType = object.mimeType;
               if (object!=null && object.referenceUrl!=null) result.referenceUrl = object.referenceUrl;

               return result;
          }
     }
     /**
        @class Adaptive.FileDescriptor
        @extends Adaptive.APIBean
        Implementation of FileDescriptor bean.

        @author Carlos Lozano Diez
        @since 1.0
        @version 1.0
     */
     export class FileDescriptor extends APIBean {
          dateCreated : number;
          dateModified : number;
          name : string;
          path : string;
          pathAbsolute : string;
          size : number;
          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
          /**
             @method
             Returns the milliseconds passed since 1/1/1970 since the file was created.

             @return {number} Timestamp in milliseconds.
             @since ARP1.0
          */
          getDateCreated() : number {
               return this.dateCreated;
          }

          /**
             @method
             Sets the creation timestamp in milliseconds. Used internally.

             @param {number} dateCreated Timestamp of file creation or -1 if the file or folder doesn't exist.
          */
          setDateCreated(dateCreated: number) {
               this.dateCreated = dateCreated;
          }

          /**
             @method
             Returns the milliseconds passed since 1/1/1970 since the file was modified.

             @return {number} Timestamp in milliseconds.
             @since ARP1.0
          */
          getDateModified() : number {
               return this.dateModified;
          }

          /**
             @method
             Sets the file or folder modification timestamp in milliseconds. Used internally.

             @param {number} dateModified Timestamp of file modification or -1 if the file or folder doesn't exist.
          */
          setDateModified(dateModified: number) {
               this.dateModified = dateModified;
          }

          /**
             @method
             Returns the name of the file if the reference is a file or the last path element of the folder.

             @return {string} The name of the file.
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Sets the name of the file. Used internally.

             @param {string} name Name of the file or last folder path element.
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             Returns the path element of the file or folder (excluding the last path element if it's a directory).

             @return {string} The path to the file.
             @since ARP1.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             @method
             Sets the path of the file or folder. Used internally.

             @param {string} path The path element of the file or folder.
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             @method
             Returns the resolved absolute path elements of the file and/or folders (including the last path element).

             @return {string} The absolute path to the file.
             @since ARP1.0
          */
          getPathAbsolute() : string {
               return this.pathAbsolute;
          }

          /**
             @method
             Sets the absolute path of the file or folder. Used internally.

             @param {string} pathAbsolute String with the absolute path of file or folder.
          */
          setPathAbsolute(pathAbsolute: string) {
               this.pathAbsolute = pathAbsolute;
          }

          /**
             @method
             Returns the size in bytes of the file or -1 if the reference is a folder.

             @return {number} Size in bytes of file.
             @since ARP1.0
          */
          getSize() : number {
               return this.size;
          }

          /**
             @method
             Sets the file size in bytes of the file. If the file is a folder, this will be 0. If the file
doesn't exist, this will be -1. Used internally.

             @param {number} size The size in bytes of the file.
          */
          setSize(size: number) {
               this.size = size;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.FileDescriptor.
             @return {Adaptive.FileDescriptor} Wrapped object instance.
          */
          static toObject(object : any) : FileDescriptor {
               var result : FileDescriptor = new FileDescriptor();

               // Assign values to bean fields.
               if (object!=null && object.name!=null) result.name = object.name;
               if (object!=null && object.path!=null) result.path = object.path;
               if (object!=null && object.pathAbsolute!=null) result.pathAbsolute = object.pathAbsolute;
               if (object!=null && object.dateCreated!=null) result.dateCreated = object.dateCreated;
               if (object!=null && object.dateModified!=null) result.dateModified = object.dateModified;
               if (object!=null && object.size!=null) result.size = object.size;

               return result;
          }
     }
     /**
        @class Adaptive.Geolocation
        @extends Adaptive.APIBean
        Structure representing the data a single geolocation reading.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Geolocation extends APIBean {
          /**
             The current device altitude (or Z coordinate). Measured in meters.
          */
          altitude : number;
          /**
             The Y coordinate (or latitude). Measured in degrees.
          */
          latitude : number;
          /**
             The X coordinate (or longitude). Measured in degrees.
          */
          longitude : number;
          /**
             Timestamp of the geolocation reading.
          */
          timestamp : number;
          /**
             Dilution of precision on the X measurement. Measured in meters.
          */
          xDoP : number;
          /**
             Dilution of precision on the Y measurement. Measured in meters.
          */
          yDoP : number;
          /**
             @method constructor
             Constructor with parameters

             @param {number} latitude  Latitude of the measurement
             @param {number} longitude Longitude of the measurement
             @param {number} altitude  Altitude of the measurement
             @param {number} xDoP      Dilution of precision on the X measurement
             @param {number} yDoP      Dilution of precision on the Y measurement
             @param {number} timestamp Timestamp of the measurement
             @since ARP1.0
          */
          constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number, timestamp: number) {
               super();
               this.latitude = latitude;
               this.longitude = longitude;
               this.altitude = altitude;
               this.xDoP = xDoP;
               this.yDoP = yDoP;
               this.timestamp = timestamp;
          }
          /**
             @method
             Returns altitude in meters

             @return {number} Altitude of the measurement
             @since ARP1.0
          */
          getAltitude() : number {
               return this.altitude;
          }

          /**
             @method
             Set altitude in meters

             @param {number} altitude Altitude of the measurement
             @since ARP1.0
          */
          setAltitude(altitude: number) {
               this.altitude = altitude;
          }

          /**
             @method
             Returns the latitude in degrees

             @return {number} Latitude of the measurement
             @since ARP1.0
          */
          getLatitude() : number {
               return this.latitude;
          }

          /**
             @method
             Set the latitude in degrees

             @param {number} latitude Latitude of the measurement
             @since ARP1.0
          */
          setLatitude(latitude: number) {
               this.latitude = latitude;
          }

          /**
             @method
             Returns the longitude in degrees

             @return {number} Longitude of the measurement
             @since ARP1.0
          */
          getLongitude() : number {
               return this.longitude;
          }

          /**
             @method
             Returns the latitude in degrees

             @param {number} longitude Longitude of the measurement
             @since ARP1.0
          */
          setLongitude(longitude: number) {
               this.longitude = longitude;
          }

          /**
             @method
             Timestamp Getter

             @return {number} Timestamp
             @since ARP1.0
          */
          getTimestamp() : number {
               return this.timestamp;
          }

          /**
             @method
             Timestamp Setter

             @param {number} timestamp Timestamp
             @since ARP1.0
          */
          setTimestamp(timestamp: number) {
               this.timestamp = timestamp;
          }

          /**
             @method
             Gets Dilution of precision on the X measurement. Measured in meters.

             @return {number} xDoP Dilution of precision on the X measurement. Measured in meters.
          */
          getXDoP() : number {
               return this.xDoP;
          }

          /**
             @method
             Sets Dilution of precision on the X measurement. Measured in meters.

             @param {number} xDoP Dilution of precision on the X measurement. Measured in meters.
          */
          setXDoP(xDoP: number) {
               this.xDoP = xDoP;
          }

          /**
             @method
             Gets Dilution of precision on the Y measurement. Measured in meters.

             @return {number} yDoP Dilution of precision on the Y measurement. Measured in meters.
          */
          getYDoP() : number {
               return this.yDoP;
          }

          /**
             @method
             Sets Dilution of precision on the Y measurement. Measured in meters.

             @param {number} yDoP Dilution of precision on the Y measurement. Measured in meters.
          */
          setYDoP(yDoP: number) {
               this.yDoP = yDoP;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Geolocation.
             @return {Adaptive.Geolocation} Wrapped object instance.
          */
          static toObject(object : any) : Geolocation {
               var result : Geolocation = new Geolocation(null, null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.latitude!=null) result.latitude = object.latitude;
               if (object!=null && object.longitude!=null) result.longitude = object.longitude;
               if (object!=null && object.altitude!=null) result.altitude = object.altitude;
               if (object!=null && object.xDoP!=null) result.xDoP = object.xDoP;
               if (object!=null && object.yDoP!=null) result.yDoP = object.yDoP;
               if (object!=null && object.timestamp!=null) result.timestamp = object.timestamp;

               return result;
          }
     }
     /**
        @class Adaptive.KeyPair
        @extends Adaptive.APIBean
        Represents a basic bean to store keyName pair values

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class KeyPair extends APIBean {
          /**
             Key of the element
          */
          keyName : string;
          /**
             Value of the element
          */
          keyValue : string;
          /**
             @method constructor
             Constructor using fields

             @param {string} keyName  Key of the element
             @param {string} keyValue Value of the element
             @since ARP1.0
          */
          constructor(keyName: string, keyValue: string) {
               super();
               this.keyName = keyName;
               this.keyValue = keyValue;
          }
          /**
             @method
             Returns the keyName of the element

             @return {string} Key of the element
             @since ARP1.0
          */
          getKeyName() : string {
               return this.keyName;
          }

          /**
             @method
             Sets the keyName of the element

             @param {string} keyName Key of the element
             @since ARP1.0
          */
          setKeyName(keyName: string) {
               this.keyName = keyName;
          }

          /**
             @method
             Returns the keyValue of the element

             @return {string} Value of the element
             @since ARP1.0
          */
          getKeyValue() : string {
               return this.keyValue;
          }

          /**
             @method
             Sets the keyValue of the element

             @param {string} keyValue Value of the element
             @since ARP1.0
          */
          setKeyValue(keyValue: string) {
               this.keyValue = keyValue;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.KeyPair.
             @return {Adaptive.KeyPair} Wrapped object instance.
          */
          static toObject(object : any) : KeyPair {
               var result : KeyPair = new KeyPair(null, null);

               // Assign values to bean fields.
               if (object!=null && object.keyName!=null) result.keyName = object.keyName;
               if (object!=null && object.keyValue!=null) result.keyValue = object.keyValue;

               return result;
          }
     }
     /**
        @class Adaptive.Lifecycle
        @extends Adaptive.APIBean
        Represents a specific application life-cycle stage.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Lifecycle extends APIBean {
          /**
             Represent the state of the app
<p/>
Possible lifecycle States:
<p/>
1. Starting    - Before starting.
2. Started     - Start concluded.
3. Running     - Accepts user interaction - running in foreground.
4. Pausing     - Before going to background.
4.1 PausedIdle - In background, no scheduled background activity (passive).
4.2 PausedRun  - In background, scheduled background activity (periodic network access, gps access, etc.)
5. Resuming    - Before going to foreground, followed by Running state.
6. Stopping    - Before stopping.
          */
          state : LifecycleState;
          /**
             @method constructor
             Constructor used by the implementation

             @param {Adaptive.LifecycleState} state of the app
             @since ARP1.0
          */
          constructor(state: LifecycleState) {
               super();
               this.state = state;
          }
          /**
             @method
             Returns the state of the application

             @return {Adaptive.LifecycleState} state of the app
             @since ARP1.0
          */
          getState() : LifecycleState {
               return this.state;
          }

          /**
             @method
             Set the State of the application

             @param {Adaptive.LifecycleState} state of the app
             @since ARP1.0
          */
          setState(state: LifecycleState) {
               this.state = state;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Lifecycle.
             @return {Adaptive.Lifecycle} Wrapped object instance.
          */
          static toObject(object : any) : Lifecycle {
               var result : Lifecycle = new Lifecycle(null);

               // Assign values to bean fields.
               if (object!=null && object.state!=null) {
                    result.state = LifecycleState.toObject(object.state);
               } else {
                    result.state = LifecycleState.toObject(null);
               }

               return result;
          }
     }
     /**
        @class Adaptive.Locale
        @extends Adaptive.APIBean
        Represents a specific user or system locate.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class Locale extends APIBean {
          /**
             A valid ISO Country Code.
          */
          country : string;
          /**
             A valid ISO Language Code.
          */
          language : string;
          /**
             @method constructor
             Constructor used by the implementation

             @param {string} country  Country of the Locale
             @param {string} language Language of the Locale
             @since ARP1.0
          */
          constructor(language: string, country: string) {
               super();
               this.language = language;
               this.country = country;
          }
          /**
             @method
             Returns the country code

             @return {string} country code
             @since ARP1.0
          */
          getCountry() : string {
               return this.country;
          }

          /**
             @method
             Set the country code

             @param {string} country code
             @since ARP1.0
          */
          setCountry(country: string) {
               this.country = country;
          }

          /**
             @method
             Returns the language code

             @return {string} language code
             @since ARP1.0
          */
          getLanguage() : string {
               return this.language;
          }

          /**
             @method
             Set the language code

             @param {string} language code
             @since ARP1.0
          */
          setLanguage(language: string) {
               this.language = language;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Locale.
             @return {Adaptive.Locale} Wrapped object instance.
          */
          static toObject(object : any) : Locale {
               var result : Locale = new Locale(null, null);

               // Assign values to bean fields.
               if (object!=null && object.country!=null) result.country = object.country;
               if (object!=null && object.language!=null) result.language = object.language;

               return result;
          }
     }
     /**
        @class Adaptive.OSInfo
        @extends Adaptive.APIBean
        Represents the basic information about the operating system.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class OSInfo extends APIBean {
          /**
             The name of the operating system.
          */
          name : IOSType;
          /**
             The vendor of the operating system.
          */
          vendor : string;
          /**
             The version/identifier of the operating system.
          */
          version : string;
          /**
             @method constructor
             Constructor used by implementation to set the OS information.

             @param {Adaptive.IOSType} name    of the OS.
             @param {string} version of the OS.
             @param {string} vendor  of the OS.
             @since ARP1.0
          */
          constructor(name: IOSType, version: string, vendor: string) {
               super();
               this.name = name;
               this.version = version;
               this.vendor = vendor;
          }
          /**
             @method
             Returns the name of the operating system.

             @return {Adaptive.IOSType} OS name.
             @since ARP1.0
          */
          getName() : IOSType {
               return this.name;
          }

          /**
             @method
             Sets The name of the operating system.

             @param {Adaptive.IOSType} name The name of the operating system.
          */
          setName(name: IOSType) {
               this.name = name;
          }

          /**
             @method
             Returns the vendor of the operating system.

             @return {string} OS vendor.
             @since ARP1.0
          */
          getVendor() : string {
               return this.vendor;
          }

          /**
             @method
             Sets The vendor of the operating system.

             @param {string} vendor The vendor of the operating system.
          */
          setVendor(vendor: string) {
               this.vendor = vendor;
          }

          /**
             @method
             Returns the version of the operating system.

             @return {string} OS version.
             @since ARP1.0
          */
          getVersion() : string {
               return this.version;
          }

          /**
             @method
             Sets The version/identifier of the operating system.

             @param {string} version The version/identifier of the operating system.
          */
          setVersion(version: string) {
               this.version = version;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.OSInfo.
             @return {Adaptive.OSInfo} Wrapped object instance.
          */
          static toObject(object : any) : OSInfo {
               var result : OSInfo = new OSInfo(null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) {
                    result.name = IOSType.toObject(object.name);
               } else {
                    result.name = IOSType.toObject(null);
               }
               if (object!=null && object.version!=null) result.version = object.version;
               if (object!=null && object.vendor!=null) result.vendor = object.vendor;

               return result;
          }
     }
     /**
        @class Adaptive.SecureKeyPair
        @extends Adaptive.APIBean
        Represents a single secureKey-value pair.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class SecureKeyPair extends APIBean {
          /**
             Value of the secured element
          */
          secureData : string;
          /**
             Key of the secured element
          */
          secureKey : string;
          /**
             @method constructor
             Constructor with parameters

             @param {string} secureKey  name of the keypair
             @param {string} secureData value of the keypair
             @since ARP1.0
          */
          constructor(secureKey: string, secureData: string) {
               super();
               this.secureKey = secureKey;
               this.secureData = secureData;
          }
          /**
             @method
             Returns the object value

             @return {string} Value.
             @since ARP 1.0
          */
          getSecureData() : string {
               return this.secureData;
          }

          /**
             @method
             Sets the value for this object

             @param {string} secureData value to set.
             @since ARP 1.0
          */
          setSecureData(secureData: string) {
               this.secureData = secureData;
          }

          /**
             @method
             Returns the object secureKey name.

             @return {string} Key name.
             @since ARP 1.0
          */
          getSecureKey() : string {
               return this.secureKey;
          }

          /**
             @method
             Sets the secureKey name for this object.

             @param {string} secureKey Key name.
             @since ARP 1.0
          */
          setSecureKey(secureKey: string) {
               this.secureKey = secureKey;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.SecureKeyPair.
             @return {Adaptive.SecureKeyPair} Wrapped object instance.
          */
          static toObject(object : any) : SecureKeyPair {
               var result : SecureKeyPair = new SecureKeyPair(null, null);

               // Assign values to bean fields.
               if (object!=null && object.secureKey!=null) result.secureKey = object.secureKey;
               if (object!=null && object.secureData!=null) result.secureData = object.secureData;

               return result;
          }
     }
     /**
        @class Adaptive.Service
        @extends Adaptive.APIBean
        Represents an instance of a service.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class Service extends APIBean {
          /**
             The type of the service
          */
          type : IServiceType;
          /**
             The service name
          */
          name : string;
          /**
             Endpoint of the service
          */
          serviceEndpoints : Array<ServiceEndpoint>;
          /**
             @method constructor
             Constructor used by the implementation

             @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoints of the service
             @param {string} name             Name of the service
             @param {Adaptive.IServiceType} type             Type of the service
             @since ARP1.0
          */
          constructor(serviceEndpoints: Array<ServiceEndpoint>, name: string, type: IServiceType) {
               super();
               this.serviceEndpoints = serviceEndpoints;
               this.name = name;
               this.type = type;
          }
          /**
             @method
             Returns the type

             @return {Adaptive.IServiceType} type
             @since ARP1.0
          */
          getType() : IServiceType {
               return this.type;
          }

          /**
             @method
             Set the type

             @param {Adaptive.IServiceType} type Type of the service
             @since ARP1.0
          */
          setType(type: IServiceType) {
               this.type = type;
          }

          /**
             @method
             Returns the name

             @return {string} name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Set the name

             @param {string} name Name of the service
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             Returns the serviceEndpoints

             @return {Adaptive.ServiceEndpoint[]} serviceEndpoints
             @since ARP1.0
          */
          getServiceEndpoints() : Array<ServiceEndpoint> {
               return this.serviceEndpoints;
          }

          /**
             @method
             Set the serviceEndpoints

             @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoint of the service
             @since ARP1.0
          */
          setServiceEndpoints(serviceEndpoints: Array<ServiceEndpoint>) {
               this.serviceEndpoints = serviceEndpoints;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Service.
             @return {Adaptive.Service} Wrapped object instance.
          */
          static toObject(object : any) : Service {
               var result : Service = new Service(null, null, null);

               // Assign values to bean fields.
               if (object != null && object.serviceEndpoints != null) {
                    result.serviceEndpoints = new Array<ServiceEndpoint>();
                    for(var i = 0; i < object.serviceEndpoints.length; i++) {
                         var __value__ = object.serviceEndpoints[i];
                         if (__value__ != null) {
                              result.serviceEndpoints.push(ServiceEndpoint.toObject(__value__));
                         } else {
                              result.serviceEndpoints.push(ServiceEndpoint.toObject(null));
                         }
                    }
               }
               if (object!=null && object.name!=null) result.name = object.name;
               if (object!=null && object.type!=null) {
                    result.type = IServiceType.toObject(object.type);
               } else {
                    result.type = IServiceType.toObject(null);
               }

               return result;
          }
     }
     /**
        @class Adaptive.ServiceCookie
        @extends Adaptive.APIBean
        Structure representing the cookieValue of a http cookie.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceCookie extends APIBean {
          /**
             Name ot the cookie
          */
          cookieName : string;
          /**
             Value of the ServiceCookie
          */
          cookieValue : string;
          /**
             ServiceCookie creation timestamp in milliseconds.
          */
          creation : number;
          /**
             Domain for which the cookie is valid.
          */
          domain : string;
          /**
             ServiceCookie expiry in milliseconds or -1 for session only.
          */
          expiry : number;
          /**
             URI path for which the cookie is valid.
          */
          path : string;
          /**
             Scheme of the domain - http/https - for which the cookie is valid.
          */
          scheme : string;
          /**
             ServiceCookie is secure (https only)
          */
          secure : boolean;
          /**
             @method constructor
             Contructor with fields

             @param {string} cookieName  Name of the cookie
             @param {string} cookieValue Value of the cookie
             @param {string} domain      Domain of the cookie
             @param {string} path        Path of the cookie
             @param {string} scheme      Scheme of the cookie
             @param {boolean} secure      Privacy of the cookie
             @param {number} expiry      Expiration date of the cookie
             @param {number} creation    Creation date of the cookie
             @since ARP1.0
          */
          constructor(cookieName: string, cookieValue: string, domain: string, path: string, scheme: string, secure: boolean, expiry: number, creation: number) {
               super();
               this.cookieName = cookieName;
               this.cookieValue = cookieValue;
               this.domain = domain;
               this.path = path;
               this.scheme = scheme;
               this.secure = secure;
               this.expiry = expiry;
               this.creation = creation;
          }
          /**
             @method
             Returns the cookie cookieName

             @return {string} cookieName Name of the cookie
             @since ARP1.0
          */
          getCookieName() : string {
               return this.cookieName;
          }

          /**
             @method
             Set the cookie cookieName

             @param {string} cookieName Name of the cookie
             @since ARP1.0
          */
          setCookieName(cookieName: string) {
               this.cookieName = cookieName;
          }

          /**
             @method
             Returns the cookie cookieValue

             @return {string} Value of the cookie
             @since ARP1.0
          */
          getCookieValue() : string {
               return this.cookieValue;
          }

          /**
             @method
             Set the cookie cookieValue

             @param {string} cookieValue Value of the cookie
             @since ARP1.0
          */
          setCookieValue(cookieValue: string) {
               this.cookieValue = cookieValue;
          }

          /**
             @method
             Returns the creation date

             @return {number} Creation date of the cookie
             @since ARP1.0
          */
          getCreation() : number {
               return this.creation;
          }

          /**
             @method
             Sets the creation date

             @param {number} creation Creation date of the cookie
             @since ARP1.0
          */
          setCreation(creation: number) {
               this.creation = creation;
          }

          /**
             @method
             Returns the domain

             @return {string} domain
             @since ARP1.0
          */
          getDomain() : string {
               return this.domain;
          }

          /**
             @method
             Set the domain

             @param {string} domain Domain of the cookie
             @since ARP1.0
          */
          setDomain(domain: string) {
               this.domain = domain;
          }

          /**
             @method
             Returns the expiration date in milis

             @return {number} expiry
             @since ARP1.0
          */
          getExpiry() : number {
               return this.expiry;
          }

          /**
             @method
             Set the expiration date in milis

             @param {number} expiry Expiration date of the cookie
             @since ARP1.0
          */
          setExpiry(expiry: number) {
               this.expiry = expiry;
          }

          /**
             @method
             Returns the path

             @return {string} path
             @since ARP1.0
          */
          getPath() : string {
               return this.path;
          }

          /**
             @method
             Set the path

             @param {string} path Path of the cookie
             @since ARP1.0
          */
          setPath(path: string) {
               this.path = path;
          }

          /**
             @method
             Returns the scheme

             @return {string} scheme
             @since ARP1.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             @method
             Set the scheme

             @param {string} scheme Scheme of the cookie
             @since ARP1.0
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

          /**
             @method
             Returns whether the cookie is secure or not

             @return {boolean} true if the cookie is secure; false otherwise
             @since ARP1.0
          */
          getSecure() : boolean {
               return this.secure;
          }

          /**
             @method
             Set whether the cookie is secure or not

             @param {boolean} secure Privacy of the cookie
             @since ARP1.0
          */
          setSecure(secure: boolean) {
               this.secure = secure;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceCookie.
             @return {Adaptive.ServiceCookie} Wrapped object instance.
          */
          static toObject(object : any) : ServiceCookie {
               var result : ServiceCookie = new ServiceCookie(null, null, null, null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.cookieName!=null) result.cookieName = object.cookieName;
               if (object!=null && object.cookieValue!=null) result.cookieValue = object.cookieValue;
               if (object!=null && object.domain!=null) result.domain = object.domain;
               if (object!=null && object.path!=null) result.path = object.path;
               if (object!=null && object.scheme!=null) result.scheme = object.scheme;
               if (object!=null && object.secure!=null) result.secure = object.secure;
               if (object!=null && object.expiry!=null) result.expiry = object.expiry;
               if (object!=null && object.creation!=null) result.creation = object.creation;

               return result;
          }
     }
     /**
        @class Adaptive.ServiceEndpoint
        @extends Adaptive.APIBean
        Structure representing a remote or local service access end-point.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceEndpoint extends APIBean {
          /**
             The remote service host (alias or IP).
          */
          host : string;
          /**
             The remote service paths (to be added to the host and port url).
          */
          paths : Array<ServicePath>;
          /**
             The remote service accessible port.
          */
          port : number;
          /**
             The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
          */
          proxy : string;
          /**
             The remote service scheme.
          */
          scheme : string;
          /**
             @method constructor
             Constructor with parameters

             @param {string} host   Remote service host
             @param {Adaptive.ServicePath[]} paths  Remote service Paths
             @param {number} port   Remote service Port
             @param {string} proxy  Proxy url "http://IP_ADDRESS:PORT_NUMBER"
             @param {string} scheme Remote service scheme
             @since ARP1.0
          */
          constructor(host: string, paths: Array<ServicePath>, port: number, proxy: string, scheme: string) {
               super();
               this.host = host;
               this.paths = paths;
               this.port = port;
               this.proxy = proxy;
               this.scheme = scheme;
          }
          /**
             @method
             Returns the Remote service host

             @return {string} Remote service host
             @since ARP1.0
          */
          getHost() : string {
               return this.host;
          }

          /**
             @method
             Set the Remote service host

             @param {string} host Remote service host
             @since ARP1.0
          */
          setHost(host: string) {
               this.host = host;
          }

          /**
             @method
             Returns the Remote service Paths

             @return {Adaptive.ServicePath[]} Remote service Paths
             @since ARP1.0
          */
          getPaths() : Array<ServicePath> {
               return this.paths;
          }

          /**
             @method
             Set the Remote service Paths

             @param {Adaptive.ServicePath[]} paths Remote service Paths
             @since ARP1.0
          */
          setPaths(paths: Array<ServicePath>) {
               this.paths = paths;
          }

          /**
             @method
             Returns the Remote service Port

             @return {number} Remote service Port
             @since ARP1.0
          */
          getPort() : number {
               return this.port;
          }

          /**
             @method
             Set the Remote service Port

             @param {number} port Remote service Port
             @since ARP1.0
          */
          setPort(port: number) {
               this.port = port;
          }

          /**
             @method
             Return the Proxy url

             @return {string} Proxy url
             @since ARP1.0
          */
          getProxy() : string {
               return this.proxy;
          }

          /**
             @method
             Set the Proxy url

             @param {string} proxy Proxy url
             @since ARP1.0
          */
          setProxy(proxy: string) {
               this.proxy = proxy;
          }

          /**
             @method
             Returns the Remote service scheme

             @return {string} Remote service scheme
             @since ARP1.0
          */
          getScheme() : string {
               return this.scheme;
          }

          /**
             @method
             Set the Remote service scheme

             @param {string} scheme Remote service scheme
             @since ARP1.0
          */
          setScheme(scheme: string) {
               this.scheme = scheme;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceEndpoint.
             @return {Adaptive.ServiceEndpoint} Wrapped object instance.
          */
          static toObject(object : any) : ServiceEndpoint {
               var result : ServiceEndpoint = new ServiceEndpoint(null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.host!=null) result.host = object.host;
               if (object != null && object.paths != null) {
                    result.paths = new Array<ServicePath>();
                    for(var i = 0; i < object.paths.length; i++) {
                         var __value__ = object.paths[i];
                         if (__value__ != null) {
                              result.paths.push(ServicePath.toObject(__value__));
                         } else {
                              result.paths.push(ServicePath.toObject(null));
                         }
                    }
               }
               if (object!=null && object.port!=null) result.port = object.port;
               if (object!=null && object.proxy!=null) result.proxy = object.proxy;
               if (object!=null && object.scheme!=null) result.scheme = object.scheme;

               return result;
          }
     }
     /**
        @class Adaptive.ServiceHeader
        @extends Adaptive.APIBean
        Structure representing the data of a http request or response header.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceHeader extends APIBean {
          /**
             Value of the header
          */
          data : string;
          /**
             Name ot the header
          */
          name : string;
          /**
             @method constructor
             Constructor with fields

             @param {string} name Name of the header
             @param {string} data Value of the header
             @since ARP1.0
          */
          constructor(name: string, data: string) {
               super();
               this.name = name;
               this.data = data;
          }
          /**
             @method
             Returns the header value

             @return {string} ServiceHeader value
             @since ARP1.0
          */
          getData() : string {
               return this.data;
          }

          /**
             @method
             Set the header value

             @param {string} data ServiceHeader value
             @since ARP1.0
          */
          setData(data: string) {
               this.data = data;
          }

          /**
             @method
             Returns the header name

             @return {string} ServiceHeader name
             @since ARP1.0
          */
          getName() : string {
               return this.name;
          }

          /**
             @method
             Set the header name

             @param {string} name Name of the header
             @since ARP1.0
          */
          setName(name: string) {
               this.name = name;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceHeader.
             @return {Adaptive.ServiceHeader} Wrapped object instance.
          */
          static toObject(object : any) : ServiceHeader {
               var result : ServiceHeader = new ServiceHeader(null, null);

               // Assign values to bean fields.
               if (object!=null && object.name!=null) result.name = object.name;
               if (object!=null && object.data!=null) result.data = object.data;

               return result;
          }
     }
     /**
        @class Adaptive.ServiceRequest
        @extends Adaptive.APIBean
        Represents a local or remote service request.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceRequest extends APIBean {
          /**
             The HTTP procotol version to be used for this request.
          */
          protocolVersion : IServiceProtocolVersion;
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             The byte[] representing the Content field.
          */
          contentBinary : Array<number>;
          /**
             The length in bytes for the binary Content.
          */
          contentBinaryLength : number;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : number;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The request method
          */
          method : string;
          /**
             The serviceHeaders array (name,value pairs) to be included on the I/O service request.
          */
          serviceHeaders : Array<ServiceHeader>;
          /**
             Information about the session
          */
          serviceSession : ServiceSession;
          /**
             @method constructor
             Contructor used by the implementation

             @param {string} content             Request/Response data content (plain text)
             @param {string} contentType         The request/response content type (MIME TYPE).
             @param {string} contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
             @param {number} contentLength       The length in bytes for the Content field.
             @param {number[]} contentBinary       The byte[] representing the Content field.
             @param {number} contentBinaryLength The length in bytes for the binary Content.
             @param {Adaptive.ServiceHeader[]} serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @param {string} method              The request method
             @param {Adaptive.IServiceProtocolVersion} protocolVersion     The HTTP procotol version to be used for this request.
             @param {Adaptive.ServiceSession} serviceSession      The element service session
             @since ARP1.0
          */
          constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: Array<number>, contentBinaryLength: number, serviceHeaders: Array<ServiceHeader>, method: string, protocolVersion: IServiceProtocolVersion, serviceSession: ServiceSession) {
               super();
               this.content = content;
               this.contentType = contentType;
               this.contentEncoding = contentEncoding;
               this.contentLength = contentLength;
               this.contentBinary = contentBinary;
               this.contentBinaryLength = contentBinaryLength;
               this.serviceHeaders = serviceHeaders;
               this.method = method;
               this.protocolVersion = protocolVersion;
               this.serviceSession = serviceSession;
          }
          /**
             @method
             Returns the protocol version

             @return {Adaptive.IServiceProtocolVersion} protocolVersion enum
             @since ARP1.0
          */
          getProtocolVersion() : IServiceProtocolVersion {
               return this.protocolVersion;
          }

          /**
             @method
             Set the protocol version

             @param {Adaptive.IServiceProtocolVersion} protocolVersion The HTTP procotol version to be used for this request.
             @since ARP1.0
          */
          setProtocolVersion(protocolVersion: IServiceProtocolVersion) {
               this.protocolVersion = protocolVersion;
          }

          /**
             @method
             Returns the content

             @return {string} content
             @since ARP1.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             @method
             Set the content

             @param {string} content Request/Response data content (plain text)
             @since ARP1.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             @method
             Returns the byte[] of the content

             @return {number[]} contentBinary
             @since ARP1.0
          */
          getContentBinary() : Array<number> {
               return this.contentBinary;
          }

          /**
             @method
             Set the byte[] of the content

             @param {number[]} contentBinary The byte[] representing the Content field.
             @since ARP1.0
          */
          setContentBinary(contentBinary: Array<number>) {
               this.contentBinary = contentBinary;
          }

          /**
             @method
             Retrusn the binary content length

             @return {number} contentBinaryLength
             @since ARP1.0
          */
          getContentBinaryLength() : number {
               return this.contentBinaryLength;
          }

          /**
             @method
             Set the binary content length

             @param {number} contentBinaryLength The length in bytes for the binary Content.
             @since ARP1.0
          */
          setContentBinaryLength(contentBinaryLength: number) {
               this.contentBinaryLength = contentBinaryLength;
          }

          /**
             @method
             Returns the content encoding

             @return {string} contentEncoding
             @since ARP1.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             @method
             Set the content encoding

             @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
             @since ARP1.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             @method
             Returns the content length

             @return {number} contentLength
             @since ARP1.0
          */
          getContentLength() : number {
               return this.contentLength;
          }

          /**
             @method
             Set the content length

             @param {number} contentLength The length in bytes for the Content field.
             @since ARP1.0
          */
          setContentLength(contentLength: number) {
               this.contentLength = contentLength;
          }

          /**
             @method
             Returns the content type

             @return {string} contentType
             @since ARP1.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             @method
             Set the content type

             @param {string} contentType The request/response content type (MIME TYPE).
             @since ARP1.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             @method
             Returns the method

             @return {string} method
             @since ARP1.0
          */
          getMethod() : string {
               return this.method;
          }

          /**
             @method
             Set the method

             @param {string} method The request method
             @since ARP1.0
          */
          setMethod(method: string) {
               this.method = method;
          }

          /**
             @method
             Returns the array of ServiceHeader

             @return {Adaptive.ServiceHeader[]} serviceHeaders
             @since ARP1.0
          */
          getServiceHeaders() : Array<ServiceHeader> {
               return this.serviceHeaders;
          }

          /**
             @method
             Set the array of ServiceHeader

             @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @since ARP1.0
          */
          setServiceHeaders(serviceHeaders: Array<ServiceHeader>) {
               this.serviceHeaders = serviceHeaders;
          }

          /**
             @method
             Getter for service session

             @return {Adaptive.ServiceSession} The element service session
             @since ARP1.0
          */
          getServiceSession() : ServiceSession {
               return this.serviceSession;
          }

          /**
             @method
             Setter for service session

             @param {Adaptive.ServiceSession} serviceSession The element service session
             @since ARP1.0
          */
          setServiceSession(serviceSession: ServiceSession) {
               this.serviceSession = serviceSession;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceRequest.
             @return {Adaptive.ServiceRequest} Wrapped object instance.
          */
          static toObject(object : any) : ServiceRequest {
               var result : ServiceRequest = new ServiceRequest(null, null, null, null, null, null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.content!=null) result.content = object.content;
               if (object!=null && object.contentType!=null) result.contentType = object.contentType;
               if (object!=null && object.contentEncoding!=null) result.contentEncoding = object.contentEncoding;
               if (object!=null && object.contentLength!=null) result.contentLength = object.contentLength;
               if (object != null && object.contentBinary != null) {
                    result.contentBinary = new Array<number>();
                    for(var i = 0; i < object.contentBinary.length; i++) {
                         var __value__ = object.contentBinary[i];
                         if (__value__ != null) result.contentBinary.push(__value__);
                    }
               }
               if (object!=null && object.contentBinaryLength!=null) result.contentBinaryLength = object.contentBinaryLength;
               if (object != null && object.serviceHeaders != null) {
                    result.serviceHeaders = new Array<ServiceHeader>();
                    for(var i = 0; i < object.serviceHeaders.length; i++) {
                         var __value__ = object.serviceHeaders[i];
                         if (__value__ != null) {
                              result.serviceHeaders.push(ServiceHeader.toObject(__value__));
                         } else {
                              result.serviceHeaders.push(ServiceHeader.toObject(null));
                         }
                    }
               }
               if (object!=null && object.method!=null) result.method = object.method;
               if (object!=null && object.protocolVersion!=null) {
                    result.protocolVersion = IServiceProtocolVersion.toObject(object.protocolVersion);
               } else {
                    result.protocolVersion = IServiceProtocolVersion.toObject(null);
               }
               if (object!=null && object.serviceSession!=null) {
                    result.serviceSession = ServiceSession.toObject(object.serviceSession);
               } else {
                    result.serviceSession = ServiceSession.toObject(null);
               }

               return result;
          }
     }
     /**
        @class Adaptive.ServiceResponse
        @extends Adaptive.APIBean
        Represents a local or remote service response.

        @author Aryslan
        @since ARP1.0
        @version 1.0
     */
     export class ServiceResponse extends APIBean {
          /**
             Request/Response data content (plain text).
          */
          content : string;
          /**
             The byte[] representing the binary Content.
          */
          contentBinary : Array<number>;
          /**
             The length in bytes for the binary Content.
          */
          contentBinaryLength : number;
          /**
             Encoding of the binary payload - by default assumed to be UTF8.
          */
          contentEncoding : string;
          /**
             The length in bytes for the Content field.
          */
          contentLength : number;
          /**
             The request/response content type (MIME TYPE).
          */
          contentType : string;
          /**
             The serviceHeaders array (name,value pairs) to be included on the I/O service request.
          */
          serviceHeaders : Array<ServiceHeader>;
          /**
             Information about the session
          */
          serviceSession : ServiceSession;
          /**
             @method constructor
             Constructor with fields

             @param {string} content             Request/Response data content (plain text).
             @param {string} contentType         The request/response content type (MIME TYPE).
             @param {string} contentEncoding     Encoding of the binary payload - by default assumed to be UTF8.
             @param {number} contentLength       The length in bytes for the Content field.
             @param {number[]} contentBinary       The byte[] representing the binary Content.
             @param {number} contentBinaryLength The length in bytes for the binary Content.
             @param {Adaptive.ServiceHeader[]} serviceHeaders      The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @param {Adaptive.ServiceSession} serviceSession      Information about the session
             @since ARP1.0
          */
          constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: Array<number>, contentBinaryLength: number, serviceHeaders: Array<ServiceHeader>, serviceSession: ServiceSession) {
               super();
               this.content = content;
               this.contentType = contentType;
               this.contentEncoding = contentEncoding;
               this.contentLength = contentLength;
               this.contentBinary = contentBinary;
               this.contentBinaryLength = contentBinaryLength;
               this.serviceHeaders = serviceHeaders;
               this.serviceSession = serviceSession;
          }
          /**
             @method
             Returns the content

             @return {string} content
             @since ARP1.0
          */
          getContent() : string {
               return this.content;
          }

          /**
             @method
             Set the content

             @param {string} content Request/Response data content (plain text).
             @since ARP1.0
          */
          setContent(content: string) {
               this.content = content;
          }

          /**
             @method
             Returns the binary content

             @return {number[]} contentBinary
             @since ARP1.0
          */
          getContentBinary() : Array<number> {
               return this.contentBinary;
          }

          /**
             @method
             Set the binary content

             @param {number[]} contentBinary The byte[] representing the binary Content.
             @since ARP1.0
          */
          setContentBinary(contentBinary: Array<number>) {
               this.contentBinary = contentBinary;
          }

          /**
             @method
             Returns the binary content length

             @return {number} contentBinaryLength
             @since ARP1.0
          */
          getContentBinaryLength() : number {
               return this.contentBinaryLength;
          }

          /**
             @method
             Set the binary content length

             @param {number} contentBinaryLength The length in bytes for the binary Content.
             @since ARP1.0
          */
          setContentBinaryLength(contentBinaryLength: number) {
               this.contentBinaryLength = contentBinaryLength;
          }

          /**
             @method
             Returns the content encoding

             @return {string} contentEncoding
             @since ARP1.0
          */
          getContentEncoding() : string {
               return this.contentEncoding;
          }

          /**
             @method
             Set the content encoding

             @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
             @since ARP1.0
          */
          setContentEncoding(contentEncoding: string) {
               this.contentEncoding = contentEncoding;
          }

          /**
             @method
             Returns the content length

             @return {number} contentLength
             @since ARP1.0
          */
          getContentLength() : number {
               return this.contentLength;
          }

          /**
             @method
             Set the content length

             @param {number} contentLength The length in bytes for the Content field.
             @since ARP1.0
          */
          setContentLength(contentLength: number) {
               this.contentLength = contentLength;
          }

          /**
             @method
             Returns the content type

             @return {string} contentType
             @since ARP1.0
          */
          getContentType() : string {
               return this.contentType;
          }

          /**
             @method
             Set the content type

             @param {string} contentType The request/response content type (MIME TYPE).
             @since ARP1.0
          */
          setContentType(contentType: string) {
               this.contentType = contentType;
          }

          /**
             @method
             Returns the array of ServiceHeader

             @return {Adaptive.ServiceHeader[]} serviceHeaders
             @since ARP1.0
          */
          getServiceHeaders() : Array<ServiceHeader> {
               return this.serviceHeaders;
          }

          /**
             @method
             Set the array of ServiceHeader

             @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
             @since ARP1.0
          */
          setServiceHeaders(serviceHeaders: Array<ServiceHeader>) {
               this.serviceHeaders = serviceHeaders;
          }

          /**
             @method
             Getter for service session

             @return {Adaptive.ServiceSession} The element service session
             @since ARP1.0
          */
          getServiceSession() : ServiceSession {
               return this.serviceSession;
          }

          /**
             @method
             Setter for service session

             @param {Adaptive.ServiceSession} serviceSession The element service session
             @since ARP1.0
          */
          setServiceSession(serviceSession: ServiceSession) {
               this.serviceSession = serviceSession;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceResponse.
             @return {Adaptive.ServiceResponse} Wrapped object instance.
          */
          static toObject(object : any) : ServiceResponse {
               var result : ServiceResponse = new ServiceResponse(null, null, null, null, null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.content!=null) result.content = object.content;
               if (object!=null && object.contentType!=null) result.contentType = object.contentType;
               if (object!=null && object.contentEncoding!=null) result.contentEncoding = object.contentEncoding;
               if (object!=null && object.contentLength!=null) result.contentLength = object.contentLength;
               if (object != null && object.contentBinary != null) {
                    result.contentBinary = new Array<number>();
                    for(var i = 0; i < object.contentBinary.length; i++) {
                         var __value__ = object.contentBinary[i];
                         if (__value__ != null) result.contentBinary.push(__value__);
                    }
               }
               if (object!=null && object.contentBinaryLength!=null) result.contentBinaryLength = object.contentBinaryLength;
               if (object != null && object.serviceHeaders != null) {
                    result.serviceHeaders = new Array<ServiceHeader>();
                    for(var i = 0; i < object.serviceHeaders.length; i++) {
                         var __value__ = object.serviceHeaders[i];
                         if (__value__ != null) {
                              result.serviceHeaders.push(ServiceHeader.toObject(__value__));
                         } else {
                              result.serviceHeaders.push(ServiceHeader.toObject(null));
                         }
                    }
               }
               if (object!=null && object.serviceSession!=null) {
                    result.serviceSession = ServiceSession.toObject(object.serviceSession);
               } else {
                    result.serviceSession = ServiceSession.toObject(null);
               }

               return result;
          }
     }
     /**
        @class Adaptive.ServiceSession
        @extends Adaptive.APIBean
        Represents a session object for HTTP request and responses

        @author Ferran Vila Conesa
        @since ARP1.0
        @version 1.0
     */
     export class ServiceSession extends APIBean {
          /**
             The attributes of the response
          */
          attributes : Array<string>;
          /**
             The cookies of the response
          */
          cookies : Array<ServiceCookie>;
          /**
             @method constructor
             Constructor with fields

             @param {Adaptive.ServiceCookie[]} cookies    The cookies of the response
             @param {string[]} attributes Attributes of the response
             @since ARP1.0
          */
          constructor(cookies: Array<ServiceCookie>, attributes: Array<string>) {
               super();
               this.cookies = cookies;
               this.attributes = attributes;
          }
          /**
             @method
             Gets the attributes of the response

             @return {string[]} Attributes of the response
             @since ARP1.0
          */
          getAttributes() : Array<string> {
               return this.attributes;
          }

          /**
             @method
             Sets the attributes for the response

             @param {string[]} attributes Attributes of the response
             @since ARP1.0
          */
          setAttributes(attributes: Array<string>) {
               this.attributes = attributes;
          }

          /**
             @method
             Returns the cookies of the response

             @return {Adaptive.ServiceCookie[]} The cookies of the response
             @since ARP1.0
          */
          getCookies() : Array<ServiceCookie> {
               return this.cookies;
          }

          /**
             @method
             Sets the cookies of the response

             @param {Adaptive.ServiceCookie[]} cookies The cookies of the response
             @since ARP1.0
          */
          setCookies(cookies: Array<ServiceCookie>) {
               this.cookies = cookies;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceSession.
             @return {Adaptive.ServiceSession} Wrapped object instance.
          */
          static toObject(object : any) : ServiceSession {
               var result : ServiceSession = new ServiceSession(null, null);

               // Assign values to bean fields.
               if (object != null && object.cookies != null) {
                    result.cookies = new Array<ServiceCookie>();
                    for(var i = 0; i < object.cookies.length; i++) {
                         var __value__ = object.cookies[i];
                         if (__value__ != null) {
                              result.cookies.push(ServiceCookie.toObject(__value__));
                         } else {
                              result.cookies.push(ServiceCookie.toObject(null));
                         }
                    }
               }
               if (object != null && object.attributes != null) {
                    result.attributes = new Array<string>();
                    for(var i = 0; i < object.attributes.length; i++) {
                         var __value__ = object.attributes[i];
                         if (__value__ != null) result.attributes.push(__value__);
                    }
               }

               return result;
          }
     }
     /**
        @class Adaptive.Contact
        @extends Adaptive.ContactUid
        Structure representing the data elements of a contact.

        @author Francisco Javier Martin Bueno
        @since ARP1.0
        @version 1.0
     */
     export class Contact extends ContactUid {
          /**
             The adresses from the contact
          */
          contactAddresses : Array<ContactAddress>;
          /**
             The emails from the contact
          */
          contactEmails : Array<ContactEmail>;
          /**
             The phones from the contact
          */
          contactPhones : Array<ContactPhone>;
          /**
             The social network info from the contact
          */
          contactSocials : Array<ContactSocial>;
          /**
             The aditional tags from the contact
          */
          contactTags : Array<ContactTag>;
          /**
             The websites from the contact
          */
          contactWebsites : Array<ContactWebsite>;
          /**
             The personal info from the contact
          */
          personalInfo : ContactPersonalInfo;
          /**
             The professional info from the contact
          */
          professionalInfo : ContactProfessionalInfo;
          /**
             @method constructor
             Constructor with all the fields

             @param {string} contactId        Identifier of the contact
             @param {Adaptive.ContactPersonalInfo} personalInfo     Personal Information
             @param {Adaptive.ContactProfessionalInfo} professionalInfo Professional Information
             @param {Adaptive.ContactAddress[]} contactAddresses Addresses of the contact
             @param {Adaptive.ContactPhone[]} contactPhones    Phones of the contact
             @param {Adaptive.ContactEmail[]} contactEmails    Emails of the contact
             @param {Adaptive.ContactWebsite[]} contactWebsites  Websites of the contact
             @param {Adaptive.ContactSocial[]} contactSocials   Social Networks of the contact
             @param {Adaptive.ContactTag[]} contactTags      Tags of the contact
             @since ARP1.0
          */
          constructor(contactId: string, personalInfo: ContactPersonalInfo, professionalInfo: ContactProfessionalInfo, contactAddresses: Array<ContactAddress>, contactPhones: Array<ContactPhone>, contactEmails: Array<ContactEmail>, contactWebsites: Array<ContactWebsite>, contactSocials: Array<ContactSocial>, contactTags: Array<ContactTag>) {
               super(contactId);
               this.personalInfo = personalInfo;
               this.professionalInfo = professionalInfo;
               this.contactAddresses = contactAddresses;
               this.contactPhones = contactPhones;
               this.contactEmails = contactEmails;
               this.contactWebsites = contactWebsites;
               this.contactSocials = contactSocials;
               this.contactTags = contactTags;
          }
          /**
             @method
             Returns all the addresses of the Contact

             @return {Adaptive.ContactAddress[]} ContactAddress[]
             @since ARP1.0
          */
          getContactAddresses() : Array<ContactAddress> {
               return this.contactAddresses;
          }

          /**
             @method
             Set the addresses of the Contact

             @param {Adaptive.ContactAddress[]} contactAddresses Addresses of the contact
             @since ARP1.0
          */
          setContactAddresses(contactAddresses: Array<ContactAddress>) {
               this.contactAddresses = contactAddresses;
          }

          /**
             @method
             Returns all the emails of the Contact

             @return {Adaptive.ContactEmail[]} ContactEmail[]
             @since ARP1.0
          */
          getContactEmails() : Array<ContactEmail> {
               return this.contactEmails;
          }

          /**
             @method
             Set the emails of the Contact

             @param {Adaptive.ContactEmail[]} contactEmails Emails of the contact
             @since ARP1.0
          */
          setContactEmails(contactEmails: Array<ContactEmail>) {
               this.contactEmails = contactEmails;
          }

          /**
             @method
             Returns all the phones of the Contact

             @return {Adaptive.ContactPhone[]} ContactPhone[]
             @since ARP1.0
          */
          getContactPhones() : Array<ContactPhone> {
               return this.contactPhones;
          }

          /**
             @method
             Set the phones of the Contact

             @param {Adaptive.ContactPhone[]} contactPhones Phones of the contact
             @since ARP1.0
          */
          setContactPhones(contactPhones: Array<ContactPhone>) {
               this.contactPhones = contactPhones;
          }

          /**
             @method
             Returns all the social network info of the Contact

             @return {Adaptive.ContactSocial[]} ContactSocial[]
             @since ARP1.0
          */
          getContactSocials() : Array<ContactSocial> {
               return this.contactSocials;
          }

          /**
             @method
             Set the social network info of the Contact

             @param {Adaptive.ContactSocial[]} contactSocials Social Networks of the contact
             @since ARP1.0
          */
          setContactSocials(contactSocials: Array<ContactSocial>) {
               this.contactSocials = contactSocials;
          }

          /**
             @method
             Returns the additional tags of the Contact

             @return {Adaptive.ContactTag[]} ContactTag[]
             @since ARP1.0
          */
          getContactTags() : Array<ContactTag> {
               return this.contactTags;
          }

          /**
             @method
             Set the additional tags of the Contact

             @param {Adaptive.ContactTag[]} contactTags Tags of the contact
             @since ARP1.0
          */
          setContactTags(contactTags: Array<ContactTag>) {
               this.contactTags = contactTags;
          }

          /**
             @method
             Returns all the websites of the Contact

             @return {Adaptive.ContactWebsite[]} ContactWebsite[]
             @since ARP1.0
          */
          getContactWebsites() : Array<ContactWebsite> {
               return this.contactWebsites;
          }

          /**
             @method
             Set the websites of the Contact

             @param {Adaptive.ContactWebsite[]} contactWebsites Websites of the contact
             @since ARP1.0
          */
          setContactWebsites(contactWebsites: Array<ContactWebsite>) {
               this.contactWebsites = contactWebsites;
          }

          /**
             @method
             Returns the personal info of the Contact

             @return {Adaptive.ContactPersonalInfo} ContactPersonalInfo of the Contact
             @since ARP1.0
          */
          getPersonalInfo() : ContactPersonalInfo {
               return this.personalInfo;
          }

          /**
             @method
             Set the personal info of the Contact

             @param {Adaptive.ContactPersonalInfo} personalInfo Personal Information
             @since ARP1.0
          */
          setPersonalInfo(personalInfo: ContactPersonalInfo) {
               this.personalInfo = personalInfo;
          }

          /**
             @method
             Returns the professional info of the Contact

             @return {Adaptive.ContactProfessionalInfo} Array of personal info
             @since ARP1.0
          */
          getProfessionalInfo() : ContactProfessionalInfo {
               return this.professionalInfo;
          }

          /**
             @method
             Set the professional info of the Contact

             @param {Adaptive.ContactProfessionalInfo} professionalInfo Professional Information
             @since ARP1.0
          */
          setProfessionalInfo(professionalInfo: ContactProfessionalInfo) {
               this.professionalInfo = professionalInfo;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.Contact.
             @return {Adaptive.Contact} Wrapped object instance.
          */
          static toObject(object : any) : Contact {
               var result : Contact = new Contact(null, null, null, null, null, null, null, null, null);

               // Assign values to parent bean fields.
               if (object!=null && object.contactId!=null) result.contactId = object.contactId;

               // Assign values to bean fields.
               if (object!=null && object.personalInfo!=null) {
                    result.personalInfo = ContactPersonalInfo.toObject(object.personalInfo);
               } else {
                    result.personalInfo = ContactPersonalInfo.toObject(null);
               }
               if (object!=null && object.professionalInfo!=null) {
                    result.professionalInfo = ContactProfessionalInfo.toObject(object.professionalInfo);
               } else {
                    result.professionalInfo = ContactProfessionalInfo.toObject(null);
               }
               if (object != null && object.contactAddresses != null) {
                    result.contactAddresses = new Array<ContactAddress>();
                    for(var i = 0; i < object.contactAddresses.length; i++) {
                         var __value__ = object.contactAddresses[i];
                         if (__value__ != null) {
                              result.contactAddresses.push(ContactAddress.toObject(__value__));
                         } else {
                              result.contactAddresses.push(ContactAddress.toObject(null));
                         }
                    }
               }
               if (object != null && object.contactPhones != null) {
                    result.contactPhones = new Array<ContactPhone>();
                    for(var i = 0; i < object.contactPhones.length; i++) {
                         var __value__ = object.contactPhones[i];
                         if (__value__ != null) {
                              result.contactPhones.push(ContactPhone.toObject(__value__));
                         } else {
                              result.contactPhones.push(ContactPhone.toObject(null));
                         }
                    }
               }
               if (object != null && object.contactEmails != null) {
                    result.contactEmails = new Array<ContactEmail>();
                    for(var i = 0; i < object.contactEmails.length; i++) {
                         var __value__ = object.contactEmails[i];
                         if (__value__ != null) {
                              result.contactEmails.push(ContactEmail.toObject(__value__));
                         } else {
                              result.contactEmails.push(ContactEmail.toObject(null));
                         }
                    }
               }
               if (object != null && object.contactWebsites != null) {
                    result.contactWebsites = new Array<ContactWebsite>();
                    for(var i = 0; i < object.contactWebsites.length; i++) {
                         var __value__ = object.contactWebsites[i];
                         if (__value__ != null) {
                              result.contactWebsites.push(ContactWebsite.toObject(__value__));
                         } else {
                              result.contactWebsites.push(ContactWebsite.toObject(null));
                         }
                    }
               }
               if (object != null && object.contactSocials != null) {
                    result.contactSocials = new Array<ContactSocial>();
                    for(var i = 0; i < object.contactSocials.length; i++) {
                         var __value__ = object.contactSocials[i];
                         if (__value__ != null) {
                              result.contactSocials.push(ContactSocial.toObject(__value__));
                         } else {
                              result.contactSocials.push(ContactSocial.toObject(null));
                         }
                    }
               }
               if (object != null && object.contactTags != null) {
                    result.contactTags = new Array<ContactTag>();
                    for(var i = 0; i < object.contactTags.length; i++) {
                         var __value__ = object.contactTags[i];
                         if (__value__ != null) {
                              result.contactTags.push(ContactTag.toObject(__value__));
                         } else {
                              result.contactTags.push(ContactTag.toObject(null));
                         }
                    }
               }

               return result;
          }
     }
     /**
        @class Adaptive.BaseListener
     */
     export class BaseListener implements IBaseListener {

          /**
             @property {number}
             Unique id of listener.
          */
          id : number;

          /**
             @property {Adaptive.IAdaptiveRPGroup}
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Constructor with listener id.

             @param {number} id  The id of the listener.
          */
          constructor(id : number) {
               this.id = id;
               this.apiGroup = IAdaptiveRPGroup.Application;
          }

          /**
             @method
             @return {number}
             Get the listener id.
          */
          getId() : number {
               return this.id;
          }

          /**
             @method
             @return {Adaptive.IAdaptiveRPGroup}
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string}
             The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }

     }

     /**
        @property {Adaptive.Dictionary} registeredAccelerationListener
        @member Adaptive
        @private
        AccelerationListener control dictionary.
     */
     export var registeredAccelerationListener = new Dictionary<IAccelerationListener>([]);

        // AccelerationListener global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IAccelerationListenerError} error
     */
     export function handleAccelerationListenerError(id : number, error : IAccelerationListenerError) : void {
          var listener : IAccelerationListener = registeredAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredAccelerationListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Acceleration} acceleration
     */
     export function handleAccelerationListenerResult(id : number, acceleration : Acceleration) : void {
          var listener : IAccelerationListener = registeredAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredAccelerationListener dictionary.");
          } else {
               listener.onResult(acceleration);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Acceleration} acceleration
        @param {Adaptive.IAccelerationListenerWarning} warning
     */
     export function handleAccelerationListenerWarning(id : number, acceleration : Acceleration, warning : IAccelerationListenerWarning) : void {
          var listener : IAccelerationListener = registeredAccelerationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredAccelerationListener dictionary.");
          } else {
               listener.onWarning(acceleration, warning);
          }
     }

     /**
        @class Adaptive.AccelerationListener
        @extends Adaptive.BaseListener
     */
     export class AccelerationListener extends BaseListener implements IAccelerationListener {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IAccelerationListenerError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (acceleration : Acceleration) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (acceleration : Acceleration, warning : IAccelerationListenerWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for listener.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IAccelerationListenerError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.Acceleration
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.Acceleration, Adaptive.IAccelerationListenerWarning
          */
          constructor(onErrorFunction : (error : IAccelerationListenerError) => void, onResultFunction : (acceleration : Acceleration) => void, onWarningFunction : (acceleration : Acceleration, warning : IAccelerationListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: AccelerationListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: AccelerationListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: AccelerationListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.
             @param {Adaptive.IAccelerationListenerError} error error Error fired
             @since ARP1.0
          */
          public onError(error : IAccelerationListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: AccelerationListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Correct data received.
             @param {Adaptive.Acceleration} acceleration acceleration Acceleration received
             @since ARP1.0
          */
          public onResult(acceleration : Acceleration) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: AccelerationListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(acceleration);
               }
          }

          /**
             @method
             Data received with warning - ie. Needs calibration.
             @param {Adaptive.Acceleration} acceleration acceleration Acceleration received
             @param {Adaptive.IAccelerationListenerWarning} warning warning      Warning fired
             @since ARP1.0
          */
          public onWarning(acceleration : Acceleration, warning : IAccelerationListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: AccelerationListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(acceleration, warning);
               }
          }

     }

     /**
        @property {Adaptive.Dictionary} registeredButtonListener
        @member Adaptive
        @private
        ButtonListener control dictionary.
     */
     export var registeredButtonListener = new Dictionary<IButtonListener>([]);

        // ButtonListener global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IButtonListenerError} error
     */
     export function handleButtonListenerError(id : number, error : IButtonListenerError) : void {
          var listener : IButtonListener = registeredButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredButtonListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Button} button
     */
     export function handleButtonListenerResult(id : number, button : Button) : void {
          var listener : IButtonListener = registeredButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredButtonListener dictionary.");
          } else {
               listener.onResult(button);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Button} button
        @param {Adaptive.IButtonListenerWarning} warning
     */
     export function handleButtonListenerWarning(id : number, button : Button, warning : IButtonListenerWarning) : void {
          var listener : IButtonListener = registeredButtonListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredButtonListener dictionary.");
          } else {
               listener.onWarning(button, warning);
          }
     }

     /**
        @class Adaptive.ButtonListener
        @extends Adaptive.BaseListener
     */
     export class ButtonListener extends BaseListener implements IButtonListener {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IButtonListenerError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (button : Button) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (button : Button, warning : IButtonListenerWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for listener.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IButtonListenerError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.Button
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.Button, Adaptive.IButtonListenerWarning
          */
          constructor(onErrorFunction : (error : IButtonListenerError) => void, onResultFunction : (button : Button) => void, onWarningFunction : (button : Button, warning : IButtonListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ButtonListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ButtonListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ButtonListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             No data received
             @param {Adaptive.IButtonListenerError} error error occurred
             @since ARP1.0
          */
          public onError(error : IButtonListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ButtonListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Called on button pressed
             @param {Adaptive.Button} button button pressed
             @since ARP1.0
          */
          public onResult(button : Button) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ButtonListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(button);
               }
          }

          /**
             @method
             Data received with warning
             @param {Adaptive.Button} button button  pressed
             @param {Adaptive.IButtonListenerWarning} warning warning happened
             @since ARP1.0
          */
          public onWarning(button : Button, warning : IButtonListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ButtonListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(button, warning);
               }
          }

     }

     /**
        @property {Adaptive.Dictionary} registeredGeolocationListener
        @member Adaptive
        @private
        GeolocationListener control dictionary.
     */
     export var registeredGeolocationListener = new Dictionary<IGeolocationListener>([]);

        // GeolocationListener global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IGeolocationListenerError} error
     */
     export function handleGeolocationListenerError(id : number, error : IGeolocationListenerError) : void {
          var listener : IGeolocationListener = registeredGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredGeolocationListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Geolocation} geolocation
     */
     export function handleGeolocationListenerResult(id : number, geolocation : Geolocation) : void {
          var listener : IGeolocationListener = registeredGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredGeolocationListener dictionary.");
          } else {
               listener.onResult(geolocation);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Geolocation} geolocation
        @param {Adaptive.IGeolocationListenerWarning} warning
     */
     export function handleGeolocationListenerWarning(id : number, geolocation : Geolocation, warning : IGeolocationListenerWarning) : void {
          var listener : IGeolocationListener = registeredGeolocationListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredGeolocationListener dictionary.");
          } else {
               listener.onWarning(geolocation, warning);
          }
     }

     /**
        @class Adaptive.GeolocationListener
        @extends Adaptive.BaseListener
     */
     export class GeolocationListener extends BaseListener implements IGeolocationListener {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IGeolocationListenerError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (geolocation : Geolocation) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (geolocation : Geolocation, warning : IGeolocationListenerWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for listener.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IGeolocationListenerError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.Geolocation
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.Geolocation, Adaptive.IGeolocationListenerWarning
          */
          constructor(onErrorFunction : (error : IGeolocationListenerError) => void, onResultFunction : (geolocation : Geolocation) => void, onWarningFunction : (geolocation : Geolocation, warning : IGeolocationListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: GeolocationListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: GeolocationListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: GeolocationListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             No data received - error condition, not authorized or hardware not available.
             @param {Adaptive.IGeolocationListenerError} error error Type of error encountered during reading.
             @since ARP1.0
          */
          public onError(error : IGeolocationListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: GeolocationListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Correct data received.
             @param {Adaptive.Geolocation} geolocation geolocation Geolocation Bean
             @since ARP1.0
          */
          public onResult(geolocation : Geolocation) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: GeolocationListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(geolocation);
               }
          }

          /**
             @method
             Data received with warning - ie. HighDoP
             @param {Adaptive.Geolocation} geolocation geolocation Geolocation Bean
             @param {Adaptive.IGeolocationListenerWarning} warning warning     Type of warning encountered during reading.
             @since ARP1.0
          */
          public onWarning(geolocation : Geolocation, warning : IGeolocationListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: GeolocationListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(geolocation, warning);
               }
          }

     }

     /**
        @property {Adaptive.Dictionary} registeredLifecycleListener
        @member Adaptive
        @private
        LifecycleListener control dictionary.
     */
     export var registeredLifecycleListener = new Dictionary<ILifecycleListener>([]);

        // LifecycleListener global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.ILifecycleListenerError} error
     */
     export function handleLifecycleListenerError(id : number, error : ILifecycleListenerError) : void {
          var listener : ILifecycleListener = registeredLifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredLifecycleListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Lifecycle} lifecycle
     */
     export function handleLifecycleListenerResult(id : number, lifecycle : Lifecycle) : void {
          var listener : ILifecycleListener = registeredLifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredLifecycleListener dictionary.");
          } else {
               listener.onResult(lifecycle);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Lifecycle} lifecycle
        @param {Adaptive.ILifecycleListenerWarning} warning
     */
     export function handleLifecycleListenerWarning(id : number, lifecycle : Lifecycle, warning : ILifecycleListenerWarning) : void {
          var listener : ILifecycleListener = registeredLifecycleListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredLifecycleListener dictionary.");
          } else {
               listener.onWarning(lifecycle, warning);
          }
     }

     /**
        @class Adaptive.LifecycleListener
        @extends Adaptive.BaseListener
     */
     export class LifecycleListener extends BaseListener implements ILifecycleListener {

          /**
             @private
             @property
          */
          onErrorFunction : (error : ILifecycleListenerError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (lifecycle : Lifecycle) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (lifecycle : Lifecycle, warning : ILifecycleListenerWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for listener.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.ILifecycleListenerError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.Lifecycle
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.Lifecycle, Adaptive.ILifecycleListenerWarning
          */
          constructor(onErrorFunction : (error : ILifecycleListenerError) => void, onResultFunction : (lifecycle : Lifecycle) => void, onWarningFunction : (lifecycle : Lifecycle, warning : ILifecycleListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: LifecycleListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: LifecycleListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: LifecycleListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             No data received - error condition, not authorized or hardware not available.
             @param {Adaptive.ILifecycleListenerError} error error Type of error encountered during reading.
             @since ARP1.0
          */
          public onError(error : ILifecycleListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: LifecycleListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Called when lifecycle changes somehow.
             @param {Adaptive.Lifecycle} lifecycle lifecycle Lifecycle element
             @since ARP1.0
          */
          public onResult(lifecycle : Lifecycle) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: LifecycleListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(lifecycle);
               }
          }

          /**
             @method
             Data received with warning
             @param {Adaptive.Lifecycle} lifecycle lifecycle Lifecycle element
             @param {Adaptive.ILifecycleListenerWarning} warning warning   Type of warning encountered during reading.
             @since ARP1.0
          */
          public onWarning(lifecycle : Lifecycle, warning : ILifecycleListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: LifecycleListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(lifecycle, warning);
               }
          }

     }

     /**
        @property {Adaptive.Dictionary} registeredNetworkStatusListener
        @member Adaptive
        @private
        NetworkStatusListener control dictionary.
     */
     export var registeredNetworkStatusListener = new Dictionary<INetworkStatusListener>([]);

        // NetworkStatusListener global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.INetworkStatusListenerError} error
     */
     export function handleNetworkStatusListenerError(id : number, error : INetworkStatusListenerError) : void {
          var listener : INetworkStatusListener = registeredNetworkStatusListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredNetworkStatusListener dictionary.");
          } else {
               listener.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.ICapabilitiesNet} network
     */
     export function handleNetworkStatusListenerResult(id : number, network : ICapabilitiesNet) : void {
          var listener : INetworkStatusListener = registeredNetworkStatusListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredNetworkStatusListener dictionary.");
          } else {
               listener.onResult(network);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.ICapabilitiesNet} network
        @param {Adaptive.INetworkStatusListenerWarning} warning
     */
     export function handleNetworkStatusListenerWarning(id : number, network : ICapabilitiesNet, warning : INetworkStatusListenerWarning) : void {
          var listener : INetworkStatusListener = registeredNetworkStatusListener[""+id];
          if (typeof listener === 'undefined' || listener == null) {
               console.error("ERROR: No listener with id "+id+" registered in registeredNetworkStatusListener dictionary.");
          } else {
               listener.onWarning(network, warning);
          }
     }

     /**
        @class Adaptive.NetworkStatusListener
        @extends Adaptive.BaseListener
     */
     export class NetworkStatusListener extends BaseListener implements INetworkStatusListener {

          /**
             @private
             @property
          */
          onErrorFunction : (error : INetworkStatusListenerError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (network : ICapabilitiesNet) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (network : ICapabilitiesNet, warning : INetworkStatusListenerWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for listener.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.INetworkStatusListenerError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.ICapabilitiesNet
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.ICapabilitiesNet, Adaptive.INetworkStatusListenerWarning
          */
          constructor(onErrorFunction : (error : INetworkStatusListenerError) => void, onResultFunction : (network : ICapabilitiesNet) => void, onWarningFunction : (network : ICapabilitiesNet, warning : INetworkStatusListenerWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: NetworkStatusListener onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: NetworkStatusListener onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: NetworkStatusListener onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             No data received - error condition, not authorized or hardware not available.
             @param {Adaptive.INetworkStatusListenerError} error error Type of error encountered during reading.
             @since ARP1.0
          */
          public onError(error : INetworkStatusListenerError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: NetworkStatusListener contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Called when network connection changes somehow.
             @param {Adaptive.ICapabilitiesNet} network network Change to this network.
             @since ARP1.0
          */
          public onResult(network : ICapabilitiesNet) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: NetworkStatusListener contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(network);
               }
          }

          /**
             @method
             Status received with warning
             @param {Adaptive.ICapabilitiesNet} network network Change to this network.
             @param {Adaptive.INetworkStatusListenerWarning} warning warning Type of warning encountered during reading.
             @since ARP1.0
          */
          public onWarning(network : ICapabilitiesNet, warning : INetworkStatusListenerWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: NetworkStatusListener contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(network, warning);
               }
          }

     }

     /**
        @class Adaptive.BaseCallback
     */
     export class BaseCallback implements IBaseCallback {

          /**
             @property {number}
             Unique id of callback.
          */
          id : number;

          /**
             @property {Adaptive.IAdaptiveRPGroup}
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Constructor with callback id.

             @param {number} id  The id of the callback.
          */
          constructor(id : number) {
               this.id = id;
               this.apiGroup = IAdaptiveRPGroup.Application;
          }

          /**
             @method
             @return {number}
             Get the callback id.
          */
          getId() : number {
               return this.id;
          }

          /**
             @method
             @return {Adaptive.IAdaptiveRPGroup}
             Return the API group for the given interface.
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string}
             The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredContactPhotoResultCallback
        @member Adaptive
        @private
        ContactPhotoResultCallback control dictionary.
     */
     export var registeredContactPhotoResultCallback = new Dictionary<IContactPhotoResultCallback>([]);


        // ContactPhotoResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IContactPhotoResultCallbackError} error
     */
     export function handleContactPhotoResultCallbackError(id : number, error : IContactPhotoResultCallbackError) : void {
          var callback : IContactPhotoResultCallback = registeredContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactPhotoResultCallback dictionary.");
          } else {
               registeredContactPhotoResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {number[]} contactPhoto
     */
     export function handleContactPhotoResultCallbackResult(id : number, contactPhoto : Array<number>) : void {
          var callback : IContactPhotoResultCallback = registeredContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactPhotoResultCallback dictionary.");
          } else {
               registeredContactPhotoResultCallback.remove(""+id);
               callback.onResult(contactPhoto);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {number[]} contactPhoto
        @param {Adaptive.IContactPhotoResultCallbackWarning} warning
     */
     export function handleContactPhotoResultCallbackWarning(id : number, contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarning) : void {
          var callback : IContactPhotoResultCallback = registeredContactPhotoResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactPhotoResultCallback dictionary.");
          } else {
               registeredContactPhotoResultCallback.remove(""+id);
               callback.onWarning(contactPhoto, warning);
          }
     }


     /**
        @class Adaptive.ContactPhotoResultCallback
        @extends Adaptive.BaseCallback
     */
     export class ContactPhotoResultCallback extends BaseCallback implements IContactPhotoResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IContactPhotoResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (contactPhoto : Array<number>) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IContactPhotoResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: number[]
             @param {Function} onWarningFunction Function receiving parameters of type: number[], Adaptive.IContactPhotoResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IContactPhotoResultCallbackError) => void, onResultFunction : (contactPhoto : Array<number>) => void, onWarningFunction : (contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ContactPhotoResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             This method is called on Error
             @param {Adaptive.IContactPhotoResultCallbackError} error error returned by the platform
             @since ARP1.0
          */
          public onError(error : IContactPhotoResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             This method is called on Result
             @param {number[]} contactPhoto contactPhoto returned by the platform
             @since ARP1.0
          */
          public onResult(contactPhoto : Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(contactPhoto);
               }
          }

          /**
             @method
             This method is called on Warning
             @param {number[]} contactPhoto contactPhoto returned by the platform
             @param {Adaptive.IContactPhotoResultCallbackWarning} warning warning      returned by the platform
             @since ARP1.0
          */
          public onWarning(contactPhoto : Array<number>, warning : IContactPhotoResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(contactPhoto, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredContactResultCallback
        @member Adaptive
        @private
        ContactResultCallback control dictionary.
     */
     export var registeredContactResultCallback = new Dictionary<IContactResultCallback>([]);


        // ContactResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IContactResultCallbackError} error
     */
     export function handleContactResultCallbackError(id : number, error : IContactResultCallbackError) : void {
          var callback : IContactResultCallback = registeredContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactResultCallback dictionary.");
          } else {
               registeredContactResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Contact[]} contacts
     */
     export function handleContactResultCallbackResult(id : number, contacts : Array<Contact>) : void {
          var callback : IContactResultCallback = registeredContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactResultCallback dictionary.");
          } else {
               registeredContactResultCallback.remove(""+id);
               callback.onResult(contacts);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Contact[]} contacts
        @param {Adaptive.IContactResultCallbackWarning} warning
     */
     export function handleContactResultCallbackWarning(id : number, contacts : Array<Contact>, warning : IContactResultCallbackWarning) : void {
          var callback : IContactResultCallback = registeredContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactResultCallback dictionary.");
          } else {
               registeredContactResultCallback.remove(""+id);
               callback.onWarning(contacts, warning);
          }
     }


     /**
        @class Adaptive.ContactResultCallback
        @extends Adaptive.BaseCallback
     */
     export class ContactResultCallback extends BaseCallback implements IContactResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IContactResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (contacts : Array<Contact>) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (contacts : Array<Contact>, warning : IContactResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IContactResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.Contact[]
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.Contact[], Adaptive.IContactResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IContactResultCallbackError) => void, onResultFunction : (contacts : Array<Contact>) => void, onWarningFunction : (contacts : Array<Contact>, warning : IContactResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ContactResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ContactResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ContactResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             This method is called on Error
             @param {Adaptive.IContactResultCallbackError} error error returned by the platform
             @since ARP1.0
          */
          public onError(error : IContactResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ContactResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             This method is called on Result
             @param {Adaptive.Contact[]} contacts contacts returned by the platform
             @since ARP1.0
          */
          public onResult(contacts : Array<Contact>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ContactResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(contacts);
               }
          }

          /**
             @method
             This method is called on Warning
             @param {Adaptive.Contact[]} contacts contacts returned by the platform
             @param {Adaptive.IContactResultCallbackWarning} warning warning  returned by the platform
             @since ARP1.0
          */
          public onWarning(contacts : Array<Contact>, warning : IContactResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ContactResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(contacts, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredDatabaseResultCallback
        @member Adaptive
        @private
        DatabaseResultCallback control dictionary.
     */
     export var registeredDatabaseResultCallback = new Dictionary<IDatabaseResultCallback>([]);


        // DatabaseResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IDatabaseResultCallbackError} error
     */
     export function handleDatabaseResultCallbackError(id : number, error : IDatabaseResultCallbackError) : void {
          var callback : IDatabaseResultCallback = registeredDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseResultCallback dictionary.");
          } else {
               registeredDatabaseResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Database} database
     */
     export function handleDatabaseResultCallbackResult(id : number, database : Database) : void {
          var callback : IDatabaseResultCallback = registeredDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseResultCallback dictionary.");
          } else {
               registeredDatabaseResultCallback.remove(""+id);
               callback.onResult(database);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.Database} database
        @param {Adaptive.IDatabaseResultCallbackWarning} warning
     */
     export function handleDatabaseResultCallbackWarning(id : number, database : Database, warning : IDatabaseResultCallbackWarning) : void {
          var callback : IDatabaseResultCallback = registeredDatabaseResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseResultCallback dictionary.");
          } else {
               registeredDatabaseResultCallback.remove(""+id);
               callback.onWarning(database, warning);
          }
     }


     /**
        @class Adaptive.DatabaseResultCallback
        @extends Adaptive.BaseCallback
     */
     export class DatabaseResultCallback extends BaseCallback implements IDatabaseResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IDatabaseResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (database : Database) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (database : Database, warning : IDatabaseResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IDatabaseResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.Database
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.Database, Adaptive.IDatabaseResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IDatabaseResultCallbackError) => void, onResultFunction : (database : Database) => void, onWarningFunction : (database : Database, warning : IDatabaseResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: DatabaseResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             Result callback for error responses
             @param {Adaptive.IDatabaseResultCallbackError} error error Returned error
             @since ARP1.0
          */
          public onError(error : IDatabaseResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: DatabaseResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Result callback for correct responses
             @param {Adaptive.Database} database database Returns the database
             @since ARP1.0
          */
          public onResult(database : Database) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: DatabaseResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(database);
               }
          }

          /**
             @method
             Result callback for warning responses
             @param {Adaptive.Database} database database Returns the database
             @param {Adaptive.IDatabaseResultCallbackWarning} warning warning  Returned Warning
             @since ARP1.0
          */
          public onWarning(database : Database, warning : IDatabaseResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: DatabaseResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(database, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredDatabaseTableResultCallback
        @member Adaptive
        @private
        DatabaseTableResultCallback control dictionary.
     */
     export var registeredDatabaseTableResultCallback = new Dictionary<IDatabaseTableResultCallback>([]);


        // DatabaseTableResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IDatabaseTableResultCallbackError} error
     */
     export function handleDatabaseTableResultCallbackError(id : number, error : IDatabaseTableResultCallbackError) : void {
          var callback : IDatabaseTableResultCallback = registeredDatabaseTableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseTableResultCallback dictionary.");
          } else {
               registeredDatabaseTableResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.DatabaseTable} databaseTable
     */
     export function handleDatabaseTableResultCallbackResult(id : number, databaseTable : DatabaseTable) : void {
          var callback : IDatabaseTableResultCallback = registeredDatabaseTableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseTableResultCallback dictionary.");
          } else {
               registeredDatabaseTableResultCallback.remove(""+id);
               callback.onResult(databaseTable);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.DatabaseTable} databaseTable
        @param {Adaptive.IDatabaseTableResultCallbackWarning} warning
     */
     export function handleDatabaseTableResultCallbackWarning(id : number, databaseTable : DatabaseTable, warning : IDatabaseTableResultCallbackWarning) : void {
          var callback : IDatabaseTableResultCallback = registeredDatabaseTableResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredDatabaseTableResultCallback dictionary.");
          } else {
               registeredDatabaseTableResultCallback.remove(""+id);
               callback.onWarning(databaseTable, warning);
          }
     }


     /**
        @class Adaptive.DatabaseTableResultCallback
        @extends Adaptive.BaseCallback
     */
     export class DatabaseTableResultCallback extends BaseCallback implements IDatabaseTableResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IDatabaseTableResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (databaseTable : DatabaseTable) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (databaseTable : DatabaseTable, warning : IDatabaseTableResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IDatabaseTableResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.DatabaseTable
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.DatabaseTable, Adaptive.IDatabaseTableResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IDatabaseTableResultCallbackError) => void, onResultFunction : (databaseTable : DatabaseTable) => void, onWarningFunction : (databaseTable : DatabaseTable, warning : IDatabaseTableResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: DatabaseTableResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: DatabaseTableResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: DatabaseTableResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             Result callback for error responses
             @param {Adaptive.IDatabaseTableResultCallbackError} error error Returned error
             @since ARP1.0
          */
          public onError(error : IDatabaseTableResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Result callback for correct responses
             @param {Adaptive.DatabaseTable} databaseTable databaseTable Returns the databaseTable
             @since ARP1.0
          */
          public onResult(databaseTable : DatabaseTable) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(databaseTable);
               }
          }

          /**
             @method
             Result callback for warning responses
             @param {Adaptive.DatabaseTable} databaseTable databaseTable Returns the databaseTable
             @param {Adaptive.IDatabaseTableResultCallbackWarning} warning warning       Returned Warning
             @since ARP1.0
          */
          public onWarning(databaseTable : DatabaseTable, warning : IDatabaseTableResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(databaseTable, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredFileDataLoadResultCallback
        @member Adaptive
        @private
        FileDataLoadResultCallback control dictionary.
     */
     export var registeredFileDataLoadResultCallback = new Dictionary<IFileDataLoadResultCallback>([]);


        // FileDataLoadResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IFileDataLoadResultCallbackError} error
     */
     export function handleFileDataLoadResultCallbackError(id : number, error : IFileDataLoadResultCallbackError) : void {
          var callback : IFileDataLoadResultCallback = registeredFileDataLoadResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataLoadResultCallback dictionary.");
          } else {
               registeredFileDataLoadResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {number[]} data
     */
     export function handleFileDataLoadResultCallbackResult(id : number, data : Array<number>) : void {
          var callback : IFileDataLoadResultCallback = registeredFileDataLoadResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataLoadResultCallback dictionary.");
          } else {
               registeredFileDataLoadResultCallback.remove(""+id);
               callback.onResult(data);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {number[]} data
        @param {Adaptive.IFileDataLoadResultCallbackWarning} warning
     */
     export function handleFileDataLoadResultCallbackWarning(id : number, data : Array<number>, warning : IFileDataLoadResultCallbackWarning) : void {
          var callback : IFileDataLoadResultCallback = registeredFileDataLoadResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataLoadResultCallback dictionary.");
          } else {
               registeredFileDataLoadResultCallback.remove(""+id);
               callback.onWarning(data, warning);
          }
     }


     /**
        @class Adaptive.FileDataLoadResultCallback
        @extends Adaptive.BaseCallback
     */
     export class FileDataLoadResultCallback extends BaseCallback implements IFileDataLoadResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IFileDataLoadResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (data : Array<number>) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (data : Array<number>, warning : IFileDataLoadResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IFileDataLoadResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: number[]
             @param {Function} onWarningFunction Function receiving parameters of type: number[], Adaptive.IFileDataLoadResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileDataLoadResultCallbackError) => void, onResultFunction : (data : Array<number>) => void, onWarningFunction : (data : Array<number>, warning : IFileDataLoadResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileDataLoadResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             Error processing data retrieval/storage operation.
             @param {Adaptive.IFileDataLoadResultCallbackError} error error Error condition encountered.
             @since ARP1.0
          */
          public onError(error : IFileDataLoadResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Result of data retrieval operation.
             @param {number[]} data data Data loaded.
             @since ARP1.0
          */
          public onResult(data : Array<number>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(data);
               }
          }

          /**
             @method
             Result with warning of data retrieval/storage operation.
             @param {number[]} data data    File being loaded.
             @param {Adaptive.IFileDataLoadResultCallbackWarning} warning warning Warning condition encountered.
             @since ARP1.0
          */
          public onWarning(data : Array<number>, warning : IFileDataLoadResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(data, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredFileDataStoreResultCallback
        @member Adaptive
        @private
        FileDataStoreResultCallback control dictionary.
     */
     export var registeredFileDataStoreResultCallback = new Dictionary<IFileDataStoreResultCallback>([]);


        // FileDataStoreResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IFileDataStoreResultCallbackError} error
     */
     export function handleFileDataStoreResultCallbackError(id : number, error : IFileDataStoreResultCallbackError) : void {
          var callback : IFileDataStoreResultCallback = registeredFileDataStoreResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataStoreResultCallback dictionary.");
          } else {
               registeredFileDataStoreResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.FileDescriptor} file
     */
     export function handleFileDataStoreResultCallbackResult(id : number, file : FileDescriptor) : void {
          var callback : IFileDataStoreResultCallback = registeredFileDataStoreResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataStoreResultCallback dictionary.");
          } else {
               registeredFileDataStoreResultCallback.remove(""+id);
               callback.onResult(file);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.FileDescriptor} file
        @param {Adaptive.IFileDataStoreResultCallbackWarning} warning
     */
     export function handleFileDataStoreResultCallbackWarning(id : number, file : FileDescriptor, warning : IFileDataStoreResultCallbackWarning) : void {
          var callback : IFileDataStoreResultCallback = registeredFileDataStoreResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileDataStoreResultCallback dictionary.");
          } else {
               registeredFileDataStoreResultCallback.remove(""+id);
               callback.onWarning(file, warning);
          }
     }


     /**
        @class Adaptive.FileDataStoreResultCallback
        @extends Adaptive.BaseCallback
     */
     export class FileDataStoreResultCallback extends BaseCallback implements IFileDataStoreResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IFileDataStoreResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (file : FileDescriptor) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (file : FileDescriptor, warning : IFileDataStoreResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IFileDataStoreResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor, Adaptive.IFileDataStoreResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileDataStoreResultCallbackError) => void, onResultFunction : (file : FileDescriptor) => void, onWarningFunction : (file : FileDescriptor, warning : IFileDataStoreResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileDataStoreResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileDataStoreResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileDataStoreResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             Error processing data retrieval/storage operation.
             @param {Adaptive.IFileDataStoreResultCallbackError} error error Error condition encountered.
             @since ARP1.0
          */
          public onError(error : IFileDataStoreResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Result of data storage operation.
             @param {Adaptive.FileDescriptor} file file File reference to stored data.
             @since ARP1.0
          */
          public onResult(file : FileDescriptor) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(file);
               }
          }

          /**
             @method
             Result with warning of data retrieval/storage operation.
             @param {Adaptive.FileDescriptor} file file    File being loaded/stored.
             @param {Adaptive.IFileDataStoreResultCallbackWarning} warning warning Warning condition encountered.
             @since ARP1.0
          */
          public onWarning(file : FileDescriptor, warning : IFileDataStoreResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(file, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredFileListResultCallback
        @member Adaptive
        @private
        FileListResultCallback control dictionary.
     */
     export var registeredFileListResultCallback = new Dictionary<IFileListResultCallback>([]);


        // FileListResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IFileListResultCallbackError} error
     */
     export function handleFileListResultCallbackError(id : number, error : IFileListResultCallbackError) : void {
          var callback : IFileListResultCallback = registeredFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileListResultCallback dictionary.");
          } else {
               registeredFileListResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.FileDescriptor[]} files
     */
     export function handleFileListResultCallbackResult(id : number, files : Array<FileDescriptor>) : void {
          var callback : IFileListResultCallback = registeredFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileListResultCallback dictionary.");
          } else {
               registeredFileListResultCallback.remove(""+id);
               callback.onResult(files);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.FileDescriptor[]} files
        @param {Adaptive.IFileListResultCallbackWarning} warning
     */
     export function handleFileListResultCallbackWarning(id : number, files : Array<FileDescriptor>, warning : IFileListResultCallbackWarning) : void {
          var callback : IFileListResultCallback = registeredFileListResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileListResultCallback dictionary.");
          } else {
               registeredFileListResultCallback.remove(""+id);
               callback.onWarning(files, warning);
          }
     }


     /**
        @class Adaptive.FileListResultCallback
        @extends Adaptive.BaseCallback
     */
     export class FileListResultCallback extends BaseCallback implements IFileListResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IFileListResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (files : Array<FileDescriptor>) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (files : Array<FileDescriptor>, warning : IFileListResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IFileListResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor[]
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor[], Adaptive.IFileListResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileListResultCallbackError) => void, onResultFunction : (files : Array<FileDescriptor>) => void, onWarningFunction : (files : Array<FileDescriptor>, warning : IFileListResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileListResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileListResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileListResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             On error result of a file operation.
             @param {Adaptive.IFileListResultCallbackError} error error Error processing the request.
             @since ARP1.0
          */
          public onError(error : IFileListResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileListResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             On correct result of a file operation.
             @param {Adaptive.FileDescriptor[]} files files Array of resulting files/folders.
             @since ARP1.0
          */
          public onResult(files : Array<FileDescriptor>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileListResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(files);
               }
          }

          /**
             @method
             On partial result of a file operation, containing a warning.
             @param {Adaptive.FileDescriptor[]} files files   Array of resulting files/folders.
             @param {Adaptive.IFileListResultCallbackWarning} warning warning Warning condition encountered.
             @since ARP1.0
          */
          public onWarning(files : Array<FileDescriptor>, warning : IFileListResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileListResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(files, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredFileResultCallback
        @member Adaptive
        @private
        FileResultCallback control dictionary.
     */
     export var registeredFileResultCallback = new Dictionary<IFileResultCallback>([]);


        // FileResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IFileResultCallbackError} error
     */
     export function handleFileResultCallbackError(id : number, error : IFileResultCallbackError) : void {
          var callback : IFileResultCallback = registeredFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileResultCallback dictionary.");
          } else {
               registeredFileResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.FileDescriptor} storageFile
     */
     export function handleFileResultCallbackResult(id : number, storageFile : FileDescriptor) : void {
          var callback : IFileResultCallback = registeredFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileResultCallback dictionary.");
          } else {
               registeredFileResultCallback.remove(""+id);
               callback.onResult(storageFile);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.FileDescriptor} file
        @param {Adaptive.IFileResultCallbackWarning} warning
     */
     export function handleFileResultCallbackWarning(id : number, file : FileDescriptor, warning : IFileResultCallbackWarning) : void {
          var callback : IFileResultCallback = registeredFileResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredFileResultCallback dictionary.");
          } else {
               registeredFileResultCallback.remove(""+id);
               callback.onWarning(file, warning);
          }
     }


     /**
        @class Adaptive.FileResultCallback
        @extends Adaptive.BaseCallback
     */
     export class FileResultCallback extends BaseCallback implements IFileResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IFileResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (storageFile : FileDescriptor) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (file : FileDescriptor, warning : IFileResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IFileResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor, Adaptive.IFileResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IFileResultCallbackError) => void, onResultFunction : (storageFile : FileDescriptor) => void, onWarningFunction : (file : FileDescriptor, warning : IFileResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: FileResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: FileResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: FileResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             On error result of a file operation.
             @param {Adaptive.IFileResultCallbackError} error error Error processing the request.
             @since ARP1.0
          */
          public onError(error : IFileResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: FileResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             On correct result of a file operation.
             @param {Adaptive.FileDescriptor} storageFile storageFile Reference to the resulting file.
             @since ARP1.0
          */
          public onResult(storageFile : FileDescriptor) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: FileResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(storageFile);
               }
          }

          /**
             @method
             On partial result of a file operation, containing a warning.
             @param {Adaptive.FileDescriptor} file file    Reference to the offending file.
             @param {Adaptive.IFileResultCallbackWarning} warning warning Warning processing the request.
             @since ARP1.0
          */
          public onWarning(file : FileDescriptor, warning : IFileResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: FileResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(file, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredMessagingCallback
        @member Adaptive
        @private
        MessagingCallback control dictionary.
     */
     export var registeredMessagingCallback = new Dictionary<IMessagingCallback>([]);


        // MessagingCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IMessagingCallbackError} error
     */
     export function handleMessagingCallbackError(id : number, error : IMessagingCallbackError) : void {
          var callback : IMessagingCallback = registeredMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredMessagingCallback dictionary.");
          } else {
               registeredMessagingCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {boolean} success
     */
     export function handleMessagingCallbackResult(id : number, success : boolean) : void {
          var callback : IMessagingCallback = registeredMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredMessagingCallback dictionary.");
          } else {
               registeredMessagingCallback.remove(""+id);
               callback.onResult(success);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {boolean} success
        @param {Adaptive.IMessagingCallbackWarning} warning
     */
     export function handleMessagingCallbackWarning(id : number, success : boolean, warning : IMessagingCallbackWarning) : void {
          var callback : IMessagingCallback = registeredMessagingCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredMessagingCallback dictionary.");
          } else {
               registeredMessagingCallback.remove(""+id);
               callback.onWarning(success, warning);
          }
     }


     /**
        @class Adaptive.MessagingCallback
        @extends Adaptive.BaseCallback
     */
     export class MessagingCallback extends BaseCallback implements IMessagingCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IMessagingCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (success : boolean) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (success : boolean, warning : IMessagingCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IMessagingCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: boolean
             @param {Function} onWarningFunction Function receiving parameters of type: boolean, Adaptive.IMessagingCallbackWarning
          */
          constructor(onErrorFunction : (error : IMessagingCallbackError) => void, onResultFunction : (success : boolean) => void, onWarningFunction : (success : boolean, warning : IMessagingCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: MessagingCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: MessagingCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: MessagingCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             This method is called on Error
             @param {Adaptive.IMessagingCallbackError} error error returned by the platform
             @since ARP1.0
          */
          public onError(error : IMessagingCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: MessagingCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             This method is called on Result
             @param {boolean} success success true if sent;false otherwise
             @since ARP1.0
          */
          public onResult(success : boolean) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: MessagingCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(success);
               }
          }

          /**
             @method
             This method is called on Warning
             @param {boolean} success success true if sent;false otherwise
             @param {Adaptive.IMessagingCallbackWarning} warning warning returned by the platform
             @since ARP1.0
          */
          public onWarning(success : boolean, warning : IMessagingCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: MessagingCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(success, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredNetworkReachabilityCallback
        @member Adaptive
        @private
        NetworkReachabilityCallback control dictionary.
     */
     export var registeredNetworkReachabilityCallback = new Dictionary<INetworkReachabilityCallback>([]);


        // NetworkReachabilityCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.INetworkReachabilityCallbackError} error
     */
     export function handleNetworkReachabilityCallbackError(id : number, error : INetworkReachabilityCallbackError) : void {
          var callback : INetworkReachabilityCallback = registeredNetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredNetworkReachabilityCallback dictionary.");
          } else {
               registeredNetworkReachabilityCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {boolean} reachable
     */
     export function handleNetworkReachabilityCallbackResult(id : number, reachable : boolean) : void {
          var callback : INetworkReachabilityCallback = registeredNetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredNetworkReachabilityCallback dictionary.");
          } else {
               registeredNetworkReachabilityCallback.remove(""+id);
               callback.onResult(reachable);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {boolean} reachable
        @param {Adaptive.INetworkReachabilityCallbackWarning} warning
     */
     export function handleNetworkReachabilityCallbackWarning(id : number, reachable : boolean, warning : INetworkReachabilityCallbackWarning) : void {
          var callback : INetworkReachabilityCallback = registeredNetworkReachabilityCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredNetworkReachabilityCallback dictionary.");
          } else {
               registeredNetworkReachabilityCallback.remove(""+id);
               callback.onWarning(reachable, warning);
          }
     }


     /**
        @class Adaptive.NetworkReachabilityCallback
        @extends Adaptive.BaseCallback
     */
     export class NetworkReachabilityCallback extends BaseCallback implements INetworkReachabilityCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : INetworkReachabilityCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (reachable : boolean) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (reachable : boolean, warning : INetworkReachabilityCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.INetworkReachabilityCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: boolean
             @param {Function} onWarningFunction Function receiving parameters of type: boolean, Adaptive.INetworkReachabilityCallbackWarning
          */
          constructor(onErrorFunction : (error : INetworkReachabilityCallbackError) => void, onResultFunction : (reachable : boolean) => void, onWarningFunction : (reachable : boolean, warning : INetworkReachabilityCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: NetworkReachabilityCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             No data received - error condition, not authorized .
             @param {Adaptive.INetworkReachabilityCallbackError} error error Error value
             @since ARP1.0
          */
          public onError(error : INetworkReachabilityCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Correct data received.
             @param {boolean} reachable reachable Indicates if the host is reachable
             @since ARP1.0
          */
          public onResult(reachable : boolean) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(reachable);
               }
          }

          /**
             @method
             Data received with warning - ie Found entries with existing key and values have been overriden
             @param {boolean} reachable reachable Indicates if the host is reachable
             @param {Adaptive.INetworkReachabilityCallbackWarning} warning warning   Warning value
             @since ARP1.0
          */
          public onWarning(reachable : boolean, warning : INetworkReachabilityCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(reachable, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredSecurityResultCallback
        @member Adaptive
        @private
        SecurityResultCallback control dictionary.
     */
     export var registeredSecurityResultCallback = new Dictionary<ISecurityResultCallback>([]);


        // SecurityResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.ISecurityResultCallbackError} error
     */
     export function handleSecurityResultCallbackError(id : number, error : ISecurityResultCallbackError) : void {
          var callback : ISecurityResultCallback = registeredSecurityResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredSecurityResultCallback dictionary.");
          } else {
               registeredSecurityResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.SecureKeyPair[]} keyValues
     */
     export function handleSecurityResultCallbackResult(id : number, keyValues : Array<SecureKeyPair>) : void {
          var callback : ISecurityResultCallback = registeredSecurityResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredSecurityResultCallback dictionary.");
          } else {
               registeredSecurityResultCallback.remove(""+id);
               callback.onResult(keyValues);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.SecureKeyPair[]} keyValues
        @param {Adaptive.ISecurityResultCallbackWarning} warning
     */
     export function handleSecurityResultCallbackWarning(id : number, keyValues : Array<SecureKeyPair>, warning : ISecurityResultCallbackWarning) : void {
          var callback : ISecurityResultCallback = registeredSecurityResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredSecurityResultCallback dictionary.");
          } else {
               registeredSecurityResultCallback.remove(""+id);
               callback.onWarning(keyValues, warning);
          }
     }


     /**
        @class Adaptive.SecurityResultCallback
        @extends Adaptive.BaseCallback
     */
     export class SecurityResultCallback extends BaseCallback implements ISecurityResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : ISecurityResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (keyValues : Array<SecureKeyPair>) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (keyValues : Array<SecureKeyPair>, warning : ISecurityResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.ISecurityResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.SecureKeyPair[]
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.SecureKeyPair[], Adaptive.ISecurityResultCallbackWarning
          */
          constructor(onErrorFunction : (error : ISecurityResultCallbackError) => void, onResultFunction : (keyValues : Array<SecureKeyPair>) => void, onWarningFunction : (keyValues : Array<SecureKeyPair>, warning : ISecurityResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: SecurityResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: SecurityResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: SecurityResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             No data received - error condition, not authorized .
             @param {Adaptive.ISecurityResultCallbackError} error error Error values
             @since ARP1.0
          */
          public onError(error : ISecurityResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: SecurityResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             Correct data received.
             @param {Adaptive.SecureKeyPair[]} keyValues keyValues key and values
             @since ARP1.0
          */
          public onResult(keyValues : Array<SecureKeyPair>) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: SecurityResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(keyValues);
               }
          }

          /**
             @method
             Data received with warning - ie Found entries with existing key and values have been overriden
             @param {Adaptive.SecureKeyPair[]} keyValues keyValues key and values
             @param {Adaptive.ISecurityResultCallbackWarning} warning warning   Warning values
             @since ARP1.0
          */
          public onWarning(keyValues : Array<SecureKeyPair>, warning : ISecurityResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: SecurityResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(keyValues, warning);
               }
          }

     }


     /**
        @property {Adaptive.Dictionary} registeredServiceResultCallback
        @member Adaptive
        @private
        ServiceResultCallback control dictionary.
     */
     export var registeredServiceResultCallback = new Dictionary<IServiceResultCallback>([]);


        // ServiceResultCallback global listener handlers.

     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.IServiceResultCallbackError} error
     */
     export function handleServiceResultCallbackError(id : number, error : IServiceResultCallbackError) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onError(error);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.ServiceResponse} response
     */
     export function handleServiceResultCallbackResult(id : number, response : ServiceResponse) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onResult(response);
          }
     }
     /**
        @method
        @private
        @member Adaptive
        @param {number} id
        @param {Adaptive.ServiceResponse} response
        @param {Adaptive.IServiceResultCallbackWarning} warning
     */
     export function handleServiceResultCallbackWarning(id : number, response : ServiceResponse, warning : IServiceResultCallbackWarning) : void {
          var callback : IServiceResultCallback = registeredServiceResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredServiceResultCallback dictionary.");
          } else {
               registeredServiceResultCallback.remove(""+id);
               callback.onWarning(response, warning);
          }
     }


     /**
        @class Adaptive.ServiceResultCallback
        @extends Adaptive.BaseCallback
     */
     export class ServiceResultCallback extends BaseCallback implements IServiceResultCallback {

          /**
             @private
             @property
          */
          onErrorFunction : (error : IServiceResultCallbackError) => void;
          /**
             @private
             @property
          */
          onResultFunction : (response : ServiceResponse) => void;
          /**
             @private
             @property
          */
          onWarningFunction : (response : ServiceResponse, warning : IServiceResultCallbackWarning) => void;

          /**
             @method constructor
             Constructor with anonymous handler functions for callback.

             @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.IServiceResultCallbackError
             @param {Function} onResultFunction Function receiving parameters of type: Adaptive.ServiceResponse
             @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.ServiceResponse, Adaptive.IServiceResultCallbackWarning
          */
          constructor(onErrorFunction : (error : IServiceResultCallbackError) => void, onResultFunction : (response : ServiceResponse) => void, onWarningFunction : (response : ServiceResponse, warning : IServiceResultCallbackWarning) => void) {
               super(++registeredCounter);
               if (onErrorFunction == null) {
                    console.error("ERROR: ServiceResultCallback onErrorFunction is not defined.");
               } else {
                    this.onErrorFunction = onErrorFunction;
               }
               if (onResultFunction == null) {
                    console.error("ERROR: ServiceResultCallback onResultFunction is not defined.");
               } else {
                    this.onResultFunction = onResultFunction;
               }
               if (onWarningFunction == null) {
                    console.error("ERROR: ServiceResultCallback onWarningFunction is not defined.");
               } else {
                    this.onWarningFunction = onWarningFunction;
               }
          }

          /**
             @method
             This method is called on Error
             @param {Adaptive.IServiceResultCallbackError} error error returned by the platform
             @since ARP1.0
          */
          public onError(error : IServiceResultCallbackError) : void {
               if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                    console.warn("WARNING: ServiceResultCallback contains a null reference to onErrorFunction.");
               } else {
                    this.onErrorFunction(error);
               }
          }

          /**
             @method
             This method is called on Result
             @param {Adaptive.ServiceResponse} response response data
             @since ARP1.0
          */
          public onResult(response : ServiceResponse) : void {
               if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                    console.warn("WARNING: ServiceResultCallback contains a null reference to onResultFunction.");
               } else {
                    this.onResultFunction(response);
               }
          }

          /**
             @method
             This method is called on Warning
             @param {Adaptive.ServiceResponse} response response data
             @param {Adaptive.IServiceResultCallbackWarning} warning warning  returned by the platform
             @since ARP1.0
          */
          public onWarning(response : ServiceResponse, warning : IServiceResultCallbackWarning) : void {
               if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                    console.warn("WARNING: ServiceResultCallback contains a null reference to onWarningFunction.");
               } else {
                    this.onWarningFunction(response, warning);
               }
          }

     }

     /**
        @class Adaptive.BaseApplicationBridge
        Base application for Application purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseApplicationBridge implements IBaseApplication {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Application;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseCommerceBridge
        Base application for Commerce purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseCommerceBridge implements IBaseCommerce {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Commerce;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseCommunicationBridge
        Base application for Communication purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseCommunicationBridge implements IBaseCommunication {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Communication;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseDataBridge
        Base application for Data purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseDataBridge implements IBaseData {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Data;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseMediaBridge
        Base application for Media purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseMediaBridge implements IBaseMedia {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Media;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseNotificationBridge
        Base application for Notification purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseNotificationBridge implements IBaseNotification {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Notification;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BasePIMBridge
        Base application for PIM purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BasePIMBridge implements IBasePIM {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.PIM;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseReaderBridge
        Base application for Reader purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseReaderBridge implements IBaseReader {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Reader;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseSecurityBridge
        Base application for Security purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseSecurityBridge implements IBaseSecurity {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Security;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseSensorBridge
        Base application for Sensor purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseSensorBridge implements IBaseSensor {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Sensor;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseSocialBridge
        Base application for Social purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseSocialBridge implements IBaseSocial {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Social;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseSystemBridge
        Base application for System purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseSystemBridge implements IBaseSystem {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.System;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseUIBridge
        Base application for UI purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseUIBridge implements IBaseUI {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.UI;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.BaseUtilBridge
        Base application for Utility purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BaseUtilBridge implements IBaseUtil {

          /**
             @property {Adaptive.IAdaptiveRPGroup} apiGroup
             Group of API.
          */
          apiGroup : IAdaptiveRPGroup;

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               this.apiGroup = IAdaptiveRPGroup.Util;
          }

          /**
             @method
             Return the API group for the given interface.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          getAPIGroup() : IAdaptiveRPGroup {
               return this.apiGroup;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          getAPIVersion() : string {
               return "v2.0.4"
          }
     }

     /**
        @class Adaptive.AnalyticsBridge
        @extends Adaptive.BaseApplicationBridge
        Interface for Analytics purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AnalyticsBridge extends BaseApplicationBridge implements IAnalytics {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.GlobalizationBridge
        @extends Adaptive.BaseApplicationBridge
        Interface for Managing the Globalization results

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class GlobalizationBridge extends BaseApplicationBridge implements IGlobalization {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Returns the default locale of the application defined in the configuration file

             @return {Adaptive.Locale} Default Locale of the application
             @since ARP1.0
          */
          getDefaultLocale() : Locale {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IGlobalization","getDefaultLocale",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : Locale = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = Locale.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GlobalizationBridge.getDefaultLocale' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'GlobalizationBridge.getDefaultLocale' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GlobalizationBridge.getDefaultLocale' request.");
               }
               return response;
          }

          /**
             @method
             List of supported locales for the application defined in the configuration file

             @return {Adaptive.Locale[]} List of locales
             @since ARP1.0
          */
          getLocaleSupportedDescriptors() : Array<Locale> {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IGlobalization","getLocaleSupportedDescriptors",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : Array<Locale> = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = new Array<Locale>();
                         for(var __value__ in JSON.parse(apiResponse.getResponse())) {
                              response.push(Locale.toObject(__value__));
                         }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GlobalizationBridge.getLocaleSupportedDescriptors' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'GlobalizationBridge.getLocaleSupportedDescriptors' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GlobalizationBridge.getLocaleSupportedDescriptors' request.");
               }
               return response;
          }

          /**
             @method
             Gets the text/message corresponding to the given key and locale.

             @param {string} key key    to match text
             @param {Adaptive.Locale} locale locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
             @return {string} Localized text.
             @since ARP1.0
          */
          getResourceLiteral(key : string, locale : Locale) : string {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(key));
               arParams.push(JSON.stringify(locale));
               var apiRequest : APIRequest = new APIRequest("IGlobalization","getResourceLiteral",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : string = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GlobalizationBridge.getResourceLiteral' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'GlobalizationBridge.getResourceLiteral' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GlobalizationBridge.getResourceLiteral' request.");
               }
               return response;
          }

          /**
             @method
             Gets the full application configured literals (key/message pairs) corresponding to the given locale.

             @param {Adaptive.Locale} locale locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
             @return {Adaptive.KeyPair[]} Localized texts in the form of an object.
             @since ARP1.0
          */
          getResourceLiterals(locale : Locale) : Array<KeyPair> {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(locale));
               var apiRequest : APIRequest = new APIRequest("IGlobalization","getResourceLiterals",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : Array<KeyPair> = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = new Array<KeyPair>();
                         for(var __value__ in JSON.parse(apiResponse.getResponse())) {
                              response.push(KeyPair.toObject(__value__));
                         }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GlobalizationBridge.getResourceLiterals' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'GlobalizationBridge.getResourceLiterals' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GlobalizationBridge.getResourceLiterals' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.LifecycleBridge
        @extends Adaptive.BaseApplicationBridge
        Interface for Managing the Lifecycle listeners

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class LifecycleBridge extends BaseApplicationBridge implements ILifecycle {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Add the listener for the lifecycle of the app

             @param {Adaptive.LifecycleListener} listener listener Lifecycle listener
             @since ARP1.0
          */
          addLifecycleListener(listener : ILifecycleListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("ILifecycle","addLifecycleListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add listener reference to local dictionary.
               registeredLifecycleListener.add(""+listener.getId(), listener);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove listener reference from local dictionary due to invalid response.
                              registeredLifecycleListener.remove(""+listener.getId());
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'LifecycleBridge.addLifecycleListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove listener reference from local dictionary due to invalid response.
                         registeredLifecycleListener.remove(""+listener.getId());
                         console.error("ERROR: 'LifecycleBridge.addLifecycleListener' incorrect response received.");
                    }
               } else {
                    // Remove listener reference from local dictionary due to invalid response.
                    registeredLifecycleListener.remove(""+listener.getId());
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.addLifecycleListener' request.");
               }
          }

          /**
             @method
             Whether the application is in background or not

             @return {boolean} true if the application is in background;false otherwise
             @since ARP1.0
          */
          isBackground() : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("ILifecycle","isBackground",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'LifecycleBridge.isBackground' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'LifecycleBridge.isBackground' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.isBackground' request.");
               }
               return response;
          }

          /**
             @method
             Un-registers an existing listener from receiving lifecycle events.

             @param {Adaptive.LifecycleListener} listener listener Lifecycle listener
             @since ARP1.0
          */
          removeLifecycleListener(listener : ILifecycleListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("ILifecycle","removeLifecycleListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove listener reference from local dictionary.
                              registeredLifecycleListener.remove(""+listener.getId());
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'LifecycleBridge.removeLifecycleListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'LifecycleBridge.removeLifecycleListener' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.removeLifecycleListener' request.");
               }
          }

          /**
             @method
             Removes all existing listeners from receiving lifecycle events.

             @since ARP1.0
          */
          removeLifecycleListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("ILifecycle","removeLifecycleListeners",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove all listeners references from local dictionary.
                              var keys = registeredLifecycleListener.keys();
                              for (var key in keys) {
                                   registeredLifecycleListener.remove(key);
                              }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'LifecycleBridge.removeLifecycleListeners' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'LifecycleBridge.removeLifecycleListeners' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LifecycleBridge.removeLifecycleListeners' request.");
               }
          }
     }

     /**
        @class Adaptive.ManagementBridge
        @extends Adaptive.BaseApplicationBridge
        Interface for Managing the Management operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class ManagementBridge extends BaseApplicationBridge implements IManagement {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.PrintingBridge
        @extends Adaptive.BaseApplicationBridge
        Interface for Managing the Printing operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class PrintingBridge extends BaseApplicationBridge implements IPrinting {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.SettingsBridge
        @extends Adaptive.BaseApplicationBridge
        Interface for Managing the Settings operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class SettingsBridge extends BaseApplicationBridge implements ISettings {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.UpdateBridge
        @extends Adaptive.BaseApplicationBridge
        Interface for Managing the Update operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class UpdateBridge extends BaseApplicationBridge implements IUpdate {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.AdsBridge
        @extends Adaptive.BaseCommerceBridge
        Interface for Advertising purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AdsBridge extends BaseCommerceBridge implements IAds {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.StoreBridge
        @extends Adaptive.BaseCommerceBridge
        Interface for Managing the Store operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class StoreBridge extends BaseCommerceBridge implements IStore {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.WalletBridge
        @extends Adaptive.BaseCommerceBridge
        Interface for Managing the Wallet operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class WalletBridge extends BaseCommerceBridge implements IWallet {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.BluetoothBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Bluetooth purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BluetoothBridge extends BaseCommunicationBridge implements IBluetooth {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.NetworkInfoBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Network information operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class NetworkInfoBridge extends BaseCommunicationBridge implements INetworkInfo {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.NetworkNamingBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Network naming operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class NetworkNamingBridge extends BaseCommunicationBridge implements INetworkNaming {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.NetworkReachabilityBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Network reachability operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class NetworkReachabilityBridge extends BaseCommunicationBridge implements INetworkReachability {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Whether there is connectivity to a host, via domain name or ip address, or not.

             @param {string} host host     domain name or ip address of host.
             @param {Adaptive.NetworkReachabilityCallback} callback callback Callback called at the end.
             @since ARP1.0
          */
          isNetworkReachable(host : string, callback : INetworkReachabilityCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(host));
               var apiRequest : APIRequest = new APIRequest("INetworkReachability","isNetworkReachable",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredNetworkReachabilityCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredNetworkReachabilityCallback.remove(""+callback.getId());
                              callback.onError(INetworkReachabilityCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'NetworkReachabilityBridge.isNetworkReachable' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredNetworkReachabilityCallback.remove(""+callback.getId());
                         callback.onError(INetworkReachabilityCallbackError.Unknown)
                         console.error("ERROR: 'NetworkReachabilityBridge.isNetworkReachable' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredNetworkReachabilityCallback.remove(""+callback.getId());
                    callback.onError(INetworkReachabilityCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'NetworkReachabilityBridge.isNetworkReachable' request.");
               }
          }

          /**
             @method
             Whether there is connectivity to an url of a service or not.

             @param {string} url url      to look for
             @param {Adaptive.NetworkReachabilityCallback} callback callback Callback called at the end
             @since ARP1.0
          */
          isNetworkServiceReachable(url : string, callback : INetworkReachabilityCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               var apiRequest : APIRequest = new APIRequest("INetworkReachability","isNetworkServiceReachable",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredNetworkReachabilityCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredNetworkReachabilityCallback.remove(""+callback.getId());
                              callback.onError(INetworkReachabilityCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'NetworkReachabilityBridge.isNetworkServiceReachable' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredNetworkReachabilityCallback.remove(""+callback.getId());
                         callback.onError(INetworkReachabilityCallbackError.Unknown)
                         console.error("ERROR: 'NetworkReachabilityBridge.isNetworkServiceReachable' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredNetworkReachabilityCallback.remove(""+callback.getId());
                    callback.onError(INetworkReachabilityCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'NetworkReachabilityBridge.isNetworkServiceReachable' request.");
               }
          }
     }

     /**
        @class Adaptive.NetworkStatusBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Network status

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class NetworkStatusBridge extends BaseCommunicationBridge implements INetworkStatus {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Add the listener for network status changes of the app

             @param {Adaptive.NetworkStatusListener} listener listener Listener with the result
             @since ARP1.0
          */
          addNetworkStatusListener(listener : INetworkStatusListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("INetworkStatus","addNetworkStatusListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add listener reference to local dictionary.
               registeredNetworkStatusListener.add(""+listener.getId(), listener);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove listener reference from local dictionary due to invalid response.
                              registeredNetworkStatusListener.remove(""+listener.getId());
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'NetworkStatusBridge.addNetworkStatusListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove listener reference from local dictionary due to invalid response.
                         registeredNetworkStatusListener.remove(""+listener.getId());
                         console.error("ERROR: 'NetworkStatusBridge.addNetworkStatusListener' incorrect response received.");
                    }
               } else {
                    // Remove listener reference from local dictionary due to invalid response.
                    registeredNetworkStatusListener.remove(""+listener.getId());
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.addNetworkStatusListener' request.");
               }
          }

          /**
             @method
             Un-registers an existing listener from receiving network status events.

             @param {Adaptive.NetworkStatusListener} listener listener Listener with the result
             @since ARP1.0
          */
          removeNetworkStatusListener(listener : INetworkStatusListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("INetworkStatus","removeNetworkStatusListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove listener reference from local dictionary.
                              registeredNetworkStatusListener.remove(""+listener.getId());
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'NetworkStatusBridge.removeNetworkStatusListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'NetworkStatusBridge.removeNetworkStatusListener' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.removeNetworkStatusListener' request.");
               }
          }

          /**
             @method
             Removes all existing listeners from receiving network status events.

             @since ARP1.0
          */
          removeNetworkStatusListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("INetworkStatus","removeNetworkStatusListeners",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove all listeners references from local dictionary.
                              var keys = registeredNetworkStatusListener.keys();
                              for (var key in keys) {
                                   registeredNetworkStatusListener.remove(key);
                              }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'NetworkStatusBridge.removeNetworkStatusListeners' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'NetworkStatusBridge.removeNetworkStatusListeners' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'NetworkStatusBridge.removeNetworkStatusListeners' request.");
               }
          }
     }

     /**
        @class Adaptive.ServiceBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Services operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class ServiceBridge extends BaseCommunicationBridge implements IService {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Get a reference to a registered service by name.

             @param {string} serviceName serviceName Name of service.
             @return {Adaptive.Service} A service, if registered, or null of the service does not exist.
             @since ARP1.0
          */
          getService(serviceName : string) : Service {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceName));
               var apiRequest : APIRequest = new APIRequest("IService","getService",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : Service = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = Service.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ServiceBridge.getService' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'ServiceBridge.getService' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.getService' request.");
               }
               return response;
          }

          /**
             @method
             Request async a service for an Url

             @param {Adaptive.ServiceRequest} serviceRequest serviceRequest Service Request to invoke
             @param {Adaptive.Service} service serviceRequest Service Request to invoke
             @param {Adaptive.ServiceResultCallback} callback callback       Callback to execute with the result
             @since ARP1.0
          */
          invokeService(serviceRequest : ServiceRequest, service : Service, callback : IServiceResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceRequest));
               arParams.push(JSON.stringify(service));
               var apiRequest : APIRequest = new APIRequest("IService","invokeService",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredServiceResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredServiceResultCallback.remove(""+callback.getId());
                              callback.onError(IServiceResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ServiceBridge.invokeService' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredServiceResultCallback.remove(""+callback.getId());
                         callback.onError(IServiceResultCallbackError.Unknown)
                         console.error("ERROR: 'ServiceBridge.invokeService' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredServiceResultCallback.remove(""+callback.getId());
                    callback.onError(IServiceResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.invokeService' request.");
               }
          }

          /**
             @method
             Register a new service

             @param {Adaptive.Service} service service to register
             @since ARP1.0
          */
          registerService(service : Service) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var apiRequest : APIRequest = new APIRequest("IService","registerService",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.registerService' request.");
               }
          }

          /**
             @method
             Unregister a service

             @param {Adaptive.Service} service service to unregister
             @since ARP1.0
          */
          unregisterService(service : Service) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var apiRequest : APIRequest = new APIRequest("IService","unregisterService",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.unregisterService' request.");
               }
          }

          /**
             @method
             Unregister all services.

             @since ARP1.0
          */
          unregisterServices() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IService","unregisterServices",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.unregisterServices' request.");
               }
          }

          /**
             Check whether a service by the given service is already registered.

             @param service Service to check
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_service(service : Service) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(service));
               var apiRequest : APIRequest = new APIRequest("IService","isRegistered_service",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ServiceBridge.isRegistered_service' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'ServiceBridge.isRegistered_service' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.isRegistered_service' request.");
               }
               return response;
          }

          /**
             Check whether a service by the given name is registered.

             @param serviceName Name of service.
             @return True if the service is registered, false otherwise.
             @since ARP1.0
          */
          isRegistered_serviceName(serviceName : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(serviceName));
               var apiRequest : APIRequest = new APIRequest("IService","isRegistered_serviceName",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ServiceBridge.isRegistered_serviceName' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'ServiceBridge.isRegistered_serviceName' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ServiceBridge.isRegistered_serviceName' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.SocketBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Socket operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class SocketBridge extends BaseCommunicationBridge implements ISocket {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.TelephonyBridge
        @extends Adaptive.BaseCommunicationBridge
        Interface for Managing the Telephony operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class TelephonyBridge extends BaseCommunicationBridge implements ITelephony {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Invoke a phone call

             @param {string} number number to call
             @return {Adaptive.ITelephonyStatus} Status of the call
             @since ARP1.0
          */
          call(number : string) : ITelephonyStatus {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(number));
               var apiRequest : APIRequest = new APIRequest("ITelephony","call",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : ITelephonyStatus = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = ITelephonyStatus.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'TelephonyBridge.call' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'TelephonyBridge.call' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'TelephonyBridge.call' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.CloudBridge
        @extends Adaptive.BaseDataBridge
        Interface for Managing the Cloud operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class CloudBridge extends BaseDataBridge implements ICloud {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.DataStreamBridge
        @extends Adaptive.BaseDataBridge
        Interface for Managing the DataStream operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class DataStreamBridge extends BaseDataBridge implements IDataStream {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.DatabaseBridge
        @extends Adaptive.BaseDataBridge
        Interface for Managing the Cloud operations

        @author Ferran Vila Conesa
        @since ARP1.0
     */
     export class DatabaseBridge extends BaseDataBridge implements IDatabase {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Creates a database on default path for every platform.

             @param {Adaptive.Database} database database Database object to create
             @param {Adaptive.DatabaseResultCallback} callback callback Asynchronous callback
             @since ARP1.0
          */
          createDatabase(database : Database, callback : IDatabaseResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               var apiRequest : APIRequest = new APIRequest("IDatabase","createDatabase",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredDatabaseResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredDatabaseResultCallback.remove(""+callback.getId());
                              callback.onError(IDatabaseResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DatabaseBridge.createDatabase' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredDatabaseResultCallback.remove(""+callback.getId());
                         callback.onError(IDatabaseResultCallbackError.Unknown)
                         console.error("ERROR: 'DatabaseBridge.createDatabase' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.createDatabase' request.");
               }
          }

          /**
             @method
             Creates a databaseTable inside a database for every platform.

             @param {Adaptive.Database} database database      Database for databaseTable creating.
             @param {Adaptive.DatabaseTable} databaseTable databaseTable DatabaseTable object with the name of the databaseTable inside.
             @param {Adaptive.DatabaseTableResultCallback} callback callback      DatabaseTable callback with the response
             @since ARP1.0
          */
          createTable(database : Database, databaseTable : DatabaseTable, callback : IDatabaseTableResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(databaseTable));
               var apiRequest : APIRequest = new APIRequest("IDatabase","createTable",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredDatabaseTableResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredDatabaseTableResultCallback.remove(""+callback.getId());
                              callback.onError(IDatabaseTableResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DatabaseBridge.createTable' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredDatabaseTableResultCallback.remove(""+callback.getId());
                         callback.onError(IDatabaseTableResultCallbackError.Unknown)
                         console.error("ERROR: 'DatabaseBridge.createTable' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseTableResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.createTable' request.");
               }
          }

          /**
             @method
             Deletes a database on default path for every platform.

             @param {Adaptive.Database} database database Database object to delete
             @param {Adaptive.DatabaseResultCallback} callback callback Asynchronous callback
             @since ARP1.0
          */
          deleteDatabase(database : Database, callback : IDatabaseResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               var apiRequest : APIRequest = new APIRequest("IDatabase","deleteDatabase",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredDatabaseResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredDatabaseResultCallback.remove(""+callback.getId());
                              callback.onError(IDatabaseResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DatabaseBridge.deleteDatabase' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredDatabaseResultCallback.remove(""+callback.getId());
                         callback.onError(IDatabaseResultCallbackError.Unknown)
                         console.error("ERROR: 'DatabaseBridge.deleteDatabase' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.deleteDatabase' request.");
               }
          }

          /**
             @method
             Deletes a databaseTable inside a database for every platform.

             @param {Adaptive.Database} database database      Database for databaseTable removal.
             @param {Adaptive.DatabaseTable} databaseTable databaseTable DatabaseTable object with the name of the databaseTable inside.
             @param {Adaptive.DatabaseTableResultCallback} callback callback      DatabaseTable callback with the response
             @since ARP1.0
          */
          deleteTable(database : Database, databaseTable : DatabaseTable, callback : IDatabaseTableResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(databaseTable));
               var apiRequest : APIRequest = new APIRequest("IDatabase","deleteTable",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredDatabaseTableResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredDatabaseTableResultCallback.remove(""+callback.getId());
                              callback.onError(IDatabaseTableResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DatabaseBridge.deleteTable' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredDatabaseTableResultCallback.remove(""+callback.getId());
                         callback.onError(IDatabaseTableResultCallbackError.Unknown)
                         console.error("ERROR: 'DatabaseBridge.deleteTable' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseTableResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.deleteTable' request.");
               }
          }

          /**
             @method
             Executes SQL statement into the given database. The replacements
should be passed as a parameter

             @param {Adaptive.Database} database database     The database object reference.
             @param {string} statement statement    SQL statement.
             @param {string[]} replacements replacements List of SQL statement replacements.
             @param {Adaptive.DatabaseTableResultCallback} callback callback     DatabaseTable callback with the response.
             @since ARP1.0
          */
          executeSqlStatement(database : Database, statement : string, replacements : Array<string>, callback : IDatabaseTableResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(statement));
               arParams.push(JSON.stringify(replacements));
               var apiRequest : APIRequest = new APIRequest("IDatabase","executeSqlStatement",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredDatabaseTableResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredDatabaseTableResultCallback.remove(""+callback.getId());
                              callback.onError(IDatabaseTableResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DatabaseBridge.executeSqlStatement' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredDatabaseTableResultCallback.remove(""+callback.getId());
                         callback.onError(IDatabaseTableResultCallbackError.Unknown)
                         console.error("ERROR: 'DatabaseBridge.executeSqlStatement' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseTableResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.executeSqlStatement' request.");
               }
          }

          /**
             @method
             Executes SQL transaction (some statements chain) inside given database.

             @param {Adaptive.Database} database database     The database object reference.
             @param {string[]} statements statements   The statements to be executed during transaction.
             @param {boolean} rollbackFlag rollbackFlag Indicates if rollback should be performed when any
                    statement execution fails.
             @param {Adaptive.DatabaseTableResultCallback} callback callback     DatabaseTable callback with the response.
             @since ARP1.0
          */
          executeSqlTransactions(database : Database, statements : Array<string>, rollbackFlag : boolean, callback : IDatabaseTableResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(statements));
               arParams.push(JSON.stringify(rollbackFlag));
               var apiRequest : APIRequest = new APIRequest("IDatabase","executeSqlTransactions",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredDatabaseTableResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredDatabaseTableResultCallback.remove(""+callback.getId());
                              callback.onError(IDatabaseTableResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DatabaseBridge.executeSqlTransactions' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredDatabaseTableResultCallback.remove(""+callback.getId());
                         callback.onError(IDatabaseTableResultCallbackError.Unknown)
                         console.error("ERROR: 'DatabaseBridge.executeSqlTransactions' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredDatabaseTableResultCallback.remove(""+callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.executeSqlTransactions' request.");
               }
          }

          /**
             @method
             Checks if database exists by given database name.

             @param {Adaptive.Database} database database Database Object to check if exists
             @return {boolean} True if exists, false otherwise
             @since ARP1.0
          */
          existsDatabase(database : Database) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               var apiRequest : APIRequest = new APIRequest("IDatabase","existsDatabase",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DatabaseBridge.existsDatabase' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'DatabaseBridge.existsDatabase' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.existsDatabase' request.");
               }
               return response;
          }

          /**
             @method
             Checks if databaseTable exists by given database name.

             @param {Adaptive.Database} database database      Database for databaseTable consulting.
             @param {Adaptive.DatabaseTable} databaseTable databaseTable DatabaseTable object with the name of the databaseTable inside.
             @return {boolean} True if exists, false otherwise
             @since ARP1.0
          */
          existsTable(database : Database, databaseTable : DatabaseTable) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(database));
               arParams.push(JSON.stringify(databaseTable));
               var apiRequest : APIRequest = new APIRequest("IDatabase","existsTable",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DatabaseBridge.existsTable' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'DatabaseBridge.existsTable' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DatabaseBridge.existsTable' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.FileBridge
        @extends Adaptive.BaseDataBridge
        Interface for Managing the File operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class FileBridge extends BaseDataBridge implements IFile {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Determine whether the current file/folder can be read from.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @return {boolean} True if the folder/file is readable, false otherwise.
             @since ARP1.0
          */
          canRead(descriptor : FileDescriptor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","canRead",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.canRead' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.canRead' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.canRead' request.");
               }
               return response;
          }

          /**
             @method
             Determine whether the current file/folder can be written to.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @return {boolean} True if the folder/file is writable, false otherwise.
             @since ARP1.0
          */
          canWrite(descriptor : FileDescriptor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","canWrite",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.canWrite' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.canWrite' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.canWrite' request.");
               }
               return response;
          }

          /**
             @method
             Creates a file with the specified name.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @param {Adaptive.FileResultCallback} callback callback   Result of the operation.
             @since ARP1.0
          */
          create(descriptor : FileDescriptor, callback : IFileResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","create",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredFileResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredFileResultCallback.remove(""+callback.getId());
                              callback.onError(IFileResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.create' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredFileResultCallback.remove(""+callback.getId());
                         callback.onError(IFileResultCallbackError.Unknown)
                         console.error("ERROR: 'FileBridge.create' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileResultCallback.remove(""+callback.getId());
                    callback.onError(IFileResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.create' request.");
               }
          }

          /**
             @method
             Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @param {boolean} cascade cascade    Whether to delete sub-files and sub-folders.
             @return {boolean} True if files (and sub-files and folders) whether deleted.
             @since ARP1.0
          */
          delete(descriptor : FileDescriptor, cascade : boolean) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               arParams.push(JSON.stringify(cascade));
               var apiRequest : APIRequest = new APIRequest("IFile","delete",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.delete' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.delete' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.delete' request.");
               }
               return response;
          }

          /**
             @method
             Check whether the file/path exists.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @return {boolean} True if the file exists in the filesystem, false otherwise.
             @since ARP1.0
          */
          exists(descriptor : FileDescriptor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","exists",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.exists' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.exists' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.exists' request.");
               }
               return response;
          }

          /**
             @method
             Loads the content of the file.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @param {Adaptive.FileDataLoadResultCallback} callback callback   Result of the operation.
             @since ARP1.0
          */
          getContent(descriptor : FileDescriptor, callback : IFileDataLoadResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","getContent",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredFileDataLoadResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredFileDataLoadResultCallback.remove(""+callback.getId());
                              callback.onError(IFileDataLoadResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.getContent' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredFileDataLoadResultCallback.remove(""+callback.getId());
                         callback.onError(IFileDataLoadResultCallbackError.Unknown)
                         console.error("ERROR: 'FileBridge.getContent' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileDataLoadResultCallback.remove(""+callback.getId());
                    callback.onError(IFileDataLoadResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.getContent' request.");
               }
          }

          /**
             @method
             Returns the file storage type of the file

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @return {Adaptive.IFileSystemStorageType} Storage Type file
             @since ARP1.0
          */
          getFileStorageType(descriptor : FileDescriptor) : IFileSystemStorageType {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","getFileStorageType",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : IFileSystemStorageType = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = IFileSystemStorageType.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.getFileStorageType' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.getFileStorageType' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.getFileStorageType' request.");
               }
               return response;
          }

          /**
             @method
             Returns the file type

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @return {Adaptive.IFileSystemType} Returns the file type of the file
             @since ARP1.0
          */
          getFileType(descriptor : FileDescriptor) : IFileSystemType {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","getFileType",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : IFileSystemType = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = IFileSystemType.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.getFileType' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.getFileType' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.getFileType' request.");
               }
               return response;
          }

          /**
             @method
             Returns the security type of the file

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @return {Adaptive.IFileSystemSecurity} Security Level of the file
             @since ARP1.0
          */
          getSecurityType(descriptor : FileDescriptor) : IFileSystemSecurity {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","getSecurityType",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : IFileSystemSecurity = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = IFileSystemSecurity.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.getSecurityType' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.getSecurityType' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.getSecurityType' request.");
               }
               return response;
          }

          /**
             @method
             Check whether this is a path of a file.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @return {boolean} true if this is a path to a folder/directory, false if this is a path to a file.
             @since ARP1.0
          */
          isDirectory(descriptor : FileDescriptor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","isDirectory",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.isDirectory' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.isDirectory' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.isDirectory' request.");
               }
               return response;
          }

          /**
             @method
             List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @param {Adaptive.FileListResultCallback} callback callback   Result of operation.
             @since ARP1.0
          */
          listFiles(descriptor : FileDescriptor, callback : IFileListResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               var apiRequest : APIRequest = new APIRequest("IFile","listFiles",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredFileListResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredFileListResultCallback.remove(""+callback.getId());
                              callback.onError(IFileListResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.listFiles' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredFileListResultCallback.remove(""+callback.getId());
                         callback.onError(IFileListResultCallbackError.Unknown)
                         console.error("ERROR: 'FileBridge.listFiles' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileListResultCallback.remove(""+callback.getId());
                    callback.onError(IFileListResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.listFiles' request.");
               }
          }

          /**
             @method
             List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @param {string} regex regex      Filter (eg. *.jpg, *.png, Fil*) name string.
             @param {Adaptive.FileListResultCallback} callback callback   Result of operation.
             @since ARP1.0
          */
          listFilesForRegex(descriptor : FileDescriptor, regex : string, callback : IFileListResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               arParams.push(JSON.stringify(regex));
               var apiRequest : APIRequest = new APIRequest("IFile","listFilesForRegex",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredFileListResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredFileListResultCallback.remove(""+callback.getId());
                              callback.onError(IFileListResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.listFilesForRegex' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredFileListResultCallback.remove(""+callback.getId());
                         callback.onError(IFileListResultCallbackError.Unknown)
                         console.error("ERROR: 'FileBridge.listFilesForRegex' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileListResultCallback.remove(""+callback.getId());
                    callback.onError(IFileListResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.listFilesForRegex' request.");
               }
          }

          /**
             @method
             Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @param {boolean} recursive recursive  Whether to create all parent path elements.
             @return {boolean} True if the path was created, false otherwise (or it exists already).
             @since ARP1.0
          */
          mkDir(descriptor : FileDescriptor, recursive : boolean) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               arParams.push(JSON.stringify(recursive));
               var apiRequest : APIRequest = new APIRequest("IFile","mkDir",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.mkDir' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileBridge.mkDir' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.mkDir' request.");
               }
               return response;
          }

          /**
             @method
             Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.

             @param {Adaptive.FileDescriptor} source source      File descriptor of file or folder used for operation as source.
             @param {Adaptive.FileDescriptor} destination destination File descriptor of file or folder used for operation as destination.
             @param {boolean} createPath createPath  True to create the path if it does not already exist.
             @param {boolean} overwrite overwrite   True to create the path if it does not already exist.
             @param {Adaptive.FileResultCallback} callback callback    Result of the operation.
             @since ARP1.0
          */
          move(source : FileDescriptor, destination : FileDescriptor, createPath : boolean, overwrite : boolean, callback : IFileResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(source));
               arParams.push(JSON.stringify(destination));
               arParams.push(JSON.stringify(createPath));
               arParams.push(JSON.stringify(overwrite));
               var apiRequest : APIRequest = new APIRequest("IFile","move",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredFileResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredFileResultCallback.remove(""+callback.getId());
                              callback.onError(IFileResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.move' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredFileResultCallback.remove(""+callback.getId());
                         callback.onError(IFileResultCallbackError.Unknown)
                         console.error("ERROR: 'FileBridge.move' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileResultCallback.remove(""+callback.getId());
                    callback.onError(IFileResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.move' request.");
               }
          }

          /**
             @method
             Sets the content of the file.

             @param {Adaptive.FileDescriptor} descriptor descriptor File descriptor of file or folder used for operation.
             @param {number[]} content content    Binary content to store in the file.
             @param {Adaptive.FileDataStoreResultCallback} callback callback   Result of the operation.
             @since ARP1.0
          */
          setContent(descriptor : FileDescriptor, content : Array<number>, callback : IFileDataStoreResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(descriptor));
               arParams.push(JSON.stringify(content));
               var apiRequest : APIRequest = new APIRequest("IFile","setContent",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredFileDataStoreResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredFileDataStoreResultCallback.remove(""+callback.getId());
                              callback.onError(IFileDataStoreResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileBridge.setContent' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredFileDataStoreResultCallback.remove(""+callback.getId());
                         callback.onError(IFileDataStoreResultCallbackError.Unknown)
                         console.error("ERROR: 'FileBridge.setContent' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredFileDataStoreResultCallback.remove(""+callback.getId());
                    callback.onError(IFileDataStoreResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'FileBridge.setContent' request.");
               }
          }
     }

     /**
        @class Adaptive.FileSystemBridge
        @extends Adaptive.BaseDataBridge
        Interface for Managing the File System operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class FileSystemBridge extends BaseDataBridge implements IFileSystem {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.

             @param {Adaptive.FileDescriptor} parent parent Parent directory.
             @param {string} name name   Name of new file or directory.
             @return {Adaptive.FileDescriptor} A reference to a new or existing location in the filesystem.
             @since ARP1.0
          */
          createFileDescriptor(parent : FileDescriptor, name : string) : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(parent));
               arParams.push(JSON.stringify(name));
               var apiRequest : APIRequest = new APIRequest("IFileSystem","createFileDescriptor",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileSystemBridge.createFileDescriptor' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileSystemBridge.createFileDescriptor' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.createFileDescriptor' request.");
               }
               return response;
          }

          /**
             @method
             Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.

             @return {Adaptive.FileDescriptor} Path to the application's cache folder.
             @since ARP1.0
          */
          getApplicationCacheFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IFileSystem","getApplicationCacheFolder",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileSystemBridge.getApplicationCacheFolder' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationCacheFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationCacheFolder' request.");
               }
               return response;
          }

          /**
             @method
             Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.

             @return {Adaptive.FileDescriptor} Path to the application's cloud storage folder.
             @since ARP1.0
          */
          getApplicationCloudFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IFileSystem","getApplicationCloudFolder",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileSystemBridge.getApplicationCloudFolder' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationCloudFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationCloudFolder' request.");
               }
               return response;
          }

          /**
             @method
             Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.

             @return {Adaptive.FileDescriptor} Path to the application's documents folder.
             @since ARP1.0
          */
          getApplicationDocumentsFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IFileSystem","getApplicationDocumentsFolder",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileSystemBridge.getApplicationDocumentsFolder' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationDocumentsFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationDocumentsFolder' request.");
               }
               return response;
          }

          /**
             @method
             Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.

             @return {Adaptive.FileDescriptor} Path to the application folder.
             @since ARP1.0
          */
          getApplicationFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IFileSystem","getApplicationFolder",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileSystemBridge.getApplicationFolder' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationFolder' request.");
               }
               return response;
          }

          /**
             @method
             Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.

             @return {Adaptive.FileDescriptor} Path to the application's protected storage folder.
             @since ARP1.0
          */
          getApplicationProtectedFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IFileSystem","getApplicationProtectedFolder",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileSystemBridge.getApplicationProtectedFolder' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getApplicationProtectedFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getApplicationProtectedFolder' request.");
               }
               return response;
          }

          /**
             @method
             Returns the file system dependent file separator.

             @return {string} char with the directory/file separator.
             @since ARP1.0
          */
          getSeparator() : string {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IFileSystem","getSeparator",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : string = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileSystemBridge.getSeparator' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getSeparator' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getSeparator' request.");
               }
               return response;
          }

          /**
             @method
             Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.

             @return {Adaptive.FileDescriptor} Path to the application's documents folder.
             @since ARP1.0
          */
          getSystemExternalFolder() : FileDescriptor {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IFileSystem","getSystemExternalFolder",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : FileDescriptor = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'FileSystemBridge.getSystemExternalFolder' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'FileSystemBridge.getSystemExternalFolder' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'FileSystemBridge.getSystemExternalFolder' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.InternalStorageBridge
        @extends Adaptive.BaseDataBridge
        Interface for Managing the Internal Storage operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class InternalStorageBridge extends BaseDataBridge implements IInternalStorage {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.XMLBridge
        @extends Adaptive.BaseDataBridge
        Interface for Managing the XML operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class XMLBridge extends BaseDataBridge implements IXML {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.AudioBridge
        @extends Adaptive.BaseMediaBridge
        Interface for Audio purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AudioBridge extends BaseMediaBridge implements IAudio {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.CameraBridge
        @extends Adaptive.BaseMediaBridge
        Interface for Managing the camera operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class CameraBridge extends BaseMediaBridge implements ICamera {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.ImagingBridge
        @extends Adaptive.BaseMediaBridge
        Interface for Managing the Imaging operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class ImagingBridge extends BaseMediaBridge implements IImaging {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.VideoBridge
        @extends Adaptive.BaseMediaBridge
        Interface for Managing the Video operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class VideoBridge extends BaseMediaBridge implements IVideo {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Play url video stream

             @param {string} url url of the video
             @since ARP1.0
          */
          playStream(url : string) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               var apiRequest : APIRequest = new APIRequest("IVideo","playStream",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'VideoBridge.playStream' request.");
               }
          }
     }

     /**
        @class Adaptive.AlarmBridge
        @extends Adaptive.BaseNotificationBridge
        Interface for Alarm purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AlarmBridge extends BaseNotificationBridge implements IAlarm {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.NotificationBridge
        @extends Adaptive.BaseNotificationBridge
        Interface for Managing the Notification operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class NotificationBridge extends BaseNotificationBridge implements INotification {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.NotificationLocalBridge
        @extends Adaptive.BaseNotificationBridge
        Interface for Managing the Local Notifications operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class NotificationLocalBridge extends BaseNotificationBridge implements INotificationLocal {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.VibrationBridge
        @extends Adaptive.BaseNotificationBridge
        Interface for Managing the Vibration operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class VibrationBridge extends BaseNotificationBridge implements IVibration {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.CalendarBridge
        @extends Adaptive.BasePIMBridge
        Interface for Managing the Calendar operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class CalendarBridge extends BasePIMBridge implements ICalendar {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.ContactBridge
        @extends Adaptive.BasePIMBridge
        Interface for Managing the Contact operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class ContactBridge extends BasePIMBridge implements IContact {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Get all the details of a contact according to its id

             @param {Adaptive.ContactUid} contact contact  id to search for
             @param {Adaptive.ContactResultCallback} callback callback called for return
             @since ARP1.0
          */
          getContact(contact : ContactUid, callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               var apiRequest : APIRequest = new APIRequest("IContact","getContact",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredContactResultCallback.remove(""+callback.getId());
                              callback.onError(IContactResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ContactBridge.getContact' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredContactResultCallback.remove(""+callback.getId());
                         callback.onError(IContactResultCallbackError.Unknown)
                         console.error("ERROR: 'ContactBridge.getContact' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContact' request.");
               }
          }

          /**
             @method
             Get the contact photo

             @param {Adaptive.ContactUid} contact contact  id to search for
             @param {Adaptive.ContactPhotoResultCallback} callback callback called for return
             @since ARP1.0
          */
          getContactPhoto(contact : ContactUid, callback : IContactPhotoResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               var apiRequest : APIRequest = new APIRequest("IContact","getContactPhoto",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredContactPhotoResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredContactPhotoResultCallback.remove(""+callback.getId());
                              callback.onError(IContactPhotoResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ContactBridge.getContactPhoto' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredContactPhotoResultCallback.remove(""+callback.getId());
                         callback.onError(IContactPhotoResultCallbackError.Unknown)
                         console.error("ERROR: 'ContactBridge.getContactPhoto' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactPhotoResultCallback.remove(""+callback.getId());
                    callback.onError(IContactPhotoResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactPhoto' request.");
               }
          }

          /**
             @method
             Get all contacts

             @param {Adaptive.ContactResultCallback} callback callback called for return
             @since ARP1.0
          */
          getContacts(callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IContact","getContacts",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredContactResultCallback.remove(""+callback.getId());
                              callback.onError(IContactResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ContactBridge.getContacts' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredContactResultCallback.remove(""+callback.getId());
                         callback.onError(IContactResultCallbackError.Unknown)
                         console.error("ERROR: 'ContactBridge.getContacts' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContacts' request.");
               }
          }

          /**
             @method
             Get marked fields of all contacts

             @param {Adaptive.ContactResultCallback} callback callback called for return
             @param {Adaptive.IContactFieldGroup[]} fields fields   to get for each Contact
             @since ARP1.0
          */
          getContactsForFields(callback : IContactResultCallback, fields : Array<IContactFieldGroup>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(fields));
               var apiRequest : APIRequest = new APIRequest("IContact","getContactsForFields",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredContactResultCallback.remove(""+callback.getId());
                              callback.onError(IContactResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ContactBridge.getContactsForFields' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredContactResultCallback.remove(""+callback.getId());
                         callback.onError(IContactResultCallbackError.Unknown)
                         console.error("ERROR: 'ContactBridge.getContactsForFields' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactsForFields' request.");
               }
          }

          /**
             @method
             Get marked fields of all contacts according to a filter

             @param {Adaptive.ContactResultCallback} callback callback called for return
             @param {Adaptive.IContactFieldGroup[]} fields fields   to get for each Contact
             @param {Adaptive.IContactFilter[]} filter filter   to search for
             @since ARP1.0
          */
          getContactsWithFilter(callback : IContactResultCallback, fields : Array<IContactFieldGroup>, filter : Array<IContactFilter>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(fields));
               arParams.push(JSON.stringify(filter));
               var apiRequest : APIRequest = new APIRequest("IContact","getContactsWithFilter",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredContactResultCallback.remove(""+callback.getId());
                              callback.onError(IContactResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ContactBridge.getContactsWithFilter' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredContactResultCallback.remove(""+callback.getId());
                         callback.onError(IContactResultCallbackError.Unknown)
                         console.error("ERROR: 'ContactBridge.getContactsWithFilter' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.getContactsWithFilter' request.");
               }
          }

          /**
             @method
             Search contacts according to a term and send it to the callback

             @param {string} term term     string to search
             @param {Adaptive.ContactResultCallback} callback callback called for return
             @since ARP1.0
          */
          searchContacts(term : string, callback : IContactResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(term));
               var apiRequest : APIRequest = new APIRequest("IContact","searchContacts",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredContactResultCallback.remove(""+callback.getId());
                              callback.onError(IContactResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ContactBridge.searchContacts' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredContactResultCallback.remove(""+callback.getId());
                         callback.onError(IContactResultCallbackError.Unknown)
                         console.error("ERROR: 'ContactBridge.searchContacts' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.searchContacts' request.");
               }
          }

          /**
             @method
             Search contacts according to a term with a filter and send it to the callback

             @param {string} term term     string to search
             @param {Adaptive.ContactResultCallback} callback callback called for return
             @param {Adaptive.IContactFilter[]} filter filter   to search for
             @since ARP1.0
          */
          searchContactsWithFilter(term : string, callback : IContactResultCallback, filter : Array<IContactFilter>) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(term));
               arParams.push(JSON.stringify(filter));
               var apiRequest : APIRequest = new APIRequest("IContact","searchContactsWithFilter",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredContactResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredContactResultCallback.remove(""+callback.getId());
                              callback.onError(IContactResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ContactBridge.searchContactsWithFilter' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredContactResultCallback.remove(""+callback.getId());
                         callback.onError(IContactResultCallbackError.Unknown)
                         console.error("ERROR: 'ContactBridge.searchContactsWithFilter' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredContactResultCallback.remove(""+callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.searchContactsWithFilter' request.");
               }
          }

          /**
             @method
             Set the contact photo

             @param {Adaptive.ContactUid} contact contact  id to assign the photo
             @param {number[]} pngImage pngImage photo as byte array
             @return {boolean} true if set is successful;false otherwise
             @since ARP1.0
          */
          setContactPhoto(contact : ContactUid, pngImage : Array<number>) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(contact));
               arParams.push(JSON.stringify(pngImage));
               var apiRequest : APIRequest = new APIRequest("IContact","setContactPhoto",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'ContactBridge.setContactPhoto' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'ContactBridge.setContactPhoto' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'ContactBridge.setContactPhoto' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.MailBridge
        @extends Adaptive.BasePIMBridge
        Interface for Managing the Mail operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class MailBridge extends BasePIMBridge implements IMail {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Send an Email

             @param {Adaptive.Email} data data     Payload of the email
             @param {Adaptive.MessagingCallback} callback callback Result callback of the operation
             @since ARP1.0
          */
          sendEmail(data : Email, callback : IMessagingCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(data));
               var apiRequest : APIRequest = new APIRequest("IMail","sendEmail",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredMessagingCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredMessagingCallback.remove(""+callback.getId());
                              callback.onError(IMessagingCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'MailBridge.sendEmail' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredMessagingCallback.remove(""+callback.getId());
                         callback.onError(IMessagingCallbackError.Unknown)
                         console.error("ERROR: 'MailBridge.sendEmail' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredMessagingCallback.remove(""+callback.getId());
                    callback.onError(IMessagingCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'MailBridge.sendEmail' request.");
               }
          }
     }

     /**
        @class Adaptive.MessagingBridge
        @extends Adaptive.BasePIMBridge
        Interface for Managing the Messaging operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class MessagingBridge extends BasePIMBridge implements IMessaging {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Send text SMS

             @param {string} number number   to send
             @param {string} text text     to send
             @param {Adaptive.MessagingCallback} callback callback with the result
             @since ARP1.0
          */
          sendSMS(number : string, text : string, callback : IMessagingCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(number));
               arParams.push(JSON.stringify(text));
               var apiRequest : APIRequest = new APIRequest("IMessaging","sendSMS",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredMessagingCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredMessagingCallback.remove(""+callback.getId());
                              callback.onError(IMessagingCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'MessagingBridge.sendSMS' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredMessagingCallback.remove(""+callback.getId());
                         callback.onError(IMessagingCallbackError.Unknown)
                         console.error("ERROR: 'MessagingBridge.sendSMS' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredMessagingCallback.remove(""+callback.getId());
                    callback.onError(IMessagingCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'MessagingBridge.sendSMS' request.");
               }
          }
     }

     /**
        @class Adaptive.BarcodeBridge
        @extends Adaptive.BaseReaderBridge
        Interface for Barcode Reading purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BarcodeBridge extends BaseReaderBridge implements IBarcode {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.NFCBridge
        @extends Adaptive.BaseReaderBridge
        Interface for Managing the NFC operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class NFCBridge extends BaseReaderBridge implements INFC {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.OCRBridge
        @extends Adaptive.BaseReaderBridge
        Interface for Managing the OCR operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class OCRBridge extends BaseReaderBridge implements IOCR {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.QRCodeBridge
        @extends Adaptive.BaseReaderBridge
        Interface for Managing the QR Code operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class QRCodeBridge extends BaseReaderBridge implements IQRCode {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.OAuthBridge
        @extends Adaptive.BaseSecurityBridge
        Interface for Managing the OAuth operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class OAuthBridge extends BaseSecurityBridge implements IOAuth {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.OpenIdBridge
        @extends Adaptive.BaseSecurityBridge
        Interface for Managing the OpenID operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class OpenIdBridge extends BaseSecurityBridge implements IOpenId {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.SecurityBridge
        @extends Adaptive.BaseSecurityBridge
        Interface for Managing the Security operations

        @author Aryslan
        @since ARP1.0
     */
     export class SecurityBridge extends BaseSecurityBridge implements ISecurity {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Deletes from the device internal storage the entry/entries containing the specified key names.

             @param {string[]} keys keys             Array with the key names to delete.
             @param {string} publicAccessName publicAccessName The name of the shared internal storage object (if needed).
             @param {Adaptive.SecurityResultCallback} callback callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          deleteSecureKeyValuePairs(keys : Array<string>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keys));
               arParams.push(JSON.stringify(publicAccessName));
               var apiRequest : APIRequest = new APIRequest("ISecurity","deleteSecureKeyValuePairs",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredSecurityResultCallback.remove(""+callback.getId());
                              callback.onError(ISecurityResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'SecurityBridge.deleteSecureKeyValuePairs' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredSecurityResultCallback.remove(""+callback.getId());
                         callback.onError(ISecurityResultCallbackError.Unknown)
                         console.error("ERROR: 'SecurityBridge.deleteSecureKeyValuePairs' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.deleteSecureKeyValuePairs' request.");
               }
          }

          /**
             @method
             Retrieves from the device internal storage the entry/entries containing the specified key names.

             @param {string[]} keys keys             Array with the key names to retrieve.
             @param {string} publicAccessName publicAccessName The name of the shared internal storage object (if needed).
             @param {Adaptive.SecurityResultCallback} callback callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          getSecureKeyValuePairs(keys : Array<string>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keys));
               arParams.push(JSON.stringify(publicAccessName));
               var apiRequest : APIRequest = new APIRequest("ISecurity","getSecureKeyValuePairs",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredSecurityResultCallback.remove(""+callback.getId());
                              callback.onError(ISecurityResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'SecurityBridge.getSecureKeyValuePairs' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredSecurityResultCallback.remove(""+callback.getId());
                         callback.onError(ISecurityResultCallbackError.Unknown)
                         console.error("ERROR: 'SecurityBridge.getSecureKeyValuePairs' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.getSecureKeyValuePairs' request.");
               }
          }

          /**
             @method
             Returns if the device has been modified in anyhow

             @return {boolean} true if the device has been modified; false otherwise
             @since ARP1.0
          */
          isDeviceModified() : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("ISecurity","isDeviceModified",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'SecurityBridge.isDeviceModified' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'SecurityBridge.isDeviceModified' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.isDeviceModified' request.");
               }
               return response;
          }

          /**
             @method
             Stores in the device internal storage the specified item/s.

             @param {Adaptive.SecureKeyPair[]} keyValues keyValues        Array containing the items to store on the device internal memory.
             @param {string} publicAccessName publicAccessName The name of the shared internal storage object (if needed).
             @param {Adaptive.SecurityResultCallback} callback callback         callback to be executed upon function result.
             @since ARP 1.0
          */
          setSecureKeyValuePairs(keyValues : Array<SecureKeyPair>, publicAccessName : string, callback : ISecurityResultCallback) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(keyValues));
               arParams.push(JSON.stringify(publicAccessName));
               var apiRequest : APIRequest = new APIRequest("ISecurity","setSecureKeyValuePairs",arParams, callback.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add callback reference to local dictionary.
               registeredSecurityResultCallback.add(""+callback.getId(), callback);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove callback reference from local dictionary due to invalid response.
                              registeredSecurityResultCallback.remove(""+callback.getId());
                              callback.onError(ISecurityResultCallbackError.Unknown)
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'SecurityBridge.setSecureKeyValuePairs' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove callback reference from local dictionary due to invalid response.
                         registeredSecurityResultCallback.remove(""+callback.getId());
                         callback.onError(ISecurityResultCallbackError.Unknown)
                         console.error("ERROR: 'SecurityBridge.setSecureKeyValuePairs' incorrect response received.");
                    }
               } else {
                    // Unknown error - remove from dictionary and notify callback.
                    registeredSecurityResultCallback.remove(""+callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown)
                    console.error("ERROR: "+xhr.status+" sending 'SecurityBridge.setSecureKeyValuePairs' request.");
               }
          }
     }

     /**
        @class Adaptive.AccelerationBridge
        @extends Adaptive.BaseSensorBridge
        Interface defining methods about the acceleration sensor

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AccelerationBridge extends BaseSensorBridge implements IAcceleration {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Register a new listener that will receive acceleration events.

             @param {Adaptive.AccelerationListener} listener listener to be registered.
             @since ARP1.0
          */
          addAccelerationListener(listener : IAccelerationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IAcceleration","addAccelerationListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add listener reference to local dictionary.
               registeredAccelerationListener.add(""+listener.getId(), listener);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove listener reference from local dictionary due to invalid response.
                              registeredAccelerationListener.remove(""+listener.getId());
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'AccelerationBridge.addAccelerationListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove listener reference from local dictionary due to invalid response.
                         registeredAccelerationListener.remove(""+listener.getId());
                         console.error("ERROR: 'AccelerationBridge.addAccelerationListener' incorrect response received.");
                    }
               } else {
                    // Remove listener reference from local dictionary due to invalid response.
                    registeredAccelerationListener.remove(""+listener.getId());
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.addAccelerationListener' request.");
               }
          }

          /**
             @method
             De-registers an existing listener from receiving acceleration events.

             @param {Adaptive.AccelerationListener} listener listener to be registered.
             @since ARP1.0
          */
          removeAccelerationListener(listener : IAccelerationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IAcceleration","removeAccelerationListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove listener reference from local dictionary.
                              registeredAccelerationListener.remove(""+listener.getId());
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'AccelerationBridge.removeAccelerationListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'AccelerationBridge.removeAccelerationListener' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.removeAccelerationListener' request.");
               }
          }

          /**
             @method
             Removed all existing listeners from receiving acceleration events.

             @since ARP1.0
          */
          removeAccelerationListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IAcceleration","removeAccelerationListeners",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove all listeners references from local dictionary.
                              var keys = registeredAccelerationListener.keys();
                              for (var key in keys) {
                                   registeredAccelerationListener.remove(key);
                              }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'AccelerationBridge.removeAccelerationListeners' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'AccelerationBridge.removeAccelerationListeners' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'AccelerationBridge.removeAccelerationListeners' request.");
               }
          }
     }

     /**
        @class Adaptive.AmbientLightBridge
        @extends Adaptive.BaseSensorBridge
        Interface for managinf the Ambient Light

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AmbientLightBridge extends BaseSensorBridge implements IAmbientLight {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.BarometerBridge
        @extends Adaptive.BaseSensorBridge
        Interface for Barometer management purposes

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class BarometerBridge extends BaseSensorBridge implements IBarometer {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.GeolocationBridge
        @extends Adaptive.BaseSensorBridge
        Interface for Managing the Geolocation operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class GeolocationBridge extends BaseSensorBridge implements IGeolocation {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Register a new listener that will receive geolocation events.

             @param {Adaptive.GeolocationListener} listener listener to be registered.
             @since ARP1.0
          */
          addGeolocationListener(listener : IGeolocationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IGeolocation","addGeolocationListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add listener reference to local dictionary.
               registeredGeolocationListener.add(""+listener.getId(), listener);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove listener reference from local dictionary due to invalid response.
                              registeredGeolocationListener.remove(""+listener.getId());
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GeolocationBridge.addGeolocationListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove listener reference from local dictionary due to invalid response.
                         registeredGeolocationListener.remove(""+listener.getId());
                         console.error("ERROR: 'GeolocationBridge.addGeolocationListener' incorrect response received.");
                    }
               } else {
                    // Remove listener reference from local dictionary due to invalid response.
                    registeredGeolocationListener.remove(""+listener.getId());
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.addGeolocationListener' request.");
               }
          }

          /**
             @method
             De-registers an existing listener from receiving geolocation events.

             @param {Adaptive.GeolocationListener} listener listener to be registered.
             @since ARP1.0
          */
          removeGeolocationListener(listener : IGeolocationListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IGeolocation","removeGeolocationListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove listener reference from local dictionary.
                              registeredGeolocationListener.remove(""+listener.getId());
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GeolocationBridge.removeGeolocationListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'GeolocationBridge.removeGeolocationListener' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.removeGeolocationListener' request.");
               }
          }

          /**
             @method
             Removed all existing listeners from receiving geolocation events.

             @since ARP1.0
          */
          removeGeolocationListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IGeolocation","removeGeolocationListeners",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove all listeners references from local dictionary.
                              var keys = registeredGeolocationListener.keys();
                              for (var key in keys) {
                                   registeredGeolocationListener.remove(key);
                              }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'GeolocationBridge.removeGeolocationListeners' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'GeolocationBridge.removeGeolocationListeners' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'GeolocationBridge.removeGeolocationListeners' request.");
               }
          }
     }

     /**
        @class Adaptive.GyroscopeBridge
        @extends Adaptive.BaseSensorBridge
        Interface for Managing the Giroscope operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class GyroscopeBridge extends BaseSensorBridge implements IGyroscope {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.MagnetometerBridge
        @extends Adaptive.BaseSensorBridge
        Interface for Managing the Magnetometer operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class MagnetometerBridge extends BaseSensorBridge implements IMagnetometer {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.ProximityBridge
        @extends Adaptive.BaseSensorBridge
        Interface for Managing the Proximity operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class ProximityBridge extends BaseSensorBridge implements IProximity {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.FacebookBridge
        @extends Adaptive.BaseSocialBridge
        Interface for Managing the Facebook operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class FacebookBridge extends BaseSocialBridge implements IFacebook {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.GooglePlusBridge
        @extends Adaptive.BaseSocialBridge
        Interface for Managing the Google Plus operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class GooglePlusBridge extends BaseSocialBridge implements IGooglePlus {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.LinkedInBridge
        @extends Adaptive.BaseSocialBridge
        Interface for Managing the Linkedin operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class LinkedInBridge extends BaseSocialBridge implements ILinkedIn {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.RSSBridge
        @extends Adaptive.BaseSocialBridge
        Interface for Managing the RSS operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class RSSBridge extends BaseSocialBridge implements IRSS {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.TwitterBridge
        @extends Adaptive.BaseSocialBridge
        Interface for Managing the Twitter operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class TwitterBridge extends BaseSocialBridge implements ITwitter {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.CapabilitiesBridge
        @extends Adaptive.BaseSystemBridge
        Interface for testing the Capabilities operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class CapabilitiesBridge extends BaseSystemBridge implements ICapabilities {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Determines whether a specific hardware button is supported for interaction.

             @param {Adaptive.ICapabilitiesButton} type type Type of feature to check.
             @return {boolean} true is supported, false otherwise.
             @since ARP1.0
          */
          hasButtonSupport(type : ICapabilitiesButton) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasButtonSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasButtonSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasButtonSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasButtonSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Communication capability is supported by
the device.

             @param {Adaptive.ICapabilitiesCommunication} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasCommunicationSupport(type : ICapabilitiesCommunication) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasCommunicationSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasCommunicationSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasCommunicationSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasCommunicationSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Data capability is supported by the device.

             @param {Adaptive.ICapabilitiesData} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasDataSupport(type : ICapabilitiesData) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasDataSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasDataSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasDataSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasDataSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Media capability is supported by the
device.

             @param {Adaptive.ICapabilitiesMedia} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasMediaSupport(type : ICapabilitiesMedia) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasMediaSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasMediaSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasMediaSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasMediaSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Net capability is supported by the device.

             @param {Adaptive.ICapabilitiesNet} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasNetSupport(type : ICapabilitiesNet) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasNetSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasNetSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasNetSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasNetSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Notification capability is supported by the
device.

             @param {Adaptive.ICapabilitiesNotification} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasNotificationSupport(type : ICapabilitiesNotification) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasNotificationSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasNotificationSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasNotificationSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasNotificationSupport' request.");
               }
               return response;
          }

          /**
             @method
             Determines whether a specific Sensor capability is supported by the
device.

             @param {Adaptive.ICapabilitiesSensor} type type Type of feature to check.
             @return {boolean} true if supported, false otherwise.
             @since ARP1.0
          */
          hasSensorSupport(type : ICapabilitiesSensor) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(type));
               var apiRequest : APIRequest = new APIRequest("ICapabilities","hasSensorSupport",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'CapabilitiesBridge.hasSensorSupport' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'CapabilitiesBridge.hasSensorSupport' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'CapabilitiesBridge.hasSensorSupport' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.DeviceBridge
        @extends Adaptive.BaseSystemBridge
        Interface for Managing the Device operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class DeviceBridge extends BaseSystemBridge implements IDevice {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Register a new listener that will receive button events.

             @param {Adaptive.ButtonListener} listener listener to be registered.
             @since ARP1.0
          */
          addButtonListener(listener : IButtonListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IDevice","addButtonListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               // Add listener reference to local dictionary.
               registeredButtonListener.add(""+listener.getId(), listener);
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         } else {
                              // Remove listener reference from local dictionary due to invalid response.
                              registeredButtonListener.remove(""+listener.getId());
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DeviceBridge.addButtonListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         // Remove listener reference from local dictionary due to invalid response.
                         registeredButtonListener.remove(""+listener.getId());
                         console.error("ERROR: 'DeviceBridge.addButtonListener' incorrect response received.");
                    }
               } else {
                    // Remove listener reference from local dictionary due to invalid response.
                    registeredButtonListener.remove(""+listener.getId());
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.addButtonListener' request.");
               }
          }

          /**
             @method
             Returns the device information for the current device executing the runtime.

             @return {Adaptive.DeviceInfo} DeviceInfo for the current device.
             @since ARP1.0
          */
          getDeviceInfo() : DeviceInfo {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IDevice","getDeviceInfo",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : DeviceInfo = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = DeviceInfo.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DeviceBridge.getDeviceInfo' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'DeviceBridge.getDeviceInfo' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.getDeviceInfo' request.");
               }
               return response;
          }

          /**
             @method
             Gets the current Locale for the device.

             @return {Adaptive.Locale} The current Locale information.
             @since ARP1.0
          */
          getLocaleCurrent() : Locale {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IDevice","getLocaleCurrent",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : Locale = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = Locale.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DeviceBridge.getLocaleCurrent' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'DeviceBridge.getLocaleCurrent' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.getLocaleCurrent' request.");
               }
               return response;
          }

          /**
             @method
             De-registers an existing listener from receiving button events.

             @param {Adaptive.ButtonListener} listener listener to be removed.
             @since ARP1.0
          */
          removeButtonListener(listener : IButtonListener) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IDevice","removeButtonListener",arParams, listener.getId());
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove listener reference from local dictionary.
                              registeredButtonListener.remove(""+listener.getId());
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DeviceBridge.removeButtonListener' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'DeviceBridge.removeButtonListener' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.removeButtonListener' request.");
               }
          }

          /**
             @method
             Removed all existing listeners from receiving button events.

             @since ARP1.0
          */
          removeButtonListeners() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IDevice","removeButtonListeners",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              // Remove all listeners references from local dictionary.
                              var keys = registeredButtonListener.keys();
                              for (var key in keys) {
                                   registeredButtonListener.remove(key);
                              }
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'DeviceBridge.removeButtonListeners' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'DeviceBridge.removeButtonListeners' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'DeviceBridge.removeButtonListeners' request.");
               }
          }
     }

     /**
        @class Adaptive.DisplayBridge
        @extends Adaptive.BaseSystemBridge
        Interface for Managing the Display operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class DisplayBridge extends BaseSystemBridge implements IDisplay {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.OSBridge
        @extends Adaptive.BaseSystemBridge
        Interface for Managing the OS operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class OSBridge extends BaseSystemBridge implements IOS {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Returns the OSInfo for the current operating system.

             @return {Adaptive.OSInfo} OSInfo with name, version and vendor of the OS.
             @since ARP1.0
          */
          getOSInfo() : OSInfo {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IOS","getOSInfo",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : OSInfo = null;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                         response = OSInfo.toObject(JSON.parse(apiResponse.getResponse()));
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'OSBridge.getOSInfo' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'OSBridge.getOSInfo' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'OSBridge.getOSInfo' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.RuntimeBridge
        @extends Adaptive.BaseSystemBridge
        Interface for Managing the Runtime operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class RuntimeBridge extends BaseSystemBridge implements IRuntime {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Dismiss the current Application

             @since ARP1.0
          */
          dismissApplication() : void {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IRuntime","dismissApplication",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'RuntimeBridge.dismissApplication' request.");
               }
          }

          /**
             @method
             Whether the application dismiss the splash screen successfully or not

             @return {boolean} true if the application has dismissed the splash screen;false otherwise
             @since ARP1.0
          */
          dismissSplashScreen() : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               var apiRequest : APIRequest = new APIRequest("IRuntime","dismissSplashScreen",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'RuntimeBridge.dismissSplashScreen' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'RuntimeBridge.dismissSplashScreen' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'RuntimeBridge.dismissSplashScreen' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.BrowserBridge
        @extends Adaptive.BaseUIBridge
        Interface for Managing the browser operations

        @author Francisco Javier Martin Bueno
        @since ARP1.0
     */
     export class BrowserBridge extends BaseUIBridge implements IBrowser {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             @method
             Method for opening a URL like a link in the native default browser

             @param {string} url url Url to open
             @return {boolean} The result of the operation
             @since ARP1.0
          */
          openExtenalBrowser(url : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               var apiRequest : APIRequest = new APIRequest("IBrowser","openExtenalBrowser",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'BrowserBridge.openExtenalBrowser' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'BrowserBridge.openExtenalBrowser' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'BrowserBridge.openExtenalBrowser' request.");
               }
               return response;
          }

          /**
             @method
             Method for opening a browser embedded into the application

             @param {string} url url            Url to open
             @param {string} title title          Title of the Navigation bar
             @param {string} backButtonText backButtonText Title of the Back button bar
             @return {boolean} The result of the operation
             @since ARP1.0
          */
          openInternalBrowser(url : string, title : string, backButtonText : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               arParams.push(JSON.stringify(title));
               arParams.push(JSON.stringify(backButtonText));
               var apiRequest : APIRequest = new APIRequest("IBrowser","openInternalBrowser",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'BrowserBridge.openInternalBrowser' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'BrowserBridge.openInternalBrowser' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'BrowserBridge.openInternalBrowser' request.");
               }
               return response;
          }

          /**
             @method
             Method for opening a browser embedded into the application in a modal window

             @param {string} url url            Url to open
             @param {string} title title          Title of the Navigation bar
             @param {string} backButtonText backButtonText Title of the Back button bar
             @return {boolean} The result of the operation
             @since ARP1.0
          */
          openInternalBrowserModal(url : string, title : string, backButtonText : string) : boolean {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(url));
               arParams.push(JSON.stringify(title));
               arParams.push(JSON.stringify(backButtonText));
               var apiRequest : APIRequest = new APIRequest("IBrowser","openInternalBrowserModal",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Prepare response.
               var response : boolean = false;
               // Check response.
               if (xhr.status == 200 ) {
                    // Process response.
                    if (xhr.responseText != null && xhr.responseText != '') {
                         apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                         if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                              response = !!apiResponse.getResponse();
                         } else {
                              console.error("ERROR: "+apiResponse.getStatusCode()+" receiving response in 'BrowserBridge.openInternalBrowserModal' ["+apiResponse.getStatusMessage()+"].");
                         }
                    } else {
                         console.error("ERROR: 'BrowserBridge.openInternalBrowserModal' incorrect response received.");
                    }
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'BrowserBridge.openInternalBrowserModal' request.");
               }
               return response;
          }
     }

     /**
        @class Adaptive.DesktopBridge
        @extends Adaptive.BaseUIBridge
        Interface for Managing the Desktop operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class DesktopBridge extends BaseUIBridge implements IDesktop {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.MapBridge
        @extends Adaptive.BaseUIBridge
        Interface for Managing the Map operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class MapBridge extends BaseUIBridge implements IMap {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.UIBridge
        @extends Adaptive.BaseUIBridge
        Interface for Managing the UI operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class UIBridge extends BaseUIBridge implements IUI {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.CompressionBridge
        @extends Adaptive.BaseUtilBridge
        Interface for Managing the Compression operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class CompressionBridge extends BaseUtilBridge implements ICompression {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.ConcurrentBridge
        @extends Adaptive.BaseUtilBridge
        Interface for Managing the Concurrent operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class ConcurrentBridge extends BaseUtilBridge implements IConcurrent {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.CryptoBridge
        @extends Adaptive.BaseUtilBridge
        Interface for Managing the Cloud operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class CryptoBridge extends BaseUtilBridge implements ICrypto {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.LoggingBridge
        @extends Adaptive.BaseUtilBridge
        Interface for Managing the Logging operations

        @author Ferran Vila Conesa
        @since ARP1.0
     */
     export class LoggingBridge extends BaseUtilBridge implements ILogging {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }

          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.

             @param level   Log level
             @param message Message to be logged
             @since ARP1.0
          */
          log_level_message(level : ILoggingLogLevel, message : string) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(level));
               arParams.push(JSON.stringify(message));
               var apiRequest : APIRequest = new APIRequest("ILogging","log_level_message",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LoggingBridge.log_level_message' request.");
               }
          }

          /**
             Logs the given message, with the given log level if specified, to the standard platform/environment.

             @param level    Log level
             @param category Category/tag name to identify/filter the log.
             @param message  Message to be logged
             @since ARP1.0
          */
          log_level_category_message(level : ILoggingLogLevel, category : string, message : string) : void {
               // Create and populate API request.
               var arParams : string[] = [];
               arParams.push(JSON.stringify(level));
               arParams.push(JSON.stringify(category));
               arParams.push(JSON.stringify(message));
               var apiRequest : APIRequest = new APIRequest("ILogging","log_level_category_message",arParams, -1 /* = synchronous call */);
               var apiResponse : APIResponse = new APIResponse("", 200, "");
               // Create and send JSON request.
               var xhr = new XMLHttpRequest();
               xhr.open("POST", bridgePath, false);
               xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
               xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
               xhr.send(JSON.stringify(apiRequest));
               // Check response.
               if (xhr.status == 200 ) {
               } else {
                    console.error("ERROR: "+xhr.status+" sending 'LoggingBridge.log_level_category_message' request.");
               }
          }
     }

     /**
        @class Adaptive.TimerBridge
        @extends Adaptive.BaseUtilBridge
        Interface for Managing the Timer operations

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class TimerBridge extends BaseUtilBridge implements ITimer {

          /**
             @method constructor
             Default constructor.
          */
          constructor() {
               super();
          }
     }

     /**
        @class Adaptive.AppRegistryBridge
        Interface to retrieve auto-registered service implementation references.

        @author Carlos Lozano Diez
        @since ARP1.0
     */
     export class AppRegistryBridge implements IAppRegistry {

          /**
             @private
             @static
             @property {Adaptive.AppRegistryBridge} instance
             Singleton instance of AppRegistry.
          */
          private static instance : IAppRegistry = null;

          /**
             @static
             @singleton
             @method
             Singleton instance of AppRegistry.
             @return {Adaptive.AppRegistryBridge}
          */
          public static getInstance() : IAppRegistry {
               if (AppRegistryBridge.instance === null) {
                    AppRegistryBridge.instance = new AppRegistryBridge();
               }
               return AppRegistryBridge.instance;
          }

          /**
             @private
             @property {Adaptive.IAcceleration} instanceAcceleration
          */
          private static instanceAcceleration : IAcceleration = null;
          /**
             @private
             @property {Adaptive.IAds} instanceAds
          */
          private static instanceAds : IAds = null;
          /**
             @private
             @property {Adaptive.IAlarm} instanceAlarm
          */
          private static instanceAlarm : IAlarm = null;
          /**
             @private
             @property {Adaptive.IAmbientLight} instanceAmbientLight
          */
          private static instanceAmbientLight : IAmbientLight = null;
          /**
             @private
             @property {Adaptive.IAnalytics} instanceAnalytics
          */
          private static instanceAnalytics : IAnalytics = null;
          /**
             @private
             @property {Adaptive.IAudio} instanceAudio
          */
          private static instanceAudio : IAudio = null;
          /**
             @private
             @property {Adaptive.IBarcode} instanceBarcode
          */
          private static instanceBarcode : IBarcode = null;
          /**
             @private
             @property {Adaptive.IBarometer} instanceBarometer
          */
          private static instanceBarometer : IBarometer = null;
          /**
             @private
             @property {Adaptive.IBluetooth} instanceBluetooth
          */
          private static instanceBluetooth : IBluetooth = null;
          /**
             @private
             @property {Adaptive.IBrowser} instanceBrowser
          */
          private static instanceBrowser : IBrowser = null;
          /**
             @private
             @property {Adaptive.ICalendar} instanceCalendar
          */
          private static instanceCalendar : ICalendar = null;
          /**
             @private
             @property {Adaptive.ICamera} instanceCamera
          */
          private static instanceCamera : ICamera = null;
          /**
             @private
             @property {Adaptive.ICapabilities} instanceCapabilities
          */
          private static instanceCapabilities : ICapabilities = null;
          /**
             @private
             @property {Adaptive.ICloud} instanceCloud
          */
          private static instanceCloud : ICloud = null;
          /**
             @private
             @property {Adaptive.ICompression} instanceCompression
          */
          private static instanceCompression : ICompression = null;
          /**
             @private
             @property {Adaptive.IConcurrent} instanceConcurrent
          */
          private static instanceConcurrent : IConcurrent = null;
          /**
             @private
             @property {Adaptive.IContact} instanceContact
          */
          private static instanceContact : IContact = null;
          /**
             @private
             @property {Adaptive.ICrypto} instanceCrypto
          */
          private static instanceCrypto : ICrypto = null;
          /**
             @private
             @property {Adaptive.IDataStream} instanceDataStream
          */
          private static instanceDataStream : IDataStream = null;
          /**
             @private
             @property {Adaptive.IDatabase} instanceDatabase
          */
          private static instanceDatabase : IDatabase = null;
          /**
             @private
             @property {Adaptive.IDesktop} instanceDesktop
          */
          private static instanceDesktop : IDesktop = null;
          /**
             @private
             @property {Adaptive.IDevice} instanceDevice
          */
          private static instanceDevice : IDevice = null;
          /**
             @private
             @property {Adaptive.IDisplay} instanceDisplay
          */
          private static instanceDisplay : IDisplay = null;
          /**
             @private
             @property {Adaptive.IFacebook} instanceFacebook
          */
          private static instanceFacebook : IFacebook = null;
          /**
             @private
             @property {Adaptive.IFile} instanceFile
          */
          private static instanceFile : IFile = null;
          /**
             @private
             @property {Adaptive.IFileSystem} instanceFileSystem
          */
          private static instanceFileSystem : IFileSystem = null;
          /**
             @private
             @property {Adaptive.IGeolocation} instanceGeolocation
          */
          private static instanceGeolocation : IGeolocation = null;
          /**
             @private
             @property {Adaptive.IGlobalization} instanceGlobalization
          */
          private static instanceGlobalization : IGlobalization = null;
          /**
             @private
             @property {Adaptive.IGooglePlus} instanceGooglePlus
          */
          private static instanceGooglePlus : IGooglePlus = null;
          /**
             @private
             @property {Adaptive.IGyroscope} instanceGyroscope
          */
          private static instanceGyroscope : IGyroscope = null;
          /**
             @private
             @property {Adaptive.IImaging} instanceImaging
          */
          private static instanceImaging : IImaging = null;
          /**
             @private
             @property {Adaptive.IInternalStorage} instanceInternalStorage
          */
          private static instanceInternalStorage : IInternalStorage = null;
          /**
             @private
             @property {Adaptive.ILifecycle} instanceLifecycle
          */
          private static instanceLifecycle : ILifecycle = null;
          /**
             @private
             @property {Adaptive.ILinkedIn} instanceLinkedIn
          */
          private static instanceLinkedIn : ILinkedIn = null;
          /**
             @private
             @property {Adaptive.ILogging} instanceLogging
          */
          private static instanceLogging : ILogging = null;
          /**
             @private
             @property {Adaptive.IMagnetometer} instanceMagnetometer
          */
          private static instanceMagnetometer : IMagnetometer = null;
          /**
             @private
             @property {Adaptive.IMail} instanceMail
          */
          private static instanceMail : IMail = null;
          /**
             @private
             @property {Adaptive.IManagement} instanceManagement
          */
          private static instanceManagement : IManagement = null;
          /**
             @private
             @property {Adaptive.IMap} instanceMap
          */
          private static instanceMap : IMap = null;
          /**
             @private
             @property {Adaptive.IMessaging} instanceMessaging
          */
          private static instanceMessaging : IMessaging = null;
          /**
             @private
             @property {Adaptive.INFC} instanceNFC
          */
          private static instanceNFC : INFC = null;
          /**
             @private
             @property {Adaptive.INetworkInfo} instanceNetworkInfo
          */
          private static instanceNetworkInfo : INetworkInfo = null;
          /**
             @private
             @property {Adaptive.INetworkNaming} instanceNetworkNaming
          */
          private static instanceNetworkNaming : INetworkNaming = null;
          /**
             @private
             @property {Adaptive.INetworkReachability} instanceNetworkReachability
          */
          private static instanceNetworkReachability : INetworkReachability = null;
          /**
             @private
             @property {Adaptive.INetworkStatus} instanceNetworkStatus
          */
          private static instanceNetworkStatus : INetworkStatus = null;
          /**
             @private
             @property {Adaptive.INotification} instanceNotification
          */
          private static instanceNotification : INotification = null;
          /**
             @private
             @property {Adaptive.INotificationLocal} instanceNotificationLocal
          */
          private static instanceNotificationLocal : INotificationLocal = null;
          /**
             @private
             @property {Adaptive.IOAuth} instanceOAuth
          */
          private static instanceOAuth : IOAuth = null;
          /**
             @private
             @property {Adaptive.IOCR} instanceOCR
          */
          private static instanceOCR : IOCR = null;
          /**
             @private
             @property {Adaptive.IOS} instanceOS
          */
          private static instanceOS : IOS = null;
          /**
             @private
             @property {Adaptive.IOpenId} instanceOpenId
          */
          private static instanceOpenId : IOpenId = null;
          /**
             @private
             @property {Adaptive.IPrinting} instancePrinting
          */
          private static instancePrinting : IPrinting = null;
          /**
             @private
             @property {Adaptive.IProximity} instanceProximity
          */
          private static instanceProximity : IProximity = null;
          /**
             @private
             @property {Adaptive.IQRCode} instanceQRCode
          */
          private static instanceQRCode : IQRCode = null;
          /**
             @private
             @property {Adaptive.IRSS} instanceRSS
          */
          private static instanceRSS : IRSS = null;
          /**
             @private
             @property {Adaptive.IRuntime} instanceRuntime
          */
          private static instanceRuntime : IRuntime = null;
          /**
             @private
             @property {Adaptive.ISecurity} instanceSecurity
          */
          private static instanceSecurity : ISecurity = null;
          /**
             @private
             @property {Adaptive.IService} instanceService
          */
          private static instanceService : IService = null;
          /**
             @private
             @property {Adaptive.ISettings} instanceSettings
          */
          private static instanceSettings : ISettings = null;
          /**
             @private
             @property {Adaptive.ISocket} instanceSocket
          */
          private static instanceSocket : ISocket = null;
          /**
             @private
             @property {Adaptive.IStore} instanceStore
          */
          private static instanceStore : IStore = null;
          /**
             @private
             @property {Adaptive.ITelephony} instanceTelephony
          */
          private static instanceTelephony : ITelephony = null;
          /**
             @private
             @property {Adaptive.ITimer} instanceTimer
          */
          private static instanceTimer : ITimer = null;
          /**
             @private
             @property {Adaptive.ITwitter} instanceTwitter
          */
          private static instanceTwitter : ITwitter = null;
          /**
             @private
             @property {Adaptive.IUI} instanceUI
          */
          private static instanceUI : IUI = null;
          /**
             @private
             @property {Adaptive.IUpdate} instanceUpdate
          */
          private static instanceUpdate : IUpdate = null;
          /**
             @private
             @property {Adaptive.IVibration} instanceVibration
          */
          private static instanceVibration : IVibration = null;
          /**
             @private
             @property {Adaptive.IVideo} instanceVideo
          */
          private static instanceVideo : IVideo = null;
          /**
             @private
             @property {Adaptive.IWallet} instanceWallet
          */
          private static instanceWallet : IWallet = null;
          /**
             @private
             @property {Adaptive.IXML} instanceXML
          */
          private static instanceXML : IXML = null;

          /**
             @method
             Obtain a reference to the IAcceleration bridge.

             @return {Adaptive.AccelerationBridge} bridge instance.
          */
          public getAccelerationBridge() : IAcceleration {
               if (AppRegistryBridge.instanceAcceleration === null) {
                    AppRegistryBridge.instanceAcceleration= new AccelerationBridge();
               }
               return AppRegistryBridge.instanceAcceleration;
          }

          /**
             @method
             Obtain a reference to the IAds bridge.

             @return {Adaptive.AdsBridge} bridge instance.
          */
          public getAdsBridge() : IAds {
               if (AppRegistryBridge.instanceAds === null) {
                    AppRegistryBridge.instanceAds= new AdsBridge();
               }
               return AppRegistryBridge.instanceAds;
          }

          /**
             @method
             Obtain a reference to the IAlarm bridge.

             @return {Adaptive.AlarmBridge} bridge instance.
          */
          public getAlarmBridge() : IAlarm {
               if (AppRegistryBridge.instanceAlarm === null) {
                    AppRegistryBridge.instanceAlarm= new AlarmBridge();
               }
               return AppRegistryBridge.instanceAlarm;
          }

          /**
             @method
             Obtain a reference to the IAmbientLight bridge.

             @return {Adaptive.AmbientLightBridge} bridge instance.
          */
          public getAmbientLightBridge() : IAmbientLight {
               if (AppRegistryBridge.instanceAmbientLight === null) {
                    AppRegistryBridge.instanceAmbientLight= new AmbientLightBridge();
               }
               return AppRegistryBridge.instanceAmbientLight;
          }

          /**
             @method
             Obtain a reference to the IAnalytics bridge.

             @return {Adaptive.AnalyticsBridge} bridge instance.
          */
          public getAnalyticsBridge() : IAnalytics {
               if (AppRegistryBridge.instanceAnalytics === null) {
                    AppRegistryBridge.instanceAnalytics= new AnalyticsBridge();
               }
               return AppRegistryBridge.instanceAnalytics;
          }

          /**
             @method
             Obtain a reference to the IAudio bridge.

             @return {Adaptive.AudioBridge} bridge instance.
          */
          public getAudioBridge() : IAudio {
               if (AppRegistryBridge.instanceAudio === null) {
                    AppRegistryBridge.instanceAudio= new AudioBridge();
               }
               return AppRegistryBridge.instanceAudio;
          }

          /**
             @method
             Obtain a reference to the IBarcode bridge.

             @return {Adaptive.BarcodeBridge} bridge instance.
          */
          public getBarcodeBridge() : IBarcode {
               if (AppRegistryBridge.instanceBarcode === null) {
                    AppRegistryBridge.instanceBarcode= new BarcodeBridge();
               }
               return AppRegistryBridge.instanceBarcode;
          }

          /**
             @method
             Obtain a reference to the IBarometer bridge.

             @return {Adaptive.BarometerBridge} bridge instance.
          */
          public getBarometerBridge() : IBarometer {
               if (AppRegistryBridge.instanceBarometer === null) {
                    AppRegistryBridge.instanceBarometer= new BarometerBridge();
               }
               return AppRegistryBridge.instanceBarometer;
          }

          /**
             @method
             Obtain a reference to the IBluetooth bridge.

             @return {Adaptive.BluetoothBridge} bridge instance.
          */
          public getBluetoothBridge() : IBluetooth {
               if (AppRegistryBridge.instanceBluetooth === null) {
                    AppRegistryBridge.instanceBluetooth= new BluetoothBridge();
               }
               return AppRegistryBridge.instanceBluetooth;
          }

          /**
             @method
             Obtain a reference to the IBrowser bridge.

             @return {Adaptive.BrowserBridge} bridge instance.
          */
          public getBrowserBridge() : IBrowser {
               if (AppRegistryBridge.instanceBrowser === null) {
                    AppRegistryBridge.instanceBrowser= new BrowserBridge();
               }
               return AppRegistryBridge.instanceBrowser;
          }

          /**
             @method
             Obtain a reference to the ICalendar bridge.

             @return {Adaptive.CalendarBridge} bridge instance.
          */
          public getCalendarBridge() : ICalendar {
               if (AppRegistryBridge.instanceCalendar === null) {
                    AppRegistryBridge.instanceCalendar= new CalendarBridge();
               }
               return AppRegistryBridge.instanceCalendar;
          }

          /**
             @method
             Obtain a reference to the ICamera bridge.

             @return {Adaptive.CameraBridge} bridge instance.
          */
          public getCameraBridge() : ICamera {
               if (AppRegistryBridge.instanceCamera === null) {
                    AppRegistryBridge.instanceCamera= new CameraBridge();
               }
               return AppRegistryBridge.instanceCamera;
          }

          /**
             @method
             Obtain a reference to the ICapabilities bridge.

             @return {Adaptive.CapabilitiesBridge} bridge instance.
          */
          public getCapabilitiesBridge() : ICapabilities {
               if (AppRegistryBridge.instanceCapabilities === null) {
                    AppRegistryBridge.instanceCapabilities= new CapabilitiesBridge();
               }
               return AppRegistryBridge.instanceCapabilities;
          }

          /**
             @method
             Obtain a reference to the ICloud bridge.

             @return {Adaptive.CloudBridge} bridge instance.
          */
          public getCloudBridge() : ICloud {
               if (AppRegistryBridge.instanceCloud === null) {
                    AppRegistryBridge.instanceCloud= new CloudBridge();
               }
               return AppRegistryBridge.instanceCloud;
          }

          /**
             @method
             Obtain a reference to the ICompression bridge.

             @return {Adaptive.CompressionBridge} bridge instance.
          */
          public getCompressionBridge() : ICompression {
               if (AppRegistryBridge.instanceCompression === null) {
                    AppRegistryBridge.instanceCompression= new CompressionBridge();
               }
               return AppRegistryBridge.instanceCompression;
          }

          /**
             @method
             Obtain a reference to the IConcurrent bridge.

             @return {Adaptive.ConcurrentBridge} bridge instance.
          */
          public getConcurrentBridge() : IConcurrent {
               if (AppRegistryBridge.instanceConcurrent === null) {
                    AppRegistryBridge.instanceConcurrent= new ConcurrentBridge();
               }
               return AppRegistryBridge.instanceConcurrent;
          }

          /**
             @method
             Obtain a reference to the IContact bridge.

             @return {Adaptive.ContactBridge} bridge instance.
          */
          public getContactBridge() : IContact {
               if (AppRegistryBridge.instanceContact === null) {
                    AppRegistryBridge.instanceContact= new ContactBridge();
               }
               return AppRegistryBridge.instanceContact;
          }

          /**
             @method
             Obtain a reference to the ICrypto bridge.

             @return {Adaptive.CryptoBridge} bridge instance.
          */
          public getCryptoBridge() : ICrypto {
               if (AppRegistryBridge.instanceCrypto === null) {
                    AppRegistryBridge.instanceCrypto= new CryptoBridge();
               }
               return AppRegistryBridge.instanceCrypto;
          }

          /**
             @method
             Obtain a reference to the IDataStream bridge.

             @return {Adaptive.DataStreamBridge} bridge instance.
          */
          public getDataStreamBridge() : IDataStream {
               if (AppRegistryBridge.instanceDataStream === null) {
                    AppRegistryBridge.instanceDataStream= new DataStreamBridge();
               }
               return AppRegistryBridge.instanceDataStream;
          }

          /**
             @method
             Obtain a reference to the IDatabase bridge.

             @return {Adaptive.DatabaseBridge} bridge instance.
          */
          public getDatabaseBridge() : IDatabase {
               if (AppRegistryBridge.instanceDatabase === null) {
                    AppRegistryBridge.instanceDatabase= new DatabaseBridge();
               }
               return AppRegistryBridge.instanceDatabase;
          }

          /**
             @method
             Obtain a reference to the IDesktop bridge.

             @return {Adaptive.DesktopBridge} bridge instance.
          */
          public getDesktopBridge() : IDesktop {
               if (AppRegistryBridge.instanceDesktop === null) {
                    AppRegistryBridge.instanceDesktop= new DesktopBridge();
               }
               return AppRegistryBridge.instanceDesktop;
          }

          /**
             @method
             Obtain a reference to the IDevice bridge.

             @return {Adaptive.DeviceBridge} bridge instance.
          */
          public getDeviceBridge() : IDevice {
               if (AppRegistryBridge.instanceDevice === null) {
                    AppRegistryBridge.instanceDevice= new DeviceBridge();
               }
               return AppRegistryBridge.instanceDevice;
          }

          /**
             @method
             Obtain a reference to the IDisplay bridge.

             @return {Adaptive.DisplayBridge} bridge instance.
          */
          public getDisplayBridge() : IDisplay {
               if (AppRegistryBridge.instanceDisplay === null) {
                    AppRegistryBridge.instanceDisplay= new DisplayBridge();
               }
               return AppRegistryBridge.instanceDisplay;
          }

          /**
             @method
             Obtain a reference to the IFacebook bridge.

             @return {Adaptive.FacebookBridge} bridge instance.
          */
          public getFacebookBridge() : IFacebook {
               if (AppRegistryBridge.instanceFacebook === null) {
                    AppRegistryBridge.instanceFacebook= new FacebookBridge();
               }
               return AppRegistryBridge.instanceFacebook;
          }

          /**
             @method
             Obtain a reference to the IFile bridge.

             @return {Adaptive.FileBridge} bridge instance.
          */
          public getFileBridge() : IFile {
               if (AppRegistryBridge.instanceFile === null) {
                    AppRegistryBridge.instanceFile= new FileBridge();
               }
               return AppRegistryBridge.instanceFile;
          }

          /**
             @method
             Obtain a reference to the IFileSystem bridge.

             @return {Adaptive.FileSystemBridge} bridge instance.
          */
          public getFileSystemBridge() : IFileSystem {
               if (AppRegistryBridge.instanceFileSystem === null) {
                    AppRegistryBridge.instanceFileSystem= new FileSystemBridge();
               }
               return AppRegistryBridge.instanceFileSystem;
          }

          /**
             @method
             Obtain a reference to the IGeolocation bridge.

             @return {Adaptive.GeolocationBridge} bridge instance.
          */
          public getGeolocationBridge() : IGeolocation {
               if (AppRegistryBridge.instanceGeolocation === null) {
                    AppRegistryBridge.instanceGeolocation= new GeolocationBridge();
               }
               return AppRegistryBridge.instanceGeolocation;
          }

          /**
             @method
             Obtain a reference to the IGlobalization bridge.

             @return {Adaptive.GlobalizationBridge} bridge instance.
          */
          public getGlobalizationBridge() : IGlobalization {
               if (AppRegistryBridge.instanceGlobalization === null) {
                    AppRegistryBridge.instanceGlobalization= new GlobalizationBridge();
               }
               return AppRegistryBridge.instanceGlobalization;
          }

          /**
             @method
             Obtain a reference to the IGooglePlus bridge.

             @return {Adaptive.GooglePlusBridge} bridge instance.
          */
          public getGooglePlusBridge() : IGooglePlus {
               if (AppRegistryBridge.instanceGooglePlus === null) {
                    AppRegistryBridge.instanceGooglePlus= new GooglePlusBridge();
               }
               return AppRegistryBridge.instanceGooglePlus;
          }

          /**
             @method
             Obtain a reference to the IGyroscope bridge.

             @return {Adaptive.GyroscopeBridge} bridge instance.
          */
          public getGyroscopeBridge() : IGyroscope {
               if (AppRegistryBridge.instanceGyroscope === null) {
                    AppRegistryBridge.instanceGyroscope= new GyroscopeBridge();
               }
               return AppRegistryBridge.instanceGyroscope;
          }

          /**
             @method
             Obtain a reference to the IImaging bridge.

             @return {Adaptive.ImagingBridge} bridge instance.
          */
          public getImagingBridge() : IImaging {
               if (AppRegistryBridge.instanceImaging === null) {
                    AppRegistryBridge.instanceImaging= new ImagingBridge();
               }
               return AppRegistryBridge.instanceImaging;
          }

          /**
             @method
             Obtain a reference to the IInternalStorage bridge.

             @return {Adaptive.InternalStorageBridge} bridge instance.
          */
          public getInternalStorageBridge() : IInternalStorage {
               if (AppRegistryBridge.instanceInternalStorage === null) {
                    AppRegistryBridge.instanceInternalStorage= new InternalStorageBridge();
               }
               return AppRegistryBridge.instanceInternalStorage;
          }

          /**
             @method
             Obtain a reference to the ILifecycle bridge.

             @return {Adaptive.LifecycleBridge} bridge instance.
          */
          public getLifecycleBridge() : ILifecycle {
               if (AppRegistryBridge.instanceLifecycle === null) {
                    AppRegistryBridge.instanceLifecycle= new LifecycleBridge();
               }
               return AppRegistryBridge.instanceLifecycle;
          }

          /**
             @method
             Obtain a reference to the ILinkedIn bridge.

             @return {Adaptive.LinkedInBridge} bridge instance.
          */
          public getLinkedInBridge() : ILinkedIn {
               if (AppRegistryBridge.instanceLinkedIn === null) {
                    AppRegistryBridge.instanceLinkedIn= new LinkedInBridge();
               }
               return AppRegistryBridge.instanceLinkedIn;
          }

          /**
             @method
             Obtain a reference to the ILogging bridge.

             @return {Adaptive.LoggingBridge} bridge instance.
          */
          public getLoggingBridge() : ILogging {
               if (AppRegistryBridge.instanceLogging === null) {
                    AppRegistryBridge.instanceLogging= new LoggingBridge();
               }
               return AppRegistryBridge.instanceLogging;
          }

          /**
             @method
             Obtain a reference to the IMagnetometer bridge.

             @return {Adaptive.MagnetometerBridge} bridge instance.
          */
          public getMagnetometerBridge() : IMagnetometer {
               if (AppRegistryBridge.instanceMagnetometer === null) {
                    AppRegistryBridge.instanceMagnetometer= new MagnetometerBridge();
               }
               return AppRegistryBridge.instanceMagnetometer;
          }

          /**
             @method
             Obtain a reference to the IMail bridge.

             @return {Adaptive.MailBridge} bridge instance.
          */
          public getMailBridge() : IMail {
               if (AppRegistryBridge.instanceMail === null) {
                    AppRegistryBridge.instanceMail= new MailBridge();
               }
               return AppRegistryBridge.instanceMail;
          }

          /**
             @method
             Obtain a reference to the IManagement bridge.

             @return {Adaptive.ManagementBridge} bridge instance.
          */
          public getManagementBridge() : IManagement {
               if (AppRegistryBridge.instanceManagement === null) {
                    AppRegistryBridge.instanceManagement= new ManagementBridge();
               }
               return AppRegistryBridge.instanceManagement;
          }

          /**
             @method
             Obtain a reference to the IMap bridge.

             @return {Adaptive.MapBridge} bridge instance.
          */
          public getMapBridge() : IMap {
               if (AppRegistryBridge.instanceMap === null) {
                    AppRegistryBridge.instanceMap= new MapBridge();
               }
               return AppRegistryBridge.instanceMap;
          }

          /**
             @method
             Obtain a reference to the IMessaging bridge.

             @return {Adaptive.MessagingBridge} bridge instance.
          */
          public getMessagingBridge() : IMessaging {
               if (AppRegistryBridge.instanceMessaging === null) {
                    AppRegistryBridge.instanceMessaging= new MessagingBridge();
               }
               return AppRegistryBridge.instanceMessaging;
          }

          /**
             @method
             Obtain a reference to the INFC bridge.

             @return {Adaptive.NFCBridge} bridge instance.
          */
          public getNFCBridge() : INFC {
               if (AppRegistryBridge.instanceNFC === null) {
                    AppRegistryBridge.instanceNFC= new NFCBridge();
               }
               return AppRegistryBridge.instanceNFC;
          }

          /**
             @method
             Obtain a reference to the INetworkInfo bridge.

             @return {Adaptive.NetworkInfoBridge} bridge instance.
          */
          public getNetworkInfoBridge() : INetworkInfo {
               if (AppRegistryBridge.instanceNetworkInfo === null) {
                    AppRegistryBridge.instanceNetworkInfo= new NetworkInfoBridge();
               }
               return AppRegistryBridge.instanceNetworkInfo;
          }

          /**
             @method
             Obtain a reference to the INetworkNaming bridge.

             @return {Adaptive.NetworkNamingBridge} bridge instance.
          */
          public getNetworkNamingBridge() : INetworkNaming {
               if (AppRegistryBridge.instanceNetworkNaming === null) {
                    AppRegistryBridge.instanceNetworkNaming= new NetworkNamingBridge();
               }
               return AppRegistryBridge.instanceNetworkNaming;
          }

          /**
             @method
             Obtain a reference to the INetworkReachability bridge.

             @return {Adaptive.NetworkReachabilityBridge} bridge instance.
          */
          public getNetworkReachabilityBridge() : INetworkReachability {
               if (AppRegistryBridge.instanceNetworkReachability === null) {
                    AppRegistryBridge.instanceNetworkReachability= new NetworkReachabilityBridge();
               }
               return AppRegistryBridge.instanceNetworkReachability;
          }

          /**
             @method
             Obtain a reference to the INetworkStatus bridge.

             @return {Adaptive.NetworkStatusBridge} bridge instance.
          */
          public getNetworkStatusBridge() : INetworkStatus {
               if (AppRegistryBridge.instanceNetworkStatus === null) {
                    AppRegistryBridge.instanceNetworkStatus= new NetworkStatusBridge();
               }
               return AppRegistryBridge.instanceNetworkStatus;
          }

          /**
             @method
             Obtain a reference to the INotification bridge.

             @return {Adaptive.NotificationBridge} bridge instance.
          */
          public getNotificationBridge() : INotification {
               if (AppRegistryBridge.instanceNotification === null) {
                    AppRegistryBridge.instanceNotification= new NotificationBridge();
               }
               return AppRegistryBridge.instanceNotification;
          }

          /**
             @method
             Obtain a reference to the INotificationLocal bridge.

             @return {Adaptive.NotificationLocalBridge} bridge instance.
          */
          public getNotificationLocalBridge() : INotificationLocal {
               if (AppRegistryBridge.instanceNotificationLocal === null) {
                    AppRegistryBridge.instanceNotificationLocal= new NotificationLocalBridge();
               }
               return AppRegistryBridge.instanceNotificationLocal;
          }

          /**
             @method
             Obtain a reference to the IOAuth bridge.

             @return {Adaptive.OAuthBridge} bridge instance.
          */
          public getOAuthBridge() : IOAuth {
               if (AppRegistryBridge.instanceOAuth === null) {
                    AppRegistryBridge.instanceOAuth= new OAuthBridge();
               }
               return AppRegistryBridge.instanceOAuth;
          }

          /**
             @method
             Obtain a reference to the IOCR bridge.

             @return {Adaptive.OCRBridge} bridge instance.
          */
          public getOCRBridge() : IOCR {
               if (AppRegistryBridge.instanceOCR === null) {
                    AppRegistryBridge.instanceOCR= new OCRBridge();
               }
               return AppRegistryBridge.instanceOCR;
          }

          /**
             @method
             Obtain a reference to the IOS bridge.

             @return {Adaptive.OSBridge} bridge instance.
          */
          public getOSBridge() : IOS {
               if (AppRegistryBridge.instanceOS === null) {
                    AppRegistryBridge.instanceOS= new OSBridge();
               }
               return AppRegistryBridge.instanceOS;
          }

          /**
             @method
             Obtain a reference to the IOpenId bridge.

             @return {Adaptive.OpenIdBridge} bridge instance.
          */
          public getOpenIdBridge() : IOpenId {
               if (AppRegistryBridge.instanceOpenId === null) {
                    AppRegistryBridge.instanceOpenId= new OpenIdBridge();
               }
               return AppRegistryBridge.instanceOpenId;
          }

          /**
             @method
             Obtain a reference to the IPrinting bridge.

             @return {Adaptive.PrintingBridge} bridge instance.
          */
          public getPrintingBridge() : IPrinting {
               if (AppRegistryBridge.instancePrinting === null) {
                    AppRegistryBridge.instancePrinting= new PrintingBridge();
               }
               return AppRegistryBridge.instancePrinting;
          }

          /**
             @method
             Obtain a reference to the IProximity bridge.

             @return {Adaptive.ProximityBridge} bridge instance.
          */
          public getProximityBridge() : IProximity {
               if (AppRegistryBridge.instanceProximity === null) {
                    AppRegistryBridge.instanceProximity= new ProximityBridge();
               }
               return AppRegistryBridge.instanceProximity;
          }

          /**
             @method
             Obtain a reference to the IQRCode bridge.

             @return {Adaptive.QRCodeBridge} bridge instance.
          */
          public getQRCodeBridge() : IQRCode {
               if (AppRegistryBridge.instanceQRCode === null) {
                    AppRegistryBridge.instanceQRCode= new QRCodeBridge();
               }
               return AppRegistryBridge.instanceQRCode;
          }

          /**
             @method
             Obtain a reference to the IRSS bridge.

             @return {Adaptive.RSSBridge} bridge instance.
          */
          public getRSSBridge() : IRSS {
               if (AppRegistryBridge.instanceRSS === null) {
                    AppRegistryBridge.instanceRSS= new RSSBridge();
               }
               return AppRegistryBridge.instanceRSS;
          }

          /**
             @method
             Obtain a reference to the IRuntime bridge.

             @return {Adaptive.RuntimeBridge} bridge instance.
          */
          public getRuntimeBridge() : IRuntime {
               if (AppRegistryBridge.instanceRuntime === null) {
                    AppRegistryBridge.instanceRuntime= new RuntimeBridge();
               }
               return AppRegistryBridge.instanceRuntime;
          }

          /**
             @method
             Obtain a reference to the ISecurity bridge.

             @return {Adaptive.SecurityBridge} bridge instance.
          */
          public getSecurityBridge() : ISecurity {
               if (AppRegistryBridge.instanceSecurity === null) {
                    AppRegistryBridge.instanceSecurity= new SecurityBridge();
               }
               return AppRegistryBridge.instanceSecurity;
          }

          /**
             @method
             Obtain a reference to the IService bridge.

             @return {Adaptive.ServiceBridge} bridge instance.
          */
          public getServiceBridge() : IService {
               if (AppRegistryBridge.instanceService === null) {
                    AppRegistryBridge.instanceService= new ServiceBridge();
               }
               return AppRegistryBridge.instanceService;
          }

          /**
             @method
             Obtain a reference to the ISettings bridge.

             @return {Adaptive.SettingsBridge} bridge instance.
          */
          public getSettingsBridge() : ISettings {
               if (AppRegistryBridge.instanceSettings === null) {
                    AppRegistryBridge.instanceSettings= new SettingsBridge();
               }
               return AppRegistryBridge.instanceSettings;
          }

          /**
             @method
             Obtain a reference to the ISocket bridge.

             @return {Adaptive.SocketBridge} bridge instance.
          */
          public getSocketBridge() : ISocket {
               if (AppRegistryBridge.instanceSocket === null) {
                    AppRegistryBridge.instanceSocket= new SocketBridge();
               }
               return AppRegistryBridge.instanceSocket;
          }

          /**
             @method
             Obtain a reference to the IStore bridge.

             @return {Adaptive.StoreBridge} bridge instance.
          */
          public getStoreBridge() : IStore {
               if (AppRegistryBridge.instanceStore === null) {
                    AppRegistryBridge.instanceStore= new StoreBridge();
               }
               return AppRegistryBridge.instanceStore;
          }

          /**
             @method
             Obtain a reference to the ITelephony bridge.

             @return {Adaptive.TelephonyBridge} bridge instance.
          */
          public getTelephonyBridge() : ITelephony {
               if (AppRegistryBridge.instanceTelephony === null) {
                    AppRegistryBridge.instanceTelephony= new TelephonyBridge();
               }
               return AppRegistryBridge.instanceTelephony;
          }

          /**
             @method
             Obtain a reference to the ITimer bridge.

             @return {Adaptive.TimerBridge} bridge instance.
          */
          public getTimerBridge() : ITimer {
               if (AppRegistryBridge.instanceTimer === null) {
                    AppRegistryBridge.instanceTimer= new TimerBridge();
               }
               return AppRegistryBridge.instanceTimer;
          }

          /**
             @method
             Obtain a reference to the ITwitter bridge.

             @return {Adaptive.TwitterBridge} bridge instance.
          */
          public getTwitterBridge() : ITwitter {
               if (AppRegistryBridge.instanceTwitter === null) {
                    AppRegistryBridge.instanceTwitter= new TwitterBridge();
               }
               return AppRegistryBridge.instanceTwitter;
          }

          /**
             @method
             Obtain a reference to the IUI bridge.

             @return {Adaptive.UIBridge} bridge instance.
          */
          public getUIBridge() : IUI {
               if (AppRegistryBridge.instanceUI === null) {
                    AppRegistryBridge.instanceUI= new UIBridge();
               }
               return AppRegistryBridge.instanceUI;
          }

          /**
             @method
             Obtain a reference to the IUpdate bridge.

             @return {Adaptive.UpdateBridge} bridge instance.
          */
          public getUpdateBridge() : IUpdate {
               if (AppRegistryBridge.instanceUpdate === null) {
                    AppRegistryBridge.instanceUpdate= new UpdateBridge();
               }
               return AppRegistryBridge.instanceUpdate;
          }

          /**
             @method
             Obtain a reference to the IVibration bridge.

             @return {Adaptive.VibrationBridge} bridge instance.
          */
          public getVibrationBridge() : IVibration {
               if (AppRegistryBridge.instanceVibration === null) {
                    AppRegistryBridge.instanceVibration= new VibrationBridge();
               }
               return AppRegistryBridge.instanceVibration;
          }

          /**
             @method
             Obtain a reference to the IVideo bridge.

             @return {Adaptive.VideoBridge} bridge instance.
          */
          public getVideoBridge() : IVideo {
               if (AppRegistryBridge.instanceVideo === null) {
                    AppRegistryBridge.instanceVideo= new VideoBridge();
               }
               return AppRegistryBridge.instanceVideo;
          }

          /**
             @method
             Obtain a reference to the IWallet bridge.

             @return {Adaptive.WalletBridge} bridge instance.
          */
          public getWalletBridge() : IWallet {
               if (AppRegistryBridge.instanceWallet === null) {
                    AppRegistryBridge.instanceWallet= new WalletBridge();
               }
               return AppRegistryBridge.instanceWallet;
          }

          /**
             @method
             Obtain a reference to the IXML bridge.

             @return {Adaptive.XMLBridge} bridge instance.
          */
          public getXMLBridge() : IXML {
               if (AppRegistryBridge.instanceXML === null) {
                    AppRegistryBridge.instanceXML= new XMLBridge();
               }
               return AppRegistryBridge.instanceXML;
          }

          /**
             @method
             Return the API version for the given interface.

             @return {string} The version of the API.
          */
          public getAPIVersion() : string {
               return "v2.0.4"
          }
     }
     /**
        @enum {Adaptive.ContactAddressType} Adaptive.ContactAddressType
        Enumeration ContactAddressType
     */
     export class ContactAddressType {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ContactAddressType} [Home='Home']
          */
          static Home = new ContactAddressType("Home");
          /**
             @property {Adaptive.ContactAddressType} [Work='Work']
          */
          static Work = new ContactAddressType("Work");
          /**
             @property {Adaptive.ContactAddressType} [Other='Other']
          */
          static Other = new ContactAddressType("Other");
          /**
             @property {Adaptive.ContactAddressType} [Unknown='Unknown']
          */
          static Unknown = new ContactAddressType("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ContactAddressType}
          */
          static toObject(object : any) : ContactAddressType {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Home":
                              return ContactAddressType.Home;
                         case "Work":
                              return ContactAddressType.Work;
                         case "Other":
                              return ContactAddressType.Other;
                         case "Unknown":
                              return ContactAddressType.Unknown;
                         default:
                              return ContactAddressType.Unknown;
                    }
               } else {
                    return ContactAddressType.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ContactEmailType} Adaptive.ContactEmailType
        Enumeration ContactEmailType
     */
     export class ContactEmailType {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ContactEmailType} [Personal='Personal']
          */
          static Personal = new ContactEmailType("Personal");
          /**
             @property {Adaptive.ContactEmailType} [Work='Work']
          */
          static Work = new ContactEmailType("Work");
          /**
             @property {Adaptive.ContactEmailType} [Other='Other']
          */
          static Other = new ContactEmailType("Other");
          /**
             @property {Adaptive.ContactEmailType} [Unknown='Unknown']
          */
          static Unknown = new ContactEmailType("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ContactEmailType}
          */
          static toObject(object : any) : ContactEmailType {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Personal":
                              return ContactEmailType.Personal;
                         case "Work":
                              return ContactEmailType.Work;
                         case "Other":
                              return ContactEmailType.Other;
                         case "Unknown":
                              return ContactEmailType.Unknown;
                         default:
                              return ContactEmailType.Unknown;
                    }
               } else {
                    return ContactEmailType.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ContactPersonalInfoTitle} Adaptive.ContactPersonalInfoTitle
        Enumeration ContactPersonalInfoTitle
     */
     export class ContactPersonalInfoTitle {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ContactPersonalInfoTitle} [Mr='Mr']
          */
          static Mr = new ContactPersonalInfoTitle("Mr");
          /**
             @property {Adaptive.ContactPersonalInfoTitle} [Mrs='Mrs']
          */
          static Mrs = new ContactPersonalInfoTitle("Mrs");
          /**
             @property {Adaptive.ContactPersonalInfoTitle} [Ms='Ms']
          */
          static Ms = new ContactPersonalInfoTitle("Ms");
          /**
             @property {Adaptive.ContactPersonalInfoTitle} [Dr='Dr']
          */
          static Dr = new ContactPersonalInfoTitle("Dr");
          /**
             @property {Adaptive.ContactPersonalInfoTitle} [Unknown='Unknown']
          */
          static Unknown = new ContactPersonalInfoTitle("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ContactPersonalInfoTitle}
          */
          static toObject(object : any) : ContactPersonalInfoTitle {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Mr":
                              return ContactPersonalInfoTitle.Mr;
                         case "Mrs":
                              return ContactPersonalInfoTitle.Mrs;
                         case "Ms":
                              return ContactPersonalInfoTitle.Ms;
                         case "Dr":
                              return ContactPersonalInfoTitle.Dr;
                         case "Unknown":
                              return ContactPersonalInfoTitle.Unknown;
                         default:
                              return ContactPersonalInfoTitle.Unknown;
                    }
               } else {
                    return ContactPersonalInfoTitle.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ContactPhoneType} Adaptive.ContactPhoneType
        Enumeration ContactPhoneType
     */
     export class ContactPhoneType {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ContactPhoneType} [Mobile='Mobile']
          */
          static Mobile = new ContactPhoneType("Mobile");
          /**
             @property {Adaptive.ContactPhoneType} [Work='Work']
          */
          static Work = new ContactPhoneType("Work");
          /**
             @property {Adaptive.ContactPhoneType} [Home='Home']
          */
          static Home = new ContactPhoneType("Home");
          /**
             @property {Adaptive.ContactPhoneType} [Main='Main']
          */
          static Main = new ContactPhoneType("Main");
          /**
             @property {Adaptive.ContactPhoneType} [HomeFax='HomeFax']
          */
          static HomeFax = new ContactPhoneType("HomeFax");
          /**
             @property {Adaptive.ContactPhoneType} [WorkFax='WorkFax']
          */
          static WorkFax = new ContactPhoneType("WorkFax");
          /**
             @property {Adaptive.ContactPhoneType} [Other='Other']
          */
          static Other = new ContactPhoneType("Other");
          /**
             @property {Adaptive.ContactPhoneType} [Unknown='Unknown']
          */
          static Unknown = new ContactPhoneType("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ContactPhoneType}
          */
          static toObject(object : any) : ContactPhoneType {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Mobile":
                              return ContactPhoneType.Mobile;
                         case "Work":
                              return ContactPhoneType.Work;
                         case "Home":
                              return ContactPhoneType.Home;
                         case "Main":
                              return ContactPhoneType.Main;
                         case "HomeFax":
                              return ContactPhoneType.HomeFax;
                         case "WorkFax":
                              return ContactPhoneType.WorkFax;
                         case "Other":
                              return ContactPhoneType.Other;
                         case "Unknown":
                              return ContactPhoneType.Unknown;
                         default:
                              return ContactPhoneType.Unknown;
                    }
               } else {
                    return ContactPhoneType.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ContactSocialNetwork} Adaptive.ContactSocialNetwork
        Enumeration ContactSocialNetwork
     */
     export class ContactSocialNetwork {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ContactSocialNetwork} [Twitter='Twitter']
          */
          static Twitter = new ContactSocialNetwork("Twitter");
          /**
             @property {Adaptive.ContactSocialNetwork} [Facebook='Facebook']
          */
          static Facebook = new ContactSocialNetwork("Facebook");
          /**
             @property {Adaptive.ContactSocialNetwork} [GooglePlus='GooglePlus']
          */
          static GooglePlus = new ContactSocialNetwork("GooglePlus");
          /**
             @property {Adaptive.ContactSocialNetwork} [LinkedIn='LinkedIn']
          */
          static LinkedIn = new ContactSocialNetwork("LinkedIn");
          /**
             @property {Adaptive.ContactSocialNetwork} [Flickr='Flickr']
          */
          static Flickr = new ContactSocialNetwork("Flickr");
          /**
             @property {Adaptive.ContactSocialNetwork} [Unknown='Unknown']
          */
          static Unknown = new ContactSocialNetwork("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ContactSocialNetwork}
          */
          static toObject(object : any) : ContactSocialNetwork {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Twitter":
                              return ContactSocialNetwork.Twitter;
                         case "Facebook":
                              return ContactSocialNetwork.Facebook;
                         case "GooglePlus":
                              return ContactSocialNetwork.GooglePlus;
                         case "LinkedIn":
                              return ContactSocialNetwork.LinkedIn;
                         case "Flickr":
                              return ContactSocialNetwork.Flickr;
                         case "Unknown":
                              return ContactSocialNetwork.Unknown;
                         default:
                              return ContactSocialNetwork.Unknown;
                    }
               } else {
                    return ContactSocialNetwork.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IAccelerationListenerError} Adaptive.IAccelerationListenerError
        Enumeration IAccelerationListenerError
     */
     export class IAccelerationListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IAccelerationListenerError} [Unauthorized='Unauthorized']
          */
          static Unauthorized = new IAccelerationListenerError("Unauthorized");
          /**
             @property {Adaptive.IAccelerationListenerError} [Unavailable='Unavailable']
          */
          static Unavailable = new IAccelerationListenerError("Unavailable");
          /**
             @property {Adaptive.IAccelerationListenerError} [Unknown='Unknown']
          */
          static Unknown = new IAccelerationListenerError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IAccelerationListenerError}
          */
          static toObject(object : any) : IAccelerationListenerError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Unauthorized":
                              return IAccelerationListenerError.Unauthorized;
                         case "Unavailable":
                              return IAccelerationListenerError.Unavailable;
                         case "Unknown":
                              return IAccelerationListenerError.Unknown;
                         default:
                              return IAccelerationListenerError.Unknown;
                    }
               } else {
                    return IAccelerationListenerError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IAccelerationListenerWarning} Adaptive.IAccelerationListenerWarning
        Enumeration IAccelerationListenerWarning
     */
     export class IAccelerationListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IAccelerationListenerWarning} [NeedsCalibration='NeedsCalibration']
          */
          static NeedsCalibration = new IAccelerationListenerWarning("NeedsCalibration");
          /**
             @property {Adaptive.IAccelerationListenerWarning} [Stale='Stale']
          */
          static Stale = new IAccelerationListenerWarning("Stale");
          /**
             @property {Adaptive.IAccelerationListenerWarning} [Unknown='Unknown']
          */
          static Unknown = new IAccelerationListenerWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IAccelerationListenerWarning}
          */
          static toObject(object : any) : IAccelerationListenerWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "NeedsCalibration":
                              return IAccelerationListenerWarning.NeedsCalibration;
                         case "Stale":
                              return IAccelerationListenerWarning.Stale;
                         case "Unknown":
                              return IAccelerationListenerWarning.Unknown;
                         default:
                              return IAccelerationListenerWarning.Unknown;
                    }
               } else {
                    return IAccelerationListenerWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IAdaptiveRPGroup} Adaptive.IAdaptiveRPGroup
        Enumeration IAdaptiveRPGroup
     */
     export class IAdaptiveRPGroup {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IAdaptiveRPGroup} [Application='Application']
          */
          static Application = new IAdaptiveRPGroup("Application");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Commerce='Commerce']
          */
          static Commerce = new IAdaptiveRPGroup("Commerce");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Communication='Communication']
          */
          static Communication = new IAdaptiveRPGroup("Communication");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Data='Data']
          */
          static Data = new IAdaptiveRPGroup("Data");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Media='Media']
          */
          static Media = new IAdaptiveRPGroup("Media");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Notification='Notification']
          */
          static Notification = new IAdaptiveRPGroup("Notification");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [PIM='PIM']
          */
          static PIM = new IAdaptiveRPGroup("PIM");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Reader='Reader']
          */
          static Reader = new IAdaptiveRPGroup("Reader");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Security='Security']
          */
          static Security = new IAdaptiveRPGroup("Security");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Sensor='Sensor']
          */
          static Sensor = new IAdaptiveRPGroup("Sensor");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Social='Social']
          */
          static Social = new IAdaptiveRPGroup("Social");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [System='System']
          */
          static System = new IAdaptiveRPGroup("System");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [UI='UI']
          */
          static UI = new IAdaptiveRPGroup("UI");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Util='Util']
          */
          static Util = new IAdaptiveRPGroup("Util");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Kernel='Kernel']
          */
          static Kernel = new IAdaptiveRPGroup("Kernel");
          /**
             @property {Adaptive.IAdaptiveRPGroup} [Unknown='Unknown']
          */
          static Unknown = new IAdaptiveRPGroup("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IAdaptiveRPGroup}
          */
          static toObject(object : any) : IAdaptiveRPGroup {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Application":
                              return IAdaptiveRPGroup.Application;
                         case "Commerce":
                              return IAdaptiveRPGroup.Commerce;
                         case "Communication":
                              return IAdaptiveRPGroup.Communication;
                         case "Data":
                              return IAdaptiveRPGroup.Data;
                         case "Media":
                              return IAdaptiveRPGroup.Media;
                         case "Notification":
                              return IAdaptiveRPGroup.Notification;
                         case "PIM":
                              return IAdaptiveRPGroup.PIM;
                         case "Reader":
                              return IAdaptiveRPGroup.Reader;
                         case "Security":
                              return IAdaptiveRPGroup.Security;
                         case "Sensor":
                              return IAdaptiveRPGroup.Sensor;
                         case "Social":
                              return IAdaptiveRPGroup.Social;
                         case "System":
                              return IAdaptiveRPGroup.System;
                         case "UI":
                              return IAdaptiveRPGroup.UI;
                         case "Util":
                              return IAdaptiveRPGroup.Util;
                         case "Kernel":
                              return IAdaptiveRPGroup.Kernel;
                         case "Unknown":
                              return IAdaptiveRPGroup.Unknown;
                         default:
                              return IAdaptiveRPGroup.Unknown;
                    }
               } else {
                    return IAdaptiveRPGroup.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IButtonListenerError} Adaptive.IButtonListenerError
        Enumeration IButtonListenerError
     */
     export class IButtonListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IButtonListenerError} [Not_Present='Not_Present']
          */
          static Not_Present = new IButtonListenerError("Not_Present");
          /**
             @property {Adaptive.IButtonListenerError} [Unknown='Unknown']
          */
          static Unknown = new IButtonListenerError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IButtonListenerError}
          */
          static toObject(object : any) : IButtonListenerError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Not_Present":
                              return IButtonListenerError.Not_Present;
                         case "Unknown":
                              return IButtonListenerError.Unknown;
                         default:
                              return IButtonListenerError.Unknown;
                    }
               } else {
                    return IButtonListenerError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IButtonListenerWarning} Adaptive.IButtonListenerWarning
        Enumeration IButtonListenerWarning
     */
     export class IButtonListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IButtonListenerWarning} [Not_Implemented='Not_Implemented']
          */
          static Not_Implemented = new IButtonListenerWarning("Not_Implemented");
          /**
             @property {Adaptive.IButtonListenerWarning} [Unknown='Unknown']
          */
          static Unknown = new IButtonListenerWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IButtonListenerWarning}
          */
          static toObject(object : any) : IButtonListenerWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Not_Implemented":
                              return IButtonListenerWarning.Not_Implemented;
                         case "Unknown":
                              return IButtonListenerWarning.Unknown;
                         default:
                              return IButtonListenerWarning.Unknown;
                    }
               } else {
                    return IButtonListenerWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ICapabilitiesButton} Adaptive.ICapabilitiesButton
        Enumeration ICapabilitiesButton
     */
     export class ICapabilitiesButton {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesButton} [HomeButton='HomeButton']
          */
          static HomeButton = new ICapabilitiesButton("HomeButton");
          /**
             @property {Adaptive.ICapabilitiesButton} [BackButton='BackButton']
          */
          static BackButton = new ICapabilitiesButton("BackButton");
          /**
             @property {Adaptive.ICapabilitiesButton} [OptionButton='OptionButton']
          */
          static OptionButton = new ICapabilitiesButton("OptionButton");
          /**
             @property {Adaptive.ICapabilitiesButton} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesButton("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesButton}
          */
          static toObject(object : any) : ICapabilitiesButton {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "HomeButton":
                              return ICapabilitiesButton.HomeButton;
                         case "BackButton":
                              return ICapabilitiesButton.BackButton;
                         case "OptionButton":
                              return ICapabilitiesButton.OptionButton;
                         case "Unknown":
                              return ICapabilitiesButton.Unknown;
                         default:
                              return ICapabilitiesButton.Unknown;
                    }
               } else {
                    return ICapabilitiesButton.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ICapabilitiesCommunication} Adaptive.ICapabilitiesCommunication
        Enumeration ICapabilitiesCommunication
     */
     export class ICapabilitiesCommunication {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesCommunication} [Calendar='Calendar']
          */
          static Calendar = new ICapabilitiesCommunication("Calendar");
          /**
             @property {Adaptive.ICapabilitiesCommunication} [Contact='Contact']
          */
          static Contact = new ICapabilitiesCommunication("Contact");
          /**
             @property {Adaptive.ICapabilitiesCommunication} [Mail='Mail']
          */
          static Mail = new ICapabilitiesCommunication("Mail");
          /**
             @property {Adaptive.ICapabilitiesCommunication} [Messaging='Messaging']
          */
          static Messaging = new ICapabilitiesCommunication("Messaging");
          /**
             @property {Adaptive.ICapabilitiesCommunication} [Telephony='Telephony']
          */
          static Telephony = new ICapabilitiesCommunication("Telephony");
          /**
             @property {Adaptive.ICapabilitiesCommunication} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesCommunication("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesCommunication}
          */
          static toObject(object : any) : ICapabilitiesCommunication {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Calendar":
                              return ICapabilitiesCommunication.Calendar;
                         case "Contact":
                              return ICapabilitiesCommunication.Contact;
                         case "Mail":
                              return ICapabilitiesCommunication.Mail;
                         case "Messaging":
                              return ICapabilitiesCommunication.Messaging;
                         case "Telephony":
                              return ICapabilitiesCommunication.Telephony;
                         case "Unknown":
                              return ICapabilitiesCommunication.Unknown;
                         default:
                              return ICapabilitiesCommunication.Unknown;
                    }
               } else {
                    return ICapabilitiesCommunication.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ICapabilitiesData} Adaptive.ICapabilitiesData
        Enumeration ICapabilitiesData
     */
     export class ICapabilitiesData {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesData} [Database='Database']
          */
          static Database = new ICapabilitiesData("Database");
          /**
             @property {Adaptive.ICapabilitiesData} [File='File']
          */
          static File = new ICapabilitiesData("File");
          /**
             @property {Adaptive.ICapabilitiesData} [Cloud='Cloud']
          */
          static Cloud = new ICapabilitiesData("Cloud");
          /**
             @property {Adaptive.ICapabilitiesData} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesData("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesData}
          */
          static toObject(object : any) : ICapabilitiesData {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Database":
                              return ICapabilitiesData.Database;
                         case "File":
                              return ICapabilitiesData.File;
                         case "Cloud":
                              return ICapabilitiesData.Cloud;
                         case "Unknown":
                              return ICapabilitiesData.Unknown;
                         default:
                              return ICapabilitiesData.Unknown;
                    }
               } else {
                    return ICapabilitiesData.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ICapabilitiesMedia} Adaptive.ICapabilitiesMedia
        Enumeration ICapabilitiesMedia
     */
     export class ICapabilitiesMedia {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesMedia} [Audio_Playback='Audio_Playback']
          */
          static Audio_Playback = new ICapabilitiesMedia("Audio_Playback");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Audio_Recording='Audio_Recording']
          */
          static Audio_Recording = new ICapabilitiesMedia("Audio_Recording");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Camera='Camera']
          */
          static Camera = new ICapabilitiesMedia("Camera");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Video_Playback='Video_Playback']
          */
          static Video_Playback = new ICapabilitiesMedia("Video_Playback");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Video_Recording='Video_Recording']
          */
          static Video_Recording = new ICapabilitiesMedia("Video_Recording");
          /**
             @property {Adaptive.ICapabilitiesMedia} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesMedia("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesMedia}
          */
          static toObject(object : any) : ICapabilitiesMedia {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Audio_Playback":
                              return ICapabilitiesMedia.Audio_Playback;
                         case "Audio_Recording":
                              return ICapabilitiesMedia.Audio_Recording;
                         case "Camera":
                              return ICapabilitiesMedia.Camera;
                         case "Video_Playback":
                              return ICapabilitiesMedia.Video_Playback;
                         case "Video_Recording":
                              return ICapabilitiesMedia.Video_Recording;
                         case "Unknown":
                              return ICapabilitiesMedia.Unknown;
                         default:
                              return ICapabilitiesMedia.Unknown;
                    }
               } else {
                    return ICapabilitiesMedia.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ICapabilitiesNet} Adaptive.ICapabilitiesNet
        Enumeration ICapabilitiesNet
     */
     export class ICapabilitiesNet {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesNet} [GSM='GSM']
          */
          static GSM = new ICapabilitiesNet("GSM");
          /**
             @property {Adaptive.ICapabilitiesNet} [GPRS='GPRS']
          */
          static GPRS = new ICapabilitiesNet("GPRS");
          /**
             @property {Adaptive.ICapabilitiesNet} [HSDPA='HSDPA']
          */
          static HSDPA = new ICapabilitiesNet("HSDPA");
          /**
             @property {Adaptive.ICapabilitiesNet} [LTE='LTE']
          */
          static LTE = new ICapabilitiesNet("LTE");
          /**
             @property {Adaptive.ICapabilitiesNet} [WIFI='WIFI']
          */
          static WIFI = new ICapabilitiesNet("WIFI");
          /**
             @property {Adaptive.ICapabilitiesNet} [Ethernet='Ethernet']
          */
          static Ethernet = new ICapabilitiesNet("Ethernet");
          /**
             @property {Adaptive.ICapabilitiesNet} [Unavailable='Unavailable']
          */
          static Unavailable = new ICapabilitiesNet("Unavailable");
          /**
             @property {Adaptive.ICapabilitiesNet} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesNet("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesNet}
          */
          static toObject(object : any) : ICapabilitiesNet {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "GSM":
                              return ICapabilitiesNet.GSM;
                         case "GPRS":
                              return ICapabilitiesNet.GPRS;
                         case "HSDPA":
                              return ICapabilitiesNet.HSDPA;
                         case "LTE":
                              return ICapabilitiesNet.LTE;
                         case "WIFI":
                              return ICapabilitiesNet.WIFI;
                         case "Ethernet":
                              return ICapabilitiesNet.Ethernet;
                         case "Unavailable":
                              return ICapabilitiesNet.Unavailable;
                         case "Unknown":
                              return ICapabilitiesNet.Unknown;
                         default:
                              return ICapabilitiesNet.Unknown;
                    }
               } else {
                    return ICapabilitiesNet.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ICapabilitiesNotification} Adaptive.ICapabilitiesNotification
        Enumeration ICapabilitiesNotification
     */
     export class ICapabilitiesNotification {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesNotification} [Alarm='Alarm']
          */
          static Alarm = new ICapabilitiesNotification("Alarm");
          /**
             @property {Adaptive.ICapabilitiesNotification} [LocalNotification='LocalNotification']
          */
          static LocalNotification = new ICapabilitiesNotification("LocalNotification");
          /**
             @property {Adaptive.ICapabilitiesNotification} [RemoteNotification='RemoteNotification']
          */
          static RemoteNotification = new ICapabilitiesNotification("RemoteNotification");
          /**
             @property {Adaptive.ICapabilitiesNotification} [Vibration='Vibration']
          */
          static Vibration = new ICapabilitiesNotification("Vibration");
          /**
             @property {Adaptive.ICapabilitiesNotification} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesNotification("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesNotification}
          */
          static toObject(object : any) : ICapabilitiesNotification {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Alarm":
                              return ICapabilitiesNotification.Alarm;
                         case "LocalNotification":
                              return ICapabilitiesNotification.LocalNotification;
                         case "RemoteNotification":
                              return ICapabilitiesNotification.RemoteNotification;
                         case "Vibration":
                              return ICapabilitiesNotification.Vibration;
                         case "Unknown":
                              return ICapabilitiesNotification.Unknown;
                         default:
                              return ICapabilitiesNotification.Unknown;
                    }
               } else {
                    return ICapabilitiesNotification.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ICapabilitiesSensor} Adaptive.ICapabilitiesSensor
        Enumeration ICapabilitiesSensor
     */
     export class ICapabilitiesSensor {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ICapabilitiesSensor} [Accelerometer='Accelerometer']
          */
          static Accelerometer = new ICapabilitiesSensor("Accelerometer");
          /**
             @property {Adaptive.ICapabilitiesSensor} [AmbientLight='AmbientLight']
          */
          static AmbientLight = new ICapabilitiesSensor("AmbientLight");
          /**
             @property {Adaptive.ICapabilitiesSensor} [Barometer='Barometer']
          */
          static Barometer = new ICapabilitiesSensor("Barometer");
          /**
             @property {Adaptive.ICapabilitiesSensor} [Geolocation='Geolocation']
          */
          static Geolocation = new ICapabilitiesSensor("Geolocation");
          /**
             @property {Adaptive.ICapabilitiesSensor} [Gyroscope='Gyroscope']
          */
          static Gyroscope = new ICapabilitiesSensor("Gyroscope");
          /**
             @property {Adaptive.ICapabilitiesSensor} [Magnetometer='Magnetometer']
          */
          static Magnetometer = new ICapabilitiesSensor("Magnetometer");
          /**
             @property {Adaptive.ICapabilitiesSensor} [Proximity='Proximity']
          */
          static Proximity = new ICapabilitiesSensor("Proximity");
          /**
             @property {Adaptive.ICapabilitiesSensor} [Unknown='Unknown']
          */
          static Unknown = new ICapabilitiesSensor("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ICapabilitiesSensor}
          */
          static toObject(object : any) : ICapabilitiesSensor {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Accelerometer":
                              return ICapabilitiesSensor.Accelerometer;
                         case "AmbientLight":
                              return ICapabilitiesSensor.AmbientLight;
                         case "Barometer":
                              return ICapabilitiesSensor.Barometer;
                         case "Geolocation":
                              return ICapabilitiesSensor.Geolocation;
                         case "Gyroscope":
                              return ICapabilitiesSensor.Gyroscope;
                         case "Magnetometer":
                              return ICapabilitiesSensor.Magnetometer;
                         case "Proximity":
                              return ICapabilitiesSensor.Proximity;
                         case "Unknown":
                              return ICapabilitiesSensor.Unknown;
                         default:
                              return ICapabilitiesSensor.Unknown;
                    }
               } else {
                    return ICapabilitiesSensor.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IContactFieldGroup} Adaptive.IContactFieldGroup
        Enumeration IContactFieldGroup
     */
     export class IContactFieldGroup {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IContactFieldGroup} [PERSONAL_INFO='PERSONAL_INFO']
          */
          static PERSONAL_INFO = new IContactFieldGroup("PERSONAL_INFO");
          /**
             @property {Adaptive.IContactFieldGroup} [PROFESSIONAL_INFO='PROFESSIONAL_INFO']
          */
          static PROFESSIONAL_INFO = new IContactFieldGroup("PROFESSIONAL_INFO");
          /**
             @property {Adaptive.IContactFieldGroup} [ADDRESSES='ADDRESSES']
          */
          static ADDRESSES = new IContactFieldGroup("ADDRESSES");
          /**
             @property {Adaptive.IContactFieldGroup} [PHONES='PHONES']
          */
          static PHONES = new IContactFieldGroup("PHONES");
          /**
             @property {Adaptive.IContactFieldGroup} [EMAILS='EMAILS']
          */
          static EMAILS = new IContactFieldGroup("EMAILS");
          /**
             @property {Adaptive.IContactFieldGroup} [WEBSITES='WEBSITES']
          */
          static WEBSITES = new IContactFieldGroup("WEBSITES");
          /**
             @property {Adaptive.IContactFieldGroup} [SOCIALS='SOCIALS']
          */
          static SOCIALS = new IContactFieldGroup("SOCIALS");
          /**
             @property {Adaptive.IContactFieldGroup} [TAGS='TAGS']
          */
          static TAGS = new IContactFieldGroup("TAGS");
          /**
             @property {Adaptive.IContactFieldGroup} [Unknown='Unknown']
          */
          static Unknown = new IContactFieldGroup("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IContactFieldGroup}
          */
          static toObject(object : any) : IContactFieldGroup {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "PERSONAL_INFO":
                              return IContactFieldGroup.PERSONAL_INFO;
                         case "PROFESSIONAL_INFO":
                              return IContactFieldGroup.PROFESSIONAL_INFO;
                         case "ADDRESSES":
                              return IContactFieldGroup.ADDRESSES;
                         case "PHONES":
                              return IContactFieldGroup.PHONES;
                         case "EMAILS":
                              return IContactFieldGroup.EMAILS;
                         case "WEBSITES":
                              return IContactFieldGroup.WEBSITES;
                         case "SOCIALS":
                              return IContactFieldGroup.SOCIALS;
                         case "TAGS":
                              return IContactFieldGroup.TAGS;
                         case "Unknown":
                              return IContactFieldGroup.Unknown;
                         default:
                              return IContactFieldGroup.Unknown;
                    }
               } else {
                    return IContactFieldGroup.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IContactFilter} Adaptive.IContactFilter
        Enumeration IContactFilter
     */
     export class IContactFilter {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IContactFilter} [HAS_PHONE='HAS_PHONE']
          */
          static HAS_PHONE = new IContactFilter("HAS_PHONE");
          /**
             @property {Adaptive.IContactFilter} [HAS_EMAIL='HAS_EMAIL']
          */
          static HAS_EMAIL = new IContactFilter("HAS_EMAIL");
          /**
             @property {Adaptive.IContactFilter} [HAS_ADDRESS='HAS_ADDRESS']
          */
          static HAS_ADDRESS = new IContactFilter("HAS_ADDRESS");
          /**
             @property {Adaptive.IContactFilter} [Unknown='Unknown']
          */
          static Unknown = new IContactFilter("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IContactFilter}
          */
          static toObject(object : any) : IContactFilter {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "HAS_PHONE":
                              return IContactFilter.HAS_PHONE;
                         case "HAS_EMAIL":
                              return IContactFilter.HAS_EMAIL;
                         case "HAS_ADDRESS":
                              return IContactFilter.HAS_ADDRESS;
                         case "Unknown":
                              return IContactFilter.Unknown;
                         default:
                              return IContactFilter.Unknown;
                    }
               } else {
                    return IContactFilter.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IContactPhotoResultCallbackError} Adaptive.IContactPhotoResultCallbackError
        Enumeration IContactPhotoResultCallbackError
     */
     export class IContactPhotoResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IContactPhotoResultCallbackError} [NoPermission='NoPermission']
          */
          static NoPermission = new IContactPhotoResultCallbackError("NoPermission");
          /**
             @property {Adaptive.IContactPhotoResultCallbackError} [Wrong_Params='Wrong_Params']
          */
          static Wrong_Params = new IContactPhotoResultCallbackError("Wrong_Params");
          /**
             @property {Adaptive.IContactPhotoResultCallbackError} [No_Photo='No_Photo']
          */
          static No_Photo = new IContactPhotoResultCallbackError("No_Photo");
          /**
             @property {Adaptive.IContactPhotoResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IContactPhotoResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IContactPhotoResultCallbackError}
          */
          static toObject(object : any) : IContactPhotoResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "NoPermission":
                              return IContactPhotoResultCallbackError.NoPermission;
                         case "Wrong_Params":
                              return IContactPhotoResultCallbackError.Wrong_Params;
                         case "No_Photo":
                              return IContactPhotoResultCallbackError.No_Photo;
                         case "Unknown":
                              return IContactPhotoResultCallbackError.Unknown;
                         default:
                              return IContactPhotoResultCallbackError.Unknown;
                    }
               } else {
                    return IContactPhotoResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IContactPhotoResultCallbackWarning} Adaptive.IContactPhotoResultCallbackWarning
        Enumeration IContactPhotoResultCallbackWarning
     */
     export class IContactPhotoResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IContactPhotoResultCallbackWarning} [LimitExceeded='LimitExceeded']
          */
          static LimitExceeded = new IContactPhotoResultCallbackWarning("LimitExceeded");
          /**
             @property {Adaptive.IContactPhotoResultCallbackWarning} [No_Matches='No_Matches']
          */
          static No_Matches = new IContactPhotoResultCallbackWarning("No_Matches");
          /**
             @property {Adaptive.IContactPhotoResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IContactPhotoResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IContactPhotoResultCallbackWarning}
          */
          static toObject(object : any) : IContactPhotoResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "LimitExceeded":
                              return IContactPhotoResultCallbackWarning.LimitExceeded;
                         case "No_Matches":
                              return IContactPhotoResultCallbackWarning.No_Matches;
                         case "Unknown":
                              return IContactPhotoResultCallbackWarning.Unknown;
                         default:
                              return IContactPhotoResultCallbackWarning.Unknown;
                    }
               } else {
                    return IContactPhotoResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IContactResultCallbackError} Adaptive.IContactResultCallbackError
        Enumeration IContactResultCallbackError
     */
     export class IContactResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IContactResultCallbackError} [NoPermission='NoPermission']
          */
          static NoPermission = new IContactResultCallbackError("NoPermission");
          /**
             @property {Adaptive.IContactResultCallbackError} [Wrong_Params='Wrong_Params']
          */
          static Wrong_Params = new IContactResultCallbackError("Wrong_Params");
          /**
             @property {Adaptive.IContactResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IContactResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IContactResultCallbackError}
          */
          static toObject(object : any) : IContactResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "NoPermission":
                              return IContactResultCallbackError.NoPermission;
                         case "Wrong_Params":
                              return IContactResultCallbackError.Wrong_Params;
                         case "Unknown":
                              return IContactResultCallbackError.Unknown;
                         default:
                              return IContactResultCallbackError.Unknown;
                    }
               } else {
                    return IContactResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IContactResultCallbackWarning} Adaptive.IContactResultCallbackWarning
        Enumeration IContactResultCallbackWarning
     */
     export class IContactResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IContactResultCallbackWarning} [LimitExceeded='LimitExceeded']
          */
          static LimitExceeded = new IContactResultCallbackWarning("LimitExceeded");
          /**
             @property {Adaptive.IContactResultCallbackWarning} [No_Matches='No_Matches']
          */
          static No_Matches = new IContactResultCallbackWarning("No_Matches");
          /**
             @property {Adaptive.IContactResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IContactResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IContactResultCallbackWarning}
          */
          static toObject(object : any) : IContactResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "LimitExceeded":
                              return IContactResultCallbackWarning.LimitExceeded;
                         case "No_Matches":
                              return IContactResultCallbackWarning.No_Matches;
                         case "Unknown":
                              return IContactResultCallbackWarning.Unknown;
                         default:
                              return IContactResultCallbackWarning.Unknown;
                    }
               } else {
                    return IContactResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IDatabaseResultCallbackError} Adaptive.IDatabaseResultCallbackError
        Enumeration IDatabaseResultCallbackError
     */
     export class IDatabaseResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IDatabaseResultCallbackError} [NoSpace='NoSpace']
          */
          static NoSpace = new IDatabaseResultCallbackError("NoSpace");
          /**
             @property {Adaptive.IDatabaseResultCallbackError} [SqlException='SqlException']
          */
          static SqlException = new IDatabaseResultCallbackError("SqlException");
          /**
             @property {Adaptive.IDatabaseResultCallbackError} [NotDeleted='NotDeleted']
          */
          static NotDeleted = new IDatabaseResultCallbackError("NotDeleted");
          /**
             @property {Adaptive.IDatabaseResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IDatabaseResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IDatabaseResultCallbackError}
          */
          static toObject(object : any) : IDatabaseResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "NoSpace":
                              return IDatabaseResultCallbackError.NoSpace;
                         case "SqlException":
                              return IDatabaseResultCallbackError.SqlException;
                         case "NotDeleted":
                              return IDatabaseResultCallbackError.NotDeleted;
                         case "Unknown":
                              return IDatabaseResultCallbackError.Unknown;
                         default:
                              return IDatabaseResultCallbackError.Unknown;
                    }
               } else {
                    return IDatabaseResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IDatabaseResultCallbackWarning} Adaptive.IDatabaseResultCallbackWarning
        Enumeration IDatabaseResultCallbackWarning
     */
     export class IDatabaseResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IDatabaseResultCallbackWarning} [DatabaseExists='DatabaseExists']
          */
          static DatabaseExists = new IDatabaseResultCallbackWarning("DatabaseExists");
          /**
             @property {Adaptive.IDatabaseResultCallbackWarning} [IsOpen='IsOpen']
          */
          static IsOpen = new IDatabaseResultCallbackWarning("IsOpen");
          /**
             @property {Adaptive.IDatabaseResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IDatabaseResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IDatabaseResultCallbackWarning}
          */
          static toObject(object : any) : IDatabaseResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "DatabaseExists":
                              return IDatabaseResultCallbackWarning.DatabaseExists;
                         case "IsOpen":
                              return IDatabaseResultCallbackWarning.IsOpen;
                         case "Unknown":
                              return IDatabaseResultCallbackWarning.Unknown;
                         default:
                              return IDatabaseResultCallbackWarning.Unknown;
                    }
               } else {
                    return IDatabaseResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IDatabaseTableResultCallbackError} Adaptive.IDatabaseTableResultCallbackError
        Enumeration IDatabaseTableResultCallbackError
     */
     export class IDatabaseTableResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IDatabaseTableResultCallbackError} [NoSpace='NoSpace']
          */
          static NoSpace = new IDatabaseTableResultCallbackError("NoSpace");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackError} [ReadOnlyTable='ReadOnlyTable']
          */
          static ReadOnlyTable = new IDatabaseTableResultCallbackError("ReadOnlyTable");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackError} [SqlException='SqlException']
          */
          static SqlException = new IDatabaseTableResultCallbackError("SqlException");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackError} [DatabaseNotFound='DatabaseNotFound']
          */
          static DatabaseNotFound = new IDatabaseTableResultCallbackError("DatabaseNotFound");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackError} [NoTableFound='NoTableFound']
          */
          static NoTableFound = new IDatabaseTableResultCallbackError("NoTableFound");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IDatabaseTableResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IDatabaseTableResultCallbackError}
          */
          static toObject(object : any) : IDatabaseTableResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "NoSpace":
                              return IDatabaseTableResultCallbackError.NoSpace;
                         case "ReadOnlyTable":
                              return IDatabaseTableResultCallbackError.ReadOnlyTable;
                         case "SqlException":
                              return IDatabaseTableResultCallbackError.SqlException;
                         case "DatabaseNotFound":
                              return IDatabaseTableResultCallbackError.DatabaseNotFound;
                         case "NoTableFound":
                              return IDatabaseTableResultCallbackError.NoTableFound;
                         case "Unknown":
                              return IDatabaseTableResultCallbackError.Unknown;
                         default:
                              return IDatabaseTableResultCallbackError.Unknown;
                    }
               } else {
                    return IDatabaseTableResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IDatabaseTableResultCallbackWarning} Adaptive.IDatabaseTableResultCallbackWarning
        Enumeration IDatabaseTableResultCallbackWarning
     */
     export class IDatabaseTableResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IDatabaseTableResultCallbackWarning} [TableExists='TableExists']
          */
          static TableExists = new IDatabaseTableResultCallbackWarning("TableExists");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackWarning} [TableLocked='TableLocked']
          */
          static TableLocked = new IDatabaseTableResultCallbackWarning("TableLocked");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackWarning} [NoResults='NoResults']
          */
          static NoResults = new IDatabaseTableResultCallbackWarning("NoResults");
          /**
             @property {Adaptive.IDatabaseTableResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IDatabaseTableResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IDatabaseTableResultCallbackWarning}
          */
          static toObject(object : any) : IDatabaseTableResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "TableExists":
                              return IDatabaseTableResultCallbackWarning.TableExists;
                         case "TableLocked":
                              return IDatabaseTableResultCallbackWarning.TableLocked;
                         case "NoResults":
                              return IDatabaseTableResultCallbackWarning.NoResults;
                         case "Unknown":
                              return IDatabaseTableResultCallbackWarning.Unknown;
                         default:
                              return IDatabaseTableResultCallbackWarning.Unknown;
                    }
               } else {
                    return IDatabaseTableResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileDataLoadResultCallbackError} Adaptive.IFileDataLoadResultCallbackError
        Enumeration IFileDataLoadResultCallbackError
     */
     export class IFileDataLoadResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileDataLoadResultCallbackError} [InexistentFile='InexistentFile']
          */
          static InexistentFile = new IFileDataLoadResultCallbackError("InexistentFile");
          /**
             @property {Adaptive.IFileDataLoadResultCallbackError} [InsufficientSpace='InsufficientSpace']
          */
          static InsufficientSpace = new IFileDataLoadResultCallbackError("InsufficientSpace");
          /**
             @property {Adaptive.IFileDataLoadResultCallbackError} [Unauthorized='Unauthorized']
          */
          static Unauthorized = new IFileDataLoadResultCallbackError("Unauthorized");
          /**
             @property {Adaptive.IFileDataLoadResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IFileDataLoadResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileDataLoadResultCallbackError}
          */
          static toObject(object : any) : IFileDataLoadResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "InexistentFile":
                              return IFileDataLoadResultCallbackError.InexistentFile;
                         case "InsufficientSpace":
                              return IFileDataLoadResultCallbackError.InsufficientSpace;
                         case "Unauthorized":
                              return IFileDataLoadResultCallbackError.Unauthorized;
                         case "Unknown":
                              return IFileDataLoadResultCallbackError.Unknown;
                         default:
                              return IFileDataLoadResultCallbackError.Unknown;
                    }
               } else {
                    return IFileDataLoadResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileDataLoadResultCallbackWarning} Adaptive.IFileDataLoadResultCallbackWarning
        Enumeration IFileDataLoadResultCallbackWarning
     */
     export class IFileDataLoadResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileDataLoadResultCallbackWarning} [ExceedMaximumSize='ExceedMaximumSize']
          */
          static ExceedMaximumSize = new IFileDataLoadResultCallbackWarning("ExceedMaximumSize");
          /**
             @property {Adaptive.IFileDataLoadResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IFileDataLoadResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileDataLoadResultCallbackWarning}
          */
          static toObject(object : any) : IFileDataLoadResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "ExceedMaximumSize":
                              return IFileDataLoadResultCallbackWarning.ExceedMaximumSize;
                         case "Unknown":
                              return IFileDataLoadResultCallbackWarning.Unknown;
                         default:
                              return IFileDataLoadResultCallbackWarning.Unknown;
                    }
               } else {
                    return IFileDataLoadResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileDataStoreResultCallbackError} Adaptive.IFileDataStoreResultCallbackError
        Enumeration IFileDataStoreResultCallbackError
     */
     export class IFileDataStoreResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileDataStoreResultCallbackError} [InexistentFile='InexistentFile']
          */
          static InexistentFile = new IFileDataStoreResultCallbackError("InexistentFile");
          /**
             @property {Adaptive.IFileDataStoreResultCallbackError} [InsufficientSpace='InsufficientSpace']
          */
          static InsufficientSpace = new IFileDataStoreResultCallbackError("InsufficientSpace");
          /**
             @property {Adaptive.IFileDataStoreResultCallbackError} [Unauthorized='Unauthorized']
          */
          static Unauthorized = new IFileDataStoreResultCallbackError("Unauthorized");
          /**
             @property {Adaptive.IFileDataStoreResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IFileDataStoreResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileDataStoreResultCallbackError}
          */
          static toObject(object : any) : IFileDataStoreResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "InexistentFile":
                              return IFileDataStoreResultCallbackError.InexistentFile;
                         case "InsufficientSpace":
                              return IFileDataStoreResultCallbackError.InsufficientSpace;
                         case "Unauthorized":
                              return IFileDataStoreResultCallbackError.Unauthorized;
                         case "Unknown":
                              return IFileDataStoreResultCallbackError.Unknown;
                         default:
                              return IFileDataStoreResultCallbackError.Unknown;
                    }
               } else {
                    return IFileDataStoreResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileDataStoreResultCallbackWarning} Adaptive.IFileDataStoreResultCallbackWarning
        Enumeration IFileDataStoreResultCallbackWarning
     */
     export class IFileDataStoreResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileDataStoreResultCallbackWarning} [ExceedMaximumSize='ExceedMaximumSize']
          */
          static ExceedMaximumSize = new IFileDataStoreResultCallbackWarning("ExceedMaximumSize");
          /**
             @property {Adaptive.IFileDataStoreResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IFileDataStoreResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileDataStoreResultCallbackWarning}
          */
          static toObject(object : any) : IFileDataStoreResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "ExceedMaximumSize":
                              return IFileDataStoreResultCallbackWarning.ExceedMaximumSize;
                         case "Unknown":
                              return IFileDataStoreResultCallbackWarning.Unknown;
                         default:
                              return IFileDataStoreResultCallbackWarning.Unknown;
                    }
               } else {
                    return IFileDataStoreResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileListResultCallbackError} Adaptive.IFileListResultCallbackError
        Enumeration IFileListResultCallbackError
     */
     export class IFileListResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileListResultCallbackError} [InexistentFile='InexistentFile']
          */
          static InexistentFile = new IFileListResultCallbackError("InexistentFile");
          /**
             @property {Adaptive.IFileListResultCallbackError} [Unauthorized='Unauthorized']
          */
          static Unauthorized = new IFileListResultCallbackError("Unauthorized");
          /**
             @property {Adaptive.IFileListResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IFileListResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileListResultCallbackError}
          */
          static toObject(object : any) : IFileListResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "InexistentFile":
                              return IFileListResultCallbackError.InexistentFile;
                         case "Unauthorized":
                              return IFileListResultCallbackError.Unauthorized;
                         case "Unknown":
                              return IFileListResultCallbackError.Unknown;
                         default:
                              return IFileListResultCallbackError.Unknown;
                    }
               } else {
                    return IFileListResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileListResultCallbackWarning} Adaptive.IFileListResultCallbackWarning
        Enumeration IFileListResultCallbackWarning
     */
     export class IFileListResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileListResultCallbackWarning} [PartialResult='PartialResult']
          */
          static PartialResult = new IFileListResultCallbackWarning("PartialResult");
          /**
             @property {Adaptive.IFileListResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IFileListResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileListResultCallbackWarning}
          */
          static toObject(object : any) : IFileListResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "PartialResult":
                              return IFileListResultCallbackWarning.PartialResult;
                         case "Unknown":
                              return IFileListResultCallbackWarning.Unknown;
                         default:
                              return IFileListResultCallbackWarning.Unknown;
                    }
               } else {
                    return IFileListResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileResultCallbackError} Adaptive.IFileResultCallbackError
        Enumeration IFileResultCallbackError
     */
     export class IFileResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileResultCallbackError} [FileExists='FileExists']
          */
          static FileExists = new IFileResultCallbackError("FileExists");
          /**
             @property {Adaptive.IFileResultCallbackError} [SourceInexistent='SourceInexistent']
          */
          static SourceInexistent = new IFileResultCallbackError("SourceInexistent");
          /**
             @property {Adaptive.IFileResultCallbackError} [DestionationExists='DestionationExists']
          */
          static DestionationExists = new IFileResultCallbackError("DestionationExists");
          /**
             @property {Adaptive.IFileResultCallbackError} [InsufficientSpace='InsufficientSpace']
          */
          static InsufficientSpace = new IFileResultCallbackError("InsufficientSpace");
          /**
             @property {Adaptive.IFileResultCallbackError} [Unauthorized='Unauthorized']
          */
          static Unauthorized = new IFileResultCallbackError("Unauthorized");
          /**
             @property {Adaptive.IFileResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IFileResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileResultCallbackError}
          */
          static toObject(object : any) : IFileResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "FileExists":
                              return IFileResultCallbackError.FileExists;
                         case "SourceInexistent":
                              return IFileResultCallbackError.SourceInexistent;
                         case "DestionationExists":
                              return IFileResultCallbackError.DestionationExists;
                         case "InsufficientSpace":
                              return IFileResultCallbackError.InsufficientSpace;
                         case "Unauthorized":
                              return IFileResultCallbackError.Unauthorized;
                         case "Unknown":
                              return IFileResultCallbackError.Unknown;
                         default:
                              return IFileResultCallbackError.Unknown;
                    }
               } else {
                    return IFileResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileResultCallbackWarning} Adaptive.IFileResultCallbackWarning
        Enumeration IFileResultCallbackWarning
     */
     export class IFileResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileResultCallbackWarning} [SourceNotDeleted='SourceNotDeleted']
          */
          static SourceNotDeleted = new IFileResultCallbackWarning("SourceNotDeleted");
          /**
             @property {Adaptive.IFileResultCallbackWarning} [RootDirectory='RootDirectory']
          */
          static RootDirectory = new IFileResultCallbackWarning("RootDirectory");
          /**
             @property {Adaptive.IFileResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IFileResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileResultCallbackWarning}
          */
          static toObject(object : any) : IFileResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "SourceNotDeleted":
                              return IFileResultCallbackWarning.SourceNotDeleted;
                         case "RootDirectory":
                              return IFileResultCallbackWarning.RootDirectory;
                         case "Unknown":
                              return IFileResultCallbackWarning.Unknown;
                         default:
                              return IFileResultCallbackWarning.Unknown;
                    }
               } else {
                    return IFileResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileSystemSecurity} Adaptive.IFileSystemSecurity
        Enumeration IFileSystemSecurity
     */
     export class IFileSystemSecurity {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileSystemSecurity} [Default='Default']
          */
          static Default = new IFileSystemSecurity("Default");
          /**
             @property {Adaptive.IFileSystemSecurity} [Protected='Protected']
          */
          static Protected = new IFileSystemSecurity("Protected");
          /**
             @property {Adaptive.IFileSystemSecurity} [Encrypted='Encrypted']
          */
          static Encrypted = new IFileSystemSecurity("Encrypted");
          /**
             @property {Adaptive.IFileSystemSecurity} [Unknown='Unknown']
          */
          static Unknown = new IFileSystemSecurity("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileSystemSecurity}
          */
          static toObject(object : any) : IFileSystemSecurity {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Default":
                              return IFileSystemSecurity.Default;
                         case "Protected":
                              return IFileSystemSecurity.Protected;
                         case "Encrypted":
                              return IFileSystemSecurity.Encrypted;
                         case "Unknown":
                              return IFileSystemSecurity.Unknown;
                         default:
                              return IFileSystemSecurity.Unknown;
                    }
               } else {
                    return IFileSystemSecurity.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileSystemStorageType} Adaptive.IFileSystemStorageType
        Enumeration IFileSystemStorageType
     */
     export class IFileSystemStorageType {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileSystemStorageType} [Application='Application']
          */
          static Application = new IFileSystemStorageType("Application");
          /**
             @property {Adaptive.IFileSystemStorageType} [Document='Document']
          */
          static Document = new IFileSystemStorageType("Document");
          /**
             @property {Adaptive.IFileSystemStorageType} [Cloud='Cloud']
          */
          static Cloud = new IFileSystemStorageType("Cloud");
          /**
             @property {Adaptive.IFileSystemStorageType} [Protected='Protected']
          */
          static Protected = new IFileSystemStorageType("Protected");
          /**
             @property {Adaptive.IFileSystemStorageType} [Cache='Cache']
          */
          static Cache = new IFileSystemStorageType("Cache");
          /**
             @property {Adaptive.IFileSystemStorageType} [External='External']
          */
          static External = new IFileSystemStorageType("External");
          /**
             @property {Adaptive.IFileSystemStorageType} [Unknown='Unknown']
          */
          static Unknown = new IFileSystemStorageType("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileSystemStorageType}
          */
          static toObject(object : any) : IFileSystemStorageType {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Application":
                              return IFileSystemStorageType.Application;
                         case "Document":
                              return IFileSystemStorageType.Document;
                         case "Cloud":
                              return IFileSystemStorageType.Cloud;
                         case "Protected":
                              return IFileSystemStorageType.Protected;
                         case "Cache":
                              return IFileSystemStorageType.Cache;
                         case "External":
                              return IFileSystemStorageType.External;
                         case "Unknown":
                              return IFileSystemStorageType.Unknown;
                         default:
                              return IFileSystemStorageType.Unknown;
                    }
               } else {
                    return IFileSystemStorageType.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IFileSystemType} Adaptive.IFileSystemType
        Enumeration IFileSystemType
     */
     export class IFileSystemType {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IFileSystemType} [Directory='Directory']
          */
          static Directory = new IFileSystemType("Directory");
          /**
             @property {Adaptive.IFileSystemType} [File='File']
          */
          static File = new IFileSystemType("File");
          /**
             @property {Adaptive.IFileSystemType} [Unknown='Unknown']
          */
          static Unknown = new IFileSystemType("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IFileSystemType}
          */
          static toObject(object : any) : IFileSystemType {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Directory":
                              return IFileSystemType.Directory;
                         case "File":
                              return IFileSystemType.File;
                         case "Unknown":
                              return IFileSystemType.Unknown;
                         default:
                              return IFileSystemType.Unknown;
                    }
               } else {
                    return IFileSystemType.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IGeolocationListenerError} Adaptive.IGeolocationListenerError
        Enumeration IGeolocationListenerError
     */
     export class IGeolocationListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IGeolocationListenerError} [Disabled='Disabled']
          */
          static Disabled = new IGeolocationListenerError("Disabled");
          /**
             @property {Adaptive.IGeolocationListenerError} [RestrictedAccess='RestrictedAccess']
          */
          static RestrictedAccess = new IGeolocationListenerError("RestrictedAccess");
          /**
             @property {Adaptive.IGeolocationListenerError} [DeniedAccess='DeniedAccess']
          */
          static DeniedAccess = new IGeolocationListenerError("DeniedAccess");
          /**
             @property {Adaptive.IGeolocationListenerError} [StatusNotDetermined='StatusNotDetermined']
          */
          static StatusNotDetermined = new IGeolocationListenerError("StatusNotDetermined");
          /**
             @property {Adaptive.IGeolocationListenerError} [Unknown='Unknown']
          */
          static Unknown = new IGeolocationListenerError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IGeolocationListenerError}
          */
          static toObject(object : any) : IGeolocationListenerError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Disabled":
                              return IGeolocationListenerError.Disabled;
                         case "RestrictedAccess":
                              return IGeolocationListenerError.RestrictedAccess;
                         case "DeniedAccess":
                              return IGeolocationListenerError.DeniedAccess;
                         case "StatusNotDetermined":
                              return IGeolocationListenerError.StatusNotDetermined;
                         case "Unknown":
                              return IGeolocationListenerError.Unknown;
                         default:
                              return IGeolocationListenerError.Unknown;
                    }
               } else {
                    return IGeolocationListenerError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IGeolocationListenerWarning} Adaptive.IGeolocationListenerWarning
        Enumeration IGeolocationListenerWarning
     */
     export class IGeolocationListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IGeolocationListenerWarning} [HighDoP='HighDoP']
          */
          static HighDoP = new IGeolocationListenerWarning("HighDoP");
          /**
             @property {Adaptive.IGeolocationListenerWarning} [StaleData='StaleData']
          */
          static StaleData = new IGeolocationListenerWarning("StaleData");
          /**
             @property {Adaptive.IGeolocationListenerWarning} [Unknown='Unknown']
          */
          static Unknown = new IGeolocationListenerWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IGeolocationListenerWarning}
          */
          static toObject(object : any) : IGeolocationListenerWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "HighDoP":
                              return IGeolocationListenerWarning.HighDoP;
                         case "StaleData":
                              return IGeolocationListenerWarning.StaleData;
                         case "Unknown":
                              return IGeolocationListenerWarning.Unknown;
                         default:
                              return IGeolocationListenerWarning.Unknown;
                    }
               } else {
                    return IGeolocationListenerWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ILifecycleListenerError} Adaptive.ILifecycleListenerError
        Enumeration ILifecycleListenerError
     */
     export class ILifecycleListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ILifecycleListenerError} [Runtime='Runtime']
          */
          static Runtime = new ILifecycleListenerError("Runtime");
          /**
             @property {Adaptive.ILifecycleListenerError} [Implementation='Implementation']
          */
          static Implementation = new ILifecycleListenerError("Implementation");
          /**
             @property {Adaptive.ILifecycleListenerError} [Killed='Killed']
          */
          static Killed = new ILifecycleListenerError("Killed");
          /**
             @property {Adaptive.ILifecycleListenerError} [Unknown='Unknown']
          */
          static Unknown = new ILifecycleListenerError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ILifecycleListenerError}
          */
          static toObject(object : any) : ILifecycleListenerError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Runtime":
                              return ILifecycleListenerError.Runtime;
                         case "Implementation":
                              return ILifecycleListenerError.Implementation;
                         case "Killed":
                              return ILifecycleListenerError.Killed;
                         case "Unknown":
                              return ILifecycleListenerError.Unknown;
                         default:
                              return ILifecycleListenerError.Unknown;
                    }
               } else {
                    return ILifecycleListenerError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ILifecycleListenerWarning} Adaptive.ILifecycleListenerWarning
        Enumeration ILifecycleListenerWarning
     */
     export class ILifecycleListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ILifecycleListenerWarning} [MemoryLow='MemoryLow']
          */
          static MemoryLow = new ILifecycleListenerWarning("MemoryLow");
          /**
             @property {Adaptive.ILifecycleListenerWarning} [BatteryLow='BatteryLow']
          */
          static BatteryLow = new ILifecycleListenerWarning("BatteryLow");
          /**
             @property {Adaptive.ILifecycleListenerWarning} [Unknown='Unknown']
          */
          static Unknown = new ILifecycleListenerWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ILifecycleListenerWarning}
          */
          static toObject(object : any) : ILifecycleListenerWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "MemoryLow":
                              return ILifecycleListenerWarning.MemoryLow;
                         case "BatteryLow":
                              return ILifecycleListenerWarning.BatteryLow;
                         case "Unknown":
                              return ILifecycleListenerWarning.Unknown;
                         default:
                              return ILifecycleListenerWarning.Unknown;
                    }
               } else {
                    return ILifecycleListenerWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ILoggingLogLevel} Adaptive.ILoggingLogLevel
        Enumeration ILoggingLogLevel
     */
     export class ILoggingLogLevel {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ILoggingLogLevel} [DEBUG='DEBUG']
          */
          static DEBUG = new ILoggingLogLevel("DEBUG");
          /**
             @property {Adaptive.ILoggingLogLevel} [WARN='WARN']
          */
          static WARN = new ILoggingLogLevel("WARN");
          /**
             @property {Adaptive.ILoggingLogLevel} [ERROR='ERROR']
          */
          static ERROR = new ILoggingLogLevel("ERROR");
          /**
             @property {Adaptive.ILoggingLogLevel} [INFO='INFO']
          */
          static INFO = new ILoggingLogLevel("INFO");
          /**
             @property {Adaptive.ILoggingLogLevel} [Unknown='Unknown']
          */
          static Unknown = new ILoggingLogLevel("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ILoggingLogLevel}
          */
          static toObject(object : any) : ILoggingLogLevel {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "DEBUG":
                              return ILoggingLogLevel.DEBUG;
                         case "WARN":
                              return ILoggingLogLevel.WARN;
                         case "ERROR":
                              return ILoggingLogLevel.ERROR;
                         case "INFO":
                              return ILoggingLogLevel.INFO;
                         case "Unknown":
                              return ILoggingLogLevel.Unknown;
                         default:
                              return ILoggingLogLevel.Unknown;
                    }
               } else {
                    return ILoggingLogLevel.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IMessagingCallbackError} Adaptive.IMessagingCallbackError
        Enumeration IMessagingCallbackError
     */
     export class IMessagingCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IMessagingCallbackError} [SIMNotPresent='SIMNotPresent']
          */
          static SIMNotPresent = new IMessagingCallbackError("SIMNotPresent");
          /**
             @property {Adaptive.IMessagingCallbackError} [EmailAccountNotFound='EmailAccountNotFound']
          */
          static EmailAccountNotFound = new IMessagingCallbackError("EmailAccountNotFound");
          /**
             @property {Adaptive.IMessagingCallbackError} [NotSent='NotSent']
          */
          static NotSent = new IMessagingCallbackError("NotSent");
          /**
             @property {Adaptive.IMessagingCallbackError} [WrongParams='WrongParams']
          */
          static WrongParams = new IMessagingCallbackError("WrongParams");
          /**
             @property {Adaptive.IMessagingCallbackError} [NotSupported='NotSupported']
          */
          static NotSupported = new IMessagingCallbackError("NotSupported");
          /**
             @property {Adaptive.IMessagingCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IMessagingCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IMessagingCallbackError}
          */
          static toObject(object : any) : IMessagingCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "SIMNotPresent":
                              return IMessagingCallbackError.SIMNotPresent;
                         case "EmailAccountNotFound":
                              return IMessagingCallbackError.EmailAccountNotFound;
                         case "NotSent":
                              return IMessagingCallbackError.NotSent;
                         case "WrongParams":
                              return IMessagingCallbackError.WrongParams;
                         case "NotSupported":
                              return IMessagingCallbackError.NotSupported;
                         case "Unknown":
                              return IMessagingCallbackError.Unknown;
                         default:
                              return IMessagingCallbackError.Unknown;
                    }
               } else {
                    return IMessagingCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IMessagingCallbackWarning} Adaptive.IMessagingCallbackWarning
        Enumeration IMessagingCallbackWarning
     */
     export class IMessagingCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IMessagingCallbackWarning} [UnableToSentAll='UnableToSentAll']
          */
          static UnableToSentAll = new IMessagingCallbackWarning("UnableToSentAll");
          /**
             @property {Adaptive.IMessagingCallbackWarning} [UnableToFetchAttachment='UnableToFetchAttachment']
          */
          static UnableToFetchAttachment = new IMessagingCallbackWarning("UnableToFetchAttachment");
          /**
             @property {Adaptive.IMessagingCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IMessagingCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IMessagingCallbackWarning}
          */
          static toObject(object : any) : IMessagingCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "UnableToSentAll":
                              return IMessagingCallbackWarning.UnableToSentAll;
                         case "UnableToFetchAttachment":
                              return IMessagingCallbackWarning.UnableToFetchAttachment;
                         case "Unknown":
                              return IMessagingCallbackWarning.Unknown;
                         default:
                              return IMessagingCallbackWarning.Unknown;
                    }
               } else {
                    return IMessagingCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.INetworkReachabilityCallbackError} Adaptive.INetworkReachabilityCallbackError
        Enumeration INetworkReachabilityCallbackError
     */
     export class INetworkReachabilityCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [Forbidden='Forbidden']
          */
          static Forbidden = new INetworkReachabilityCallbackError("Forbidden");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [NotFound='NotFound']
          */
          static NotFound = new INetworkReachabilityCallbackError("NotFound");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [MethodNotAllowed='MethodNotAllowed']
          */
          static MethodNotAllowed = new INetworkReachabilityCallbackError("MethodNotAllowed");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [NotAllowed='NotAllowed']
          */
          static NotAllowed = new INetworkReachabilityCallbackError("NotAllowed");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [NotAuthenticated='NotAuthenticated']
          */
          static NotAuthenticated = new INetworkReachabilityCallbackError("NotAuthenticated");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [TimeOut='TimeOut']
          */
          static TimeOut = new INetworkReachabilityCallbackError("TimeOut");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [NoResponse='NoResponse']
          */
          static NoResponse = new INetworkReachabilityCallbackError("NoResponse");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [Unreachable='Unreachable']
          */
          static Unreachable = new INetworkReachabilityCallbackError("Unreachable");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [Wrong_Params='Wrong_Params']
          */
          static Wrong_Params = new INetworkReachabilityCallbackError("Wrong_Params");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [MalformedUrl='MalformedUrl']
          */
          static MalformedUrl = new INetworkReachabilityCallbackError("MalformedUrl");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [DomainUnresolvable='DomainUnresolvable']
          */
          static DomainUnresolvable = new INetworkReachabilityCallbackError("DomainUnresolvable");
          /**
             @property {Adaptive.INetworkReachabilityCallbackError} [Unknown='Unknown']
          */
          static Unknown = new INetworkReachabilityCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.INetworkReachabilityCallbackError}
          */
          static toObject(object : any) : INetworkReachabilityCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Forbidden":
                              return INetworkReachabilityCallbackError.Forbidden;
                         case "NotFound":
                              return INetworkReachabilityCallbackError.NotFound;
                         case "MethodNotAllowed":
                              return INetworkReachabilityCallbackError.MethodNotAllowed;
                         case "NotAllowed":
                              return INetworkReachabilityCallbackError.NotAllowed;
                         case "NotAuthenticated":
                              return INetworkReachabilityCallbackError.NotAuthenticated;
                         case "TimeOut":
                              return INetworkReachabilityCallbackError.TimeOut;
                         case "NoResponse":
                              return INetworkReachabilityCallbackError.NoResponse;
                         case "Unreachable":
                              return INetworkReachabilityCallbackError.Unreachable;
                         case "Wrong_Params":
                              return INetworkReachabilityCallbackError.Wrong_Params;
                         case "MalformedUrl":
                              return INetworkReachabilityCallbackError.MalformedUrl;
                         case "DomainUnresolvable":
                              return INetworkReachabilityCallbackError.DomainUnresolvable;
                         case "Unknown":
                              return INetworkReachabilityCallbackError.Unknown;
                         default:
                              return INetworkReachabilityCallbackError.Unknown;
                    }
               } else {
                    return INetworkReachabilityCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.INetworkReachabilityCallbackWarning} Adaptive.INetworkReachabilityCallbackWarning
        Enumeration INetworkReachabilityCallbackWarning
     */
     export class INetworkReachabilityCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.INetworkReachabilityCallbackWarning} [IncorrectScheme='IncorrectScheme']
          */
          static IncorrectScheme = new INetworkReachabilityCallbackWarning("IncorrectScheme");
          /**
             @property {Adaptive.INetworkReachabilityCallbackWarning} [NotSecure='NotSecure']
          */
          static NotSecure = new INetworkReachabilityCallbackWarning("NotSecure");
          /**
             @property {Adaptive.INetworkReachabilityCallbackWarning} [NotTrusted='NotTrusted']
          */
          static NotTrusted = new INetworkReachabilityCallbackWarning("NotTrusted");
          /**
             @property {Adaptive.INetworkReachabilityCallbackWarning} [Redirected='Redirected']
          */
          static Redirected = new INetworkReachabilityCallbackWarning("Redirected");
          /**
             @property {Adaptive.INetworkReachabilityCallbackWarning} [NotRegisteredService='NotRegisteredService']
          */
          static NotRegisteredService = new INetworkReachabilityCallbackWarning("NotRegisteredService");
          /**
             @property {Adaptive.INetworkReachabilityCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new INetworkReachabilityCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.INetworkReachabilityCallbackWarning}
          */
          static toObject(object : any) : INetworkReachabilityCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "IncorrectScheme":
                              return INetworkReachabilityCallbackWarning.IncorrectScheme;
                         case "NotSecure":
                              return INetworkReachabilityCallbackWarning.NotSecure;
                         case "NotTrusted":
                              return INetworkReachabilityCallbackWarning.NotTrusted;
                         case "Redirected":
                              return INetworkReachabilityCallbackWarning.Redirected;
                         case "NotRegisteredService":
                              return INetworkReachabilityCallbackWarning.NotRegisteredService;
                         case "Unknown":
                              return INetworkReachabilityCallbackWarning.Unknown;
                         default:
                              return INetworkReachabilityCallbackWarning.Unknown;
                    }
               } else {
                    return INetworkReachabilityCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.INetworkStatusListenerError} Adaptive.INetworkStatusListenerError
        Enumeration INetworkStatusListenerError
     */
     export class INetworkStatusListenerError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.INetworkStatusListenerError} [NoPermission='NoPermission']
          */
          static NoPermission = new INetworkStatusListenerError("NoPermission");
          /**
             @property {Adaptive.INetworkStatusListenerError} [Unreachable='Unreachable']
          */
          static Unreachable = new INetworkStatusListenerError("Unreachable");
          /**
             @property {Adaptive.INetworkStatusListenerError} [Unknown='Unknown']
          */
          static Unknown = new INetworkStatusListenerError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.INetworkStatusListenerError}
          */
          static toObject(object : any) : INetworkStatusListenerError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "NoPermission":
                              return INetworkStatusListenerError.NoPermission;
                         case "Unreachable":
                              return INetworkStatusListenerError.Unreachable;
                         case "Unknown":
                              return INetworkStatusListenerError.Unknown;
                         default:
                              return INetworkStatusListenerError.Unknown;
                    }
               } else {
                    return INetworkStatusListenerError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.INetworkStatusListenerWarning} Adaptive.INetworkStatusListenerWarning
        Enumeration INetworkStatusListenerWarning
     */
     export class INetworkStatusListenerWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.INetworkStatusListenerWarning} [IpAddressNotAssigned='IpAddressNotAssigned']
          */
          static IpAddressNotAssigned = new INetworkStatusListenerWarning("IpAddressNotAssigned");
          /**
             @property {Adaptive.INetworkStatusListenerWarning} [IpAddressChanged='IpAddressChanged']
          */
          static IpAddressChanged = new INetworkStatusListenerWarning("IpAddressChanged");
          /**
             @property {Adaptive.INetworkStatusListenerWarning} [Unknown='Unknown']
          */
          static Unknown = new INetworkStatusListenerWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.INetworkStatusListenerWarning}
          */
          static toObject(object : any) : INetworkStatusListenerWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "IpAddressNotAssigned":
                              return INetworkStatusListenerWarning.IpAddressNotAssigned;
                         case "IpAddressChanged":
                              return INetworkStatusListenerWarning.IpAddressChanged;
                         case "Unknown":
                              return INetworkStatusListenerWarning.Unknown;
                         default:
                              return INetworkStatusListenerWarning.Unknown;
                    }
               } else {
                    return INetworkStatusListenerWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IOSType} Adaptive.IOSType
        Enumeration IOSType
     */
     export class IOSType {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IOSType} [iOS='iOS']
          */
          static iOS = new IOSType("iOS");
          /**
             @property {Adaptive.IOSType} [OSX='OSX']
          */
          static OSX = new IOSType("OSX");
          /**
             @property {Adaptive.IOSType} [Windows='Windows']
          */
          static Windows = new IOSType("Windows");
          /**
             @property {Adaptive.IOSType} [WindowsPhone='WindowsPhone']
          */
          static WindowsPhone = new IOSType("WindowsPhone");
          /**
             @property {Adaptive.IOSType} [Android='Android']
          */
          static Android = new IOSType("Android");
          /**
             @property {Adaptive.IOSType} [Linux='Linux']
          */
          static Linux = new IOSType("Linux");
          /**
             @property {Adaptive.IOSType} [Blackberry='Blackberry']
          */
          static Blackberry = new IOSType("Blackberry");
          /**
             @property {Adaptive.IOSType} [Tizen='Tizen']
          */
          static Tizen = new IOSType("Tizen");
          /**
             @property {Adaptive.IOSType} [FirefoxOS='FirefoxOS']
          */
          static FirefoxOS = new IOSType("FirefoxOS");
          /**
             @property {Adaptive.IOSType} [Chromium='Chromium']
          */
          static Chromium = new IOSType("Chromium");
          /**
             @property {Adaptive.IOSType} [Unspecified='Unspecified']
          */
          static Unspecified = new IOSType("Unspecified");
          /**
             @property {Adaptive.IOSType} [Unknown='Unknown']
          */
          static Unknown = new IOSType("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IOSType}
          */
          static toObject(object : any) : IOSType {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "iOS":
                              return IOSType.iOS;
                         case "OSX":
                              return IOSType.OSX;
                         case "Windows":
                              return IOSType.Windows;
                         case "WindowsPhone":
                              return IOSType.WindowsPhone;
                         case "Android":
                              return IOSType.Android;
                         case "Linux":
                              return IOSType.Linux;
                         case "Blackberry":
                              return IOSType.Blackberry;
                         case "Tizen":
                              return IOSType.Tizen;
                         case "FirefoxOS":
                              return IOSType.FirefoxOS;
                         case "Chromium":
                              return IOSType.Chromium;
                         case "Unspecified":
                              return IOSType.Unspecified;
                         case "Unknown":
                              return IOSType.Unknown;
                         default:
                              return IOSType.Unknown;
                    }
               } else {
                    return IOSType.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ISecurityResultCallbackError} Adaptive.ISecurityResultCallbackError
        Enumeration ISecurityResultCallbackError
     */
     export class ISecurityResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ISecurityResultCallbackError} [NoPermission='NoPermission']
          */
          static NoPermission = new ISecurityResultCallbackError("NoPermission");
          /**
             @property {Adaptive.ISecurityResultCallbackError} [NoMatchesFound='NoMatchesFound']
          */
          static NoMatchesFound = new ISecurityResultCallbackError("NoMatchesFound");
          /**
             @property {Adaptive.ISecurityResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new ISecurityResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ISecurityResultCallbackError}
          */
          static toObject(object : any) : ISecurityResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "NoPermission":
                              return ISecurityResultCallbackError.NoPermission;
                         case "NoMatchesFound":
                              return ISecurityResultCallbackError.NoMatchesFound;
                         case "Unknown":
                              return ISecurityResultCallbackError.Unknown;
                         default:
                              return ISecurityResultCallbackError.Unknown;
                    }
               } else {
                    return ISecurityResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ISecurityResultCallbackWarning} Adaptive.ISecurityResultCallbackWarning
        Enumeration ISecurityResultCallbackWarning
     */
     export class ISecurityResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ISecurityResultCallbackWarning} [EntryOverride='EntryOverride']
          */
          static EntryOverride = new ISecurityResultCallbackWarning("EntryOverride");
          /**
             @property {Adaptive.ISecurityResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new ISecurityResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ISecurityResultCallbackWarning}
          */
          static toObject(object : any) : ISecurityResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "EntryOverride":
                              return ISecurityResultCallbackWarning.EntryOverride;
                         case "Unknown":
                              return ISecurityResultCallbackWarning.Unknown;
                         default:
                              return ISecurityResultCallbackWarning.Unknown;
                    }
               } else {
                    return ISecurityResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IServiceProtocolVersion} Adaptive.IServiceProtocolVersion
        Enumeration IServiceProtocolVersion
     */
     export class IServiceProtocolVersion {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IServiceProtocolVersion} [HttpProtocolVersion10='HttpProtocolVersion10']
          */
          static HttpProtocolVersion10 = new IServiceProtocolVersion("HttpProtocolVersion10");
          /**
             @property {Adaptive.IServiceProtocolVersion} [HttpProtocolVersion11='HttpProtocolVersion11']
          */
          static HttpProtocolVersion11 = new IServiceProtocolVersion("HttpProtocolVersion11");
          /**
             @property {Adaptive.IServiceProtocolVersion} [Unknown='Unknown']
          */
          static Unknown = new IServiceProtocolVersion("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IServiceProtocolVersion}
          */
          static toObject(object : any) : IServiceProtocolVersion {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "HttpProtocolVersion10":
                              return IServiceProtocolVersion.HttpProtocolVersion10;
                         case "HttpProtocolVersion11":
                              return IServiceProtocolVersion.HttpProtocolVersion11;
                         case "Unknown":
                              return IServiceProtocolVersion.Unknown;
                         default:
                              return IServiceProtocolVersion.Unknown;
                    }
               } else {
                    return IServiceProtocolVersion.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IServiceMethod} Adaptive.IServiceMethod
        Enumeration IServiceMethod
     */
     export class IServiceMethod {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IServiceMethod} [Post='Post']
          */
          static Post = new IServiceMethod("Post");
          /**
             @property {Adaptive.IServiceMethod} [Get='Get']
          */
          static Get = new IServiceMethod("Get");
          /**
             @property {Adaptive.IServiceMethod} [Unknown='Unknown']
          */
          static Unknown = new IServiceMethod("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IServiceMethod}
          */
          static toObject(object : any) : IServiceMethod {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Post":
                              return IServiceMethod.Post;
                         case "Get":
                              return IServiceMethod.Get;
                         case "Unknown":
                              return IServiceMethod.Unknown;
                         default:
                              return IServiceMethod.Unknown;
                    }
               } else {
                    return IServiceMethod.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IServiceType} Adaptive.IServiceType
        Enumeration IServiceType
     */
     export class IServiceType {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IServiceType} [ServiceTypeAmfSerialization='ServiceTypeAmfSerialization']
          */
          static ServiceTypeAmfSerialization = new IServiceType("ServiceTypeAmfSerialization");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeGwtRpc='ServiceTypeGwtRpc']
          */
          static ServiceTypeGwtRpc = new IServiceType("ServiceTypeGwtRpc");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeOctetBinary='ServiceTypeOctetBinary']
          */
          static ServiceTypeOctetBinary = new IServiceType("ServiceTypeOctetBinary");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeRemotingSerialization='ServiceTypeRemotingSerialization']
          */
          static ServiceTypeRemotingSerialization = new IServiceType("ServiceTypeRemotingSerialization");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeRestJson='ServiceTypeRestJson']
          */
          static ServiceTypeRestJson = new IServiceType("ServiceTypeRestJson");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeRestXml='ServiceTypeRestXml']
          */
          static ServiceTypeRestXml = new IServiceType("ServiceTypeRestXml");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeSoapJson='ServiceTypeSoapJson']
          */
          static ServiceTypeSoapJson = new IServiceType("ServiceTypeSoapJson");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeSoapXml='ServiceTypeSoapXml']
          */
          static ServiceTypeSoapXml = new IServiceType("ServiceTypeSoapXml");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeXmlRpcJson='ServiceTypeXmlRpcJson']
          */
          static ServiceTypeXmlRpcJson = new IServiceType("ServiceTypeXmlRpcJson");
          /**
             @property {Adaptive.IServiceType} [ServiceTypeXmlRpcXml='ServiceTypeXmlRpcXml']
          */
          static ServiceTypeXmlRpcXml = new IServiceType("ServiceTypeXmlRpcXml");
          /**
             @property {Adaptive.IServiceType} [Unknown='Unknown']
          */
          static Unknown = new IServiceType("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IServiceType}
          */
          static toObject(object : any) : IServiceType {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "ServiceTypeAmfSerialization":
                              return IServiceType.ServiceTypeAmfSerialization;
                         case "ServiceTypeGwtRpc":
                              return IServiceType.ServiceTypeGwtRpc;
                         case "ServiceTypeOctetBinary":
                              return IServiceType.ServiceTypeOctetBinary;
                         case "ServiceTypeRemotingSerialization":
                              return IServiceType.ServiceTypeRemotingSerialization;
                         case "ServiceTypeRestJson":
                              return IServiceType.ServiceTypeRestJson;
                         case "ServiceTypeRestXml":
                              return IServiceType.ServiceTypeRestXml;
                         case "ServiceTypeSoapJson":
                              return IServiceType.ServiceTypeSoapJson;
                         case "ServiceTypeSoapXml":
                              return IServiceType.ServiceTypeSoapXml;
                         case "ServiceTypeXmlRpcJson":
                              return IServiceType.ServiceTypeXmlRpcJson;
                         case "ServiceTypeXmlRpcXml":
                              return IServiceType.ServiceTypeXmlRpcXml;
                         case "Unknown":
                              return IServiceType.Unknown;
                         default:
                              return IServiceType.Unknown;
                    }
               } else {
                    return IServiceType.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IServiceResultCallbackError} Adaptive.IServiceResultCallbackError
        Enumeration IServiceResultCallbackError
     */
     export class IServiceResultCallbackError {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IServiceResultCallbackError} [Forbidden='Forbidden']
          */
          static Forbidden = new IServiceResultCallbackError("Forbidden");
          /**
             @property {Adaptive.IServiceResultCallbackError} [NotFound='NotFound']
          */
          static NotFound = new IServiceResultCallbackError("NotFound");
          /**
             @property {Adaptive.IServiceResultCallbackError} [MethodNotAllowed='MethodNotAllowed']
          */
          static MethodNotAllowed = new IServiceResultCallbackError("MethodNotAllowed");
          /**
             @property {Adaptive.IServiceResultCallbackError} [NotAllowed='NotAllowed']
          */
          static NotAllowed = new IServiceResultCallbackError("NotAllowed");
          /**
             @property {Adaptive.IServiceResultCallbackError} [NotAuthenticated='NotAuthenticated']
          */
          static NotAuthenticated = new IServiceResultCallbackError("NotAuthenticated");
          /**
             @property {Adaptive.IServiceResultCallbackError} [TimeOut='TimeOut']
          */
          static TimeOut = new IServiceResultCallbackError("TimeOut");
          /**
             @property {Adaptive.IServiceResultCallbackError} [NoResponse='NoResponse']
          */
          static NoResponse = new IServiceResultCallbackError("NoResponse");
          /**
             @property {Adaptive.IServiceResultCallbackError} [ServerError='ServerError']
          */
          static ServerError = new IServiceResultCallbackError("ServerError");
          /**
             @property {Adaptive.IServiceResultCallbackError} [Unreachable='Unreachable']
          */
          static Unreachable = new IServiceResultCallbackError("Unreachable");
          /**
             @property {Adaptive.IServiceResultCallbackError} [MalformedUrl='MalformedUrl']
          */
          static MalformedUrl = new IServiceResultCallbackError("MalformedUrl");
          /**
             @property {Adaptive.IServiceResultCallbackError} [NotRegisteredService='NotRegisteredService']
          */
          static NotRegisteredService = new IServiceResultCallbackError("NotRegisteredService");
          /**
             @property {Adaptive.IServiceResultCallbackError} [Unknown='Unknown']
          */
          static Unknown = new IServiceResultCallbackError("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IServiceResultCallbackError}
          */
          static toObject(object : any) : IServiceResultCallbackError {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Forbidden":
                              return IServiceResultCallbackError.Forbidden;
                         case "NotFound":
                              return IServiceResultCallbackError.NotFound;
                         case "MethodNotAllowed":
                              return IServiceResultCallbackError.MethodNotAllowed;
                         case "NotAllowed":
                              return IServiceResultCallbackError.NotAllowed;
                         case "NotAuthenticated":
                              return IServiceResultCallbackError.NotAuthenticated;
                         case "TimeOut":
                              return IServiceResultCallbackError.TimeOut;
                         case "NoResponse":
                              return IServiceResultCallbackError.NoResponse;
                         case "ServerError":
                              return IServiceResultCallbackError.ServerError;
                         case "Unreachable":
                              return IServiceResultCallbackError.Unreachable;
                         case "MalformedUrl":
                              return IServiceResultCallbackError.MalformedUrl;
                         case "NotRegisteredService":
                              return IServiceResultCallbackError.NotRegisteredService;
                         case "Unknown":
                              return IServiceResultCallbackError.Unknown;
                         default:
                              return IServiceResultCallbackError.Unknown;
                    }
               } else {
                    return IServiceResultCallbackError.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.IServiceResultCallbackWarning} Adaptive.IServiceResultCallbackWarning
        Enumeration IServiceResultCallbackWarning
     */
     export class IServiceResultCallbackWarning {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.IServiceResultCallbackWarning} [NotSecure='NotSecure']
          */
          static NotSecure = new IServiceResultCallbackWarning("NotSecure");
          /**
             @property {Adaptive.IServiceResultCallbackWarning} [NotTrusted='NotTrusted']
          */
          static NotTrusted = new IServiceResultCallbackWarning("NotTrusted");
          /**
             @property {Adaptive.IServiceResultCallbackWarning} [Redirected='Redirected']
          */
          static Redirected = new IServiceResultCallbackWarning("Redirected");
          /**
             @property {Adaptive.IServiceResultCallbackWarning} [Wrong_Params='Wrong_Params']
          */
          static Wrong_Params = new IServiceResultCallbackWarning("Wrong_Params");
          /**
             @property {Adaptive.IServiceResultCallbackWarning} [Unknown='Unknown']
          */
          static Unknown = new IServiceResultCallbackWarning("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.IServiceResultCallbackWarning}
          */
          static toObject(object : any) : IServiceResultCallbackWarning {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "NotSecure":
                              return IServiceResultCallbackWarning.NotSecure;
                         case "NotTrusted":
                              return IServiceResultCallbackWarning.NotTrusted;
                         case "Redirected":
                              return IServiceResultCallbackWarning.Redirected;
                         case "Wrong_Params":
                              return IServiceResultCallbackWarning.Wrong_Params;
                         case "Unknown":
                              return IServiceResultCallbackWarning.Unknown;
                         default:
                              return IServiceResultCallbackWarning.Unknown;
                    }
               } else {
                    return IServiceResultCallbackWarning.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.ITelephonyStatus} Adaptive.ITelephonyStatus
        Enumeration ITelephonyStatus
     */
     export class ITelephonyStatus {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.ITelephonyStatus} [Dialing='Dialing']
          */
          static Dialing = new ITelephonyStatus("Dialing");
          /**
             @property {Adaptive.ITelephonyStatus} [Failed='Failed']
          */
          static Failed = new ITelephonyStatus("Failed");
          /**
             @property {Adaptive.ITelephonyStatus} [Unknown='Unknown']
          */
          static Unknown = new ITelephonyStatus("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.ITelephonyStatus}
          */
          static toObject(object : any) : ITelephonyStatus {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Dialing":
                              return ITelephonyStatus.Dialing;
                         case "Failed":
                              return ITelephonyStatus.Failed;
                         case "Unknown":
                              return ITelephonyStatus.Unknown;
                         default:
                              return ITelephonyStatus.Unknown;
                    }
               } else {
                    return ITelephonyStatus.Unknown;
               }
          }

     }
     /**
        @enum {Adaptive.LifecycleState} Adaptive.LifecycleState
        Enumeration LifecycleState
     */
     export class LifecycleState {

          constructor(public value:string){}
          toString(){return this.value;}

          /**
             @property {Adaptive.LifecycleState} [Starting='Starting']
          */
          static Starting = new LifecycleState("Starting");
          /**
             @property {Adaptive.LifecycleState} [Started='Started']
          */
          static Started = new LifecycleState("Started");
          /**
             @property {Adaptive.LifecycleState} [Running='Running']
          */
          static Running = new LifecycleState("Running");
          /**
             @property {Adaptive.LifecycleState} [Pausing='Pausing']
          */
          static Pausing = new LifecycleState("Pausing");
          /**
             @property {Adaptive.LifecycleState} [PausedIdle='PausedIdle']
          */
          static PausedIdle = new LifecycleState("PausedIdle");
          /**
             @property {Adaptive.LifecycleState} [PausedRun='PausedRun']
          */
          static PausedRun = new LifecycleState("PausedRun");
          /**
             @property {Adaptive.LifecycleState} [Resuming='Resuming']
          */
          static Resuming = new LifecycleState("Resuming");
          /**
             @property {Adaptive.LifecycleState} [Stopping='Stopping']
          */
          static Stopping = new LifecycleState("Stopping");
          /**
             @property {Adaptive.LifecycleState} [Unknown='Unknown']
          */
          static Unknown = new LifecycleState("Unknown");

          /**
             @method
             @static
             Convert JSON parsed object to enumeration.
             @return {Adaptive.LifecycleState}
          */
          static toObject(object : any) : LifecycleState {
               if (object != null && object.value != null) {
                    switch(object.value) {
                         case "Starting":
                              return LifecycleState.Starting;
                         case "Started":
                              return LifecycleState.Started;
                         case "Running":
                              return LifecycleState.Running;
                         case "Pausing":
                              return LifecycleState.Pausing;
                         case "PausedIdle":
                              return LifecycleState.PausedIdle;
                         case "PausedRun":
                              return LifecycleState.PausedRun;
                         case "Resuming":
                              return LifecycleState.Resuming;
                         case "Stopping":
                              return LifecycleState.Stopping;
                         case "Unknown":
                              return LifecycleState.Unknown;
                         default:
                              return LifecycleState.Unknown;
                    }
               } else {
                    return LifecycleState.Unknown;
               }
          }

     }

}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/