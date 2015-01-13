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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="BaseCallback.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="FileDescriptor.ts"/>
///<reference path="IFileDataStoreResultCallback.ts"/>
///<reference path="IFileDataStoreResultCallbackError.ts"/>
///<reference path="IFileDataStoreResultCallbackWarning.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       Interface for Managing the File store operations callback
       Auto-generated implementation of IFileDataStoreResultCallback specification.
    */
    /**
       FileDataStoreResultCallback control dictionary.
    */
    Adaptive.registeredFileDataStoreResultCallback = new Adaptive.Dictionary([]);
    /**
       FileDataStoreResultCallback global callback handlers.
    */
    function handleFileDataStoreResultCallbackError(id, error) {
        var callback = Adaptive.registeredFileDataStoreResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileDataStoreResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileDataStoreResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleFileDataStoreResultCallbackError = handleFileDataStoreResultCallbackError;
    function handleFileDataStoreResultCallbackResult(id, file) {
        var callback = Adaptive.registeredFileDataStoreResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileDataStoreResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileDataStoreResultCallback.remove("" + id);
            callback.onResult(file);
        }
    }
    Adaptive.handleFileDataStoreResultCallbackResult = handleFileDataStoreResultCallbackResult;
    function handleFileDataStoreResultCallbackWarning(id, file, warning) {
        var callback = Adaptive.registeredFileDataStoreResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileDataStoreResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileDataStoreResultCallback.remove("" + id);
            callback.onWarning(file, warning);
        }
    }
    Adaptive.handleFileDataStoreResultCallbackWarning = handleFileDataStoreResultCallbackWarning;
    var FileDataStoreResultCallback = (function (_super) {
        __extends(FileDataStoreResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: IFileDataStoreResultCallbackError
           @param onResultFunction Function receiving parameters of type: FileDescriptor
           @param onWarningFunction Function receiving parameters of type: FileDescriptor, IFileDataStoreResultCallbackWarning
        */
        function FileDataStoreResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: FileDataStoreResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: FileDataStoreResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: FileDataStoreResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           Error processing data retrieval/storage operation.

           @param error Error condition encountered.
           @since ARP1.0
        */
        FileDataStoreResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           Result of data storage operation.

           @param file File reference to stored data.
           @since ARP1.0
        */
        FileDataStoreResultCallback.prototype.onResult = function (file) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(file);
            }
        };
        /**
           Result with warning of data retrieval/storage operation.

           @param file    File being loaded/stored.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        FileDataStoreResultCallback.prototype.onWarning = function (file, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: FileDataStoreResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(file, warning);
            }
        };
        return FileDataStoreResultCallback;
    })(Adaptive.BaseCallback);
    Adaptive.FileDataStoreResultCallback = FileDataStoreResultCallback;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=FileDataStoreResultCallback.js.map