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
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.APIResponse
       Structure representing a JSON response to the HTML5 layer.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    var APIResponse = (function () {
        /**
           @method constructor
           Constructor with parameters.

           @param {string} response      String representing the JavaScript value or JSON object representation of the response.
           @param {number} statusCode    Status code of the response (200 = OK, others are warning or error conditions).
           @param {string} statusMessage Status message of the response.
        */
        function APIResponse(response, statusCode, statusMessage) {
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
        APIResponse.prototype.getResponse = function () {
            return this.response;
        };
        /**
           @method
           Response setter

           @param {string} response String representing the JavaScript value or JSON object representation of the response.
        */
        APIResponse.prototype.setResponse = function (response) {
            this.response = response;
        };
        /**
           @method
           Status code getter

           @return {number} Status code of the response (200 = OK, others are warning or error conditions).
        */
        APIResponse.prototype.getStatusCode = function () {
            return this.statusCode;
        };
        /**
           @method
           Status code setter

           @param {number} statusCode Status code of the response  (200 = OK, others are warning or error conditions).
        */
        APIResponse.prototype.setStatusCode = function (statusCode) {
            this.statusCode = statusCode;
        };
        /**
           @method
           Status message getter

           @return {string} Status message of the response.
        */
        APIResponse.prototype.getStatusMessage = function () {
            return this.statusMessage;
        };
        /**
           @method
           Status message setter.

           @param {string} statusMessage Status message of the response
        */
        APIResponse.prototype.setStatusMessage = function (statusMessage) {
            this.statusMessage = statusMessage;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        APIResponse.toObject = function (object) {
            var result = new APIResponse(null, null, null);
            // Assign values to bean fields.
            if (object != null && object.response != null)
                result.response = object.response;
            if (object != null && object.statusCode != null)
                result.statusCode = object.statusCode;
            if (object != null && object.statusMessage != null)
                result.statusMessage = object.statusMessage;
            return result;
        };
        return APIResponse;
    })();
    Adaptive.APIResponse = APIResponse;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=APIResponse.js.map