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

///<reference path="BaseCallback.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="Contact.ts"/>
///<reference path="IContactResultCallback.ts"/>
///<reference path="IContactResultCallbackError.ts"/>
///<reference path="IContactResultCallbackWarning.ts"/>

module Adaptive {

     /**
        Interface for Managing the Contact operations
        Auto-generated implementation of IContactResultCallback specification.
     */

     /**
        ContactResultCallback control dictionary.
     */
     export var registeredContactResultCallback = new Dictionary<IContactResultCallback>([]);

     /**
        ContactResultCallback global callback handlers.
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
     export function handleContactResultCallbackResult(id : number, contacts : Array<Contact>) : void {
          var callback : IContactResultCallback = registeredContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactResultCallback dictionary.");
          } else {
               registeredContactResultCallback.remove(""+id);
               callback.onResult(contacts);
          }
     }
     export function handleContactResultCallbackWarning(id : number, contacts : Array<Contact>, warning : IContactResultCallbackWarning) : void {
          var callback : IContactResultCallback = registeredContactResultCallback[""+id];
          if (typeof callback === 'undefined' || callback == null) {
               console.error("ERROR: No callback with id "+id+" registered in registeredContactResultCallback dictionary.");
          } else {
               registeredContactResultCallback.remove(""+id);
               callback.onWarning(contacts, warning);
          }
     }

     export class ContactResultCallback extends BaseCallback implements IContactResultCallback {

          onErrorFunction : (error : IContactResultCallbackError) => void;
          onResultFunction : (contacts : Array<Contact>) => void;
          onWarningFunction : (contacts : Array<Contact>, warning : IContactResultCallbackWarning) => void;

          /**
             Constructor with anonymous handler functions for callback.

             @param onErrorFunction Function receiving parameters of type: Adaptive.IContactResultCallbackError
             @param onResultFunction Function receiving parameters of type: Adaptive.Contact[]
             @param onWarningFunction Function receiving parameters of type: Adaptive.Contact[], Adaptive.IContactResultCallbackWarning
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
             This method is called on Error

             @param error returned by the platform
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
             This method is called on Result

             @param contacts returned by the platform
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
             This method is called on Warning

             @param contacts returned by the platform
             @param warning  returned by the platform
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
}
/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/
