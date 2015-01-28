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
       @property {number} registeredCounter
       Global unique id for listeners and callbacks.
    */
    var registeredCounter: number;
    /**
       @property {string} bridgePath
       Base url for for http/https JSON requests.
    */
    var bridgePath: string;
    /**
       @class Adaptive.IDictionary
       Utility interface for Dictionary type support.
    */
    interface IDictionary<V> {
        add(key: string, value: V): void;
        remove(key: string): void;
        containsKey(key: string): boolean;
        keys(): string[];
        values(): V[];
    }
    /**
       @class Adaptive.Dictionary
       Utility class for Dictionary type support.
    */
    class Dictionary<V> implements IDictionary<V> {
        _keys: string[];
        _values: V[];
        constructor(init: {
            key: string;
            value: V;
        }[]);
        add(key: string, value: V): void;
        remove(key: string): void;
        keys(): string[];
        values(): V[];
        containsKey(key: string): boolean;
        toLookup(): IDictionary<V>;
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
    interface APIBridge {
        /**
           @method
           Invokes the given method specified in the API request object.
           @param request APIRequest object containing method name and parameters.
           @return {Adaptive.APIResponse} Object with JSON response or a zero length string is the response is asynchronous.
        */
        invoke(request: APIRequest): APIResponse;
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
    interface IAdaptiveRP {
        /**
           @method
           Method that returns the API group of the implementation
           @return {Adaptive.IAdaptiveRPGroup} API Group name.
           @since ARP1.0
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Method that returns the API version of the implementation.
           @return {string} API Version string.
           @since ARP1.0
        */
        getAPIVersion(): string;
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
    interface IAppRegistry {
        /**
           @abstract
           Returns a reference to the registered AccelerationBridge.

           @return {Adaptive.AccelerationBridge} reference or null if a bridge of this type is not registered.
        */
        getAccelerationBridge(): IAcceleration;
        /**
           @abstract
           Returns a reference to the registered AdsBridge.

           @return {Adaptive.AdsBridge} reference or null if a bridge of this type is not registered.
        */
        getAdsBridge(): IAds;
        /**
           @abstract
           Returns a reference to the registered AlarmBridge.

           @return {Adaptive.AlarmBridge} reference or null if a bridge of this type is not registered.
        */
        getAlarmBridge(): IAlarm;
        /**
           @abstract
           Returns a reference to the registered AmbientLightBridge.

           @return {Adaptive.AmbientLightBridge} reference or null if a bridge of this type is not registered.
        */
        getAmbientLightBridge(): IAmbientLight;
        /**
           @abstract
           Returns a reference to the registered AnalyticsBridge.

           @return {Adaptive.AnalyticsBridge} reference or null if a bridge of this type is not registered.
        */
        getAnalyticsBridge(): IAnalytics;
        /**
           @abstract
           Returns a reference to the registered AudioBridge.

           @return {Adaptive.AudioBridge} reference or null if a bridge of this type is not registered.
        */
        getAudioBridge(): IAudio;
        /**
           @abstract
           Returns a reference to the registered BarcodeBridge.

           @return {Adaptive.BarcodeBridge} reference or null if a bridge of this type is not registered.
        */
        getBarcodeBridge(): IBarcode;
        /**
           @abstract
           Returns a reference to the registered BarometerBridge.

           @return {Adaptive.BarometerBridge} reference or null if a bridge of this type is not registered.
        */
        getBarometerBridge(): IBarometer;
        /**
           @abstract
           Returns a reference to the registered BluetoothBridge.

           @return {Adaptive.BluetoothBridge} reference or null if a bridge of this type is not registered.
        */
        getBluetoothBridge(): IBluetooth;
        /**
           @abstract
           Returns a reference to the registered BrowserBridge.

           @return {Adaptive.BrowserBridge} reference or null if a bridge of this type is not registered.
        */
        getBrowserBridge(): IBrowser;
        /**
           @abstract
           Returns a reference to the registered CalendarBridge.

           @return {Adaptive.CalendarBridge} reference or null if a bridge of this type is not registered.
        */
        getCalendarBridge(): ICalendar;
        /**
           @abstract
           Returns a reference to the registered CameraBridge.

           @return {Adaptive.CameraBridge} reference or null if a bridge of this type is not registered.
        */
        getCameraBridge(): ICamera;
        /**
           @abstract
           Returns a reference to the registered CapabilitiesBridge.

           @return {Adaptive.CapabilitiesBridge} reference or null if a bridge of this type is not registered.
        */
        getCapabilitiesBridge(): ICapabilities;
        /**
           @abstract
           Returns a reference to the registered CloudBridge.

           @return {Adaptive.CloudBridge} reference or null if a bridge of this type is not registered.
        */
        getCloudBridge(): ICloud;
        /**
           @abstract
           Returns a reference to the registered CompressionBridge.

           @return {Adaptive.CompressionBridge} reference or null if a bridge of this type is not registered.
        */
        getCompressionBridge(): ICompression;
        /**
           @abstract
           Returns a reference to the registered ConcurrentBridge.

           @return {Adaptive.ConcurrentBridge} reference or null if a bridge of this type is not registered.
        */
        getConcurrentBridge(): IConcurrent;
        /**
           @abstract
           Returns a reference to the registered ContactBridge.

           @return {Adaptive.ContactBridge} reference or null if a bridge of this type is not registered.
        */
        getContactBridge(): IContact;
        /**
           @abstract
           Returns a reference to the registered CryptoBridge.

           @return {Adaptive.CryptoBridge} reference or null if a bridge of this type is not registered.
        */
        getCryptoBridge(): ICrypto;
        /**
           @abstract
           Returns a reference to the registered DataStreamBridge.

           @return {Adaptive.DataStreamBridge} reference or null if a bridge of this type is not registered.
        */
        getDataStreamBridge(): IDataStream;
        /**
           @abstract
           Returns a reference to the registered DatabaseBridge.

           @return {Adaptive.DatabaseBridge} reference or null if a bridge of this type is not registered.
        */
        getDatabaseBridge(): IDatabase;
        /**
           @abstract
           Returns a reference to the registered DesktopBridge.

           @return {Adaptive.DesktopBridge} reference or null if a bridge of this type is not registered.
        */
        getDesktopBridge(): IDesktop;
        /**
           @abstract
           Returns a reference to the registered DeviceBridge.

           @return {Adaptive.DeviceBridge} reference or null if a bridge of this type is not registered.
        */
        getDeviceBridge(): IDevice;
        /**
           @abstract
           Returns a reference to the registered DisplayBridge.

           @return {Adaptive.DisplayBridge} reference or null if a bridge of this type is not registered.
        */
        getDisplayBridge(): IDisplay;
        /**
           @abstract
           Returns a reference to the registered FacebookBridge.

           @return {Adaptive.FacebookBridge} reference or null if a bridge of this type is not registered.
        */
        getFacebookBridge(): IFacebook;
        /**
           @abstract
           Returns a reference to the registered FileBridge.

           @return {Adaptive.FileBridge} reference or null if a bridge of this type is not registered.
        */
        getFileBridge(): IFile;
        /**
           @abstract
           Returns a reference to the registered FileSystemBridge.

           @return {Adaptive.FileSystemBridge} reference or null if a bridge of this type is not registered.
        */
        getFileSystemBridge(): IFileSystem;
        /**
           @abstract
           Returns a reference to the registered GeolocationBridge.

           @return {Adaptive.GeolocationBridge} reference or null if a bridge of this type is not registered.
        */
        getGeolocationBridge(): IGeolocation;
        /**
           @abstract
           Returns a reference to the registered GlobalizationBridge.

           @return {Adaptive.GlobalizationBridge} reference or null if a bridge of this type is not registered.
        */
        getGlobalizationBridge(): IGlobalization;
        /**
           @abstract
           Returns a reference to the registered GooglePlusBridge.

           @return {Adaptive.GooglePlusBridge} reference or null if a bridge of this type is not registered.
        */
        getGooglePlusBridge(): IGooglePlus;
        /**
           @abstract
           Returns a reference to the registered GyroscopeBridge.

           @return {Adaptive.GyroscopeBridge} reference or null if a bridge of this type is not registered.
        */
        getGyroscopeBridge(): IGyroscope;
        /**
           @abstract
           Returns a reference to the registered ImagingBridge.

           @return {Adaptive.ImagingBridge} reference or null if a bridge of this type is not registered.
        */
        getImagingBridge(): IImaging;
        /**
           @abstract
           Returns a reference to the registered InternalStorageBridge.

           @return {Adaptive.InternalStorageBridge} reference or null if a bridge of this type is not registered.
        */
        getInternalStorageBridge(): IInternalStorage;
        /**
           @abstract
           Returns a reference to the registered LifecycleBridge.

           @return {Adaptive.LifecycleBridge} reference or null if a bridge of this type is not registered.
        */
        getLifecycleBridge(): ILifecycle;
        /**
           @abstract
           Returns a reference to the registered LinkedInBridge.

           @return {Adaptive.LinkedInBridge} reference or null if a bridge of this type is not registered.
        */
        getLinkedInBridge(): ILinkedIn;
        /**
           @abstract
           Returns a reference to the registered LoggingBridge.

           @return {Adaptive.LoggingBridge} reference or null if a bridge of this type is not registered.
        */
        getLoggingBridge(): ILogging;
        /**
           @abstract
           Returns a reference to the registered MagnetometerBridge.

           @return {Adaptive.MagnetometerBridge} reference or null if a bridge of this type is not registered.
        */
        getMagnetometerBridge(): IMagnetometer;
        /**
           @abstract
           Returns a reference to the registered MailBridge.

           @return {Adaptive.MailBridge} reference or null if a bridge of this type is not registered.
        */
        getMailBridge(): IMail;
        /**
           @abstract
           Returns a reference to the registered ManagementBridge.

           @return {Adaptive.ManagementBridge} reference or null if a bridge of this type is not registered.
        */
        getManagementBridge(): IManagement;
        /**
           @abstract
           Returns a reference to the registered MapBridge.

           @return {Adaptive.MapBridge} reference or null if a bridge of this type is not registered.
        */
        getMapBridge(): IMap;
        /**
           @abstract
           Returns a reference to the registered MessagingBridge.

           @return {Adaptive.MessagingBridge} reference or null if a bridge of this type is not registered.
        */
        getMessagingBridge(): IMessaging;
        /**
           @abstract
           Returns a reference to the registered NFCBridge.

           @return {Adaptive.NFCBridge} reference or null if a bridge of this type is not registered.
        */
        getNFCBridge(): INFC;
        /**
           @abstract
           Returns a reference to the registered NetworkInfoBridge.

           @return {Adaptive.NetworkInfoBridge} reference or null if a bridge of this type is not registered.
        */
        getNetworkInfoBridge(): INetworkInfo;
        /**
           @abstract
           Returns a reference to the registered NetworkNamingBridge.

           @return {Adaptive.NetworkNamingBridge} reference or null if a bridge of this type is not registered.
        */
        getNetworkNamingBridge(): INetworkNaming;
        /**
           @abstract
           Returns a reference to the registered NetworkReachabilityBridge.

           @return {Adaptive.NetworkReachabilityBridge} reference or null if a bridge of this type is not registered.
        */
        getNetworkReachabilityBridge(): INetworkReachability;
        /**
           @abstract
           Returns a reference to the registered NetworkStatusBridge.

           @return {Adaptive.NetworkStatusBridge} reference or null if a bridge of this type is not registered.
        */
        getNetworkStatusBridge(): INetworkStatus;
        /**
           @abstract
           Returns a reference to the registered NotificationBridge.

           @return {Adaptive.NotificationBridge} reference or null if a bridge of this type is not registered.
        */
        getNotificationBridge(): INotification;
        /**
           @abstract
           Returns a reference to the registered NotificationLocalBridge.

           @return {Adaptive.NotificationLocalBridge} reference or null if a bridge of this type is not registered.
        */
        getNotificationLocalBridge(): INotificationLocal;
        /**
           @abstract
           Returns a reference to the registered OAuthBridge.

           @return {Adaptive.OAuthBridge} reference or null if a bridge of this type is not registered.
        */
        getOAuthBridge(): IOAuth;
        /**
           @abstract
           Returns a reference to the registered OCRBridge.

           @return {Adaptive.OCRBridge} reference or null if a bridge of this type is not registered.
        */
        getOCRBridge(): IOCR;
        /**
           @abstract
           Returns a reference to the registered OSBridge.

           @return {Adaptive.OSBridge} reference or null if a bridge of this type is not registered.
        */
        getOSBridge(): IOS;
        /**
           @abstract
           Returns a reference to the registered OpenIdBridge.

           @return {Adaptive.OpenIdBridge} reference or null if a bridge of this type is not registered.
        */
        getOpenIdBridge(): IOpenId;
        /**
           @abstract
           Returns a reference to the registered PrintingBridge.

           @return {Adaptive.PrintingBridge} reference or null if a bridge of this type is not registered.
        */
        getPrintingBridge(): IPrinting;
        /**
           @abstract
           Returns a reference to the registered ProximityBridge.

           @return {Adaptive.ProximityBridge} reference or null if a bridge of this type is not registered.
        */
        getProximityBridge(): IProximity;
        /**
           @abstract
           Returns a reference to the registered QRCodeBridge.

           @return {Adaptive.QRCodeBridge} reference or null if a bridge of this type is not registered.
        */
        getQRCodeBridge(): IQRCode;
        /**
           @abstract
           Returns a reference to the registered RSSBridge.

           @return {Adaptive.RSSBridge} reference or null if a bridge of this type is not registered.
        */
        getRSSBridge(): IRSS;
        /**
           @abstract
           Returns a reference to the registered RuntimeBridge.

           @return {Adaptive.RuntimeBridge} reference or null if a bridge of this type is not registered.
        */
        getRuntimeBridge(): IRuntime;
        /**
           @abstract
           Returns a reference to the registered SecurityBridge.

           @return {Adaptive.SecurityBridge} reference or null if a bridge of this type is not registered.
        */
        getSecurityBridge(): ISecurity;
        /**
           @abstract
           Returns a reference to the registered ServiceBridge.

           @return {Adaptive.ServiceBridge} reference or null if a bridge of this type is not registered.
        */
        getServiceBridge(): IService;
        /**
           @abstract
           Returns a reference to the registered SettingsBridge.

           @return {Adaptive.SettingsBridge} reference or null if a bridge of this type is not registered.
        */
        getSettingsBridge(): ISettings;
        /**
           @abstract
           Returns a reference to the registered SocketBridge.

           @return {Adaptive.SocketBridge} reference or null if a bridge of this type is not registered.
        */
        getSocketBridge(): ISocket;
        /**
           @abstract
           Returns a reference to the registered StoreBridge.

           @return {Adaptive.StoreBridge} reference or null if a bridge of this type is not registered.
        */
        getStoreBridge(): IStore;
        /**
           @abstract
           Returns a reference to the registered TelephonyBridge.

           @return {Adaptive.TelephonyBridge} reference or null if a bridge of this type is not registered.
        */
        getTelephonyBridge(): ITelephony;
        /**
           @abstract
           Returns a reference to the registered TimerBridge.

           @return {Adaptive.TimerBridge} reference or null if a bridge of this type is not registered.
        */
        getTimerBridge(): ITimer;
        /**
           @abstract
           Returns a reference to the registered TwitterBridge.

           @return {Adaptive.TwitterBridge} reference or null if a bridge of this type is not registered.
        */
        getTwitterBridge(): ITwitter;
        /**
           @abstract
           Returns a reference to the registered UIBridge.

           @return {Adaptive.UIBridge} reference or null if a bridge of this type is not registered.
        */
        getUIBridge(): IUI;
        /**
           @abstract
           Returns a reference to the registered UpdateBridge.

           @return {Adaptive.UpdateBridge} reference or null if a bridge of this type is not registered.
        */
        getUpdateBridge(): IUpdate;
        /**
           @abstract
           Returns a reference to the registered VibrationBridge.

           @return {Adaptive.VibrationBridge} reference or null if a bridge of this type is not registered.
        */
        getVibrationBridge(): IVibration;
        /**
           @abstract
           Returns a reference to the registered VideoBridge.

           @return {Adaptive.VideoBridge} reference or null if a bridge of this type is not registered.
        */
        getVideoBridge(): IVideo;
        /**
           @abstract
           Returns a reference to the registered WalletBridge.

           @return {Adaptive.WalletBridge} reference or null if a bridge of this type is not registered.
        */
        getWalletBridge(): IWallet;
        /**
           @abstract
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
    /**
       Base application for Application purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseApplication
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseApplication extends IAdaptiveRP {
    }
    /**
       Base application for Callback purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseCallback
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseCallback extends IAdaptiveRP {
        /**
           @abstract
           Retrieve unique id of callback/listener.

           @return {number} Callback/listener unique id.
        */
        getId(): number;
    }
    /**
       Base application for Commerce purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseCommerce
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseCommerce extends IAdaptiveRP {
    }
    /**
       Base application for Communication purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseCommunication
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseCommunication extends IAdaptiveRP {
    }
    /**
       Base application for Data purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseData
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseData extends IAdaptiveRP {
    }
    /**
       Base application for Listener purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseListener
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseListener extends IAdaptiveRP {
        /**
           @abstract
           Retrieve unique id of callback/listener.

           @return {number} Callback/listener unique id.
        */
        getId(): number;
    }
    /**
       Base application for Media purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseMedia
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseMedia extends IAdaptiveRP {
    }
    /**
       Base application for Notification purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseNotification
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseNotification extends IAdaptiveRP {
    }
    /**
       Base application for PIM purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBasePIM
       @extends Adaptive.IAdaptiveRP
    */
    interface IBasePIM extends IAdaptiveRP {
    }
    /**
       Base application for Reader purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseReader
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseReader extends IAdaptiveRP {
    }
    /**
       Base application for Security purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseSecurity
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseSecurity extends IAdaptiveRP {
    }
    /**
       Base application for Sensor purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseSensor
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseSensor extends IAdaptiveRP {
    }
    /**
       Base application for Social purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseSocial
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseSocial extends IAdaptiveRP {
    }
    /**
       Base application for System purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseSystem
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseSystem extends IAdaptiveRP {
    }
    /**
       Base application for UI purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseUI
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseUI extends IAdaptiveRP {
    }
    /**
       Base application for Utility purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBaseUtil
       @extends Adaptive.IAdaptiveRP
    */
    interface IBaseUtil extends IAdaptiveRP {
    }
    /**
       Interface for Analytics purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IAnalytics
       @extends Adaptive.IBaseApplication
    */
    interface IAnalytics extends IBaseApplication {
    }
    /**
       Interface for Managing the Globalization results

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IGlobalization
       @extends Adaptive.IBaseApplication
    */
    interface IGlobalization extends IBaseApplication {
        /**
           @method
           Returns the default locale of the application defined in the configuration file
           @return {Adaptive.Locale} Default Locale of the application
           @since ARP1.0
        */
        getDefaultLocale(): Locale;
        /**
           @method
           List of supported locales for the application defined in the configuration file
           @return {Adaptive.Locale[]} List of locales
           @since ARP1.0
        */
        getLocaleSupportedDescriptors(): Locale[];
        /**
           @method
           Gets the text/message corresponding to the given key and locale.
           @param key    to match text
           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return {string} Localized text.
           @since ARP1.0
        */
        getResourceLiteral(key: string, locale: Locale): string;
        /**
           @method
           Gets the full application configured literals (key/message pairs) corresponding to the given locale.
           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return {Adaptive.KeyPair[]} Localized texts in the form of an object.
           @since ARP1.0
        */
        getResourceLiterals(locale: Locale): KeyPair[];
    }
    /**
       Interface for Managing the Lifecycle listeners

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ILifecycle
       @extends Adaptive.IBaseApplication
    */
    interface ILifecycle extends IBaseApplication {
        /**
           @method
           Add the listener for the lifecycle of the app
           @param listener Lifecycle listener
           @since ARP1.0
        */
        addLifecycleListener(listener: ILifecycleListener): any;
        /**
           @method
           Whether the application is in background or not
           @return {boolean} true if the application is in background;false otherwise
           @since ARP1.0
        */
        isBackground(): boolean;
        /**
           @method
           Un-registers an existing listener from receiving lifecycle events.
           @param listener Lifecycle listener
           @since ARP1.0
        */
        removeLifecycleListener(listener: ILifecycleListener): any;
        /**
           @method
           Removes all existing listeners from receiving lifecycle events.
           @since ARP1.0
        */
        removeLifecycleListeners(): any;
    }
    /**
       Interface for Managing the Management operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IManagement
       @extends Adaptive.IBaseApplication
    */
    interface IManagement extends IBaseApplication {
    }
    /**
       Interface for Managing the Printing operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IPrinting
       @extends Adaptive.IBaseApplication
    */
    interface IPrinting extends IBaseApplication {
    }
    /**
       Interface for Managing the Settings operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ISettings
       @extends Adaptive.IBaseApplication
    */
    interface ISettings extends IBaseApplication {
    }
    /**
       Interface for Managing the Update operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IUpdate
       @extends Adaptive.IBaseApplication
    */
    interface IUpdate extends IBaseApplication {
    }
    /**
       Interface for Managing the Contact operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IContactPhotoResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IContactPhotoResultCallback extends IBaseCallback {
        /**
           @method
           This method is called on Error
           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IContactPhotoResultCallbackError): any;
        /**
           @method
           This method is called on Result
           @param contactPhoto returned by the platform
           @since ARP1.0
        */
        onResult(contactPhoto: number[]): any;
        /**
           @method
           This method is called on Warning
           @param contactPhoto returned by the platform
           @param warning      returned by the platform
           @since ARP1.0
        */
        onWarning(contactPhoto: number[], warning: IContactPhotoResultCallbackWarning): any;
    }
    /**
       Interface for Managing the Contact operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IContactResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IContactResultCallback extends IBaseCallback {
        /**
           @method
           This method is called on Error
           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IContactResultCallbackError): any;
        /**
           @method
           This method is called on Result
           @param contacts returned by the platform
           @since ARP1.0
        */
        onResult(contacts: Contact[]): any;
        /**
           @method
           This method is called on Warning
           @param contacts returned by the platform
           @param warning  returned by the platform
           @since ARP1.0
        */
        onWarning(contacts: Contact[], warning: IContactResultCallbackWarning): any;
    }
    /**
       Interface for Managing the Cloud operations

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IDatabaseResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IDatabaseResultCallback extends IBaseCallback {
        /**
           @method
           Result callback for error responses
           @param error Returned error
           @since ARP1.0
        */
        onError(error: IDatabaseResultCallbackError): any;
        /**
           @method
           Result callback for correct responses
           @param database Returns the database
           @since ARP1.0
        */
        onResult(database: Database): any;
        /**
           @method
           Result callback for warning responses
           @param database Returns the database
           @param warning  Returned Warning
           @since ARP1.0
        */
        onWarning(database: Database, warning: IDatabaseResultCallbackWarning): any;
    }
    /**
       Interface for Managing the Cloud operations

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IDatabaseTableResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IDatabaseTableResultCallback extends IBaseCallback {
        /**
           @method
           Result callback for error responses
           @param error Returned error
           @since ARP1.0
        */
        onError(error: IDatabaseTableResultCallbackError): any;
        /**
           @method
           Result callback for correct responses
           @param databaseTable Returns the databaseTable
           @since ARP1.0
        */
        onResult(databaseTable: DatabaseTable): any;
        /**
           @method
           Result callback for warning responses
           @param databaseTable Returns the databaseTable
           @param warning       Returned Warning
           @since ARP1.0
        */
        onWarning(databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning): any;
    }
    /**
       Interface for Managing the File loading callback responses

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IFileDataLoadResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IFileDataLoadResultCallback extends IBaseCallback {
        /**
           @method
           Error processing data retrieval/storage operation.
           @param error Error condition encountered.
           @since ARP1.0
        */
        onError(error: IFileDataLoadResultCallbackError): any;
        /**
           @method
           Result of data retrieval operation.
           @param data Data loaded.
           @since ARP1.0
        */
        onResult(data: number[]): any;
        /**
           @method
           Result with warning of data retrieval/storage operation.
           @param data    File being loaded.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(data: number[], warning: IFileDataLoadResultCallbackWarning): any;
    }
    /**
       Interface for Managing the File store operations callback

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IFileDataStoreResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IFileDataStoreResultCallback extends IBaseCallback {
        /**
           @method
           Error processing data retrieval/storage operation.
           @param error Error condition encountered.
           @since ARP1.0
        */
        onError(error: IFileDataStoreResultCallbackError): any;
        /**
           @method
           Result of data storage operation.
           @param file File reference to stored data.
           @since ARP1.0
        */
        onResult(file: FileDescriptor): any;
        /**
           @method
           Result with warning of data retrieval/storage operation.
           @param file    File being loaded/stored.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning): any;
    }
    /**
       Interface for Managing the File result operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IFileListResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IFileListResultCallback extends IBaseCallback {
        /**
           @method
           On error result of a file operation.
           @param error Error processing the request.
           @since ARP1.0
        */
        onError(error: IFileListResultCallbackError): any;
        /**
           @method
           On correct result of a file operation.
           @param files Array of resulting files/folders.
           @since ARP1.0
        */
        onResult(files: FileDescriptor[]): any;
        /**
           @method
           On partial result of a file operation, containing a warning.
           @param files   Array of resulting files/folders.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(files: FileDescriptor[], warning: IFileListResultCallbackWarning): any;
    }
    /**
       Interface for Managing the File operations callback

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IFileResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IFileResultCallback extends IBaseCallback {
        /**
           @method
           On error result of a file operation.
           @param error Error processing the request.
           @since ARP1.0
        */
        onError(error: IFileResultCallbackError): any;
        /**
           @method
           On correct result of a file operation.
           @param storageFile Reference to the resulting file.
           @since ARP1.0
        */
        onResult(storageFile: FileDescriptor): any;
        /**
           @method
           On partial result of a file operation, containing a warning.
           @param file    Reference to the offending file.
           @param warning Warning processing the request.
           @since ARP1.0
        */
        onWarning(file: FileDescriptor, warning: IFileResultCallbackWarning): any;
    }
    /**
       Interface for Managing the Messaging responses

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IMessagingCallback
       @extends Adaptive.IBaseCallback
    */
    interface IMessagingCallback extends IBaseCallback {
        /**
           @method
           This method is called on Error
           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IMessagingCallbackError): any;
        /**
           @method
           This method is called on Result
           @param success true if sent;false otherwise
           @since ARP1.0
        */
        onResult(success: boolean): any;
        /**
           @method
           This method is called on Warning
           @param success true if sent;false otherwise
           @param warning returned by the platform
           @since ARP1.0
        */
        onWarning(success: boolean, warning: IMessagingCallbackWarning): any;
    }
    /**
       Interface for Managing the Network reachability callback result

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INetworkReachabilityCallback
       @extends Adaptive.IBaseCallback
    */
    interface INetworkReachabilityCallback extends IBaseCallback {
        /**
           @method
           No data received - error condition, not authorized .
           @param error Error value
           @since ARP1.0
        */
        onError(error: INetworkReachabilityCallbackError): any;
        /**
           @method
           Correct data received.
           @param reachable Indicates if the host is reachable
           @since ARP1.0
        */
        onResult(reachable: boolean): any;
        /**
           @method
           Data received with warning - ie Found entries with existing key and values have been overriden
           @param reachable Indicates if the host is reachable
           @param warning   Warning value
           @since ARP1.0
        */
        onWarning(reachable: boolean, warning: INetworkReachabilityCallbackWarning): any;
    }
    /**
       Interface for Managing the Security result callback

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ISecurityResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface ISecurityResultCallback extends IBaseCallback {
        /**
           @method
           No data received - error condition, not authorized .
           @param error Error values
           @since ARP1.0
        */
        onError(error: ISecurityResultCallbackError): any;
        /**
           @method
           Correct data received.
           @param keyValues key and values
           @since ARP1.0
        */
        onResult(keyValues: SecureKeyPair[]): any;
        /**
           @method
           Data received with warning - ie Found entries with existing key and values have been overriden
           @param keyValues key and values
           @param warning   Warning values
           @since ARP1.0
        */
        onWarning(keyValues: SecureKeyPair[], warning: ISecurityResultCallbackWarning): any;
    }
    /**
       Interface for Managing the Services operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IServiceResultCallback
       @extends Adaptive.IBaseCallback
    */
    interface IServiceResultCallback extends IBaseCallback {
        /**
           @method
           This method is called on Error
           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IServiceResultCallbackError): any;
        /**
           @method
           This method is called on Result
           @param response data
           @since ARP1.0
        */
        onResult(response: ServiceResponse): any;
        /**
           @method
           This method is called on Warning
           @param response data
           @param warning  returned by the platform
           @since ARP1.0
        */
        onWarning(response: ServiceResponse, warning: IServiceResultCallbackWarning): any;
    }
    /**
       Interface for Advertising purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IAds
       @extends Adaptive.IBaseCommerce
    */
    interface IAds extends IBaseCommerce {
    }
    /**
       Interface for Managing the Store operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IStore
       @extends Adaptive.IBaseCommerce
    */
    interface IStore extends IBaseCommerce {
    }
    /**
       Interface for Managing the Wallet operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IWallet
       @extends Adaptive.IBaseCommerce
    */
    interface IWallet extends IBaseCommerce {
    }
    /**
       Interface for Bluetooth purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBluetooth
       @extends Adaptive.IBaseCommunication
    */
    interface IBluetooth extends IBaseCommunication {
    }
    /**
       Interface for Managing the Network information operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INetworkInfo
       @extends Adaptive.IBaseCommunication
    */
    interface INetworkInfo extends IBaseCommunication {
    }
    /**
       Interface for Managing the Network naming operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INetworkNaming
       @extends Adaptive.IBaseCommunication
    */
    interface INetworkNaming extends IBaseCommunication {
    }
    /**
       Interface for Managing the Network reachability operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INetworkReachability
       @extends Adaptive.IBaseCommunication
    */
    interface INetworkReachability extends IBaseCommunication {
        /**
           @method
           Whether there is connectivity to a host, via domain name or ip address, or not.
           @param host     domain name or ip address of host.
           @param callback Callback called at the end.
           @since ARP1.0
        */
        isNetworkReachable(host: string, callback: INetworkReachabilityCallback): any;
        /**
           @method
           Whether there is connectivity to an url of a service or not.
           @param url      to look for
           @param callback Callback called at the end
           @since ARP1.0
        */
        isNetworkServiceReachable(url: string, callback: INetworkReachabilityCallback): any;
    }
    /**
       Interface for Managing the Network status

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INetworkStatus
       @extends Adaptive.IBaseCommunication
    */
    interface INetworkStatus extends IBaseCommunication {
        /**
           @method
           Add the listener for network status changes of the app
           @param listener Listener with the result
           @since ARP1.0
        */
        addNetworkStatusListener(listener: INetworkStatusListener): any;
        /**
           @method
           Un-registers an existing listener from receiving network status events.
           @param listener Listener with the result
           @since ARP1.0
        */
        removeNetworkStatusListener(listener: INetworkStatusListener): any;
        /**
           @method
           Removes all existing listeners from receiving network status events.
           @since ARP1.0
        */
        removeNetworkStatusListeners(): any;
    }
    /**
       Interface for Managing the Services operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IService
       @extends Adaptive.IBaseCommunication
    */
    interface IService extends IBaseCommunication {
        /**
           @method
           Get a reference to a registered service by name.
           @param serviceName Name of service.
           @return {Adaptive.Service} A service, if registered, or null of the service does not exist.
           @since ARP1.0
        */
        getService(serviceName: string): Service;
        /**
           @method
           Request async a service for an Url
           @param serviceRequest Service Request to invoke
           @param service        Service to call
           @param callback       Callback to execute with the result
           @since ARP1.0
        */
        invokeService(serviceRequest: ServiceRequest, service: Service, callback: IServiceResultCallback): any;
        /**
           @method
           Register a new service
           @param service to register
           @since ARP1.0
        */
        registerService(service: Service): any;
        /**
           @method
           Unregister all services.
           @since ARP1.0
        */
        unregisterServices(): any;
        /**
           @method
           Unregister a service
           @param service to unregister
           @since ARP1.0
        */
        unregisterService(service: Service): any;
        /**
           Check whether a service by the given name is registered.
           @param serviceName Name of service.
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        isRegistered_serviceName(serviceName: string): boolean;
        /**
           Check whether a service by the given name is registered.
           @param serviceName Name of service.
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        isRegistered_service(service: Service): boolean;
    }
    /**
       Interface for Managing the Socket operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ISocket
       @extends Adaptive.IBaseCommunication
    */
    interface ISocket extends IBaseCommunication {
    }
    /**
       Interface for Managing the Telephony operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ITelephony
       @extends Adaptive.IBaseCommunication
    */
    interface ITelephony extends IBaseCommunication {
        /**
           @method
           Invoke a phone call
           @param number to call
           @return {Adaptive.ITelephonyStatus} Status of the call
           @since ARP1.0
        */
        call(number: string): ITelephonyStatus;
    }
    /**
       Interface for Managing the Cloud operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ICloud
       @extends Adaptive.IBaseData
    */
    interface ICloud extends IBaseData {
    }
    /**
       Interface for Managing the DataStream operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IDataStream
       @extends Adaptive.IBaseData
    */
    interface IDataStream extends IBaseData {
    }
    /**
       Interface for Managing the Cloud operations

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IDatabase
       @extends Adaptive.IBaseData
    */
    interface IDatabase extends IBaseData {
        /**
           @method
           Creates a database on default path for every platform.
           @param callback Asynchronous callback
           @param database Database object to create
           @since ARP1.0
        */
        createDatabase(database: Database, callback: IDatabaseResultCallback): any;
        /**
           @method
           Creates a databaseTable inside a database for every platform.
           @param database      Database for databaseTable creating.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        createTable(database: Database, databaseTable: DatabaseTable, callback: IDatabaseTableResultCallback): any;
        /**
           @method
           Deletes a database on default path for every platform.
           @param database Database object to delete
           @param callback Asynchronous callback
           @since ARP1.0
        */
        deleteDatabase(database: Database, callback: IDatabaseResultCallback): any;
        /**
           @method
           Deletes a databaseTable inside a database for every platform.
           @param database      Database for databaseTable removal.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        deleteTable(database: Database, databaseTable: DatabaseTable, callback: IDatabaseTableResultCallback): any;
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
        executeSqlStatement(database: Database, statement: string, replacements: string[], callback: IDatabaseTableResultCallback): any;
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
        executeSqlTransactions(database: Database, statements: string[], rollbackFlag: boolean, callback: IDatabaseTableResultCallback): any;
        /**
           @method
           Checks if database exists by given database name.
           @param database Database Object to check if exists
           @return {boolean} True if exists, false otherwise
           @since ARP1.0
        */
        existsDatabase(database: Database): boolean;
        /**
           @method
           Checks if databaseTable exists by given database name.
           @param database      Database for databaseTable consulting.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @return {boolean} True if exists, false otherwise
           @since ARP1.0
        */
        existsTable(database: Database, databaseTable: DatabaseTable): boolean;
    }
    /**
       Interface for Managing the File operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IFile
       @extends Adaptive.IBaseData
    */
    interface IFile extends IBaseData {
        /**
           @method
           Determine whether the current file/folder can be read from.
           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the folder/file is readable, false otherwise.
           @since ARP1.0
        */
        canRead(descriptor: FileDescriptor): boolean;
        /**
           @method
           Determine whether the current file/folder can be written to.
           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the folder/file is writable, false otherwise.
           @since ARP1.0
        */
        canWrite(descriptor: FileDescriptor): boolean;
        /**
           @method
           Creates a file with the specified name.
           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        create(descriptor: FileDescriptor, callback: IFileResultCallback): any;
        /**
           @method
           Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.
           @param descriptor File descriptor of file or folder used for operation.
           @param cascade    Whether to delete sub-files and sub-folders.
           @return {boolean} True if files (and sub-files and folders) whether deleted.
           @since ARP1.0
        */
        delete(descriptor: FileDescriptor, cascade: boolean): boolean;
        /**
           @method
           Check whether the file/path exists.
           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the file exists in the filesystem, false otherwise.
           @since ARP1.0
        */
        exists(descriptor: FileDescriptor): boolean;
        /**
           @method
           Loads the content of the file.
           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        getContent(descriptor: FileDescriptor, callback: IFileDataLoadResultCallback): any;
        /**
           @method
           Returns the file storage type of the file
           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemStorageType} Storage Type file
           @since ARP1.0
        */
        getFileStorageType(descriptor: FileDescriptor): IFileSystemStorageType;
        /**
           @method
           Returns the file type
           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemType} Returns the file type of the file
           @since ARP1.0
        */
        getFileType(descriptor: FileDescriptor): IFileSystemType;
        /**
           @method
           Returns the security type of the file
           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemSecurity} Security Level of the file
           @since ARP1.0
        */
        getSecurityType(descriptor: FileDescriptor): IFileSystemSecurity;
        /**
           @method
           Check whether this is a path of a file.
           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} true if this is a path to a folder/directory, false if this is a path to a file.
           @since ARP1.0
        */
        isDirectory(descriptor: FileDescriptor): boolean;
        /**
           @method
           List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.
           @param descriptor File descriptor of file or folder used for operation.
           @param regex      Filter (eg. *.jpg, *.png, Fil*) name string.
           @param callback   Result of operation.
           @since ARP1.0
        */
        listFilesForRegex(descriptor: FileDescriptor, regex: string, callback: IFileListResultCallback): any;
        /**
           @method
           List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.
           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of operation.
           @since ARP1.0
        */
        listFiles(descriptor: FileDescriptor, callback: IFileListResultCallback): any;
        /**
           @method
           Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.
           @param descriptor File descriptor of file or folder used for operation.
           @param recursive  Whether to create all parent path elements.
           @return {boolean} True if the path was created, false otherwise (or it exists already).
           @since ARP1.0
        */
        mkDir(descriptor: FileDescriptor, recursive: boolean): boolean;
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
        move(source: FileDescriptor, destination: FileDescriptor, createPath: boolean, overwrite: boolean, callback: IFileResultCallback): any;
        /**
           @method
           Sets the content of the file.
           @param descriptor File descriptor of file or folder used for operation.
           @param content    Binary content to store in the file.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        setContent(descriptor: FileDescriptor, content: number[], callback: IFileDataStoreResultCallback): any;
    }
    /**
       Interface for Managing the File System operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IFileSystem
       @extends Adaptive.IBaseData
    */
    interface IFileSystem extends IBaseData {
        /**
           @method
           Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.
           @param parent Parent directory.
           @param name   Name of new file or directory.
           @return {Adaptive.FileDescriptor} A reference to a new or existing location in the filesystem.
           @since ARP1.0
        */
        createFileDescriptor(parent: FileDescriptor, name: string): FileDescriptor;
        /**
           @method
           Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.
           @return {Adaptive.FileDescriptor} Path to the application's cache folder.
           @since ARP1.0
        */
        getApplicationCacheFolder(): FileDescriptor;
        /**
           @method
           Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.
           @return {Adaptive.FileDescriptor} Path to the application's cloud storage folder.
           @since ARP1.0
        */
        getApplicationCloudFolder(): FileDescriptor;
        /**
           @method
           Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.
           @return {Adaptive.FileDescriptor} Path to the application's documents folder.
           @since ARP1.0
        */
        getApplicationDocumentsFolder(): FileDescriptor;
        /**
           @method
           Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.
           @return {Adaptive.FileDescriptor} Path to the application folder.
           @since ARP1.0
        */
        getApplicationFolder(): FileDescriptor;
        /**
           @method
           Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.
           @return {Adaptive.FileDescriptor} Path to the application's protected storage folder.
           @since ARP1.0
        */
        getApplicationProtectedFolder(): FileDescriptor;
        /**
           @method
           Returns the file system dependent file separator.
           @return {string} char with the directory/file separator.
           @since ARP1.0
        */
        getSeparator(): string;
        /**
           @method
           Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.
           @return {Adaptive.FileDescriptor} Path to the application's documents folder.
           @since ARP1.0
        */
        getSystemExternalFolder(): FileDescriptor;
    }
    /**
       Interface for Managing the Internal Storage operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IInternalStorage
       @extends Adaptive.IBaseData
    */
    interface IInternalStorage extends IBaseData {
    }
    /**
       Interface for Managing the XML operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IXML
       @extends Adaptive.IBaseData
    */
    interface IXML extends IBaseData {
    }
    /**
       Interface defines the response methods of the acceleration operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IAccelerationListener
       @extends Adaptive.IBaseListener
    */
    interface IAccelerationListener extends IBaseListener {
        /**
           @method
           No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.
           @param error Error fired
           @since ARP1.0
        */
        onError(error: IAccelerationListenerError): any;
        /**
           @method
           Correct data received.
           @param acceleration Acceleration received
           @since ARP1.0
        */
        onResult(acceleration: Acceleration): any;
        /**
           @method
           Data received with warning - ie. Needs calibration.
           @param acceleration Acceleration received
           @param warning      Warning fired
           @since ARP1.0
        */
        onWarning(acceleration: Acceleration, warning: IAccelerationListenerWarning): any;
    }
    /**
       Interface for Managing the button  operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IButtonListener
       @extends Adaptive.IBaseListener
    */
    interface IButtonListener extends IBaseListener {
        /**
           @method
           No data received
           @param error occurred
           @since ARP1.0
        */
        onError(error: IButtonListenerError): any;
        /**
           @method
           Called on button pressed
           @param button pressed
           @since ARP1.0
        */
        onResult(button: Button): any;
        /**
           @method
           Data received with warning
           @param button  pressed
           @param warning happened
           @since ARP1.0
        */
        onWarning(button: Button, warning: IButtonListenerWarning): any;
    }
    /**
       Interface for Managing the Geolocation results

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IGeolocationListener
       @extends Adaptive.IBaseListener
    */
    interface IGeolocationListener extends IBaseListener {
        /**
           @method
           No data received - error condition, not authorized or hardware not available.
           @param error Type of error encountered during reading.
           @since ARP1.0
        */
        onError(error: IGeolocationListenerError): any;
        /**
           @method
           Correct data received.
           @param geolocation Geolocation Bean
           @since ARP1.0
        */
        onResult(geolocation: Geolocation): any;
        /**
           @method
           Data received with warning - ie. HighDoP
           @param geolocation Geolocation Bean
           @param warning     Type of warning encountered during reading.
           @since ARP1.0
        */
        onWarning(geolocation: Geolocation, warning: IGeolocationListenerWarning): any;
    }
    /**
       Interface for Managing the Lifecycle listeners

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ILifecycleListener
       @extends Adaptive.IBaseListener
    */
    interface ILifecycleListener extends IBaseListener {
        /**
           @method
           No data received - error condition, not authorized or hardware not available.
           @param error Type of error encountered during reading.
           @since ARP1.0
        */
        onError(error: ILifecycleListenerError): any;
        /**
           @method
           Called when lifecycle changes somehow.
           @param lifecycle Lifecycle element
           @since ARP1.0
        */
        onResult(lifecycle: Lifecycle): any;
        /**
           @method
           Data received with warning
           @param lifecycle Lifecycle element
           @param warning   Type of warning encountered during reading.
           @since ARP1.0
        */
        onWarning(lifecycle: Lifecycle, warning: ILifecycleListenerWarning): any;
    }
    /**
       Interface for Managing the Network status listener events

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INetworkStatusListener
       @extends Adaptive.IBaseListener
    */
    interface INetworkStatusListener extends IBaseListener {
        /**
           @method
           No data received - error condition, not authorized or hardware not available.
           @param error Type of error encountered during reading.
           @since ARP1.0
        */
        onError(error: INetworkStatusListenerError): any;
        /**
           @method
           Called when network connection changes somehow.
           @param network Change to this network.
           @since ARP1.0
        */
        onResult(network: ICapabilitiesNet): any;
        /**
           @method
           Status received with warning
           @param network Change to this network.
           @param warning Type of warning encountered during reading.
           @since ARP1.0
        */
        onWarning(network: ICapabilitiesNet, warning: INetworkStatusListenerWarning): any;
    }
    /**
       Interface for Audio purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IAudio
       @extends Adaptive.IBaseMedia
    */
    interface IAudio extends IBaseMedia {
    }
    /**
       Interface for Managing the camera operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ICamera
       @extends Adaptive.IBaseMedia
    */
    interface ICamera extends IBaseMedia {
    }
    /**
       Interface for Managing the Imaging operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IImaging
       @extends Adaptive.IBaseMedia
    */
    interface IImaging extends IBaseMedia {
    }
    /**
       Interface for Managing the Video operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IVideo
       @extends Adaptive.IBaseMedia
    */
    interface IVideo extends IBaseMedia {
        /**
           @method
           Play url video stream
           @param url of the video
           @since ARP1.0
        */
        playStream(url: string): any;
    }
    /**
       Interface for Alarm purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IAlarm
       @extends Adaptive.IBaseNotification
    */
    interface IAlarm extends IBaseNotification {
    }
    /**
       Interface for Managing the Notification operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INotification
       @extends Adaptive.IBaseNotification
    */
    interface INotification extends IBaseNotification {
    }
    /**
       Interface for Managing the Local Notifications operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INotificationLocal
       @extends Adaptive.IBaseNotification
    */
    interface INotificationLocal extends IBaseNotification {
    }
    /**
       Interface for Managing the Vibration operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IVibration
       @extends Adaptive.IBaseNotification
    */
    interface IVibration extends IBaseNotification {
    }
    /**
       Interface for Managing the Calendar operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ICalendar
       @extends Adaptive.IBasePIM
    */
    interface ICalendar extends IBasePIM {
    }
    /**
       Interface for Managing the Contact operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IContact
       @extends Adaptive.IBasePIM
    */
    interface IContact extends IBasePIM {
        /**
           @method
           Get the contact photo
           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        getContactPhoto(contact: ContactUid, callback: IContactPhotoResultCallback): any;
        /**
           @method
           Get all the details of a contact according to its id
           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        getContact(contact: ContactUid, callback: IContactResultCallback): any;
        /**
           @method
           Get marked fields of all contacts
           @param callback called for return
           @param fields   to get for each Contact
           @since ARP1.0
        */
        getContactsForFields(callback: IContactResultCallback, fields: IContactFieldGroup[]): any;
        /**
           @method
           Get marked fields of all contacts according to a filter
           @param callback called for return
           @param fields   to get for each Contact
           @param filter   to search for
           @since ARP1.0
        */
        getContactsWithFilter(callback: IContactResultCallback, fields: IContactFieldGroup[], filter: IContactFilter[]): any;
        /**
           @method
           Get all contacts
           @param callback called for return
           @since ARP1.0
        */
        getContacts(callback: IContactResultCallback): any;
        /**
           @method
           Search contacts according to a term with a filter and send it to the callback
           @param term     string to search
           @param callback called for return
           @param filter   to search for
           @since ARP1.0
        */
        searchContactsWithFilter(term: string, callback: IContactResultCallback, filter: IContactFilter[]): any;
        /**
           @method
           Search contacts according to a term and send it to the callback
           @param term     string to search
           @param callback called for return
           @since ARP1.0
        */
        searchContacts(term: string, callback: IContactResultCallback): any;
        /**
           @method
           Set the contact photo
           @param contact  id to assign the photo
           @param pngImage photo as byte array
           @return {boolean} true if set is successful;false otherwise
           @since ARP1.0
        */
        setContactPhoto(contact: ContactUid, pngImage: number[]): boolean;
    }
    /**
       Interface for Managing the Mail operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IMail
       @extends Adaptive.IBasePIM
    */
    interface IMail extends IBasePIM {
        /**
           @method
           Send an Email
           @param data     Payload of the email
           @param callback Result callback of the operation
           @since ARP1.0
        */
        sendEmail(data: Email, callback: IMessagingCallback): any;
    }
    /**
       Interface for Managing the Messaging operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IMessaging
       @extends Adaptive.IBasePIM
    */
    interface IMessaging extends IBasePIM {
        /**
           @method
           Send text SMS
           @param number   to send
           @param text     to send
           @param callback with the result
           @since ARP1.0
        */
        sendSMS(number: string, text: string, callback: IMessagingCallback): any;
    }
    /**
       Interface for Barcode Reading purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBarcode
       @extends Adaptive.IBaseReader
    */
    interface IBarcode extends IBaseReader {
    }
    /**
       Interface for Managing the NFC operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.INFC
       @extends Adaptive.IBaseReader
    */
    interface INFC extends IBaseReader {
    }
    /**
       Interface for Managing the OCR operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IOCR
       @extends Adaptive.IBaseReader
    */
    interface IOCR extends IBaseReader {
    }
    /**
       Interface for Managing the QR Code operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IQRCode
       @extends Adaptive.IBaseReader
    */
    interface IQRCode extends IBaseReader {
    }
    /**
       Interface for Managing the OAuth operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IOAuth
       @extends Adaptive.IBaseSecurity
    */
    interface IOAuth extends IBaseSecurity {
    }
    /**
       Interface for Managing the OpenID operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IOpenId
       @extends Adaptive.IBaseSecurity
    */
    interface IOpenId extends IBaseSecurity {
    }
    /**
       Interface for Managing the Security operations

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ISecurity
       @extends Adaptive.IBaseSecurity
    */
    interface ISecurity extends IBaseSecurity {
        /**
           @method
           Deletes from the device internal storage the entry/entries containing the specified key names.
           @param keys             Array with the key names to delete.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        deleteSecureKeyValuePairs(keys: string[], publicAccessName: string, callback: ISecurityResultCallback): any;
        /**
           @method
           Retrieves from the device internal storage the entry/entries containing the specified key names.
           @param keys             Array with the key names to retrieve.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        getSecureKeyValuePairs(keys: string[], publicAccessName: string, callback: ISecurityResultCallback): any;
        /**
           @method
           Returns if the device has been modified in anyhow
           @return {boolean} true if the device has been modified; false otherwise
           @since ARP1.0
        */
        isDeviceModified(): boolean;
        /**
           @method
           Stores in the device internal storage the specified item/s.
           @param keyValues        Array containing the items to store on the device internal memory.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        setSecureKeyValuePairs(keyValues: SecureKeyPair[], publicAccessName: string, callback: ISecurityResultCallback): any;
    }
    /**
       Interface defining methods about the acceleration sensor

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IAcceleration
       @extends Adaptive.IBaseSensor
    */
    interface IAcceleration extends IBaseSensor {
        /**
           @method
           Register a new listener that will receive acceleration events.
           @param listener to be registered.
           @since ARP1.0
        */
        addAccelerationListener(listener: IAccelerationListener): any;
        /**
           @method
           De-registers an existing listener from receiving acceleration events.
           @param listener to be registered.
           @since ARP1.0
        */
        removeAccelerationListener(listener: IAccelerationListener): any;
        /**
           @method
           Removed all existing listeners from receiving acceleration events.
           @since ARP1.0
        */
        removeAccelerationListeners(): any;
    }
    /**
       Interface for managinf the Ambient Light

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IAmbientLight
       @extends Adaptive.IBaseSensor
    */
    interface IAmbientLight extends IBaseSensor {
    }
    /**
       Interface for Barometer management purposes

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBarometer
       @extends Adaptive.IBaseSensor
    */
    interface IBarometer extends IBaseSensor {
    }
    /**
       Interface for Managing the Geolocation operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IGeolocation
       @extends Adaptive.IBaseSensor
    */
    interface IGeolocation extends IBaseSensor {
        /**
           @method
           Register a new listener that will receive geolocation events.
           @param listener to be registered.
           @since ARP1.0
        */
        addGeolocationListener(listener: IGeolocationListener): any;
        /**
           @method
           De-registers an existing listener from receiving geolocation events.
           @param listener to be registered.
           @since ARP1.0
        */
        removeGeolocationListener(listener: IGeolocationListener): any;
        /**
           @method
           Removed all existing listeners from receiving geolocation events.
           @since ARP1.0
        */
        removeGeolocationListeners(): any;
    }
    /**
       Interface for Managing the Giroscope operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IGyroscope
       @extends Adaptive.IBaseSensor
    */
    interface IGyroscope extends IBaseSensor {
    }
    /**
       Interface for Managing the Magnetometer operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IMagnetometer
       @extends Adaptive.IBaseSensor
    */
    interface IMagnetometer extends IBaseSensor {
    }
    /**
       Interface for Managing the Proximity operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IProximity
       @extends Adaptive.IBaseSensor
    */
    interface IProximity extends IBaseSensor {
    }
    /**
       Interface for Managing the Facebook operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IFacebook
       @extends Adaptive.IBaseSocial
    */
    interface IFacebook extends IBaseSocial {
    }
    /**
       Interface for Managing the Google Plus operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IGooglePlus
       @extends Adaptive.IBaseSocial
    */
    interface IGooglePlus extends IBaseSocial {
    }
    /**
       Interface for Managing the Linkedin operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ILinkedIn
       @extends Adaptive.IBaseSocial
    */
    interface ILinkedIn extends IBaseSocial {
    }
    /**
       Interface for Managing the RSS operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IRSS
       @extends Adaptive.IBaseSocial
    */
    interface IRSS extends IBaseSocial {
    }
    /**
       Interface for Managing the Twitter operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ITwitter
       @extends Adaptive.IBaseSocial
    */
    interface ITwitter extends IBaseSocial {
    }
    /**
       Interface for testing the Capabilities operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ICapabilities
       @extends Adaptive.IBaseSystem
    */
    interface ICapabilities extends IBaseSystem {
        /**
           @method
           Determines whether a specific hardware button is supported for interaction.
           @param type Type of feature to check.
           @return {boolean} true is supported, false otherwise.
           @since ARP1.0
        */
        hasButtonSupport(type: ICapabilitiesButton): boolean;
        /**
           @method
           Determines whether a specific Communication capability is supported by
the device.
           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasCommunicationSupport(type: ICapabilitiesCommunication): boolean;
        /**
           @method
           Determines whether a specific Data capability is supported by the device.
           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasDataSupport(type: ICapabilitiesData): boolean;
        /**
           @method
           Determines whether a specific Media capability is supported by the
device.
           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasMediaSupport(type: ICapabilitiesMedia): boolean;
        /**
           @method
           Determines whether a specific Net capability is supported by the device.
           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasNetSupport(type: ICapabilitiesNet): boolean;
        /**
           @method
           Determines whether a specific Notification capability is supported by the
device.
           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasNotificationSupport(type: ICapabilitiesNotification): boolean;
        /**
           @method
           Determines whether a specific Sensor capability is supported by the
device.
           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasSensorSupport(type: ICapabilitiesSensor): boolean;
    }
    /**
       Interface for Managing the Device operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IDevice
       @extends Adaptive.IBaseSystem
    */
    interface IDevice extends IBaseSystem {
        /**
           @method
           Register a new listener that will receive button events.
           @param listener to be registered.
           @since ARP1.0
        */
        addButtonListener(listener: IButtonListener): any;
        /**
           @method
           Returns the device information for the current device executing the runtime.
           @return {Adaptive.DeviceInfo} DeviceInfo for the current device.
           @since ARP1.0
        */
        getDeviceInfo(): DeviceInfo;
        /**
           @method
           Gets the current Locale for the device.
           @return {Adaptive.Locale} The current Locale information.
           @since ARP1.0
        */
        getLocaleCurrent(): Locale;
        /**
           @method
           De-registers an existing listener from receiving button events.
           @param listener to be removed.
           @since ARP1.0
        */
        removeButtonListener(listener: IButtonListener): any;
        /**
           @method
           Removed all existing listeners from receiving button events.
           @since ARP1.0
        */
        removeButtonListeners(): any;
    }
    /**
       Interface for Managing the Display operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IDisplay
       @extends Adaptive.IBaseSystem
    */
    interface IDisplay extends IBaseSystem {
    }
    /**
       Interface for Managing the OS operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IOS
       @extends Adaptive.IBaseSystem
    */
    interface IOS extends IBaseSystem {
        /**
           @method
           Returns the OSInfo for the current operating system.
           @return {Adaptive.OSInfo} OSInfo with name, version and vendor of the OS.
           @since ARP1.0
        */
        getOSInfo(): OSInfo;
    }
    /**
       Interface for Managing the Runtime operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IRuntime
       @extends Adaptive.IBaseSystem
    */
    interface IRuntime extends IBaseSystem {
        /**
           @method
           Dismiss the current Application
           @since ARP1.0
        */
        dismissApplication(): any;
        /**
           @method
           Whether the application dismiss the splash screen successfully or not
           @return {boolean} true if the application has dismissed the splash screen;false otherwise
           @since ARP1.0
        */
        dismissSplashScreen(): boolean;
    }
    /**
       Interface for Managing the browser operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IBrowser
       @extends Adaptive.IBaseUI
    */
    interface IBrowser extends IBaseUI {
        /**
           @method
           Method for opening a URL like a link in the native default browser
           @param url Url to open
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        openExtenalBrowser(url: string): boolean;
        /**
           @method
           Method for opening a browser embedded into the application in a modal window
           @param url            Url to open
           @param title          Title of the Navigation bar
           @param backButtonText Title of the Back button bar
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        openInternalBrowserModal(url: string, title: string, backButtonText: string): boolean;
        /**
           @method
           Method for opening a browser embedded into the application
           @param url            Url to open
           @param title          Title of the Navigation bar
           @param backButtonText Title of the Back button bar
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        openInternalBrowser(url: string, title: string, backButtonText: string): boolean;
    }
    /**
       Interface for Managing the Desktop operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IDesktop
       @extends Adaptive.IBaseUI
    */
    interface IDesktop extends IBaseUI {
    }
    /**
       Interface for Managing the Map operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IMap
       @extends Adaptive.IBaseUI
    */
    interface IMap extends IBaseUI {
    }
    /**
       Interface for Managing the UI operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IUI
       @extends Adaptive.IBaseUI
    */
    interface IUI extends IBaseUI {
    }
    /**
       Interface for Managing the Compression operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ICompression
       @extends Adaptive.IBaseUtil
    */
    interface ICompression extends IBaseUtil {
    }
    /**
       Interface for Managing the Concurrent operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.IConcurrent
       @extends Adaptive.IBaseUtil
    */
    interface IConcurrent extends IBaseUtil {
    }
    /**
       Interface for Managing the Cloud operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ICrypto
       @extends Adaptive.IBaseUtil
    */
    interface ICrypto extends IBaseUtil {
    }
    /**
       Interface for Managing the Logging operations

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ILogging
       @extends Adaptive.IBaseUtil
    */
    interface ILogging extends IBaseUtil {
        /**
           Logs the given message, with the given log level if specified, to the standard platform/environment.
           @param level    Log level
           @param category Category/tag name to identify/filter the log.
           @param message  Message to be logged
           @since ARP1.0
        */
        log_level_category_message(level: ILoggingLogLevel, category: string, message: string): any;
        /**
           Logs the given message, with the given log level if specified, to the standard platform/environment.
           @param level   Log level
           @param message Message to be logged
           @since ARP1.0
        */
        log_level_message(level: ILoggingLogLevel, message: string): any;
    }
    /**
       Interface for Managing the Timer operations

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    /**
       @class Adaptive.ITimer
       @extends Adaptive.IBaseUtil
    */
    interface ITimer extends IBaseUtil {
    }
    /**
       @class Adaptive.APIBean
       Structure representing a native response to the HTML5

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    class APIBean {
        /**
           @method constructor
           Default constructor

           @since ARP1.0
        */
        constructor();
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): APIBean;
    }
    /**
       @class Adaptive.APIRequest
       Structure representing a HTML5 request to the native API.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    class APIRequest {
        /**
           Identifier of callback or listener for async operations.
        */
        asyncId: number;
        /**
           String representing the bridge type to obtain.
        */
        bridgeType: string;
        /**
           String representing the method name to call.
        */
        methodName: string;
        /**
           Parameters of the request as JSON formatted strings.
        */
        parameters: string[];
        /**
           @method constructor
           Constructor with all the parameters

           @param {string} bridgeType Name of the bridge to be invoked.
           @param {string} methodName Name of the method
           @param {string[]} parameters Array of parameters as JSON formatted strings.
           @param {number} asyncId    Id of callback or listener or zero if none for synchronous calls.
           @since ARP1.0
        */
        constructor(bridgeType: string, methodName: string, parameters: string[], asyncId: number);
        /**
           @method
           Returns the callback or listener id assigned to this request OR zero if there is no associated callback or
listener.

           @return {number} long with the unique id of the callback or listener, or zero if there is no associated async event.
        */
        getAsyncId(): number;
        /**
           @method
           Sets the callback or listener id to the request.

           @param {number} asyncId The unique id of the callback or listener.
        */
        setAsyncId(asyncId: number): void;
        /**
           @method
           Bridge Type Getter

           @return {string} Bridge Type
           @since ARP1.0
        */
        getBridgeType(): string;
        /**
           @method
           Bridge Type Setter

           @param {string} bridgeType Bridge Type
           @since ARP1.0
        */
        setBridgeType(bridgeType: string): void;
        /**
           @method
           Method name Getter

           @return {string} Method name
           @since ARP1.0
        */
        getMethodName(): string;
        /**
           @method
           Method name Setter

           @param {string} methodName Method name
           @since ARP1.0
        */
        setMethodName(methodName: string): void;
        /**
           @method
           Parameters Getter

           @return {string[]} Parameters
           @since ARP1.0
        */
        getParameters(): string[];
        /**
           @method
           Parameters Setter

           @param {string[]} parameters Parameters, JSON formatted strings of objects.
           @since ARP1.0
        */
        setParameters(parameters: string[]): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): APIRequest;
    }
    /**
       @class Adaptive.APIResponse
       Structure representing a JSON response to the HTML5 layer.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    class APIResponse {
        /**
           String representing the JavaScript value or JSON object representation of the response.
        */
        response: string;
        /**
           Status code of the response
        */
        statusCode: number;
        /**
           Status message of the response
        */
        statusMessage: string;
        /**
           @method constructor
           Constructor with parameters.

           @param {string} response      String representing the JavaScript value or JSON object representation of the response.
           @param {number} statusCode    Status code of the response (200 = OK, others are warning or error conditions).
           @param {string} statusMessage Status message of the response.
        */
        constructor(response: string, statusCode: number, statusMessage: string);
        /**
           @method
           Response getter

           @return {string} String representing the JavaScript value or JSON object representation of the response.
           @since ARP1.0
        */
        getResponse(): string;
        /**
           @method
           Response setter

           @param {string} response String representing the JavaScript value or JSON object representation of the response.
        */
        setResponse(response: string): void;
        /**
           @method
           Status code getter

           @return {number} Status code of the response (200 = OK, others are warning or error conditions).
        */
        getStatusCode(): number;
        /**
           @method
           Status code setter

           @param {number} statusCode Status code of the response  (200 = OK, others are warning or error conditions).
        */
        setStatusCode(statusCode: number): void;
        /**
           @method
           Status message getter

           @return {string} Status message of the response.
        */
        getStatusMessage(): string;
        /**
           @method
           Status message setter.

           @param {string} statusMessage Status message of the response
        */
        setStatusMessage(statusMessage: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): APIResponse;
    }
    /**
       @class Adaptive.ServicePath
       Structure representing a service path for one endpoint

       @author fnva
       @since ARP1.0
       @version 1.0
    */
    class ServicePath {
        /**
           The methods for calling a path
        */
        methods: IServiceMethod[];
        /**
           The path for the endpoint
        */
        path: string;
        /**
           @method constructor
           Constructor with parameters

           @param {string} path    The path for the endpoint
           @param {Adaptive.IServiceMethod[]} methods The methods for calling a path
        */
        constructor(path: string, methods: IServiceMethod[]);
        /**
           @method
           Endpoint's path methods setter

           @return {Adaptive.IServiceMethod[]} Endpoint's path methods
        */
        getMethods(): IServiceMethod[];
        /**
           @method
           Endpoint's path methods setter

           @param {Adaptive.IServiceMethod[]} methods Endpoint's path methods
        */
        setMethods(methods: IServiceMethod[]): void;
        /**
           @method
           Endpoint's Path Getter

           @return {string} Endpoint's Path
        */
        getPath(): string;
        /**
           @method
           Endpoint's path setter

           @param {string} path Endpoint's path
        */
        setPath(path: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ServicePath;
    }
    /**
       @class Adaptive.Acceleration
       @extends Adaptive.APIBean
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    class Acceleration extends APIBean {
        /**
           Timestamp of the acceleration reading.
        */
        timestamp: number;
        /**
           X-axis component of the acceleration.
        */
        x: number;
        /**
           Y-axis component of the acceleration.
        */
        y: number;
        /**
           Z-axis component of the acceleration.
        */
        z: number;
        /**
           @method constructor
           Constructor with fields

           @param {number} x         X Coordinate
           @param {number} y         Y Coordinate
           @param {number} z         Z Coordinate
           @param {number} timestamp Timestamp
           @since ARP1.0
        */
        constructor(x: number, y: number, z: number, timestamp: number);
        /**
           @method
           Timestamp Getter

           @return {number} Timestamp
           @since ARP1.0
        */
        getTimestamp(): number;
        /**
           @method
           Timestamp Setter

           @param {number} timestamp Timestamp
           @since ARP1.0
        */
        setTimestamp(timestamp: number): void;
        /**
           @method
           X Coordinate Getter

           @return {number} X-axis component of the acceleration.
           @since ARP1.0
        */
        getX(): number;
        /**
           @method
           X Coordinate Setter

           @param {number} x X-axis component of the acceleration.
           @since ARP1.0
        */
        setX(x: number): void;
        /**
           @method
           Y Coordinate Getter

           @return {number} Y-axis component of the acceleration.
           @since ARP1.0
        */
        getY(): number;
        /**
           @method
           Y Coordinate Setter

           @param {number} y Y-axis component of the acceleration.
           @since ARP1.0
        */
        setY(y: number): void;
        /**
           @method
           Z Coordinate Getter

           @return {number} Z-axis component of the acceleration.
           @since ARP1.0
        */
        getZ(): number;
        /**
           @method
           Z Coordinate Setter

           @param {number} z Z Coordinate
           @since ARP1.0
        */
        setZ(z: number): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Acceleration;
    }
    /**
       @class Adaptive.Button
       @extends Adaptive.APIBean
       Structure representing the a physical or logical button on a device.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class Button extends APIBean {
        /**
           Button type
        */
        type: ICapabilitiesButton;
        /**
           @method constructor
           Constructor with fields

           @param {Adaptive.ICapabilitiesButton} type Button type.
           @since ARP1.0
        */
        constructor(type: ICapabilitiesButton);
        /**
           @method
           Returns the button type

           @return {Adaptive.ICapabilitiesButton} type Button type.
           @since ARP1.0
        */
        getType(): ICapabilitiesButton;
        /**
           @method
           Setter for the button type

           @param {Adaptive.ICapabilitiesButton} type Button Type
           @since ARP1.0
        */
        setType(type: ICapabilitiesButton): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Button;
    }
    /**
       @class Adaptive.ContactAddress
       @extends Adaptive.APIBean
       Structure representing the address data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactAddress extends APIBean {
        /**
           The address type
        */
        type: ContactAddressType;
        /**
           The Contact address
        */
        address: string;
        /**
           @method constructor
           Constructor with fields

           @param {string} address Address data.
           @param {Adaptive.ContactAddressType} type    Address type.
           @since ARP1.0
        */
        constructor(address: string, type: ContactAddressType);
        /**
           @method
           Returns the type of the address

           @return {Adaptive.ContactAddressType} AddressType Address type.
           @since ARP1.0
        */
        getType(): ContactAddressType;
        /**
           @method
           Set the address type

           @param {Adaptive.ContactAddressType} type Address type.
           @since ARP1.0
        */
        setType(type: ContactAddressType): void;
        /**
           @method
           Returns the Contact address

           @return {string} address Address data.
           @since ARP1.0
        */
        getAddress(): string;
        /**
           @method
           Set the address of the Contact

           @param {string} address Address data.
           @since ARP1.0
        */
        setAddress(address: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactAddress;
    }
    /**
       @class Adaptive.ContactEmail
       @extends Adaptive.APIBean
       Structure representing the email data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactEmail extends APIBean {
        /**
           The type of the email
        */
        type: ContactEmailType;
        /**
           Email of the Contact
        */
        email: string;
        /**
           Whether the email is the primary one or not
        */
        primary: boolean;
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ContactEmailType} type    Type of the email
           @param {boolean} primary Is email primary
           @param {string} email   Email of the contact
           @since ARP1.0
        */
        constructor(type: ContactEmailType, primary: boolean, email: string);
        /**
           @method
           Returns the type of the email

           @return {Adaptive.ContactEmailType} EmailType
           @since ARP1.0
        */
        getType(): ContactEmailType;
        /**
           @method
           Set the type of the email

           @param {Adaptive.ContactEmailType} type Type of the email
           @since ARP1.0
        */
        setType(type: ContactEmailType): void;
        /**
           @method
           Returns the email of the Contact

           @return {string} email
           @since ARP1.0
        */
        getEmail(): string;
        /**
           @method
           Set the email of the Contact

           @param {string} email Email of the contact
           @since ARP1.0
        */
        setEmail(email: string): void;
        /**
           @method
           Returns if the email is primary

           @return {boolean} true if the email is primary; false otherwise
           @since ARP1.0
        */
        getPrimary(): boolean;
        /**
           @method
           Set if the email

           @param {boolean} primary true if the email is primary; false otherwise
           @since ARP1.0
        */
        setPrimary(primary: boolean): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactEmail;
    }
    /**
       @class Adaptive.ContactPersonalInfo
       @extends Adaptive.APIBean
       Structure representing the personal info data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactPersonalInfo extends APIBean {
        /**
           The title of the Contact
        */
        title: ContactPersonalInfoTitle;
        /**
           The last name of the Contact
        */
        lastName: string;
        /**
           The middle name of the Contact if it proceeds
        */
        middleName: string;
        /**
           The name of the Contact
        */
        name: string;
        /**
           @method constructor
           The Constructor used by the implementation

           @param {string} name       of the Contact
           @param {string} middleName of the Contact
           @param {string} lastName   of the Contact
           @param {Adaptive.ContactPersonalInfoTitle} title      of the Contact
           @since ARP1.0
        */
        constructor(name: string, middleName: string, lastName: string, title: ContactPersonalInfoTitle);
        /**
           @method
           Returns the title of the Contact

           @return {Adaptive.ContactPersonalInfoTitle} Title
           @since ARP1.0
        */
        getTitle(): ContactPersonalInfoTitle;
        /**
           @method
           Set the Title of the Contact

           @param {Adaptive.ContactPersonalInfoTitle} title of the Contact
           @since ARP1.0
        */
        setTitle(title: ContactPersonalInfoTitle): void;
        /**
           @method
           Returns the last name of the Contact

           @return {string} lastName
           @since ARP1.0
        */
        getLastName(): string;
        /**
           @method
           Set the last name of the Contact

           @param {string} lastName of the Contact
           @since ARP1.0
        */
        setLastName(lastName: string): void;
        /**
           @method
           Returns the middle name of the Contact

           @return {string} middelName
           @since ARP1.0
        */
        getMiddleName(): string;
        /**
           @method
           Set the middle name of the Contact

           @param {string} middleName of the Contact
           @since ARP1.0
        */
        setMiddleName(middleName: string): void;
        /**
           @method
           Returns the name of the Contact

           @return {string} name
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Set the name of the Contact

           @param {string} name of the Contact
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactPersonalInfo;
    }
    /**
       @class Adaptive.ContactPhone
       @extends Adaptive.APIBean
       Structure representing the phone data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactPhone extends APIBean {
        /**
           The phone number phoneType
        */
        phoneType: ContactPhoneType;
        /**
           The phone number
        */
        phone: string;
        /**
           @method constructor
           Constructor used by implementation to set the contact Phone

           @param {string} phone     Phone number
           @param {Adaptive.ContactPhoneType} phoneType Type of Phone number
           @since ARP1.0
        */
        constructor(phone: string, phoneType: ContactPhoneType);
        /**
           @method
           Returns the phone phoneType

           @return {Adaptive.ContactPhoneType} phoneType
           @since ARP1.0
        */
        getPhoneType(): ContactPhoneType;
        /**
           @method
           Set the phoneType of the phone number

           @param {Adaptive.ContactPhoneType} phoneType Type of Phone number
           @since ARP1.0
        */
        setPhoneType(phoneType: ContactPhoneType): void;
        /**
           @method
           Returns the phone number

           @return {string} phone number
           @since ARP1.0
        */
        getPhone(): string;
        /**
           @method
           Set the phone number

           @param {string} phone number
           @since ARP1.0
        */
        setPhone(phone: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactPhone;
    }
    /**
       @class Adaptive.ContactProfessionalInfo
       @extends Adaptive.APIBean
       Structure representing the professional info data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactProfessionalInfo extends APIBean {
        /**
           The company of the job
        */
        company: string;
        /**
           The job description
        */
        jobDescription: string;
        /**
           The job title
        */
        jobTitle: string;
        /**
           @method constructor
           Constructor used by implementation to set the ContactProfessionalInfo.

           @param {string} jobTitle       The job title
           @param {string} jobDescription The job description
           @param {string} company        The company of the job
           @since ARP1.0
        */
        constructor(jobTitle: string, jobDescription: string, company: string);
        /**
           @method
           Returns the company of the job

           @return {string} company
           @since ARP1.0
        */
        getCompany(): string;
        /**
           @method
           Set the company of the job

           @param {string} company The company of the job
           @since ARP1.0
        */
        setCompany(company: string): void;
        /**
           @method
           Returns the description of the job

           @return {string} description
           @since ARP1.0
        */
        getJobDescription(): string;
        /**
           @method
           Set the description of the job

           @param {string} jobDescription The job description
           @since ARP1.0
        */
        setJobDescription(jobDescription: string): void;
        /**
           @method
           Returns the title of the job

           @return {string} title
           @since ARP1.0
        */
        getJobTitle(): string;
        /**
           @method
           Set the title of the job

           @param {string} jobTitle The job title
           @since ARP1.0
        */
        setJobTitle(jobTitle: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactProfessionalInfo;
    }
    /**
       @class Adaptive.ContactSocial
       @extends Adaptive.APIBean
       Structure representing the social data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactSocial extends APIBean {
        /**
           The social network
        */
        socialNetwork: ContactSocialNetwork;
        /**
           The profileUrl
        */
        profileUrl: string;
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ContactSocialNetwork} socialNetwork of the profile
           @param {string} profileUrl    of the user
           @since ARP1.0
        */
        constructor(socialNetwork: ContactSocialNetwork, profileUrl: string);
        /**
           @method
           Returns the social network

           @return {Adaptive.ContactSocialNetwork} socialNetwork
           @since ARP1.0
        */
        getSocialNetwork(): ContactSocialNetwork;
        /**
           @method
           Set the social network

           @param {Adaptive.ContactSocialNetwork} socialNetwork of the profile
           @since ARP1.0
        */
        setSocialNetwork(socialNetwork: ContactSocialNetwork): void;
        /**
           @method
           Returns the profile url of the user

           @return {string} profileUrl
           @since ARP1.0
        */
        getProfileUrl(): string;
        /**
           @method
           Set the profile url of the iser

           @param {string} profileUrl of the user
           @since ARP1.0
        */
        setProfileUrl(profileUrl: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactSocial;
    }
    /**
       @class Adaptive.ContactTag
       @extends Adaptive.APIBean
       Structure representing the assigned tags data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactTag extends APIBean {
        /**
           The tagName of the Tag
        */
        tagName: string;
        /**
           The tagValue of the Tag
        */
        tagValue: string;
        /**
           @method constructor
           Constructor used by the implementation

           @param {string} tagValue Value of the tag
           @param {string} tagName  Name of the tag
           @since ARP1.0
        */
        constructor(tagName: string, tagValue: string);
        /**
           @method
           Returns the tagName of the Tag

           @return {string} tagName
           @since ARP1.0
        */
        getTagName(): string;
        /**
           @method
           Set the tagName of the Tag

           @param {string} tagName Name of the tag
           @since ARP1.0
        */
        setTagName(tagName: string): void;
        /**
           @method
           Returns the tagValue of the Tag

           @return {string} tagValue
           @since ARP1.0
        */
        getTagValue(): string;
        /**
           @method
           Set the tagValue of the Tag

           @param {string} tagValue Value of the tag
           @since ARP1.0
        */
        setTagValue(tagValue: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactTag;
    }
    /**
       @class Adaptive.ContactUid
       @extends Adaptive.APIBean
       Structure representing the internal unique identifier data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactUid extends APIBean {
        /**
           The id of the Contact
        */
        contactId: string;
        /**
           @method constructor
           Constructor used by implementation to set the Contact id.

           @param {string} contactId Internal unique contact id.
           @since ARP1.0
        */
        constructor(contactId: string);
        /**
           @method
           Returns the contact id

           @return {string} Contactid Internal unique contact id.
           @since ARP1.0
        */
        getContactId(): string;
        /**
           @method
           Set the id of the Contact

           @param {string} contactId Internal unique contact id.
           @since ARP1.0
        */
        setContactId(contactId: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactUid;
    }
    /**
       @class Adaptive.ContactWebsite
       @extends Adaptive.APIBean
       Structure representing the website data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class ContactWebsite extends APIBean {
        /**
           The url of the website
        */
        url: string;
        /**
           @method constructor
           Constructor used by the implementation

           @param {string} url Url of the website
           @since ARP1.0
        */
        constructor(url: string);
        /**
           @method
           Returns the url of the website

           @return {string} website url
           @since ARP1.0
        */
        getUrl(): string;
        /**
           @method
           Set the url of the website

           @param {string} url Url of the website
           @since ARP1.0
        */
        setUrl(url: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ContactWebsite;
    }
    /**
       @class Adaptive.Database
       @extends Adaptive.APIBean
       Structure representing a database reference.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class Database extends APIBean {
        /**
           Indicates if database was created or needs to be created as Compressed.
        */
        compress: boolean;
        /**
           Database Name (name of the .db local file).
        */
        name: string;
        /**
           @method constructor
           Constructor using fields.

           @param {string} name     Name of the DatabaseTable.
           @param {boolean} compress Compression enabled.
           @since ARP1.0
        */
        constructor(name: string, compress: boolean);
        /**
           @method
           Returns if the table is compressed

           @return {boolean} Compression enabled
           @since ARP1.0
        */
        getCompress(): boolean;
        /**
           @method
           Sets if the table is compressed or not.

           @param {boolean} compress Compression enabled
           @since ARP1.0
        */
        setCompress(compress: boolean): void;
        /**
           @method
           Returns the name.

           @return {string} The name of the table.
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Sets the name of the table.

           @param {string} name The name of the table.
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Database;
    }
    /**
       @class Adaptive.DatabaseColumn
       @extends Adaptive.APIBean
       Structure representing the column specification of a data column.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class DatabaseColumn extends APIBean {
        /**
           Name of the column
        */
        name: string;
        /**
           @method constructor
           Constructor with fields

           @param {string} name Name of the column
           @since ARP1.0
        */
        constructor(name: string);
        /**
           @method
           Returns the name of the column.

           @return {string} The name of the column.
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Sets the name of the column.

           @param {string} name The name of the column.
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): DatabaseColumn;
    }
    /**
       @class Adaptive.DatabaseRow
       @extends Adaptive.APIBean
       Structure representing a row for a data table.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class DatabaseRow extends APIBean {
        /**
           The values of the row.
        */
        values: string[];
        /**
           @method constructor
           Constructor for implementation using.

           @param {string[]} values The values of the row
           @since ARP1.0
        */
        constructor(values: string[]);
        /**
           @method
           Returns the values of the row.

           @return {string[]} The values of the row.
           @since ARP1.0
        */
        getValues(): string[];
        /**
           @method
           Sets the values of the row.

           @param {string[]} values The values of the row.
           @since ARP1.0
        */
        setValues(values: string[]): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): DatabaseRow;
    }
    /**
       @class Adaptive.DatabaseTable
       @extends Adaptive.APIBean
       Represents a data table composed of databaseColumns and databaseRows.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class DatabaseTable extends APIBean {
        /**
           Number of databaseColumns.
        */
        columnCount: number;
        /**
           Definition of databaseColumns.
        */
        databaseColumns: DatabaseColumn[];
        /**
           Rows of the table containing the data.
        */
        databaseRows: DatabaseRow[];
        /**
           Name of the table.
        */
        name: string;
        /**
           Number of databaseRows.
        */
        rowCount: number;
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
        constructor(name: string, columnCount: number, rowCount: number, databaseColumns: DatabaseColumn[], databaseRows: DatabaseRow[]);
        /**
           @method
           Get the number of databaseColumns

           @return {number} The number of databaseColumns
           @since ARP1.0
        */
        getColumnCount(): number;
        /**
           @method
           Sets the number of databaseColumns

           @param {number} columnCount The number of databaseColumns
           @since ARP1.0
        */
        setColumnCount(columnCount: number): void;
        /**
           @method
           Get the databaseColumns

           @return {Adaptive.DatabaseColumn[]} The databaseColumns
           @since ARP1.0
        */
        getDatabaseColumns(): DatabaseColumn[];
        /**
           @method
           Sets the databaseColumns of the table

           @param {Adaptive.DatabaseColumn[]} databaseColumns The databaseColumns of the table
           @since ARP1.0
        */
        setDatabaseColumns(databaseColumns: DatabaseColumn[]): void;
        /**
           @method
           Get the databaseRows of the table

           @return {Adaptive.DatabaseRow[]} The databaseRows of the table
           @since ARP1.0
        */
        getDatabaseRows(): DatabaseRow[];
        /**
           @method
           Sets the databaseRows of the table

           @param {Adaptive.DatabaseRow[]} databaseRows The databaseRows of the table
           @since ARP1.0
        */
        setDatabaseRows(databaseRows: DatabaseRow[]): void;
        /**
           @method
           Returns the name of the table

           @return {string} The name of the table
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Sets the name of the table

           @param {string} name The name of the table
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           @method
           Get the number of databaseRows

           @return {number} The number of databaseRows
           @since ARP1.0
        */
        getRowCount(): number;
        /**
           @method
           Sets the number of databaseRows

           @param {number} rowCount The number of databaseRows
           @since ARP1.0
        */
        setRowCount(rowCount: number): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): DatabaseTable;
    }
    /**
       @class Adaptive.DeviceInfo
       @extends Adaptive.APIBean
       Structure representing the basic device information.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class DeviceInfo extends APIBean {
        /**
           Model of device - equivalent to device release or version.
        */
        model: string;
        /**
           Name of device - equivalent to brand.
        */
        name: string;
        /**
           Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        uuid: string;
        /**
           Vendor of the device hardware.
        */
        vendor: string;
        /**
           @method constructor
           Constructor for the implementation of the platform.

           @param {string} name   or brand of the device.
           @param {string} model  of the device.
           @param {string} vendor of the device.
           @param {string} uuid   unique* identifier (* platform dependent).
           @since ARP1.0
        */
        constructor(name: string, model: string, vendor: string, uuid: string);
        /**
           @method
           Returns the model of the device.

           @return {string} String with the model of the device.
           @since ARP1.0
        */
        getModel(): string;
        /**
           @method
           Sets Model of device - equivalent to device release or version.

           @param {string} model Model of device - equivalent to device release or version.
        */
        setModel(model: string): void;
        /**
           @method
           Returns the name of the device.

           @return {string} String with device name.
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Sets Name of device - equivalent to brand.

           @param {string} name Name of device - equivalent to brand.
        */
        setName(name: string): void;
        /**
           @method
           Returns the platform dependent UUID of the device.

           @return {string} String with the 128-bit device identifier.
           @since ARP1.0
        */
        getUuid(): string;
        /**
           @method
           Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

           @param {string} uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        setUuid(uuid: string): void;
        /**
           @method
           Returns the vendor of the device.

           @return {string} String with the vendor name.
           @since ARP1.0
        */
        getVendor(): string;
        /**
           @method
           Sets Vendor of the device hardware.

           @param {string} vendor Vendor of the device hardware.
        */
        setVendor(vendor: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): DeviceInfo;
    }
    /**
       @class Adaptive.Email
       @extends Adaptive.APIBean
       Structure representing the data elements of an email.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class Email extends APIBean {
        /**
           Array of Email Blind Carbon Copy recipients
        */
        bccRecipients: EmailAddress[];
        /**
           Array of Email Carbon Copy recipients
        */
        ccRecipients: EmailAddress[];
        /**
           Array of attatchments
        */
        emailAttachmentData: EmailAttachmentData[];
        /**
           Message body
        */
        messageBody: string;
        /**
           Message body mime type
        */
        messageBodyMimeType: string;
        /**
           Subject of the email
        */
        subject: string;
        /**
           Array of Email recipients
        */
        toRecipients: EmailAddress[];
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
        constructor(toRecipients: EmailAddress[], ccRecipients: EmailAddress[], bccRecipients: EmailAddress[], emailAttachmentData: EmailAttachmentData[], messageBody: string, messageBodyMimeType: string, subject: string);
        /**
           @method
           Returns the array of recipients

           @return {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
           @since ARP1.0
        */
        getBccRecipients(): EmailAddress[];
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
           @since ARP1.0
        */
        setBccRecipients(bccRecipients: EmailAddress[]): void;
        /**
           @method
           Returns the array of recipients

           @return {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
           @since ARP1.0
        */
        getCcRecipients(): EmailAddress[];
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
           @since ARP1.0
        */
        setCcRecipients(ccRecipients: EmailAddress[]): void;
        /**
           @method
           Returns an array of attachments

           @return {Adaptive.EmailAttachmentData[]} emailAttachmentData array with the email attachments
           @since ARP1.0
        */
        getEmailAttachmentData(): EmailAttachmentData[];
        /**
           @method
           Set the email attachment data array

           @param {Adaptive.EmailAttachmentData[]} emailAttachmentData array of email attatchments
           @since ARP1.0
        */
        setEmailAttachmentData(emailAttachmentData: EmailAttachmentData[]): void;
        /**
           @method
           Returns the message body of the email

           @return {string} message Body string of the email
           @since ARP1.0
        */
        getMessageBody(): string;
        /**
           @method
           Set the message body of the email

           @param {string} messageBody message body of the email
           @since ARP1.0
        */
        setMessageBody(messageBody: string): void;
        /**
           @method
           Returns the myme type of the message body

           @return {string} mime type string of the message boddy
           @since ARP1.0
        */
        getMessageBodyMimeType(): string;
        /**
           @method
           Set the mime type for the message body

           @param {string} messageBodyMimeType type of the body message
           @since ARP1.0
        */
        setMessageBodyMimeType(messageBodyMimeType: string): void;
        /**
           @method
           Returns the subject of the email

           @return {string} subject string of the email
           @since ARP1.0
        */
        getSubject(): string;
        /**
           @method
           Set the subject of the email

           @param {string} subject of the email
           @since ARP1.0
        */
        setSubject(subject: string): void;
        /**
           @method
           Returns the array of recipients

           @return {Adaptive.EmailAddress[]} toRecipients array of recipients
           @since ARP1.0
        */
        getToRecipients(): EmailAddress[];
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} toRecipients array of recipients
           @since ARP1.0
        */
        setToRecipients(toRecipients: EmailAddress[]): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Email;
    }
    /**
       @class Adaptive.EmailAddress
       @extends Adaptive.APIBean
       Structure representing the data elements of an email addressee.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class EmailAddress extends APIBean {
        /**
           The Email address
        */
        address: string;
        /**
           @method constructor
           Constructor used by implementation

           @param {string} address of the Email
           @since ARP1.0
        */
        constructor(address: string);
        /**
           @method
           Returns the email address

           @return {string} address of the Email
           @since ARP1.0
        */
        getAddress(): string;
        /**
           @method
           Set the Email address

           @param {string} address of the Email
           @since ARP1.0
        */
        setAddress(address: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): EmailAddress;
    }
    /**
       @class Adaptive.EmailAttachmentData
       @extends Adaptive.APIBean
       Structure representing the binary attachment data.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class EmailAttachmentData extends APIBean {
        /**
           The raw data for the current file attachment (byte array)
        */
        data: number[];
        /**
           The name of the current file attachment
        */
        fileName: string;
        /**
           The mime type of the current attachment
        */
        mimeType: string;
        /**
           The relative path where the contents for the attachment file could be located.
        */
        referenceUrl: string;
        /**
           The data size (in bytes) of the current file attachment
        */
        size: number;
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
        constructor(data: number[], size: number, fileName: string, mimeType: string, referenceUrl: string);
        /**
           @method
           Returns the raw data in byte[]

           @return {number[]} data Octet-binary content of the attachment payload.
           @since ARP1.0
        */
        getData(): number[];
        /**
           @method
           Set the data of the attachment as a byte[]

           @param {number[]} data Sets the octet-binary content of the attachment.
           @since ARP1.0
        */
        setData(data: number[]): void;
        /**
           @method
           Returns the filename of the attachment

           @return {string} fileName Name of the attachment.
           @since ARP1.0
        */
        getFileName(): string;
        /**
           @method
           Set the name of the file attachment

           @param {string} fileName Name of the attachment.
           @since ARP1.0
        */
        setFileName(fileName: string): void;
        /**
           @method
           Returns the mime type of the attachment

           @return {string} mimeType
           @since ARP1.0
        */
        getMimeType(): string;
        /**
           @method
           Set the mime type of the attachment

           @param {string} mimeType Mime-type of the attachment.
           @since ARP1.0
        */
        setMimeType(mimeType: string): void;
        /**
           @method
           Returns the absolute url of the file attachment

           @return {string} referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        getReferenceUrl(): string;
        /**
           @method
           Set the absolute url of the attachment

           @param {string} referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        setReferenceUrl(referenceUrl: string): void;
        /**
           @method
           Returns the size of the attachment as a long

           @return {number} size Length in bytes of the octet-binary content.
           @since ARP1.0
        */
        getSize(): number;
        /**
           @method
           Set the size of the attachment as a long

           @param {number} size Length in bytes of the octet-binary content ( should be same as data array length.)
           @since ARP1.0
        */
        setSize(size: number): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): EmailAttachmentData;
    }
    /**
       @class Adaptive.FileDescriptor
       @extends Adaptive.APIBean
       Implementation of FileDescriptor bean.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    class FileDescriptor extends APIBean {
        dateCreated: number;
        dateModified: number;
        name: string;
        path: string;
        pathAbsolute: string;
        size: number;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Returns the milliseconds passed since 1/1/1970 since the file was created.

           @return {number} Timestamp in milliseconds.
           @since ARP1.0
        */
        getDateCreated(): number;
        /**
           @method
           Sets the creation timestamp in milliseconds. Used internally.

           @param {number} dateCreated Timestamp of file creation or -1 if the file or folder doesn't exist.
        */
        setDateCreated(dateCreated: number): void;
        /**
           @method
           Returns the milliseconds passed since 1/1/1970 since the file was modified.

           @return {number} Timestamp in milliseconds.
           @since ARP1.0
        */
        getDateModified(): number;
        /**
           @method
           Sets the file or folder modification timestamp in milliseconds. Used internally.

           @param {number} dateModified Timestamp of file modification or -1 if the file or folder doesn't exist.
        */
        setDateModified(dateModified: number): void;
        /**
           @method
           Returns the name of the file if the reference is a file or the last path element of the folder.

           @return {string} The name of the file.
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Sets the name of the file. Used internally.

           @param {string} name Name of the file or last folder path element.
        */
        setName(name: string): void;
        /**
           @method
           Returns the path element of the file or folder (excluding the last path element if it's a directory).

           @return {string} The path to the file.
           @since ARP1.0
        */
        getPath(): string;
        /**
           @method
           Sets the path of the file or folder. Used internally.

           @param {string} path The path element of the file or folder.
        */
        setPath(path: string): void;
        /**
           @method
           Returns the resolved absolute path elements of the file and/or folders (including the last path element).

           @return {string} The absolute path to the file.
           @since ARP1.0
        */
        getPathAbsolute(): string;
        /**
           @method
           Sets the absolute path of the file or folder. Used internally.

           @param {string} pathAbsolute String with the absolute path of file or folder.
        */
        setPathAbsolute(pathAbsolute: string): void;
        /**
           @method
           Returns the size in bytes of the file or -1 if the reference is a folder.

           @return {number} Size in bytes of file.
           @since ARP1.0
        */
        getSize(): number;
        /**
           @method
           Sets the file size in bytes of the file. If the file is a folder, this will be 0. If the file
doesn't exist, this will be -1. Used internally.

           @param {number} size The size in bytes of the file.
        */
        setSize(size: number): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): FileDescriptor;
    }
    /**
       @class Adaptive.Geolocation
       @extends Adaptive.APIBean
       Structure representing the data a single geolocation reading.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class Geolocation extends APIBean {
        /**
           The current device altitude (or Z coordinate). Measured in meters.
        */
        altitude: number;
        /**
           The Y coordinate (or latitude). Measured in degrees.
        */
        latitude: number;
        /**
           The X coordinate (or longitude). Measured in degrees.
        */
        longitude: number;
        /**
           Timestamp of the geolocation reading.
        */
        timestamp: number;
        /**
           Dilution of precision on the X measurement. Measured in meters.
        */
        xDoP: number;
        /**
           Dilution of precision on the Y measurement. Measured in meters.
        */
        yDoP: number;
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
        constructor(latitude: number, longitude: number, altitude: number, xDoP: number, yDoP: number, timestamp: number);
        /**
           @method
           Returns altitude in meters

           @return {number} Altitude of the measurement
           @since ARP1.0
        */
        getAltitude(): number;
        /**
           @method
           Set altitude in meters

           @param {number} altitude Altitude of the measurement
           @since ARP1.0
        */
        setAltitude(altitude: number): void;
        /**
           @method
           Returns the latitude in degrees

           @return {number} Latitude of the measurement
           @since ARP1.0
        */
        getLatitude(): number;
        /**
           @method
           Set the latitude in degrees

           @param {number} latitude Latitude of the measurement
           @since ARP1.0
        */
        setLatitude(latitude: number): void;
        /**
           @method
           Returns the longitude in degrees

           @return {number} Longitude of the measurement
           @since ARP1.0
        */
        getLongitude(): number;
        /**
           @method
           Returns the latitude in degrees

           @param {number} longitude Longitude of the measurement
           @since ARP1.0
        */
        setLongitude(longitude: number): void;
        /**
           @method
           Timestamp Getter

           @return {number} Timestamp
           @since ARP1.0
        */
        getTimestamp(): number;
        /**
           @method
           Timestamp Setter

           @param {number} timestamp Timestamp
           @since ARP1.0
        */
        setTimestamp(timestamp: number): void;
        /**
           @method
           Gets Dilution of precision on the X measurement. Measured in meters.

           @return {number} xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        getXDoP(): number;
        /**
           @method
           Sets Dilution of precision on the X measurement. Measured in meters.

           @param {number} xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        setXDoP(xDoP: number): void;
        /**
           @method
           Gets Dilution of precision on the Y measurement. Measured in meters.

           @return {number} yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        getYDoP(): number;
        /**
           @method
           Sets Dilution of precision on the Y measurement. Measured in meters.

           @param {number} yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        setYDoP(yDoP: number): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Geolocation;
    }
    /**
       @class Adaptive.KeyPair
       @extends Adaptive.APIBean
       Represents a basic bean to store keyName pair values

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class KeyPair extends APIBean {
        /**
           Key of the element
        */
        keyName: string;
        /**
           Value of the element
        */
        keyValue: string;
        /**
           @method constructor
           Constructor using fields

           @param {string} keyName  Key of the element
           @param {string} keyValue Value of the element
           @since ARP1.0
        */
        constructor(keyName: string, keyValue: string);
        /**
           @method
           Returns the keyName of the element

           @return {string} Key of the element
           @since ARP1.0
        */
        getKeyName(): string;
        /**
           @method
           Sets the keyName of the element

           @param {string} keyName Key of the element
           @since ARP1.0
        */
        setKeyName(keyName: string): void;
        /**
           @method
           Returns the keyValue of the element

           @return {string} Value of the element
           @since ARP1.0
        */
        getKeyValue(): string;
        /**
           @method
           Sets the keyValue of the element

           @param {string} keyValue Value of the element
           @since ARP1.0
        */
        setKeyValue(keyValue: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): KeyPair;
    }
    /**
       @class Adaptive.Lifecycle
       @extends Adaptive.APIBean
       Represents a specific application life-cycle stage.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class Lifecycle extends APIBean {
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
        state: LifecycleState;
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.LifecycleState} state of the app
           @since ARP1.0
        */
        constructor(state: LifecycleState);
        /**
           @method
           Returns the state of the application

           @return {Adaptive.LifecycleState} state of the app
           @since ARP1.0
        */
        getState(): LifecycleState;
        /**
           @method
           Set the State of the application

           @param {Adaptive.LifecycleState} state of the app
           @since ARP1.0
        */
        setState(state: LifecycleState): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Lifecycle;
    }
    /**
       @class Adaptive.Locale
       @extends Adaptive.APIBean
       Represents a specific user or system locate.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class Locale extends APIBean {
        /**
           A valid ISO Country Code.
        */
        country: string;
        /**
           A valid ISO Language Code.
        */
        language: string;
        /**
           @method constructor
           Constructor used by the implementation

           @param {string} country  Country of the Locale
           @param {string} language Language of the Locale
           @since ARP1.0
        */
        constructor(language: string, country: string);
        /**
           @method
           Returns the country code

           @return {string} country code
           @since ARP1.0
        */
        getCountry(): string;
        /**
           @method
           Set the country code

           @param {string} country code
           @since ARP1.0
        */
        setCountry(country: string): void;
        /**
           @method
           Returns the language code

           @return {string} language code
           @since ARP1.0
        */
        getLanguage(): string;
        /**
           @method
           Set the language code

           @param {string} language code
           @since ARP1.0
        */
        setLanguage(language: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Locale;
    }
    /**
       @class Adaptive.OSInfo
       @extends Adaptive.APIBean
       Represents the basic information about the operating system.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class OSInfo extends APIBean {
        /**
           The name of the operating system.
        */
        name: IOSType;
        /**
           The vendor of the operating system.
        */
        vendor: string;
        /**
           The version/identifier of the operating system.
        */
        version: string;
        /**
           @method constructor
           Constructor used by implementation to set the OS information.

           @param {Adaptive.IOSType} name    of the OS.
           @param {string} version of the OS.
           @param {string} vendor  of the OS.
           @since ARP1.0
        */
        constructor(name: IOSType, version: string, vendor: string);
        /**
           @method
           Returns the name of the operating system.

           @return {Adaptive.IOSType} OS name.
           @since ARP1.0
        */
        getName(): IOSType;
        /**
           @method
           Sets The name of the operating system.

           @param {Adaptive.IOSType} name The name of the operating system.
        */
        setName(name: IOSType): void;
        /**
           @method
           Returns the vendor of the operating system.

           @return {string} OS vendor.
           @since ARP1.0
        */
        getVendor(): string;
        /**
           @method
           Sets The vendor of the operating system.

           @param {string} vendor The vendor of the operating system.
        */
        setVendor(vendor: string): void;
        /**
           @method
           Returns the version of the operating system.

           @return {string} OS version.
           @since ARP1.0
        */
        getVersion(): string;
        /**
           @method
           Sets The version/identifier of the operating system.

           @param {string} version The version/identifier of the operating system.
        */
        setVersion(version: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): OSInfo;
    }
    /**
       @class Adaptive.SecureKeyPair
       @extends Adaptive.APIBean
       Represents a single secureKey-value pair.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class SecureKeyPair extends APIBean {
        /**
           Value of the secured element
        */
        secureData: string;
        /**
           Key of the secured element
        */
        secureKey: string;
        /**
           @method constructor
           Constructor with parameters

           @param {string} secureKey  name of the keypair
           @param {string} secureData value of the keypair
           @since ARP1.0
        */
        constructor(secureKey: string, secureData: string);
        /**
           @method
           Returns the object value

           @return {string} Value.
           @since ARP 1.0
        */
        getSecureData(): string;
        /**
           @method
           Sets the value for this object

           @param {string} secureData value to set.
           @since ARP 1.0
        */
        setSecureData(secureData: string): void;
        /**
           @method
           Returns the object secureKey name.

           @return {string} Key name.
           @since ARP 1.0
        */
        getSecureKey(): string;
        /**
           @method
           Sets the secureKey name for this object.

           @param {string} secureKey Key name.
           @since ARP 1.0
        */
        setSecureKey(secureKey: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): SecureKeyPair;
    }
    /**
       @class Adaptive.Service
       @extends Adaptive.APIBean
       Represents an instance of a service.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class Service extends APIBean {
        /**
           The type of the service
        */
        type: IServiceType;
        /**
           The service name
        */
        name: string;
        /**
           Endpoint of the service
        */
        serviceEndpoints: ServiceEndpoint[];
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoints of the service
           @param {string} name             Name of the service
           @param {Adaptive.IServiceType} type             Type of the service
           @since ARP1.0
        */
        constructor(serviceEndpoints: ServiceEndpoint[], name: string, type: IServiceType);
        /**
           @method
           Returns the type

           @return {Adaptive.IServiceType} type
           @since ARP1.0
        */
        getType(): IServiceType;
        /**
           @method
           Set the type

           @param {Adaptive.IServiceType} type Type of the service
           @since ARP1.0
        */
        setType(type: IServiceType): void;
        /**
           @method
           Returns the name

           @return {string} name
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Set the name

           @param {string} name Name of the service
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           @method
           Returns the serviceEndpoints

           @return {Adaptive.ServiceEndpoint[]} serviceEndpoints
           @since ARP1.0
        */
        getServiceEndpoints(): ServiceEndpoint[];
        /**
           @method
           Set the serviceEndpoints

           @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoint of the service
           @since ARP1.0
        */
        setServiceEndpoints(serviceEndpoints: ServiceEndpoint[]): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Service;
    }
    /**
       @class Adaptive.ServiceCookie
       @extends Adaptive.APIBean
       Structure representing the cookieValue of a http cookie.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class ServiceCookie extends APIBean {
        /**
           Name ot the cookie
        */
        cookieName: string;
        /**
           Value of the ServiceCookie
        */
        cookieValue: string;
        /**
           ServiceCookie creation timestamp in milliseconds.
        */
        creation: number;
        /**
           Domain for which the cookie is valid.
        */
        domain: string;
        /**
           ServiceCookie expiry in milliseconds or -1 for session only.
        */
        expiry: number;
        /**
           URI path for which the cookie is valid.
        */
        path: string;
        /**
           Scheme of the domain - http/https - for which the cookie is valid.
        */
        scheme: string;
        /**
           ServiceCookie is secure (https only)
        */
        secure: boolean;
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
        constructor(cookieName: string, cookieValue: string, domain: string, path: string, scheme: string, secure: boolean, expiry: number, creation: number);
        /**
           @method
           Returns the cookie cookieName

           @return {string} cookieName Name of the cookie
           @since ARP1.0
        */
        getCookieName(): string;
        /**
           @method
           Set the cookie cookieName

           @param {string} cookieName Name of the cookie
           @since ARP1.0
        */
        setCookieName(cookieName: string): void;
        /**
           @method
           Returns the cookie cookieValue

           @return {string} Value of the cookie
           @since ARP1.0
        */
        getCookieValue(): string;
        /**
           @method
           Set the cookie cookieValue

           @param {string} cookieValue Value of the cookie
           @since ARP1.0
        */
        setCookieValue(cookieValue: string): void;
        /**
           @method
           Returns the creation date

           @return {number} Creation date of the cookie
           @since ARP1.0
        */
        getCreation(): number;
        /**
           @method
           Sets the creation date

           @param {number} creation Creation date of the cookie
           @since ARP1.0
        */
        setCreation(creation: number): void;
        /**
           @method
           Returns the domain

           @return {string} domain
           @since ARP1.0
        */
        getDomain(): string;
        /**
           @method
           Set the domain

           @param {string} domain Domain of the cookie
           @since ARP1.0
        */
        setDomain(domain: string): void;
        /**
           @method
           Returns the expiration date in milis

           @return {number} expiry
           @since ARP1.0
        */
        getExpiry(): number;
        /**
           @method
           Set the expiration date in milis

           @param {number} expiry Expiration date of the cookie
           @since ARP1.0
        */
        setExpiry(expiry: number): void;
        /**
           @method
           Returns the path

           @return {string} path
           @since ARP1.0
        */
        getPath(): string;
        /**
           @method
           Set the path

           @param {string} path Path of the cookie
           @since ARP1.0
        */
        setPath(path: string): void;
        /**
           @method
           Returns the scheme

           @return {string} scheme
           @since ARP1.0
        */
        getScheme(): string;
        /**
           @method
           Set the scheme

           @param {string} scheme Scheme of the cookie
           @since ARP1.0
        */
        setScheme(scheme: string): void;
        /**
           @method
           Returns whether the cookie is secure or not

           @return {boolean} true if the cookie is secure; false otherwise
           @since ARP1.0
        */
        getSecure(): boolean;
        /**
           @method
           Set whether the cookie is secure or not

           @param {boolean} secure Privacy of the cookie
           @since ARP1.0
        */
        setSecure(secure: boolean): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ServiceCookie;
    }
    /**
       @class Adaptive.ServiceEndpoint
       @extends Adaptive.APIBean
       Structure representing a remote or local service access end-point.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class ServiceEndpoint extends APIBean {
        /**
           The remote service host (alias or IP).
        */
        host: string;
        /**
           The remote service paths (to be added to the host and port url).
        */
        paths: ServicePath[];
        /**
           The remote service accessible port.
        */
        port: number;
        /**
           The proxy url - if needed - to access the remote service. If IP and port are used, use the following syntax: "http://<IP>:<Port>".
        */
        proxy: string;
        /**
           The remote service scheme.
        */
        scheme: string;
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
        constructor(host: string, paths: ServicePath[], port: number, proxy: string, scheme: string);
        /**
           @method
           Returns the Remote service host

           @return {string} Remote service host
           @since ARP1.0
        */
        getHost(): string;
        /**
           @method
           Set the Remote service host

           @param {string} host Remote service host
           @since ARP1.0
        */
        setHost(host: string): void;
        /**
           @method
           Returns the Remote service Paths

           @return {Adaptive.ServicePath[]} Remote service Paths
           @since ARP1.0
        */
        getPaths(): ServicePath[];
        /**
           @method
           Set the Remote service Paths

           @param {Adaptive.ServicePath[]} paths Remote service Paths
           @since ARP1.0
        */
        setPaths(paths: ServicePath[]): void;
        /**
           @method
           Returns the Remote service Port

           @return {number} Remote service Port
           @since ARP1.0
        */
        getPort(): number;
        /**
           @method
           Set the Remote service Port

           @param {number} port Remote service Port
           @since ARP1.0
        */
        setPort(port: number): void;
        /**
           @method
           Return the Proxy url

           @return {string} Proxy url
           @since ARP1.0
        */
        getProxy(): string;
        /**
           @method
           Set the Proxy url

           @param {string} proxy Proxy url
           @since ARP1.0
        */
        setProxy(proxy: string): void;
        /**
           @method
           Returns the Remote service scheme

           @return {string} Remote service scheme
           @since ARP1.0
        */
        getScheme(): string;
        /**
           @method
           Set the Remote service scheme

           @param {string} scheme Remote service scheme
           @since ARP1.0
        */
        setScheme(scheme: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ServiceEndpoint;
    }
    /**
       @class Adaptive.ServiceHeader
       @extends Adaptive.APIBean
       Structure representing the data of a http request or response header.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class ServiceHeader extends APIBean {
        /**
           Value of the header
        */
        data: string;
        /**
           Name ot the header
        */
        name: string;
        /**
           @method constructor
           Constructor with fields

           @param {string} name Name of the header
           @param {string} data Value of the header
           @since ARP1.0
        */
        constructor(name: string, data: string);
        /**
           @method
           Returns the header value

           @return {string} ServiceHeader value
           @since ARP1.0
        */
        getData(): string;
        /**
           @method
           Set the header value

           @param {string} data ServiceHeader value
           @since ARP1.0
        */
        setData(data: string): void;
        /**
           @method
           Returns the header name

           @return {string} ServiceHeader name
           @since ARP1.0
        */
        getName(): string;
        /**
           @method
           Set the header name

           @param {string} name Name of the header
           @since ARP1.0
        */
        setName(name: string): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ServiceHeader;
    }
    /**
       @class Adaptive.ServiceRequest
       @extends Adaptive.APIBean
       Represents a local or remote service request.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class ServiceRequest extends APIBean {
        /**
           The HTTP procotol version to be used for this request.
        */
        protocolVersion: IServiceProtocolVersion;
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           The byte[] representing the Content field.
        */
        contentBinary: number[];
        /**
           The length in bytes for the binary Content.
        */
        contentBinaryLength: number;
        /**
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           The length in bytes for the Content field.
        */
        contentLength: number;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The request method
        */
        method: string;
        /**
           The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        */
        serviceHeaders: ServiceHeader[];
        /**
           Information about the session
        */
        serviceSession: ServiceSession;
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
        constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: number[], contentBinaryLength: number, serviceHeaders: ServiceHeader[], method: string, protocolVersion: IServiceProtocolVersion, serviceSession: ServiceSession);
        /**
           @method
           Returns the protocol version

           @return {Adaptive.IServiceProtocolVersion} protocolVersion enum
           @since ARP1.0
        */
        getProtocolVersion(): IServiceProtocolVersion;
        /**
           @method
           Set the protocol version

           @param {Adaptive.IServiceProtocolVersion} protocolVersion The HTTP procotol version to be used for this request.
           @since ARP1.0
        */
        setProtocolVersion(protocolVersion: IServiceProtocolVersion): void;
        /**
           @method
           Returns the content

           @return {string} content
           @since ARP1.0
        */
        getContent(): string;
        /**
           @method
           Set the content

           @param {string} content Request/Response data content (plain text)
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           @method
           Returns the byte[] of the content

           @return {number[]} contentBinary
           @since ARP1.0
        */
        getContentBinary(): number[];
        /**
           @method
           Set the byte[] of the content

           @param {number[]} contentBinary The byte[] representing the Content field.
           @since ARP1.0
        */
        setContentBinary(contentBinary: number[]): void;
        /**
           @method
           Retrusn the binary content length

           @return {number} contentBinaryLength
           @since ARP1.0
        */
        getContentBinaryLength(): number;
        /**
           @method
           Set the binary content length

           @param {number} contentBinaryLength The length in bytes for the binary Content.
           @since ARP1.0
        */
        setContentBinaryLength(contentBinaryLength: number): void;
        /**
           @method
           Returns the content encoding

           @return {string} contentEncoding
           @since ARP1.0
        */
        getContentEncoding(): string;
        /**
           @method
           Set the content encoding

           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           @method
           Returns the content length

           @return {number} contentLength
           @since ARP1.0
        */
        getContentLength(): number;
        /**
           @method
           Set the content length

           @param {number} contentLength The length in bytes for the Content field.
           @since ARP1.0
        */
        setContentLength(contentLength: number): void;
        /**
           @method
           Returns the content type

           @return {string} contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           @method
           Set the content type

           @param {string} contentType The request/response content type (MIME TYPE).
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           @method
           Returns the method

           @return {string} method
           @since ARP1.0
        */
        getMethod(): string;
        /**
           @method
           Set the method

           @param {string} method The request method
           @since ARP1.0
        */
        setMethod(method: string): void;
        /**
           @method
           Returns the array of ServiceHeader

           @return {Adaptive.ServiceHeader[]} serviceHeaders
           @since ARP1.0
        */
        getServiceHeaders(): ServiceHeader[];
        /**
           @method
           Set the array of ServiceHeader

           @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since ARP1.0
        */
        setServiceHeaders(serviceHeaders: ServiceHeader[]): void;
        /**
           @method
           Getter for service session

           @return {Adaptive.ServiceSession} The element service session
           @since ARP1.0
        */
        getServiceSession(): ServiceSession;
        /**
           @method
           Setter for service session

           @param {Adaptive.ServiceSession} serviceSession The element service session
           @since ARP1.0
        */
        setServiceSession(serviceSession: ServiceSession): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ServiceRequest;
    }
    /**
       @class Adaptive.ServiceResponse
       @extends Adaptive.APIBean
       Represents a local or remote service response.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    class ServiceResponse extends APIBean {
        /**
           Request/Response data content (plain text).
        */
        content: string;
        /**
           The byte[] representing the binary Content.
        */
        contentBinary: number[];
        /**
           The length in bytes for the binary Content.
        */
        contentBinaryLength: number;
        /**
           Encoding of the binary payload - by default assumed to be UTF8.
        */
        contentEncoding: string;
        /**
           The length in bytes for the Content field.
        */
        contentLength: number;
        /**
           The request/response content type (MIME TYPE).
        */
        contentType: string;
        /**
           The serviceHeaders array (name,value pairs) to be included on the I/O service request.
        */
        serviceHeaders: ServiceHeader[];
        /**
           Information about the session
        */
        serviceSession: ServiceSession;
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
        constructor(content: string, contentType: string, contentEncoding: string, contentLength: number, contentBinary: number[], contentBinaryLength: number, serviceHeaders: ServiceHeader[], serviceSession: ServiceSession);
        /**
           @method
           Returns the content

           @return {string} content
           @since ARP1.0
        */
        getContent(): string;
        /**
           @method
           Set the content

           @param {string} content Request/Response data content (plain text).
           @since ARP1.0
        */
        setContent(content: string): void;
        /**
           @method
           Returns the binary content

           @return {number[]} contentBinary
           @since ARP1.0
        */
        getContentBinary(): number[];
        /**
           @method
           Set the binary content

           @param {number[]} contentBinary The byte[] representing the binary Content.
           @since ARP1.0
        */
        setContentBinary(contentBinary: number[]): void;
        /**
           @method
           Returns the binary content length

           @return {number} contentBinaryLength
           @since ARP1.0
        */
        getContentBinaryLength(): number;
        /**
           @method
           Set the binary content length

           @param {number} contentBinaryLength The length in bytes for the binary Content.
           @since ARP1.0
        */
        setContentBinaryLength(contentBinaryLength: number): void;
        /**
           @method
           Returns the content encoding

           @return {string} contentEncoding
           @since ARP1.0
        */
        getContentEncoding(): string;
        /**
           @method
           Set the content encoding

           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since ARP1.0
        */
        setContentEncoding(contentEncoding: string): void;
        /**
           @method
           Returns the content length

           @return {number} contentLength
           @since ARP1.0
        */
        getContentLength(): number;
        /**
           @method
           Set the content length

           @param {number} contentLength The length in bytes for the Content field.
           @since ARP1.0
        */
        setContentLength(contentLength: number): void;
        /**
           @method
           Returns the content type

           @return {string} contentType
           @since ARP1.0
        */
        getContentType(): string;
        /**
           @method
           Set the content type

           @param {string} contentType The request/response content type (MIME TYPE).
           @since ARP1.0
        */
        setContentType(contentType: string): void;
        /**
           @method
           Returns the array of ServiceHeader

           @return {Adaptive.ServiceHeader[]} serviceHeaders
           @since ARP1.0
        */
        getServiceHeaders(): ServiceHeader[];
        /**
           @method
           Set the array of ServiceHeader

           @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since ARP1.0
        */
        setServiceHeaders(serviceHeaders: ServiceHeader[]): void;
        /**
           @method
           Getter for service session

           @return {Adaptive.ServiceSession} The element service session
           @since ARP1.0
        */
        getServiceSession(): ServiceSession;
        /**
           @method
           Setter for service session

           @param {Adaptive.ServiceSession} serviceSession The element service session
           @since ARP1.0
        */
        setServiceSession(serviceSession: ServiceSession): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ServiceResponse;
    }
    /**
       @class Adaptive.ServiceSession
       @extends Adaptive.APIBean
       Represents a session object for HTTP request and responses

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    class ServiceSession extends APIBean {
        /**
           The attributes of the response
        */
        attributes: string[];
        /**
           The cookies of the response
        */
        cookies: ServiceCookie[];
        /**
           @method constructor
           Constructor with fields

           @param {Adaptive.ServiceCookie[]} cookies    The cookies of the response
           @param {string[]} attributes Attributes of the response
           @since ARP1.0
        */
        constructor(cookies: ServiceCookie[], attributes: string[]);
        /**
           @method
           Gets the attributes of the response

           @return {string[]} Attributes of the response
           @since ARP1.0
        */
        getAttributes(): string[];
        /**
           @method
           Sets the attributes for the response

           @param {string[]} attributes Attributes of the response
           @since ARP1.0
        */
        setAttributes(attributes: string[]): void;
        /**
           @method
           Returns the cookies of the response

           @return {Adaptive.ServiceCookie[]} The cookies of the response
           @since ARP1.0
        */
        getCookies(): ServiceCookie[];
        /**
           @method
           Sets the cookies of the response

           @param {Adaptive.ServiceCookie[]} cookies The cookies of the response
           @since ARP1.0
        */
        setCookies(cookies: ServiceCookie[]): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): ServiceSession;
    }
    /**
       @class Adaptive.Contact
       @extends Adaptive.ContactUid
       Structure representing the data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    class Contact extends ContactUid {
        /**
           The adresses from the contact
        */
        contactAddresses: ContactAddress[];
        /**
           The emails from the contact
        */
        contactEmails: ContactEmail[];
        /**
           The phones from the contact
        */
        contactPhones: ContactPhone[];
        /**
           The social network info from the contact
        */
        contactSocials: ContactSocial[];
        /**
           The aditional tags from the contact
        */
        contactTags: ContactTag[];
        /**
           The websites from the contact
        */
        contactWebsites: ContactWebsite[];
        /**
           The personal info from the contact
        */
        personalInfo: ContactPersonalInfo;
        /**
           The professional info from the contact
        */
        professionalInfo: ContactProfessionalInfo;
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
        constructor(contactId: string, personalInfo: ContactPersonalInfo, professionalInfo: ContactProfessionalInfo, contactAddresses: ContactAddress[], contactPhones: ContactPhone[], contactEmails: ContactEmail[], contactWebsites: ContactWebsite[], contactSocials: ContactSocial[], contactTags: ContactTag[]);
        /**
           @method
           Returns all the addresses of the Contact

           @return {Adaptive.ContactAddress[]} ContactAddress[]
           @since ARP1.0
        */
        getContactAddresses(): ContactAddress[];
        /**
           @method
           Set the addresses of the Contact

           @param {Adaptive.ContactAddress[]} contactAddresses Addresses of the contact
           @since ARP1.0
        */
        setContactAddresses(contactAddresses: ContactAddress[]): void;
        /**
           @method
           Returns all the emails of the Contact

           @return {Adaptive.ContactEmail[]} ContactEmail[]
           @since ARP1.0
        */
        getContactEmails(): ContactEmail[];
        /**
           @method
           Set the emails of the Contact

           @param {Adaptive.ContactEmail[]} contactEmails Emails of the contact
           @since ARP1.0
        */
        setContactEmails(contactEmails: ContactEmail[]): void;
        /**
           @method
           Returns all the phones of the Contact

           @return {Adaptive.ContactPhone[]} ContactPhone[]
           @since ARP1.0
        */
        getContactPhones(): ContactPhone[];
        /**
           @method
           Set the phones of the Contact

           @param {Adaptive.ContactPhone[]} contactPhones Phones of the contact
           @since ARP1.0
        */
        setContactPhones(contactPhones: ContactPhone[]): void;
        /**
           @method
           Returns all the social network info of the Contact

           @return {Adaptive.ContactSocial[]} ContactSocial[]
           @since ARP1.0
        */
        getContactSocials(): ContactSocial[];
        /**
           @method
           Set the social network info of the Contact

           @param {Adaptive.ContactSocial[]} contactSocials Social Networks of the contact
           @since ARP1.0
        */
        setContactSocials(contactSocials: ContactSocial[]): void;
        /**
           @method
           Returns the additional tags of the Contact

           @return {Adaptive.ContactTag[]} ContactTag[]
           @since ARP1.0
        */
        getContactTags(): ContactTag[];
        /**
           @method
           Set the additional tags of the Contact

           @param {Adaptive.ContactTag[]} contactTags Tags of the contact
           @since ARP1.0
        */
        setContactTags(contactTags: ContactTag[]): void;
        /**
           @method
           Returns all the websites of the Contact

           @return {Adaptive.ContactWebsite[]} ContactWebsite[]
           @since ARP1.0
        */
        getContactWebsites(): ContactWebsite[];
        /**
           @method
           Set the websites of the Contact

           @param {Adaptive.ContactWebsite[]} contactWebsites Websites of the contact
           @since ARP1.0
        */
        setContactWebsites(contactWebsites: ContactWebsite[]): void;
        /**
           @method
           Returns the personal info of the Contact

           @return {Adaptive.ContactPersonalInfo} ContactPersonalInfo of the Contact
           @since ARP1.0
        */
        getPersonalInfo(): ContactPersonalInfo;
        /**
           @method
           Set the personal info of the Contact

           @param {Adaptive.ContactPersonalInfo} personalInfo Personal Information
           @since ARP1.0
        */
        setPersonalInfo(personalInfo: ContactPersonalInfo): void;
        /**
           @method
           Returns the professional info of the Contact

           @return {Adaptive.ContactProfessionalInfo} Array of personal info
           @since ARP1.0
        */
        getProfessionalInfo(): ContactProfessionalInfo;
        /**
           @method
           Set the professional info of the Contact

           @param {Adaptive.ContactProfessionalInfo} professionalInfo Professional Information
           @since ARP1.0
        */
        setProfessionalInfo(professionalInfo: ContactProfessionalInfo): void;
        /**
           Convert JSON parsed object to typed equivalent.
        */
        static toObject(object: any): Contact;
    }
    class BaseListener implements IBaseListener {
        /**
           Unique id of listener.
        */
        id: number;
        /**
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           Constructor with listener id.

           @param id  The id of the listener.
        */
        constructor(id: number);
        /**
           Get the listener id.
           @return {number} long with the identifier of the listener.
        */
        getId(): number;
        /**
           Return the API group for the given interface.
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       AccelerationListener control dictionary.
    */
    var registeredAccelerationListener: Dictionary<IAccelerationListener>;
    /**
       AccelerationListener global listener handlers.
    */
    function handleAccelerationListenerError(id: number, error: IAccelerationListenerError): void;
    function handleAccelerationListenerResult(id: number, acceleration: Acceleration): void;
    function handleAccelerationListenerWarning(id: number, acceleration: Acceleration, warning: IAccelerationListenerWarning): void;
    class AccelerationListener extends BaseListener implements IAccelerationListener {
        onErrorFunction: (error: IAccelerationListenerError) => void;
        onResultFunction: (acceleration: Acceleration) => void;
        onWarningFunction: (acceleration: Acceleration, warning: IAccelerationListenerWarning) => void;
        /**
           Constructor with anonymous handler functions for listener.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IAccelerationListenerError
           @param onResultFunction Function receiving parameters of type: Adaptive.Acceleration
           @param onWarningFunction Function receiving parameters of type: Adaptive.Acceleration, Adaptive.IAccelerationListenerWarning
        */
        constructor(onErrorFunction: (error: IAccelerationListenerError) => void, onResultFunction: (acceleration: Acceleration) => void, onWarningFunction: (acceleration: Acceleration, warning: IAccelerationListenerWarning) => void);
        /**
           No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.

           @param error Error fired
           @since ARP1.0
        */
        onError(error: IAccelerationListenerError): void;
        /**
           Correct data received.

           @param acceleration Acceleration received
           @since ARP1.0
        */
        onResult(acceleration: Acceleration): void;
        /**
           Data received with warning - ie. Needs calibration.

           @param acceleration Acceleration received
           @param warning      Warning fired
           @since ARP1.0
        */
        onWarning(acceleration: Acceleration, warning: IAccelerationListenerWarning): void;
    }
    /**
       ButtonListener control dictionary.
    */
    var registeredButtonListener: Dictionary<IButtonListener>;
    /**
       ButtonListener global listener handlers.
    */
    function handleButtonListenerError(id: number, error: IButtonListenerError): void;
    function handleButtonListenerResult(id: number, button: Button): void;
    function handleButtonListenerWarning(id: number, button: Button, warning: IButtonListenerWarning): void;
    class ButtonListener extends BaseListener implements IButtonListener {
        onErrorFunction: (error: IButtonListenerError) => void;
        onResultFunction: (button: Button) => void;
        onWarningFunction: (button: Button, warning: IButtonListenerWarning) => void;
        /**
           Constructor with anonymous handler functions for listener.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IButtonListenerError
           @param onResultFunction Function receiving parameters of type: Adaptive.Button
           @param onWarningFunction Function receiving parameters of type: Adaptive.Button, Adaptive.IButtonListenerWarning
        */
        constructor(onErrorFunction: (error: IButtonListenerError) => void, onResultFunction: (button: Button) => void, onWarningFunction: (button: Button, warning: IButtonListenerWarning) => void);
        /**
           No data received

           @param error occurred
           @since ARP1.0
        */
        onError(error: IButtonListenerError): void;
        /**
           Called on button pressed

           @param button pressed
           @since ARP1.0
        */
        onResult(button: Button): void;
        /**
           Data received with warning

           @param button  pressed
           @param warning happened
           @since ARP1.0
        */
        onWarning(button: Button, warning: IButtonListenerWarning): void;
    }
    /**
       GeolocationListener control dictionary.
    */
    var registeredGeolocationListener: Dictionary<IGeolocationListener>;
    /**
       GeolocationListener global listener handlers.
    */
    function handleGeolocationListenerError(id: number, error: IGeolocationListenerError): void;
    function handleGeolocationListenerResult(id: number, geolocation: Geolocation): void;
    function handleGeolocationListenerWarning(id: number, geolocation: Geolocation, warning: IGeolocationListenerWarning): void;
    class GeolocationListener extends BaseListener implements IGeolocationListener {
        onErrorFunction: (error: IGeolocationListenerError) => void;
        onResultFunction: (geolocation: Geolocation) => void;
        onWarningFunction: (geolocation: Geolocation, warning: IGeolocationListenerWarning) => void;
        /**
           Constructor with anonymous handler functions for listener.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IGeolocationListenerError
           @param onResultFunction Function receiving parameters of type: Adaptive.Geolocation
           @param onWarningFunction Function receiving parameters of type: Adaptive.Geolocation, Adaptive.IGeolocationListenerWarning
        */
        constructor(onErrorFunction: (error: IGeolocationListenerError) => void, onResultFunction: (geolocation: Geolocation) => void, onWarningFunction: (geolocation: Geolocation, warning: IGeolocationListenerWarning) => void);
        /**
           No data received - error condition, not authorized or hardware not available.

           @param error Type of error encountered during reading.
           @since ARP1.0
        */
        onError(error: IGeolocationListenerError): void;
        /**
           Correct data received.

           @param geolocation Geolocation Bean
           @since ARP1.0
        */
        onResult(geolocation: Geolocation): void;
        /**
           Data received with warning - ie. HighDoP

           @param geolocation Geolocation Bean
           @param warning     Type of warning encountered during reading.
           @since ARP1.0
        */
        onWarning(geolocation: Geolocation, warning: IGeolocationListenerWarning): void;
    }
    /**
       LifecycleListener control dictionary.
    */
    var registeredLifecycleListener: Dictionary<ILifecycleListener>;
    /**
       LifecycleListener global listener handlers.
    */
    function handleLifecycleListenerError(id: number, error: ILifecycleListenerError): void;
    function handleLifecycleListenerResult(id: number, lifecycle: Lifecycle): void;
    function handleLifecycleListenerWarning(id: number, lifecycle: Lifecycle, warning: ILifecycleListenerWarning): void;
    class LifecycleListener extends BaseListener implements ILifecycleListener {
        onErrorFunction: (error: ILifecycleListenerError) => void;
        onResultFunction: (lifecycle: Lifecycle) => void;
        onWarningFunction: (lifecycle: Lifecycle, warning: ILifecycleListenerWarning) => void;
        /**
           Constructor with anonymous handler functions for listener.

           @param onErrorFunction Function receiving parameters of type: Adaptive.ILifecycleListenerError
           @param onResultFunction Function receiving parameters of type: Adaptive.Lifecycle
           @param onWarningFunction Function receiving parameters of type: Adaptive.Lifecycle, Adaptive.ILifecycleListenerWarning
        */
        constructor(onErrorFunction: (error: ILifecycleListenerError) => void, onResultFunction: (lifecycle: Lifecycle) => void, onWarningFunction: (lifecycle: Lifecycle, warning: ILifecycleListenerWarning) => void);
        /**
           No data received - error condition, not authorized or hardware not available.

           @param error Type of error encountered during reading.
           @since ARP1.0
        */
        onError(error: ILifecycleListenerError): void;
        /**
           Called when lifecycle changes somehow.

           @param lifecycle Lifecycle element
           @since ARP1.0
        */
        onResult(lifecycle: Lifecycle): void;
        /**
           Data received with warning

           @param lifecycle Lifecycle element
           @param warning   Type of warning encountered during reading.
           @since ARP1.0
        */
        onWarning(lifecycle: Lifecycle, warning: ILifecycleListenerWarning): void;
    }
    /**
       NetworkStatusListener control dictionary.
    */
    var registeredNetworkStatusListener: Dictionary<INetworkStatusListener>;
    /**
       NetworkStatusListener global listener handlers.
    */
    function handleNetworkStatusListenerError(id: number, error: INetworkStatusListenerError): void;
    function handleNetworkStatusListenerResult(id: number, network: ICapabilitiesNet): void;
    function handleNetworkStatusListenerWarning(id: number, network: ICapabilitiesNet, warning: INetworkStatusListenerWarning): void;
    class NetworkStatusListener extends BaseListener implements INetworkStatusListener {
        onErrorFunction: (error: INetworkStatusListenerError) => void;
        onResultFunction: (network: ICapabilitiesNet) => void;
        onWarningFunction: (network: ICapabilitiesNet, warning: INetworkStatusListenerWarning) => void;
        /**
           Constructor with anonymous handler functions for listener.

           @param onErrorFunction Function receiving parameters of type: Adaptive.INetworkStatusListenerError
           @param onResultFunction Function receiving parameters of type: Adaptive.ICapabilitiesNet
           @param onWarningFunction Function receiving parameters of type: Adaptive.ICapabilitiesNet, Adaptive.INetworkStatusListenerWarning
        */
        constructor(onErrorFunction: (error: INetworkStatusListenerError) => void, onResultFunction: (network: ICapabilitiesNet) => void, onWarningFunction: (network: ICapabilitiesNet, warning: INetworkStatusListenerWarning) => void);
        /**
           No data received - error condition, not authorized or hardware not available.

           @param error Type of error encountered during reading.
           @since ARP1.0
        */
        onError(error: INetworkStatusListenerError): void;
        /**
           Called when network connection changes somehow.

           @param network Change to this network.
           @since ARP1.0
        */
        onResult(network: ICapabilitiesNet): void;
        /**
           Status received with warning

           @param network Change to this network.
           @param warning Type of warning encountered during reading.
           @since ARP1.0
        */
        onWarning(network: ICapabilitiesNet, warning: INetworkStatusListenerWarning): void;
    }
    class BaseCallback implements IBaseCallback {
        /**
           Unique id of callback.
        */
        id: number;
        /**
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           Constructor with callback id.

           @param id  The id of the callback.
        */
        constructor(id: number);
        /**
           Get the listener id.
           @return {number} long with the identifier of the callback.
        */
        getId(): number;
        /**
           Return the API group for the given interface.
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       ContactPhotoResultCallback control dictionary.
    */
    var registeredContactPhotoResultCallback: Dictionary<IContactPhotoResultCallback>;
    /**
       ContactPhotoResultCallback global callback handlers.
    */
    function handleContactPhotoResultCallbackError(id: number, error: IContactPhotoResultCallbackError): void;
    function handleContactPhotoResultCallbackResult(id: number, contactPhoto: number[]): void;
    function handleContactPhotoResultCallbackWarning(id: number, contactPhoto: number[], warning: IContactPhotoResultCallbackWarning): void;
    class ContactPhotoResultCallback extends BaseCallback implements IContactPhotoResultCallback {
        onErrorFunction: (error: IContactPhotoResultCallbackError) => void;
        onResultFunction: (contactPhoto: number[]) => void;
        onWarningFunction: (contactPhoto: number[], warning: IContactPhotoResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IContactPhotoResultCallbackError
           @param onResultFunction Function receiving parameters of type: number[]
           @param onWarningFunction Function receiving parameters of type: number[], Adaptive.IContactPhotoResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IContactPhotoResultCallbackError) => void, onResultFunction: (contactPhoto: number[]) => void, onWarningFunction: (contactPhoto: number[], warning: IContactPhotoResultCallbackWarning) => void);
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IContactPhotoResultCallbackError): void;
        /**
           This method is called on Result

           @param contactPhoto returned by the platform
           @since ARP1.0
        */
        onResult(contactPhoto: number[]): void;
        /**
           This method is called on Warning

           @param contactPhoto returned by the platform
           @param warning      returned by the platform
           @since ARP1.0
        */
        onWarning(contactPhoto: number[], warning: IContactPhotoResultCallbackWarning): void;
    }
    /**
       ContactResultCallback control dictionary.
    */
    var registeredContactResultCallback: Dictionary<IContactResultCallback>;
    /**
       ContactResultCallback global callback handlers.
    */
    function handleContactResultCallbackError(id: number, error: IContactResultCallbackError): void;
    function handleContactResultCallbackResult(id: number, contacts: Contact[]): void;
    function handleContactResultCallbackWarning(id: number, contacts: Contact[], warning: IContactResultCallbackWarning): void;
    class ContactResultCallback extends BaseCallback implements IContactResultCallback {
        onErrorFunction: (error: IContactResultCallbackError) => void;
        onResultFunction: (contacts: Contact[]) => void;
        onWarningFunction: (contacts: Contact[], warning: IContactResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IContactResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.Contact[]
           @param onWarningFunction Function receiving parameters of type: Adaptive.Contact[], Adaptive.IContactResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IContactResultCallbackError) => void, onResultFunction: (contacts: Contact[]) => void, onWarningFunction: (contacts: Contact[], warning: IContactResultCallbackWarning) => void);
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IContactResultCallbackError): void;
        /**
           This method is called on Result

           @param contacts returned by the platform
           @since ARP1.0
        */
        onResult(contacts: Contact[]): void;
        /**
           This method is called on Warning

           @param contacts returned by the platform
           @param warning  returned by the platform
           @since ARP1.0
        */
        onWarning(contacts: Contact[], warning: IContactResultCallbackWarning): void;
    }
    /**
       DatabaseResultCallback control dictionary.
    */
    var registeredDatabaseResultCallback: Dictionary<IDatabaseResultCallback>;
    /**
       DatabaseResultCallback global callback handlers.
    */
    function handleDatabaseResultCallbackError(id: number, error: IDatabaseResultCallbackError): void;
    function handleDatabaseResultCallbackResult(id: number, database: Database): void;
    function handleDatabaseResultCallbackWarning(id: number, database: Database, warning: IDatabaseResultCallbackWarning): void;
    class DatabaseResultCallback extends BaseCallback implements IDatabaseResultCallback {
        onErrorFunction: (error: IDatabaseResultCallbackError) => void;
        onResultFunction: (database: Database) => void;
        onWarningFunction: (database: Database, warning: IDatabaseResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IDatabaseResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.Database
           @param onWarningFunction Function receiving parameters of type: Adaptive.Database, Adaptive.IDatabaseResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IDatabaseResultCallbackError) => void, onResultFunction: (database: Database) => void, onWarningFunction: (database: Database, warning: IDatabaseResultCallbackWarning) => void);
        /**
           Result callback for error responses

           @param error Returned error
           @since ARP1.0
        */
        onError(error: IDatabaseResultCallbackError): void;
        /**
           Result callback for correct responses

           @param database Returns the database
           @since ARP1.0
        */
        onResult(database: Database): void;
        /**
           Result callback for warning responses

           @param database Returns the database
           @param warning  Returned Warning
           @since ARP1.0
        */
        onWarning(database: Database, warning: IDatabaseResultCallbackWarning): void;
    }
    /**
       DatabaseTableResultCallback control dictionary.
    */
    var registeredDatabaseTableResultCallback: Dictionary<IDatabaseTableResultCallback>;
    /**
       DatabaseTableResultCallback global callback handlers.
    */
    function handleDatabaseTableResultCallbackError(id: number, error: IDatabaseTableResultCallbackError): void;
    function handleDatabaseTableResultCallbackResult(id: number, databaseTable: DatabaseTable): void;
    function handleDatabaseTableResultCallbackWarning(id: number, databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning): void;
    class DatabaseTableResultCallback extends BaseCallback implements IDatabaseTableResultCallback {
        onErrorFunction: (error: IDatabaseTableResultCallbackError) => void;
        onResultFunction: (databaseTable: DatabaseTable) => void;
        onWarningFunction: (databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IDatabaseTableResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.DatabaseTable
           @param onWarningFunction Function receiving parameters of type: Adaptive.DatabaseTable, Adaptive.IDatabaseTableResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IDatabaseTableResultCallbackError) => void, onResultFunction: (databaseTable: DatabaseTable) => void, onWarningFunction: (databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning) => void);
        /**
           Result callback for error responses

           @param error Returned error
           @since ARP1.0
        */
        onError(error: IDatabaseTableResultCallbackError): void;
        /**
           Result callback for correct responses

           @param databaseTable Returns the databaseTable
           @since ARP1.0
        */
        onResult(databaseTable: DatabaseTable): void;
        /**
           Result callback for warning responses

           @param databaseTable Returns the databaseTable
           @param warning       Returned Warning
           @since ARP1.0
        */
        onWarning(databaseTable: DatabaseTable, warning: IDatabaseTableResultCallbackWarning): void;
    }
    /**
       FileDataLoadResultCallback control dictionary.
    */
    var registeredFileDataLoadResultCallback: Dictionary<IFileDataLoadResultCallback>;
    /**
       FileDataLoadResultCallback global callback handlers.
    */
    function handleFileDataLoadResultCallbackError(id: number, error: IFileDataLoadResultCallbackError): void;
    function handleFileDataLoadResultCallbackResult(id: number, data: number[]): void;
    function handleFileDataLoadResultCallbackWarning(id: number, data: number[], warning: IFileDataLoadResultCallbackWarning): void;
    class FileDataLoadResultCallback extends BaseCallback implements IFileDataLoadResultCallback {
        onErrorFunction: (error: IFileDataLoadResultCallbackError) => void;
        onResultFunction: (data: number[]) => void;
        onWarningFunction: (data: number[], warning: IFileDataLoadResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IFileDataLoadResultCallbackError
           @param onResultFunction Function receiving parameters of type: number[]
           @param onWarningFunction Function receiving parameters of type: number[], Adaptive.IFileDataLoadResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IFileDataLoadResultCallbackError) => void, onResultFunction: (data: number[]) => void, onWarningFunction: (data: number[], warning: IFileDataLoadResultCallbackWarning) => void);
        /**
           Error processing data retrieval/storage operation.

           @param error Error condition encountered.
           @since ARP1.0
        */
        onError(error: IFileDataLoadResultCallbackError): void;
        /**
           Result of data retrieval operation.

           @param data Data loaded.
           @since ARP1.0
        */
        onResult(data: number[]): void;
        /**
           Result with warning of data retrieval/storage operation.

           @param data    File being loaded.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(data: number[], warning: IFileDataLoadResultCallbackWarning): void;
    }
    /**
       FileDataStoreResultCallback control dictionary.
    */
    var registeredFileDataStoreResultCallback: Dictionary<IFileDataStoreResultCallback>;
    /**
       FileDataStoreResultCallback global callback handlers.
    */
    function handleFileDataStoreResultCallbackError(id: number, error: IFileDataStoreResultCallbackError): void;
    function handleFileDataStoreResultCallbackResult(id: number, file: FileDescriptor): void;
    function handleFileDataStoreResultCallbackWarning(id: number, file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning): void;
    class FileDataStoreResultCallback extends BaseCallback implements IFileDataStoreResultCallback {
        onErrorFunction: (error: IFileDataStoreResultCallbackError) => void;
        onResultFunction: (file: FileDescriptor) => void;
        onWarningFunction: (file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IFileDataStoreResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor
           @param onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor, Adaptive.IFileDataStoreResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IFileDataStoreResultCallbackError) => void, onResultFunction: (file: FileDescriptor) => void, onWarningFunction: (file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning) => void);
        /**
           Error processing data retrieval/storage operation.

           @param error Error condition encountered.
           @since ARP1.0
        */
        onError(error: IFileDataStoreResultCallbackError): void;
        /**
           Result of data storage operation.

           @param file File reference to stored data.
           @since ARP1.0
        */
        onResult(file: FileDescriptor): void;
        /**
           Result with warning of data retrieval/storage operation.

           @param file    File being loaded/stored.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(file: FileDescriptor, warning: IFileDataStoreResultCallbackWarning): void;
    }
    /**
       FileListResultCallback control dictionary.
    */
    var registeredFileListResultCallback: Dictionary<IFileListResultCallback>;
    /**
       FileListResultCallback global callback handlers.
    */
    function handleFileListResultCallbackError(id: number, error: IFileListResultCallbackError): void;
    function handleFileListResultCallbackResult(id: number, files: FileDescriptor[]): void;
    function handleFileListResultCallbackWarning(id: number, files: FileDescriptor[], warning: IFileListResultCallbackWarning): void;
    class FileListResultCallback extends BaseCallback implements IFileListResultCallback {
        onErrorFunction: (error: IFileListResultCallbackError) => void;
        onResultFunction: (files: FileDescriptor[]) => void;
        onWarningFunction: (files: FileDescriptor[], warning: IFileListResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IFileListResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor[]
           @param onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor[], Adaptive.IFileListResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IFileListResultCallbackError) => void, onResultFunction: (files: FileDescriptor[]) => void, onWarningFunction: (files: FileDescriptor[], warning: IFileListResultCallbackWarning) => void);
        /**
           On error result of a file operation.

           @param error Error processing the request.
           @since ARP1.0
        */
        onError(error: IFileListResultCallbackError): void;
        /**
           On correct result of a file operation.

           @param files Array of resulting files/folders.
           @since ARP1.0
        */
        onResult(files: FileDescriptor[]): void;
        /**
           On partial result of a file operation, containing a warning.

           @param files   Array of resulting files/folders.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        onWarning(files: FileDescriptor[], warning: IFileListResultCallbackWarning): void;
    }
    /**
       FileResultCallback control dictionary.
    */
    var registeredFileResultCallback: Dictionary<IFileResultCallback>;
    /**
       FileResultCallback global callback handlers.
    */
    function handleFileResultCallbackError(id: number, error: IFileResultCallbackError): void;
    function handleFileResultCallbackResult(id: number, storageFile: FileDescriptor): void;
    function handleFileResultCallbackWarning(id: number, file: FileDescriptor, warning: IFileResultCallbackWarning): void;
    class FileResultCallback extends BaseCallback implements IFileResultCallback {
        onErrorFunction: (error: IFileResultCallbackError) => void;
        onResultFunction: (storageFile: FileDescriptor) => void;
        onWarningFunction: (file: FileDescriptor, warning: IFileResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IFileResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor
           @param onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor, Adaptive.IFileResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IFileResultCallbackError) => void, onResultFunction: (storageFile: FileDescriptor) => void, onWarningFunction: (file: FileDescriptor, warning: IFileResultCallbackWarning) => void);
        /**
           On error result of a file operation.

           @param error Error processing the request.
           @since ARP1.0
        */
        onError(error: IFileResultCallbackError): void;
        /**
           On correct result of a file operation.

           @param storageFile Reference to the resulting file.
           @since ARP1.0
        */
        onResult(storageFile: FileDescriptor): void;
        /**
           On partial result of a file operation, containing a warning.

           @param file    Reference to the offending file.
           @param warning Warning processing the request.
           @since ARP1.0
        */
        onWarning(file: FileDescriptor, warning: IFileResultCallbackWarning): void;
    }
    /**
       MessagingCallback control dictionary.
    */
    var registeredMessagingCallback: Dictionary<IMessagingCallback>;
    /**
       MessagingCallback global callback handlers.
    */
    function handleMessagingCallbackError(id: number, error: IMessagingCallbackError): void;
    function handleMessagingCallbackResult(id: number, success: boolean): void;
    function handleMessagingCallbackWarning(id: number, success: boolean, warning: IMessagingCallbackWarning): void;
    class MessagingCallback extends BaseCallback implements IMessagingCallback {
        onErrorFunction: (error: IMessagingCallbackError) => void;
        onResultFunction: (success: boolean) => void;
        onWarningFunction: (success: boolean, warning: IMessagingCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IMessagingCallbackError
           @param onResultFunction Function receiving parameters of type: boolean
           @param onWarningFunction Function receiving parameters of type: boolean, Adaptive.IMessagingCallbackWarning
        */
        constructor(onErrorFunction: (error: IMessagingCallbackError) => void, onResultFunction: (success: boolean) => void, onWarningFunction: (success: boolean, warning: IMessagingCallbackWarning) => void);
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IMessagingCallbackError): void;
        /**
           This method is called on Result

           @param success true if sent;false otherwise
           @since ARP1.0
        */
        onResult(success: boolean): void;
        /**
           This method is called on Warning

           @param success true if sent;false otherwise
           @param warning returned by the platform
           @since ARP1.0
        */
        onWarning(success: boolean, warning: IMessagingCallbackWarning): void;
    }
    /**
       NetworkReachabilityCallback control dictionary.
    */
    var registeredNetworkReachabilityCallback: Dictionary<INetworkReachabilityCallback>;
    /**
       NetworkReachabilityCallback global callback handlers.
    */
    function handleNetworkReachabilityCallbackError(id: number, error: INetworkReachabilityCallbackError): void;
    function handleNetworkReachabilityCallbackResult(id: number, reachable: boolean): void;
    function handleNetworkReachabilityCallbackWarning(id: number, reachable: boolean, warning: INetworkReachabilityCallbackWarning): void;
    class NetworkReachabilityCallback extends BaseCallback implements INetworkReachabilityCallback {
        onErrorFunction: (error: INetworkReachabilityCallbackError) => void;
        onResultFunction: (reachable: boolean) => void;
        onWarningFunction: (reachable: boolean, warning: INetworkReachabilityCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.INetworkReachabilityCallbackError
           @param onResultFunction Function receiving parameters of type: boolean
           @param onWarningFunction Function receiving parameters of type: boolean, Adaptive.INetworkReachabilityCallbackWarning
        */
        constructor(onErrorFunction: (error: INetworkReachabilityCallbackError) => void, onResultFunction: (reachable: boolean) => void, onWarningFunction: (reachable: boolean, warning: INetworkReachabilityCallbackWarning) => void);
        /**
           No data received - error condition, not authorized .

           @param error Error value
           @since ARP1.0
        */
        onError(error: INetworkReachabilityCallbackError): void;
        /**
           Correct data received.

           @param reachable Indicates if the host is reachable
           @since ARP1.0
        */
        onResult(reachable: boolean): void;
        /**
           Data received with warning - ie Found entries with existing key and values have been overriden

           @param reachable Indicates if the host is reachable
           @param warning   Warning value
           @since ARP1.0
        */
        onWarning(reachable: boolean, warning: INetworkReachabilityCallbackWarning): void;
    }
    /**
       SecurityResultCallback control dictionary.
    */
    var registeredSecurityResultCallback: Dictionary<ISecurityResultCallback>;
    /**
       SecurityResultCallback global callback handlers.
    */
    function handleSecurityResultCallbackError(id: number, error: ISecurityResultCallbackError): void;
    function handleSecurityResultCallbackResult(id: number, keyValues: SecureKeyPair[]): void;
    function handleSecurityResultCallbackWarning(id: number, keyValues: SecureKeyPair[], warning: ISecurityResultCallbackWarning): void;
    class SecurityResultCallback extends BaseCallback implements ISecurityResultCallback {
        onErrorFunction: (error: ISecurityResultCallbackError) => void;
        onResultFunction: (keyValues: SecureKeyPair[]) => void;
        onWarningFunction: (keyValues: SecureKeyPair[], warning: ISecurityResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.ISecurityResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.SecureKeyPair[]
           @param onWarningFunction Function receiving parameters of type: Adaptive.SecureKeyPair[], Adaptive.ISecurityResultCallbackWarning
        */
        constructor(onErrorFunction: (error: ISecurityResultCallbackError) => void, onResultFunction: (keyValues: SecureKeyPair[]) => void, onWarningFunction: (keyValues: SecureKeyPair[], warning: ISecurityResultCallbackWarning) => void);
        /**
           No data received - error condition, not authorized .

           @param error Error values
           @since ARP1.0
        */
        onError(error: ISecurityResultCallbackError): void;
        /**
           Correct data received.

           @param keyValues key and values
           @since ARP1.0
        */
        onResult(keyValues: SecureKeyPair[]): void;
        /**
           Data received with warning - ie Found entries with existing key and values have been overriden

           @param keyValues key and values
           @param warning   Warning values
           @since ARP1.0
        */
        onWarning(keyValues: SecureKeyPair[], warning: ISecurityResultCallbackWarning): void;
    }
    /**
       ServiceResultCallback control dictionary.
    */
    var registeredServiceResultCallback: Dictionary<IServiceResultCallback>;
    /**
       ServiceResultCallback global callback handlers.
    */
    function handleServiceResultCallbackError(id: number, error: IServiceResultCallbackError): void;
    function handleServiceResultCallbackResult(id: number, response: ServiceResponse): void;
    function handleServiceResultCallbackWarning(id: number, response: ServiceResponse, warning: IServiceResultCallbackWarning): void;
    class ServiceResultCallback extends BaseCallback implements IServiceResultCallback {
        onErrorFunction: (error: IServiceResultCallbackError) => void;
        onResultFunction: (response: ServiceResponse) => void;
        onWarningFunction: (response: ServiceResponse, warning: IServiceResultCallbackWarning) => void;
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IServiceResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.ServiceResponse
           @param onWarningFunction Function receiving parameters of type: Adaptive.ServiceResponse, Adaptive.IServiceResultCallbackWarning
        */
        constructor(onErrorFunction: (error: IServiceResultCallbackError) => void, onResultFunction: (response: ServiceResponse) => void, onWarningFunction: (response: ServiceResponse, warning: IServiceResultCallbackWarning) => void);
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        onError(error: IServiceResultCallbackError): void;
        /**
           This method is called on Result

           @param response data
           @since ARP1.0
        */
        onResult(response: ServiceResponse): void;
        /**
           This method is called on Warning

           @param response data
           @param warning  returned by the platform
           @since ARP1.0
        */
        onWarning(response: ServiceResponse, warning: IServiceResultCallbackWarning): void;
    }
    /**
       @class Adaptive.BaseApplicationBridge
       @extends Adaptive.IBaseApplication
       Base application for Application purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseApplicationBridge implements IBaseApplication {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseCommerceBridge
       @extends Adaptive.IBaseCommerce
       Base application for Commerce purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseCommerceBridge implements IBaseCommerce {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseCommunicationBridge
       @extends Adaptive.IBaseCommunication
       Base application for Communication purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseCommunicationBridge implements IBaseCommunication {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseDataBridge
       @extends Adaptive.IBaseData
       Base application for Data purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseDataBridge implements IBaseData {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseMediaBridge
       @extends Adaptive.IBaseMedia
       Base application for Media purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseMediaBridge implements IBaseMedia {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseNotificationBridge
       @extends Adaptive.IBaseNotification
       Base application for Notification purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseNotificationBridge implements IBaseNotification {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BasePIMBridge
       @extends Adaptive.IBasePIM
       Base application for PIM purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BasePIMBridge implements IBasePIM {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseReaderBridge
       @extends Adaptive.IBaseReader
       Base application for Reader purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseReaderBridge implements IBaseReader {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseSecurityBridge
       @extends Adaptive.IBaseSecurity
       Base application for Security purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseSecurityBridge implements IBaseSecurity {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseSensorBridge
       @extends Adaptive.IBaseSensor
       Base application for Sensor purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseSensorBridge implements IBaseSensor {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseSocialBridge
       @extends Adaptive.IBaseSocial
       Base application for Social purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseSocialBridge implements IBaseSocial {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseSystemBridge
       @extends Adaptive.IBaseSystem
       Base application for System purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseSystemBridge implements IBaseSystem {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseUIBridge
       @extends Adaptive.IBaseUI
       Base application for UI purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseUIBridge implements IBaseUI {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.BaseUtilBridge
       @extends Adaptive.IBaseUtil
       Base application for Utility purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BaseUtilBridge implements IBaseUtil {
        /**
           @property {Adaptive.IAdaptiveRPGroup} apiGroup
           Group of API.
        */
        apiGroup: IAdaptiveRPGroup;
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        getAPIGroup(): IAdaptiveRPGroup;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @class Adaptive.AnalyticsBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Analytics purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class AnalyticsBridge extends BaseApplicationBridge implements IAnalytics {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.GlobalizationBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Globalization results

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class GlobalizationBridge extends BaseApplicationBridge implements IGlobalization {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Returns the default locale of the application defined in the configuration file

           @return {Adaptive.Locale} Default Locale of the application
           @since ARP1.0
        */
        getDefaultLocale(): Locale;
        /**
           List of supported locales for the application defined in the configuration file

           @return {Adaptive.Locale[]} List of locales
           @since ARP1.0
        */
        getLocaleSupportedDescriptors(): Locale[];
        /**
           Gets the text/message corresponding to the given key and locale.

           @param key    to match text
           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return {string} Localized text.
           @since ARP1.0
        */
        getResourceLiteral(key: string, locale: Locale): string;
        /**
           Gets the full application configured literals (key/message pairs) corresponding to the given locale.

           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return {Adaptive.KeyPair[]} Localized texts in the form of an object.
           @since ARP1.0
        */
        getResourceLiterals(locale: Locale): KeyPair[];
    }
    /**
       @class Adaptive.LifecycleBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Lifecycle listeners

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class LifecycleBridge extends BaseApplicationBridge implements ILifecycle {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Add the listener for the lifecycle of the app

           @param listener Lifecycle listener
           @since ARP1.0
        */
        addLifecycleListener(listener: ILifecycleListener): void;
        /**
           Whether the application is in background or not

           @return {boolean} true if the application is in background;false otherwise
           @since ARP1.0
        */
        isBackground(): boolean;
        /**
           Un-registers an existing listener from receiving lifecycle events.

           @param listener Lifecycle listener
           @since ARP1.0
        */
        removeLifecycleListener(listener: ILifecycleListener): void;
        /**
           Removes all existing listeners from receiving lifecycle events.

           @since ARP1.0
        */
        removeLifecycleListeners(): void;
    }
    /**
       @class Adaptive.ManagementBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Management operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class ManagementBridge extends BaseApplicationBridge implements IManagement {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.PrintingBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Printing operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class PrintingBridge extends BaseApplicationBridge implements IPrinting {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.SettingsBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Settings operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class SettingsBridge extends BaseApplicationBridge implements ISettings {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.UpdateBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Update operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class UpdateBridge extends BaseApplicationBridge implements IUpdate {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.AdsBridge
       @extends Adaptive.BaseCommerceBridge
       Interface for Advertising purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class AdsBridge extends BaseCommerceBridge implements IAds {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.StoreBridge
       @extends Adaptive.BaseCommerceBridge
       Interface for Managing the Store operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class StoreBridge extends BaseCommerceBridge implements IStore {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.WalletBridge
       @extends Adaptive.BaseCommerceBridge
       Interface for Managing the Wallet operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class WalletBridge extends BaseCommerceBridge implements IWallet {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.BluetoothBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Bluetooth purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BluetoothBridge extends BaseCommunicationBridge implements IBluetooth {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.NetworkInfoBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Network information operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class NetworkInfoBridge extends BaseCommunicationBridge implements INetworkInfo {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.NetworkNamingBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Network naming operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class NetworkNamingBridge extends BaseCommunicationBridge implements INetworkNaming {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.NetworkReachabilityBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Network reachability operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class NetworkReachabilityBridge extends BaseCommunicationBridge implements INetworkReachability {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Whether there is connectivity to a host, via domain name or ip address, or not.

           @param host     domain name or ip address of host.
           @param callback Callback called at the end.
           @since ARP1.0
        */
        isNetworkReachable(host: string, callback: INetworkReachabilityCallback): void;
        /**
           Whether there is connectivity to an url of a service or not.

           @param url      to look for
           @param callback Callback called at the end
           @since ARP1.0
        */
        isNetworkServiceReachable(url: string, callback: INetworkReachabilityCallback): void;
    }
    /**
       @class Adaptive.NetworkStatusBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Network status

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class NetworkStatusBridge extends BaseCommunicationBridge implements INetworkStatus {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Add the listener for network status changes of the app

           @param listener Listener with the result
           @since ARP1.0
        */
        addNetworkStatusListener(listener: INetworkStatusListener): void;
        /**
           Un-registers an existing listener from receiving network status events.

           @param listener Listener with the result
           @since ARP1.0
        */
        removeNetworkStatusListener(listener: INetworkStatusListener): void;
        /**
           Removes all existing listeners from receiving network status events.

           @since ARP1.0
        */
        removeNetworkStatusListeners(): void;
    }
    /**
       @class Adaptive.ServiceBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Services operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class ServiceBridge extends BaseCommunicationBridge implements IService {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Get a reference to a registered service by name.

           @param serviceName Name of service.
           @return {Adaptive.Service} A service, if registered, or null of the service does not exist.
           @since ARP1.0
        */
        getService(serviceName: string): Service;
        /**
           Request async a service for an Url

           @param serviceRequest Service Request to invoke
           @param service        Service to call
           @param callback       Callback to execute with the result
           @since ARP1.0
        */
        invokeService(serviceRequest: ServiceRequest, service: Service, callback: IServiceResultCallback): void;
        /**
           Register a new service

           @param service to register
           @since ARP1.0
        */
        registerService(service: Service): void;
        /**
           Unregister a service

           @param service to unregister
           @since ARP1.0
        */
        unregisterService(service: Service): void;
        /**
           Unregister all services.

           @since ARP1.0
        */
        unregisterServices(): void;
        /**
           Check whether a service by the given service is already registered.

           @param service Service to check
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        isRegistered_service(service: Service): boolean;
        /**
           Check whether a service by the given name is registered.

           @param serviceName Name of service.
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        isRegistered_serviceName(serviceName: string): boolean;
    }
    /**
       @class Adaptive.SocketBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Socket operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class SocketBridge extends BaseCommunicationBridge implements ISocket {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.TelephonyBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Telephony operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class TelephonyBridge extends BaseCommunicationBridge implements ITelephony {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Invoke a phone call

           @param number to call
           @return {Adaptive.ITelephonyStatus} Status of the call
           @since ARP1.0
        */
        call(number: string): ITelephonyStatus;
    }
    /**
       @class Adaptive.CloudBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the Cloud operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class CloudBridge extends BaseDataBridge implements ICloud {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.DataStreamBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the DataStream operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class DataStreamBridge extends BaseDataBridge implements IDataStream {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.DatabaseBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the Cloud operations

       @author Ferran Vila Conesa
       @since ARP1.0
    */
    class DatabaseBridge extends BaseDataBridge implements IDatabase {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Creates a database on default path for every platform.

           @param callback Asynchronous callback
           @param database Database object to create
           @since ARP1.0
        */
        createDatabase(database: Database, callback: IDatabaseResultCallback): void;
        /**
           Creates a databaseTable inside a database for every platform.

           @param database      Database for databaseTable creating.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        createTable(database: Database, databaseTable: DatabaseTable, callback: IDatabaseTableResultCallback): void;
        /**
           Deletes a database on default path for every platform.

           @param database Database object to delete
           @param callback Asynchronous callback
           @since ARP1.0
        */
        deleteDatabase(database: Database, callback: IDatabaseResultCallback): void;
        /**
           Deletes a databaseTable inside a database for every platform.

           @param database      Database for databaseTable removal.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        deleteTable(database: Database, databaseTable: DatabaseTable, callback: IDatabaseTableResultCallback): void;
        /**
           Executes SQL statement into the given database. The replacements
should be passed as a parameter

           @param database     The database object reference.
           @param statement    SQL statement.
           @param replacements List of SQL statement replacements.
           @param callback     DatabaseTable callback with the response.
           @since ARP1.0
        */
        executeSqlStatement(database: Database, statement: string, replacements: string[], callback: IDatabaseTableResultCallback): void;
        /**
           Executes SQL transaction (some statements chain) inside given database.

           @param database     The database object reference.
           @param statements   The statements to be executed during transaction.
           @param rollbackFlag Indicates if rollback should be performed when any
                  statement execution fails.
           @param callback     DatabaseTable callback with the response.
           @since ARP1.0
        */
        executeSqlTransactions(database: Database, statements: string[], rollbackFlag: boolean, callback: IDatabaseTableResultCallback): void;
        /**
           Checks if database exists by given database name.

           @param database Database Object to check if exists
           @return {boolean} True if exists, false otherwise
           @since ARP1.0
        */
        existsDatabase(database: Database): boolean;
        /**
           Checks if databaseTable exists by given database name.

           @param database      Database for databaseTable consulting.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @return {boolean} True if exists, false otherwise
           @since ARP1.0
        */
        existsTable(database: Database, databaseTable: DatabaseTable): boolean;
    }
    /**
       @class Adaptive.FileBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the File operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class FileBridge extends BaseDataBridge implements IFile {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Determine whether the current file/folder can be read from.

           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the folder/file is readable, false otherwise.
           @since ARP1.0
        */
        canRead(descriptor: FileDescriptor): boolean;
        /**
           Determine whether the current file/folder can be written to.

           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the folder/file is writable, false otherwise.
           @since ARP1.0
        */
        canWrite(descriptor: FileDescriptor): boolean;
        /**
           Creates a file with the specified name.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        create(descriptor: FileDescriptor, callback: IFileResultCallback): void;
        /**
           Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.

           @param descriptor File descriptor of file or folder used for operation.
           @param cascade    Whether to delete sub-files and sub-folders.
           @return {boolean} True if files (and sub-files and folders) whether deleted.
           @since ARP1.0
        */
        delete(descriptor: FileDescriptor, cascade: boolean): boolean;
        /**
           Check whether the file/path exists.

           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the file exists in the filesystem, false otherwise.
           @since ARP1.0
        */
        exists(descriptor: FileDescriptor): boolean;
        /**
           Loads the content of the file.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        getContent(descriptor: FileDescriptor, callback: IFileDataLoadResultCallback): void;
        /**
           Returns the file storage type of the file

           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemStorageType} Storage Type file
           @since ARP1.0
        */
        getFileStorageType(descriptor: FileDescriptor): IFileSystemStorageType;
        /**
           Returns the file type

           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemType} Returns the file type of the file
           @since ARP1.0
        */
        getFileType(descriptor: FileDescriptor): IFileSystemType;
        /**
           Returns the security type of the file

           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemSecurity} Security Level of the file
           @since ARP1.0
        */
        getSecurityType(descriptor: FileDescriptor): IFileSystemSecurity;
        /**
           Check whether this is a path of a file.

           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} true if this is a path to a folder/directory, false if this is a path to a file.
           @since ARP1.0
        */
        isDirectory(descriptor: FileDescriptor): boolean;
        /**
           List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of operation.
           @since ARP1.0
        */
        listFiles(descriptor: FileDescriptor, callback: IFileListResultCallback): void;
        /**
           List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.

           @param descriptor File descriptor of file or folder used for operation.
           @param regex      Filter (eg. *.jpg, *.png, Fil*) name string.
           @param callback   Result of operation.
           @since ARP1.0
        */
        listFilesForRegex(descriptor: FileDescriptor, regex: string, callback: IFileListResultCallback): void;
        /**
           Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.

           @param descriptor File descriptor of file or folder used for operation.
           @param recursive  Whether to create all parent path elements.
           @return {boolean} True if the path was created, false otherwise (or it exists already).
           @since ARP1.0
        */
        mkDir(descriptor: FileDescriptor, recursive: boolean): boolean;
        /**
           Moves the current file to the given file destination, optionally overwriting and creating the path to the
new destination file.

           @param source      File descriptor of file or folder used for operation as source.
           @param destination File descriptor of file or folder used for operation as destination.
           @param createPath  True to create the path if it does not already exist.
           @param callback    Result of the operation.
           @param overwrite   True to create the path if it does not already exist.
           @since ARP1.0
        */
        move(source: FileDescriptor, destination: FileDescriptor, createPath: boolean, overwrite: boolean, callback: IFileResultCallback): void;
        /**
           Sets the content of the file.

           @param descriptor File descriptor of file or folder used for operation.
           @param content    Binary content to store in the file.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        setContent(descriptor: FileDescriptor, content: number[], callback: IFileDataStoreResultCallback): void;
    }
    /**
       @class Adaptive.FileSystemBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the File System operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class FileSystemBridge extends BaseDataBridge implements IFileSystem {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.

           @param parent Parent directory.
           @param name   Name of new file or directory.
           @return {Adaptive.FileDescriptor} A reference to a new or existing location in the filesystem.
           @since ARP1.0
        */
        createFileDescriptor(parent: FileDescriptor, name: string): FileDescriptor;
        /**
           Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.

           @return {Adaptive.FileDescriptor} Path to the application's cache folder.
           @since ARP1.0
        */
        getApplicationCacheFolder(): FileDescriptor;
        /**
           Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.

           @return {Adaptive.FileDescriptor} Path to the application's cloud storage folder.
           @since ARP1.0
        */
        getApplicationCloudFolder(): FileDescriptor;
        /**
           Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.

           @return {Adaptive.FileDescriptor} Path to the application's documents folder.
           @since ARP1.0
        */
        getApplicationDocumentsFolder(): FileDescriptor;
        /**
           Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.

           @return {Adaptive.FileDescriptor} Path to the application folder.
           @since ARP1.0
        */
        getApplicationFolder(): FileDescriptor;
        /**
           Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.

           @return {Adaptive.FileDescriptor} Path to the application's protected storage folder.
           @since ARP1.0
        */
        getApplicationProtectedFolder(): FileDescriptor;
        /**
           Returns the file system dependent file separator.

           @return {string} char with the directory/file separator.
           @since ARP1.0
        */
        getSeparator(): string;
        /**
           Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.

           @return {Adaptive.FileDescriptor} Path to the application's documents folder.
           @since ARP1.0
        */
        getSystemExternalFolder(): FileDescriptor;
    }
    /**
       @class Adaptive.InternalStorageBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the Internal Storage operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class InternalStorageBridge extends BaseDataBridge implements IInternalStorage {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.XMLBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the XML operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class XMLBridge extends BaseDataBridge implements IXML {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.AudioBridge
       @extends Adaptive.BaseMediaBridge
       Interface for Audio purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class AudioBridge extends BaseMediaBridge implements IAudio {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.CameraBridge
       @extends Adaptive.BaseMediaBridge
       Interface for Managing the camera operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class CameraBridge extends BaseMediaBridge implements ICamera {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.ImagingBridge
       @extends Adaptive.BaseMediaBridge
       Interface for Managing the Imaging operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class ImagingBridge extends BaseMediaBridge implements IImaging {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.VideoBridge
       @extends Adaptive.BaseMediaBridge
       Interface for Managing the Video operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class VideoBridge extends BaseMediaBridge implements IVideo {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Play url video stream

           @param url of the video
           @since ARP1.0
        */
        playStream(url: string): void;
    }
    /**
       @class Adaptive.AlarmBridge
       @extends Adaptive.BaseNotificationBridge
       Interface for Alarm purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class AlarmBridge extends BaseNotificationBridge implements IAlarm {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.NotificationBridge
       @extends Adaptive.BaseNotificationBridge
       Interface for Managing the Notification operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class NotificationBridge extends BaseNotificationBridge implements INotification {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.NotificationLocalBridge
       @extends Adaptive.BaseNotificationBridge
       Interface for Managing the Local Notifications operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class NotificationLocalBridge extends BaseNotificationBridge implements INotificationLocal {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.VibrationBridge
       @extends Adaptive.BaseNotificationBridge
       Interface for Managing the Vibration operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class VibrationBridge extends BaseNotificationBridge implements IVibration {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.CalendarBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Calendar operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class CalendarBridge extends BasePIMBridge implements ICalendar {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.ContactBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Contact operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class ContactBridge extends BasePIMBridge implements IContact {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Get all the details of a contact according to its id

           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        getContact(contact: ContactUid, callback: IContactResultCallback): void;
        /**
           Get the contact photo

           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        getContactPhoto(contact: ContactUid, callback: IContactPhotoResultCallback): void;
        /**
           Get all contacts

           @param callback called for return
           @since ARP1.0
        */
        getContacts(callback: IContactResultCallback): void;
        /**
           Get marked fields of all contacts

           @param callback called for return
           @param fields   to get for each Contact
           @since ARP1.0
        */
        getContactsForFields(callback: IContactResultCallback, fields: IContactFieldGroup[]): void;
        /**
           Get marked fields of all contacts according to a filter

           @param callback called for return
           @param fields   to get for each Contact
           @param filter   to search for
           @since ARP1.0
        */
        getContactsWithFilter(callback: IContactResultCallback, fields: IContactFieldGroup[], filter: IContactFilter[]): void;
        /**
           Search contacts according to a term and send it to the callback

           @param term     string to search
           @param callback called for return
           @since ARP1.0
        */
        searchContacts(term: string, callback: IContactResultCallback): void;
        /**
           Search contacts according to a term with a filter and send it to the callback

           @param term     string to search
           @param callback called for return
           @param filter   to search for
           @since ARP1.0
        */
        searchContactsWithFilter(term: string, callback: IContactResultCallback, filter: IContactFilter[]): void;
        /**
           Set the contact photo

           @param contact  id to assign the photo
           @param pngImage photo as byte array
           @return {boolean} true if set is successful;false otherwise
           @since ARP1.0
        */
        setContactPhoto(contact: ContactUid, pngImage: number[]): boolean;
    }
    /**
       @class Adaptive.MailBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Mail operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class MailBridge extends BasePIMBridge implements IMail {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Send an Email

           @param data     Payload of the email
           @param callback Result callback of the operation
           @since ARP1.0
        */
        sendEmail(data: Email, callback: IMessagingCallback): void;
    }
    /**
       @class Adaptive.MessagingBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Messaging operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class MessagingBridge extends BasePIMBridge implements IMessaging {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Send text SMS

           @param number   to send
           @param text     to send
           @param callback with the result
           @since ARP1.0
        */
        sendSMS(number: string, text: string, callback: IMessagingCallback): void;
    }
    /**
       @class Adaptive.BarcodeBridge
       @extends Adaptive.BaseReaderBridge
       Interface for Barcode Reading purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BarcodeBridge extends BaseReaderBridge implements IBarcode {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.NFCBridge
       @extends Adaptive.BaseReaderBridge
       Interface for Managing the NFC operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class NFCBridge extends BaseReaderBridge implements INFC {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.OCRBridge
       @extends Adaptive.BaseReaderBridge
       Interface for Managing the OCR operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class OCRBridge extends BaseReaderBridge implements IOCR {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.QRCodeBridge
       @extends Adaptive.BaseReaderBridge
       Interface for Managing the QR Code operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class QRCodeBridge extends BaseReaderBridge implements IQRCode {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.OAuthBridge
       @extends Adaptive.BaseSecurityBridge
       Interface for Managing the OAuth operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class OAuthBridge extends BaseSecurityBridge implements IOAuth {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.OpenIdBridge
       @extends Adaptive.BaseSecurityBridge
       Interface for Managing the OpenID operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class OpenIdBridge extends BaseSecurityBridge implements IOpenId {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.SecurityBridge
       @extends Adaptive.BaseSecurityBridge
       Interface for Managing the Security operations

       @author Aryslan
       @since ARP1.0
    */
    class SecurityBridge extends BaseSecurityBridge implements ISecurity {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Deletes from the device internal storage the entry/entries containing the specified key names.

           @param keys             Array with the key names to delete.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        deleteSecureKeyValuePairs(keys: string[], publicAccessName: string, callback: ISecurityResultCallback): void;
        /**
           Retrieves from the device internal storage the entry/entries containing the specified key names.

           @param keys             Array with the key names to retrieve.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        getSecureKeyValuePairs(keys: string[], publicAccessName: string, callback: ISecurityResultCallback): void;
        /**
           Returns if the device has been modified in anyhow

           @return {boolean} true if the device has been modified; false otherwise
           @since ARP1.0
        */
        isDeviceModified(): boolean;
        /**
           Stores in the device internal storage the specified item/s.

           @param keyValues        Array containing the items to store on the device internal memory.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        setSecureKeyValuePairs(keyValues: SecureKeyPair[], publicAccessName: string, callback: ISecurityResultCallback): void;
    }
    /**
       @class Adaptive.AccelerationBridge
       @extends Adaptive.BaseSensorBridge
       Interface defining methods about the acceleration sensor

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class AccelerationBridge extends BaseSensorBridge implements IAcceleration {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Register a new listener that will receive acceleration events.

           @param listener to be registered.
           @since ARP1.0
        */
        addAccelerationListener(listener: IAccelerationListener): void;
        /**
           De-registers an existing listener from receiving acceleration events.

           @param listener to be registered.
           @since ARP1.0
        */
        removeAccelerationListener(listener: IAccelerationListener): void;
        /**
           Removed all existing listeners from receiving acceleration events.

           @since ARP1.0
        */
        removeAccelerationListeners(): void;
    }
    /**
       @class Adaptive.AmbientLightBridge
       @extends Adaptive.BaseSensorBridge
       Interface for managinf the Ambient Light

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class AmbientLightBridge extends BaseSensorBridge implements IAmbientLight {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.BarometerBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Barometer management purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class BarometerBridge extends BaseSensorBridge implements IBarometer {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.GeolocationBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Geolocation operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class GeolocationBridge extends BaseSensorBridge implements IGeolocation {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Register a new listener that will receive geolocation events.

           @param listener to be registered.
           @since ARP1.0
        */
        addGeolocationListener(listener: IGeolocationListener): void;
        /**
           De-registers an existing listener from receiving geolocation events.

           @param listener to be registered.
           @since ARP1.0
        */
        removeGeolocationListener(listener: IGeolocationListener): void;
        /**
           Removed all existing listeners from receiving geolocation events.

           @since ARP1.0
        */
        removeGeolocationListeners(): void;
    }
    /**
       @class Adaptive.GyroscopeBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Giroscope operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class GyroscopeBridge extends BaseSensorBridge implements IGyroscope {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.MagnetometerBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Magnetometer operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class MagnetometerBridge extends BaseSensorBridge implements IMagnetometer {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.ProximityBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Proximity operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class ProximityBridge extends BaseSensorBridge implements IProximity {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.FacebookBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the Facebook operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class FacebookBridge extends BaseSocialBridge implements IFacebook {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.GooglePlusBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the Google Plus operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class GooglePlusBridge extends BaseSocialBridge implements IGooglePlus {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.LinkedInBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the Linkedin operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class LinkedInBridge extends BaseSocialBridge implements ILinkedIn {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.RSSBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the RSS operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class RSSBridge extends BaseSocialBridge implements IRSS {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.TwitterBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the Twitter operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class TwitterBridge extends BaseSocialBridge implements ITwitter {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.CapabilitiesBridge
       @extends Adaptive.BaseSystemBridge
       Interface for testing the Capabilities operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class CapabilitiesBridge extends BaseSystemBridge implements ICapabilities {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Determines whether a specific hardware button is supported for interaction.

           @param type Type of feature to check.
           @return {boolean} true is supported, false otherwise.
           @since ARP1.0
        */
        hasButtonSupport(type: ICapabilitiesButton): boolean;
        /**
           Determines whether a specific Communication capability is supported by
the device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasCommunicationSupport(type: ICapabilitiesCommunication): boolean;
        /**
           Determines whether a specific Data capability is supported by the device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasDataSupport(type: ICapabilitiesData): boolean;
        /**
           Determines whether a specific Media capability is supported by the
device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasMediaSupport(type: ICapabilitiesMedia): boolean;
        /**
           Determines whether a specific Net capability is supported by the device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasNetSupport(type: ICapabilitiesNet): boolean;
        /**
           Determines whether a specific Notification capability is supported by the
device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasNotificationSupport(type: ICapabilitiesNotification): boolean;
        /**
           Determines whether a specific Sensor capability is supported by the
device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        hasSensorSupport(type: ICapabilitiesSensor): boolean;
    }
    /**
       @class Adaptive.DeviceBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the Device operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class DeviceBridge extends BaseSystemBridge implements IDevice {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Register a new listener that will receive button events.

           @param listener to be registered.
           @since ARP1.0
        */
        addButtonListener(listener: IButtonListener): void;
        /**
           Returns the device information for the current device executing the runtime.

           @return {Adaptive.DeviceInfo} DeviceInfo for the current device.
           @since ARP1.0
        */
        getDeviceInfo(): DeviceInfo;
        /**
           Gets the current Locale for the device.

           @return {Adaptive.Locale} The current Locale information.
           @since ARP1.0
        */
        getLocaleCurrent(): Locale;
        /**
           De-registers an existing listener from receiving button events.

           @param listener to be removed.
           @since ARP1.0
        */
        removeButtonListener(listener: IButtonListener): void;
        /**
           Removed all existing listeners from receiving button events.

           @since ARP1.0
        */
        removeButtonListeners(): void;
    }
    /**
       @class Adaptive.DisplayBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the Display operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class DisplayBridge extends BaseSystemBridge implements IDisplay {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.OSBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the OS operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class OSBridge extends BaseSystemBridge implements IOS {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Returns the OSInfo for the current operating system.

           @return {Adaptive.OSInfo} OSInfo with name, version and vendor of the OS.
           @since ARP1.0
        */
        getOSInfo(): OSInfo;
    }
    /**
       @class Adaptive.RuntimeBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the Runtime operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class RuntimeBridge extends BaseSystemBridge implements IRuntime {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Dismiss the current Application

           @since ARP1.0
        */
        dismissApplication(): void;
        /**
           Whether the application dismiss the splash screen successfully or not

           @return {boolean} true if the application has dismissed the splash screen;false otherwise
           @since ARP1.0
        */
        dismissSplashScreen(): boolean;
    }
    /**
       @class Adaptive.BrowserBridge
       @extends Adaptive.BaseUIBridge
       Interface for Managing the browser operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    class BrowserBridge extends BaseUIBridge implements IBrowser {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Method for opening a URL like a link in the native default browser

           @param url Url to open
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        openExtenalBrowser(url: string): boolean;
        /**
           Method for opening a browser embedded into the application

           @param url            Url to open
           @param title          Title of the Navigation bar
           @param backButtonText Title of the Back button bar
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        openInternalBrowser(url: string, title: string, backButtonText: string): boolean;
        /**
           Method for opening a browser embedded into the application in a modal window

           @param url            Url to open
           @param title          Title of the Navigation bar
           @param backButtonText Title of the Back button bar
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        openInternalBrowserModal(url: string, title: string, backButtonText: string): boolean;
    }
    /**
       @class Adaptive.DesktopBridge
       @extends Adaptive.BaseUIBridge
       Interface for Managing the Desktop operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class DesktopBridge extends BaseUIBridge implements IDesktop {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.MapBridge
       @extends Adaptive.BaseUIBridge
       Interface for Managing the Map operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class MapBridge extends BaseUIBridge implements IMap {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.UIBridge
       @extends Adaptive.BaseUIBridge
       Interface for Managing the UI operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class UIBridge extends BaseUIBridge implements IUI {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.CompressionBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Compression operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class CompressionBridge extends BaseUtilBridge implements ICompression {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.ConcurrentBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Concurrent operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class ConcurrentBridge extends BaseUtilBridge implements IConcurrent {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.CryptoBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Cloud operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class CryptoBridge extends BaseUtilBridge implements ICrypto {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.LoggingBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Logging operations

       @author Ferran Vila Conesa
       @since ARP1.0
    */
    class LoggingBridge extends BaseUtilBridge implements ILogging {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
        /**
           Logs the given message, with the given log level if specified, to the standard platform/environment.

           @param level   Log level
           @param message Message to be logged
           @since ARP1.0
        */
        log_level_message(level: ILoggingLogLevel, message: string): void;
        /**
           Logs the given message, with the given log level if specified, to the standard platform/environment.

           @param level    Log level
           @param category Category/tag name to identify/filter the log.
           @param message  Message to be logged
           @since ARP1.0
        */
        log_level_category_message(level: ILoggingLogLevel, category: string, message: string): void;
    }
    /**
       @class Adaptive.TimerBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Timer operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class TimerBridge extends BaseUtilBridge implements ITimer {
        /**
           @method constructor
           Default constructor.
        */
        constructor();
    }
    /**
       @class Adaptive.AppRegistryBridge
       @extends Adaptive.IAppRegistry
       Interface to retrieve auto-registered service implementation references.

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    class AppRegistryBridge implements IAppRegistry {
        /**
           @private
           @static
           @property {Adaptive.AppRegistryBridge} instance
           Singleton instance of AppRegistry.
        */
        private static instance;
        /**
           @static
           @singleton
           @method
           Singleton instance of AppRegistry.
           @return {Adaptive.AppRegistryBridge}
        */
        static getInstance(): IAppRegistry;
        /**
           @private
           @property {Adaptive.IAcceleration} instanceAcceleration
        */
        private static instanceAcceleration;
        /**
           @private
           @property {Adaptive.IAds} instanceAds
        */
        private static instanceAds;
        /**
           @private
           @property {Adaptive.IAlarm} instanceAlarm
        */
        private static instanceAlarm;
        /**
           @private
           @property {Adaptive.IAmbientLight} instanceAmbientLight
        */
        private static instanceAmbientLight;
        /**
           @private
           @property {Adaptive.IAnalytics} instanceAnalytics
        */
        private static instanceAnalytics;
        /**
           @private
           @property {Adaptive.IAudio} instanceAudio
        */
        private static instanceAudio;
        /**
           @private
           @property {Adaptive.IBarcode} instanceBarcode
        */
        private static instanceBarcode;
        /**
           @private
           @property {Adaptive.IBarometer} instanceBarometer
        */
        private static instanceBarometer;
        /**
           @private
           @property {Adaptive.IBluetooth} instanceBluetooth
        */
        private static instanceBluetooth;
        /**
           @private
           @property {Adaptive.IBrowser} instanceBrowser
        */
        private static instanceBrowser;
        /**
           @private
           @property {Adaptive.ICalendar} instanceCalendar
        */
        private static instanceCalendar;
        /**
           @private
           @property {Adaptive.ICamera} instanceCamera
        */
        private static instanceCamera;
        /**
           @private
           @property {Adaptive.ICapabilities} instanceCapabilities
        */
        private static instanceCapabilities;
        /**
           @private
           @property {Adaptive.ICloud} instanceCloud
        */
        private static instanceCloud;
        /**
           @private
           @property {Adaptive.ICompression} instanceCompression
        */
        private static instanceCompression;
        /**
           @private
           @property {Adaptive.IConcurrent} instanceConcurrent
        */
        private static instanceConcurrent;
        /**
           @private
           @property {Adaptive.IContact} instanceContact
        */
        private static instanceContact;
        /**
           @private
           @property {Adaptive.ICrypto} instanceCrypto
        */
        private static instanceCrypto;
        /**
           @private
           @property {Adaptive.IDataStream} instanceDataStream
        */
        private static instanceDataStream;
        /**
           @private
           @property {Adaptive.IDatabase} instanceDatabase
        */
        private static instanceDatabase;
        /**
           @private
           @property {Adaptive.IDesktop} instanceDesktop
        */
        private static instanceDesktop;
        /**
           @private
           @property {Adaptive.IDevice} instanceDevice
        */
        private static instanceDevice;
        /**
           @private
           @property {Adaptive.IDisplay} instanceDisplay
        */
        private static instanceDisplay;
        /**
           @private
           @property {Adaptive.IFacebook} instanceFacebook
        */
        private static instanceFacebook;
        /**
           @private
           @property {Adaptive.IFile} instanceFile
        */
        private static instanceFile;
        /**
           @private
           @property {Adaptive.IFileSystem} instanceFileSystem
        */
        private static instanceFileSystem;
        /**
           @private
           @property {Adaptive.IGeolocation} instanceGeolocation
        */
        private static instanceGeolocation;
        /**
           @private
           @property {Adaptive.IGlobalization} instanceGlobalization
        */
        private static instanceGlobalization;
        /**
           @private
           @property {Adaptive.IGooglePlus} instanceGooglePlus
        */
        private static instanceGooglePlus;
        /**
           @private
           @property {Adaptive.IGyroscope} instanceGyroscope
        */
        private static instanceGyroscope;
        /**
           @private
           @property {Adaptive.IImaging} instanceImaging
        */
        private static instanceImaging;
        /**
           @private
           @property {Adaptive.IInternalStorage} instanceInternalStorage
        */
        private static instanceInternalStorage;
        /**
           @private
           @property {Adaptive.ILifecycle} instanceLifecycle
        */
        private static instanceLifecycle;
        /**
           @private
           @property {Adaptive.ILinkedIn} instanceLinkedIn
        */
        private static instanceLinkedIn;
        /**
           @private
           @property {Adaptive.ILogging} instanceLogging
        */
        private static instanceLogging;
        /**
           @private
           @property {Adaptive.IMagnetometer} instanceMagnetometer
        */
        private static instanceMagnetometer;
        /**
           @private
           @property {Adaptive.IMail} instanceMail
        */
        private static instanceMail;
        /**
           @private
           @property {Adaptive.IManagement} instanceManagement
        */
        private static instanceManagement;
        /**
           @private
           @property {Adaptive.IMap} instanceMap
        */
        private static instanceMap;
        /**
           @private
           @property {Adaptive.IMessaging} instanceMessaging
        */
        private static instanceMessaging;
        /**
           @private
           @property {Adaptive.INFC} instanceNFC
        */
        private static instanceNFC;
        /**
           @private
           @property {Adaptive.INetworkInfo} instanceNetworkInfo
        */
        private static instanceNetworkInfo;
        /**
           @private
           @property {Adaptive.INetworkNaming} instanceNetworkNaming
        */
        private static instanceNetworkNaming;
        /**
           @private
           @property {Adaptive.INetworkReachability} instanceNetworkReachability
        */
        private static instanceNetworkReachability;
        /**
           @private
           @property {Adaptive.INetworkStatus} instanceNetworkStatus
        */
        private static instanceNetworkStatus;
        /**
           @private
           @property {Adaptive.INotification} instanceNotification
        */
        private static instanceNotification;
        /**
           @private
           @property {Adaptive.INotificationLocal} instanceNotificationLocal
        */
        private static instanceNotificationLocal;
        /**
           @private
           @property {Adaptive.IOAuth} instanceOAuth
        */
        private static instanceOAuth;
        /**
           @private
           @property {Adaptive.IOCR} instanceOCR
        */
        private static instanceOCR;
        /**
           @private
           @property {Adaptive.IOS} instanceOS
        */
        private static instanceOS;
        /**
           @private
           @property {Adaptive.IOpenId} instanceOpenId
        */
        private static instanceOpenId;
        /**
           @private
           @property {Adaptive.IPrinting} instancePrinting
        */
        private static instancePrinting;
        /**
           @private
           @property {Adaptive.IProximity} instanceProximity
        */
        private static instanceProximity;
        /**
           @private
           @property {Adaptive.IQRCode} instanceQRCode
        */
        private static instanceQRCode;
        /**
           @private
           @property {Adaptive.IRSS} instanceRSS
        */
        private static instanceRSS;
        /**
           @private
           @property {Adaptive.IRuntime} instanceRuntime
        */
        private static instanceRuntime;
        /**
           @private
           @property {Adaptive.ISecurity} instanceSecurity
        */
        private static instanceSecurity;
        /**
           @private
           @property {Adaptive.IService} instanceService
        */
        private static instanceService;
        /**
           @private
           @property {Adaptive.ISettings} instanceSettings
        */
        private static instanceSettings;
        /**
           @private
           @property {Adaptive.ISocket} instanceSocket
        */
        private static instanceSocket;
        /**
           @private
           @property {Adaptive.IStore} instanceStore
        */
        private static instanceStore;
        /**
           @private
           @property {Adaptive.ITelephony} instanceTelephony
        */
        private static instanceTelephony;
        /**
           @private
           @property {Adaptive.ITimer} instanceTimer
        */
        private static instanceTimer;
        /**
           @private
           @property {Adaptive.ITwitter} instanceTwitter
        */
        private static instanceTwitter;
        /**
           @private
           @property {Adaptive.IUI} instanceUI
        */
        private static instanceUI;
        /**
           @private
           @property {Adaptive.IUpdate} instanceUpdate
        */
        private static instanceUpdate;
        /**
           @private
           @property {Adaptive.IVibration} instanceVibration
        */
        private static instanceVibration;
        /**
           @private
           @property {Adaptive.IVideo} instanceVideo
        */
        private static instanceVideo;
        /**
           @private
           @property {Adaptive.IWallet} instanceWallet
        */
        private static instanceWallet;
        /**
           @private
           @property {Adaptive.IXML} instanceXML
        */
        private static instanceXML;
        /**
           @method
           Obtain a reference to the IAcceleration bridge.

           @return {Adaptive.AccelerationBridge} bridge instance.
        */
        getAccelerationBridge(): IAcceleration;
        /**
           @method
           Obtain a reference to the IAds bridge.

           @return {Adaptive.AdsBridge} bridge instance.
        */
        getAdsBridge(): IAds;
        /**
           @method
           Obtain a reference to the IAlarm bridge.

           @return {Adaptive.AlarmBridge} bridge instance.
        */
        getAlarmBridge(): IAlarm;
        /**
           @method
           Obtain a reference to the IAmbientLight bridge.

           @return {Adaptive.AmbientLightBridge} bridge instance.
        */
        getAmbientLightBridge(): IAmbientLight;
        /**
           @method
           Obtain a reference to the IAnalytics bridge.

           @return {Adaptive.AnalyticsBridge} bridge instance.
        */
        getAnalyticsBridge(): IAnalytics;
        /**
           @method
           Obtain a reference to the IAudio bridge.

           @return {Adaptive.AudioBridge} bridge instance.
        */
        getAudioBridge(): IAudio;
        /**
           @method
           Obtain a reference to the IBarcode bridge.

           @return {Adaptive.BarcodeBridge} bridge instance.
        */
        getBarcodeBridge(): IBarcode;
        /**
           @method
           Obtain a reference to the IBarometer bridge.

           @return {Adaptive.BarometerBridge} bridge instance.
        */
        getBarometerBridge(): IBarometer;
        /**
           @method
           Obtain a reference to the IBluetooth bridge.

           @return {Adaptive.BluetoothBridge} bridge instance.
        */
        getBluetoothBridge(): IBluetooth;
        /**
           @method
           Obtain a reference to the IBrowser bridge.

           @return {Adaptive.BrowserBridge} bridge instance.
        */
        getBrowserBridge(): IBrowser;
        /**
           @method
           Obtain a reference to the ICalendar bridge.

           @return {Adaptive.CalendarBridge} bridge instance.
        */
        getCalendarBridge(): ICalendar;
        /**
           @method
           Obtain a reference to the ICamera bridge.

           @return {Adaptive.CameraBridge} bridge instance.
        */
        getCameraBridge(): ICamera;
        /**
           @method
           Obtain a reference to the ICapabilities bridge.

           @return {Adaptive.CapabilitiesBridge} bridge instance.
        */
        getCapabilitiesBridge(): ICapabilities;
        /**
           @method
           Obtain a reference to the ICloud bridge.

           @return {Adaptive.CloudBridge} bridge instance.
        */
        getCloudBridge(): ICloud;
        /**
           @method
           Obtain a reference to the ICompression bridge.

           @return {Adaptive.CompressionBridge} bridge instance.
        */
        getCompressionBridge(): ICompression;
        /**
           @method
           Obtain a reference to the IConcurrent bridge.

           @return {Adaptive.ConcurrentBridge} bridge instance.
        */
        getConcurrentBridge(): IConcurrent;
        /**
           @method
           Obtain a reference to the IContact bridge.

           @return {Adaptive.ContactBridge} bridge instance.
        */
        getContactBridge(): IContact;
        /**
           @method
           Obtain a reference to the ICrypto bridge.

           @return {Adaptive.CryptoBridge} bridge instance.
        */
        getCryptoBridge(): ICrypto;
        /**
           @method
           Obtain a reference to the IDataStream bridge.

           @return {Adaptive.DataStreamBridge} bridge instance.
        */
        getDataStreamBridge(): IDataStream;
        /**
           @method
           Obtain a reference to the IDatabase bridge.

           @return {Adaptive.DatabaseBridge} bridge instance.
        */
        getDatabaseBridge(): IDatabase;
        /**
           @method
           Obtain a reference to the IDesktop bridge.

           @return {Adaptive.DesktopBridge} bridge instance.
        */
        getDesktopBridge(): IDesktop;
        /**
           @method
           Obtain a reference to the IDevice bridge.

           @return {Adaptive.DeviceBridge} bridge instance.
        */
        getDeviceBridge(): IDevice;
        /**
           @method
           Obtain a reference to the IDisplay bridge.

           @return {Adaptive.DisplayBridge} bridge instance.
        */
        getDisplayBridge(): IDisplay;
        /**
           @method
           Obtain a reference to the IFacebook bridge.

           @return {Adaptive.FacebookBridge} bridge instance.
        */
        getFacebookBridge(): IFacebook;
        /**
           @method
           Obtain a reference to the IFile bridge.

           @return {Adaptive.FileBridge} bridge instance.
        */
        getFileBridge(): IFile;
        /**
           @method
           Obtain a reference to the IFileSystem bridge.

           @return {Adaptive.FileSystemBridge} bridge instance.
        */
        getFileSystemBridge(): IFileSystem;
        /**
           @method
           Obtain a reference to the IGeolocation bridge.

           @return {Adaptive.GeolocationBridge} bridge instance.
        */
        getGeolocationBridge(): IGeolocation;
        /**
           @method
           Obtain a reference to the IGlobalization bridge.

           @return {Adaptive.GlobalizationBridge} bridge instance.
        */
        getGlobalizationBridge(): IGlobalization;
        /**
           @method
           Obtain a reference to the IGooglePlus bridge.

           @return {Adaptive.GooglePlusBridge} bridge instance.
        */
        getGooglePlusBridge(): IGooglePlus;
        /**
           @method
           Obtain a reference to the IGyroscope bridge.

           @return {Adaptive.GyroscopeBridge} bridge instance.
        */
        getGyroscopeBridge(): IGyroscope;
        /**
           @method
           Obtain a reference to the IImaging bridge.

           @return {Adaptive.ImagingBridge} bridge instance.
        */
        getImagingBridge(): IImaging;
        /**
           @method
           Obtain a reference to the IInternalStorage bridge.

           @return {Adaptive.InternalStorageBridge} bridge instance.
        */
        getInternalStorageBridge(): IInternalStorage;
        /**
           @method
           Obtain a reference to the ILifecycle bridge.

           @return {Adaptive.LifecycleBridge} bridge instance.
        */
        getLifecycleBridge(): ILifecycle;
        /**
           @method
           Obtain a reference to the ILinkedIn bridge.

           @return {Adaptive.LinkedInBridge} bridge instance.
        */
        getLinkedInBridge(): ILinkedIn;
        /**
           @method
           Obtain a reference to the ILogging bridge.

           @return {Adaptive.LoggingBridge} bridge instance.
        */
        getLoggingBridge(): ILogging;
        /**
           @method
           Obtain a reference to the IMagnetometer bridge.

           @return {Adaptive.MagnetometerBridge} bridge instance.
        */
        getMagnetometerBridge(): IMagnetometer;
        /**
           @method
           Obtain a reference to the IMail bridge.

           @return {Adaptive.MailBridge} bridge instance.
        */
        getMailBridge(): IMail;
        /**
           @method
           Obtain a reference to the IManagement bridge.

           @return {Adaptive.ManagementBridge} bridge instance.
        */
        getManagementBridge(): IManagement;
        /**
           @method
           Obtain a reference to the IMap bridge.

           @return {Adaptive.MapBridge} bridge instance.
        */
        getMapBridge(): IMap;
        /**
           @method
           Obtain a reference to the IMessaging bridge.

           @return {Adaptive.MessagingBridge} bridge instance.
        */
        getMessagingBridge(): IMessaging;
        /**
           @method
           Obtain a reference to the INFC bridge.

           @return {Adaptive.NFCBridge} bridge instance.
        */
        getNFCBridge(): INFC;
        /**
           @method
           Obtain a reference to the INetworkInfo bridge.

           @return {Adaptive.NetworkInfoBridge} bridge instance.
        */
        getNetworkInfoBridge(): INetworkInfo;
        /**
           @method
           Obtain a reference to the INetworkNaming bridge.

           @return {Adaptive.NetworkNamingBridge} bridge instance.
        */
        getNetworkNamingBridge(): INetworkNaming;
        /**
           @method
           Obtain a reference to the INetworkReachability bridge.

           @return {Adaptive.NetworkReachabilityBridge} bridge instance.
        */
        getNetworkReachabilityBridge(): INetworkReachability;
        /**
           @method
           Obtain a reference to the INetworkStatus bridge.

           @return {Adaptive.NetworkStatusBridge} bridge instance.
        */
        getNetworkStatusBridge(): INetworkStatus;
        /**
           @method
           Obtain a reference to the INotification bridge.

           @return {Adaptive.NotificationBridge} bridge instance.
        */
        getNotificationBridge(): INotification;
        /**
           @method
           Obtain a reference to the INotificationLocal bridge.

           @return {Adaptive.NotificationLocalBridge} bridge instance.
        */
        getNotificationLocalBridge(): INotificationLocal;
        /**
           @method
           Obtain a reference to the IOAuth bridge.

           @return {Adaptive.OAuthBridge} bridge instance.
        */
        getOAuthBridge(): IOAuth;
        /**
           @method
           Obtain a reference to the IOCR bridge.

           @return {Adaptive.OCRBridge} bridge instance.
        */
        getOCRBridge(): IOCR;
        /**
           @method
           Obtain a reference to the IOS bridge.

           @return {Adaptive.OSBridge} bridge instance.
        */
        getOSBridge(): IOS;
        /**
           @method
           Obtain a reference to the IOpenId bridge.

           @return {Adaptive.OpenIdBridge} bridge instance.
        */
        getOpenIdBridge(): IOpenId;
        /**
           @method
           Obtain a reference to the IPrinting bridge.

           @return {Adaptive.PrintingBridge} bridge instance.
        */
        getPrintingBridge(): IPrinting;
        /**
           @method
           Obtain a reference to the IProximity bridge.

           @return {Adaptive.ProximityBridge} bridge instance.
        */
        getProximityBridge(): IProximity;
        /**
           @method
           Obtain a reference to the IQRCode bridge.

           @return {Adaptive.QRCodeBridge} bridge instance.
        */
        getQRCodeBridge(): IQRCode;
        /**
           @method
           Obtain a reference to the IRSS bridge.

           @return {Adaptive.RSSBridge} bridge instance.
        */
        getRSSBridge(): IRSS;
        /**
           @method
           Obtain a reference to the IRuntime bridge.

           @return {Adaptive.RuntimeBridge} bridge instance.
        */
        getRuntimeBridge(): IRuntime;
        /**
           @method
           Obtain a reference to the ISecurity bridge.

           @return {Adaptive.SecurityBridge} bridge instance.
        */
        getSecurityBridge(): ISecurity;
        /**
           @method
           Obtain a reference to the IService bridge.

           @return {Adaptive.ServiceBridge} bridge instance.
        */
        getServiceBridge(): IService;
        /**
           @method
           Obtain a reference to the ISettings bridge.

           @return {Adaptive.SettingsBridge} bridge instance.
        */
        getSettingsBridge(): ISettings;
        /**
           @method
           Obtain a reference to the ISocket bridge.

           @return {Adaptive.SocketBridge} bridge instance.
        */
        getSocketBridge(): ISocket;
        /**
           @method
           Obtain a reference to the IStore bridge.

           @return {Adaptive.StoreBridge} bridge instance.
        */
        getStoreBridge(): IStore;
        /**
           @method
           Obtain a reference to the ITelephony bridge.

           @return {Adaptive.TelephonyBridge} bridge instance.
        */
        getTelephonyBridge(): ITelephony;
        /**
           @method
           Obtain a reference to the ITimer bridge.

           @return {Adaptive.TimerBridge} bridge instance.
        */
        getTimerBridge(): ITimer;
        /**
           @method
           Obtain a reference to the ITwitter bridge.

           @return {Adaptive.TwitterBridge} bridge instance.
        */
        getTwitterBridge(): ITwitter;
        /**
           @method
           Obtain a reference to the IUI bridge.

           @return {Adaptive.UIBridge} bridge instance.
        */
        getUIBridge(): IUI;
        /**
           @method
           Obtain a reference to the IUpdate bridge.

           @return {Adaptive.UpdateBridge} bridge instance.
        */
        getUpdateBridge(): IUpdate;
        /**
           @method
           Obtain a reference to the IVibration bridge.

           @return {Adaptive.VibrationBridge} bridge instance.
        */
        getVibrationBridge(): IVibration;
        /**
           @method
           Obtain a reference to the IVideo bridge.

           @return {Adaptive.VideoBridge} bridge instance.
        */
        getVideoBridge(): IVideo;
        /**
           @method
           Obtain a reference to the IWallet bridge.

           @return {Adaptive.WalletBridge} bridge instance.
        */
        getWalletBridge(): IWallet;
        /**
           @method
           Obtain a reference to the IXML bridge.

           @return {Adaptive.XMLBridge} bridge instance.
        */
        getXMLBridge(): IXML;
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        getAPIVersion(): string;
    }
    /**
       @enum {Adaptive.ContactAddressType} Adaptive.ContactAddressType
       Enumeration ContactAddressType
    */
    class ContactAddressType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ContactAddressType} [Home='Home']
        */
        static Home: ContactAddressType;
        /**
           @property {Adaptive.ContactAddressType} [Work='Work']
        */
        static Work: ContactAddressType;
        /**
           @property {Adaptive.ContactAddressType} [Other='Other']
        */
        static Other: ContactAddressType;
        /**
           @property {Adaptive.ContactAddressType} [Unknown='Unknown']
        */
        static Unknown: ContactAddressType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactAddressType}
        */
        static toObject(object: any): ContactAddressType;
    }
    /**
       @enum {Adaptive.ContactEmailType} Adaptive.ContactEmailType
       Enumeration ContactEmailType
    */
    class ContactEmailType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ContactEmailType} [Personal='Personal']
        */
        static Personal: ContactEmailType;
        /**
           @property {Adaptive.ContactEmailType} [Work='Work']
        */
        static Work: ContactEmailType;
        /**
           @property {Adaptive.ContactEmailType} [Other='Other']
        */
        static Other: ContactEmailType;
        /**
           @property {Adaptive.ContactEmailType} [Unknown='Unknown']
        */
        static Unknown: ContactEmailType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactEmailType}
        */
        static toObject(object: any): ContactEmailType;
    }
    /**
       @enum {Adaptive.ContactPersonalInfoTitle} Adaptive.ContactPersonalInfoTitle
       Enumeration ContactPersonalInfoTitle
    */
    class ContactPersonalInfoTitle {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Mr='Mr']
        */
        static Mr: ContactPersonalInfoTitle;
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Mrs='Mrs']
        */
        static Mrs: ContactPersonalInfoTitle;
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Ms='Ms']
        */
        static Ms: ContactPersonalInfoTitle;
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Dr='Dr']
        */
        static Dr: ContactPersonalInfoTitle;
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Unknown='Unknown']
        */
        static Unknown: ContactPersonalInfoTitle;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactPersonalInfoTitle}
        */
        static toObject(object: any): ContactPersonalInfoTitle;
    }
    /**
       @enum {Adaptive.ContactPhoneType} Adaptive.ContactPhoneType
       Enumeration ContactPhoneType
    */
    class ContactPhoneType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ContactPhoneType} [Mobile='Mobile']
        */
        static Mobile: ContactPhoneType;
        /**
           @property {Adaptive.ContactPhoneType} [Work='Work']
        */
        static Work: ContactPhoneType;
        /**
           @property {Adaptive.ContactPhoneType} [Home='Home']
        */
        static Home: ContactPhoneType;
        /**
           @property {Adaptive.ContactPhoneType} [Main='Main']
        */
        static Main: ContactPhoneType;
        /**
           @property {Adaptive.ContactPhoneType} [HomeFax='HomeFax']
        */
        static HomeFax: ContactPhoneType;
        /**
           @property {Adaptive.ContactPhoneType} [WorkFax='WorkFax']
        */
        static WorkFax: ContactPhoneType;
        /**
           @property {Adaptive.ContactPhoneType} [Other='Other']
        */
        static Other: ContactPhoneType;
        /**
           @property {Adaptive.ContactPhoneType} [Unknown='Unknown']
        */
        static Unknown: ContactPhoneType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactPhoneType}
        */
        static toObject(object: any): ContactPhoneType;
    }
    /**
       @enum {Adaptive.ContactSocialNetwork} Adaptive.ContactSocialNetwork
       Enumeration ContactSocialNetwork
    */
    class ContactSocialNetwork {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ContactSocialNetwork} [Twitter='Twitter']
        */
        static Twitter: ContactSocialNetwork;
        /**
           @property {Adaptive.ContactSocialNetwork} [Facebook='Facebook']
        */
        static Facebook: ContactSocialNetwork;
        /**
           @property {Adaptive.ContactSocialNetwork} [GooglePlus='GooglePlus']
        */
        static GooglePlus: ContactSocialNetwork;
        /**
           @property {Adaptive.ContactSocialNetwork} [LinkedIn='LinkedIn']
        */
        static LinkedIn: ContactSocialNetwork;
        /**
           @property {Adaptive.ContactSocialNetwork} [Flickr='Flickr']
        */
        static Flickr: ContactSocialNetwork;
        /**
           @property {Adaptive.ContactSocialNetwork} [Unknown='Unknown']
        */
        static Unknown: ContactSocialNetwork;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactSocialNetwork}
        */
        static toObject(object: any): ContactSocialNetwork;
    }
    /**
       @enum {Adaptive.IAccelerationListenerError} Adaptive.IAccelerationListenerError
       Enumeration IAccelerationListenerError
    */
    class IAccelerationListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IAccelerationListenerError} [Unauthorized='Unauthorized']
        */
        static Unauthorized: IAccelerationListenerError;
        /**
           @property {Adaptive.IAccelerationListenerError} [Unavailable='Unavailable']
        */
        static Unavailable: IAccelerationListenerError;
        /**
           @property {Adaptive.IAccelerationListenerError} [Unknown='Unknown']
        */
        static Unknown: IAccelerationListenerError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IAccelerationListenerError}
        */
        static toObject(object: any): IAccelerationListenerError;
    }
    /**
       @enum {Adaptive.IAccelerationListenerWarning} Adaptive.IAccelerationListenerWarning
       Enumeration IAccelerationListenerWarning
    */
    class IAccelerationListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IAccelerationListenerWarning} [NeedsCalibration='NeedsCalibration']
        */
        static NeedsCalibration: IAccelerationListenerWarning;
        /**
           @property {Adaptive.IAccelerationListenerWarning} [Stale='Stale']
        */
        static Stale: IAccelerationListenerWarning;
        /**
           @property {Adaptive.IAccelerationListenerWarning} [Unknown='Unknown']
        */
        static Unknown: IAccelerationListenerWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IAccelerationListenerWarning}
        */
        static toObject(object: any): IAccelerationListenerWarning;
    }
    /**
       @enum {Adaptive.IAdaptiveRPGroup} Adaptive.IAdaptiveRPGroup
       Enumeration IAdaptiveRPGroup
    */
    class IAdaptiveRPGroup {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Application='Application']
        */
        static Application: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Commerce='Commerce']
        */
        static Commerce: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Communication='Communication']
        */
        static Communication: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Data='Data']
        */
        static Data: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Media='Media']
        */
        static Media: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Notification='Notification']
        */
        static Notification: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [PIM='PIM']
        */
        static PIM: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Reader='Reader']
        */
        static Reader: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Security='Security']
        */
        static Security: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Sensor='Sensor']
        */
        static Sensor: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Social='Social']
        */
        static Social: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [System='System']
        */
        static System: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [UI='UI']
        */
        static UI: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Util='Util']
        */
        static Util: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Kernel='Kernel']
        */
        static Kernel: IAdaptiveRPGroup;
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Unknown='Unknown']
        */
        static Unknown: IAdaptiveRPGroup;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        static toObject(object: any): IAdaptiveRPGroup;
    }
    /**
       @enum {Adaptive.IButtonListenerError} Adaptive.IButtonListenerError
       Enumeration IButtonListenerError
    */
    class IButtonListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IButtonListenerError} [Not_Present='Not_Present']
        */
        static Not_Present: IButtonListenerError;
        /**
           @property {Adaptive.IButtonListenerError} [Unknown='Unknown']
        */
        static Unknown: IButtonListenerError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IButtonListenerError}
        */
        static toObject(object: any): IButtonListenerError;
    }
    /**
       @enum {Adaptive.IButtonListenerWarning} Adaptive.IButtonListenerWarning
       Enumeration IButtonListenerWarning
    */
    class IButtonListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IButtonListenerWarning} [Not_Implemented='Not_Implemented']
        */
        static Not_Implemented: IButtonListenerWarning;
        /**
           @property {Adaptive.IButtonListenerWarning} [Unknown='Unknown']
        */
        static Unknown: IButtonListenerWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IButtonListenerWarning}
        */
        static toObject(object: any): IButtonListenerWarning;
    }
    /**
       @enum {Adaptive.ICapabilitiesButton} Adaptive.ICapabilitiesButton
       Enumeration ICapabilitiesButton
    */
    class ICapabilitiesButton {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ICapabilitiesButton} [HomeButton='HomeButton']
        */
        static HomeButton: ICapabilitiesButton;
        /**
           @property {Adaptive.ICapabilitiesButton} [BackButton='BackButton']
        */
        static BackButton: ICapabilitiesButton;
        /**
           @property {Adaptive.ICapabilitiesButton} [OptionButton='OptionButton']
        */
        static OptionButton: ICapabilitiesButton;
        /**
           @property {Adaptive.ICapabilitiesButton} [Unknown='Unknown']
        */
        static Unknown: ICapabilitiesButton;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesButton}
        */
        static toObject(object: any): ICapabilitiesButton;
    }
    /**
       @enum {Adaptive.ICapabilitiesCommunication} Adaptive.ICapabilitiesCommunication
       Enumeration ICapabilitiesCommunication
    */
    class ICapabilitiesCommunication {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Calendar='Calendar']
        */
        static Calendar: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Contact='Contact']
        */
        static Contact: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Mail='Mail']
        */
        static Mail: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Messaging='Messaging']
        */
        static Messaging: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Telephony='Telephony']
        */
        static Telephony: ICapabilitiesCommunication;
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Unknown='Unknown']
        */
        static Unknown: ICapabilitiesCommunication;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesCommunication}
        */
        static toObject(object: any): ICapabilitiesCommunication;
    }
    /**
       @enum {Adaptive.ICapabilitiesData} Adaptive.ICapabilitiesData
       Enumeration ICapabilitiesData
    */
    class ICapabilitiesData {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ICapabilitiesData} [Database='Database']
        */
        static Database: ICapabilitiesData;
        /**
           @property {Adaptive.ICapabilitiesData} [File='File']
        */
        static File: ICapabilitiesData;
        /**
           @property {Adaptive.ICapabilitiesData} [Cloud='Cloud']
        */
        static Cloud: ICapabilitiesData;
        /**
           @property {Adaptive.ICapabilitiesData} [Unknown='Unknown']
        */
        static Unknown: ICapabilitiesData;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesData}
        */
        static toObject(object: any): ICapabilitiesData;
    }
    /**
       @enum {Adaptive.ICapabilitiesMedia} Adaptive.ICapabilitiesMedia
       Enumeration ICapabilitiesMedia
    */
    class ICapabilitiesMedia {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ICapabilitiesMedia} [Audio_Playback='Audio_Playback']
        */
        static Audio_Playback: ICapabilitiesMedia;
        /**
           @property {Adaptive.ICapabilitiesMedia} [Audio_Recording='Audio_Recording']
        */
        static Audio_Recording: ICapabilitiesMedia;
        /**
           @property {Adaptive.ICapabilitiesMedia} [Camera='Camera']
        */
        static Camera: ICapabilitiesMedia;
        /**
           @property {Adaptive.ICapabilitiesMedia} [Video_Playback='Video_Playback']
        */
        static Video_Playback: ICapabilitiesMedia;
        /**
           @property {Adaptive.ICapabilitiesMedia} [Video_Recording='Video_Recording']
        */
        static Video_Recording: ICapabilitiesMedia;
        /**
           @property {Adaptive.ICapabilitiesMedia} [Unknown='Unknown']
        */
        static Unknown: ICapabilitiesMedia;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesMedia}
        */
        static toObject(object: any): ICapabilitiesMedia;
    }
    /**
       @enum {Adaptive.ICapabilitiesNet} Adaptive.ICapabilitiesNet
       Enumeration ICapabilitiesNet
    */
    class ICapabilitiesNet {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ICapabilitiesNet} [GSM='GSM']
        */
        static GSM: ICapabilitiesNet;
        /**
           @property {Adaptive.ICapabilitiesNet} [GPRS='GPRS']
        */
        static GPRS: ICapabilitiesNet;
        /**
           @property {Adaptive.ICapabilitiesNet} [HSDPA='HSDPA']
        */
        static HSDPA: ICapabilitiesNet;
        /**
           @property {Adaptive.ICapabilitiesNet} [LTE='LTE']
        */
        static LTE: ICapabilitiesNet;
        /**
           @property {Adaptive.ICapabilitiesNet} [WIFI='WIFI']
        */
        static WIFI: ICapabilitiesNet;
        /**
           @property {Adaptive.ICapabilitiesNet} [Ethernet='Ethernet']
        */
        static Ethernet: ICapabilitiesNet;
        /**
           @property {Adaptive.ICapabilitiesNet} [Unavailable='Unavailable']
        */
        static Unavailable: ICapabilitiesNet;
        /**
           @property {Adaptive.ICapabilitiesNet} [Unknown='Unknown']
        */
        static Unknown: ICapabilitiesNet;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesNet}
        */
        static toObject(object: any): ICapabilitiesNet;
    }
    /**
       @enum {Adaptive.ICapabilitiesNotification} Adaptive.ICapabilitiesNotification
       Enumeration ICapabilitiesNotification
    */
    class ICapabilitiesNotification {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ICapabilitiesNotification} [Alarm='Alarm']
        */
        static Alarm: ICapabilitiesNotification;
        /**
           @property {Adaptive.ICapabilitiesNotification} [LocalNotification='LocalNotification']
        */
        static LocalNotification: ICapabilitiesNotification;
        /**
           @property {Adaptive.ICapabilitiesNotification} [RemoteNotification='RemoteNotification']
        */
        static RemoteNotification: ICapabilitiesNotification;
        /**
           @property {Adaptive.ICapabilitiesNotification} [Vibration='Vibration']
        */
        static Vibration: ICapabilitiesNotification;
        /**
           @property {Adaptive.ICapabilitiesNotification} [Unknown='Unknown']
        */
        static Unknown: ICapabilitiesNotification;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesNotification}
        */
        static toObject(object: any): ICapabilitiesNotification;
    }
    /**
       @enum {Adaptive.ICapabilitiesSensor} Adaptive.ICapabilitiesSensor
       Enumeration ICapabilitiesSensor
    */
    class ICapabilitiesSensor {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ICapabilitiesSensor} [Accelerometer='Accelerometer']
        */
        static Accelerometer: ICapabilitiesSensor;
        /**
           @property {Adaptive.ICapabilitiesSensor} [AmbientLight='AmbientLight']
        */
        static AmbientLight: ICapabilitiesSensor;
        /**
           @property {Adaptive.ICapabilitiesSensor} [Barometer='Barometer']
        */
        static Barometer: ICapabilitiesSensor;
        /**
           @property {Adaptive.ICapabilitiesSensor} [Geolocation='Geolocation']
        */
        static Geolocation: ICapabilitiesSensor;
        /**
           @property {Adaptive.ICapabilitiesSensor} [Gyroscope='Gyroscope']
        */
        static Gyroscope: ICapabilitiesSensor;
        /**
           @property {Adaptive.ICapabilitiesSensor} [Magnetometer='Magnetometer']
        */
        static Magnetometer: ICapabilitiesSensor;
        /**
           @property {Adaptive.ICapabilitiesSensor} [Proximity='Proximity']
        */
        static Proximity: ICapabilitiesSensor;
        /**
           @property {Adaptive.ICapabilitiesSensor} [Unknown='Unknown']
        */
        static Unknown: ICapabilitiesSensor;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesSensor}
        */
        static toObject(object: any): ICapabilitiesSensor;
    }
    /**
       @enum {Adaptive.IContactFieldGroup} Adaptive.IContactFieldGroup
       Enumeration IContactFieldGroup
    */
    class IContactFieldGroup {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IContactFieldGroup} [PERSONAL_INFO='PERSONAL_INFO']
        */
        static PERSONAL_INFO: IContactFieldGroup;
        /**
           @property {Adaptive.IContactFieldGroup} [PROFESSIONAL_INFO='PROFESSIONAL_INFO']
        */
        static PROFESSIONAL_INFO: IContactFieldGroup;
        /**
           @property {Adaptive.IContactFieldGroup} [ADDRESSES='ADDRESSES']
        */
        static ADDRESSES: IContactFieldGroup;
        /**
           @property {Adaptive.IContactFieldGroup} [PHONES='PHONES']
        */
        static PHONES: IContactFieldGroup;
        /**
           @property {Adaptive.IContactFieldGroup} [EMAILS='EMAILS']
        */
        static EMAILS: IContactFieldGroup;
        /**
           @property {Adaptive.IContactFieldGroup} [WEBSITES='WEBSITES']
        */
        static WEBSITES: IContactFieldGroup;
        /**
           @property {Adaptive.IContactFieldGroup} [SOCIALS='SOCIALS']
        */
        static SOCIALS: IContactFieldGroup;
        /**
           @property {Adaptive.IContactFieldGroup} [TAGS='TAGS']
        */
        static TAGS: IContactFieldGroup;
        /**
           @property {Adaptive.IContactFieldGroup} [Unknown='Unknown']
        */
        static Unknown: IContactFieldGroup;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactFieldGroup}
        */
        static toObject(object: any): IContactFieldGroup;
    }
    /**
       @enum {Adaptive.IContactFilter} Adaptive.IContactFilter
       Enumeration IContactFilter
    */
    class IContactFilter {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IContactFilter} [HAS_PHONE='HAS_PHONE']
        */
        static HAS_PHONE: IContactFilter;
        /**
           @property {Adaptive.IContactFilter} [HAS_EMAIL='HAS_EMAIL']
        */
        static HAS_EMAIL: IContactFilter;
        /**
           @property {Adaptive.IContactFilter} [HAS_ADDRESS='HAS_ADDRESS']
        */
        static HAS_ADDRESS: IContactFilter;
        /**
           @property {Adaptive.IContactFilter} [Unknown='Unknown']
        */
        static Unknown: IContactFilter;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactFilter}
        */
        static toObject(object: any): IContactFilter;
    }
    /**
       @enum {Adaptive.IContactPhotoResultCallbackError} Adaptive.IContactPhotoResultCallbackError
       Enumeration IContactPhotoResultCallbackError
    */
    class IContactPhotoResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [NoPermission='NoPermission']
        */
        static NoPermission: IContactPhotoResultCallbackError;
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [Wrong_Params='Wrong_Params']
        */
        static Wrong_Params: IContactPhotoResultCallbackError;
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [No_Photo='No_Photo']
        */
        static No_Photo: IContactPhotoResultCallbackError;
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IContactPhotoResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactPhotoResultCallbackError}
        */
        static toObject(object: any): IContactPhotoResultCallbackError;
    }
    /**
       @enum {Adaptive.IContactPhotoResultCallbackWarning} Adaptive.IContactPhotoResultCallbackWarning
       Enumeration IContactPhotoResultCallbackWarning
    */
    class IContactPhotoResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [LimitExceeded='LimitExceeded']
        */
        static LimitExceeded: IContactPhotoResultCallbackWarning;
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [No_Matches='No_Matches']
        */
        static No_Matches: IContactPhotoResultCallbackWarning;
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IContactPhotoResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactPhotoResultCallbackWarning}
        */
        static toObject(object: any): IContactPhotoResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IContactResultCallbackError} Adaptive.IContactResultCallbackError
       Enumeration IContactResultCallbackError
    */
    class IContactResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IContactResultCallbackError} [NoPermission='NoPermission']
        */
        static NoPermission: IContactResultCallbackError;
        /**
           @property {Adaptive.IContactResultCallbackError} [Wrong_Params='Wrong_Params']
        */
        static Wrong_Params: IContactResultCallbackError;
        /**
           @property {Adaptive.IContactResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IContactResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactResultCallbackError}
        */
        static toObject(object: any): IContactResultCallbackError;
    }
    /**
       @enum {Adaptive.IContactResultCallbackWarning} Adaptive.IContactResultCallbackWarning
       Enumeration IContactResultCallbackWarning
    */
    class IContactResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IContactResultCallbackWarning} [LimitExceeded='LimitExceeded']
        */
        static LimitExceeded: IContactResultCallbackWarning;
        /**
           @property {Adaptive.IContactResultCallbackWarning} [No_Matches='No_Matches']
        */
        static No_Matches: IContactResultCallbackWarning;
        /**
           @property {Adaptive.IContactResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IContactResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactResultCallbackWarning}
        */
        static toObject(object: any): IContactResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IDatabaseResultCallbackError} Adaptive.IDatabaseResultCallbackError
       Enumeration IDatabaseResultCallbackError
    */
    class IDatabaseResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IDatabaseResultCallbackError} [NoSpace='NoSpace']
        */
        static NoSpace: IDatabaseResultCallbackError;
        /**
           @property {Adaptive.IDatabaseResultCallbackError} [SqlException='SqlException']
        */
        static SqlException: IDatabaseResultCallbackError;
        /**
           @property {Adaptive.IDatabaseResultCallbackError} [NotDeleted='NotDeleted']
        */
        static NotDeleted: IDatabaseResultCallbackError;
        /**
           @property {Adaptive.IDatabaseResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IDatabaseResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IDatabaseResultCallbackError}
        */
        static toObject(object: any): IDatabaseResultCallbackError;
    }
    /**
       @enum {Adaptive.IDatabaseResultCallbackWarning} Adaptive.IDatabaseResultCallbackWarning
       Enumeration IDatabaseResultCallbackWarning
    */
    class IDatabaseResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IDatabaseResultCallbackWarning} [DatabaseExists='DatabaseExists']
        */
        static DatabaseExists: IDatabaseResultCallbackWarning;
        /**
           @property {Adaptive.IDatabaseResultCallbackWarning} [IsOpen='IsOpen']
        */
        static IsOpen: IDatabaseResultCallbackWarning;
        /**
           @property {Adaptive.IDatabaseResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IDatabaseResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IDatabaseResultCallbackWarning}
        */
        static toObject(object: any): IDatabaseResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IDatabaseTableResultCallbackError} Adaptive.IDatabaseTableResultCallbackError
       Enumeration IDatabaseTableResultCallbackError
    */
    class IDatabaseTableResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [NoSpace='NoSpace']
        */
        static NoSpace: IDatabaseTableResultCallbackError;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [ReadOnlyTable='ReadOnlyTable']
        */
        static ReadOnlyTable: IDatabaseTableResultCallbackError;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [SqlException='SqlException']
        */
        static SqlException: IDatabaseTableResultCallbackError;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [DatabaseNotFound='DatabaseNotFound']
        */
        static DatabaseNotFound: IDatabaseTableResultCallbackError;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [NoTableFound='NoTableFound']
        */
        static NoTableFound: IDatabaseTableResultCallbackError;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IDatabaseTableResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IDatabaseTableResultCallbackError}
        */
        static toObject(object: any): IDatabaseTableResultCallbackError;
    }
    /**
       @enum {Adaptive.IDatabaseTableResultCallbackWarning} Adaptive.IDatabaseTableResultCallbackWarning
       Enumeration IDatabaseTableResultCallbackWarning
    */
    class IDatabaseTableResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackWarning} [TableExists='TableExists']
        */
        static TableExists: IDatabaseTableResultCallbackWarning;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackWarning} [TableLocked='TableLocked']
        */
        static TableLocked: IDatabaseTableResultCallbackWarning;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackWarning} [NoResults='NoResults']
        */
        static NoResults: IDatabaseTableResultCallbackWarning;
        /**
           @property {Adaptive.IDatabaseTableResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IDatabaseTableResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IDatabaseTableResultCallbackWarning}
        */
        static toObject(object: any): IDatabaseTableResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IFileDataLoadResultCallbackError} Adaptive.IFileDataLoadResultCallbackError
       Enumeration IFileDataLoadResultCallbackError
    */
    class IFileDataLoadResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileDataLoadResultCallbackError} [InexistentFile='InexistentFile']
        */
        static InexistentFile: IFileDataLoadResultCallbackError;
        /**
           @property {Adaptive.IFileDataLoadResultCallbackError} [InsufficientSpace='InsufficientSpace']
        */
        static InsufficientSpace: IFileDataLoadResultCallbackError;
        /**
           @property {Adaptive.IFileDataLoadResultCallbackError} [Unauthorized='Unauthorized']
        */
        static Unauthorized: IFileDataLoadResultCallbackError;
        /**
           @property {Adaptive.IFileDataLoadResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IFileDataLoadResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileDataLoadResultCallbackError}
        */
        static toObject(object: any): IFileDataLoadResultCallbackError;
    }
    /**
       @enum {Adaptive.IFileDataLoadResultCallbackWarning} Adaptive.IFileDataLoadResultCallbackWarning
       Enumeration IFileDataLoadResultCallbackWarning
    */
    class IFileDataLoadResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileDataLoadResultCallbackWarning} [ExceedMaximumSize='ExceedMaximumSize']
        */
        static ExceedMaximumSize: IFileDataLoadResultCallbackWarning;
        /**
           @property {Adaptive.IFileDataLoadResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IFileDataLoadResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileDataLoadResultCallbackWarning}
        */
        static toObject(object: any): IFileDataLoadResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IFileDataStoreResultCallbackError} Adaptive.IFileDataStoreResultCallbackError
       Enumeration IFileDataStoreResultCallbackError
    */
    class IFileDataStoreResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileDataStoreResultCallbackError} [InexistentFile='InexistentFile']
        */
        static InexistentFile: IFileDataStoreResultCallbackError;
        /**
           @property {Adaptive.IFileDataStoreResultCallbackError} [InsufficientSpace='InsufficientSpace']
        */
        static InsufficientSpace: IFileDataStoreResultCallbackError;
        /**
           @property {Adaptive.IFileDataStoreResultCallbackError} [Unauthorized='Unauthorized']
        */
        static Unauthorized: IFileDataStoreResultCallbackError;
        /**
           @property {Adaptive.IFileDataStoreResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IFileDataStoreResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileDataStoreResultCallbackError}
        */
        static toObject(object: any): IFileDataStoreResultCallbackError;
    }
    /**
       @enum {Adaptive.IFileDataStoreResultCallbackWarning} Adaptive.IFileDataStoreResultCallbackWarning
       Enumeration IFileDataStoreResultCallbackWarning
    */
    class IFileDataStoreResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileDataStoreResultCallbackWarning} [ExceedMaximumSize='ExceedMaximumSize']
        */
        static ExceedMaximumSize: IFileDataStoreResultCallbackWarning;
        /**
           @property {Adaptive.IFileDataStoreResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IFileDataStoreResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileDataStoreResultCallbackWarning}
        */
        static toObject(object: any): IFileDataStoreResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IFileListResultCallbackError} Adaptive.IFileListResultCallbackError
       Enumeration IFileListResultCallbackError
    */
    class IFileListResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileListResultCallbackError} [InexistentFile='InexistentFile']
        */
        static InexistentFile: IFileListResultCallbackError;
        /**
           @property {Adaptive.IFileListResultCallbackError} [Unauthorized='Unauthorized']
        */
        static Unauthorized: IFileListResultCallbackError;
        /**
           @property {Adaptive.IFileListResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IFileListResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileListResultCallbackError}
        */
        static toObject(object: any): IFileListResultCallbackError;
    }
    /**
       @enum {Adaptive.IFileListResultCallbackWarning} Adaptive.IFileListResultCallbackWarning
       Enumeration IFileListResultCallbackWarning
    */
    class IFileListResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileListResultCallbackWarning} [PartialResult='PartialResult']
        */
        static PartialResult: IFileListResultCallbackWarning;
        /**
           @property {Adaptive.IFileListResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IFileListResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileListResultCallbackWarning}
        */
        static toObject(object: any): IFileListResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IFileResultCallbackError} Adaptive.IFileResultCallbackError
       Enumeration IFileResultCallbackError
    */
    class IFileResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileResultCallbackError} [FileExists='FileExists']
        */
        static FileExists: IFileResultCallbackError;
        /**
           @property {Adaptive.IFileResultCallbackError} [SourceInexistent='SourceInexistent']
        */
        static SourceInexistent: IFileResultCallbackError;
        /**
           @property {Adaptive.IFileResultCallbackError} [DestionationExists='DestionationExists']
        */
        static DestionationExists: IFileResultCallbackError;
        /**
           @property {Adaptive.IFileResultCallbackError} [InsufficientSpace='InsufficientSpace']
        */
        static InsufficientSpace: IFileResultCallbackError;
        /**
           @property {Adaptive.IFileResultCallbackError} [Unauthorized='Unauthorized']
        */
        static Unauthorized: IFileResultCallbackError;
        /**
           @property {Adaptive.IFileResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IFileResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileResultCallbackError}
        */
        static toObject(object: any): IFileResultCallbackError;
    }
    /**
       @enum {Adaptive.IFileResultCallbackWarning} Adaptive.IFileResultCallbackWarning
       Enumeration IFileResultCallbackWarning
    */
    class IFileResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileResultCallbackWarning} [SourceNotDeleted='SourceNotDeleted']
        */
        static SourceNotDeleted: IFileResultCallbackWarning;
        /**
           @property {Adaptive.IFileResultCallbackWarning} [RootDirectory='RootDirectory']
        */
        static RootDirectory: IFileResultCallbackWarning;
        /**
           @property {Adaptive.IFileResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IFileResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileResultCallbackWarning}
        */
        static toObject(object: any): IFileResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IFileSystemSecurity} Adaptive.IFileSystemSecurity
       Enumeration IFileSystemSecurity
    */
    class IFileSystemSecurity {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileSystemSecurity} [Default='Default']
        */
        static Default: IFileSystemSecurity;
        /**
           @property {Adaptive.IFileSystemSecurity} [Protected='Protected']
        */
        static Protected: IFileSystemSecurity;
        /**
           @property {Adaptive.IFileSystemSecurity} [Encrypted='Encrypted']
        */
        static Encrypted: IFileSystemSecurity;
        /**
           @property {Adaptive.IFileSystemSecurity} [Unknown='Unknown']
        */
        static Unknown: IFileSystemSecurity;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileSystemSecurity}
        */
        static toObject(object: any): IFileSystemSecurity;
    }
    /**
       @enum {Adaptive.IFileSystemStorageType} Adaptive.IFileSystemStorageType
       Enumeration IFileSystemStorageType
    */
    class IFileSystemStorageType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileSystemStorageType} [Application='Application']
        */
        static Application: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Document='Document']
        */
        static Document: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Cloud='Cloud']
        */
        static Cloud: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Protected='Protected']
        */
        static Protected: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Cache='Cache']
        */
        static Cache: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [External='External']
        */
        static External: IFileSystemStorageType;
        /**
           @property {Adaptive.IFileSystemStorageType} [Unknown='Unknown']
        */
        static Unknown: IFileSystemStorageType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileSystemStorageType}
        */
        static toObject(object: any): IFileSystemStorageType;
    }
    /**
       @enum {Adaptive.IFileSystemType} Adaptive.IFileSystemType
       Enumeration IFileSystemType
    */
    class IFileSystemType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IFileSystemType} [Directory='Directory']
        */
        static Directory: IFileSystemType;
        /**
           @property {Adaptive.IFileSystemType} [File='File']
        */
        static File: IFileSystemType;
        /**
           @property {Adaptive.IFileSystemType} [Unknown='Unknown']
        */
        static Unknown: IFileSystemType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileSystemType}
        */
        static toObject(object: any): IFileSystemType;
    }
    /**
       @enum {Adaptive.IGeolocationListenerError} Adaptive.IGeolocationListenerError
       Enumeration IGeolocationListenerError
    */
    class IGeolocationListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IGeolocationListenerError} [Disabled='Disabled']
        */
        static Disabled: IGeolocationListenerError;
        /**
           @property {Adaptive.IGeolocationListenerError} [RestrictedAccess='RestrictedAccess']
        */
        static RestrictedAccess: IGeolocationListenerError;
        /**
           @property {Adaptive.IGeolocationListenerError} [DeniedAccess='DeniedAccess']
        */
        static DeniedAccess: IGeolocationListenerError;
        /**
           @property {Adaptive.IGeolocationListenerError} [StatusNotDetermined='StatusNotDetermined']
        */
        static StatusNotDetermined: IGeolocationListenerError;
        /**
           @property {Adaptive.IGeolocationListenerError} [Unknown='Unknown']
        */
        static Unknown: IGeolocationListenerError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IGeolocationListenerError}
        */
        static toObject(object: any): IGeolocationListenerError;
    }
    /**
       @enum {Adaptive.IGeolocationListenerWarning} Adaptive.IGeolocationListenerWarning
       Enumeration IGeolocationListenerWarning
    */
    class IGeolocationListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IGeolocationListenerWarning} [HighDoP='HighDoP']
        */
        static HighDoP: IGeolocationListenerWarning;
        /**
           @property {Adaptive.IGeolocationListenerWarning} [StaleData='StaleData']
        */
        static StaleData: IGeolocationListenerWarning;
        /**
           @property {Adaptive.IGeolocationListenerWarning} [Unknown='Unknown']
        */
        static Unknown: IGeolocationListenerWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IGeolocationListenerWarning}
        */
        static toObject(object: any): IGeolocationListenerWarning;
    }
    /**
       @enum {Adaptive.ILifecycleListenerError} Adaptive.ILifecycleListenerError
       Enumeration ILifecycleListenerError
    */
    class ILifecycleListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ILifecycleListenerError} [Runtime='Runtime']
        */
        static Runtime: ILifecycleListenerError;
        /**
           @property {Adaptive.ILifecycleListenerError} [Implementation='Implementation']
        */
        static Implementation: ILifecycleListenerError;
        /**
           @property {Adaptive.ILifecycleListenerError} [Killed='Killed']
        */
        static Killed: ILifecycleListenerError;
        /**
           @property {Adaptive.ILifecycleListenerError} [Unknown='Unknown']
        */
        static Unknown: ILifecycleListenerError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ILifecycleListenerError}
        */
        static toObject(object: any): ILifecycleListenerError;
    }
    /**
       @enum {Adaptive.ILifecycleListenerWarning} Adaptive.ILifecycleListenerWarning
       Enumeration ILifecycleListenerWarning
    */
    class ILifecycleListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ILifecycleListenerWarning} [MemoryLow='MemoryLow']
        */
        static MemoryLow: ILifecycleListenerWarning;
        /**
           @property {Adaptive.ILifecycleListenerWarning} [BatteryLow='BatteryLow']
        */
        static BatteryLow: ILifecycleListenerWarning;
        /**
           @property {Adaptive.ILifecycleListenerWarning} [Unknown='Unknown']
        */
        static Unknown: ILifecycleListenerWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ILifecycleListenerWarning}
        */
        static toObject(object: any): ILifecycleListenerWarning;
    }
    /**
       @enum {Adaptive.ILoggingLogLevel} Adaptive.ILoggingLogLevel
       Enumeration ILoggingLogLevel
    */
    class ILoggingLogLevel {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ILoggingLogLevel} [DEBUG='DEBUG']
        */
        static DEBUG: ILoggingLogLevel;
        /**
           @property {Adaptive.ILoggingLogLevel} [WARN='WARN']
        */
        static WARN: ILoggingLogLevel;
        /**
           @property {Adaptive.ILoggingLogLevel} [ERROR='ERROR']
        */
        static ERROR: ILoggingLogLevel;
        /**
           @property {Adaptive.ILoggingLogLevel} [INFO='INFO']
        */
        static INFO: ILoggingLogLevel;
        /**
           @property {Adaptive.ILoggingLogLevel} [Unknown='Unknown']
        */
        static Unknown: ILoggingLogLevel;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ILoggingLogLevel}
        */
        static toObject(object: any): ILoggingLogLevel;
    }
    /**
       @enum {Adaptive.IMessagingCallbackError} Adaptive.IMessagingCallbackError
       Enumeration IMessagingCallbackError
    */
    class IMessagingCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IMessagingCallbackError} [SIMNotPresent='SIMNotPresent']
        */
        static SIMNotPresent: IMessagingCallbackError;
        /**
           @property {Adaptive.IMessagingCallbackError} [EmailAccountNotFound='EmailAccountNotFound']
        */
        static EmailAccountNotFound: IMessagingCallbackError;
        /**
           @property {Adaptive.IMessagingCallbackError} [NotSent='NotSent']
        */
        static NotSent: IMessagingCallbackError;
        /**
           @property {Adaptive.IMessagingCallbackError} [WrongParams='WrongParams']
        */
        static WrongParams: IMessagingCallbackError;
        /**
           @property {Adaptive.IMessagingCallbackError} [NotSupported='NotSupported']
        */
        static NotSupported: IMessagingCallbackError;
        /**
           @property {Adaptive.IMessagingCallbackError} [Unknown='Unknown']
        */
        static Unknown: IMessagingCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IMessagingCallbackError}
        */
        static toObject(object: any): IMessagingCallbackError;
    }
    /**
       @enum {Adaptive.IMessagingCallbackWarning} Adaptive.IMessagingCallbackWarning
       Enumeration IMessagingCallbackWarning
    */
    class IMessagingCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IMessagingCallbackWarning} [UnableToSentAll='UnableToSentAll']
        */
        static UnableToSentAll: IMessagingCallbackWarning;
        /**
           @property {Adaptive.IMessagingCallbackWarning} [UnableToFetchAttachment='UnableToFetchAttachment']
        */
        static UnableToFetchAttachment: IMessagingCallbackWarning;
        /**
           @property {Adaptive.IMessagingCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IMessagingCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IMessagingCallbackWarning}
        */
        static toObject(object: any): IMessagingCallbackWarning;
    }
    /**
       @enum {Adaptive.INetworkReachabilityCallbackError} Adaptive.INetworkReachabilityCallbackError
       Enumeration INetworkReachabilityCallbackError
    */
    class INetworkReachabilityCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [Forbidden='Forbidden']
        */
        static Forbidden: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [NotFound='NotFound']
        */
        static NotFound: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [MethodNotAllowed='MethodNotAllowed']
        */
        static MethodNotAllowed: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [NotAllowed='NotAllowed']
        */
        static NotAllowed: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [NotAuthenticated='NotAuthenticated']
        */
        static NotAuthenticated: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [TimeOut='TimeOut']
        */
        static TimeOut: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [NoResponse='NoResponse']
        */
        static NoResponse: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [Unreachable='Unreachable']
        */
        static Unreachable: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [Wrong_Params='Wrong_Params']
        */
        static Wrong_Params: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [MalformedUrl='MalformedUrl']
        */
        static MalformedUrl: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [DomainUnresolvable='DomainUnresolvable']
        */
        static DomainUnresolvable: INetworkReachabilityCallbackError;
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [Unknown='Unknown']
        */
        static Unknown: INetworkReachabilityCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.INetworkReachabilityCallbackError}
        */
        static toObject(object: any): INetworkReachabilityCallbackError;
    }
    /**
       @enum {Adaptive.INetworkReachabilityCallbackWarning} Adaptive.INetworkReachabilityCallbackWarning
       Enumeration INetworkReachabilityCallbackWarning
    */
    class INetworkReachabilityCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [IncorrectScheme='IncorrectScheme']
        */
        static IncorrectScheme: INetworkReachabilityCallbackWarning;
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [NotSecure='NotSecure']
        */
        static NotSecure: INetworkReachabilityCallbackWarning;
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [NotTrusted='NotTrusted']
        */
        static NotTrusted: INetworkReachabilityCallbackWarning;
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [Redirected='Redirected']
        */
        static Redirected: INetworkReachabilityCallbackWarning;
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [NotRegisteredService='NotRegisteredService']
        */
        static NotRegisteredService: INetworkReachabilityCallbackWarning;
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: INetworkReachabilityCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.INetworkReachabilityCallbackWarning}
        */
        static toObject(object: any): INetworkReachabilityCallbackWarning;
    }
    /**
       @enum {Adaptive.INetworkStatusListenerError} Adaptive.INetworkStatusListenerError
       Enumeration INetworkStatusListenerError
    */
    class INetworkStatusListenerError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.INetworkStatusListenerError} [NoPermission='NoPermission']
        */
        static NoPermission: INetworkStatusListenerError;
        /**
           @property {Adaptive.INetworkStatusListenerError} [Unreachable='Unreachable']
        */
        static Unreachable: INetworkStatusListenerError;
        /**
           @property {Adaptive.INetworkStatusListenerError} [Unknown='Unknown']
        */
        static Unknown: INetworkStatusListenerError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.INetworkStatusListenerError}
        */
        static toObject(object: any): INetworkStatusListenerError;
    }
    /**
       @enum {Adaptive.INetworkStatusListenerWarning} Adaptive.INetworkStatusListenerWarning
       Enumeration INetworkStatusListenerWarning
    */
    class INetworkStatusListenerWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.INetworkStatusListenerWarning} [IpAddressNotAssigned='IpAddressNotAssigned']
        */
        static IpAddressNotAssigned: INetworkStatusListenerWarning;
        /**
           @property {Adaptive.INetworkStatusListenerWarning} [IpAddressChanged='IpAddressChanged']
        */
        static IpAddressChanged: INetworkStatusListenerWarning;
        /**
           @property {Adaptive.INetworkStatusListenerWarning} [Unknown='Unknown']
        */
        static Unknown: INetworkStatusListenerWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.INetworkStatusListenerWarning}
        */
        static toObject(object: any): INetworkStatusListenerWarning;
    }
    /**
       @enum {Adaptive.IOSType} Adaptive.IOSType
       Enumeration IOSType
    */
    class IOSType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IOSType} [iOS='iOS']
        */
        static iOS: IOSType;
        /**
           @property {Adaptive.IOSType} [OSX='OSX']
        */
        static OSX: IOSType;
        /**
           @property {Adaptive.IOSType} [Windows='Windows']
        */
        static Windows: IOSType;
        /**
           @property {Adaptive.IOSType} [WindowsPhone='WindowsPhone']
        */
        static WindowsPhone: IOSType;
        /**
           @property {Adaptive.IOSType} [Android='Android']
        */
        static Android: IOSType;
        /**
           @property {Adaptive.IOSType} [Linux='Linux']
        */
        static Linux: IOSType;
        /**
           @property {Adaptive.IOSType} [Blackberry='Blackberry']
        */
        static Blackberry: IOSType;
        /**
           @property {Adaptive.IOSType} [Tizen='Tizen']
        */
        static Tizen: IOSType;
        /**
           @property {Adaptive.IOSType} [FirefoxOS='FirefoxOS']
        */
        static FirefoxOS: IOSType;
        /**
           @property {Adaptive.IOSType} [Chromium='Chromium']
        */
        static Chromium: IOSType;
        /**
           @property {Adaptive.IOSType} [Unspecified='Unspecified']
        */
        static Unspecified: IOSType;
        /**
           @property {Adaptive.IOSType} [Unknown='Unknown']
        */
        static Unknown: IOSType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IOSType}
        */
        static toObject(object: any): IOSType;
    }
    /**
       @enum {Adaptive.ISecurityResultCallbackError} Adaptive.ISecurityResultCallbackError
       Enumeration ISecurityResultCallbackError
    */
    class ISecurityResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ISecurityResultCallbackError} [NoPermission='NoPermission']
        */
        static NoPermission: ISecurityResultCallbackError;
        /**
           @property {Adaptive.ISecurityResultCallbackError} [NoMatchesFound='NoMatchesFound']
        */
        static NoMatchesFound: ISecurityResultCallbackError;
        /**
           @property {Adaptive.ISecurityResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: ISecurityResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ISecurityResultCallbackError}
        */
        static toObject(object: any): ISecurityResultCallbackError;
    }
    /**
       @enum {Adaptive.ISecurityResultCallbackWarning} Adaptive.ISecurityResultCallbackWarning
       Enumeration ISecurityResultCallbackWarning
    */
    class ISecurityResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ISecurityResultCallbackWarning} [EntryOverride='EntryOverride']
        */
        static EntryOverride: ISecurityResultCallbackWarning;
        /**
           @property {Adaptive.ISecurityResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: ISecurityResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ISecurityResultCallbackWarning}
        */
        static toObject(object: any): ISecurityResultCallbackWarning;
    }
    /**
       @enum {Adaptive.IServiceProtocolVersion} Adaptive.IServiceProtocolVersion
       Enumeration IServiceProtocolVersion
    */
    class IServiceProtocolVersion {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IServiceProtocolVersion} [HttpProtocolVersion10='HttpProtocolVersion10']
        */
        static HttpProtocolVersion10: IServiceProtocolVersion;
        /**
           @property {Adaptive.IServiceProtocolVersion} [HttpProtocolVersion11='HttpProtocolVersion11']
        */
        static HttpProtocolVersion11: IServiceProtocolVersion;
        /**
           @property {Adaptive.IServiceProtocolVersion} [Unknown='Unknown']
        */
        static Unknown: IServiceProtocolVersion;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceProtocolVersion}
        */
        static toObject(object: any): IServiceProtocolVersion;
    }
    /**
       @enum {Adaptive.IServiceMethod} Adaptive.IServiceMethod
       Enumeration IServiceMethod
    */
    class IServiceMethod {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IServiceMethod} [Post='Post']
        */
        static Post: IServiceMethod;
        /**
           @property {Adaptive.IServiceMethod} [Get='Get']
        */
        static Get: IServiceMethod;
        /**
           @property {Adaptive.IServiceMethod} [Unknown='Unknown']
        */
        static Unknown: IServiceMethod;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceMethod}
        */
        static toObject(object: any): IServiceMethod;
    }
    /**
       @enum {Adaptive.IServiceType} Adaptive.IServiceType
       Enumeration IServiceType
    */
    class IServiceType {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeAmfSerialization='ServiceTypeAmfSerialization']
        */
        static ServiceTypeAmfSerialization: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeGwtRpc='ServiceTypeGwtRpc']
        */
        static ServiceTypeGwtRpc: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeOctetBinary='ServiceTypeOctetBinary']
        */
        static ServiceTypeOctetBinary: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRemotingSerialization='ServiceTypeRemotingSerialization']
        */
        static ServiceTypeRemotingSerialization: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRestJson='ServiceTypeRestJson']
        */
        static ServiceTypeRestJson: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRestXml='ServiceTypeRestXml']
        */
        static ServiceTypeRestXml: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeSoapJson='ServiceTypeSoapJson']
        */
        static ServiceTypeSoapJson: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeSoapXml='ServiceTypeSoapXml']
        */
        static ServiceTypeSoapXml: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeXmlRpcJson='ServiceTypeXmlRpcJson']
        */
        static ServiceTypeXmlRpcJson: IServiceType;
        /**
           @property {Adaptive.IServiceType} [ServiceTypeXmlRpcXml='ServiceTypeXmlRpcXml']
        */
        static ServiceTypeXmlRpcXml: IServiceType;
        /**
           @property {Adaptive.IServiceType} [Unknown='Unknown']
        */
        static Unknown: IServiceType;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceType}
        */
        static toObject(object: any): IServiceType;
    }
    /**
       @enum {Adaptive.IServiceResultCallbackError} Adaptive.IServiceResultCallbackError
       Enumeration IServiceResultCallbackError
    */
    class IServiceResultCallbackError {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IServiceResultCallbackError} [Forbidden='Forbidden']
        */
        static Forbidden: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotFound='NotFound']
        */
        static NotFound: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [MethodNotAllowed='MethodNotAllowed']
        */
        static MethodNotAllowed: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotAllowed='NotAllowed']
        */
        static NotAllowed: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotAuthenticated='NotAuthenticated']
        */
        static NotAuthenticated: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [TimeOut='TimeOut']
        */
        static TimeOut: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NoResponse='NoResponse']
        */
        static NoResponse: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [ServerError='ServerError']
        */
        static ServerError: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [Unreachable='Unreachable']
        */
        static Unreachable: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [MalformedUrl='MalformedUrl']
        */
        static MalformedUrl: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotRegisteredService='NotRegisteredService']
        */
        static NotRegisteredService: IServiceResultCallbackError;
        /**
           @property {Adaptive.IServiceResultCallbackError} [Unknown='Unknown']
        */
        static Unknown: IServiceResultCallbackError;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceResultCallbackError}
        */
        static toObject(object: any): IServiceResultCallbackError;
    }
    /**
       @enum {Adaptive.IServiceResultCallbackWarning} Adaptive.IServiceResultCallbackWarning
       Enumeration IServiceResultCallbackWarning
    */
    class IServiceResultCallbackWarning {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [NotSecure='NotSecure']
        */
        static NotSecure: IServiceResultCallbackWarning;
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [NotTrusted='NotTrusted']
        */
        static NotTrusted: IServiceResultCallbackWarning;
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [Redirected='Redirected']
        */
        static Redirected: IServiceResultCallbackWarning;
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [Wrong_Params='Wrong_Params']
        */
        static Wrong_Params: IServiceResultCallbackWarning;
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [Unknown='Unknown']
        */
        static Unknown: IServiceResultCallbackWarning;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceResultCallbackWarning}
        */
        static toObject(object: any): IServiceResultCallbackWarning;
    }
    /**
       @enum {Adaptive.ITelephonyStatus} Adaptive.ITelephonyStatus
       Enumeration ITelephonyStatus
    */
    class ITelephonyStatus {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.ITelephonyStatus} [Dialing='Dialing']
        */
        static Dialing: ITelephonyStatus;
        /**
           @property {Adaptive.ITelephonyStatus} [Failed='Failed']
        */
        static Failed: ITelephonyStatus;
        /**
           @property {Adaptive.ITelephonyStatus} [Unknown='Unknown']
        */
        static Unknown: ITelephonyStatus;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ITelephonyStatus}
        */
        static toObject(object: any): ITelephonyStatus;
    }
    /**
       @enum {Adaptive.LifecycleState} Adaptive.LifecycleState
       Enumeration LifecycleState
    */
    class LifecycleState {
        value: string;
        constructor(value: string);
        toString(): string;
        /**
           @property {Adaptive.LifecycleState} [Starting='Starting']
        */
        static Starting: LifecycleState;
        /**
           @property {Adaptive.LifecycleState} [Started='Started']
        */
        static Started: LifecycleState;
        /**
           @property {Adaptive.LifecycleState} [Running='Running']
        */
        static Running: LifecycleState;
        /**
           @property {Adaptive.LifecycleState} [Pausing='Pausing']
        */
        static Pausing: LifecycleState;
        /**
           @property {Adaptive.LifecycleState} [PausedIdle='PausedIdle']
        */
        static PausedIdle: LifecycleState;
        /**
           @property {Adaptive.LifecycleState} [PausedRun='PausedRun']
        */
        static PausedRun: LifecycleState;
        /**
           @property {Adaptive.LifecycleState} [Resuming='Resuming']
        */
        static Resuming: LifecycleState;
        /**
           @property {Adaptive.LifecycleState} [Stopping='Stopping']
        */
        static Stopping: LifecycleState;
        /**
           @property {Adaptive.LifecycleState} [Unknown='Unknown']
        */
        static Unknown: LifecycleState;
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.LifecycleState}
        */
        static toObject(object: any): LifecycleState;
    }
}
