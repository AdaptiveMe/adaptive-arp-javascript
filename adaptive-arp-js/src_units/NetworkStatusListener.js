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

    * @version v2.1.2

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="BaseListener.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="ICapabilitiesNet.ts"/>
///<reference path="INetworkStatusListener.ts"/>
///<reference path="INetworkStatusListenerError.ts"/>
///<reference path="INetworkStatusListenerWarning.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the Network status listener events
       Auto-generated implementation of INetworkStatusListener specification.
    */
    /**
       @property {Adaptive.Dictionary} registeredNetworkStatusListener
       @member Adaptive
       @private
       NetworkStatusListener control dictionary.
    */
    Adaptive.registeredNetworkStatusListener = new Adaptive.Dictionary([]);
    // NetworkStatusListener global listener handlers.
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.INetworkStatusListenerError} error
    */
    function handleNetworkStatusListenerError(id, error) {
        var listener = Adaptive.registeredNetworkStatusListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredNetworkStatusListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleNetworkStatusListenerError = handleNetworkStatusListenerError;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.ICapabilitiesNet} network
    */
    function handleNetworkStatusListenerResult(id, network) {
        var listener = Adaptive.registeredNetworkStatusListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredNetworkStatusListener dictionary.");
        }
        else {
            listener.onResult(network);
        }
    }
    Adaptive.handleNetworkStatusListenerResult = handleNetworkStatusListenerResult;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.ICapabilitiesNet} network
       @param {Adaptive.INetworkStatusListenerWarning} warning
    */
    function handleNetworkStatusListenerWarning(id, network, warning) {
        var listener = Adaptive.registeredNetworkStatusListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredNetworkStatusListener dictionary.");
        }
        else {
            listener.onWarning(network, warning);
        }
    }
    Adaptive.handleNetworkStatusListenerWarning = handleNetworkStatusListenerWarning;
    /**
       @class Adaptive.NetworkStatusListener
       @extends Adaptive.BaseListener
    */
    var NetworkStatusListener = (function (_super) {
        __extends(NetworkStatusListener, _super);
        /**
           @method constructor
           Constructor with anonymous handler functions for listener.

           @param {Function} onErrorFunction Function receiving parameters of type: Adaptive.INetworkStatusListenerError
           @param {Function} onResultFunction Function receiving parameters of type: Adaptive.ICapabilitiesNet
           @param {Function} onWarningFunction Function receiving parameters of type: Adaptive.ICapabilitiesNet, Adaptive.INetworkStatusListenerWarning
        */
        function NetworkStatusListener(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: NetworkStatusListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: NetworkStatusListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: NetworkStatusListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           @method
           No data received - error condition, not authorized or hardware not available.
           @param {Adaptive.INetworkStatusListenerError} error error Type of error encountered during reading.
           @since v2.0
        */
        NetworkStatusListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: NetworkStatusListener contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           @method
           Called when network connection changes somehow.
           @param {Adaptive.ICapabilitiesNet} network network Change to this network.
           @since v2.0
        */
        NetworkStatusListener.prototype.onResult = function (network) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: NetworkStatusListener contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(network);
            }
        };
        /**
           @method
           Status received with warning
           @param {Adaptive.ICapabilitiesNet} network network Change to this network.
           @param {Adaptive.INetworkStatusListenerWarning} warning warning Type of warning encountered during reading.
           @since v2.0
        */
        NetworkStatusListener.prototype.onWarning = function (network, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: NetworkStatusListener contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(network, warning);
            }
        };
        return NetworkStatusListener;
    })(Adaptive.BaseListener);
    Adaptive.NetworkStatusListener = NetworkStatusListener;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=NetworkStatusListener.js.map