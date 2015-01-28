var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
       @private
       @property {number} registeredCounter
       Global unique id for listeners and callbacks.
    */
    Adaptive.registeredCounter = 0;
    /**
       @private
       @property {string} bridgePath
       Base url for for http/https JSON requests.
    */
    Adaptive.bridgePath = "https://adaptiveapp";
    /**
       @private
       @class Adaptive.Dictionary
       Utility class for Dictionary type support.
    */
    var Dictionary = (function () {
        function Dictionary(init) {
            this._keys = new Array();
            this._values = new Array();
            for (var x = 0; x < init.length; x++) {
                this[init[x].key] = init[x].value;
                this._keys.push(init[x].key);
                this._values.push(init[x].value);
            }
        }
        Dictionary.prototype.add = function (key, value) {
            this[key] = value;
            this._keys.push(key);
            this._values.push(value);
        };
        Dictionary.prototype.remove = function (key) {
            var index = this._keys.indexOf(key, 0);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
            delete this[key];
        };
        Dictionary.prototype.keys = function () {
            return this._keys;
        };
        Dictionary.prototype.values = function () {
            return this._values;
        };
        Dictionary.prototype.containsKey = function (key) {
            if (typeof this[key] === "undefined") {
                return false;
            }
            return true;
        };
        Dictionary.prototype.toLookup = function () {
            return this;
        };
        return Dictionary;
    })();
    Adaptive.Dictionary = Dictionary;
    /**
       @class Adaptive.APIBean
       Structure representing a native response to the HTML5

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    var APIBean = (function () {
        /**
           @method constructor
           Default constructor

           @since ARP1.0
        */
        function APIBean() {
        }
        /**
           Convert JSON parsed object to typed equivalent.
        */
        APIBean.toObject = function (object) {
            var result = new APIBean();
            return result;
        };
        return APIBean;
    })();
    Adaptive.APIBean = APIBean;
    /**
       @class Adaptive.APIRequest
       Structure representing a HTML5 request to the native API.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    var APIRequest = (function () {
        /**
           @method constructor
           Constructor with all the parameters

           @param {string} bridgeType Name of the bridge to be invoked.
           @param {string} methodName Name of the method
           @param {string[]} parameters Array of parameters as JSON formatted strings.
           @param {number} asyncId    Id of callback or listener or zero if none for synchronous calls.
           @since ARP1.0
        */
        function APIRequest(bridgeType, methodName, parameters, asyncId) {
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
        APIRequest.prototype.getAsyncId = function () {
            return this.asyncId;
        };
        /**
           @method
           Sets the callback or listener id to the request.

           @param {number} asyncId The unique id of the callback or listener.
        */
        APIRequest.prototype.setAsyncId = function (asyncId) {
            this.asyncId = asyncId;
        };
        /**
           @method
           Bridge Type Getter

           @return {string} Bridge Type
           @since ARP1.0
        */
        APIRequest.prototype.getBridgeType = function () {
            return this.bridgeType;
        };
        /**
           @method
           Bridge Type Setter

           @param {string} bridgeType Bridge Type
           @since ARP1.0
        */
        APIRequest.prototype.setBridgeType = function (bridgeType) {
            this.bridgeType = bridgeType;
        };
        /**
           @method
           Method name Getter

           @return {string} Method name
           @since ARP1.0
        */
        APIRequest.prototype.getMethodName = function () {
            return this.methodName;
        };
        /**
           @method
           Method name Setter

           @param {string} methodName Method name
           @since ARP1.0
        */
        APIRequest.prototype.setMethodName = function (methodName) {
            this.methodName = methodName;
        };
        /**
           @method
           Parameters Getter

           @return {string[]} Parameters
           @since ARP1.0
        */
        APIRequest.prototype.getParameters = function () {
            return this.parameters;
        };
        /**
           @method
           Parameters Setter

           @param {string[]} parameters Parameters, JSON formatted strings of objects.
           @since ARP1.0
        */
        APIRequest.prototype.setParameters = function (parameters) {
            this.parameters = parameters;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        APIRequest.toObject = function (object) {
            var result = new APIRequest(null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.bridgeType != null)
                result.bridgeType = object.bridgeType;
            if (object != null && object.methodName != null)
                result.methodName = object.methodName;
            if (object != null && object.parameters != null) {
                result.parameters = new Array();
                for (var i = 0; i < object.parameters.length; i++) {
                    var __value__ = object.parameters[i];
                    if (__value__ != null)
                        result.parameters.push(__value__);
                }
            }
            if (object != null && object.asyncId != null)
                result.asyncId = object.asyncId;
            return result;
        };
        return APIRequest;
    })();
    Adaptive.APIRequest = APIRequest;
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
    /**
       @class Adaptive.ServicePath
       Structure representing a service path for one endpoint

       @author fnva
       @since ARP1.0
       @version 1.0
    */
    var ServicePath = (function () {
        /**
           @method constructor
           Constructor with parameters

           @param {string} path    The path for the endpoint
           @param {Adaptive.IServiceMethod[]} methods The methods for calling a path
        */
        function ServicePath(path, methods) {
            this.path = path;
            this.methods = methods;
        }
        /**
           @method
           Endpoint's path methods setter

           @return {Adaptive.IServiceMethod[]} Endpoint's path methods
        */
        ServicePath.prototype.getMethods = function () {
            return this.methods;
        };
        /**
           @method
           Endpoint's path methods setter

           @param {Adaptive.IServiceMethod[]} methods Endpoint's path methods
        */
        ServicePath.prototype.setMethods = function (methods) {
            this.methods = methods;
        };
        /**
           @method
           Endpoint's Path Getter

           @return {string} Endpoint's Path
        */
        ServicePath.prototype.getPath = function () {
            return this.path;
        };
        /**
           @method
           Endpoint's path setter

           @param {string} path Endpoint's path
        */
        ServicePath.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ServicePath.toObject = function (object) {
            var result = new ServicePath(null, null);
            // Assign values to bean fields.
            if (object != null && object.path != null)
                result.path = object.path;
            if (object != null && object.methods != null) {
                result.methods = new Array();
                for (var i = 0; i < object.methods.length; i++) {
                    var __value__ = object.methods[i];
                    if (__value__ != null) {
                        result.methods.push(IServiceMethod.toObject(__value__));
                    }
                    else {
                        result.methods.push(IServiceMethod.toObject(null));
                    }
                }
            }
            return result;
        };
        return ServicePath;
    })();
    Adaptive.ServicePath = ServicePath;
    /**
       @class Adaptive.Acceleration
       @extends Adaptive.APIBean
       Structure representing the data of a single acceleration reading.

       @author Carlos Lozano Diez
       @since ARP1.0
       @version 1.0
    */
    var Acceleration = (function (_super) {
        __extends(Acceleration, _super);
        /**
           @method constructor
           Constructor with fields

           @param {number} x         X Coordinate
           @param {number} y         Y Coordinate
           @param {number} z         Z Coordinate
           @param {number} timestamp Timestamp
           @since ARP1.0
        */
        function Acceleration(x, y, z, timestamp) {
            _super.call(this);
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
        Acceleration.prototype.getTimestamp = function () {
            return this.timestamp;
        };
        /**
           @method
           Timestamp Setter

           @param {number} timestamp Timestamp
           @since ARP1.0
        */
        Acceleration.prototype.setTimestamp = function (timestamp) {
            this.timestamp = timestamp;
        };
        /**
           @method
           X Coordinate Getter

           @return {number} X-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.getX = function () {
            return this.x;
        };
        /**
           @method
           X Coordinate Setter

           @param {number} x X-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.setX = function (x) {
            this.x = x;
        };
        /**
           @method
           Y Coordinate Getter

           @return {number} Y-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.getY = function () {
            return this.y;
        };
        /**
           @method
           Y Coordinate Setter

           @param {number} y Y-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.setY = function (y) {
            this.y = y;
        };
        /**
           @method
           Z Coordinate Getter

           @return {number} Z-axis component of the acceleration.
           @since ARP1.0
        */
        Acceleration.prototype.getZ = function () {
            return this.z;
        };
        /**
           @method
           Z Coordinate Setter

           @param {number} z Z Coordinate
           @since ARP1.0
        */
        Acceleration.prototype.setZ = function (z) {
            this.z = z;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Acceleration.toObject = function (object) {
            var result = new Acceleration(null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.x != null)
                result.x = object.x;
            if (object != null && object.y != null)
                result.y = object.y;
            if (object != null && object.z != null)
                result.z = object.z;
            if (object != null && object.timestamp != null)
                result.timestamp = object.timestamp;
            return result;
        };
        return Acceleration;
    })(APIBean);
    Adaptive.Acceleration = Acceleration;
    /**
       @class Adaptive.Button
       @extends Adaptive.APIBean
       Structure representing the a physical or logical button on a device.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Button = (function (_super) {
        __extends(Button, _super);
        /**
           @method constructor
           Constructor with fields

           @param {Adaptive.ICapabilitiesButton} type Button type.
           @since ARP1.0
        */
        function Button(type) {
            _super.call(this);
            this.type = type;
        }
        /**
           @method
           Returns the button type

           @return {Adaptive.ICapabilitiesButton} type Button type.
           @since ARP1.0
        */
        Button.prototype.getType = function () {
            return this.type;
        };
        /**
           @method
           Setter for the button type

           @param {Adaptive.ICapabilitiesButton} type Button Type
           @since ARP1.0
        */
        Button.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Button.toObject = function (object) {
            var result = new Button(null);
            // Assign values to bean fields.
            if (object != null && object.type != null) {
                result.type = ICapabilitiesButton.toObject(object.type);
            }
            else {
                result.type = ICapabilitiesButton.toObject(null);
            }
            return result;
        };
        return Button;
    })(APIBean);
    Adaptive.Button = Button;
    /**
       @class Adaptive.ContactAddress
       @extends Adaptive.APIBean
       Structure representing the address data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactAddress = (function (_super) {
        __extends(ContactAddress, _super);
        /**
           @method constructor
           Constructor with fields

           @param {string} address Address data.
           @param {Adaptive.ContactAddressType} type    Address type.
           @since ARP1.0
        */
        function ContactAddress(address, type) {
            _super.call(this);
            this.address = address;
            this.type = type;
        }
        /**
           @method
           Returns the type of the address

           @return {Adaptive.ContactAddressType} AddressType Address type.
           @since ARP1.0
        */
        ContactAddress.prototype.getType = function () {
            return this.type;
        };
        /**
           @method
           Set the address type

           @param {Adaptive.ContactAddressType} type Address type.
           @since ARP1.0
        */
        ContactAddress.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           @method
           Returns the Contact address

           @return {string} address Address data.
           @since ARP1.0
        */
        ContactAddress.prototype.getAddress = function () {
            return this.address;
        };
        /**
           @method
           Set the address of the Contact

           @param {string} address Address data.
           @since ARP1.0
        */
        ContactAddress.prototype.setAddress = function (address) {
            this.address = address;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactAddress.toObject = function (object) {
            var result = new ContactAddress(null, null);
            // Assign values to bean fields.
            if (object != null && object.address != null)
                result.address = object.address;
            if (object != null && object.type != null) {
                result.type = ContactAddressType.toObject(object.type);
            }
            else {
                result.type = ContactAddressType.toObject(null);
            }
            return result;
        };
        return ContactAddress;
    })(APIBean);
    Adaptive.ContactAddress = ContactAddress;
    /**
       @class Adaptive.ContactEmail
       @extends Adaptive.APIBean
       Structure representing the email data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactEmail = (function (_super) {
        __extends(ContactEmail, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ContactEmailType} type    Type of the email
           @param {boolean} primary Is email primary
           @param {string} email   Email of the contact
           @since ARP1.0
        */
        function ContactEmail(type, primary, email) {
            _super.call(this);
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
        ContactEmail.prototype.getType = function () {
            return this.type;
        };
        /**
           @method
           Set the type of the email

           @param {Adaptive.ContactEmailType} type Type of the email
           @since ARP1.0
        */
        ContactEmail.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           @method
           Returns the email of the Contact

           @return {string} email
           @since ARP1.0
        */
        ContactEmail.prototype.getEmail = function () {
            return this.email;
        };
        /**
           @method
           Set the email of the Contact

           @param {string} email Email of the contact
           @since ARP1.0
        */
        ContactEmail.prototype.setEmail = function (email) {
            this.email = email;
        };
        /**
           @method
           Returns if the email is primary

           @return {boolean} true if the email is primary; false otherwise
           @since ARP1.0
        */
        ContactEmail.prototype.getPrimary = function () {
            return this.primary;
        };
        /**
           @method
           Set if the email

           @param {boolean} primary true if the email is primary; false otherwise
           @since ARP1.0
        */
        ContactEmail.prototype.setPrimary = function (primary) {
            this.primary = primary;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactEmail.toObject = function (object) {
            var result = new ContactEmail(null, null, null);
            // Assign values to bean fields.
            if (object != null && object.type != null) {
                result.type = ContactEmailType.toObject(object.type);
            }
            else {
                result.type = ContactEmailType.toObject(null);
            }
            if (object != null && object.primary != null)
                result.primary = object.primary;
            if (object != null && object.email != null)
                result.email = object.email;
            return result;
        };
        return ContactEmail;
    })(APIBean);
    Adaptive.ContactEmail = ContactEmail;
    /**
       @class Adaptive.ContactPersonalInfo
       @extends Adaptive.APIBean
       Structure representing the personal info data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactPersonalInfo = (function (_super) {
        __extends(ContactPersonalInfo, _super);
        /**
           @method constructor
           The Constructor used by the implementation

           @param {string} name       of the Contact
           @param {string} middleName of the Contact
           @param {string} lastName   of the Contact
           @param {Adaptive.ContactPersonalInfoTitle} title      of the Contact
           @since ARP1.0
        */
        function ContactPersonalInfo(name, middleName, lastName, title) {
            _super.call(this);
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
        ContactPersonalInfo.prototype.getTitle = function () {
            return this.title;
        };
        /**
           @method
           Set the Title of the Contact

           @param {Adaptive.ContactPersonalInfoTitle} title of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setTitle = function (title) {
            this.title = title;
        };
        /**
           @method
           Returns the last name of the Contact

           @return {string} lastName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getLastName = function () {
            return this.lastName;
        };
        /**
           @method
           Set the last name of the Contact

           @param {string} lastName of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setLastName = function (lastName) {
            this.lastName = lastName;
        };
        /**
           @method
           Returns the middle name of the Contact

           @return {string} middelName
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getMiddleName = function () {
            return this.middleName;
        };
        /**
           @method
           Set the middle name of the Contact

           @param {string} middleName of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setMiddleName = function (middleName) {
            this.middleName = middleName;
        };
        /**
           @method
           Returns the name of the Contact

           @return {string} name
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Set the name of the Contact

           @param {string} name of the Contact
           @since ARP1.0
        */
        ContactPersonalInfo.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactPersonalInfo.toObject = function (object) {
            var result = new ContactPersonalInfo(null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.middleName != null)
                result.middleName = object.middleName;
            if (object != null && object.lastName != null)
                result.lastName = object.lastName;
            if (object != null && object.title != null) {
                result.title = ContactPersonalInfoTitle.toObject(object.title);
            }
            else {
                result.title = ContactPersonalInfoTitle.toObject(null);
            }
            return result;
        };
        return ContactPersonalInfo;
    })(APIBean);
    Adaptive.ContactPersonalInfo = ContactPersonalInfo;
    /**
       @class Adaptive.ContactPhone
       @extends Adaptive.APIBean
       Structure representing the phone data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactPhone = (function (_super) {
        __extends(ContactPhone, _super);
        /**
           @method constructor
           Constructor used by implementation to set the contact Phone

           @param {string} phone     Phone number
           @param {Adaptive.ContactPhoneType} phoneType Type of Phone number
           @since ARP1.0
        */
        function ContactPhone(phone, phoneType) {
            _super.call(this);
            this.phone = phone;
            this.phoneType = phoneType;
        }
        /**
           @method
           Returns the phone phoneType

           @return {Adaptive.ContactPhoneType} phoneType
           @since ARP1.0
        */
        ContactPhone.prototype.getPhoneType = function () {
            return this.phoneType;
        };
        /**
           @method
           Set the phoneType of the phone number

           @param {Adaptive.ContactPhoneType} phoneType Type of Phone number
           @since ARP1.0
        */
        ContactPhone.prototype.setPhoneType = function (phoneType) {
            this.phoneType = phoneType;
        };
        /**
           @method
           Returns the phone number

           @return {string} phone number
           @since ARP1.0
        */
        ContactPhone.prototype.getPhone = function () {
            return this.phone;
        };
        /**
           @method
           Set the phone number

           @param {string} phone number
           @since ARP1.0
        */
        ContactPhone.prototype.setPhone = function (phone) {
            this.phone = phone;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactPhone.toObject = function (object) {
            var result = new ContactPhone(null, null);
            // Assign values to bean fields.
            if (object != null && object.phone != null)
                result.phone = object.phone;
            if (object != null && object.phoneType != null) {
                result.phoneType = ContactPhoneType.toObject(object.phoneType);
            }
            else {
                result.phoneType = ContactPhoneType.toObject(null);
            }
            return result;
        };
        return ContactPhone;
    })(APIBean);
    Adaptive.ContactPhone = ContactPhone;
    /**
       @class Adaptive.ContactProfessionalInfo
       @extends Adaptive.APIBean
       Structure representing the professional info data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactProfessionalInfo = (function (_super) {
        __extends(ContactProfessionalInfo, _super);
        /**
           @method constructor
           Constructor used by implementation to set the ContactProfessionalInfo.

           @param {string} jobTitle       The job title
           @param {string} jobDescription The job description
           @param {string} company        The company of the job
           @since ARP1.0
        */
        function ContactProfessionalInfo(jobTitle, jobDescription, company) {
            _super.call(this);
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
        ContactProfessionalInfo.prototype.getCompany = function () {
            return this.company;
        };
        /**
           @method
           Set the company of the job

           @param {string} company The company of the job
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.setCompany = function (company) {
            this.company = company;
        };
        /**
           @method
           Returns the description of the job

           @return {string} description
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.getJobDescription = function () {
            return this.jobDescription;
        };
        /**
           @method
           Set the description of the job

           @param {string} jobDescription The job description
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.setJobDescription = function (jobDescription) {
            this.jobDescription = jobDescription;
        };
        /**
           @method
           Returns the title of the job

           @return {string} title
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.getJobTitle = function () {
            return this.jobTitle;
        };
        /**
           @method
           Set the title of the job

           @param {string} jobTitle The job title
           @since ARP1.0
        */
        ContactProfessionalInfo.prototype.setJobTitle = function (jobTitle) {
            this.jobTitle = jobTitle;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactProfessionalInfo.toObject = function (object) {
            var result = new ContactProfessionalInfo(null, null, null);
            // Assign values to bean fields.
            if (object != null && object.company != null)
                result.company = object.company;
            if (object != null && object.jobTitle != null)
                result.jobTitle = object.jobTitle;
            if (object != null && object.jobDescription != null)
                result.jobDescription = object.jobDescription;
            return result;
        };
        return ContactProfessionalInfo;
    })(APIBean);
    Adaptive.ContactProfessionalInfo = ContactProfessionalInfo;
    /**
       @class Adaptive.ContactSocial
       @extends Adaptive.APIBean
       Structure representing the social data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactSocial = (function (_super) {
        __extends(ContactSocial, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ContactSocialNetwork} socialNetwork of the profile
           @param {string} profileUrl    of the user
           @since ARP1.0
        */
        function ContactSocial(socialNetwork, profileUrl) {
            _super.call(this);
            this.socialNetwork = socialNetwork;
            this.profileUrl = profileUrl;
        }
        /**
           @method
           Returns the social network

           @return {Adaptive.ContactSocialNetwork} socialNetwork
           @since ARP1.0
        */
        ContactSocial.prototype.getSocialNetwork = function () {
            return this.socialNetwork;
        };
        /**
           @method
           Set the social network

           @param {Adaptive.ContactSocialNetwork} socialNetwork of the profile
           @since ARP1.0
        */
        ContactSocial.prototype.setSocialNetwork = function (socialNetwork) {
            this.socialNetwork = socialNetwork;
        };
        /**
           @method
           Returns the profile url of the user

           @return {string} profileUrl
           @since ARP1.0
        */
        ContactSocial.prototype.getProfileUrl = function () {
            return this.profileUrl;
        };
        /**
           @method
           Set the profile url of the iser

           @param {string} profileUrl of the user
           @since ARP1.0
        */
        ContactSocial.prototype.setProfileUrl = function (profileUrl) {
            this.profileUrl = profileUrl;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactSocial.toObject = function (object) {
            var result = new ContactSocial(null, null);
            // Assign values to bean fields.
            if (object != null && object.socialNetwork != null) {
                result.socialNetwork = ContactSocialNetwork.toObject(object.socialNetwork);
            }
            else {
                result.socialNetwork = ContactSocialNetwork.toObject(null);
            }
            if (object != null && object.profileUrl != null)
                result.profileUrl = object.profileUrl;
            return result;
        };
        return ContactSocial;
    })(APIBean);
    Adaptive.ContactSocial = ContactSocial;
    /**
       @class Adaptive.ContactTag
       @extends Adaptive.APIBean
       Structure representing the assigned tags data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactTag = (function (_super) {
        __extends(ContactTag, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {string} tagValue Value of the tag
           @param {string} tagName  Name of the tag
           @since ARP1.0
        */
        function ContactTag(tagName, tagValue) {
            _super.call(this);
            this.tagName = tagName;
            this.tagValue = tagValue;
        }
        /**
           @method
           Returns the tagName of the Tag

           @return {string} tagName
           @since ARP1.0
        */
        ContactTag.prototype.getTagName = function () {
            return this.tagName;
        };
        /**
           @method
           Set the tagName of the Tag

           @param {string} tagName Name of the tag
           @since ARP1.0
        */
        ContactTag.prototype.setTagName = function (tagName) {
            this.tagName = tagName;
        };
        /**
           @method
           Returns the tagValue of the Tag

           @return {string} tagValue
           @since ARP1.0
        */
        ContactTag.prototype.getTagValue = function () {
            return this.tagValue;
        };
        /**
           @method
           Set the tagValue of the Tag

           @param {string} tagValue Value of the tag
           @since ARP1.0
        */
        ContactTag.prototype.setTagValue = function (tagValue) {
            this.tagValue = tagValue;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactTag.toObject = function (object) {
            var result = new ContactTag(null, null);
            // Assign values to bean fields.
            if (object != null && object.tagName != null)
                result.tagName = object.tagName;
            if (object != null && object.tagValue != null)
                result.tagValue = object.tagValue;
            return result;
        };
        return ContactTag;
    })(APIBean);
    Adaptive.ContactTag = ContactTag;
    /**
       @class Adaptive.ContactUid
       @extends Adaptive.APIBean
       Structure representing the internal unique identifier data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactUid = (function (_super) {
        __extends(ContactUid, _super);
        /**
           @method constructor
           Constructor used by implementation to set the Contact id.

           @param {string} contactId Internal unique contact id.
           @since ARP1.0
        */
        function ContactUid(contactId) {
            _super.call(this);
            this.contactId = contactId;
        }
        /**
           @method
           Returns the contact id

           @return {string} Contactid Internal unique contact id.
           @since ARP1.0
        */
        ContactUid.prototype.getContactId = function () {
            return this.contactId;
        };
        /**
           @method
           Set the id of the Contact

           @param {string} contactId Internal unique contact id.
           @since ARP1.0
        */
        ContactUid.prototype.setContactId = function (contactId) {
            this.contactId = contactId;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactUid.toObject = function (object) {
            var result = new ContactUid(null);
            // Assign values to bean fields.
            if (object != null && object.contactId != null)
                result.contactId = object.contactId;
            return result;
        };
        return ContactUid;
    })(APIBean);
    Adaptive.ContactUid = ContactUid;
    /**
       @class Adaptive.ContactWebsite
       @extends Adaptive.APIBean
       Structure representing the website data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var ContactWebsite = (function (_super) {
        __extends(ContactWebsite, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {string} url Url of the website
           @since ARP1.0
        */
        function ContactWebsite(url) {
            _super.call(this);
            this.url = url;
        }
        /**
           @method
           Returns the url of the website

           @return {string} website url
           @since ARP1.0
        */
        ContactWebsite.prototype.getUrl = function () {
            return this.url;
        };
        /**
           @method
           Set the url of the website

           @param {string} url Url of the website
           @since ARP1.0
        */
        ContactWebsite.prototype.setUrl = function (url) {
            this.url = url;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ContactWebsite.toObject = function (object) {
            var result = new ContactWebsite(null);
            // Assign values to bean fields.
            if (object != null && object.url != null)
                result.url = object.url;
            return result;
        };
        return ContactWebsite;
    })(APIBean);
    Adaptive.ContactWebsite = ContactWebsite;
    /**
       @class Adaptive.Database
       @extends Adaptive.APIBean
       Structure representing a database reference.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var Database = (function (_super) {
        __extends(Database, _super);
        /**
           @method constructor
           Constructor using fields.

           @param {string} name     Name of the DatabaseTable.
           @param {boolean} compress Compression enabled.
           @since ARP1.0
        */
        function Database(name, compress) {
            _super.call(this);
            this.name = name;
            this.compress = compress;
        }
        /**
           @method
           Returns if the table is compressed

           @return {boolean} Compression enabled
           @since ARP1.0
        */
        Database.prototype.getCompress = function () {
            return this.compress;
        };
        /**
           @method
           Sets if the table is compressed or not.

           @param {boolean} compress Compression enabled
           @since ARP1.0
        */
        Database.prototype.setCompress = function (compress) {
            this.compress = compress;
        };
        /**
           @method
           Returns the name.

           @return {string} The name of the table.
           @since ARP1.0
        */
        Database.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Sets the name of the table.

           @param {string} name The name of the table.
           @since ARP1.0
        */
        Database.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Database.toObject = function (object) {
            var result = new Database(null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.compress != null)
                result.compress = object.compress;
            return result;
        };
        return Database;
    })(APIBean);
    Adaptive.Database = Database;
    /**
       @class Adaptive.DatabaseColumn
       @extends Adaptive.APIBean
       Structure representing the column specification of a data column.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseColumn = (function (_super) {
        __extends(DatabaseColumn, _super);
        /**
           @method constructor
           Constructor with fields

           @param {string} name Name of the column
           @since ARP1.0
        */
        function DatabaseColumn(name) {
            _super.call(this);
            this.name = name;
        }
        /**
           @method
           Returns the name of the column.

           @return {string} The name of the column.
           @since ARP1.0
        */
        DatabaseColumn.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Sets the name of the column.

           @param {string} name The name of the column.
           @since ARP1.0
        */
        DatabaseColumn.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        DatabaseColumn.toObject = function (object) {
            var result = new DatabaseColumn(null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            return result;
        };
        return DatabaseColumn;
    })(APIBean);
    Adaptive.DatabaseColumn = DatabaseColumn;
    /**
       @class Adaptive.DatabaseRow
       @extends Adaptive.APIBean
       Structure representing a row for a data table.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseRow = (function (_super) {
        __extends(DatabaseRow, _super);
        /**
           @method constructor
           Constructor for implementation using.

           @param {string[]} values The values of the row
           @since ARP1.0
        */
        function DatabaseRow(values) {
            _super.call(this);
            this.values = values;
        }
        /**
           @method
           Returns the values of the row.

           @return {string[]} The values of the row.
           @since ARP1.0
        */
        DatabaseRow.prototype.getValues = function () {
            return this.values;
        };
        /**
           @method
           Sets the values of the row.

           @param {string[]} values The values of the row.
           @since ARP1.0
        */
        DatabaseRow.prototype.setValues = function (values) {
            this.values = values;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        DatabaseRow.toObject = function (object) {
            var result = new DatabaseRow(null);
            // Assign values to bean fields.
            if (object != null && object.values != null) {
                result.values = new Array();
                for (var i = 0; i < object.values.length; i++) {
                    var __value__ = object.values[i];
                    if (__value__ != null)
                        result.values.push(__value__);
                }
            }
            return result;
        };
        return DatabaseRow;
    })(APIBean);
    Adaptive.DatabaseRow = DatabaseRow;
    /**
       @class Adaptive.DatabaseTable
       @extends Adaptive.APIBean
       Represents a data table composed of databaseColumns and databaseRows.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseTable = (function (_super) {
        __extends(DatabaseTable, _super);
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
        function DatabaseTable(name, columnCount, rowCount, databaseColumns, databaseRows) {
            _super.call(this);
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
        DatabaseTable.prototype.getColumnCount = function () {
            return this.columnCount;
        };
        /**
           @method
           Sets the number of databaseColumns

           @param {number} columnCount The number of databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.setColumnCount = function (columnCount) {
            this.columnCount = columnCount;
        };
        /**
           @method
           Get the databaseColumns

           @return {Adaptive.DatabaseColumn[]} The databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.getDatabaseColumns = function () {
            return this.databaseColumns;
        };
        /**
           @method
           Sets the databaseColumns of the table

           @param {Adaptive.DatabaseColumn[]} databaseColumns The databaseColumns of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setDatabaseColumns = function (databaseColumns) {
            this.databaseColumns = databaseColumns;
        };
        /**
           @method
           Get the databaseRows of the table

           @return {Adaptive.DatabaseRow[]} The databaseRows of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.getDatabaseRows = function () {
            return this.databaseRows;
        };
        /**
           @method
           Sets the databaseRows of the table

           @param {Adaptive.DatabaseRow[]} databaseRows The databaseRows of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setDatabaseRows = function (databaseRows) {
            this.databaseRows = databaseRows;
        };
        /**
           @method
           Returns the name of the table

           @return {string} The name of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Sets the name of the table

           @param {string} name The name of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           @method
           Get the number of databaseRows

           @return {number} The number of databaseRows
           @since ARP1.0
        */
        DatabaseTable.prototype.getRowCount = function () {
            return this.rowCount;
        };
        /**
           @method
           Sets the number of databaseRows

           @param {number} rowCount The number of databaseRows
           @since ARP1.0
        */
        DatabaseTable.prototype.setRowCount = function (rowCount) {
            this.rowCount = rowCount;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        DatabaseTable.toObject = function (object) {
            var result = new DatabaseTable(null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.columnCount != null)
                result.columnCount = object.columnCount;
            if (object != null && object.rowCount != null)
                result.rowCount = object.rowCount;
            if (object != null && object.databaseColumns != null) {
                result.databaseColumns = new Array();
                for (var i = 0; i < object.databaseColumns.length; i++) {
                    var __value__ = object.databaseColumns[i];
                    if (__value__ != null) {
                        result.databaseColumns.push(DatabaseColumn.toObject(__value__));
                    }
                    else {
                        result.databaseColumns.push(DatabaseColumn.toObject(null));
                    }
                }
            }
            if (object != null && object.databaseRows != null) {
                result.databaseRows = new Array();
                for (var i = 0; i < object.databaseRows.length; i++) {
                    var __value__ = object.databaseRows[i];
                    if (__value__ != null) {
                        result.databaseRows.push(DatabaseRow.toObject(__value__));
                    }
                    else {
                        result.databaseRows.push(DatabaseRow.toObject(null));
                    }
                }
            }
            return result;
        };
        return DatabaseTable;
    })(APIBean);
    Adaptive.DatabaseTable = DatabaseTable;
    /**
       @class Adaptive.DeviceInfo
       @extends Adaptive.APIBean
       Structure representing the basic device information.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var DeviceInfo = (function (_super) {
        __extends(DeviceInfo, _super);
        /**
           @method constructor
           Constructor for the implementation of the platform.

           @param {string} name   or brand of the device.
           @param {string} model  of the device.
           @param {string} vendor of the device.
           @param {string} uuid   unique* identifier (* platform dependent).
           @since ARP1.0
        */
        function DeviceInfo(name, model, vendor, uuid) {
            _super.call(this);
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
        DeviceInfo.prototype.getModel = function () {
            return this.model;
        };
        /**
           @method
           Sets Model of device - equivalent to device release or version.

           @param {string} model Model of device - equivalent to device release or version.
        */
        DeviceInfo.prototype.setModel = function (model) {
            this.model = model;
        };
        /**
           @method
           Returns the name of the device.

           @return {string} String with device name.
           @since ARP1.0
        */
        DeviceInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Sets Name of device - equivalent to brand.

           @param {string} name Name of device - equivalent to brand.
        */
        DeviceInfo.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           @method
           Returns the platform dependent UUID of the device.

           @return {string} String with the 128-bit device identifier.
           @since ARP1.0
        */
        DeviceInfo.prototype.getUuid = function () {
            return this.uuid;
        };
        /**
           @method
           Sets Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.

           @param {string} uuid Device identifier - this may not be unique for a device. It may depend on the platform implementation and may
be unique for a specific instance of an application on a specific device.
        */
        DeviceInfo.prototype.setUuid = function (uuid) {
            this.uuid = uuid;
        };
        /**
           @method
           Returns the vendor of the device.

           @return {string} String with the vendor name.
           @since ARP1.0
        */
        DeviceInfo.prototype.getVendor = function () {
            return this.vendor;
        };
        /**
           @method
           Sets Vendor of the device hardware.

           @param {string} vendor Vendor of the device hardware.
        */
        DeviceInfo.prototype.setVendor = function (vendor) {
            this.vendor = vendor;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        DeviceInfo.toObject = function (object) {
            var result = new DeviceInfo(null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.model != null)
                result.model = object.model;
            if (object != null && object.vendor != null)
                result.vendor = object.vendor;
            if (object != null && object.uuid != null)
                result.uuid = object.uuid;
            return result;
        };
        return DeviceInfo;
    })(APIBean);
    Adaptive.DeviceInfo = DeviceInfo;
    /**
       @class Adaptive.Email
       @extends Adaptive.APIBean
       Structure representing the data elements of an email.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Email = (function (_super) {
        __extends(Email, _super);
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
        function Email(toRecipients, ccRecipients, bccRecipients, emailAttachmentData, messageBody, messageBodyMimeType, subject) {
            _super.call(this);
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
        Email.prototype.getBccRecipients = function () {
            return this.bccRecipients;
        };
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} bccRecipients array of bcc recipients
           @since ARP1.0
        */
        Email.prototype.setBccRecipients = function (bccRecipients) {
            this.bccRecipients = bccRecipients;
        };
        /**
           @method
           Returns the array of recipients

           @return {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
           @since ARP1.0
        */
        Email.prototype.getCcRecipients = function () {
            return this.ccRecipients;
        };
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} ccRecipients array of cc recipients
           @since ARP1.0
        */
        Email.prototype.setCcRecipients = function (ccRecipients) {
            this.ccRecipients = ccRecipients;
        };
        /**
           @method
           Returns an array of attachments

           @return {Adaptive.EmailAttachmentData[]} emailAttachmentData array with the email attachments
           @since ARP1.0
        */
        Email.prototype.getEmailAttachmentData = function () {
            return this.emailAttachmentData;
        };
        /**
           @method
           Set the email attachment data array

           @param {Adaptive.EmailAttachmentData[]} emailAttachmentData array of email attatchments
           @since ARP1.0
        */
        Email.prototype.setEmailAttachmentData = function (emailAttachmentData) {
            this.emailAttachmentData = emailAttachmentData;
        };
        /**
           @method
           Returns the message body of the email

           @return {string} message Body string of the email
           @since ARP1.0
        */
        Email.prototype.getMessageBody = function () {
            return this.messageBody;
        };
        /**
           @method
           Set the message body of the email

           @param {string} messageBody message body of the email
           @since ARP1.0
        */
        Email.prototype.setMessageBody = function (messageBody) {
            this.messageBody = messageBody;
        };
        /**
           @method
           Returns the myme type of the message body

           @return {string} mime type string of the message boddy
           @since ARP1.0
        */
        Email.prototype.getMessageBodyMimeType = function () {
            return this.messageBodyMimeType;
        };
        /**
           @method
           Set the mime type for the message body

           @param {string} messageBodyMimeType type of the body message
           @since ARP1.0
        */
        Email.prototype.setMessageBodyMimeType = function (messageBodyMimeType) {
            this.messageBodyMimeType = messageBodyMimeType;
        };
        /**
           @method
           Returns the subject of the email

           @return {string} subject string of the email
           @since ARP1.0
        */
        Email.prototype.getSubject = function () {
            return this.subject;
        };
        /**
           @method
           Set the subject of the email

           @param {string} subject of the email
           @since ARP1.0
        */
        Email.prototype.setSubject = function (subject) {
            this.subject = subject;
        };
        /**
           @method
           Returns the array of recipients

           @return {Adaptive.EmailAddress[]} toRecipients array of recipients
           @since ARP1.0
        */
        Email.prototype.getToRecipients = function () {
            return this.toRecipients;
        };
        /**
           @method
           Set the array of recipients

           @param {Adaptive.EmailAddress[]} toRecipients array of recipients
           @since ARP1.0
        */
        Email.prototype.setToRecipients = function (toRecipients) {
            this.toRecipients = toRecipients;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Email.toObject = function (object) {
            var result = new Email(null, null, null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.toRecipients != null) {
                result.toRecipients = new Array();
                for (var i = 0; i < object.toRecipients.length; i++) {
                    var __value__ = object.toRecipients[i];
                    if (__value__ != null) {
                        result.toRecipients.push(EmailAddress.toObject(__value__));
                    }
                    else {
                        result.toRecipients.push(EmailAddress.toObject(null));
                    }
                }
            }
            if (object != null && object.ccRecipients != null) {
                result.ccRecipients = new Array();
                for (var i = 0; i < object.ccRecipients.length; i++) {
                    var __value__ = object.ccRecipients[i];
                    if (__value__ != null) {
                        result.ccRecipients.push(EmailAddress.toObject(__value__));
                    }
                    else {
                        result.ccRecipients.push(EmailAddress.toObject(null));
                    }
                }
            }
            if (object != null && object.bccRecipients != null) {
                result.bccRecipients = new Array();
                for (var i = 0; i < object.bccRecipients.length; i++) {
                    var __value__ = object.bccRecipients[i];
                    if (__value__ != null) {
                        result.bccRecipients.push(EmailAddress.toObject(__value__));
                    }
                    else {
                        result.bccRecipients.push(EmailAddress.toObject(null));
                    }
                }
            }
            if (object != null && object.emailAttachmentData != null) {
                result.emailAttachmentData = new Array();
                for (var i = 0; i < object.emailAttachmentData.length; i++) {
                    var __value__ = object.emailAttachmentData[i];
                    if (__value__ != null) {
                        result.emailAttachmentData.push(EmailAttachmentData.toObject(__value__));
                    }
                    else {
                        result.emailAttachmentData.push(EmailAttachmentData.toObject(null));
                    }
                }
            }
            if (object != null && object.messageBody != null)
                result.messageBody = object.messageBody;
            if (object != null && object.messageBodyMimeType != null)
                result.messageBodyMimeType = object.messageBodyMimeType;
            if (object != null && object.subject != null)
                result.subject = object.subject;
            return result;
        };
        return Email;
    })(APIBean);
    Adaptive.Email = Email;
    /**
       @class Adaptive.EmailAddress
       @extends Adaptive.APIBean
       Structure representing the data elements of an email addressee.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var EmailAddress = (function (_super) {
        __extends(EmailAddress, _super);
        /**
           @method constructor
           Constructor used by implementation

           @param {string} address of the Email
           @since ARP1.0
        */
        function EmailAddress(address) {
            _super.call(this);
            this.address = address;
        }
        /**
           @method
           Returns the email address

           @return {string} address of the Email
           @since ARP1.0
        */
        EmailAddress.prototype.getAddress = function () {
            return this.address;
        };
        /**
           @method
           Set the Email address

           @param {string} address of the Email
           @since ARP1.0
        */
        EmailAddress.prototype.setAddress = function (address) {
            this.address = address;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        EmailAddress.toObject = function (object) {
            var result = new EmailAddress(null);
            // Assign values to bean fields.
            if (object != null && object.address != null)
                result.address = object.address;
            return result;
        };
        return EmailAddress;
    })(APIBean);
    Adaptive.EmailAddress = EmailAddress;
    /**
       @class Adaptive.EmailAttachmentData
       @extends Adaptive.APIBean
       Structure representing the binary attachment data.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var EmailAttachmentData = (function (_super) {
        __extends(EmailAttachmentData, _super);
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
        function EmailAttachmentData(data, size, fileName, mimeType, referenceUrl) {
            _super.call(this);
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
        EmailAttachmentData.prototype.getData = function () {
            return this.data;
        };
        /**
           @method
           Set the data of the attachment as a byte[]

           @param {number[]} data Sets the octet-binary content of the attachment.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           @method
           Returns the filename of the attachment

           @return {string} fileName Name of the attachment.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getFileName = function () {
            return this.fileName;
        };
        /**
           @method
           Set the name of the file attachment

           @param {string} fileName Name of the attachment.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setFileName = function (fileName) {
            this.fileName = fileName;
        };
        /**
           @method
           Returns the mime type of the attachment

           @return {string} mimeType
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getMimeType = function () {
            return this.mimeType;
        };
        /**
           @method
           Set the mime type of the attachment

           @param {string} mimeType Mime-type of the attachment.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setMimeType = function (mimeType) {
            this.mimeType = mimeType;
        };
        /**
           @method
           Returns the absolute url of the file attachment

           @return {string} referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getReferenceUrl = function () {
            return this.referenceUrl;
        };
        /**
           @method
           Set the absolute url of the attachment

           @param {string} referenceUrl Absolute URL of the file attachment for either file:// or http:// access.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setReferenceUrl = function (referenceUrl) {
            this.referenceUrl = referenceUrl;
        };
        /**
           @method
           Returns the size of the attachment as a long

           @return {number} size Length in bytes of the octet-binary content.
           @since ARP1.0
        */
        EmailAttachmentData.prototype.getSize = function () {
            return this.size;
        };
        /**
           @method
           Set the size of the attachment as a long

           @param {number} size Length in bytes of the octet-binary content ( should be same as data array length.)
           @since ARP1.0
        */
        EmailAttachmentData.prototype.setSize = function (size) {
            this.size = size;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        EmailAttachmentData.toObject = function (object) {
            var result = new EmailAttachmentData(null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.data != null) {
                result.data = new Array();
                for (var i = 0; i < object.data.length; i++) {
                    var __value__ = object.data[i];
                    if (__value__ != null)
                        result.data.push(__value__);
                }
            }
            if (object != null && object.size != null)
                result.size = object.size;
            if (object != null && object.fileName != null)
                result.fileName = object.fileName;
            if (object != null && object.mimeType != null)
                result.mimeType = object.mimeType;
            if (object != null && object.referenceUrl != null)
                result.referenceUrl = object.referenceUrl;
            return result;
        };
        return EmailAttachmentData;
    })(APIBean);
    Adaptive.EmailAttachmentData = EmailAttachmentData;
    /**
       @class Adaptive.FileDescriptor
       @extends Adaptive.APIBean
       Implementation of FileDescriptor bean.

       @author Carlos Lozano Diez
       @since 1.0
       @version 1.0
    */
    var FileDescriptor = (function (_super) {
        __extends(FileDescriptor, _super);
        /**
           @method constructor
           Default constructor.
        */
        function FileDescriptor() {
            _super.call(this);
        }
        /**
           @method
           Returns the milliseconds passed since 1/1/1970 since the file was created.

           @return {number} Timestamp in milliseconds.
           @since ARP1.0
        */
        FileDescriptor.prototype.getDateCreated = function () {
            return this.dateCreated;
        };
        /**
           @method
           Sets the creation timestamp in milliseconds. Used internally.

           @param {number} dateCreated Timestamp of file creation or -1 if the file or folder doesn't exist.
        */
        FileDescriptor.prototype.setDateCreated = function (dateCreated) {
            this.dateCreated = dateCreated;
        };
        /**
           @method
           Returns the milliseconds passed since 1/1/1970 since the file was modified.

           @return {number} Timestamp in milliseconds.
           @since ARP1.0
        */
        FileDescriptor.prototype.getDateModified = function () {
            return this.dateModified;
        };
        /**
           @method
           Sets the file or folder modification timestamp in milliseconds. Used internally.

           @param {number} dateModified Timestamp of file modification or -1 if the file or folder doesn't exist.
        */
        FileDescriptor.prototype.setDateModified = function (dateModified) {
            this.dateModified = dateModified;
        };
        /**
           @method
           Returns the name of the file if the reference is a file or the last path element of the folder.

           @return {string} The name of the file.
           @since ARP1.0
        */
        FileDescriptor.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Sets the name of the file. Used internally.

           @param {string} name Name of the file or last folder path element.
        */
        FileDescriptor.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           @method
           Returns the path element of the file or folder (excluding the last path element if it's a directory).

           @return {string} The path to the file.
           @since ARP1.0
        */
        FileDescriptor.prototype.getPath = function () {
            return this.path;
        };
        /**
           @method
           Sets the path of the file or folder. Used internally.

           @param {string} path The path element of the file or folder.
        */
        FileDescriptor.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           @method
           Returns the resolved absolute path elements of the file and/or folders (including the last path element).

           @return {string} The absolute path to the file.
           @since ARP1.0
        */
        FileDescriptor.prototype.getPathAbsolute = function () {
            return this.pathAbsolute;
        };
        /**
           @method
           Sets the absolute path of the file or folder. Used internally.

           @param {string} pathAbsolute String with the absolute path of file or folder.
        */
        FileDescriptor.prototype.setPathAbsolute = function (pathAbsolute) {
            this.pathAbsolute = pathAbsolute;
        };
        /**
           @method
           Returns the size in bytes of the file or -1 if the reference is a folder.

           @return {number} Size in bytes of file.
           @since ARP1.0
        */
        FileDescriptor.prototype.getSize = function () {
            return this.size;
        };
        /**
           @method
           Sets the file size in bytes of the file. If the file is a folder, this will be 0. If the file
doesn't exist, this will be -1. Used internally.

           @param {number} size The size in bytes of the file.
        */
        FileDescriptor.prototype.setSize = function (size) {
            this.size = size;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        FileDescriptor.toObject = function (object) {
            var result = new FileDescriptor();
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.path != null)
                result.path = object.path;
            if (object != null && object.pathAbsolute != null)
                result.pathAbsolute = object.pathAbsolute;
            if (object != null && object.dateCreated != null)
                result.dateCreated = object.dateCreated;
            if (object != null && object.dateModified != null)
                result.dateModified = object.dateModified;
            if (object != null && object.size != null)
                result.size = object.size;
            return result;
        };
        return FileDescriptor;
    })(APIBean);
    Adaptive.FileDescriptor = FileDescriptor;
    /**
       @class Adaptive.Geolocation
       @extends Adaptive.APIBean
       Structure representing the data a single geolocation reading.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Geolocation = (function (_super) {
        __extends(Geolocation, _super);
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
        function Geolocation(latitude, longitude, altitude, xDoP, yDoP, timestamp) {
            _super.call(this);
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
        Geolocation.prototype.getAltitude = function () {
            return this.altitude;
        };
        /**
           @method
           Set altitude in meters

           @param {number} altitude Altitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setAltitude = function (altitude) {
            this.altitude = altitude;
        };
        /**
           @method
           Returns the latitude in degrees

           @return {number} Latitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getLatitude = function () {
            return this.latitude;
        };
        /**
           @method
           Set the latitude in degrees

           @param {number} latitude Latitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setLatitude = function (latitude) {
            this.latitude = latitude;
        };
        /**
           @method
           Returns the longitude in degrees

           @return {number} Longitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.getLongitude = function () {
            return this.longitude;
        };
        /**
           @method
           Returns the latitude in degrees

           @param {number} longitude Longitude of the measurement
           @since ARP1.0
        */
        Geolocation.prototype.setLongitude = function (longitude) {
            this.longitude = longitude;
        };
        /**
           @method
           Timestamp Getter

           @return {number} Timestamp
           @since ARP1.0
        */
        Geolocation.prototype.getTimestamp = function () {
            return this.timestamp;
        };
        /**
           @method
           Timestamp Setter

           @param {number} timestamp Timestamp
           @since ARP1.0
        */
        Geolocation.prototype.setTimestamp = function (timestamp) {
            this.timestamp = timestamp;
        };
        /**
           @method
           Gets Dilution of precision on the X measurement. Measured in meters.

           @return {number} xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        Geolocation.prototype.getXDoP = function () {
            return this.xDoP;
        };
        /**
           @method
           Sets Dilution of precision on the X measurement. Measured in meters.

           @param {number} xDoP Dilution of precision on the X measurement. Measured in meters.
        */
        Geolocation.prototype.setXDoP = function (xDoP) {
            this.xDoP = xDoP;
        };
        /**
           @method
           Gets Dilution of precision on the Y measurement. Measured in meters.

           @return {number} yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        Geolocation.prototype.getYDoP = function () {
            return this.yDoP;
        };
        /**
           @method
           Sets Dilution of precision on the Y measurement. Measured in meters.

           @param {number} yDoP Dilution of precision on the Y measurement. Measured in meters.
        */
        Geolocation.prototype.setYDoP = function (yDoP) {
            this.yDoP = yDoP;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Geolocation.toObject = function (object) {
            var result = new Geolocation(null, null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.latitude != null)
                result.latitude = object.latitude;
            if (object != null && object.longitude != null)
                result.longitude = object.longitude;
            if (object != null && object.altitude != null)
                result.altitude = object.altitude;
            if (object != null && object.xDoP != null)
                result.xDoP = object.xDoP;
            if (object != null && object.yDoP != null)
                result.yDoP = object.yDoP;
            if (object != null && object.timestamp != null)
                result.timestamp = object.timestamp;
            return result;
        };
        return Geolocation;
    })(APIBean);
    Adaptive.Geolocation = Geolocation;
    /**
       @class Adaptive.KeyPair
       @extends Adaptive.APIBean
       Represents a basic bean to store keyName pair values

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var KeyPair = (function (_super) {
        __extends(KeyPair, _super);
        /**
           @method constructor
           Constructor using fields

           @param {string} keyName  Key of the element
           @param {string} keyValue Value of the element
           @since ARP1.0
        */
        function KeyPair(keyName, keyValue) {
            _super.call(this);
            this.keyName = keyName;
            this.keyValue = keyValue;
        }
        /**
           @method
           Returns the keyName of the element

           @return {string} Key of the element
           @since ARP1.0
        */
        KeyPair.prototype.getKeyName = function () {
            return this.keyName;
        };
        /**
           @method
           Sets the keyName of the element

           @param {string} keyName Key of the element
           @since ARP1.0
        */
        KeyPair.prototype.setKeyName = function (keyName) {
            this.keyName = keyName;
        };
        /**
           @method
           Returns the keyValue of the element

           @return {string} Value of the element
           @since ARP1.0
        */
        KeyPair.prototype.getKeyValue = function () {
            return this.keyValue;
        };
        /**
           @method
           Sets the keyValue of the element

           @param {string} keyValue Value of the element
           @since ARP1.0
        */
        KeyPair.prototype.setKeyValue = function (keyValue) {
            this.keyValue = keyValue;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        KeyPair.toObject = function (object) {
            var result = new KeyPair(null, null);
            // Assign values to bean fields.
            if (object != null && object.keyName != null)
                result.keyName = object.keyName;
            if (object != null && object.keyValue != null)
                result.keyValue = object.keyValue;
            return result;
        };
        return KeyPair;
    })(APIBean);
    Adaptive.KeyPair = KeyPair;
    /**
       @class Adaptive.Lifecycle
       @extends Adaptive.APIBean
       Represents a specific application life-cycle stage.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Lifecycle = (function (_super) {
        __extends(Lifecycle, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.LifecycleState} state of the app
           @since ARP1.0
        */
        function Lifecycle(state) {
            _super.call(this);
            this.state = state;
        }
        /**
           @method
           Returns the state of the application

           @return {Adaptive.LifecycleState} state of the app
           @since ARP1.0
        */
        Lifecycle.prototype.getState = function () {
            return this.state;
        };
        /**
           @method
           Set the State of the application

           @param {Adaptive.LifecycleState} state of the app
           @since ARP1.0
        */
        Lifecycle.prototype.setState = function (state) {
            this.state = state;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Lifecycle.toObject = function (object) {
            var result = new Lifecycle(null);
            // Assign values to bean fields.
            if (object != null && object.state != null) {
                result.state = LifecycleState.toObject(object.state);
            }
            else {
                result.state = LifecycleState.toObject(null);
            }
            return result;
        };
        return Lifecycle;
    })(APIBean);
    Adaptive.Lifecycle = Lifecycle;
    /**
       @class Adaptive.Locale
       @extends Adaptive.APIBean
       Represents a specific user or system locate.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var Locale = (function (_super) {
        __extends(Locale, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {string} country  Country of the Locale
           @param {string} language Language of the Locale
           @since ARP1.0
        */
        function Locale(language, country) {
            _super.call(this);
            this.language = language;
            this.country = country;
        }
        /**
           @method
           Returns the country code

           @return {string} country code
           @since ARP1.0
        */
        Locale.prototype.getCountry = function () {
            return this.country;
        };
        /**
           @method
           Set the country code

           @param {string} country code
           @since ARP1.0
        */
        Locale.prototype.setCountry = function (country) {
            this.country = country;
        };
        /**
           @method
           Returns the language code

           @return {string} language code
           @since ARP1.0
        */
        Locale.prototype.getLanguage = function () {
            return this.language;
        };
        /**
           @method
           Set the language code

           @param {string} language code
           @since ARP1.0
        */
        Locale.prototype.setLanguage = function (language) {
            this.language = language;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Locale.toObject = function (object) {
            var result = new Locale(null, null);
            // Assign values to bean fields.
            if (object != null && object.country != null)
                result.country = object.country;
            if (object != null && object.language != null)
                result.language = object.language;
            return result;
        };
        return Locale;
    })(APIBean);
    Adaptive.Locale = Locale;
    /**
       @class Adaptive.OSInfo
       @extends Adaptive.APIBean
       Represents the basic information about the operating system.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var OSInfo = (function (_super) {
        __extends(OSInfo, _super);
        /**
           @method constructor
           Constructor used by implementation to set the OS information.

           @param {Adaptive.IOSType} name    of the OS.
           @param {string} version of the OS.
           @param {string} vendor  of the OS.
           @since ARP1.0
        */
        function OSInfo(name, version, vendor) {
            _super.call(this);
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
        OSInfo.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Sets The name of the operating system.

           @param {Adaptive.IOSType} name The name of the operating system.
        */
        OSInfo.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           @method
           Returns the vendor of the operating system.

           @return {string} OS vendor.
           @since ARP1.0
        */
        OSInfo.prototype.getVendor = function () {
            return this.vendor;
        };
        /**
           @method
           Sets The vendor of the operating system.

           @param {string} vendor The vendor of the operating system.
        */
        OSInfo.prototype.setVendor = function (vendor) {
            this.vendor = vendor;
        };
        /**
           @method
           Returns the version of the operating system.

           @return {string} OS version.
           @since ARP1.0
        */
        OSInfo.prototype.getVersion = function () {
            return this.version;
        };
        /**
           @method
           Sets The version/identifier of the operating system.

           @param {string} version The version/identifier of the operating system.
        */
        OSInfo.prototype.setVersion = function (version) {
            this.version = version;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        OSInfo.toObject = function (object) {
            var result = new OSInfo(null, null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null) {
                result.name = IOSType.toObject(object.name);
            }
            else {
                result.name = IOSType.toObject(null);
            }
            if (object != null && object.version != null)
                result.version = object.version;
            if (object != null && object.vendor != null)
                result.vendor = object.vendor;
            return result;
        };
        return OSInfo;
    })(APIBean);
    Adaptive.OSInfo = OSInfo;
    /**
       @class Adaptive.SecureKeyPair
       @extends Adaptive.APIBean
       Represents a single secureKey-value pair.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var SecureKeyPair = (function (_super) {
        __extends(SecureKeyPair, _super);
        /**
           @method constructor
           Constructor with parameters

           @param {string} secureKey  name of the keypair
           @param {string} secureData value of the keypair
           @since ARP1.0
        */
        function SecureKeyPair(secureKey, secureData) {
            _super.call(this);
            this.secureKey = secureKey;
            this.secureData = secureData;
        }
        /**
           @method
           Returns the object value

           @return {string} Value.
           @since ARP 1.0
        */
        SecureKeyPair.prototype.getSecureData = function () {
            return this.secureData;
        };
        /**
           @method
           Sets the value for this object

           @param {string} secureData value to set.
           @since ARP 1.0
        */
        SecureKeyPair.prototype.setSecureData = function (secureData) {
            this.secureData = secureData;
        };
        /**
           @method
           Returns the object secureKey name.

           @return {string} Key name.
           @since ARP 1.0
        */
        SecureKeyPair.prototype.getSecureKey = function () {
            return this.secureKey;
        };
        /**
           @method
           Sets the secureKey name for this object.

           @param {string} secureKey Key name.
           @since ARP 1.0
        */
        SecureKeyPair.prototype.setSecureKey = function (secureKey) {
            this.secureKey = secureKey;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        SecureKeyPair.toObject = function (object) {
            var result = new SecureKeyPair(null, null);
            // Assign values to bean fields.
            if (object != null && object.secureKey != null)
                result.secureKey = object.secureKey;
            if (object != null && object.secureData != null)
                result.secureData = object.secureData;
            return result;
        };
        return SecureKeyPair;
    })(APIBean);
    Adaptive.SecureKeyPair = SecureKeyPair;
    /**
       @class Adaptive.Service
       @extends Adaptive.APIBean
       Represents an instance of a service.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var Service = (function (_super) {
        __extends(Service, _super);
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoints of the service
           @param {string} name             Name of the service
           @param {Adaptive.IServiceType} type             Type of the service
           @since ARP1.0
        */
        function Service(serviceEndpoints, name, type) {
            _super.call(this);
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
        Service.prototype.getType = function () {
            return this.type;
        };
        /**
           @method
           Set the type

           @param {Adaptive.IServiceType} type Type of the service
           @since ARP1.0
        */
        Service.prototype.setType = function (type) {
            this.type = type;
        };
        /**
           @method
           Returns the name

           @return {string} name
           @since ARP1.0
        */
        Service.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Set the name

           @param {string} name Name of the service
           @since ARP1.0
        */
        Service.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           @method
           Returns the serviceEndpoints

           @return {Adaptive.ServiceEndpoint[]} serviceEndpoints
           @since ARP1.0
        */
        Service.prototype.getServiceEndpoints = function () {
            return this.serviceEndpoints;
        };
        /**
           @method
           Set the serviceEndpoints

           @param {Adaptive.ServiceEndpoint[]} serviceEndpoints Endpoint of the service
           @since ARP1.0
        */
        Service.prototype.setServiceEndpoints = function (serviceEndpoints) {
            this.serviceEndpoints = serviceEndpoints;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Service.toObject = function (object) {
            var result = new Service(null, null, null);
            // Assign values to bean fields.
            if (object != null && object.serviceEndpoints != null) {
                result.serviceEndpoints = new Array();
                for (var i = 0; i < object.serviceEndpoints.length; i++) {
                    var __value__ = object.serviceEndpoints[i];
                    if (__value__ != null) {
                        result.serviceEndpoints.push(ServiceEndpoint.toObject(__value__));
                    }
                    else {
                        result.serviceEndpoints.push(ServiceEndpoint.toObject(null));
                    }
                }
            }
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.type != null) {
                result.type = IServiceType.toObject(object.type);
            }
            else {
                result.type = IServiceType.toObject(null);
            }
            return result;
        };
        return Service;
    })(APIBean);
    Adaptive.Service = Service;
    /**
       @class Adaptive.ServiceCookie
       @extends Adaptive.APIBean
       Structure representing the cookieValue of a http cookie.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceCookie = (function (_super) {
        __extends(ServiceCookie, _super);
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
        function ServiceCookie(cookieName, cookieValue, domain, path, scheme, secure, expiry, creation) {
            _super.call(this);
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
        ServiceCookie.prototype.getCookieName = function () {
            return this.cookieName;
        };
        /**
           @method
           Set the cookie cookieName

           @param {string} cookieName Name of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setCookieName = function (cookieName) {
            this.cookieName = cookieName;
        };
        /**
           @method
           Returns the cookie cookieValue

           @return {string} Value of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.getCookieValue = function () {
            return this.cookieValue;
        };
        /**
           @method
           Set the cookie cookieValue

           @param {string} cookieValue Value of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setCookieValue = function (cookieValue) {
            this.cookieValue = cookieValue;
        };
        /**
           @method
           Returns the creation date

           @return {number} Creation date of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.getCreation = function () {
            return this.creation;
        };
        /**
           @method
           Sets the creation date

           @param {number} creation Creation date of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setCreation = function (creation) {
            this.creation = creation;
        };
        /**
           @method
           Returns the domain

           @return {string} domain
           @since ARP1.0
        */
        ServiceCookie.prototype.getDomain = function () {
            return this.domain;
        };
        /**
           @method
           Set the domain

           @param {string} domain Domain of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setDomain = function (domain) {
            this.domain = domain;
        };
        /**
           @method
           Returns the expiration date in milis

           @return {number} expiry
           @since ARP1.0
        */
        ServiceCookie.prototype.getExpiry = function () {
            return this.expiry;
        };
        /**
           @method
           Set the expiration date in milis

           @param {number} expiry Expiration date of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setExpiry = function (expiry) {
            this.expiry = expiry;
        };
        /**
           @method
           Returns the path

           @return {string} path
           @since ARP1.0
        */
        ServiceCookie.prototype.getPath = function () {
            return this.path;
        };
        /**
           @method
           Set the path

           @param {string} path Path of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setPath = function (path) {
            this.path = path;
        };
        /**
           @method
           Returns the scheme

           @return {string} scheme
           @since ARP1.0
        */
        ServiceCookie.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           @method
           Set the scheme

           @param {string} scheme Scheme of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        /**
           @method
           Returns whether the cookie is secure or not

           @return {boolean} true if the cookie is secure; false otherwise
           @since ARP1.0
        */
        ServiceCookie.prototype.getSecure = function () {
            return this.secure;
        };
        /**
           @method
           Set whether the cookie is secure or not

           @param {boolean} secure Privacy of the cookie
           @since ARP1.0
        */
        ServiceCookie.prototype.setSecure = function (secure) {
            this.secure = secure;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ServiceCookie.toObject = function (object) {
            var result = new ServiceCookie(null, null, null, null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.cookieName != null)
                result.cookieName = object.cookieName;
            if (object != null && object.cookieValue != null)
                result.cookieValue = object.cookieValue;
            if (object != null && object.domain != null)
                result.domain = object.domain;
            if (object != null && object.path != null)
                result.path = object.path;
            if (object != null && object.scheme != null)
                result.scheme = object.scheme;
            if (object != null && object.secure != null)
                result.secure = object.secure;
            if (object != null && object.expiry != null)
                result.expiry = object.expiry;
            if (object != null && object.creation != null)
                result.creation = object.creation;
            return result;
        };
        return ServiceCookie;
    })(APIBean);
    Adaptive.ServiceCookie = ServiceCookie;
    /**
       @class Adaptive.ServiceEndpoint
       @extends Adaptive.APIBean
       Structure representing a remote or local service access end-point.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceEndpoint = (function (_super) {
        __extends(ServiceEndpoint, _super);
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
        function ServiceEndpoint(host, paths, port, proxy, scheme) {
            _super.call(this);
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
        ServiceEndpoint.prototype.getHost = function () {
            return this.host;
        };
        /**
           @method
           Set the Remote service host

           @param {string} host Remote service host
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setHost = function (host) {
            this.host = host;
        };
        /**
           @method
           Returns the Remote service Paths

           @return {Adaptive.ServicePath[]} Remote service Paths
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getPaths = function () {
            return this.paths;
        };
        /**
           @method
           Set the Remote service Paths

           @param {Adaptive.ServicePath[]} paths Remote service Paths
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setPaths = function (paths) {
            this.paths = paths;
        };
        /**
           @method
           Returns the Remote service Port

           @return {number} Remote service Port
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getPort = function () {
            return this.port;
        };
        /**
           @method
           Set the Remote service Port

           @param {number} port Remote service Port
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setPort = function (port) {
            this.port = port;
        };
        /**
           @method
           Return the Proxy url

           @return {string} Proxy url
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getProxy = function () {
            return this.proxy;
        };
        /**
           @method
           Set the Proxy url

           @param {string} proxy Proxy url
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setProxy = function (proxy) {
            this.proxy = proxy;
        };
        /**
           @method
           Returns the Remote service scheme

           @return {string} Remote service scheme
           @since ARP1.0
        */
        ServiceEndpoint.prototype.getScheme = function () {
            return this.scheme;
        };
        /**
           @method
           Set the Remote service scheme

           @param {string} scheme Remote service scheme
           @since ARP1.0
        */
        ServiceEndpoint.prototype.setScheme = function (scheme) {
            this.scheme = scheme;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ServiceEndpoint.toObject = function (object) {
            var result = new ServiceEndpoint(null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.host != null)
                result.host = object.host;
            if (object != null && object.paths != null) {
                result.paths = new Array();
                for (var i = 0; i < object.paths.length; i++) {
                    var __value__ = object.paths[i];
                    if (__value__ != null) {
                        result.paths.push(ServicePath.toObject(__value__));
                    }
                    else {
                        result.paths.push(ServicePath.toObject(null));
                    }
                }
            }
            if (object != null && object.port != null)
                result.port = object.port;
            if (object != null && object.proxy != null)
                result.proxy = object.proxy;
            if (object != null && object.scheme != null)
                result.scheme = object.scheme;
            return result;
        };
        return ServiceEndpoint;
    })(APIBean);
    Adaptive.ServiceEndpoint = ServiceEndpoint;
    /**
       @class Adaptive.ServiceHeader
       @extends Adaptive.APIBean
       Structure representing the data of a http request or response header.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceHeader = (function (_super) {
        __extends(ServiceHeader, _super);
        /**
           @method constructor
           Constructor with fields

           @param {string} name Name of the header
           @param {string} data Value of the header
           @since ARP1.0
        */
        function ServiceHeader(name, data) {
            _super.call(this);
            this.name = name;
            this.data = data;
        }
        /**
           @method
           Returns the header value

           @return {string} ServiceHeader value
           @since ARP1.0
        */
        ServiceHeader.prototype.getData = function () {
            return this.data;
        };
        /**
           @method
           Set the header value

           @param {string} data ServiceHeader value
           @since ARP1.0
        */
        ServiceHeader.prototype.setData = function (data) {
            this.data = data;
        };
        /**
           @method
           Returns the header name

           @return {string} ServiceHeader name
           @since ARP1.0
        */
        ServiceHeader.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Set the header name

           @param {string} name Name of the header
           @since ARP1.0
        */
        ServiceHeader.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ServiceHeader.toObject = function (object) {
            var result = new ServiceHeader(null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.data != null)
                result.data = object.data;
            return result;
        };
        return ServiceHeader;
    })(APIBean);
    Adaptive.ServiceHeader = ServiceHeader;
    /**
       @class Adaptive.ServiceRequest
       @extends Adaptive.APIBean
       Represents a local or remote service request.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceRequest = (function (_super) {
        __extends(ServiceRequest, _super);
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
        function ServiceRequest(content, contentType, contentEncoding, contentLength, contentBinary, contentBinaryLength, serviceHeaders, method, protocolVersion, serviceSession) {
            _super.call(this);
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
        ServiceRequest.prototype.getProtocolVersion = function () {
            return this.protocolVersion;
        };
        /**
           @method
           Set the protocol version

           @param {Adaptive.IServiceProtocolVersion} protocolVersion The HTTP procotol version to be used for this request.
           @since ARP1.0
        */
        ServiceRequest.prototype.setProtocolVersion = function (protocolVersion) {
            this.protocolVersion = protocolVersion;
        };
        /**
           @method
           Returns the content

           @return {string} content
           @since ARP1.0
        */
        ServiceRequest.prototype.getContent = function () {
            return this.content;
        };
        /**
           @method
           Set the content

           @param {string} content Request/Response data content (plain text)
           @since ARP1.0
        */
        ServiceRequest.prototype.setContent = function (content) {
            this.content = content;
        };
        /**
           @method
           Returns the byte[] of the content

           @return {number[]} contentBinary
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentBinary = function () {
            return this.contentBinary;
        };
        /**
           @method
           Set the byte[] of the content

           @param {number[]} contentBinary The byte[] representing the Content field.
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentBinary = function (contentBinary) {
            this.contentBinary = contentBinary;
        };
        /**
           @method
           Retrusn the binary content length

           @return {number} contentBinaryLength
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentBinaryLength = function () {
            return this.contentBinaryLength;
        };
        /**
           @method
           Set the binary content length

           @param {number} contentBinaryLength The length in bytes for the binary Content.
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentBinaryLength = function (contentBinaryLength) {
            this.contentBinaryLength = contentBinaryLength;
        };
        /**
           @method
           Returns the content encoding

           @return {string} contentEncoding
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentEncoding = function () {
            return this.contentEncoding;
        };
        /**
           @method
           Set the content encoding

           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentEncoding = function (contentEncoding) {
            this.contentEncoding = contentEncoding;
        };
        /**
           @method
           Returns the content length

           @return {number} contentLength
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentLength = function () {
            return this.contentLength;
        };
        /**
           @method
           Set the content length

           @param {number} contentLength The length in bytes for the Content field.
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentLength = function (contentLength) {
            this.contentLength = contentLength;
        };
        /**
           @method
           Returns the content type

           @return {string} contentType
           @since ARP1.0
        */
        ServiceRequest.prototype.getContentType = function () {
            return this.contentType;
        };
        /**
           @method
           Set the content type

           @param {string} contentType The request/response content type (MIME TYPE).
           @since ARP1.0
        */
        ServiceRequest.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        /**
           @method
           Returns the method

           @return {string} method
           @since ARP1.0
        */
        ServiceRequest.prototype.getMethod = function () {
            return this.method;
        };
        /**
           @method
           Set the method

           @param {string} method The request method
           @since ARP1.0
        */
        ServiceRequest.prototype.setMethod = function (method) {
            this.method = method;
        };
        /**
           @method
           Returns the array of ServiceHeader

           @return {Adaptive.ServiceHeader[]} serviceHeaders
           @since ARP1.0
        */
        ServiceRequest.prototype.getServiceHeaders = function () {
            return this.serviceHeaders;
        };
        /**
           @method
           Set the array of ServiceHeader

           @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since ARP1.0
        */
        ServiceRequest.prototype.setServiceHeaders = function (serviceHeaders) {
            this.serviceHeaders = serviceHeaders;
        };
        /**
           @method
           Getter for service session

           @return {Adaptive.ServiceSession} The element service session
           @since ARP1.0
        */
        ServiceRequest.prototype.getServiceSession = function () {
            return this.serviceSession;
        };
        /**
           @method
           Setter for service session

           @param {Adaptive.ServiceSession} serviceSession The element service session
           @since ARP1.0
        */
        ServiceRequest.prototype.setServiceSession = function (serviceSession) {
            this.serviceSession = serviceSession;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ServiceRequest.toObject = function (object) {
            var result = new ServiceRequest(null, null, null, null, null, null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.content != null)
                result.content = object.content;
            if (object != null && object.contentType != null)
                result.contentType = object.contentType;
            if (object != null && object.contentEncoding != null)
                result.contentEncoding = object.contentEncoding;
            if (object != null && object.contentLength != null)
                result.contentLength = object.contentLength;
            if (object != null && object.contentBinary != null) {
                result.contentBinary = new Array();
                for (var i = 0; i < object.contentBinary.length; i++) {
                    var __value__ = object.contentBinary[i];
                    if (__value__ != null)
                        result.contentBinary.push(__value__);
                }
            }
            if (object != null && object.contentBinaryLength != null)
                result.contentBinaryLength = object.contentBinaryLength;
            if (object != null && object.serviceHeaders != null) {
                result.serviceHeaders = new Array();
                for (var i = 0; i < object.serviceHeaders.length; i++) {
                    var __value__ = object.serviceHeaders[i];
                    if (__value__ != null) {
                        result.serviceHeaders.push(ServiceHeader.toObject(__value__));
                    }
                    else {
                        result.serviceHeaders.push(ServiceHeader.toObject(null));
                    }
                }
            }
            if (object != null && object.method != null)
                result.method = object.method;
            if (object != null && object.protocolVersion != null) {
                result.protocolVersion = IServiceProtocolVersion.toObject(object.protocolVersion);
            }
            else {
                result.protocolVersion = IServiceProtocolVersion.toObject(null);
            }
            if (object != null && object.serviceSession != null) {
                result.serviceSession = ServiceSession.toObject(object.serviceSession);
            }
            else {
                result.serviceSession = ServiceSession.toObject(null);
            }
            return result;
        };
        return ServiceRequest;
    })(APIBean);
    Adaptive.ServiceRequest = ServiceRequest;
    /**
       @class Adaptive.ServiceResponse
       @extends Adaptive.APIBean
       Represents a local or remote service response.

       @author Aryslan
       @since ARP1.0
       @version 1.0
    */
    var ServiceResponse = (function (_super) {
        __extends(ServiceResponse, _super);
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
        function ServiceResponse(content, contentType, contentEncoding, contentLength, contentBinary, contentBinaryLength, serviceHeaders, serviceSession) {
            _super.call(this);
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
        ServiceResponse.prototype.getContent = function () {
            return this.content;
        };
        /**
           @method
           Set the content

           @param {string} content Request/Response data content (plain text).
           @since ARP1.0
        */
        ServiceResponse.prototype.setContent = function (content) {
            this.content = content;
        };
        /**
           @method
           Returns the binary content

           @return {number[]} contentBinary
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentBinary = function () {
            return this.contentBinary;
        };
        /**
           @method
           Set the binary content

           @param {number[]} contentBinary The byte[] representing the binary Content.
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentBinary = function (contentBinary) {
            this.contentBinary = contentBinary;
        };
        /**
           @method
           Returns the binary content length

           @return {number} contentBinaryLength
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentBinaryLength = function () {
            return this.contentBinaryLength;
        };
        /**
           @method
           Set the binary content length

           @param {number} contentBinaryLength The length in bytes for the binary Content.
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentBinaryLength = function (contentBinaryLength) {
            this.contentBinaryLength = contentBinaryLength;
        };
        /**
           @method
           Returns the content encoding

           @return {string} contentEncoding
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentEncoding = function () {
            return this.contentEncoding;
        };
        /**
           @method
           Set the content encoding

           @param {string} contentEncoding Encoding of the binary payload - by default assumed to be UTF8.
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentEncoding = function (contentEncoding) {
            this.contentEncoding = contentEncoding;
        };
        /**
           @method
           Returns the content length

           @return {number} contentLength
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentLength = function () {
            return this.contentLength;
        };
        /**
           @method
           Set the content length

           @param {number} contentLength The length in bytes for the Content field.
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentLength = function (contentLength) {
            this.contentLength = contentLength;
        };
        /**
           @method
           Returns the content type

           @return {string} contentType
           @since ARP1.0
        */
        ServiceResponse.prototype.getContentType = function () {
            return this.contentType;
        };
        /**
           @method
           Set the content type

           @param {string} contentType The request/response content type (MIME TYPE).
           @since ARP1.0
        */
        ServiceResponse.prototype.setContentType = function (contentType) {
            this.contentType = contentType;
        };
        /**
           @method
           Returns the array of ServiceHeader

           @return {Adaptive.ServiceHeader[]} serviceHeaders
           @since ARP1.0
        */
        ServiceResponse.prototype.getServiceHeaders = function () {
            return this.serviceHeaders;
        };
        /**
           @method
           Set the array of ServiceHeader

           @param {Adaptive.ServiceHeader[]} serviceHeaders The serviceHeaders array (name,value pairs) to be included on the I/O service request.
           @since ARP1.0
        */
        ServiceResponse.prototype.setServiceHeaders = function (serviceHeaders) {
            this.serviceHeaders = serviceHeaders;
        };
        /**
           @method
           Getter for service session

           @return {Adaptive.ServiceSession} The element service session
           @since ARP1.0
        */
        ServiceResponse.prototype.getServiceSession = function () {
            return this.serviceSession;
        };
        /**
           @method
           Setter for service session

           @param {Adaptive.ServiceSession} serviceSession The element service session
           @since ARP1.0
        */
        ServiceResponse.prototype.setServiceSession = function (serviceSession) {
            this.serviceSession = serviceSession;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ServiceResponse.toObject = function (object) {
            var result = new ServiceResponse(null, null, null, null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.content != null)
                result.content = object.content;
            if (object != null && object.contentType != null)
                result.contentType = object.contentType;
            if (object != null && object.contentEncoding != null)
                result.contentEncoding = object.contentEncoding;
            if (object != null && object.contentLength != null)
                result.contentLength = object.contentLength;
            if (object != null && object.contentBinary != null) {
                result.contentBinary = new Array();
                for (var i = 0; i < object.contentBinary.length; i++) {
                    var __value__ = object.contentBinary[i];
                    if (__value__ != null)
                        result.contentBinary.push(__value__);
                }
            }
            if (object != null && object.contentBinaryLength != null)
                result.contentBinaryLength = object.contentBinaryLength;
            if (object != null && object.serviceHeaders != null) {
                result.serviceHeaders = new Array();
                for (var i = 0; i < object.serviceHeaders.length; i++) {
                    var __value__ = object.serviceHeaders[i];
                    if (__value__ != null) {
                        result.serviceHeaders.push(ServiceHeader.toObject(__value__));
                    }
                    else {
                        result.serviceHeaders.push(ServiceHeader.toObject(null));
                    }
                }
            }
            if (object != null && object.serviceSession != null) {
                result.serviceSession = ServiceSession.toObject(object.serviceSession);
            }
            else {
                result.serviceSession = ServiceSession.toObject(null);
            }
            return result;
        };
        return ServiceResponse;
    })(APIBean);
    Adaptive.ServiceResponse = ServiceResponse;
    /**
       @class Adaptive.ServiceSession
       @extends Adaptive.APIBean
       Represents a session object for HTTP request and responses

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var ServiceSession = (function (_super) {
        __extends(ServiceSession, _super);
        /**
           @method constructor
           Constructor with fields

           @param {Adaptive.ServiceCookie[]} cookies    The cookies of the response
           @param {string[]} attributes Attributes of the response
           @since ARP1.0
        */
        function ServiceSession(cookies, attributes) {
            _super.call(this);
            this.cookies = cookies;
            this.attributes = attributes;
        }
        /**
           @method
           Gets the attributes of the response

           @return {string[]} Attributes of the response
           @since ARP1.0
        */
        ServiceSession.prototype.getAttributes = function () {
            return this.attributes;
        };
        /**
           @method
           Sets the attributes for the response

           @param {string[]} attributes Attributes of the response
           @since ARP1.0
        */
        ServiceSession.prototype.setAttributes = function (attributes) {
            this.attributes = attributes;
        };
        /**
           @method
           Returns the cookies of the response

           @return {Adaptive.ServiceCookie[]} The cookies of the response
           @since ARP1.0
        */
        ServiceSession.prototype.getCookies = function () {
            return this.cookies;
        };
        /**
           @method
           Sets the cookies of the response

           @param {Adaptive.ServiceCookie[]} cookies The cookies of the response
           @since ARP1.0
        */
        ServiceSession.prototype.setCookies = function (cookies) {
            this.cookies = cookies;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        ServiceSession.toObject = function (object) {
            var result = new ServiceSession(null, null);
            // Assign values to bean fields.
            if (object != null && object.cookies != null) {
                result.cookies = new Array();
                for (var i = 0; i < object.cookies.length; i++) {
                    var __value__ = object.cookies[i];
                    if (__value__ != null) {
                        result.cookies.push(ServiceCookie.toObject(__value__));
                    }
                    else {
                        result.cookies.push(ServiceCookie.toObject(null));
                    }
                }
            }
            if (object != null && object.attributes != null) {
                result.attributes = new Array();
                for (var i = 0; i < object.attributes.length; i++) {
                    var __value__ = object.attributes[i];
                    if (__value__ != null)
                        result.attributes.push(__value__);
                }
            }
            return result;
        };
        return ServiceSession;
    })(APIBean);
    Adaptive.ServiceSession = ServiceSession;
    /**
       @class Adaptive.Contact
       @extends Adaptive.ContactUid
       Structure representing the data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since ARP1.0
       @version 1.0
    */
    var Contact = (function (_super) {
        __extends(Contact, _super);
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
        function Contact(contactId, personalInfo, professionalInfo, contactAddresses, contactPhones, contactEmails, contactWebsites, contactSocials, contactTags) {
            _super.call(this, contactId);
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
        Contact.prototype.getContactAddresses = function () {
            return this.contactAddresses;
        };
        /**
           @method
           Set the addresses of the Contact

           @param {Adaptive.ContactAddress[]} contactAddresses Addresses of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactAddresses = function (contactAddresses) {
            this.contactAddresses = contactAddresses;
        };
        /**
           @method
           Returns all the emails of the Contact

           @return {Adaptive.ContactEmail[]} ContactEmail[]
           @since ARP1.0
        */
        Contact.prototype.getContactEmails = function () {
            return this.contactEmails;
        };
        /**
           @method
           Set the emails of the Contact

           @param {Adaptive.ContactEmail[]} contactEmails Emails of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactEmails = function (contactEmails) {
            this.contactEmails = contactEmails;
        };
        /**
           @method
           Returns all the phones of the Contact

           @return {Adaptive.ContactPhone[]} ContactPhone[]
           @since ARP1.0
        */
        Contact.prototype.getContactPhones = function () {
            return this.contactPhones;
        };
        /**
           @method
           Set the phones of the Contact

           @param {Adaptive.ContactPhone[]} contactPhones Phones of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactPhones = function (contactPhones) {
            this.contactPhones = contactPhones;
        };
        /**
           @method
           Returns all the social network info of the Contact

           @return {Adaptive.ContactSocial[]} ContactSocial[]
           @since ARP1.0
        */
        Contact.prototype.getContactSocials = function () {
            return this.contactSocials;
        };
        /**
           @method
           Set the social network info of the Contact

           @param {Adaptive.ContactSocial[]} contactSocials Social Networks of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactSocials = function (contactSocials) {
            this.contactSocials = contactSocials;
        };
        /**
           @method
           Returns the additional tags of the Contact

           @return {Adaptive.ContactTag[]} ContactTag[]
           @since ARP1.0
        */
        Contact.prototype.getContactTags = function () {
            return this.contactTags;
        };
        /**
           @method
           Set the additional tags of the Contact

           @param {Adaptive.ContactTag[]} contactTags Tags of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactTags = function (contactTags) {
            this.contactTags = contactTags;
        };
        /**
           @method
           Returns all the websites of the Contact

           @return {Adaptive.ContactWebsite[]} ContactWebsite[]
           @since ARP1.0
        */
        Contact.prototype.getContactWebsites = function () {
            return this.contactWebsites;
        };
        /**
           @method
           Set the websites of the Contact

           @param {Adaptive.ContactWebsite[]} contactWebsites Websites of the contact
           @since ARP1.0
        */
        Contact.prototype.setContactWebsites = function (contactWebsites) {
            this.contactWebsites = contactWebsites;
        };
        /**
           @method
           Returns the personal info of the Contact

           @return {Adaptive.ContactPersonalInfo} ContactPersonalInfo of the Contact
           @since ARP1.0
        */
        Contact.prototype.getPersonalInfo = function () {
            return this.personalInfo;
        };
        /**
           @method
           Set the personal info of the Contact

           @param {Adaptive.ContactPersonalInfo} personalInfo Personal Information
           @since ARP1.0
        */
        Contact.prototype.setPersonalInfo = function (personalInfo) {
            this.personalInfo = personalInfo;
        };
        /**
           @method
           Returns the professional info of the Contact

           @return {Adaptive.ContactProfessionalInfo} Array of personal info
           @since ARP1.0
        */
        Contact.prototype.getProfessionalInfo = function () {
            return this.professionalInfo;
        };
        /**
           @method
           Set the professional info of the Contact

           @param {Adaptive.ContactProfessionalInfo} professionalInfo Professional Information
           @since ARP1.0
        */
        Contact.prototype.setProfessionalInfo = function (professionalInfo) {
            this.professionalInfo = professionalInfo;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        Contact.toObject = function (object) {
            var result = new Contact(null, null, null, null, null, null, null, null, null);
            // Assign values to parent bean fields.
            if (object != null && object.contactId != null)
                result.contactId = object.contactId;
            // Assign values to bean fields.
            if (object != null && object.personalInfo != null) {
                result.personalInfo = ContactPersonalInfo.toObject(object.personalInfo);
            }
            else {
                result.personalInfo = ContactPersonalInfo.toObject(null);
            }
            if (object != null && object.professionalInfo != null) {
                result.professionalInfo = ContactProfessionalInfo.toObject(object.professionalInfo);
            }
            else {
                result.professionalInfo = ContactProfessionalInfo.toObject(null);
            }
            if (object != null && object.contactAddresses != null) {
                result.contactAddresses = new Array();
                for (var i = 0; i < object.contactAddresses.length; i++) {
                    var __value__ = object.contactAddresses[i];
                    if (__value__ != null) {
                        result.contactAddresses.push(ContactAddress.toObject(__value__));
                    }
                    else {
                        result.contactAddresses.push(ContactAddress.toObject(null));
                    }
                }
            }
            if (object != null && object.contactPhones != null) {
                result.contactPhones = new Array();
                for (var i = 0; i < object.contactPhones.length; i++) {
                    var __value__ = object.contactPhones[i];
                    if (__value__ != null) {
                        result.contactPhones.push(ContactPhone.toObject(__value__));
                    }
                    else {
                        result.contactPhones.push(ContactPhone.toObject(null));
                    }
                }
            }
            if (object != null && object.contactEmails != null) {
                result.contactEmails = new Array();
                for (var i = 0; i < object.contactEmails.length; i++) {
                    var __value__ = object.contactEmails[i];
                    if (__value__ != null) {
                        result.contactEmails.push(ContactEmail.toObject(__value__));
                    }
                    else {
                        result.contactEmails.push(ContactEmail.toObject(null));
                    }
                }
            }
            if (object != null && object.contactWebsites != null) {
                result.contactWebsites = new Array();
                for (var i = 0; i < object.contactWebsites.length; i++) {
                    var __value__ = object.contactWebsites[i];
                    if (__value__ != null) {
                        result.contactWebsites.push(ContactWebsite.toObject(__value__));
                    }
                    else {
                        result.contactWebsites.push(ContactWebsite.toObject(null));
                    }
                }
            }
            if (object != null && object.contactSocials != null) {
                result.contactSocials = new Array();
                for (var i = 0; i < object.contactSocials.length; i++) {
                    var __value__ = object.contactSocials[i];
                    if (__value__ != null) {
                        result.contactSocials.push(ContactSocial.toObject(__value__));
                    }
                    else {
                        result.contactSocials.push(ContactSocial.toObject(null));
                    }
                }
            }
            if (object != null && object.contactTags != null) {
                result.contactTags = new Array();
                for (var i = 0; i < object.contactTags.length; i++) {
                    var __value__ = object.contactTags[i];
                    if (__value__ != null) {
                        result.contactTags.push(ContactTag.toObject(__value__));
                    }
                    else {
                        result.contactTags.push(ContactTag.toObject(null));
                    }
                }
            }
            return result;
        };
        return Contact;
    })(ContactUid);
    Adaptive.Contact = Contact;
    /**
       @class Adaptive.BaseListener
       @extends Adaptive.IBaseListener
    */
    var BaseListener = (function () {
        /**
           @method constructor
           Constructor with listener id.

           @param {number} id  The id of the listener.
        */
        function BaseListener(id) {
            this.id = id;
            this.apiGroup = IAdaptiveRPGroup.Application;
        }
        /**
           @method
           @return {number}
           Get the listener id.
        */
        BaseListener.prototype.getId = function () {
            return this.id;
        };
        /**
           @method
           @return {Adaptive.IAdaptiveRPGroup}
           Return the API group for the given interface.
        */
        BaseListener.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string}
           The version of the API.
        */
        BaseListener.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseListener;
    })();
    Adaptive.BaseListener = BaseListener;
    /**
       @property {Adaptive.Dictionary} registeredAccelerationListener
       @member Adaptive
       @private
       AccelerationListener control dictionary.
    */
    Adaptive.registeredAccelerationListener = new Dictionary([]);
    // AccelerationListener global listener handlers.
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.IAccelerationListenerError} error
    */
    function handleAccelerationListenerError(id, error) {
        var listener = Adaptive.registeredAccelerationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredAccelerationListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleAccelerationListenerError = handleAccelerationListenerError;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.Acceleration} acceleration
    */
    function handleAccelerationListenerResult(id, acceleration) {
        var listener = Adaptive.registeredAccelerationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredAccelerationListener dictionary.");
        }
        else {
            listener.onResult(acceleration);
        }
    }
    Adaptive.handleAccelerationListenerResult = handleAccelerationListenerResult;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.Acceleration} acceleration
       @param {Adaptive.IAccelerationListenerWarning} warning
    */
    function handleAccelerationListenerWarning(id, acceleration, warning) {
        var listener = Adaptive.registeredAccelerationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredAccelerationListener dictionary.");
        }
        else {
            listener.onWarning(acceleration, warning);
        }
    }
    Adaptive.handleAccelerationListenerWarning = handleAccelerationListenerWarning;
    /**
       @class Adaptive.AccelerationListener
       @extends Adaptive.BaseListener
    */
    var AccelerationListener = (function (_super) {
        __extends(AccelerationListener, _super);
        /**
           @method constructor
           Constructor with anonymous handler functions for listener.

           @param {function} onErrorFunction Function receiving parameters of type: Adaptive.IAccelerationListenerError
           @param {function} onResultFunction Function receiving parameters of type: Adaptive.Acceleration
           @param {function} onWarningFunction Function receiving parameters of type: Adaptive.Acceleration, Adaptive.IAccelerationListenerWarning
        */
        function AccelerationListener(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: AccelerationListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: AccelerationListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: AccelerationListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           @method
           No data received - error condition, not authorized or hardware not available. This will be reported once for the
listener and subsequently, the listener will be deactivated and removed from the internal list of listeners.
           @param {Adaptive.IAccelerationListenerError} error Error fired

           @since ARP1.0
        */
        AccelerationListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: AccelerationListener contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           @method
           Correct data received.
           @param {Adaptive.Acceleration} acceleration Acceleration received

           @since ARP1.0
        */
        AccelerationListener.prototype.onResult = function (acceleration) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: AccelerationListener contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(acceleration);
            }
        };
        /**
           @method
           Data received with warning - ie. Needs calibration.
           @param {Adaptive.Acceleration} acceleration Acceleration received
           @param {Adaptive.IAccelerationListenerWarning} warning      Warning fired

           @since ARP1.0
        */
        AccelerationListener.prototype.onWarning = function (acceleration, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: AccelerationListener contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(acceleration, warning);
            }
        };
        return AccelerationListener;
    })(BaseListener);
    Adaptive.AccelerationListener = AccelerationListener;
    /**
       @property {Adaptive.Dictionary} registeredButtonListener
       @member Adaptive
       @private
       ButtonListener control dictionary.
    */
    Adaptive.registeredButtonListener = new Dictionary([]);
    // ButtonListener global listener handlers.
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.IButtonListenerError} error
    */
    function handleButtonListenerError(id, error) {
        var listener = Adaptive.registeredButtonListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredButtonListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleButtonListenerError = handleButtonListenerError;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.Button} button
    */
    function handleButtonListenerResult(id, button) {
        var listener = Adaptive.registeredButtonListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredButtonListener dictionary.");
        }
        else {
            listener.onResult(button);
        }
    }
    Adaptive.handleButtonListenerResult = handleButtonListenerResult;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.Button} button
       @param {Adaptive.IButtonListenerWarning} warning
    */
    function handleButtonListenerWarning(id, button, warning) {
        var listener = Adaptive.registeredButtonListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredButtonListener dictionary.");
        }
        else {
            listener.onWarning(button, warning);
        }
    }
    Adaptive.handleButtonListenerWarning = handleButtonListenerWarning;
    /**
       @class Adaptive.ButtonListener
       @extends Adaptive.BaseListener
    */
    var ButtonListener = (function (_super) {
        __extends(ButtonListener, _super);
        /**
           @method constructor
           Constructor with anonymous handler functions for listener.

           @param {function} onErrorFunction Function receiving parameters of type: Adaptive.IButtonListenerError
           @param {function} onResultFunction Function receiving parameters of type: Adaptive.Button
           @param {function} onWarningFunction Function receiving parameters of type: Adaptive.Button, Adaptive.IButtonListenerWarning
        */
        function ButtonListener(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: ButtonListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: ButtonListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: ButtonListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           @method
           No data received
           @param {Adaptive.IButtonListenerError} error occurred

           @since ARP1.0
        */
        ButtonListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: ButtonListener contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           @method
           Called on button pressed
           @param {Adaptive.Button} button pressed

           @since ARP1.0
        */
        ButtonListener.prototype.onResult = function (button) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: ButtonListener contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(button);
            }
        };
        /**
           @method
           Data received with warning
           @param {Adaptive.Button} button  pressed
           @param {Adaptive.IButtonListenerWarning} warning happened

           @since ARP1.0
        */
        ButtonListener.prototype.onWarning = function (button, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: ButtonListener contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(button, warning);
            }
        };
        return ButtonListener;
    })(BaseListener);
    Adaptive.ButtonListener = ButtonListener;
    /**
       @property {Adaptive.Dictionary} registeredGeolocationListener
       @member Adaptive
       @private
       GeolocationListener control dictionary.
    */
    Adaptive.registeredGeolocationListener = new Dictionary([]);
    // GeolocationListener global listener handlers.
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.IGeolocationListenerError} error
    */
    function handleGeolocationListenerError(id, error) {
        var listener = Adaptive.registeredGeolocationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredGeolocationListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleGeolocationListenerError = handleGeolocationListenerError;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.Geolocation} geolocation
    */
    function handleGeolocationListenerResult(id, geolocation) {
        var listener = Adaptive.registeredGeolocationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredGeolocationListener dictionary.");
        }
        else {
            listener.onResult(geolocation);
        }
    }
    Adaptive.handleGeolocationListenerResult = handleGeolocationListenerResult;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.Geolocation} geolocation
       @param {Adaptive.IGeolocationListenerWarning} warning
    */
    function handleGeolocationListenerWarning(id, geolocation, warning) {
        var listener = Adaptive.registeredGeolocationListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredGeolocationListener dictionary.");
        }
        else {
            listener.onWarning(geolocation, warning);
        }
    }
    Adaptive.handleGeolocationListenerWarning = handleGeolocationListenerWarning;
    /**
       @class Adaptive.GeolocationListener
       @extends Adaptive.BaseListener
    */
    var GeolocationListener = (function (_super) {
        __extends(GeolocationListener, _super);
        /**
           @method constructor
           Constructor with anonymous handler functions for listener.

           @param {function} onErrorFunction Function receiving parameters of type: Adaptive.IGeolocationListenerError
           @param {function} onResultFunction Function receiving parameters of type: Adaptive.Geolocation
           @param {function} onWarningFunction Function receiving parameters of type: Adaptive.Geolocation, Adaptive.IGeolocationListenerWarning
        */
        function GeolocationListener(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: GeolocationListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: GeolocationListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: GeolocationListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           @method
           No data received - error condition, not authorized or hardware not available.
           @param {Adaptive.IGeolocationListenerError} error Type of error encountered during reading.

           @since ARP1.0
        */
        GeolocationListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: GeolocationListener contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           @method
           Correct data received.
           @param {Adaptive.Geolocation} geolocation Geolocation Bean

           @since ARP1.0
        */
        GeolocationListener.prototype.onResult = function (geolocation) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: GeolocationListener contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(geolocation);
            }
        };
        /**
           @method
           Data received with warning - ie. HighDoP
           @param {Adaptive.Geolocation} geolocation Geolocation Bean
           @param {Adaptive.IGeolocationListenerWarning} warning     Type of warning encountered during reading.

           @since ARP1.0
        */
        GeolocationListener.prototype.onWarning = function (geolocation, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: GeolocationListener contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(geolocation, warning);
            }
        };
        return GeolocationListener;
    })(BaseListener);
    Adaptive.GeolocationListener = GeolocationListener;
    /**
       @property {Adaptive.Dictionary} registeredLifecycleListener
       @member Adaptive
       @private
       LifecycleListener control dictionary.
    */
    Adaptive.registeredLifecycleListener = new Dictionary([]);
    // LifecycleListener global listener handlers.
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.ILifecycleListenerError} error
    */
    function handleLifecycleListenerError(id, error) {
        var listener = Adaptive.registeredLifecycleListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredLifecycleListener dictionary.");
        }
        else {
            listener.onError(error);
        }
    }
    Adaptive.handleLifecycleListenerError = handleLifecycleListenerError;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.Lifecycle} lifecycle
    */
    function handleLifecycleListenerResult(id, lifecycle) {
        var listener = Adaptive.registeredLifecycleListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredLifecycleListener dictionary.");
        }
        else {
            listener.onResult(lifecycle);
        }
    }
    Adaptive.handleLifecycleListenerResult = handleLifecycleListenerResult;
    /**
       @method
       @private
       @member Adaptive
       @param {number} id
       @param {Adaptive.Lifecycle} lifecycle
       @param {Adaptive.ILifecycleListenerWarning} warning
    */
    function handleLifecycleListenerWarning(id, lifecycle, warning) {
        var listener = Adaptive.registeredLifecycleListener["" + id];
        if (typeof listener === 'undefined' || listener == null) {
            console.error("ERROR: No listener with id " + id + " registered in registeredLifecycleListener dictionary.");
        }
        else {
            listener.onWarning(lifecycle, warning);
        }
    }
    Adaptive.handleLifecycleListenerWarning = handleLifecycleListenerWarning;
    /**
       @class Adaptive.LifecycleListener
       @extends Adaptive.BaseListener
    */
    var LifecycleListener = (function (_super) {
        __extends(LifecycleListener, _super);
        /**
           @method constructor
           Constructor with anonymous handler functions for listener.

           @param {function} onErrorFunction Function receiving parameters of type: Adaptive.ILifecycleListenerError
           @param {function} onResultFunction Function receiving parameters of type: Adaptive.Lifecycle
           @param {function} onWarningFunction Function receiving parameters of type: Adaptive.Lifecycle, Adaptive.ILifecycleListenerWarning
        */
        function LifecycleListener(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: LifecycleListener onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: LifecycleListener onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: LifecycleListener onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           @method
           No data received - error condition, not authorized or hardware not available.
           @param {Adaptive.ILifecycleListenerError} error Type of error encountered during reading.

           @since ARP1.0
        */
        LifecycleListener.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: LifecycleListener contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           @method
           Called when lifecycle changes somehow.
           @param {Adaptive.Lifecycle} lifecycle Lifecycle element

           @since ARP1.0
        */
        LifecycleListener.prototype.onResult = function (lifecycle) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: LifecycleListener contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(lifecycle);
            }
        };
        /**
           @method
           Data received with warning
           @param {Adaptive.Lifecycle} lifecycle Lifecycle element
           @param {Adaptive.ILifecycleListenerWarning} warning   Type of warning encountered during reading.

           @since ARP1.0
        */
        LifecycleListener.prototype.onWarning = function (lifecycle, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: LifecycleListener contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(lifecycle, warning);
            }
        };
        return LifecycleListener;
    })(BaseListener);
    Adaptive.LifecycleListener = LifecycleListener;
    /**
       @property {Adaptive.Dictionary} registeredNetworkStatusListener
       @member Adaptive
       @private
       NetworkStatusListener control dictionary.
    */
    Adaptive.registeredNetworkStatusListener = new Dictionary([]);
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

           @param {function} onErrorFunction Function receiving parameters of type: Adaptive.INetworkStatusListenerError
           @param {function} onResultFunction Function receiving parameters of type: Adaptive.ICapabilitiesNet
           @param {function} onWarningFunction Function receiving parameters of type: Adaptive.ICapabilitiesNet, Adaptive.INetworkStatusListenerWarning
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
           @param {Adaptive.INetworkStatusListenerError} error Type of error encountered during reading.

           @since ARP1.0
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
           @param {Adaptive.ICapabilitiesNet} network Change to this network.

           @since ARP1.0
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
           @param {Adaptive.ICapabilitiesNet} network Change to this network.
           @param {Adaptive.INetworkStatusListenerWarning} warning Type of warning encountered during reading.

           @since ARP1.0
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
    })(BaseListener);
    Adaptive.NetworkStatusListener = NetworkStatusListener;
    var BaseCallback = (function () {
        /**
           Constructor with callback id.

           @param id  The id of the callback.
        */
        function BaseCallback(id) {
            this.id = id;
            this.apiGroup = IAdaptiveRPGroup.Application;
        }
        /**
           Get the listener id.
           @return {number} long with the identifier of the callback.
        */
        BaseCallback.prototype.getId = function () {
            return this.id;
        };
        /**
           Return the API group for the given interface.
        */
        BaseCallback.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseCallback.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseCallback;
    })();
    Adaptive.BaseCallback = BaseCallback;
    /**
       ContactPhotoResultCallback control dictionary.
    */
    Adaptive.registeredContactPhotoResultCallback = new Dictionary([]);
    /**
       ContactPhotoResultCallback global callback handlers.
    */
    function handleContactPhotoResultCallbackError(id, error) {
        var callback = Adaptive.registeredContactPhotoResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredContactPhotoResultCallback dictionary.");
        }
        else {
            Adaptive.registeredContactPhotoResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleContactPhotoResultCallbackError = handleContactPhotoResultCallbackError;
    function handleContactPhotoResultCallbackResult(id, contactPhoto) {
        var callback = Adaptive.registeredContactPhotoResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredContactPhotoResultCallback dictionary.");
        }
        else {
            Adaptive.registeredContactPhotoResultCallback.remove("" + id);
            callback.onResult(contactPhoto);
        }
    }
    Adaptive.handleContactPhotoResultCallbackResult = handleContactPhotoResultCallbackResult;
    function handleContactPhotoResultCallbackWarning(id, contactPhoto, warning) {
        var callback = Adaptive.registeredContactPhotoResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredContactPhotoResultCallback dictionary.");
        }
        else {
            Adaptive.registeredContactPhotoResultCallback.remove("" + id);
            callback.onWarning(contactPhoto, warning);
        }
    }
    Adaptive.handleContactPhotoResultCallbackWarning = handleContactPhotoResultCallbackWarning;
    var ContactPhotoResultCallback = (function (_super) {
        __extends(ContactPhotoResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IContactPhotoResultCallbackError
           @param onResultFunction Function receiving parameters of type: number[]
           @param onWarningFunction Function receiving parameters of type: number[], Adaptive.IContactPhotoResultCallbackWarning
        */
        function ContactPhotoResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: ContactPhotoResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: ContactPhotoResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: ContactPhotoResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        ContactPhotoResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           This method is called on Result

           @param contactPhoto returned by the platform
           @since ARP1.0
        */
        ContactPhotoResultCallback.prototype.onResult = function (contactPhoto) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(contactPhoto);
            }
        };
        /**
           This method is called on Warning

           @param contactPhoto returned by the platform
           @param warning      returned by the platform
           @since ARP1.0
        */
        ContactPhotoResultCallback.prototype.onWarning = function (contactPhoto, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: ContactPhotoResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(contactPhoto, warning);
            }
        };
        return ContactPhotoResultCallback;
    })(BaseCallback);
    Adaptive.ContactPhotoResultCallback = ContactPhotoResultCallback;
    /**
       ContactResultCallback control dictionary.
    */
    Adaptive.registeredContactResultCallback = new Dictionary([]);
    /**
       ContactResultCallback global callback handlers.
    */
    function handleContactResultCallbackError(id, error) {
        var callback = Adaptive.registeredContactResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredContactResultCallback dictionary.");
        }
        else {
            Adaptive.registeredContactResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleContactResultCallbackError = handleContactResultCallbackError;
    function handleContactResultCallbackResult(id, contacts) {
        var callback = Adaptive.registeredContactResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredContactResultCallback dictionary.");
        }
        else {
            Adaptive.registeredContactResultCallback.remove("" + id);
            callback.onResult(contacts);
        }
    }
    Adaptive.handleContactResultCallbackResult = handleContactResultCallbackResult;
    function handleContactResultCallbackWarning(id, contacts, warning) {
        var callback = Adaptive.registeredContactResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredContactResultCallback dictionary.");
        }
        else {
            Adaptive.registeredContactResultCallback.remove("" + id);
            callback.onWarning(contacts, warning);
        }
    }
    Adaptive.handleContactResultCallbackWarning = handleContactResultCallbackWarning;
    var ContactResultCallback = (function (_super) {
        __extends(ContactResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IContactResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.Contact[]
           @param onWarningFunction Function receiving parameters of type: Adaptive.Contact[], Adaptive.IContactResultCallbackWarning
        */
        function ContactResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: ContactResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: ContactResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: ContactResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        ContactResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: ContactResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           This method is called on Result

           @param contacts returned by the platform
           @since ARP1.0
        */
        ContactResultCallback.prototype.onResult = function (contacts) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: ContactResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(contacts);
            }
        };
        /**
           This method is called on Warning

           @param contacts returned by the platform
           @param warning  returned by the platform
           @since ARP1.0
        */
        ContactResultCallback.prototype.onWarning = function (contacts, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: ContactResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(contacts, warning);
            }
        };
        return ContactResultCallback;
    })(BaseCallback);
    Adaptive.ContactResultCallback = ContactResultCallback;
    /**
       DatabaseResultCallback control dictionary.
    */
    Adaptive.registeredDatabaseResultCallback = new Dictionary([]);
    /**
       DatabaseResultCallback global callback handlers.
    */
    function handleDatabaseResultCallbackError(id, error) {
        var callback = Adaptive.registeredDatabaseResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseResultCallback dictionary.");
        }
        else {
            Adaptive.registeredDatabaseResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleDatabaseResultCallbackError = handleDatabaseResultCallbackError;
    function handleDatabaseResultCallbackResult(id, database) {
        var callback = Adaptive.registeredDatabaseResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseResultCallback dictionary.");
        }
        else {
            Adaptive.registeredDatabaseResultCallback.remove("" + id);
            callback.onResult(database);
        }
    }
    Adaptive.handleDatabaseResultCallbackResult = handleDatabaseResultCallbackResult;
    function handleDatabaseResultCallbackWarning(id, database, warning) {
        var callback = Adaptive.registeredDatabaseResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseResultCallback dictionary.");
        }
        else {
            Adaptive.registeredDatabaseResultCallback.remove("" + id);
            callback.onWarning(database, warning);
        }
    }
    Adaptive.handleDatabaseResultCallbackWarning = handleDatabaseResultCallbackWarning;
    var DatabaseResultCallback = (function (_super) {
        __extends(DatabaseResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IDatabaseResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.Database
           @param onWarningFunction Function receiving parameters of type: Adaptive.Database, Adaptive.IDatabaseResultCallbackWarning
        */
        function DatabaseResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: DatabaseResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: DatabaseResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: DatabaseResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           Result callback for error responses

           @param error Returned error
           @since ARP1.0
        */
        DatabaseResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: DatabaseResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           Result callback for correct responses

           @param database Returns the database
           @since ARP1.0
        */
        DatabaseResultCallback.prototype.onResult = function (database) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: DatabaseResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(database);
            }
        };
        /**
           Result callback for warning responses

           @param database Returns the database
           @param warning  Returned Warning
           @since ARP1.0
        */
        DatabaseResultCallback.prototype.onWarning = function (database, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: DatabaseResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(database, warning);
            }
        };
        return DatabaseResultCallback;
    })(BaseCallback);
    Adaptive.DatabaseResultCallback = DatabaseResultCallback;
    /**
       DatabaseTableResultCallback control dictionary.
    */
    Adaptive.registeredDatabaseTableResultCallback = new Dictionary([]);
    /**
       DatabaseTableResultCallback global callback handlers.
    */
    function handleDatabaseTableResultCallbackError(id, error) {
        var callback = Adaptive.registeredDatabaseTableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseTableResultCallback dictionary.");
        }
        else {
            Adaptive.registeredDatabaseTableResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleDatabaseTableResultCallbackError = handleDatabaseTableResultCallbackError;
    function handleDatabaseTableResultCallbackResult(id, databaseTable) {
        var callback = Adaptive.registeredDatabaseTableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseTableResultCallback dictionary.");
        }
        else {
            Adaptive.registeredDatabaseTableResultCallback.remove("" + id);
            callback.onResult(databaseTable);
        }
    }
    Adaptive.handleDatabaseTableResultCallbackResult = handleDatabaseTableResultCallbackResult;
    function handleDatabaseTableResultCallbackWarning(id, databaseTable, warning) {
        var callback = Adaptive.registeredDatabaseTableResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredDatabaseTableResultCallback dictionary.");
        }
        else {
            Adaptive.registeredDatabaseTableResultCallback.remove("" + id);
            callback.onWarning(databaseTable, warning);
        }
    }
    Adaptive.handleDatabaseTableResultCallbackWarning = handleDatabaseTableResultCallbackWarning;
    var DatabaseTableResultCallback = (function (_super) {
        __extends(DatabaseTableResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IDatabaseTableResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.DatabaseTable
           @param onWarningFunction Function receiving parameters of type: Adaptive.DatabaseTable, Adaptive.IDatabaseTableResultCallbackWarning
        */
        function DatabaseTableResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: DatabaseTableResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: DatabaseTableResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: DatabaseTableResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           Result callback for error responses

           @param error Returned error
           @since ARP1.0
        */
        DatabaseTableResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           Result callback for correct responses

           @param databaseTable Returns the databaseTable
           @since ARP1.0
        */
        DatabaseTableResultCallback.prototype.onResult = function (databaseTable) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(databaseTable);
            }
        };
        /**
           Result callback for warning responses

           @param databaseTable Returns the databaseTable
           @param warning       Returned Warning
           @since ARP1.0
        */
        DatabaseTableResultCallback.prototype.onWarning = function (databaseTable, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: DatabaseTableResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(databaseTable, warning);
            }
        };
        return DatabaseTableResultCallback;
    })(BaseCallback);
    Adaptive.DatabaseTableResultCallback = DatabaseTableResultCallback;
    /**
       FileDataLoadResultCallback control dictionary.
    */
    Adaptive.registeredFileDataLoadResultCallback = new Dictionary([]);
    /**
       FileDataLoadResultCallback global callback handlers.
    */
    function handleFileDataLoadResultCallbackError(id, error) {
        var callback = Adaptive.registeredFileDataLoadResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileDataLoadResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileDataLoadResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleFileDataLoadResultCallbackError = handleFileDataLoadResultCallbackError;
    function handleFileDataLoadResultCallbackResult(id, data) {
        var callback = Adaptive.registeredFileDataLoadResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileDataLoadResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileDataLoadResultCallback.remove("" + id);
            callback.onResult(data);
        }
    }
    Adaptive.handleFileDataLoadResultCallbackResult = handleFileDataLoadResultCallbackResult;
    function handleFileDataLoadResultCallbackWarning(id, data, warning) {
        var callback = Adaptive.registeredFileDataLoadResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileDataLoadResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileDataLoadResultCallback.remove("" + id);
            callback.onWarning(data, warning);
        }
    }
    Adaptive.handleFileDataLoadResultCallbackWarning = handleFileDataLoadResultCallbackWarning;
    var FileDataLoadResultCallback = (function (_super) {
        __extends(FileDataLoadResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IFileDataLoadResultCallbackError
           @param onResultFunction Function receiving parameters of type: number[]
           @param onWarningFunction Function receiving parameters of type: number[], Adaptive.IFileDataLoadResultCallbackWarning
        */
        function FileDataLoadResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: FileDataLoadResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: FileDataLoadResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: FileDataLoadResultCallback onWarningFunction is not defined.");
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
        FileDataLoadResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           Result of data retrieval operation.

           @param data Data loaded.
           @since ARP1.0
        */
        FileDataLoadResultCallback.prototype.onResult = function (data) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(data);
            }
        };
        /**
           Result with warning of data retrieval/storage operation.

           @param data    File being loaded.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        FileDataLoadResultCallback.prototype.onWarning = function (data, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: FileDataLoadResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(data, warning);
            }
        };
        return FileDataLoadResultCallback;
    })(BaseCallback);
    Adaptive.FileDataLoadResultCallback = FileDataLoadResultCallback;
    /**
       FileDataStoreResultCallback control dictionary.
    */
    Adaptive.registeredFileDataStoreResultCallback = new Dictionary([]);
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

           @param onErrorFunction Function receiving parameters of type: Adaptive.IFileDataStoreResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor
           @param onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor, Adaptive.IFileDataStoreResultCallbackWarning
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
    })(BaseCallback);
    Adaptive.FileDataStoreResultCallback = FileDataStoreResultCallback;
    /**
       FileListResultCallback control dictionary.
    */
    Adaptive.registeredFileListResultCallback = new Dictionary([]);
    /**
       FileListResultCallback global callback handlers.
    */
    function handleFileListResultCallbackError(id, error) {
        var callback = Adaptive.registeredFileListResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileListResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileListResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleFileListResultCallbackError = handleFileListResultCallbackError;
    function handleFileListResultCallbackResult(id, files) {
        var callback = Adaptive.registeredFileListResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileListResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileListResultCallback.remove("" + id);
            callback.onResult(files);
        }
    }
    Adaptive.handleFileListResultCallbackResult = handleFileListResultCallbackResult;
    function handleFileListResultCallbackWarning(id, files, warning) {
        var callback = Adaptive.registeredFileListResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileListResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileListResultCallback.remove("" + id);
            callback.onWarning(files, warning);
        }
    }
    Adaptive.handleFileListResultCallbackWarning = handleFileListResultCallbackWarning;
    var FileListResultCallback = (function (_super) {
        __extends(FileListResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IFileListResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor[]
           @param onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor[], Adaptive.IFileListResultCallbackWarning
        */
        function FileListResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: FileListResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: FileListResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: FileListResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           On error result of a file operation.

           @param error Error processing the request.
           @since ARP1.0
        */
        FileListResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: FileListResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           On correct result of a file operation.

           @param files Array of resulting files/folders.
           @since ARP1.0
        */
        FileListResultCallback.prototype.onResult = function (files) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: FileListResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(files);
            }
        };
        /**
           On partial result of a file operation, containing a warning.

           @param files   Array of resulting files/folders.
           @param warning Warning condition encountered.
           @since ARP1.0
        */
        FileListResultCallback.prototype.onWarning = function (files, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: FileListResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(files, warning);
            }
        };
        return FileListResultCallback;
    })(BaseCallback);
    Adaptive.FileListResultCallback = FileListResultCallback;
    /**
       FileResultCallback control dictionary.
    */
    Adaptive.registeredFileResultCallback = new Dictionary([]);
    /**
       FileResultCallback global callback handlers.
    */
    function handleFileResultCallbackError(id, error) {
        var callback = Adaptive.registeredFileResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleFileResultCallbackError = handleFileResultCallbackError;
    function handleFileResultCallbackResult(id, storageFile) {
        var callback = Adaptive.registeredFileResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileResultCallback.remove("" + id);
            callback.onResult(storageFile);
        }
    }
    Adaptive.handleFileResultCallbackResult = handleFileResultCallbackResult;
    function handleFileResultCallbackWarning(id, file, warning) {
        var callback = Adaptive.registeredFileResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredFileResultCallback dictionary.");
        }
        else {
            Adaptive.registeredFileResultCallback.remove("" + id);
            callback.onWarning(file, warning);
        }
    }
    Adaptive.handleFileResultCallbackWarning = handleFileResultCallbackWarning;
    var FileResultCallback = (function (_super) {
        __extends(FileResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IFileResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.FileDescriptor
           @param onWarningFunction Function receiving parameters of type: Adaptive.FileDescriptor, Adaptive.IFileResultCallbackWarning
        */
        function FileResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: FileResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: FileResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: FileResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           On error result of a file operation.

           @param error Error processing the request.
           @since ARP1.0
        */
        FileResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: FileResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           On correct result of a file operation.

           @param storageFile Reference to the resulting file.
           @since ARP1.0
        */
        FileResultCallback.prototype.onResult = function (storageFile) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: FileResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(storageFile);
            }
        };
        /**
           On partial result of a file operation, containing a warning.

           @param file    Reference to the offending file.
           @param warning Warning processing the request.
           @since ARP1.0
        */
        FileResultCallback.prototype.onWarning = function (file, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: FileResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(file, warning);
            }
        };
        return FileResultCallback;
    })(BaseCallback);
    Adaptive.FileResultCallback = FileResultCallback;
    /**
       MessagingCallback control dictionary.
    */
    Adaptive.registeredMessagingCallback = new Dictionary([]);
    /**
       MessagingCallback global callback handlers.
    */
    function handleMessagingCallbackError(id, error) {
        var callback = Adaptive.registeredMessagingCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredMessagingCallback dictionary.");
        }
        else {
            Adaptive.registeredMessagingCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleMessagingCallbackError = handleMessagingCallbackError;
    function handleMessagingCallbackResult(id, success) {
        var callback = Adaptive.registeredMessagingCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredMessagingCallback dictionary.");
        }
        else {
            Adaptive.registeredMessagingCallback.remove("" + id);
            callback.onResult(success);
        }
    }
    Adaptive.handleMessagingCallbackResult = handleMessagingCallbackResult;
    function handleMessagingCallbackWarning(id, success, warning) {
        var callback = Adaptive.registeredMessagingCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredMessagingCallback dictionary.");
        }
        else {
            Adaptive.registeredMessagingCallback.remove("" + id);
            callback.onWarning(success, warning);
        }
    }
    Adaptive.handleMessagingCallbackWarning = handleMessagingCallbackWarning;
    var MessagingCallback = (function (_super) {
        __extends(MessagingCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IMessagingCallbackError
           @param onResultFunction Function receiving parameters of type: boolean
           @param onWarningFunction Function receiving parameters of type: boolean, Adaptive.IMessagingCallbackWarning
        */
        function MessagingCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: MessagingCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: MessagingCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: MessagingCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        MessagingCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: MessagingCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           This method is called on Result

           @param success true if sent;false otherwise
           @since ARP1.0
        */
        MessagingCallback.prototype.onResult = function (success) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: MessagingCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(success);
            }
        };
        /**
           This method is called on Warning

           @param success true if sent;false otherwise
           @param warning returned by the platform
           @since ARP1.0
        */
        MessagingCallback.prototype.onWarning = function (success, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: MessagingCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(success, warning);
            }
        };
        return MessagingCallback;
    })(BaseCallback);
    Adaptive.MessagingCallback = MessagingCallback;
    /**
       NetworkReachabilityCallback control dictionary.
    */
    Adaptive.registeredNetworkReachabilityCallback = new Dictionary([]);
    /**
       NetworkReachabilityCallback global callback handlers.
    */
    function handleNetworkReachabilityCallbackError(id, error) {
        var callback = Adaptive.registeredNetworkReachabilityCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredNetworkReachabilityCallback dictionary.");
        }
        else {
            Adaptive.registeredNetworkReachabilityCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleNetworkReachabilityCallbackError = handleNetworkReachabilityCallbackError;
    function handleNetworkReachabilityCallbackResult(id, reachable) {
        var callback = Adaptive.registeredNetworkReachabilityCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredNetworkReachabilityCallback dictionary.");
        }
        else {
            Adaptive.registeredNetworkReachabilityCallback.remove("" + id);
            callback.onResult(reachable);
        }
    }
    Adaptive.handleNetworkReachabilityCallbackResult = handleNetworkReachabilityCallbackResult;
    function handleNetworkReachabilityCallbackWarning(id, reachable, warning) {
        var callback = Adaptive.registeredNetworkReachabilityCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredNetworkReachabilityCallback dictionary.");
        }
        else {
            Adaptive.registeredNetworkReachabilityCallback.remove("" + id);
            callback.onWarning(reachable, warning);
        }
    }
    Adaptive.handleNetworkReachabilityCallbackWarning = handleNetworkReachabilityCallbackWarning;
    var NetworkReachabilityCallback = (function (_super) {
        __extends(NetworkReachabilityCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.INetworkReachabilityCallbackError
           @param onResultFunction Function receiving parameters of type: boolean
           @param onWarningFunction Function receiving parameters of type: boolean, Adaptive.INetworkReachabilityCallbackWarning
        */
        function NetworkReachabilityCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: NetworkReachabilityCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: NetworkReachabilityCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: NetworkReachabilityCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           No data received - error condition, not authorized .

           @param error Error value
           @since ARP1.0
        */
        NetworkReachabilityCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           Correct data received.

           @param reachable Indicates if the host is reachable
           @since ARP1.0
        */
        NetworkReachabilityCallback.prototype.onResult = function (reachable) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(reachable);
            }
        };
        /**
           Data received with warning - ie Found entries with existing key and values have been overriden

           @param reachable Indicates if the host is reachable
           @param warning   Warning value
           @since ARP1.0
        */
        NetworkReachabilityCallback.prototype.onWarning = function (reachable, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: NetworkReachabilityCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(reachable, warning);
            }
        };
        return NetworkReachabilityCallback;
    })(BaseCallback);
    Adaptive.NetworkReachabilityCallback = NetworkReachabilityCallback;
    /**
       SecurityResultCallback control dictionary.
    */
    Adaptive.registeredSecurityResultCallback = new Dictionary([]);
    /**
       SecurityResultCallback global callback handlers.
    */
    function handleSecurityResultCallbackError(id, error) {
        var callback = Adaptive.registeredSecurityResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredSecurityResultCallback dictionary.");
        }
        else {
            Adaptive.registeredSecurityResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleSecurityResultCallbackError = handleSecurityResultCallbackError;
    function handleSecurityResultCallbackResult(id, keyValues) {
        var callback = Adaptive.registeredSecurityResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredSecurityResultCallback dictionary.");
        }
        else {
            Adaptive.registeredSecurityResultCallback.remove("" + id);
            callback.onResult(keyValues);
        }
    }
    Adaptive.handleSecurityResultCallbackResult = handleSecurityResultCallbackResult;
    function handleSecurityResultCallbackWarning(id, keyValues, warning) {
        var callback = Adaptive.registeredSecurityResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredSecurityResultCallback dictionary.");
        }
        else {
            Adaptive.registeredSecurityResultCallback.remove("" + id);
            callback.onWarning(keyValues, warning);
        }
    }
    Adaptive.handleSecurityResultCallbackWarning = handleSecurityResultCallbackWarning;
    var SecurityResultCallback = (function (_super) {
        __extends(SecurityResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.ISecurityResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.SecureKeyPair[]
           @param onWarningFunction Function receiving parameters of type: Adaptive.SecureKeyPair[], Adaptive.ISecurityResultCallbackWarning
        */
        function SecurityResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: SecurityResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: SecurityResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: SecurityResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           No data received - error condition, not authorized .

           @param error Error values
           @since ARP1.0
        */
        SecurityResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: SecurityResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           Correct data received.

           @param keyValues key and values
           @since ARP1.0
        */
        SecurityResultCallback.prototype.onResult = function (keyValues) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: SecurityResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(keyValues);
            }
        };
        /**
           Data received with warning - ie Found entries with existing key and values have been overriden

           @param keyValues key and values
           @param warning   Warning values
           @since ARP1.0
        */
        SecurityResultCallback.prototype.onWarning = function (keyValues, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: SecurityResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(keyValues, warning);
            }
        };
        return SecurityResultCallback;
    })(BaseCallback);
    Adaptive.SecurityResultCallback = SecurityResultCallback;
    /**
       ServiceResultCallback control dictionary.
    */
    Adaptive.registeredServiceResultCallback = new Dictionary([]);
    /**
       ServiceResultCallback global callback handlers.
    */
    function handleServiceResultCallbackError(id, error) {
        var callback = Adaptive.registeredServiceResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredServiceResultCallback dictionary.");
        }
        else {
            Adaptive.registeredServiceResultCallback.remove("" + id);
            callback.onError(error);
        }
    }
    Adaptive.handleServiceResultCallbackError = handleServiceResultCallbackError;
    function handleServiceResultCallbackResult(id, response) {
        var callback = Adaptive.registeredServiceResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredServiceResultCallback dictionary.");
        }
        else {
            Adaptive.registeredServiceResultCallback.remove("" + id);
            callback.onResult(response);
        }
    }
    Adaptive.handleServiceResultCallbackResult = handleServiceResultCallbackResult;
    function handleServiceResultCallbackWarning(id, response, warning) {
        var callback = Adaptive.registeredServiceResultCallback["" + id];
        if (typeof callback === 'undefined' || callback == null) {
            console.error("ERROR: No callback with id " + id + " registered in registeredServiceResultCallback dictionary.");
        }
        else {
            Adaptive.registeredServiceResultCallback.remove("" + id);
            callback.onWarning(response, warning);
        }
    }
    Adaptive.handleServiceResultCallbackWarning = handleServiceResultCallbackWarning;
    var ServiceResultCallback = (function (_super) {
        __extends(ServiceResultCallback, _super);
        /**
           Constructor with anonymous handler functions for callback.

           @param onErrorFunction Function receiving parameters of type: Adaptive.IServiceResultCallbackError
           @param onResultFunction Function receiving parameters of type: Adaptive.ServiceResponse
           @param onWarningFunction Function receiving parameters of type: Adaptive.ServiceResponse, Adaptive.IServiceResultCallbackWarning
        */
        function ServiceResultCallback(onErrorFunction, onResultFunction, onWarningFunction) {
            _super.call(this, ++Adaptive.registeredCounter);
            if (onErrorFunction == null) {
                console.error("ERROR: ServiceResultCallback onErrorFunction is not defined.");
            }
            else {
                this.onErrorFunction = onErrorFunction;
            }
            if (onResultFunction == null) {
                console.error("ERROR: ServiceResultCallback onResultFunction is not defined.");
            }
            else {
                this.onResultFunction = onResultFunction;
            }
            if (onWarningFunction == null) {
                console.error("ERROR: ServiceResultCallback onWarningFunction is not defined.");
            }
            else {
                this.onWarningFunction = onWarningFunction;
            }
        }
        /**
           This method is called on Error

           @param error returned by the platform
           @since ARP1.0
        */
        ServiceResultCallback.prototype.onError = function (error) {
            if (typeof this.onErrorFunction === 'undefined' || this.onErrorFunction == null) {
                console.warn("WARNING: ServiceResultCallback contains a null reference to onErrorFunction.");
            }
            else {
                this.onErrorFunction(error);
            }
        };
        /**
           This method is called on Result

           @param response data
           @since ARP1.0
        */
        ServiceResultCallback.prototype.onResult = function (response) {
            if (typeof this.onResultFunction === 'undefined' || this.onResultFunction == null) {
                console.warn("WARNING: ServiceResultCallback contains a null reference to onResultFunction.");
            }
            else {
                this.onResultFunction(response);
            }
        };
        /**
           This method is called on Warning

           @param response data
           @param warning  returned by the platform
           @since ARP1.0
        */
        ServiceResultCallback.prototype.onWarning = function (response, warning) {
            if (typeof this.onWarningFunction === 'undefined' || this.onWarningFunction == null) {
                console.warn("WARNING: ServiceResultCallback contains a null reference to onWarningFunction.");
            }
            else {
                this.onWarningFunction(response, warning);
            }
        };
        return ServiceResultCallback;
    })(BaseCallback);
    Adaptive.ServiceResultCallback = ServiceResultCallback;
    /**
       @class Adaptive.BaseApplicationBridge
       @extends Adaptive.IBaseApplication
       Base application for Application purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseApplicationBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseApplicationBridge() {
            this.apiGroup = IAdaptiveRPGroup.Application;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseApplicationBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseApplicationBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseApplicationBridge;
    })();
    Adaptive.BaseApplicationBridge = BaseApplicationBridge;
    /**
       @class Adaptive.BaseCommerceBridge
       @extends Adaptive.IBaseCommerce
       Base application for Commerce purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseCommerceBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseCommerceBridge() {
            this.apiGroup = IAdaptiveRPGroup.Commerce;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseCommerceBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseCommerceBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseCommerceBridge;
    })();
    Adaptive.BaseCommerceBridge = BaseCommerceBridge;
    /**
       @class Adaptive.BaseCommunicationBridge
       @extends Adaptive.IBaseCommunication
       Base application for Communication purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseCommunicationBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseCommunicationBridge() {
            this.apiGroup = IAdaptiveRPGroup.Communication;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseCommunicationBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseCommunicationBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseCommunicationBridge;
    })();
    Adaptive.BaseCommunicationBridge = BaseCommunicationBridge;
    /**
       @class Adaptive.BaseDataBridge
       @extends Adaptive.IBaseData
       Base application for Data purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseDataBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseDataBridge() {
            this.apiGroup = IAdaptiveRPGroup.Data;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseDataBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseDataBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseDataBridge;
    })();
    Adaptive.BaseDataBridge = BaseDataBridge;
    /**
       @class Adaptive.BaseMediaBridge
       @extends Adaptive.IBaseMedia
       Base application for Media purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseMediaBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseMediaBridge() {
            this.apiGroup = IAdaptiveRPGroup.Media;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseMediaBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseMediaBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseMediaBridge;
    })();
    Adaptive.BaseMediaBridge = BaseMediaBridge;
    /**
       @class Adaptive.BaseNotificationBridge
       @extends Adaptive.IBaseNotification
       Base application for Notification purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseNotificationBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseNotificationBridge() {
            this.apiGroup = IAdaptiveRPGroup.Notification;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseNotificationBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseNotificationBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseNotificationBridge;
    })();
    Adaptive.BaseNotificationBridge = BaseNotificationBridge;
    /**
       @class Adaptive.BasePIMBridge
       @extends Adaptive.IBasePIM
       Base application for PIM purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BasePIMBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BasePIMBridge() {
            this.apiGroup = IAdaptiveRPGroup.PIM;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BasePIMBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BasePIMBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BasePIMBridge;
    })();
    Adaptive.BasePIMBridge = BasePIMBridge;
    /**
       @class Adaptive.BaseReaderBridge
       @extends Adaptive.IBaseReader
       Base application for Reader purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseReaderBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseReaderBridge() {
            this.apiGroup = IAdaptiveRPGroup.Reader;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseReaderBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseReaderBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseReaderBridge;
    })();
    Adaptive.BaseReaderBridge = BaseReaderBridge;
    /**
       @class Adaptive.BaseSecurityBridge
       @extends Adaptive.IBaseSecurity
       Base application for Security purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseSecurityBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseSecurityBridge() {
            this.apiGroup = IAdaptiveRPGroup.Security;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseSecurityBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseSecurityBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseSecurityBridge;
    })();
    Adaptive.BaseSecurityBridge = BaseSecurityBridge;
    /**
       @class Adaptive.BaseSensorBridge
       @extends Adaptive.IBaseSensor
       Base application for Sensor purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseSensorBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseSensorBridge() {
            this.apiGroup = IAdaptiveRPGroup.Sensor;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseSensorBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseSensorBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseSensorBridge;
    })();
    Adaptive.BaseSensorBridge = BaseSensorBridge;
    /**
       @class Adaptive.BaseSocialBridge
       @extends Adaptive.IBaseSocial
       Base application for Social purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseSocialBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseSocialBridge() {
            this.apiGroup = IAdaptiveRPGroup.Social;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseSocialBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseSocialBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseSocialBridge;
    })();
    Adaptive.BaseSocialBridge = BaseSocialBridge;
    /**
       @class Adaptive.BaseSystemBridge
       @extends Adaptive.IBaseSystem
       Base application for System purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseSystemBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseSystemBridge() {
            this.apiGroup = IAdaptiveRPGroup.System;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseSystemBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseSystemBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseSystemBridge;
    })();
    Adaptive.BaseSystemBridge = BaseSystemBridge;
    /**
       @class Adaptive.BaseUIBridge
       @extends Adaptive.IBaseUI
       Base application for UI purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseUIBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseUIBridge() {
            this.apiGroup = IAdaptiveRPGroup.UI;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseUIBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseUIBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseUIBridge;
    })();
    Adaptive.BaseUIBridge = BaseUIBridge;
    /**
       @class Adaptive.BaseUtilBridge
       @extends Adaptive.IBaseUtil
       Base application for Utility purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BaseUtilBridge = (function () {
        /**
           @method constructor
           Default constructor.
        */
        function BaseUtilBridge() {
            this.apiGroup = IAdaptiveRPGroup.Util;
        }
        /**
           @method
           Return the API group for the given interface.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        BaseUtilBridge.prototype.getAPIGroup = function () {
            return this.apiGroup;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        BaseUtilBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        return BaseUtilBridge;
    })();
    Adaptive.BaseUtilBridge = BaseUtilBridge;
    /**
       @class Adaptive.AnalyticsBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Analytics purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var AnalyticsBridge = (function (_super) {
        __extends(AnalyticsBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function AnalyticsBridge() {
            _super.call(this);
        }
        return AnalyticsBridge;
    })(BaseApplicationBridge);
    Adaptive.AnalyticsBridge = AnalyticsBridge;
    /**
       @class Adaptive.GlobalizationBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Globalization results

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var GlobalizationBridge = (function (_super) {
        __extends(GlobalizationBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function GlobalizationBridge() {
            _super.call(this);
        }
        /**
           Returns the default locale of the application defined in the configuration file

           @return {Adaptive.Locale} Default Locale of the application
           @since ARP1.0
        */
        GlobalizationBridge.prototype.getDefaultLocale = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IGlobalization", "getDefaultLocale", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = Locale.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'GlobalizationBridge.getDefaultLocale' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'GlobalizationBridge.getDefaultLocale' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GlobalizationBridge.getDefaultLocale' request.");
            }
            return response;
        };
        /**
           List of supported locales for the application defined in the configuration file

           @return {Adaptive.Locale[]} List of locales
           @since ARP1.0
        */
        GlobalizationBridge.prototype.getLocaleSupportedDescriptors = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IGlobalization", "getLocaleSupportedDescriptors", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = new Array();
                        for (var __value__ in JSON.parse(apiResponse.getResponse())) {
                            response.push(Locale.toObject(__value__));
                        }
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'GlobalizationBridge.getLocaleSupportedDescriptors' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'GlobalizationBridge.getLocaleSupportedDescriptors' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GlobalizationBridge.getLocaleSupportedDescriptors' request.");
            }
            return response;
        };
        /**
           Gets the text/message corresponding to the given key and locale.

           @param key    to match text
           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return {string} Localized text.
           @since ARP1.0
        */
        GlobalizationBridge.prototype.getResourceLiteral = function (key, locale) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(key));
            arParams.push(JSON.stringify(locale));
            var apiRequest = new APIRequest("IGlobalization", "getResourceLiteral", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'GlobalizationBridge.getResourceLiteral' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'GlobalizationBridge.getResourceLiteral' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GlobalizationBridge.getResourceLiteral' request.");
            }
            return response;
        };
        /**
           Gets the full application configured literals (key/message pairs) corresponding to the given locale.

           @param locale The locale object to get localized message, or the locale desciptor ("language" or "language-country" two-letters ISO codes.
           @return {Adaptive.KeyPair[]} Localized texts in the form of an object.
           @since ARP1.0
        */
        GlobalizationBridge.prototype.getResourceLiterals = function (locale) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(locale));
            var apiRequest = new APIRequest("IGlobalization", "getResourceLiterals", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = new Array();
                        for (var __value__ in JSON.parse(apiResponse.getResponse())) {
                            response.push(KeyPair.toObject(__value__));
                        }
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'GlobalizationBridge.getResourceLiterals' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'GlobalizationBridge.getResourceLiterals' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GlobalizationBridge.getResourceLiterals' request.");
            }
            return response;
        };
        return GlobalizationBridge;
    })(BaseApplicationBridge);
    Adaptive.GlobalizationBridge = GlobalizationBridge;
    /**
       @class Adaptive.LifecycleBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Lifecycle listeners

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var LifecycleBridge = (function (_super) {
        __extends(LifecycleBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function LifecycleBridge() {
            _super.call(this);
        }
        /**
           Add the listener for the lifecycle of the app

           @param listener Lifecycle listener
           @since ARP1.0
        */
        LifecycleBridge.prototype.addLifecycleListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("ILifecycle", "addLifecycleListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add listener reference to local dictionary.
            Adaptive.registeredLifecycleListener.add("" + listener.getId(), listener);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove listener reference from local dictionary due to invalid response.
                        Adaptive.registeredLifecycleListener.remove("" + listener.getId());
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'LifecycleBridge.addLifecycleListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove listener reference from local dictionary due to invalid response.
                    Adaptive.registeredLifecycleListener.remove("" + listener.getId());
                    console.error("ERROR: 'LifecycleBridge.addLifecycleListener' incorrect response received.");
                }
            }
            else {
                // Remove listener reference from local dictionary due to invalid response.
                Adaptive.registeredLifecycleListener.remove("" + listener.getId());
                console.error("ERROR: " + xhr.status + " sending 'LifecycleBridge.addLifecycleListener' request.");
            }
        };
        /**
           Whether the application is in background or not

           @return {boolean} true if the application is in background;false otherwise
           @since ARP1.0
        */
        LifecycleBridge.prototype.isBackground = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("ILifecycle", "isBackground", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'LifecycleBridge.isBackground' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'LifecycleBridge.isBackground' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'LifecycleBridge.isBackground' request.");
            }
            return response;
        };
        /**
           Un-registers an existing listener from receiving lifecycle events.

           @param listener Lifecycle listener
           @since ARP1.0
        */
        LifecycleBridge.prototype.removeLifecycleListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("ILifecycle", "removeLifecycleListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove listener reference from local dictionary.
                        Adaptive.registeredLifecycleListener.remove("" + listener.getId());
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'LifecycleBridge.removeLifecycleListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'LifecycleBridge.removeLifecycleListener' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'LifecycleBridge.removeLifecycleListener' request.");
            }
        };
        /**
           Removes all existing listeners from receiving lifecycle events.

           @since ARP1.0
        */
        LifecycleBridge.prototype.removeLifecycleListeners = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("ILifecycle", "removeLifecycleListeners", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove all listeners references from local dictionary.
                        var keys = Adaptive.registeredLifecycleListener.keys();
                        for (var key in keys) {
                            Adaptive.registeredLifecycleListener.remove(key);
                        }
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'LifecycleBridge.removeLifecycleListeners' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'LifecycleBridge.removeLifecycleListeners' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'LifecycleBridge.removeLifecycleListeners' request.");
            }
        };
        return LifecycleBridge;
    })(BaseApplicationBridge);
    Adaptive.LifecycleBridge = LifecycleBridge;
    /**
       @class Adaptive.ManagementBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Management operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var ManagementBridge = (function (_super) {
        __extends(ManagementBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function ManagementBridge() {
            _super.call(this);
        }
        return ManagementBridge;
    })(BaseApplicationBridge);
    Adaptive.ManagementBridge = ManagementBridge;
    /**
       @class Adaptive.PrintingBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Printing operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var PrintingBridge = (function (_super) {
        __extends(PrintingBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function PrintingBridge() {
            _super.call(this);
        }
        return PrintingBridge;
    })(BaseApplicationBridge);
    Adaptive.PrintingBridge = PrintingBridge;
    /**
       @class Adaptive.SettingsBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Settings operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var SettingsBridge = (function (_super) {
        __extends(SettingsBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function SettingsBridge() {
            _super.call(this);
        }
        return SettingsBridge;
    })(BaseApplicationBridge);
    Adaptive.SettingsBridge = SettingsBridge;
    /**
       @class Adaptive.UpdateBridge
       @extends Adaptive.BaseApplicationBridge
       Interface for Managing the Update operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var UpdateBridge = (function (_super) {
        __extends(UpdateBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function UpdateBridge() {
            _super.call(this);
        }
        return UpdateBridge;
    })(BaseApplicationBridge);
    Adaptive.UpdateBridge = UpdateBridge;
    /**
       @class Adaptive.AdsBridge
       @extends Adaptive.BaseCommerceBridge
       Interface for Advertising purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var AdsBridge = (function (_super) {
        __extends(AdsBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function AdsBridge() {
            _super.call(this);
        }
        return AdsBridge;
    })(BaseCommerceBridge);
    Adaptive.AdsBridge = AdsBridge;
    /**
       @class Adaptive.StoreBridge
       @extends Adaptive.BaseCommerceBridge
       Interface for Managing the Store operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var StoreBridge = (function (_super) {
        __extends(StoreBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function StoreBridge() {
            _super.call(this);
        }
        return StoreBridge;
    })(BaseCommerceBridge);
    Adaptive.StoreBridge = StoreBridge;
    /**
       @class Adaptive.WalletBridge
       @extends Adaptive.BaseCommerceBridge
       Interface for Managing the Wallet operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var WalletBridge = (function (_super) {
        __extends(WalletBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function WalletBridge() {
            _super.call(this);
        }
        return WalletBridge;
    })(BaseCommerceBridge);
    Adaptive.WalletBridge = WalletBridge;
    /**
       @class Adaptive.BluetoothBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Bluetooth purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BluetoothBridge = (function (_super) {
        __extends(BluetoothBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function BluetoothBridge() {
            _super.call(this);
        }
        return BluetoothBridge;
    })(BaseCommunicationBridge);
    Adaptive.BluetoothBridge = BluetoothBridge;
    /**
       @class Adaptive.NetworkInfoBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Network information operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NetworkInfoBridge = (function (_super) {
        __extends(NetworkInfoBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function NetworkInfoBridge() {
            _super.call(this);
        }
        return NetworkInfoBridge;
    })(BaseCommunicationBridge);
    Adaptive.NetworkInfoBridge = NetworkInfoBridge;
    /**
       @class Adaptive.NetworkNamingBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Network naming operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NetworkNamingBridge = (function (_super) {
        __extends(NetworkNamingBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function NetworkNamingBridge() {
            _super.call(this);
        }
        return NetworkNamingBridge;
    })(BaseCommunicationBridge);
    Adaptive.NetworkNamingBridge = NetworkNamingBridge;
    /**
       @class Adaptive.NetworkReachabilityBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Network reachability operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NetworkReachabilityBridge = (function (_super) {
        __extends(NetworkReachabilityBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function NetworkReachabilityBridge() {
            _super.call(this);
        }
        /**
           Whether there is connectivity to a host, via domain name or ip address, or not.

           @param host     domain name or ip address of host.
           @param callback Callback called at the end.
           @since ARP1.0
        */
        NetworkReachabilityBridge.prototype.isNetworkReachable = function (host, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(host));
            var apiRequest = new APIRequest("INetworkReachability", "isNetworkReachable", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredNetworkReachabilityCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredNetworkReachabilityCallback.remove("" + callback.getId());
                        callback.onError(INetworkReachabilityCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'NetworkReachabilityBridge.isNetworkReachable' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredNetworkReachabilityCallback.remove("" + callback.getId());
                    callback.onError(INetworkReachabilityCallbackError.Unknown);
                    console.error("ERROR: 'NetworkReachabilityBridge.isNetworkReachable' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredNetworkReachabilityCallback.remove("" + callback.getId());
                callback.onError(INetworkReachabilityCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'NetworkReachabilityBridge.isNetworkReachable' request.");
            }
        };
        /**
           Whether there is connectivity to an url of a service or not.

           @param url      to look for
           @param callback Callback called at the end
           @since ARP1.0
        */
        NetworkReachabilityBridge.prototype.isNetworkServiceReachable = function (url, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(url));
            var apiRequest = new APIRequest("INetworkReachability", "isNetworkServiceReachable", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredNetworkReachabilityCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredNetworkReachabilityCallback.remove("" + callback.getId());
                        callback.onError(INetworkReachabilityCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'NetworkReachabilityBridge.isNetworkServiceReachable' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredNetworkReachabilityCallback.remove("" + callback.getId());
                    callback.onError(INetworkReachabilityCallbackError.Unknown);
                    console.error("ERROR: 'NetworkReachabilityBridge.isNetworkServiceReachable' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredNetworkReachabilityCallback.remove("" + callback.getId());
                callback.onError(INetworkReachabilityCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'NetworkReachabilityBridge.isNetworkServiceReachable' request.");
            }
        };
        return NetworkReachabilityBridge;
    })(BaseCommunicationBridge);
    Adaptive.NetworkReachabilityBridge = NetworkReachabilityBridge;
    /**
       @class Adaptive.NetworkStatusBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Network status

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NetworkStatusBridge = (function (_super) {
        __extends(NetworkStatusBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function NetworkStatusBridge() {
            _super.call(this);
        }
        /**
           Add the listener for network status changes of the app

           @param listener Listener with the result
           @since ARP1.0
        */
        NetworkStatusBridge.prototype.addNetworkStatusListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("INetworkStatus", "addNetworkStatusListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add listener reference to local dictionary.
            Adaptive.registeredNetworkStatusListener.add("" + listener.getId(), listener);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove listener reference from local dictionary due to invalid response.
                        Adaptive.registeredNetworkStatusListener.remove("" + listener.getId());
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'NetworkStatusBridge.addNetworkStatusListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove listener reference from local dictionary due to invalid response.
                    Adaptive.registeredNetworkStatusListener.remove("" + listener.getId());
                    console.error("ERROR: 'NetworkStatusBridge.addNetworkStatusListener' incorrect response received.");
                }
            }
            else {
                // Remove listener reference from local dictionary due to invalid response.
                Adaptive.registeredNetworkStatusListener.remove("" + listener.getId());
                console.error("ERROR: " + xhr.status + " sending 'NetworkStatusBridge.addNetworkStatusListener' request.");
            }
        };
        /**
           Un-registers an existing listener from receiving network status events.

           @param listener Listener with the result
           @since ARP1.0
        */
        NetworkStatusBridge.prototype.removeNetworkStatusListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("INetworkStatus", "removeNetworkStatusListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove listener reference from local dictionary.
                        Adaptive.registeredNetworkStatusListener.remove("" + listener.getId());
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'NetworkStatusBridge.removeNetworkStatusListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'NetworkStatusBridge.removeNetworkStatusListener' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'NetworkStatusBridge.removeNetworkStatusListener' request.");
            }
        };
        /**
           Removes all existing listeners from receiving network status events.

           @since ARP1.0
        */
        NetworkStatusBridge.prototype.removeNetworkStatusListeners = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("INetworkStatus", "removeNetworkStatusListeners", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove all listeners references from local dictionary.
                        var keys = Adaptive.registeredNetworkStatusListener.keys();
                        for (var key in keys) {
                            Adaptive.registeredNetworkStatusListener.remove(key);
                        }
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'NetworkStatusBridge.removeNetworkStatusListeners' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'NetworkStatusBridge.removeNetworkStatusListeners' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'NetworkStatusBridge.removeNetworkStatusListeners' request.");
            }
        };
        return NetworkStatusBridge;
    })(BaseCommunicationBridge);
    Adaptive.NetworkStatusBridge = NetworkStatusBridge;
    /**
       @class Adaptive.ServiceBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Services operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var ServiceBridge = (function (_super) {
        __extends(ServiceBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function ServiceBridge() {
            _super.call(this);
        }
        /**
           Get a reference to a registered service by name.

           @param serviceName Name of service.
           @return {Adaptive.Service} A service, if registered, or null of the service does not exist.
           @since ARP1.0
        */
        ServiceBridge.prototype.getService = function (serviceName) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(serviceName));
            var apiRequest = new APIRequest("IService", "getService", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = Service.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ServiceBridge.getService' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'ServiceBridge.getService' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.getService' request.");
            }
            return response;
        };
        /**
           Request async a service for an Url

           @param serviceRequest Service Request to invoke
           @param service        Service to call
           @param callback       Callback to execute with the result
           @since ARP1.0
        */
        ServiceBridge.prototype.invokeService = function (serviceRequest, service, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(serviceRequest));
            arParams.push(JSON.stringify(service));
            var apiRequest = new APIRequest("IService", "invokeService", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredServiceResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredServiceResultCallback.remove("" + callback.getId());
                        callback.onError(IServiceResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ServiceBridge.invokeService' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredServiceResultCallback.remove("" + callback.getId());
                    callback.onError(IServiceResultCallbackError.Unknown);
                    console.error("ERROR: 'ServiceBridge.invokeService' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredServiceResultCallback.remove("" + callback.getId());
                callback.onError(IServiceResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.invokeService' request.");
            }
        };
        /**
           Register a new service

           @param service to register
           @since ARP1.0
        */
        ServiceBridge.prototype.registerService = function (service) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(service));
            var apiRequest = new APIRequest("IService", "registerService", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.registerService' request.");
            }
        };
        /**
           Unregister a service

           @param service to unregister
           @since ARP1.0
        */
        ServiceBridge.prototype.unregisterService = function (service) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(service));
            var apiRequest = new APIRequest("IService", "unregisterService", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.unregisterService' request.");
            }
        };
        /**
           Unregister all services.

           @since ARP1.0
        */
        ServiceBridge.prototype.unregisterServices = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IService", "unregisterServices", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.unregisterServices' request.");
            }
        };
        /**
           Check whether a service by the given service is already registered.

           @param service Service to check
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        ServiceBridge.prototype.isRegistered_service = function (service) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(service));
            var apiRequest = new APIRequest("IService", "isRegistered_service", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ServiceBridge.isRegistered_service' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'ServiceBridge.isRegistered_service' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.isRegistered_service' request.");
            }
            return response;
        };
        /**
           Check whether a service by the given name is registered.

           @param serviceName Name of service.
           @return True if the service is registered, false otherwise.
           @since ARP1.0
        */
        ServiceBridge.prototype.isRegistered_serviceName = function (serviceName) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(serviceName));
            var apiRequest = new APIRequest("IService", "isRegistered_serviceName", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ServiceBridge.isRegistered_serviceName' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'ServiceBridge.isRegistered_serviceName' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ServiceBridge.isRegistered_serviceName' request.");
            }
            return response;
        };
        return ServiceBridge;
    })(BaseCommunicationBridge);
    Adaptive.ServiceBridge = ServiceBridge;
    /**
       @class Adaptive.SocketBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Socket operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var SocketBridge = (function (_super) {
        __extends(SocketBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function SocketBridge() {
            _super.call(this);
        }
        return SocketBridge;
    })(BaseCommunicationBridge);
    Adaptive.SocketBridge = SocketBridge;
    /**
       @class Adaptive.TelephonyBridge
       @extends Adaptive.BaseCommunicationBridge
       Interface for Managing the Telephony operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var TelephonyBridge = (function (_super) {
        __extends(TelephonyBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function TelephonyBridge() {
            _super.call(this);
        }
        /**
           Invoke a phone call

           @param number to call
           @return {Adaptive.ITelephonyStatus} Status of the call
           @since ARP1.0
        */
        TelephonyBridge.prototype.call = function (number) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(number));
            var apiRequest = new APIRequest("ITelephony", "call", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = ITelephonyStatus.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'TelephonyBridge.call' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'TelephonyBridge.call' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'TelephonyBridge.call' request.");
            }
            return response;
        };
        return TelephonyBridge;
    })(BaseCommunicationBridge);
    Adaptive.TelephonyBridge = TelephonyBridge;
    /**
       @class Adaptive.CloudBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the Cloud operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var CloudBridge = (function (_super) {
        __extends(CloudBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function CloudBridge() {
            _super.call(this);
        }
        return CloudBridge;
    })(BaseDataBridge);
    Adaptive.CloudBridge = CloudBridge;
    /**
       @class Adaptive.DataStreamBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the DataStream operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var DataStreamBridge = (function (_super) {
        __extends(DataStreamBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function DataStreamBridge() {
            _super.call(this);
        }
        return DataStreamBridge;
    })(BaseDataBridge);
    Adaptive.DataStreamBridge = DataStreamBridge;
    /**
       @class Adaptive.DatabaseBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the Cloud operations

       @author Ferran Vila Conesa
       @since ARP1.0
    */
    var DatabaseBridge = (function (_super) {
        __extends(DatabaseBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function DatabaseBridge() {
            _super.call(this);
        }
        /**
           Creates a database on default path for every platform.

           @param callback Asynchronous callback
           @param database Database object to create
           @since ARP1.0
        */
        DatabaseBridge.prototype.createDatabase = function (database, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var apiRequest = new APIRequest("IDatabase", "createDatabase", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                        callback.onError(IDatabaseResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.createDatabase' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                    callback.onError(IDatabaseResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.createDatabase' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                callback.onError(IDatabaseResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.createDatabase' request.");
            }
        };
        /**
           Creates a databaseTable inside a database for every platform.

           @param database      Database for databaseTable creating.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        DatabaseBridge.prototype.createTable = function (database, databaseTable, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var apiRequest = new APIRequest("IDatabase", "createTable", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                        callback.onError(IDatabaseTableResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.createTable' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.createTable' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(IDatabaseTableResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.createTable' request.");
            }
        };
        /**
           Deletes a database on default path for every platform.

           @param database Database object to delete
           @param callback Asynchronous callback
           @since ARP1.0
        */
        DatabaseBridge.prototype.deleteDatabase = function (database, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var apiRequest = new APIRequest("IDatabase", "deleteDatabase", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                        callback.onError(IDatabaseResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.deleteDatabase' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                    callback.onError(IDatabaseResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.deleteDatabase' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                callback.onError(IDatabaseResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.deleteDatabase' request.");
            }
        };
        /**
           Deletes a databaseTable inside a database for every platform.

           @param database      Database for databaseTable removal.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        DatabaseBridge.prototype.deleteTable = function (database, databaseTable, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var apiRequest = new APIRequest("IDatabase", "deleteTable", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                        callback.onError(IDatabaseTableResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.deleteTable' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.deleteTable' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(IDatabaseTableResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.deleteTable' request.");
            }
        };
        /**
           Executes SQL statement into the given database. The replacements
should be passed as a parameter

           @param database     The database object reference.
           @param statement    SQL statement.
           @param replacements List of SQL statement replacements.
           @param callback     DatabaseTable callback with the response.
           @since ARP1.0
        */
        DatabaseBridge.prototype.executeSqlStatement = function (database, statement, replacements, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(statement));
            arParams.push(JSON.stringify(replacements));
            var apiRequest = new APIRequest("IDatabase", "executeSqlStatement", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                        callback.onError(IDatabaseTableResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.executeSqlStatement' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.executeSqlStatement' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(IDatabaseTableResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.executeSqlStatement' request.");
            }
        };
        /**
           Executes SQL transaction (some statements chain) inside given database.

           @param database     The database object reference.
           @param statements   The statements to be executed during transaction.
           @param rollbackFlag Indicates if rollback should be performed when any
                  statement execution fails.
           @param callback     DatabaseTable callback with the response.
           @since ARP1.0
        */
        DatabaseBridge.prototype.executeSqlTransactions = function (database, statements, rollbackFlag, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(statements));
            arParams.push(JSON.stringify(rollbackFlag));
            var apiRequest = new APIRequest("IDatabase", "executeSqlTransactions", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                        callback.onError(IDatabaseTableResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.executeSqlTransactions' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                    callback.onError(IDatabaseTableResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.executeSqlTransactions' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(IDatabaseTableResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.executeSqlTransactions' request.");
            }
        };
        /**
           Checks if database exists by given database name.

           @param database Database Object to check if exists
           @return {boolean} True if exists, false otherwise
           @since ARP1.0
        */
        DatabaseBridge.prototype.existsDatabase = function (database) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var apiRequest = new APIRequest("IDatabase", "existsDatabase", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.existsDatabase' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DatabaseBridge.existsDatabase' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.existsDatabase' request.");
            }
            return response;
        };
        /**
           Checks if databaseTable exists by given database name.

           @param database      Database for databaseTable consulting.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @return {boolean} True if exists, false otherwise
           @since ARP1.0
        */
        DatabaseBridge.prototype.existsTable = function (database, databaseTable) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var apiRequest = new APIRequest("IDatabase", "existsTable", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.existsTable' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DatabaseBridge.existsTable' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.existsTable' request.");
            }
            return response;
        };
        return DatabaseBridge;
    })(BaseDataBridge);
    Adaptive.DatabaseBridge = DatabaseBridge;
    /**
       @class Adaptive.FileBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the File operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var FileBridge = (function (_super) {
        __extends(FileBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function FileBridge() {
            _super.call(this);
        }
        /**
           Determine whether the current file/folder can be read from.

           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the folder/file is readable, false otherwise.
           @since ARP1.0
        */
        FileBridge.prototype.canRead = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "canRead", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.canRead' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.canRead' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.canRead' request.");
            }
            return response;
        };
        /**
           Determine whether the current file/folder can be written to.

           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the folder/file is writable, false otherwise.
           @since ARP1.0
        */
        FileBridge.prototype.canWrite = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "canWrite", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.canWrite' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.canWrite' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.canWrite' request.");
            }
            return response;
        };
        /**
           Creates a file with the specified name.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        FileBridge.prototype.create = function (descriptor, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "create", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredFileResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredFileResultCallback.remove("" + callback.getId());
                        callback.onError(IFileResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.create' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredFileResultCallback.remove("" + callback.getId());
                    callback.onError(IFileResultCallbackError.Unknown);
                    console.error("ERROR: 'FileBridge.create' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileResultCallback.remove("" + callback.getId());
                callback.onError(IFileResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.create' request.");
            }
        };
        /**
           Deletes the given file or path. If the file is a directory and contains files and or subdirectories, these will be
deleted if the cascade parameter is set to true.

           @param descriptor File descriptor of file or folder used for operation.
           @param cascade    Whether to delete sub-files and sub-folders.
           @return {boolean} True if files (and sub-files and folders) whether deleted.
           @since ARP1.0
        */
        FileBridge.prototype.delete = function (descriptor, cascade) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            arParams.push(JSON.stringify(cascade));
            var apiRequest = new APIRequest("IFile", "delete", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.delete' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.delete' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.delete' request.");
            }
            return response;
        };
        /**
           Check whether the file/path exists.

           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} True if the file exists in the filesystem, false otherwise.
           @since ARP1.0
        */
        FileBridge.prototype.exists = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "exists", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.exists' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.exists' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.exists' request.");
            }
            return response;
        };
        /**
           Loads the content of the file.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        FileBridge.prototype.getContent = function (descriptor, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "getContent", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredFileDataLoadResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredFileDataLoadResultCallback.remove("" + callback.getId());
                        callback.onError(IFileDataLoadResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.getContent' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredFileDataLoadResultCallback.remove("" + callback.getId());
                    callback.onError(IFileDataLoadResultCallbackError.Unknown);
                    console.error("ERROR: 'FileBridge.getContent' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileDataLoadResultCallback.remove("" + callback.getId());
                callback.onError(IFileDataLoadResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.getContent' request.");
            }
        };
        /**
           Returns the file storage type of the file

           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemStorageType} Storage Type file
           @since ARP1.0
        */
        FileBridge.prototype.getFileStorageType = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "getFileStorageType", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = IFileSystemStorageType.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.getFileStorageType' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.getFileStorageType' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.getFileStorageType' request.");
            }
            return response;
        };
        /**
           Returns the file type

           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemType} Returns the file type of the file
           @since ARP1.0
        */
        FileBridge.prototype.getFileType = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "getFileType", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = IFileSystemType.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.getFileType' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.getFileType' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.getFileType' request.");
            }
            return response;
        };
        /**
           Returns the security type of the file

           @param descriptor File descriptor of file or folder used for operation.
           @return {Adaptive.IFileSystemSecurity} Security Level of the file
           @since ARP1.0
        */
        FileBridge.prototype.getSecurityType = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "getSecurityType", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = IFileSystemSecurity.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.getSecurityType' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.getSecurityType' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.getSecurityType' request.");
            }
            return response;
        };
        /**
           Check whether this is a path of a file.

           @param descriptor File descriptor of file or folder used for operation.
           @return {boolean} true if this is a path to a folder/directory, false if this is a path to a file.
           @since ARP1.0
        */
        FileBridge.prototype.isDirectory = function (descriptor) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "isDirectory", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.isDirectory' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.isDirectory' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.isDirectory' request.");
            }
            return response;
        };
        /**
           List all the files contained within this file/path reference. If the reference is a file, it will not yield
any results.

           @param descriptor File descriptor of file or folder used for operation.
           @param callback   Result of operation.
           @since ARP1.0
        */
        FileBridge.prototype.listFiles = function (descriptor, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            var apiRequest = new APIRequest("IFile", "listFiles", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredFileListResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredFileListResultCallback.remove("" + callback.getId());
                        callback.onError(IFileListResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.listFiles' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredFileListResultCallback.remove("" + callback.getId());
                    callback.onError(IFileListResultCallbackError.Unknown);
                    console.error("ERROR: 'FileBridge.listFiles' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileListResultCallback.remove("" + callback.getId());
                callback.onError(IFileListResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.listFiles' request.");
            }
        };
        /**
           List all the files matching the speficied regex filter within this file/path reference. If the reference
is a file, it will not yield any results.

           @param descriptor File descriptor of file or folder used for operation.
           @param regex      Filter (eg. *.jpg, *.png, Fil*) name string.
           @param callback   Result of operation.
           @since ARP1.0
        */
        FileBridge.prototype.listFilesForRegex = function (descriptor, regex, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            arParams.push(JSON.stringify(regex));
            var apiRequest = new APIRequest("IFile", "listFilesForRegex", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredFileListResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredFileListResultCallback.remove("" + callback.getId());
                        callback.onError(IFileListResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.listFilesForRegex' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredFileListResultCallback.remove("" + callback.getId());
                    callback.onError(IFileListResultCallbackError.Unknown);
                    console.error("ERROR: 'FileBridge.listFilesForRegex' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileListResultCallback.remove("" + callback.getId());
                callback.onError(IFileListResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.listFilesForRegex' request.");
            }
        };
        /**
           Creates the parent path (or paths, if recursive) to the given file/path if it doesn't already exist.

           @param descriptor File descriptor of file or folder used for operation.
           @param recursive  Whether to create all parent path elements.
           @return {boolean} True if the path was created, false otherwise (or it exists already).
           @since ARP1.0
        */
        FileBridge.prototype.mkDir = function (descriptor, recursive) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            arParams.push(JSON.stringify(recursive));
            var apiRequest = new APIRequest("IFile", "mkDir", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.mkDir' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileBridge.mkDir' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.mkDir' request.");
            }
            return response;
        };
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
        FileBridge.prototype.move = function (source, destination, createPath, overwrite, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(source));
            arParams.push(JSON.stringify(destination));
            arParams.push(JSON.stringify(createPath));
            arParams.push(JSON.stringify(overwrite));
            var apiRequest = new APIRequest("IFile", "move", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredFileResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredFileResultCallback.remove("" + callback.getId());
                        callback.onError(IFileResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.move' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredFileResultCallback.remove("" + callback.getId());
                    callback.onError(IFileResultCallbackError.Unknown);
                    console.error("ERROR: 'FileBridge.move' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileResultCallback.remove("" + callback.getId());
                callback.onError(IFileResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.move' request.");
            }
        };
        /**
           Sets the content of the file.

           @param descriptor File descriptor of file or folder used for operation.
           @param content    Binary content to store in the file.
           @param callback   Result of the operation.
           @since ARP1.0
        */
        FileBridge.prototype.setContent = function (descriptor, content, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(descriptor));
            arParams.push(JSON.stringify(content));
            var apiRequest = new APIRequest("IFile", "setContent", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredFileDataStoreResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredFileDataStoreResultCallback.remove("" + callback.getId());
                        callback.onError(IFileDataStoreResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileBridge.setContent' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredFileDataStoreResultCallback.remove("" + callback.getId());
                    callback.onError(IFileDataStoreResultCallbackError.Unknown);
                    console.error("ERROR: 'FileBridge.setContent' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredFileDataStoreResultCallback.remove("" + callback.getId());
                callback.onError(IFileDataStoreResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'FileBridge.setContent' request.");
            }
        };
        return FileBridge;
    })(BaseDataBridge);
    Adaptive.FileBridge = FileBridge;
    /**
       @class Adaptive.FileSystemBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the File System operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var FileSystemBridge = (function (_super) {
        __extends(FileSystemBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function FileSystemBridge() {
            _super.call(this);
        }
        /**
           Creates a new reference to a new or existing location in the filesystem.
This method does not create the actual file in the specified folder.

           @param parent Parent directory.
           @param name   Name of new file or directory.
           @return {Adaptive.FileDescriptor} A reference to a new or existing location in the filesystem.
           @since ARP1.0
        */
        FileSystemBridge.prototype.createFileDescriptor = function (parent, name) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(parent));
            arParams.push(JSON.stringify(name));
            var apiRequest = new APIRequest("IFileSystem", "createFileDescriptor", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileSystemBridge.createFileDescriptor' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileSystemBridge.createFileDescriptor' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileSystemBridge.createFileDescriptor' request.");
            }
            return response;
        };
        /**
           Returns a reference to the cache folder for the current application.
This path must always be writable by the current application.
This path is volatile and may be cleaned by the OS periodically.

           @return {Adaptive.FileDescriptor} Path to the application's cache folder.
           @since ARP1.0
        */
        FileSystemBridge.prototype.getApplicationCacheFolder = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IFileSystem", "getApplicationCacheFolder", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileSystemBridge.getApplicationCacheFolder' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileSystemBridge.getApplicationCacheFolder' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileSystemBridge.getApplicationCacheFolder' request.");
            }
            return response;
        };
        /**
           Returns a reference to the cloud synchronizable folder for the current application.
This path must always be writable by the current application.

           @return {Adaptive.FileDescriptor} Path to the application's cloud storage folder.
           @since ARP1.0
        */
        FileSystemBridge.prototype.getApplicationCloudFolder = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IFileSystem", "getApplicationCloudFolder", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileSystemBridge.getApplicationCloudFolder' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileSystemBridge.getApplicationCloudFolder' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileSystemBridge.getApplicationCloudFolder' request.");
            }
            return response;
        };
        /**
           Returns a reference to the documents folder for the current application.
This path must always be writable by the current application.

           @return {Adaptive.FileDescriptor} Path to the application's documents folder.
           @since ARP1.0
        */
        FileSystemBridge.prototype.getApplicationDocumentsFolder = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IFileSystem", "getApplicationDocumentsFolder", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileSystemBridge.getApplicationDocumentsFolder' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileSystemBridge.getApplicationDocumentsFolder' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileSystemBridge.getApplicationDocumentsFolder' request.");
            }
            return response;
        };
        /**
           Returns a reference to the application installation folder.
This path may or may not be directly readable or writable - it usually contains the app binary and data.

           @return {Adaptive.FileDescriptor} Path to the application folder.
           @since ARP1.0
        */
        FileSystemBridge.prototype.getApplicationFolder = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IFileSystem", "getApplicationFolder", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileSystemBridge.getApplicationFolder' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileSystemBridge.getApplicationFolder' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileSystemBridge.getApplicationFolder' request.");
            }
            return response;
        };
        /**
           Returns a reference to the protected storage folder for the current application.
This path must always be writable by the current application.

           @return {Adaptive.FileDescriptor} Path to the application's protected storage folder.
           @since ARP1.0
        */
        FileSystemBridge.prototype.getApplicationProtectedFolder = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IFileSystem", "getApplicationProtectedFolder", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileSystemBridge.getApplicationProtectedFolder' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileSystemBridge.getApplicationProtectedFolder' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileSystemBridge.getApplicationProtectedFolder' request.");
            }
            return response;
        };
        /**
           Returns the file system dependent file separator.

           @return {string} char with the directory/file separator.
           @since ARP1.0
        */
        FileSystemBridge.prototype.getSeparator = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IFileSystem", "getSeparator", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileSystemBridge.getSeparator' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileSystemBridge.getSeparator' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileSystemBridge.getSeparator' request.");
            }
            return response;
        };
        /**
           Returns a reference to the external storage folder provided by the OS. This may
be an external SSD card or similar. This type of storage is removable and by
definition, not secure.
This path may or may not be writable by the current application.

           @return {Adaptive.FileDescriptor} Path to the application's documents folder.
           @since ARP1.0
        */
        FileSystemBridge.prototype.getSystemExternalFolder = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IFileSystem", "getSystemExternalFolder", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = FileDescriptor.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'FileSystemBridge.getSystemExternalFolder' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'FileSystemBridge.getSystemExternalFolder' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'FileSystemBridge.getSystemExternalFolder' request.");
            }
            return response;
        };
        return FileSystemBridge;
    })(BaseDataBridge);
    Adaptive.FileSystemBridge = FileSystemBridge;
    /**
       @class Adaptive.InternalStorageBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the Internal Storage operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var InternalStorageBridge = (function (_super) {
        __extends(InternalStorageBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function InternalStorageBridge() {
            _super.call(this);
        }
        return InternalStorageBridge;
    })(BaseDataBridge);
    Adaptive.InternalStorageBridge = InternalStorageBridge;
    /**
       @class Adaptive.XMLBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the XML operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var XMLBridge = (function (_super) {
        __extends(XMLBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function XMLBridge() {
            _super.call(this);
        }
        return XMLBridge;
    })(BaseDataBridge);
    Adaptive.XMLBridge = XMLBridge;
    /**
       @class Adaptive.AudioBridge
       @extends Adaptive.BaseMediaBridge
       Interface for Audio purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var AudioBridge = (function (_super) {
        __extends(AudioBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function AudioBridge() {
            _super.call(this);
        }
        return AudioBridge;
    })(BaseMediaBridge);
    Adaptive.AudioBridge = AudioBridge;
    /**
       @class Adaptive.CameraBridge
       @extends Adaptive.BaseMediaBridge
       Interface for Managing the camera operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var CameraBridge = (function (_super) {
        __extends(CameraBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function CameraBridge() {
            _super.call(this);
        }
        return CameraBridge;
    })(BaseMediaBridge);
    Adaptive.CameraBridge = CameraBridge;
    /**
       @class Adaptive.ImagingBridge
       @extends Adaptive.BaseMediaBridge
       Interface for Managing the Imaging operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var ImagingBridge = (function (_super) {
        __extends(ImagingBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function ImagingBridge() {
            _super.call(this);
        }
        return ImagingBridge;
    })(BaseMediaBridge);
    Adaptive.ImagingBridge = ImagingBridge;
    /**
       @class Adaptive.VideoBridge
       @extends Adaptive.BaseMediaBridge
       Interface for Managing the Video operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var VideoBridge = (function (_super) {
        __extends(VideoBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function VideoBridge() {
            _super.call(this);
        }
        /**
           Play url video stream

           @param url of the video
           @since ARP1.0
        */
        VideoBridge.prototype.playStream = function (url) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(url));
            var apiRequest = new APIRequest("IVideo", "playStream", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'VideoBridge.playStream' request.");
            }
        };
        return VideoBridge;
    })(BaseMediaBridge);
    Adaptive.VideoBridge = VideoBridge;
    /**
       @class Adaptive.AlarmBridge
       @extends Adaptive.BaseNotificationBridge
       Interface for Alarm purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var AlarmBridge = (function (_super) {
        __extends(AlarmBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function AlarmBridge() {
            _super.call(this);
        }
        return AlarmBridge;
    })(BaseNotificationBridge);
    Adaptive.AlarmBridge = AlarmBridge;
    /**
       @class Adaptive.NotificationBridge
       @extends Adaptive.BaseNotificationBridge
       Interface for Managing the Notification operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NotificationBridge = (function (_super) {
        __extends(NotificationBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function NotificationBridge() {
            _super.call(this);
        }
        return NotificationBridge;
    })(BaseNotificationBridge);
    Adaptive.NotificationBridge = NotificationBridge;
    /**
       @class Adaptive.NotificationLocalBridge
       @extends Adaptive.BaseNotificationBridge
       Interface for Managing the Local Notifications operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NotificationLocalBridge = (function (_super) {
        __extends(NotificationLocalBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function NotificationLocalBridge() {
            _super.call(this);
        }
        return NotificationLocalBridge;
    })(BaseNotificationBridge);
    Adaptive.NotificationLocalBridge = NotificationLocalBridge;
    /**
       @class Adaptive.VibrationBridge
       @extends Adaptive.BaseNotificationBridge
       Interface for Managing the Vibration operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var VibrationBridge = (function (_super) {
        __extends(VibrationBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function VibrationBridge() {
            _super.call(this);
        }
        return VibrationBridge;
    })(BaseNotificationBridge);
    Adaptive.VibrationBridge = VibrationBridge;
    /**
       @class Adaptive.CalendarBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Calendar operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var CalendarBridge = (function (_super) {
        __extends(CalendarBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function CalendarBridge() {
            _super.call(this);
        }
        return CalendarBridge;
    })(BasePIMBridge);
    Adaptive.CalendarBridge = CalendarBridge;
    /**
       @class Adaptive.ContactBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Contact operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var ContactBridge = (function (_super) {
        __extends(ContactBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function ContactBridge() {
            _super.call(this);
        }
        /**
           Get all the details of a contact according to its id

           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        ContactBridge.prototype.getContact = function (contact, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(contact));
            var apiRequest = new APIRequest("IContact", "getContact", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredContactResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                        callback.onError(IContactResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ContactBridge.getContact' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown);
                    console.error("ERROR: 'ContactBridge.getContact' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                callback.onError(IContactResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'ContactBridge.getContact' request.");
            }
        };
        /**
           Get the contact photo

           @param contact  id to search for
           @param callback called for return
           @since ARP1.0
        */
        ContactBridge.prototype.getContactPhoto = function (contact, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(contact));
            var apiRequest = new APIRequest("IContact", "getContactPhoto", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredContactPhotoResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredContactPhotoResultCallback.remove("" + callback.getId());
                        callback.onError(IContactPhotoResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ContactBridge.getContactPhoto' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredContactPhotoResultCallback.remove("" + callback.getId());
                    callback.onError(IContactPhotoResultCallbackError.Unknown);
                    console.error("ERROR: 'ContactBridge.getContactPhoto' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredContactPhotoResultCallback.remove("" + callback.getId());
                callback.onError(IContactPhotoResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'ContactBridge.getContactPhoto' request.");
            }
        };
        /**
           Get all contacts

           @param callback called for return
           @since ARP1.0
        */
        ContactBridge.prototype.getContacts = function (callback) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IContact", "getContacts", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredContactResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                        callback.onError(IContactResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ContactBridge.getContacts' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown);
                    console.error("ERROR: 'ContactBridge.getContacts' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                callback.onError(IContactResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'ContactBridge.getContacts' request.");
            }
        };
        /**
           Get marked fields of all contacts

           @param callback called for return
           @param fields   to get for each Contact
           @since ARP1.0
        */
        ContactBridge.prototype.getContactsForFields = function (callback, fields) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(fields));
            var apiRequest = new APIRequest("IContact", "getContactsForFields", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredContactResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                        callback.onError(IContactResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ContactBridge.getContactsForFields' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown);
                    console.error("ERROR: 'ContactBridge.getContactsForFields' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                callback.onError(IContactResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'ContactBridge.getContactsForFields' request.");
            }
        };
        /**
           Get marked fields of all contacts according to a filter

           @param callback called for return
           @param fields   to get for each Contact
           @param filter   to search for
           @since ARP1.0
        */
        ContactBridge.prototype.getContactsWithFilter = function (callback, fields, filter) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(fields));
            arParams.push(JSON.stringify(filter));
            var apiRequest = new APIRequest("IContact", "getContactsWithFilter", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredContactResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                        callback.onError(IContactResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ContactBridge.getContactsWithFilter' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown);
                    console.error("ERROR: 'ContactBridge.getContactsWithFilter' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                callback.onError(IContactResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'ContactBridge.getContactsWithFilter' request.");
            }
        };
        /**
           Search contacts according to a term and send it to the callback

           @param term     string to search
           @param callback called for return
           @since ARP1.0
        */
        ContactBridge.prototype.searchContacts = function (term, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(term));
            var apiRequest = new APIRequest("IContact", "searchContacts", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredContactResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                        callback.onError(IContactResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ContactBridge.searchContacts' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown);
                    console.error("ERROR: 'ContactBridge.searchContacts' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                callback.onError(IContactResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'ContactBridge.searchContacts' request.");
            }
        };
        /**
           Search contacts according to a term with a filter and send it to the callback

           @param term     string to search
           @param callback called for return
           @param filter   to search for
           @since ARP1.0
        */
        ContactBridge.prototype.searchContactsWithFilter = function (term, callback, filter) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(term));
            arParams.push(JSON.stringify(filter));
            var apiRequest = new APIRequest("IContact", "searchContactsWithFilter", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredContactResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                        callback.onError(IContactResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ContactBridge.searchContactsWithFilter' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                    callback.onError(IContactResultCallbackError.Unknown);
                    console.error("ERROR: 'ContactBridge.searchContactsWithFilter' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredContactResultCallback.remove("" + callback.getId());
                callback.onError(IContactResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'ContactBridge.searchContactsWithFilter' request.");
            }
        };
        /**
           Set the contact photo

           @param contact  id to assign the photo
           @param pngImage photo as byte array
           @return {boolean} true if set is successful;false otherwise
           @since ARP1.0
        */
        ContactBridge.prototype.setContactPhoto = function (contact, pngImage) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(contact));
            arParams.push(JSON.stringify(pngImage));
            var apiRequest = new APIRequest("IContact", "setContactPhoto", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'ContactBridge.setContactPhoto' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'ContactBridge.setContactPhoto' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'ContactBridge.setContactPhoto' request.");
            }
            return response;
        };
        return ContactBridge;
    })(BasePIMBridge);
    Adaptive.ContactBridge = ContactBridge;
    /**
       @class Adaptive.MailBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Mail operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var MailBridge = (function (_super) {
        __extends(MailBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function MailBridge() {
            _super.call(this);
        }
        /**
           Send an Email

           @param data     Payload of the email
           @param callback Result callback of the operation
           @since ARP1.0
        */
        MailBridge.prototype.sendEmail = function (data, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(data));
            var apiRequest = new APIRequest("IMail", "sendEmail", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredMessagingCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                        callback.onError(IMessagingCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'MailBridge.sendEmail' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                    callback.onError(IMessagingCallbackError.Unknown);
                    console.error("ERROR: 'MailBridge.sendEmail' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                callback.onError(IMessagingCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'MailBridge.sendEmail' request.");
            }
        };
        return MailBridge;
    })(BasePIMBridge);
    Adaptive.MailBridge = MailBridge;
    /**
       @class Adaptive.MessagingBridge
       @extends Adaptive.BasePIMBridge
       Interface for Managing the Messaging operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var MessagingBridge = (function (_super) {
        __extends(MessagingBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function MessagingBridge() {
            _super.call(this);
        }
        /**
           Send text SMS

           @param number   to send
           @param text     to send
           @param callback with the result
           @since ARP1.0
        */
        MessagingBridge.prototype.sendSMS = function (number, text, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(number));
            arParams.push(JSON.stringify(text));
            var apiRequest = new APIRequest("IMessaging", "sendSMS", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredMessagingCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                        callback.onError(IMessagingCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'MessagingBridge.sendSMS' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                    callback.onError(IMessagingCallbackError.Unknown);
                    console.error("ERROR: 'MessagingBridge.sendSMS' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredMessagingCallback.remove("" + callback.getId());
                callback.onError(IMessagingCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'MessagingBridge.sendSMS' request.");
            }
        };
        return MessagingBridge;
    })(BasePIMBridge);
    Adaptive.MessagingBridge = MessagingBridge;
    /**
       @class Adaptive.BarcodeBridge
       @extends Adaptive.BaseReaderBridge
       Interface for Barcode Reading purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BarcodeBridge = (function (_super) {
        __extends(BarcodeBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function BarcodeBridge() {
            _super.call(this);
        }
        return BarcodeBridge;
    })(BaseReaderBridge);
    Adaptive.BarcodeBridge = BarcodeBridge;
    /**
       @class Adaptive.NFCBridge
       @extends Adaptive.BaseReaderBridge
       Interface for Managing the NFC operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var NFCBridge = (function (_super) {
        __extends(NFCBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function NFCBridge() {
            _super.call(this);
        }
        return NFCBridge;
    })(BaseReaderBridge);
    Adaptive.NFCBridge = NFCBridge;
    /**
       @class Adaptive.OCRBridge
       @extends Adaptive.BaseReaderBridge
       Interface for Managing the OCR operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var OCRBridge = (function (_super) {
        __extends(OCRBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function OCRBridge() {
            _super.call(this);
        }
        return OCRBridge;
    })(BaseReaderBridge);
    Adaptive.OCRBridge = OCRBridge;
    /**
       @class Adaptive.QRCodeBridge
       @extends Adaptive.BaseReaderBridge
       Interface for Managing the QR Code operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var QRCodeBridge = (function (_super) {
        __extends(QRCodeBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function QRCodeBridge() {
            _super.call(this);
        }
        return QRCodeBridge;
    })(BaseReaderBridge);
    Adaptive.QRCodeBridge = QRCodeBridge;
    /**
       @class Adaptive.OAuthBridge
       @extends Adaptive.BaseSecurityBridge
       Interface for Managing the OAuth operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var OAuthBridge = (function (_super) {
        __extends(OAuthBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function OAuthBridge() {
            _super.call(this);
        }
        return OAuthBridge;
    })(BaseSecurityBridge);
    Adaptive.OAuthBridge = OAuthBridge;
    /**
       @class Adaptive.OpenIdBridge
       @extends Adaptive.BaseSecurityBridge
       Interface for Managing the OpenID operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var OpenIdBridge = (function (_super) {
        __extends(OpenIdBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function OpenIdBridge() {
            _super.call(this);
        }
        return OpenIdBridge;
    })(BaseSecurityBridge);
    Adaptive.OpenIdBridge = OpenIdBridge;
    /**
       @class Adaptive.SecurityBridge
       @extends Adaptive.BaseSecurityBridge
       Interface for Managing the Security operations

       @author Aryslan
       @since ARP1.0
    */
    var SecurityBridge = (function (_super) {
        __extends(SecurityBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function SecurityBridge() {
            _super.call(this);
        }
        /**
           Deletes from the device internal storage the entry/entries containing the specified key names.

           @param keys             Array with the key names to delete.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        SecurityBridge.prototype.deleteSecureKeyValuePairs = function (keys, publicAccessName, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(keys));
            arParams.push(JSON.stringify(publicAccessName));
            var apiRequest = new APIRequest("ISecurity", "deleteSecureKeyValuePairs", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredSecurityResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                        callback.onError(ISecurityResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'SecurityBridge.deleteSecureKeyValuePairs' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown);
                    console.error("ERROR: 'SecurityBridge.deleteSecureKeyValuePairs' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                callback.onError(ISecurityResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'SecurityBridge.deleteSecureKeyValuePairs' request.");
            }
        };
        /**
           Retrieves from the device internal storage the entry/entries containing the specified key names.

           @param keys             Array with the key names to retrieve.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        SecurityBridge.prototype.getSecureKeyValuePairs = function (keys, publicAccessName, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(keys));
            arParams.push(JSON.stringify(publicAccessName));
            var apiRequest = new APIRequest("ISecurity", "getSecureKeyValuePairs", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredSecurityResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                        callback.onError(ISecurityResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'SecurityBridge.getSecureKeyValuePairs' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown);
                    console.error("ERROR: 'SecurityBridge.getSecureKeyValuePairs' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                callback.onError(ISecurityResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'SecurityBridge.getSecureKeyValuePairs' request.");
            }
        };
        /**
           Returns if the device has been modified in anyhow

           @return {boolean} true if the device has been modified; false otherwise
           @since ARP1.0
        */
        SecurityBridge.prototype.isDeviceModified = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("ISecurity", "isDeviceModified", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'SecurityBridge.isDeviceModified' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'SecurityBridge.isDeviceModified' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'SecurityBridge.isDeviceModified' request.");
            }
            return response;
        };
        /**
           Stores in the device internal storage the specified item/s.

           @param keyValues        Array containing the items to store on the device internal memory.
           @param publicAccessName The name of the shared internal storage object (if needed).
           @param callback         callback to be executed upon function result.
           @since ARP 1.0
        */
        SecurityBridge.prototype.setSecureKeyValuePairs = function (keyValues, publicAccessName, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(keyValues));
            arParams.push(JSON.stringify(publicAccessName));
            var apiRequest = new APIRequest("ISecurity", "setSecureKeyValuePairs", arParams, callback.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add callback reference to local dictionary.
            Adaptive.registeredSecurityResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                        callback.onError(ISecurityResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'SecurityBridge.setSecureKeyValuePairs' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                    callback.onError(ISecurityResultCallbackError.Unknown);
                    console.error("ERROR: 'SecurityBridge.setSecureKeyValuePairs' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredSecurityResultCallback.remove("" + callback.getId());
                callback.onError(ISecurityResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'SecurityBridge.setSecureKeyValuePairs' request.");
            }
        };
        return SecurityBridge;
    })(BaseSecurityBridge);
    Adaptive.SecurityBridge = SecurityBridge;
    /**
       @class Adaptive.AccelerationBridge
       @extends Adaptive.BaseSensorBridge
       Interface defining methods about the acceleration sensor

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var AccelerationBridge = (function (_super) {
        __extends(AccelerationBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function AccelerationBridge() {
            _super.call(this);
        }
        /**
           Register a new listener that will receive acceleration events.

           @param listener to be registered.
           @since ARP1.0
        */
        AccelerationBridge.prototype.addAccelerationListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IAcceleration", "addAccelerationListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add listener reference to local dictionary.
            Adaptive.registeredAccelerationListener.add("" + listener.getId(), listener);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove listener reference from local dictionary due to invalid response.
                        Adaptive.registeredAccelerationListener.remove("" + listener.getId());
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'AccelerationBridge.addAccelerationListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove listener reference from local dictionary due to invalid response.
                    Adaptive.registeredAccelerationListener.remove("" + listener.getId());
                    console.error("ERROR: 'AccelerationBridge.addAccelerationListener' incorrect response received.");
                }
            }
            else {
                // Remove listener reference from local dictionary due to invalid response.
                Adaptive.registeredAccelerationListener.remove("" + listener.getId());
                console.error("ERROR: " + xhr.status + " sending 'AccelerationBridge.addAccelerationListener' request.");
            }
        };
        /**
           De-registers an existing listener from receiving acceleration events.

           @param listener to be registered.
           @since ARP1.0
        */
        AccelerationBridge.prototype.removeAccelerationListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IAcceleration", "removeAccelerationListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove listener reference from local dictionary.
                        Adaptive.registeredAccelerationListener.remove("" + listener.getId());
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'AccelerationBridge.removeAccelerationListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'AccelerationBridge.removeAccelerationListener' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'AccelerationBridge.removeAccelerationListener' request.");
            }
        };
        /**
           Removed all existing listeners from receiving acceleration events.

           @since ARP1.0
        */
        AccelerationBridge.prototype.removeAccelerationListeners = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IAcceleration", "removeAccelerationListeners", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove all listeners references from local dictionary.
                        var keys = Adaptive.registeredAccelerationListener.keys();
                        for (var key in keys) {
                            Adaptive.registeredAccelerationListener.remove(key);
                        }
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'AccelerationBridge.removeAccelerationListeners' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'AccelerationBridge.removeAccelerationListeners' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'AccelerationBridge.removeAccelerationListeners' request.");
            }
        };
        return AccelerationBridge;
    })(BaseSensorBridge);
    Adaptive.AccelerationBridge = AccelerationBridge;
    /**
       @class Adaptive.AmbientLightBridge
       @extends Adaptive.BaseSensorBridge
       Interface for managinf the Ambient Light

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var AmbientLightBridge = (function (_super) {
        __extends(AmbientLightBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function AmbientLightBridge() {
            _super.call(this);
        }
        return AmbientLightBridge;
    })(BaseSensorBridge);
    Adaptive.AmbientLightBridge = AmbientLightBridge;
    /**
       @class Adaptive.BarometerBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Barometer management purposes

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var BarometerBridge = (function (_super) {
        __extends(BarometerBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function BarometerBridge() {
            _super.call(this);
        }
        return BarometerBridge;
    })(BaseSensorBridge);
    Adaptive.BarometerBridge = BarometerBridge;
    /**
       @class Adaptive.GeolocationBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Geolocation operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var GeolocationBridge = (function (_super) {
        __extends(GeolocationBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function GeolocationBridge() {
            _super.call(this);
        }
        /**
           Register a new listener that will receive geolocation events.

           @param listener to be registered.
           @since ARP1.0
        */
        GeolocationBridge.prototype.addGeolocationListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IGeolocation", "addGeolocationListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add listener reference to local dictionary.
            Adaptive.registeredGeolocationListener.add("" + listener.getId(), listener);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove listener reference from local dictionary due to invalid response.
                        Adaptive.registeredGeolocationListener.remove("" + listener.getId());
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'GeolocationBridge.addGeolocationListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove listener reference from local dictionary due to invalid response.
                    Adaptive.registeredGeolocationListener.remove("" + listener.getId());
                    console.error("ERROR: 'GeolocationBridge.addGeolocationListener' incorrect response received.");
                }
            }
            else {
                // Remove listener reference from local dictionary due to invalid response.
                Adaptive.registeredGeolocationListener.remove("" + listener.getId());
                console.error("ERROR: " + xhr.status + " sending 'GeolocationBridge.addGeolocationListener' request.");
            }
        };
        /**
           De-registers an existing listener from receiving geolocation events.

           @param listener to be registered.
           @since ARP1.0
        */
        GeolocationBridge.prototype.removeGeolocationListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IGeolocation", "removeGeolocationListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove listener reference from local dictionary.
                        Adaptive.registeredGeolocationListener.remove("" + listener.getId());
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'GeolocationBridge.removeGeolocationListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'GeolocationBridge.removeGeolocationListener' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GeolocationBridge.removeGeolocationListener' request.");
            }
        };
        /**
           Removed all existing listeners from receiving geolocation events.

           @since ARP1.0
        */
        GeolocationBridge.prototype.removeGeolocationListeners = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IGeolocation", "removeGeolocationListeners", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove all listeners references from local dictionary.
                        var keys = Adaptive.registeredGeolocationListener.keys();
                        for (var key in keys) {
                            Adaptive.registeredGeolocationListener.remove(key);
                        }
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'GeolocationBridge.removeGeolocationListeners' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'GeolocationBridge.removeGeolocationListeners' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'GeolocationBridge.removeGeolocationListeners' request.");
            }
        };
        return GeolocationBridge;
    })(BaseSensorBridge);
    Adaptive.GeolocationBridge = GeolocationBridge;
    /**
       @class Adaptive.GyroscopeBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Giroscope operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var GyroscopeBridge = (function (_super) {
        __extends(GyroscopeBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function GyroscopeBridge() {
            _super.call(this);
        }
        return GyroscopeBridge;
    })(BaseSensorBridge);
    Adaptive.GyroscopeBridge = GyroscopeBridge;
    /**
       @class Adaptive.MagnetometerBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Magnetometer operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var MagnetometerBridge = (function (_super) {
        __extends(MagnetometerBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function MagnetometerBridge() {
            _super.call(this);
        }
        return MagnetometerBridge;
    })(BaseSensorBridge);
    Adaptive.MagnetometerBridge = MagnetometerBridge;
    /**
       @class Adaptive.ProximityBridge
       @extends Adaptive.BaseSensorBridge
       Interface for Managing the Proximity operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var ProximityBridge = (function (_super) {
        __extends(ProximityBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function ProximityBridge() {
            _super.call(this);
        }
        return ProximityBridge;
    })(BaseSensorBridge);
    Adaptive.ProximityBridge = ProximityBridge;
    /**
       @class Adaptive.FacebookBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the Facebook operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var FacebookBridge = (function (_super) {
        __extends(FacebookBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function FacebookBridge() {
            _super.call(this);
        }
        return FacebookBridge;
    })(BaseSocialBridge);
    Adaptive.FacebookBridge = FacebookBridge;
    /**
       @class Adaptive.GooglePlusBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the Google Plus operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var GooglePlusBridge = (function (_super) {
        __extends(GooglePlusBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function GooglePlusBridge() {
            _super.call(this);
        }
        return GooglePlusBridge;
    })(BaseSocialBridge);
    Adaptive.GooglePlusBridge = GooglePlusBridge;
    /**
       @class Adaptive.LinkedInBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the Linkedin operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var LinkedInBridge = (function (_super) {
        __extends(LinkedInBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function LinkedInBridge() {
            _super.call(this);
        }
        return LinkedInBridge;
    })(BaseSocialBridge);
    Adaptive.LinkedInBridge = LinkedInBridge;
    /**
       @class Adaptive.RSSBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the RSS operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var RSSBridge = (function (_super) {
        __extends(RSSBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function RSSBridge() {
            _super.call(this);
        }
        return RSSBridge;
    })(BaseSocialBridge);
    Adaptive.RSSBridge = RSSBridge;
    /**
       @class Adaptive.TwitterBridge
       @extends Adaptive.BaseSocialBridge
       Interface for Managing the Twitter operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var TwitterBridge = (function (_super) {
        __extends(TwitterBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function TwitterBridge() {
            _super.call(this);
        }
        return TwitterBridge;
    })(BaseSocialBridge);
    Adaptive.TwitterBridge = TwitterBridge;
    /**
       @class Adaptive.CapabilitiesBridge
       @extends Adaptive.BaseSystemBridge
       Interface for testing the Capabilities operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var CapabilitiesBridge = (function (_super) {
        __extends(CapabilitiesBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function CapabilitiesBridge() {
            _super.call(this);
        }
        /**
           Determines whether a specific hardware button is supported for interaction.

           @param type Type of feature to check.
           @return {boolean} true is supported, false otherwise.
           @since ARP1.0
        */
        CapabilitiesBridge.prototype.hasButtonSupport = function (type) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(type));
            var apiRequest = new APIRequest("ICapabilities", "hasButtonSupport", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'CapabilitiesBridge.hasButtonSupport' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'CapabilitiesBridge.hasButtonSupport' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'CapabilitiesBridge.hasButtonSupport' request.");
            }
            return response;
        };
        /**
           Determines whether a specific Communication capability is supported by
the device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        CapabilitiesBridge.prototype.hasCommunicationSupport = function (type) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(type));
            var apiRequest = new APIRequest("ICapabilities", "hasCommunicationSupport", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'CapabilitiesBridge.hasCommunicationSupport' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'CapabilitiesBridge.hasCommunicationSupport' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'CapabilitiesBridge.hasCommunicationSupport' request.");
            }
            return response;
        };
        /**
           Determines whether a specific Data capability is supported by the device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        CapabilitiesBridge.prototype.hasDataSupport = function (type) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(type));
            var apiRequest = new APIRequest("ICapabilities", "hasDataSupport", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'CapabilitiesBridge.hasDataSupport' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'CapabilitiesBridge.hasDataSupport' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'CapabilitiesBridge.hasDataSupport' request.");
            }
            return response;
        };
        /**
           Determines whether a specific Media capability is supported by the
device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        CapabilitiesBridge.prototype.hasMediaSupport = function (type) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(type));
            var apiRequest = new APIRequest("ICapabilities", "hasMediaSupport", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'CapabilitiesBridge.hasMediaSupport' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'CapabilitiesBridge.hasMediaSupport' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'CapabilitiesBridge.hasMediaSupport' request.");
            }
            return response;
        };
        /**
           Determines whether a specific Net capability is supported by the device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        CapabilitiesBridge.prototype.hasNetSupport = function (type) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(type));
            var apiRequest = new APIRequest("ICapabilities", "hasNetSupport", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'CapabilitiesBridge.hasNetSupport' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'CapabilitiesBridge.hasNetSupport' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'CapabilitiesBridge.hasNetSupport' request.");
            }
            return response;
        };
        /**
           Determines whether a specific Notification capability is supported by the
device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        CapabilitiesBridge.prototype.hasNotificationSupport = function (type) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(type));
            var apiRequest = new APIRequest("ICapabilities", "hasNotificationSupport", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'CapabilitiesBridge.hasNotificationSupport' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'CapabilitiesBridge.hasNotificationSupport' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'CapabilitiesBridge.hasNotificationSupport' request.");
            }
            return response;
        };
        /**
           Determines whether a specific Sensor capability is supported by the
device.

           @param type Type of feature to check.
           @return {boolean} true if supported, false otherwise.
           @since ARP1.0
        */
        CapabilitiesBridge.prototype.hasSensorSupport = function (type) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(type));
            var apiRequest = new APIRequest("ICapabilities", "hasSensorSupport", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'CapabilitiesBridge.hasSensorSupport' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'CapabilitiesBridge.hasSensorSupport' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'CapabilitiesBridge.hasSensorSupport' request.");
            }
            return response;
        };
        return CapabilitiesBridge;
    })(BaseSystemBridge);
    Adaptive.CapabilitiesBridge = CapabilitiesBridge;
    /**
       @class Adaptive.DeviceBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the Device operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var DeviceBridge = (function (_super) {
        __extends(DeviceBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function DeviceBridge() {
            _super.call(this);
        }
        /**
           Register a new listener that will receive button events.

           @param listener to be registered.
           @since ARP1.0
        */
        DeviceBridge.prototype.addButtonListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IDevice", "addButtonListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            // Add listener reference to local dictionary.
            Adaptive.registeredButtonListener.add("" + listener.getId(), listener);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove listener reference from local dictionary due to invalid response.
                        Adaptive.registeredButtonListener.remove("" + listener.getId());
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DeviceBridge.addButtonListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove listener reference from local dictionary due to invalid response.
                    Adaptive.registeredButtonListener.remove("" + listener.getId());
                    console.error("ERROR: 'DeviceBridge.addButtonListener' incorrect response received.");
                }
            }
            else {
                // Remove listener reference from local dictionary due to invalid response.
                Adaptive.registeredButtonListener.remove("" + listener.getId());
                console.error("ERROR: " + xhr.status + " sending 'DeviceBridge.addButtonListener' request.");
            }
        };
        /**
           Returns the device information for the current device executing the runtime.

           @return {Adaptive.DeviceInfo} DeviceInfo for the current device.
           @since ARP1.0
        */
        DeviceBridge.prototype.getDeviceInfo = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IDevice", "getDeviceInfo", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = DeviceInfo.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DeviceBridge.getDeviceInfo' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DeviceBridge.getDeviceInfo' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DeviceBridge.getDeviceInfo' request.");
            }
            return response;
        };
        /**
           Gets the current Locale for the device.

           @return {Adaptive.Locale} The current Locale information.
           @since ARP1.0
        */
        DeviceBridge.prototype.getLocaleCurrent = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IDevice", "getLocaleCurrent", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = Locale.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DeviceBridge.getLocaleCurrent' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DeviceBridge.getLocaleCurrent' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DeviceBridge.getLocaleCurrent' request.");
            }
            return response;
        };
        /**
           De-registers an existing listener from receiving button events.

           @param listener to be removed.
           @since ARP1.0
        */
        DeviceBridge.prototype.removeButtonListener = function (listener) {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IDevice", "removeButtonListener", arParams, listener.getId());
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove listener reference from local dictionary.
                        Adaptive.registeredButtonListener.remove("" + listener.getId());
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DeviceBridge.removeButtonListener' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DeviceBridge.removeButtonListener' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DeviceBridge.removeButtonListener' request.");
            }
        };
        /**
           Removed all existing listeners from receiving button events.

           @since ARP1.0
        */
        DeviceBridge.prototype.removeButtonListeners = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IDevice", "removeButtonListeners", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        // Remove all listeners references from local dictionary.
                        var keys = Adaptive.registeredButtonListener.keys();
                        for (var key in keys) {
                            Adaptive.registeredButtonListener.remove(key);
                        }
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DeviceBridge.removeButtonListeners' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DeviceBridge.removeButtonListeners' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DeviceBridge.removeButtonListeners' request.");
            }
        };
        return DeviceBridge;
    })(BaseSystemBridge);
    Adaptive.DeviceBridge = DeviceBridge;
    /**
       @class Adaptive.DisplayBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the Display operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var DisplayBridge = (function (_super) {
        __extends(DisplayBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function DisplayBridge() {
            _super.call(this);
        }
        return DisplayBridge;
    })(BaseSystemBridge);
    Adaptive.DisplayBridge = DisplayBridge;
    /**
       @class Adaptive.OSBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the OS operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var OSBridge = (function (_super) {
        __extends(OSBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function OSBridge() {
            _super.call(this);
        }
        /**
           Returns the OSInfo for the current operating system.

           @return {Adaptive.OSInfo} OSInfo with name, version and vendor of the OS.
           @since ARP1.0
        */
        OSBridge.prototype.getOSInfo = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IOS", "getOSInfo", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = null;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = OSInfo.toObject(JSON.parse(apiResponse.getResponse()));
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'OSBridge.getOSInfo' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'OSBridge.getOSInfo' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'OSBridge.getOSInfo' request.");
            }
            return response;
        };
        return OSBridge;
    })(BaseSystemBridge);
    Adaptive.OSBridge = OSBridge;
    /**
       @class Adaptive.RuntimeBridge
       @extends Adaptive.BaseSystemBridge
       Interface for Managing the Runtime operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var RuntimeBridge = (function (_super) {
        __extends(RuntimeBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function RuntimeBridge() {
            _super.call(this);
        }
        /**
           Dismiss the current Application

           @since ARP1.0
        */
        RuntimeBridge.prototype.dismissApplication = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IRuntime", "dismissApplication", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'RuntimeBridge.dismissApplication' request.");
            }
        };
        /**
           Whether the application dismiss the splash screen successfully or not

           @return {boolean} true if the application has dismissed the splash screen;false otherwise
           @since ARP1.0
        */
        RuntimeBridge.prototype.dismissSplashScreen = function () {
            // Create and populate API request.
            var arParams = [];
            var apiRequest = new APIRequest("IRuntime", "dismissSplashScreen", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'RuntimeBridge.dismissSplashScreen' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'RuntimeBridge.dismissSplashScreen' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'RuntimeBridge.dismissSplashScreen' request.");
            }
            return response;
        };
        return RuntimeBridge;
    })(BaseSystemBridge);
    Adaptive.RuntimeBridge = RuntimeBridge;
    /**
       @class Adaptive.BrowserBridge
       @extends Adaptive.BaseUIBridge
       Interface for Managing the browser operations

       @author Francisco Javier Martin Bueno
       @since ARP1.0
    */
    var BrowserBridge = (function (_super) {
        __extends(BrowserBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function BrowserBridge() {
            _super.call(this);
        }
        /**
           Method for opening a URL like a link in the native default browser

           @param url Url to open
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        BrowserBridge.prototype.openExtenalBrowser = function (url) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(url));
            var apiRequest = new APIRequest("IBrowser", "openExtenalBrowser", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'BrowserBridge.openExtenalBrowser' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'BrowserBridge.openExtenalBrowser' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'BrowserBridge.openExtenalBrowser' request.");
            }
            return response;
        };
        /**
           Method for opening a browser embedded into the application

           @param url            Url to open
           @param title          Title of the Navigation bar
           @param backButtonText Title of the Back button bar
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        BrowserBridge.prototype.openInternalBrowser = function (url, title, backButtonText) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(url));
            arParams.push(JSON.stringify(title));
            arParams.push(JSON.stringify(backButtonText));
            var apiRequest = new APIRequest("IBrowser", "openInternalBrowser", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'BrowserBridge.openInternalBrowser' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'BrowserBridge.openInternalBrowser' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'BrowserBridge.openInternalBrowser' request.");
            }
            return response;
        };
        /**
           Method for opening a browser embedded into the application in a modal window

           @param url            Url to open
           @param title          Title of the Navigation bar
           @param backButtonText Title of the Back button bar
           @return {boolean} The result of the operation
           @since ARP1.0
        */
        BrowserBridge.prototype.openInternalBrowserModal = function (url, title, backButtonText) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(url));
            arParams.push(JSON.stringify(title));
            arParams.push(JSON.stringify(backButtonText));
            var apiRequest = new APIRequest("IBrowser", "openInternalBrowserModal", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'BrowserBridge.openInternalBrowserModal' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'BrowserBridge.openInternalBrowserModal' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'BrowserBridge.openInternalBrowserModal' request.");
            }
            return response;
        };
        return BrowserBridge;
    })(BaseUIBridge);
    Adaptive.BrowserBridge = BrowserBridge;
    /**
       @class Adaptive.DesktopBridge
       @extends Adaptive.BaseUIBridge
       Interface for Managing the Desktop operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var DesktopBridge = (function (_super) {
        __extends(DesktopBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function DesktopBridge() {
            _super.call(this);
        }
        return DesktopBridge;
    })(BaseUIBridge);
    Adaptive.DesktopBridge = DesktopBridge;
    /**
       @class Adaptive.MapBridge
       @extends Adaptive.BaseUIBridge
       Interface for Managing the Map operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var MapBridge = (function (_super) {
        __extends(MapBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function MapBridge() {
            _super.call(this);
        }
        return MapBridge;
    })(BaseUIBridge);
    Adaptive.MapBridge = MapBridge;
    /**
       @class Adaptive.UIBridge
       @extends Adaptive.BaseUIBridge
       Interface for Managing the UI operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var UIBridge = (function (_super) {
        __extends(UIBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function UIBridge() {
            _super.call(this);
        }
        return UIBridge;
    })(BaseUIBridge);
    Adaptive.UIBridge = UIBridge;
    /**
       @class Adaptive.CompressionBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Compression operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var CompressionBridge = (function (_super) {
        __extends(CompressionBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function CompressionBridge() {
            _super.call(this);
        }
        return CompressionBridge;
    })(BaseUtilBridge);
    Adaptive.CompressionBridge = CompressionBridge;
    /**
       @class Adaptive.ConcurrentBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Concurrent operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var ConcurrentBridge = (function (_super) {
        __extends(ConcurrentBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function ConcurrentBridge() {
            _super.call(this);
        }
        return ConcurrentBridge;
    })(BaseUtilBridge);
    Adaptive.ConcurrentBridge = ConcurrentBridge;
    /**
       @class Adaptive.CryptoBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Cloud operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var CryptoBridge = (function (_super) {
        __extends(CryptoBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function CryptoBridge() {
            _super.call(this);
        }
        return CryptoBridge;
    })(BaseUtilBridge);
    Adaptive.CryptoBridge = CryptoBridge;
    /**
       @class Adaptive.LoggingBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Logging operations

       @author Ferran Vila Conesa
       @since ARP1.0
    */
    var LoggingBridge = (function (_super) {
        __extends(LoggingBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function LoggingBridge() {
            _super.call(this);
        }
        /**
           Logs the given message, with the given log level if specified, to the standard platform/environment.

           @param level   Log level
           @param message Message to be logged
           @since ARP1.0
        */
        LoggingBridge.prototype.log_level_message = function (level, message) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(level));
            arParams.push(JSON.stringify(message));
            var apiRequest = new APIRequest("ILogging", "log_level_message", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'LoggingBridge.log_level_message' request.");
            }
        };
        /**
           Logs the given message, with the given log level if specified, to the standard platform/environment.

           @param level    Log level
           @param category Category/tag name to identify/filter the log.
           @param message  Message to be logged
           @since ARP1.0
        */
        LoggingBridge.prototype.log_level_category_message = function (level, category, message) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(level));
            arParams.push(JSON.stringify(category));
            arParams.push(JSON.stringify(message));
            var apiRequest = new APIRequest("ILogging", "log_level_category_message", arParams, -1);
            var apiResponse = new APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader("X-AdaptiveVersion", "v2.0.4");
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'LoggingBridge.log_level_category_message' request.");
            }
        };
        return LoggingBridge;
    })(BaseUtilBridge);
    Adaptive.LoggingBridge = LoggingBridge;
    /**
       @class Adaptive.TimerBridge
       @extends Adaptive.BaseUtilBridge
       Interface for Managing the Timer operations

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var TimerBridge = (function (_super) {
        __extends(TimerBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function TimerBridge() {
            _super.call(this);
        }
        return TimerBridge;
    })(BaseUtilBridge);
    Adaptive.TimerBridge = TimerBridge;
    /**
       @class Adaptive.AppRegistryBridge
       @extends Adaptive.IAppRegistry
       Interface to retrieve auto-registered service implementation references.

       @author Carlos Lozano Diez
       @since ARP1.0
    */
    var AppRegistryBridge = (function () {
        function AppRegistryBridge() {
        }
        /**
           @static
           @singleton
           @method
           Singleton instance of AppRegistry.
           @return {Adaptive.AppRegistryBridge}
        */
        AppRegistryBridge.getInstance = function () {
            if (AppRegistryBridge.instance === null) {
                AppRegistryBridge.instance = new AppRegistryBridge();
            }
            return AppRegistryBridge.instance;
        };
        /**
           @method
           Obtain a reference to the IAcceleration bridge.

           @return {Adaptive.AccelerationBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getAccelerationBridge = function () {
            if (AppRegistryBridge.instanceAcceleration === null) {
                AppRegistryBridge.instanceAcceleration = new AccelerationBridge();
            }
            return AppRegistryBridge.instanceAcceleration;
        };
        /**
           @method
           Obtain a reference to the IAds bridge.

           @return {Adaptive.AdsBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getAdsBridge = function () {
            if (AppRegistryBridge.instanceAds === null) {
                AppRegistryBridge.instanceAds = new AdsBridge();
            }
            return AppRegistryBridge.instanceAds;
        };
        /**
           @method
           Obtain a reference to the IAlarm bridge.

           @return {Adaptive.AlarmBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getAlarmBridge = function () {
            if (AppRegistryBridge.instanceAlarm === null) {
                AppRegistryBridge.instanceAlarm = new AlarmBridge();
            }
            return AppRegistryBridge.instanceAlarm;
        };
        /**
           @method
           Obtain a reference to the IAmbientLight bridge.

           @return {Adaptive.AmbientLightBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getAmbientLightBridge = function () {
            if (AppRegistryBridge.instanceAmbientLight === null) {
                AppRegistryBridge.instanceAmbientLight = new AmbientLightBridge();
            }
            return AppRegistryBridge.instanceAmbientLight;
        };
        /**
           @method
           Obtain a reference to the IAnalytics bridge.

           @return {Adaptive.AnalyticsBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getAnalyticsBridge = function () {
            if (AppRegistryBridge.instanceAnalytics === null) {
                AppRegistryBridge.instanceAnalytics = new AnalyticsBridge();
            }
            return AppRegistryBridge.instanceAnalytics;
        };
        /**
           @method
           Obtain a reference to the IAudio bridge.

           @return {Adaptive.AudioBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getAudioBridge = function () {
            if (AppRegistryBridge.instanceAudio === null) {
                AppRegistryBridge.instanceAudio = new AudioBridge();
            }
            return AppRegistryBridge.instanceAudio;
        };
        /**
           @method
           Obtain a reference to the IBarcode bridge.

           @return {Adaptive.BarcodeBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getBarcodeBridge = function () {
            if (AppRegistryBridge.instanceBarcode === null) {
                AppRegistryBridge.instanceBarcode = new BarcodeBridge();
            }
            return AppRegistryBridge.instanceBarcode;
        };
        /**
           @method
           Obtain a reference to the IBarometer bridge.

           @return {Adaptive.BarometerBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getBarometerBridge = function () {
            if (AppRegistryBridge.instanceBarometer === null) {
                AppRegistryBridge.instanceBarometer = new BarometerBridge();
            }
            return AppRegistryBridge.instanceBarometer;
        };
        /**
           @method
           Obtain a reference to the IBluetooth bridge.

           @return {Adaptive.BluetoothBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getBluetoothBridge = function () {
            if (AppRegistryBridge.instanceBluetooth === null) {
                AppRegistryBridge.instanceBluetooth = new BluetoothBridge();
            }
            return AppRegistryBridge.instanceBluetooth;
        };
        /**
           @method
           Obtain a reference to the IBrowser bridge.

           @return {Adaptive.BrowserBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getBrowserBridge = function () {
            if (AppRegistryBridge.instanceBrowser === null) {
                AppRegistryBridge.instanceBrowser = new BrowserBridge();
            }
            return AppRegistryBridge.instanceBrowser;
        };
        /**
           @method
           Obtain a reference to the ICalendar bridge.

           @return {Adaptive.CalendarBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getCalendarBridge = function () {
            if (AppRegistryBridge.instanceCalendar === null) {
                AppRegistryBridge.instanceCalendar = new CalendarBridge();
            }
            return AppRegistryBridge.instanceCalendar;
        };
        /**
           @method
           Obtain a reference to the ICamera bridge.

           @return {Adaptive.CameraBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getCameraBridge = function () {
            if (AppRegistryBridge.instanceCamera === null) {
                AppRegistryBridge.instanceCamera = new CameraBridge();
            }
            return AppRegistryBridge.instanceCamera;
        };
        /**
           @method
           Obtain a reference to the ICapabilities bridge.

           @return {Adaptive.CapabilitiesBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getCapabilitiesBridge = function () {
            if (AppRegistryBridge.instanceCapabilities === null) {
                AppRegistryBridge.instanceCapabilities = new CapabilitiesBridge();
            }
            return AppRegistryBridge.instanceCapabilities;
        };
        /**
           @method
           Obtain a reference to the ICloud bridge.

           @return {Adaptive.CloudBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getCloudBridge = function () {
            if (AppRegistryBridge.instanceCloud === null) {
                AppRegistryBridge.instanceCloud = new CloudBridge();
            }
            return AppRegistryBridge.instanceCloud;
        };
        /**
           @method
           Obtain a reference to the ICompression bridge.

           @return {Adaptive.CompressionBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getCompressionBridge = function () {
            if (AppRegistryBridge.instanceCompression === null) {
                AppRegistryBridge.instanceCompression = new CompressionBridge();
            }
            return AppRegistryBridge.instanceCompression;
        };
        /**
           @method
           Obtain a reference to the IConcurrent bridge.

           @return {Adaptive.ConcurrentBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getConcurrentBridge = function () {
            if (AppRegistryBridge.instanceConcurrent === null) {
                AppRegistryBridge.instanceConcurrent = new ConcurrentBridge();
            }
            return AppRegistryBridge.instanceConcurrent;
        };
        /**
           @method
           Obtain a reference to the IContact bridge.

           @return {Adaptive.ContactBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getContactBridge = function () {
            if (AppRegistryBridge.instanceContact === null) {
                AppRegistryBridge.instanceContact = new ContactBridge();
            }
            return AppRegistryBridge.instanceContact;
        };
        /**
           @method
           Obtain a reference to the ICrypto bridge.

           @return {Adaptive.CryptoBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getCryptoBridge = function () {
            if (AppRegistryBridge.instanceCrypto === null) {
                AppRegistryBridge.instanceCrypto = new CryptoBridge();
            }
            return AppRegistryBridge.instanceCrypto;
        };
        /**
           @method
           Obtain a reference to the IDataStream bridge.

           @return {Adaptive.DataStreamBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getDataStreamBridge = function () {
            if (AppRegistryBridge.instanceDataStream === null) {
                AppRegistryBridge.instanceDataStream = new DataStreamBridge();
            }
            return AppRegistryBridge.instanceDataStream;
        };
        /**
           @method
           Obtain a reference to the IDatabase bridge.

           @return {Adaptive.DatabaseBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getDatabaseBridge = function () {
            if (AppRegistryBridge.instanceDatabase === null) {
                AppRegistryBridge.instanceDatabase = new DatabaseBridge();
            }
            return AppRegistryBridge.instanceDatabase;
        };
        /**
           @method
           Obtain a reference to the IDesktop bridge.

           @return {Adaptive.DesktopBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getDesktopBridge = function () {
            if (AppRegistryBridge.instanceDesktop === null) {
                AppRegistryBridge.instanceDesktop = new DesktopBridge();
            }
            return AppRegistryBridge.instanceDesktop;
        };
        /**
           @method
           Obtain a reference to the IDevice bridge.

           @return {Adaptive.DeviceBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getDeviceBridge = function () {
            if (AppRegistryBridge.instanceDevice === null) {
                AppRegistryBridge.instanceDevice = new DeviceBridge();
            }
            return AppRegistryBridge.instanceDevice;
        };
        /**
           @method
           Obtain a reference to the IDisplay bridge.

           @return {Adaptive.DisplayBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getDisplayBridge = function () {
            if (AppRegistryBridge.instanceDisplay === null) {
                AppRegistryBridge.instanceDisplay = new DisplayBridge();
            }
            return AppRegistryBridge.instanceDisplay;
        };
        /**
           @method
           Obtain a reference to the IFacebook bridge.

           @return {Adaptive.FacebookBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getFacebookBridge = function () {
            if (AppRegistryBridge.instanceFacebook === null) {
                AppRegistryBridge.instanceFacebook = new FacebookBridge();
            }
            return AppRegistryBridge.instanceFacebook;
        };
        /**
           @method
           Obtain a reference to the IFile bridge.

           @return {Adaptive.FileBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getFileBridge = function () {
            if (AppRegistryBridge.instanceFile === null) {
                AppRegistryBridge.instanceFile = new FileBridge();
            }
            return AppRegistryBridge.instanceFile;
        };
        /**
           @method
           Obtain a reference to the IFileSystem bridge.

           @return {Adaptive.FileSystemBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getFileSystemBridge = function () {
            if (AppRegistryBridge.instanceFileSystem === null) {
                AppRegistryBridge.instanceFileSystem = new FileSystemBridge();
            }
            return AppRegistryBridge.instanceFileSystem;
        };
        /**
           @method
           Obtain a reference to the IGeolocation bridge.

           @return {Adaptive.GeolocationBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getGeolocationBridge = function () {
            if (AppRegistryBridge.instanceGeolocation === null) {
                AppRegistryBridge.instanceGeolocation = new GeolocationBridge();
            }
            return AppRegistryBridge.instanceGeolocation;
        };
        /**
           @method
           Obtain a reference to the IGlobalization bridge.

           @return {Adaptive.GlobalizationBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getGlobalizationBridge = function () {
            if (AppRegistryBridge.instanceGlobalization === null) {
                AppRegistryBridge.instanceGlobalization = new GlobalizationBridge();
            }
            return AppRegistryBridge.instanceGlobalization;
        };
        /**
           @method
           Obtain a reference to the IGooglePlus bridge.

           @return {Adaptive.GooglePlusBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getGooglePlusBridge = function () {
            if (AppRegistryBridge.instanceGooglePlus === null) {
                AppRegistryBridge.instanceGooglePlus = new GooglePlusBridge();
            }
            return AppRegistryBridge.instanceGooglePlus;
        };
        /**
           @method
           Obtain a reference to the IGyroscope bridge.

           @return {Adaptive.GyroscopeBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getGyroscopeBridge = function () {
            if (AppRegistryBridge.instanceGyroscope === null) {
                AppRegistryBridge.instanceGyroscope = new GyroscopeBridge();
            }
            return AppRegistryBridge.instanceGyroscope;
        };
        /**
           @method
           Obtain a reference to the IImaging bridge.

           @return {Adaptive.ImagingBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getImagingBridge = function () {
            if (AppRegistryBridge.instanceImaging === null) {
                AppRegistryBridge.instanceImaging = new ImagingBridge();
            }
            return AppRegistryBridge.instanceImaging;
        };
        /**
           @method
           Obtain a reference to the IInternalStorage bridge.

           @return {Adaptive.InternalStorageBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getInternalStorageBridge = function () {
            if (AppRegistryBridge.instanceInternalStorage === null) {
                AppRegistryBridge.instanceInternalStorage = new InternalStorageBridge();
            }
            return AppRegistryBridge.instanceInternalStorage;
        };
        /**
           @method
           Obtain a reference to the ILifecycle bridge.

           @return {Adaptive.LifecycleBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getLifecycleBridge = function () {
            if (AppRegistryBridge.instanceLifecycle === null) {
                AppRegistryBridge.instanceLifecycle = new LifecycleBridge();
            }
            return AppRegistryBridge.instanceLifecycle;
        };
        /**
           @method
           Obtain a reference to the ILinkedIn bridge.

           @return {Adaptive.LinkedInBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getLinkedInBridge = function () {
            if (AppRegistryBridge.instanceLinkedIn === null) {
                AppRegistryBridge.instanceLinkedIn = new LinkedInBridge();
            }
            return AppRegistryBridge.instanceLinkedIn;
        };
        /**
           @method
           Obtain a reference to the ILogging bridge.

           @return {Adaptive.LoggingBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getLoggingBridge = function () {
            if (AppRegistryBridge.instanceLogging === null) {
                AppRegistryBridge.instanceLogging = new LoggingBridge();
            }
            return AppRegistryBridge.instanceLogging;
        };
        /**
           @method
           Obtain a reference to the IMagnetometer bridge.

           @return {Adaptive.MagnetometerBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getMagnetometerBridge = function () {
            if (AppRegistryBridge.instanceMagnetometer === null) {
                AppRegistryBridge.instanceMagnetometer = new MagnetometerBridge();
            }
            return AppRegistryBridge.instanceMagnetometer;
        };
        /**
           @method
           Obtain a reference to the IMail bridge.

           @return {Adaptive.MailBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getMailBridge = function () {
            if (AppRegistryBridge.instanceMail === null) {
                AppRegistryBridge.instanceMail = new MailBridge();
            }
            return AppRegistryBridge.instanceMail;
        };
        /**
           @method
           Obtain a reference to the IManagement bridge.

           @return {Adaptive.ManagementBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getManagementBridge = function () {
            if (AppRegistryBridge.instanceManagement === null) {
                AppRegistryBridge.instanceManagement = new ManagementBridge();
            }
            return AppRegistryBridge.instanceManagement;
        };
        /**
           @method
           Obtain a reference to the IMap bridge.

           @return {Adaptive.MapBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getMapBridge = function () {
            if (AppRegistryBridge.instanceMap === null) {
                AppRegistryBridge.instanceMap = new MapBridge();
            }
            return AppRegistryBridge.instanceMap;
        };
        /**
           @method
           Obtain a reference to the IMessaging bridge.

           @return {Adaptive.MessagingBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getMessagingBridge = function () {
            if (AppRegistryBridge.instanceMessaging === null) {
                AppRegistryBridge.instanceMessaging = new MessagingBridge();
            }
            return AppRegistryBridge.instanceMessaging;
        };
        /**
           @method
           Obtain a reference to the INFC bridge.

           @return {Adaptive.NFCBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getNFCBridge = function () {
            if (AppRegistryBridge.instanceNFC === null) {
                AppRegistryBridge.instanceNFC = new NFCBridge();
            }
            return AppRegistryBridge.instanceNFC;
        };
        /**
           @method
           Obtain a reference to the INetworkInfo bridge.

           @return {Adaptive.NetworkInfoBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getNetworkInfoBridge = function () {
            if (AppRegistryBridge.instanceNetworkInfo === null) {
                AppRegistryBridge.instanceNetworkInfo = new NetworkInfoBridge();
            }
            return AppRegistryBridge.instanceNetworkInfo;
        };
        /**
           @method
           Obtain a reference to the INetworkNaming bridge.

           @return {Adaptive.NetworkNamingBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getNetworkNamingBridge = function () {
            if (AppRegistryBridge.instanceNetworkNaming === null) {
                AppRegistryBridge.instanceNetworkNaming = new NetworkNamingBridge();
            }
            return AppRegistryBridge.instanceNetworkNaming;
        };
        /**
           @method
           Obtain a reference to the INetworkReachability bridge.

           @return {Adaptive.NetworkReachabilityBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getNetworkReachabilityBridge = function () {
            if (AppRegistryBridge.instanceNetworkReachability === null) {
                AppRegistryBridge.instanceNetworkReachability = new NetworkReachabilityBridge();
            }
            return AppRegistryBridge.instanceNetworkReachability;
        };
        /**
           @method
           Obtain a reference to the INetworkStatus bridge.

           @return {Adaptive.NetworkStatusBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getNetworkStatusBridge = function () {
            if (AppRegistryBridge.instanceNetworkStatus === null) {
                AppRegistryBridge.instanceNetworkStatus = new NetworkStatusBridge();
            }
            return AppRegistryBridge.instanceNetworkStatus;
        };
        /**
           @method
           Obtain a reference to the INotification bridge.

           @return {Adaptive.NotificationBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getNotificationBridge = function () {
            if (AppRegistryBridge.instanceNotification === null) {
                AppRegistryBridge.instanceNotification = new NotificationBridge();
            }
            return AppRegistryBridge.instanceNotification;
        };
        /**
           @method
           Obtain a reference to the INotificationLocal bridge.

           @return {Adaptive.NotificationLocalBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getNotificationLocalBridge = function () {
            if (AppRegistryBridge.instanceNotificationLocal === null) {
                AppRegistryBridge.instanceNotificationLocal = new NotificationLocalBridge();
            }
            return AppRegistryBridge.instanceNotificationLocal;
        };
        /**
           @method
           Obtain a reference to the IOAuth bridge.

           @return {Adaptive.OAuthBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getOAuthBridge = function () {
            if (AppRegistryBridge.instanceOAuth === null) {
                AppRegistryBridge.instanceOAuth = new OAuthBridge();
            }
            return AppRegistryBridge.instanceOAuth;
        };
        /**
           @method
           Obtain a reference to the IOCR bridge.

           @return {Adaptive.OCRBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getOCRBridge = function () {
            if (AppRegistryBridge.instanceOCR === null) {
                AppRegistryBridge.instanceOCR = new OCRBridge();
            }
            return AppRegistryBridge.instanceOCR;
        };
        /**
           @method
           Obtain a reference to the IOS bridge.

           @return {Adaptive.OSBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getOSBridge = function () {
            if (AppRegistryBridge.instanceOS === null) {
                AppRegistryBridge.instanceOS = new OSBridge();
            }
            return AppRegistryBridge.instanceOS;
        };
        /**
           @method
           Obtain a reference to the IOpenId bridge.

           @return {Adaptive.OpenIdBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getOpenIdBridge = function () {
            if (AppRegistryBridge.instanceOpenId === null) {
                AppRegistryBridge.instanceOpenId = new OpenIdBridge();
            }
            return AppRegistryBridge.instanceOpenId;
        };
        /**
           @method
           Obtain a reference to the IPrinting bridge.

           @return {Adaptive.PrintingBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getPrintingBridge = function () {
            if (AppRegistryBridge.instancePrinting === null) {
                AppRegistryBridge.instancePrinting = new PrintingBridge();
            }
            return AppRegistryBridge.instancePrinting;
        };
        /**
           @method
           Obtain a reference to the IProximity bridge.

           @return {Adaptive.ProximityBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getProximityBridge = function () {
            if (AppRegistryBridge.instanceProximity === null) {
                AppRegistryBridge.instanceProximity = new ProximityBridge();
            }
            return AppRegistryBridge.instanceProximity;
        };
        /**
           @method
           Obtain a reference to the IQRCode bridge.

           @return {Adaptive.QRCodeBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getQRCodeBridge = function () {
            if (AppRegistryBridge.instanceQRCode === null) {
                AppRegistryBridge.instanceQRCode = new QRCodeBridge();
            }
            return AppRegistryBridge.instanceQRCode;
        };
        /**
           @method
           Obtain a reference to the IRSS bridge.

           @return {Adaptive.RSSBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getRSSBridge = function () {
            if (AppRegistryBridge.instanceRSS === null) {
                AppRegistryBridge.instanceRSS = new RSSBridge();
            }
            return AppRegistryBridge.instanceRSS;
        };
        /**
           @method
           Obtain a reference to the IRuntime bridge.

           @return {Adaptive.RuntimeBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getRuntimeBridge = function () {
            if (AppRegistryBridge.instanceRuntime === null) {
                AppRegistryBridge.instanceRuntime = new RuntimeBridge();
            }
            return AppRegistryBridge.instanceRuntime;
        };
        /**
           @method
           Obtain a reference to the ISecurity bridge.

           @return {Adaptive.SecurityBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getSecurityBridge = function () {
            if (AppRegistryBridge.instanceSecurity === null) {
                AppRegistryBridge.instanceSecurity = new SecurityBridge();
            }
            return AppRegistryBridge.instanceSecurity;
        };
        /**
           @method
           Obtain a reference to the IService bridge.

           @return {Adaptive.ServiceBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getServiceBridge = function () {
            if (AppRegistryBridge.instanceService === null) {
                AppRegistryBridge.instanceService = new ServiceBridge();
            }
            return AppRegistryBridge.instanceService;
        };
        /**
           @method
           Obtain a reference to the ISettings bridge.

           @return {Adaptive.SettingsBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getSettingsBridge = function () {
            if (AppRegistryBridge.instanceSettings === null) {
                AppRegistryBridge.instanceSettings = new SettingsBridge();
            }
            return AppRegistryBridge.instanceSettings;
        };
        /**
           @method
           Obtain a reference to the ISocket bridge.

           @return {Adaptive.SocketBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getSocketBridge = function () {
            if (AppRegistryBridge.instanceSocket === null) {
                AppRegistryBridge.instanceSocket = new SocketBridge();
            }
            return AppRegistryBridge.instanceSocket;
        };
        /**
           @method
           Obtain a reference to the IStore bridge.

           @return {Adaptive.StoreBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getStoreBridge = function () {
            if (AppRegistryBridge.instanceStore === null) {
                AppRegistryBridge.instanceStore = new StoreBridge();
            }
            return AppRegistryBridge.instanceStore;
        };
        /**
           @method
           Obtain a reference to the ITelephony bridge.

           @return {Adaptive.TelephonyBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getTelephonyBridge = function () {
            if (AppRegistryBridge.instanceTelephony === null) {
                AppRegistryBridge.instanceTelephony = new TelephonyBridge();
            }
            return AppRegistryBridge.instanceTelephony;
        };
        /**
           @method
           Obtain a reference to the ITimer bridge.

           @return {Adaptive.TimerBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getTimerBridge = function () {
            if (AppRegistryBridge.instanceTimer === null) {
                AppRegistryBridge.instanceTimer = new TimerBridge();
            }
            return AppRegistryBridge.instanceTimer;
        };
        /**
           @method
           Obtain a reference to the ITwitter bridge.

           @return {Adaptive.TwitterBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getTwitterBridge = function () {
            if (AppRegistryBridge.instanceTwitter === null) {
                AppRegistryBridge.instanceTwitter = new TwitterBridge();
            }
            return AppRegistryBridge.instanceTwitter;
        };
        /**
           @method
           Obtain a reference to the IUI bridge.

           @return {Adaptive.UIBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getUIBridge = function () {
            if (AppRegistryBridge.instanceUI === null) {
                AppRegistryBridge.instanceUI = new UIBridge();
            }
            return AppRegistryBridge.instanceUI;
        };
        /**
           @method
           Obtain a reference to the IUpdate bridge.

           @return {Adaptive.UpdateBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getUpdateBridge = function () {
            if (AppRegistryBridge.instanceUpdate === null) {
                AppRegistryBridge.instanceUpdate = new UpdateBridge();
            }
            return AppRegistryBridge.instanceUpdate;
        };
        /**
           @method
           Obtain a reference to the IVibration bridge.

           @return {Adaptive.VibrationBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getVibrationBridge = function () {
            if (AppRegistryBridge.instanceVibration === null) {
                AppRegistryBridge.instanceVibration = new VibrationBridge();
            }
            return AppRegistryBridge.instanceVibration;
        };
        /**
           @method
           Obtain a reference to the IVideo bridge.

           @return {Adaptive.VideoBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getVideoBridge = function () {
            if (AppRegistryBridge.instanceVideo === null) {
                AppRegistryBridge.instanceVideo = new VideoBridge();
            }
            return AppRegistryBridge.instanceVideo;
        };
        /**
           @method
           Obtain a reference to the IWallet bridge.

           @return {Adaptive.WalletBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getWalletBridge = function () {
            if (AppRegistryBridge.instanceWallet === null) {
                AppRegistryBridge.instanceWallet = new WalletBridge();
            }
            return AppRegistryBridge.instanceWallet;
        };
        /**
           @method
           Obtain a reference to the IXML bridge.

           @return {Adaptive.XMLBridge} bridge instance.
        */
        AppRegistryBridge.prototype.getXMLBridge = function () {
            if (AppRegistryBridge.instanceXML === null) {
                AppRegistryBridge.instanceXML = new XMLBridge();
            }
            return AppRegistryBridge.instanceXML;
        };
        /**
           @method
           Return the API version for the given interface.

           @return {string} The version of the API.
        */
        AppRegistryBridge.prototype.getAPIVersion = function () {
            return "v2.0.4";
        };
        /**
           @private
           @static
           @property {Adaptive.AppRegistryBridge} instance
           Singleton instance of AppRegistry.
        */
        AppRegistryBridge.instance = null;
        /**
           @private
           @property {Adaptive.IAcceleration} instanceAcceleration
        */
        AppRegistryBridge.instanceAcceleration = null;
        /**
           @private
           @property {Adaptive.IAds} instanceAds
        */
        AppRegistryBridge.instanceAds = null;
        /**
           @private
           @property {Adaptive.IAlarm} instanceAlarm
        */
        AppRegistryBridge.instanceAlarm = null;
        /**
           @private
           @property {Adaptive.IAmbientLight} instanceAmbientLight
        */
        AppRegistryBridge.instanceAmbientLight = null;
        /**
           @private
           @property {Adaptive.IAnalytics} instanceAnalytics
        */
        AppRegistryBridge.instanceAnalytics = null;
        /**
           @private
           @property {Adaptive.IAudio} instanceAudio
        */
        AppRegistryBridge.instanceAudio = null;
        /**
           @private
           @property {Adaptive.IBarcode} instanceBarcode
        */
        AppRegistryBridge.instanceBarcode = null;
        /**
           @private
           @property {Adaptive.IBarometer} instanceBarometer
        */
        AppRegistryBridge.instanceBarometer = null;
        /**
           @private
           @property {Adaptive.IBluetooth} instanceBluetooth
        */
        AppRegistryBridge.instanceBluetooth = null;
        /**
           @private
           @property {Adaptive.IBrowser} instanceBrowser
        */
        AppRegistryBridge.instanceBrowser = null;
        /**
           @private
           @property {Adaptive.ICalendar} instanceCalendar
        */
        AppRegistryBridge.instanceCalendar = null;
        /**
           @private
           @property {Adaptive.ICamera} instanceCamera
        */
        AppRegistryBridge.instanceCamera = null;
        /**
           @private
           @property {Adaptive.ICapabilities} instanceCapabilities
        */
        AppRegistryBridge.instanceCapabilities = null;
        /**
           @private
           @property {Adaptive.ICloud} instanceCloud
        */
        AppRegistryBridge.instanceCloud = null;
        /**
           @private
           @property {Adaptive.ICompression} instanceCompression
        */
        AppRegistryBridge.instanceCompression = null;
        /**
           @private
           @property {Adaptive.IConcurrent} instanceConcurrent
        */
        AppRegistryBridge.instanceConcurrent = null;
        /**
           @private
           @property {Adaptive.IContact} instanceContact
        */
        AppRegistryBridge.instanceContact = null;
        /**
           @private
           @property {Adaptive.ICrypto} instanceCrypto
        */
        AppRegistryBridge.instanceCrypto = null;
        /**
           @private
           @property {Adaptive.IDataStream} instanceDataStream
        */
        AppRegistryBridge.instanceDataStream = null;
        /**
           @private
           @property {Adaptive.IDatabase} instanceDatabase
        */
        AppRegistryBridge.instanceDatabase = null;
        /**
           @private
           @property {Adaptive.IDesktop} instanceDesktop
        */
        AppRegistryBridge.instanceDesktop = null;
        /**
           @private
           @property {Adaptive.IDevice} instanceDevice
        */
        AppRegistryBridge.instanceDevice = null;
        /**
           @private
           @property {Adaptive.IDisplay} instanceDisplay
        */
        AppRegistryBridge.instanceDisplay = null;
        /**
           @private
           @property {Adaptive.IFacebook} instanceFacebook
        */
        AppRegistryBridge.instanceFacebook = null;
        /**
           @private
           @property {Adaptive.IFile} instanceFile
        */
        AppRegistryBridge.instanceFile = null;
        /**
           @private
           @property {Adaptive.IFileSystem} instanceFileSystem
        */
        AppRegistryBridge.instanceFileSystem = null;
        /**
           @private
           @property {Adaptive.IGeolocation} instanceGeolocation
        */
        AppRegistryBridge.instanceGeolocation = null;
        /**
           @private
           @property {Adaptive.IGlobalization} instanceGlobalization
        */
        AppRegistryBridge.instanceGlobalization = null;
        /**
           @private
           @property {Adaptive.IGooglePlus} instanceGooglePlus
        */
        AppRegistryBridge.instanceGooglePlus = null;
        /**
           @private
           @property {Adaptive.IGyroscope} instanceGyroscope
        */
        AppRegistryBridge.instanceGyroscope = null;
        /**
           @private
           @property {Adaptive.IImaging} instanceImaging
        */
        AppRegistryBridge.instanceImaging = null;
        /**
           @private
           @property {Adaptive.IInternalStorage} instanceInternalStorage
        */
        AppRegistryBridge.instanceInternalStorage = null;
        /**
           @private
           @property {Adaptive.ILifecycle} instanceLifecycle
        */
        AppRegistryBridge.instanceLifecycle = null;
        /**
           @private
           @property {Adaptive.ILinkedIn} instanceLinkedIn
        */
        AppRegistryBridge.instanceLinkedIn = null;
        /**
           @private
           @property {Adaptive.ILogging} instanceLogging
        */
        AppRegistryBridge.instanceLogging = null;
        /**
           @private
           @property {Adaptive.IMagnetometer} instanceMagnetometer
        */
        AppRegistryBridge.instanceMagnetometer = null;
        /**
           @private
           @property {Adaptive.IMail} instanceMail
        */
        AppRegistryBridge.instanceMail = null;
        /**
           @private
           @property {Adaptive.IManagement} instanceManagement
        */
        AppRegistryBridge.instanceManagement = null;
        /**
           @private
           @property {Adaptive.IMap} instanceMap
        */
        AppRegistryBridge.instanceMap = null;
        /**
           @private
           @property {Adaptive.IMessaging} instanceMessaging
        */
        AppRegistryBridge.instanceMessaging = null;
        /**
           @private
           @property {Adaptive.INFC} instanceNFC
        */
        AppRegistryBridge.instanceNFC = null;
        /**
           @private
           @property {Adaptive.INetworkInfo} instanceNetworkInfo
        */
        AppRegistryBridge.instanceNetworkInfo = null;
        /**
           @private
           @property {Adaptive.INetworkNaming} instanceNetworkNaming
        */
        AppRegistryBridge.instanceNetworkNaming = null;
        /**
           @private
           @property {Adaptive.INetworkReachability} instanceNetworkReachability
        */
        AppRegistryBridge.instanceNetworkReachability = null;
        /**
           @private
           @property {Adaptive.INetworkStatus} instanceNetworkStatus
        */
        AppRegistryBridge.instanceNetworkStatus = null;
        /**
           @private
           @property {Adaptive.INotification} instanceNotification
        */
        AppRegistryBridge.instanceNotification = null;
        /**
           @private
           @property {Adaptive.INotificationLocal} instanceNotificationLocal
        */
        AppRegistryBridge.instanceNotificationLocal = null;
        /**
           @private
           @property {Adaptive.IOAuth} instanceOAuth
        */
        AppRegistryBridge.instanceOAuth = null;
        /**
           @private
           @property {Adaptive.IOCR} instanceOCR
        */
        AppRegistryBridge.instanceOCR = null;
        /**
           @private
           @property {Adaptive.IOS} instanceOS
        */
        AppRegistryBridge.instanceOS = null;
        /**
           @private
           @property {Adaptive.IOpenId} instanceOpenId
        */
        AppRegistryBridge.instanceOpenId = null;
        /**
           @private
           @property {Adaptive.IPrinting} instancePrinting
        */
        AppRegistryBridge.instancePrinting = null;
        /**
           @private
           @property {Adaptive.IProximity} instanceProximity
        */
        AppRegistryBridge.instanceProximity = null;
        /**
           @private
           @property {Adaptive.IQRCode} instanceQRCode
        */
        AppRegistryBridge.instanceQRCode = null;
        /**
           @private
           @property {Adaptive.IRSS} instanceRSS
        */
        AppRegistryBridge.instanceRSS = null;
        /**
           @private
           @property {Adaptive.IRuntime} instanceRuntime
        */
        AppRegistryBridge.instanceRuntime = null;
        /**
           @private
           @property {Adaptive.ISecurity} instanceSecurity
        */
        AppRegistryBridge.instanceSecurity = null;
        /**
           @private
           @property {Adaptive.IService} instanceService
        */
        AppRegistryBridge.instanceService = null;
        /**
           @private
           @property {Adaptive.ISettings} instanceSettings
        */
        AppRegistryBridge.instanceSettings = null;
        /**
           @private
           @property {Adaptive.ISocket} instanceSocket
        */
        AppRegistryBridge.instanceSocket = null;
        /**
           @private
           @property {Adaptive.IStore} instanceStore
        */
        AppRegistryBridge.instanceStore = null;
        /**
           @private
           @property {Adaptive.ITelephony} instanceTelephony
        */
        AppRegistryBridge.instanceTelephony = null;
        /**
           @private
           @property {Adaptive.ITimer} instanceTimer
        */
        AppRegistryBridge.instanceTimer = null;
        /**
           @private
           @property {Adaptive.ITwitter} instanceTwitter
        */
        AppRegistryBridge.instanceTwitter = null;
        /**
           @private
           @property {Adaptive.IUI} instanceUI
        */
        AppRegistryBridge.instanceUI = null;
        /**
           @private
           @property {Adaptive.IUpdate} instanceUpdate
        */
        AppRegistryBridge.instanceUpdate = null;
        /**
           @private
           @property {Adaptive.IVibration} instanceVibration
        */
        AppRegistryBridge.instanceVibration = null;
        /**
           @private
           @property {Adaptive.IVideo} instanceVideo
        */
        AppRegistryBridge.instanceVideo = null;
        /**
           @private
           @property {Adaptive.IWallet} instanceWallet
        */
        AppRegistryBridge.instanceWallet = null;
        /**
           @private
           @property {Adaptive.IXML} instanceXML
        */
        AppRegistryBridge.instanceXML = null;
        return AppRegistryBridge;
    })();
    Adaptive.AppRegistryBridge = AppRegistryBridge;
    /**
       @enum {Adaptive.ContactAddressType} Adaptive.ContactAddressType
       Enumeration ContactAddressType
    */
    var ContactAddressType = (function () {
        function ContactAddressType(value) {
            this.value = value;
        }
        ContactAddressType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactAddressType}
        */
        ContactAddressType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ContactAddressType.Unknown;
            }
        };
        /**
           @property {Adaptive.ContactAddressType} [Home='Home']
        */
        ContactAddressType.Home = new ContactAddressType("Home");
        /**
           @property {Adaptive.ContactAddressType} [Work='Work']
        */
        ContactAddressType.Work = new ContactAddressType("Work");
        /**
           @property {Adaptive.ContactAddressType} [Other='Other']
        */
        ContactAddressType.Other = new ContactAddressType("Other");
        /**
           @property {Adaptive.ContactAddressType} [Unknown='Unknown']
        */
        ContactAddressType.Unknown = new ContactAddressType("Unknown");
        return ContactAddressType;
    })();
    Adaptive.ContactAddressType = ContactAddressType;
    /**
       @enum {Adaptive.ContactEmailType} Adaptive.ContactEmailType
       Enumeration ContactEmailType
    */
    var ContactEmailType = (function () {
        function ContactEmailType(value) {
            this.value = value;
        }
        ContactEmailType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactEmailType}
        */
        ContactEmailType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ContactEmailType.Unknown;
            }
        };
        /**
           @property {Adaptive.ContactEmailType} [Personal='Personal']
        */
        ContactEmailType.Personal = new ContactEmailType("Personal");
        /**
           @property {Adaptive.ContactEmailType} [Work='Work']
        */
        ContactEmailType.Work = new ContactEmailType("Work");
        /**
           @property {Adaptive.ContactEmailType} [Other='Other']
        */
        ContactEmailType.Other = new ContactEmailType("Other");
        /**
           @property {Adaptive.ContactEmailType} [Unknown='Unknown']
        */
        ContactEmailType.Unknown = new ContactEmailType("Unknown");
        return ContactEmailType;
    })();
    Adaptive.ContactEmailType = ContactEmailType;
    /**
       @enum {Adaptive.ContactPersonalInfoTitle} Adaptive.ContactPersonalInfoTitle
       Enumeration ContactPersonalInfoTitle
    */
    var ContactPersonalInfoTitle = (function () {
        function ContactPersonalInfoTitle(value) {
            this.value = value;
        }
        ContactPersonalInfoTitle.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactPersonalInfoTitle}
        */
        ContactPersonalInfoTitle.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ContactPersonalInfoTitle.Unknown;
            }
        };
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Mr='Mr']
        */
        ContactPersonalInfoTitle.Mr = new ContactPersonalInfoTitle("Mr");
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Mrs='Mrs']
        */
        ContactPersonalInfoTitle.Mrs = new ContactPersonalInfoTitle("Mrs");
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Ms='Ms']
        */
        ContactPersonalInfoTitle.Ms = new ContactPersonalInfoTitle("Ms");
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Dr='Dr']
        */
        ContactPersonalInfoTitle.Dr = new ContactPersonalInfoTitle("Dr");
        /**
           @property {Adaptive.ContactPersonalInfoTitle} [Unknown='Unknown']
        */
        ContactPersonalInfoTitle.Unknown = new ContactPersonalInfoTitle("Unknown");
        return ContactPersonalInfoTitle;
    })();
    Adaptive.ContactPersonalInfoTitle = ContactPersonalInfoTitle;
    /**
       @enum {Adaptive.ContactPhoneType} Adaptive.ContactPhoneType
       Enumeration ContactPhoneType
    */
    var ContactPhoneType = (function () {
        function ContactPhoneType(value) {
            this.value = value;
        }
        ContactPhoneType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactPhoneType}
        */
        ContactPhoneType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ContactPhoneType.Unknown;
            }
        };
        /**
           @property {Adaptive.ContactPhoneType} [Mobile='Mobile']
        */
        ContactPhoneType.Mobile = new ContactPhoneType("Mobile");
        /**
           @property {Adaptive.ContactPhoneType} [Work='Work']
        */
        ContactPhoneType.Work = new ContactPhoneType("Work");
        /**
           @property {Adaptive.ContactPhoneType} [Home='Home']
        */
        ContactPhoneType.Home = new ContactPhoneType("Home");
        /**
           @property {Adaptive.ContactPhoneType} [Main='Main']
        */
        ContactPhoneType.Main = new ContactPhoneType("Main");
        /**
           @property {Adaptive.ContactPhoneType} [HomeFax='HomeFax']
        */
        ContactPhoneType.HomeFax = new ContactPhoneType("HomeFax");
        /**
           @property {Adaptive.ContactPhoneType} [WorkFax='WorkFax']
        */
        ContactPhoneType.WorkFax = new ContactPhoneType("WorkFax");
        /**
           @property {Adaptive.ContactPhoneType} [Other='Other']
        */
        ContactPhoneType.Other = new ContactPhoneType("Other");
        /**
           @property {Adaptive.ContactPhoneType} [Unknown='Unknown']
        */
        ContactPhoneType.Unknown = new ContactPhoneType("Unknown");
        return ContactPhoneType;
    })();
    Adaptive.ContactPhoneType = ContactPhoneType;
    /**
       @enum {Adaptive.ContactSocialNetwork} Adaptive.ContactSocialNetwork
       Enumeration ContactSocialNetwork
    */
    var ContactSocialNetwork = (function () {
        function ContactSocialNetwork(value) {
            this.value = value;
        }
        ContactSocialNetwork.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ContactSocialNetwork}
        */
        ContactSocialNetwork.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ContactSocialNetwork.Unknown;
            }
        };
        /**
           @property {Adaptive.ContactSocialNetwork} [Twitter='Twitter']
        */
        ContactSocialNetwork.Twitter = new ContactSocialNetwork("Twitter");
        /**
           @property {Adaptive.ContactSocialNetwork} [Facebook='Facebook']
        */
        ContactSocialNetwork.Facebook = new ContactSocialNetwork("Facebook");
        /**
           @property {Adaptive.ContactSocialNetwork} [GooglePlus='GooglePlus']
        */
        ContactSocialNetwork.GooglePlus = new ContactSocialNetwork("GooglePlus");
        /**
           @property {Adaptive.ContactSocialNetwork} [LinkedIn='LinkedIn']
        */
        ContactSocialNetwork.LinkedIn = new ContactSocialNetwork("LinkedIn");
        /**
           @property {Adaptive.ContactSocialNetwork} [Flickr='Flickr']
        */
        ContactSocialNetwork.Flickr = new ContactSocialNetwork("Flickr");
        /**
           @property {Adaptive.ContactSocialNetwork} [Unknown='Unknown']
        */
        ContactSocialNetwork.Unknown = new ContactSocialNetwork("Unknown");
        return ContactSocialNetwork;
    })();
    Adaptive.ContactSocialNetwork = ContactSocialNetwork;
    /**
       @enum {Adaptive.IAccelerationListenerError} Adaptive.IAccelerationListenerError
       Enumeration IAccelerationListenerError
    */
    var IAccelerationListenerError = (function () {
        function IAccelerationListenerError(value) {
            this.value = value;
        }
        IAccelerationListenerError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IAccelerationListenerError}
        */
        IAccelerationListenerError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Unauthorized":
                        return IAccelerationListenerError.Unauthorized;
                    case "Unavailable":
                        return IAccelerationListenerError.Unavailable;
                    case "Unknown":
                        return IAccelerationListenerError.Unknown;
                    default:
                        return IAccelerationListenerError.Unknown;
                }
            }
            else {
                return IAccelerationListenerError.Unknown;
            }
        };
        /**
           @property {Adaptive.IAccelerationListenerError} [Unauthorized='Unauthorized']
        */
        IAccelerationListenerError.Unauthorized = new IAccelerationListenerError("Unauthorized");
        /**
           @property {Adaptive.IAccelerationListenerError} [Unavailable='Unavailable']
        */
        IAccelerationListenerError.Unavailable = new IAccelerationListenerError("Unavailable");
        /**
           @property {Adaptive.IAccelerationListenerError} [Unknown='Unknown']
        */
        IAccelerationListenerError.Unknown = new IAccelerationListenerError("Unknown");
        return IAccelerationListenerError;
    })();
    Adaptive.IAccelerationListenerError = IAccelerationListenerError;
    /**
       @enum {Adaptive.IAccelerationListenerWarning} Adaptive.IAccelerationListenerWarning
       Enumeration IAccelerationListenerWarning
    */
    var IAccelerationListenerWarning = (function () {
        function IAccelerationListenerWarning(value) {
            this.value = value;
        }
        IAccelerationListenerWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IAccelerationListenerWarning}
        */
        IAccelerationListenerWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "NeedsCalibration":
                        return IAccelerationListenerWarning.NeedsCalibration;
                    case "Stale":
                        return IAccelerationListenerWarning.Stale;
                    case "Unknown":
                        return IAccelerationListenerWarning.Unknown;
                    default:
                        return IAccelerationListenerWarning.Unknown;
                }
            }
            else {
                return IAccelerationListenerWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IAccelerationListenerWarning} [NeedsCalibration='NeedsCalibration']
        */
        IAccelerationListenerWarning.NeedsCalibration = new IAccelerationListenerWarning("NeedsCalibration");
        /**
           @property {Adaptive.IAccelerationListenerWarning} [Stale='Stale']
        */
        IAccelerationListenerWarning.Stale = new IAccelerationListenerWarning("Stale");
        /**
           @property {Adaptive.IAccelerationListenerWarning} [Unknown='Unknown']
        */
        IAccelerationListenerWarning.Unknown = new IAccelerationListenerWarning("Unknown");
        return IAccelerationListenerWarning;
    })();
    Adaptive.IAccelerationListenerWarning = IAccelerationListenerWarning;
    /**
       @enum {Adaptive.IAdaptiveRPGroup} Adaptive.IAdaptiveRPGroup
       Enumeration IAdaptiveRPGroup
    */
    var IAdaptiveRPGroup = (function () {
        function IAdaptiveRPGroup(value) {
            this.value = value;
        }
        IAdaptiveRPGroup.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IAdaptiveRPGroup}
        */
        IAdaptiveRPGroup.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IAdaptiveRPGroup.Unknown;
            }
        };
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Application='Application']
        */
        IAdaptiveRPGroup.Application = new IAdaptiveRPGroup("Application");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Commerce='Commerce']
        */
        IAdaptiveRPGroup.Commerce = new IAdaptiveRPGroup("Commerce");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Communication='Communication']
        */
        IAdaptiveRPGroup.Communication = new IAdaptiveRPGroup("Communication");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Data='Data']
        */
        IAdaptiveRPGroup.Data = new IAdaptiveRPGroup("Data");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Media='Media']
        */
        IAdaptiveRPGroup.Media = new IAdaptiveRPGroup("Media");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Notification='Notification']
        */
        IAdaptiveRPGroup.Notification = new IAdaptiveRPGroup("Notification");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [PIM='PIM']
        */
        IAdaptiveRPGroup.PIM = new IAdaptiveRPGroup("PIM");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Reader='Reader']
        */
        IAdaptiveRPGroup.Reader = new IAdaptiveRPGroup("Reader");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Security='Security']
        */
        IAdaptiveRPGroup.Security = new IAdaptiveRPGroup("Security");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Sensor='Sensor']
        */
        IAdaptiveRPGroup.Sensor = new IAdaptiveRPGroup("Sensor");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Social='Social']
        */
        IAdaptiveRPGroup.Social = new IAdaptiveRPGroup("Social");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [System='System']
        */
        IAdaptiveRPGroup.System = new IAdaptiveRPGroup("System");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [UI='UI']
        */
        IAdaptiveRPGroup.UI = new IAdaptiveRPGroup("UI");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Util='Util']
        */
        IAdaptiveRPGroup.Util = new IAdaptiveRPGroup("Util");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Kernel='Kernel']
        */
        IAdaptiveRPGroup.Kernel = new IAdaptiveRPGroup("Kernel");
        /**
           @property {Adaptive.IAdaptiveRPGroup} [Unknown='Unknown']
        */
        IAdaptiveRPGroup.Unknown = new IAdaptiveRPGroup("Unknown");
        return IAdaptiveRPGroup;
    })();
    Adaptive.IAdaptiveRPGroup = IAdaptiveRPGroup;
    /**
       @enum {Adaptive.IButtonListenerError} Adaptive.IButtonListenerError
       Enumeration IButtonListenerError
    */
    var IButtonListenerError = (function () {
        function IButtonListenerError(value) {
            this.value = value;
        }
        IButtonListenerError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IButtonListenerError}
        */
        IButtonListenerError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Not_Present":
                        return IButtonListenerError.Not_Present;
                    case "Unknown":
                        return IButtonListenerError.Unknown;
                    default:
                        return IButtonListenerError.Unknown;
                }
            }
            else {
                return IButtonListenerError.Unknown;
            }
        };
        /**
           @property {Adaptive.IButtonListenerError} [Not_Present='Not_Present']
        */
        IButtonListenerError.Not_Present = new IButtonListenerError("Not_Present");
        /**
           @property {Adaptive.IButtonListenerError} [Unknown='Unknown']
        */
        IButtonListenerError.Unknown = new IButtonListenerError("Unknown");
        return IButtonListenerError;
    })();
    Adaptive.IButtonListenerError = IButtonListenerError;
    /**
       @enum {Adaptive.IButtonListenerWarning} Adaptive.IButtonListenerWarning
       Enumeration IButtonListenerWarning
    */
    var IButtonListenerWarning = (function () {
        function IButtonListenerWarning(value) {
            this.value = value;
        }
        IButtonListenerWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IButtonListenerWarning}
        */
        IButtonListenerWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Not_Implemented":
                        return IButtonListenerWarning.Not_Implemented;
                    case "Unknown":
                        return IButtonListenerWarning.Unknown;
                    default:
                        return IButtonListenerWarning.Unknown;
                }
            }
            else {
                return IButtonListenerWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IButtonListenerWarning} [Not_Implemented='Not_Implemented']
        */
        IButtonListenerWarning.Not_Implemented = new IButtonListenerWarning("Not_Implemented");
        /**
           @property {Adaptive.IButtonListenerWarning} [Unknown='Unknown']
        */
        IButtonListenerWarning.Unknown = new IButtonListenerWarning("Unknown");
        return IButtonListenerWarning;
    })();
    Adaptive.IButtonListenerWarning = IButtonListenerWarning;
    /**
       @enum {Adaptive.ICapabilitiesButton} Adaptive.ICapabilitiesButton
       Enumeration ICapabilitiesButton
    */
    var ICapabilitiesButton = (function () {
        function ICapabilitiesButton(value) {
            this.value = value;
        }
        ICapabilitiesButton.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesButton}
        */
        ICapabilitiesButton.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ICapabilitiesButton.Unknown;
            }
        };
        /**
           @property {Adaptive.ICapabilitiesButton} [HomeButton='HomeButton']
        */
        ICapabilitiesButton.HomeButton = new ICapabilitiesButton("HomeButton");
        /**
           @property {Adaptive.ICapabilitiesButton} [BackButton='BackButton']
        */
        ICapabilitiesButton.BackButton = new ICapabilitiesButton("BackButton");
        /**
           @property {Adaptive.ICapabilitiesButton} [OptionButton='OptionButton']
        */
        ICapabilitiesButton.OptionButton = new ICapabilitiesButton("OptionButton");
        /**
           @property {Adaptive.ICapabilitiesButton} [Unknown='Unknown']
        */
        ICapabilitiesButton.Unknown = new ICapabilitiesButton("Unknown");
        return ICapabilitiesButton;
    })();
    Adaptive.ICapabilitiesButton = ICapabilitiesButton;
    /**
       @enum {Adaptive.ICapabilitiesCommunication} Adaptive.ICapabilitiesCommunication
       Enumeration ICapabilitiesCommunication
    */
    var ICapabilitiesCommunication = (function () {
        function ICapabilitiesCommunication(value) {
            this.value = value;
        }
        ICapabilitiesCommunication.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesCommunication}
        */
        ICapabilitiesCommunication.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ICapabilitiesCommunication.Unknown;
            }
        };
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Calendar='Calendar']
        */
        ICapabilitiesCommunication.Calendar = new ICapabilitiesCommunication("Calendar");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Contact='Contact']
        */
        ICapabilitiesCommunication.Contact = new ICapabilitiesCommunication("Contact");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Mail='Mail']
        */
        ICapabilitiesCommunication.Mail = new ICapabilitiesCommunication("Mail");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Messaging='Messaging']
        */
        ICapabilitiesCommunication.Messaging = new ICapabilitiesCommunication("Messaging");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Telephony='Telephony']
        */
        ICapabilitiesCommunication.Telephony = new ICapabilitiesCommunication("Telephony");
        /**
           @property {Adaptive.ICapabilitiesCommunication} [Unknown='Unknown']
        */
        ICapabilitiesCommunication.Unknown = new ICapabilitiesCommunication("Unknown");
        return ICapabilitiesCommunication;
    })();
    Adaptive.ICapabilitiesCommunication = ICapabilitiesCommunication;
    /**
       @enum {Adaptive.ICapabilitiesData} Adaptive.ICapabilitiesData
       Enumeration ICapabilitiesData
    */
    var ICapabilitiesData = (function () {
        function ICapabilitiesData(value) {
            this.value = value;
        }
        ICapabilitiesData.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesData}
        */
        ICapabilitiesData.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ICapabilitiesData.Unknown;
            }
        };
        /**
           @property {Adaptive.ICapabilitiesData} [Database='Database']
        */
        ICapabilitiesData.Database = new ICapabilitiesData("Database");
        /**
           @property {Adaptive.ICapabilitiesData} [File='File']
        */
        ICapabilitiesData.File = new ICapabilitiesData("File");
        /**
           @property {Adaptive.ICapabilitiesData} [Cloud='Cloud']
        */
        ICapabilitiesData.Cloud = new ICapabilitiesData("Cloud");
        /**
           @property {Adaptive.ICapabilitiesData} [Unknown='Unknown']
        */
        ICapabilitiesData.Unknown = new ICapabilitiesData("Unknown");
        return ICapabilitiesData;
    })();
    Adaptive.ICapabilitiesData = ICapabilitiesData;
    /**
       @enum {Adaptive.ICapabilitiesMedia} Adaptive.ICapabilitiesMedia
       Enumeration ICapabilitiesMedia
    */
    var ICapabilitiesMedia = (function () {
        function ICapabilitiesMedia(value) {
            this.value = value;
        }
        ICapabilitiesMedia.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesMedia}
        */
        ICapabilitiesMedia.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ICapabilitiesMedia.Unknown;
            }
        };
        /**
           @property {Adaptive.ICapabilitiesMedia} [Audio_Playback='Audio_Playback']
        */
        ICapabilitiesMedia.Audio_Playback = new ICapabilitiesMedia("Audio_Playback");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Audio_Recording='Audio_Recording']
        */
        ICapabilitiesMedia.Audio_Recording = new ICapabilitiesMedia("Audio_Recording");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Camera='Camera']
        */
        ICapabilitiesMedia.Camera = new ICapabilitiesMedia("Camera");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Video_Playback='Video_Playback']
        */
        ICapabilitiesMedia.Video_Playback = new ICapabilitiesMedia("Video_Playback");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Video_Recording='Video_Recording']
        */
        ICapabilitiesMedia.Video_Recording = new ICapabilitiesMedia("Video_Recording");
        /**
           @property {Adaptive.ICapabilitiesMedia} [Unknown='Unknown']
        */
        ICapabilitiesMedia.Unknown = new ICapabilitiesMedia("Unknown");
        return ICapabilitiesMedia;
    })();
    Adaptive.ICapabilitiesMedia = ICapabilitiesMedia;
    /**
       @enum {Adaptive.ICapabilitiesNet} Adaptive.ICapabilitiesNet
       Enumeration ICapabilitiesNet
    */
    var ICapabilitiesNet = (function () {
        function ICapabilitiesNet(value) {
            this.value = value;
        }
        ICapabilitiesNet.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesNet}
        */
        ICapabilitiesNet.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ICapabilitiesNet.Unknown;
            }
        };
        /**
           @property {Adaptive.ICapabilitiesNet} [GSM='GSM']
        */
        ICapabilitiesNet.GSM = new ICapabilitiesNet("GSM");
        /**
           @property {Adaptive.ICapabilitiesNet} [GPRS='GPRS']
        */
        ICapabilitiesNet.GPRS = new ICapabilitiesNet("GPRS");
        /**
           @property {Adaptive.ICapabilitiesNet} [HSDPA='HSDPA']
        */
        ICapabilitiesNet.HSDPA = new ICapabilitiesNet("HSDPA");
        /**
           @property {Adaptive.ICapabilitiesNet} [LTE='LTE']
        */
        ICapabilitiesNet.LTE = new ICapabilitiesNet("LTE");
        /**
           @property {Adaptive.ICapabilitiesNet} [WIFI='WIFI']
        */
        ICapabilitiesNet.WIFI = new ICapabilitiesNet("WIFI");
        /**
           @property {Adaptive.ICapabilitiesNet} [Ethernet='Ethernet']
        */
        ICapabilitiesNet.Ethernet = new ICapabilitiesNet("Ethernet");
        /**
           @property {Adaptive.ICapabilitiesNet} [Unavailable='Unavailable']
        */
        ICapabilitiesNet.Unavailable = new ICapabilitiesNet("Unavailable");
        /**
           @property {Adaptive.ICapabilitiesNet} [Unknown='Unknown']
        */
        ICapabilitiesNet.Unknown = new ICapabilitiesNet("Unknown");
        return ICapabilitiesNet;
    })();
    Adaptive.ICapabilitiesNet = ICapabilitiesNet;
    /**
       @enum {Adaptive.ICapabilitiesNotification} Adaptive.ICapabilitiesNotification
       Enumeration ICapabilitiesNotification
    */
    var ICapabilitiesNotification = (function () {
        function ICapabilitiesNotification(value) {
            this.value = value;
        }
        ICapabilitiesNotification.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesNotification}
        */
        ICapabilitiesNotification.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ICapabilitiesNotification.Unknown;
            }
        };
        /**
           @property {Adaptive.ICapabilitiesNotification} [Alarm='Alarm']
        */
        ICapabilitiesNotification.Alarm = new ICapabilitiesNotification("Alarm");
        /**
           @property {Adaptive.ICapabilitiesNotification} [LocalNotification='LocalNotification']
        */
        ICapabilitiesNotification.LocalNotification = new ICapabilitiesNotification("LocalNotification");
        /**
           @property {Adaptive.ICapabilitiesNotification} [RemoteNotification='RemoteNotification']
        */
        ICapabilitiesNotification.RemoteNotification = new ICapabilitiesNotification("RemoteNotification");
        /**
           @property {Adaptive.ICapabilitiesNotification} [Vibration='Vibration']
        */
        ICapabilitiesNotification.Vibration = new ICapabilitiesNotification("Vibration");
        /**
           @property {Adaptive.ICapabilitiesNotification} [Unknown='Unknown']
        */
        ICapabilitiesNotification.Unknown = new ICapabilitiesNotification("Unknown");
        return ICapabilitiesNotification;
    })();
    Adaptive.ICapabilitiesNotification = ICapabilitiesNotification;
    /**
       @enum {Adaptive.ICapabilitiesSensor} Adaptive.ICapabilitiesSensor
       Enumeration ICapabilitiesSensor
    */
    var ICapabilitiesSensor = (function () {
        function ICapabilitiesSensor(value) {
            this.value = value;
        }
        ICapabilitiesSensor.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ICapabilitiesSensor}
        */
        ICapabilitiesSensor.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ICapabilitiesSensor.Unknown;
            }
        };
        /**
           @property {Adaptive.ICapabilitiesSensor} [Accelerometer='Accelerometer']
        */
        ICapabilitiesSensor.Accelerometer = new ICapabilitiesSensor("Accelerometer");
        /**
           @property {Adaptive.ICapabilitiesSensor} [AmbientLight='AmbientLight']
        */
        ICapabilitiesSensor.AmbientLight = new ICapabilitiesSensor("AmbientLight");
        /**
           @property {Adaptive.ICapabilitiesSensor} [Barometer='Barometer']
        */
        ICapabilitiesSensor.Barometer = new ICapabilitiesSensor("Barometer");
        /**
           @property {Adaptive.ICapabilitiesSensor} [Geolocation='Geolocation']
        */
        ICapabilitiesSensor.Geolocation = new ICapabilitiesSensor("Geolocation");
        /**
           @property {Adaptive.ICapabilitiesSensor} [Gyroscope='Gyroscope']
        */
        ICapabilitiesSensor.Gyroscope = new ICapabilitiesSensor("Gyroscope");
        /**
           @property {Adaptive.ICapabilitiesSensor} [Magnetometer='Magnetometer']
        */
        ICapabilitiesSensor.Magnetometer = new ICapabilitiesSensor("Magnetometer");
        /**
           @property {Adaptive.ICapabilitiesSensor} [Proximity='Proximity']
        */
        ICapabilitiesSensor.Proximity = new ICapabilitiesSensor("Proximity");
        /**
           @property {Adaptive.ICapabilitiesSensor} [Unknown='Unknown']
        */
        ICapabilitiesSensor.Unknown = new ICapabilitiesSensor("Unknown");
        return ICapabilitiesSensor;
    })();
    Adaptive.ICapabilitiesSensor = ICapabilitiesSensor;
    /**
       @enum {Adaptive.IContactFieldGroup} Adaptive.IContactFieldGroup
       Enumeration IContactFieldGroup
    */
    var IContactFieldGroup = (function () {
        function IContactFieldGroup(value) {
            this.value = value;
        }
        IContactFieldGroup.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactFieldGroup}
        */
        IContactFieldGroup.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IContactFieldGroup.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactFieldGroup} [PERSONAL_INFO='PERSONAL_INFO']
        */
        IContactFieldGroup.PERSONAL_INFO = new IContactFieldGroup("PERSONAL_INFO");
        /**
           @property {Adaptive.IContactFieldGroup} [PROFESSIONAL_INFO='PROFESSIONAL_INFO']
        */
        IContactFieldGroup.PROFESSIONAL_INFO = new IContactFieldGroup("PROFESSIONAL_INFO");
        /**
           @property {Adaptive.IContactFieldGroup} [ADDRESSES='ADDRESSES']
        */
        IContactFieldGroup.ADDRESSES = new IContactFieldGroup("ADDRESSES");
        /**
           @property {Adaptive.IContactFieldGroup} [PHONES='PHONES']
        */
        IContactFieldGroup.PHONES = new IContactFieldGroup("PHONES");
        /**
           @property {Adaptive.IContactFieldGroup} [EMAILS='EMAILS']
        */
        IContactFieldGroup.EMAILS = new IContactFieldGroup("EMAILS");
        /**
           @property {Adaptive.IContactFieldGroup} [WEBSITES='WEBSITES']
        */
        IContactFieldGroup.WEBSITES = new IContactFieldGroup("WEBSITES");
        /**
           @property {Adaptive.IContactFieldGroup} [SOCIALS='SOCIALS']
        */
        IContactFieldGroup.SOCIALS = new IContactFieldGroup("SOCIALS");
        /**
           @property {Adaptive.IContactFieldGroup} [TAGS='TAGS']
        */
        IContactFieldGroup.TAGS = new IContactFieldGroup("TAGS");
        /**
           @property {Adaptive.IContactFieldGroup} [Unknown='Unknown']
        */
        IContactFieldGroup.Unknown = new IContactFieldGroup("Unknown");
        return IContactFieldGroup;
    })();
    Adaptive.IContactFieldGroup = IContactFieldGroup;
    /**
       @enum {Adaptive.IContactFilter} Adaptive.IContactFilter
       Enumeration IContactFilter
    */
    var IContactFilter = (function () {
        function IContactFilter(value) {
            this.value = value;
        }
        IContactFilter.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactFilter}
        */
        IContactFilter.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IContactFilter.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactFilter} [HAS_PHONE='HAS_PHONE']
        */
        IContactFilter.HAS_PHONE = new IContactFilter("HAS_PHONE");
        /**
           @property {Adaptive.IContactFilter} [HAS_EMAIL='HAS_EMAIL']
        */
        IContactFilter.HAS_EMAIL = new IContactFilter("HAS_EMAIL");
        /**
           @property {Adaptive.IContactFilter} [HAS_ADDRESS='HAS_ADDRESS']
        */
        IContactFilter.HAS_ADDRESS = new IContactFilter("HAS_ADDRESS");
        /**
           @property {Adaptive.IContactFilter} [Unknown='Unknown']
        */
        IContactFilter.Unknown = new IContactFilter("Unknown");
        return IContactFilter;
    })();
    Adaptive.IContactFilter = IContactFilter;
    /**
       @enum {Adaptive.IContactPhotoResultCallbackError} Adaptive.IContactPhotoResultCallbackError
       Enumeration IContactPhotoResultCallbackError
    */
    var IContactPhotoResultCallbackError = (function () {
        function IContactPhotoResultCallbackError(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactPhotoResultCallbackError}
        */
        IContactPhotoResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IContactPhotoResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [NoPermission='NoPermission']
        */
        IContactPhotoResultCallbackError.NoPermission = new IContactPhotoResultCallbackError("NoPermission");
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [Wrong_Params='Wrong_Params']
        */
        IContactPhotoResultCallbackError.Wrong_Params = new IContactPhotoResultCallbackError("Wrong_Params");
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [No_Photo='No_Photo']
        */
        IContactPhotoResultCallbackError.No_Photo = new IContactPhotoResultCallbackError("No_Photo");
        /**
           @property {Adaptive.IContactPhotoResultCallbackError} [Unknown='Unknown']
        */
        IContactPhotoResultCallbackError.Unknown = new IContactPhotoResultCallbackError("Unknown");
        return IContactPhotoResultCallbackError;
    })();
    Adaptive.IContactPhotoResultCallbackError = IContactPhotoResultCallbackError;
    /**
       @enum {Adaptive.IContactPhotoResultCallbackWarning} Adaptive.IContactPhotoResultCallbackWarning
       Enumeration IContactPhotoResultCallbackWarning
    */
    var IContactPhotoResultCallbackWarning = (function () {
        function IContactPhotoResultCallbackWarning(value) {
            this.value = value;
        }
        IContactPhotoResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactPhotoResultCallbackWarning}
        */
        IContactPhotoResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "LimitExceeded":
                        return IContactPhotoResultCallbackWarning.LimitExceeded;
                    case "No_Matches":
                        return IContactPhotoResultCallbackWarning.No_Matches;
                    case "Unknown":
                        return IContactPhotoResultCallbackWarning.Unknown;
                    default:
                        return IContactPhotoResultCallbackWarning.Unknown;
                }
            }
            else {
                return IContactPhotoResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [LimitExceeded='LimitExceeded']
        */
        IContactPhotoResultCallbackWarning.LimitExceeded = new IContactPhotoResultCallbackWarning("LimitExceeded");
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [No_Matches='No_Matches']
        */
        IContactPhotoResultCallbackWarning.No_Matches = new IContactPhotoResultCallbackWarning("No_Matches");
        /**
           @property {Adaptive.IContactPhotoResultCallbackWarning} [Unknown='Unknown']
        */
        IContactPhotoResultCallbackWarning.Unknown = new IContactPhotoResultCallbackWarning("Unknown");
        return IContactPhotoResultCallbackWarning;
    })();
    Adaptive.IContactPhotoResultCallbackWarning = IContactPhotoResultCallbackWarning;
    /**
       @enum {Adaptive.IContactResultCallbackError} Adaptive.IContactResultCallbackError
       Enumeration IContactResultCallbackError
    */
    var IContactResultCallbackError = (function () {
        function IContactResultCallbackError(value) {
            this.value = value;
        }
        IContactResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactResultCallbackError}
        */
        IContactResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "NoPermission":
                        return IContactResultCallbackError.NoPermission;
                    case "Wrong_Params":
                        return IContactResultCallbackError.Wrong_Params;
                    case "Unknown":
                        return IContactResultCallbackError.Unknown;
                    default:
                        return IContactResultCallbackError.Unknown;
                }
            }
            else {
                return IContactResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactResultCallbackError} [NoPermission='NoPermission']
        */
        IContactResultCallbackError.NoPermission = new IContactResultCallbackError("NoPermission");
        /**
           @property {Adaptive.IContactResultCallbackError} [Wrong_Params='Wrong_Params']
        */
        IContactResultCallbackError.Wrong_Params = new IContactResultCallbackError("Wrong_Params");
        /**
           @property {Adaptive.IContactResultCallbackError} [Unknown='Unknown']
        */
        IContactResultCallbackError.Unknown = new IContactResultCallbackError("Unknown");
        return IContactResultCallbackError;
    })();
    Adaptive.IContactResultCallbackError = IContactResultCallbackError;
    /**
       @enum {Adaptive.IContactResultCallbackWarning} Adaptive.IContactResultCallbackWarning
       Enumeration IContactResultCallbackWarning
    */
    var IContactResultCallbackWarning = (function () {
        function IContactResultCallbackWarning(value) {
            this.value = value;
        }
        IContactResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IContactResultCallbackWarning}
        */
        IContactResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "LimitExceeded":
                        return IContactResultCallbackWarning.LimitExceeded;
                    case "No_Matches":
                        return IContactResultCallbackWarning.No_Matches;
                    case "Unknown":
                        return IContactResultCallbackWarning.Unknown;
                    default:
                        return IContactResultCallbackWarning.Unknown;
                }
            }
            else {
                return IContactResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IContactResultCallbackWarning} [LimitExceeded='LimitExceeded']
        */
        IContactResultCallbackWarning.LimitExceeded = new IContactResultCallbackWarning("LimitExceeded");
        /**
           @property {Adaptive.IContactResultCallbackWarning} [No_Matches='No_Matches']
        */
        IContactResultCallbackWarning.No_Matches = new IContactResultCallbackWarning("No_Matches");
        /**
           @property {Adaptive.IContactResultCallbackWarning} [Unknown='Unknown']
        */
        IContactResultCallbackWarning.Unknown = new IContactResultCallbackWarning("Unknown");
        return IContactResultCallbackWarning;
    })();
    Adaptive.IContactResultCallbackWarning = IContactResultCallbackWarning;
    /**
       @enum {Adaptive.IDatabaseResultCallbackError} Adaptive.IDatabaseResultCallbackError
       Enumeration IDatabaseResultCallbackError
    */
    var IDatabaseResultCallbackError = (function () {
        function IDatabaseResultCallbackError(value) {
            this.value = value;
        }
        IDatabaseResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IDatabaseResultCallbackError}
        */
        IDatabaseResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IDatabaseResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IDatabaseResultCallbackError} [NoSpace='NoSpace']
        */
        IDatabaseResultCallbackError.NoSpace = new IDatabaseResultCallbackError("NoSpace");
        /**
           @property {Adaptive.IDatabaseResultCallbackError} [SqlException='SqlException']
        */
        IDatabaseResultCallbackError.SqlException = new IDatabaseResultCallbackError("SqlException");
        /**
           @property {Adaptive.IDatabaseResultCallbackError} [NotDeleted='NotDeleted']
        */
        IDatabaseResultCallbackError.NotDeleted = new IDatabaseResultCallbackError("NotDeleted");
        /**
           @property {Adaptive.IDatabaseResultCallbackError} [Unknown='Unknown']
        */
        IDatabaseResultCallbackError.Unknown = new IDatabaseResultCallbackError("Unknown");
        return IDatabaseResultCallbackError;
    })();
    Adaptive.IDatabaseResultCallbackError = IDatabaseResultCallbackError;
    /**
       @enum {Adaptive.IDatabaseResultCallbackWarning} Adaptive.IDatabaseResultCallbackWarning
       Enumeration IDatabaseResultCallbackWarning
    */
    var IDatabaseResultCallbackWarning = (function () {
        function IDatabaseResultCallbackWarning(value) {
            this.value = value;
        }
        IDatabaseResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IDatabaseResultCallbackWarning}
        */
        IDatabaseResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "DatabaseExists":
                        return IDatabaseResultCallbackWarning.DatabaseExists;
                    case "IsOpen":
                        return IDatabaseResultCallbackWarning.IsOpen;
                    case "Unknown":
                        return IDatabaseResultCallbackWarning.Unknown;
                    default:
                        return IDatabaseResultCallbackWarning.Unknown;
                }
            }
            else {
                return IDatabaseResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IDatabaseResultCallbackWarning} [DatabaseExists='DatabaseExists']
        */
        IDatabaseResultCallbackWarning.DatabaseExists = new IDatabaseResultCallbackWarning("DatabaseExists");
        /**
           @property {Adaptive.IDatabaseResultCallbackWarning} [IsOpen='IsOpen']
        */
        IDatabaseResultCallbackWarning.IsOpen = new IDatabaseResultCallbackWarning("IsOpen");
        /**
           @property {Adaptive.IDatabaseResultCallbackWarning} [Unknown='Unknown']
        */
        IDatabaseResultCallbackWarning.Unknown = new IDatabaseResultCallbackWarning("Unknown");
        return IDatabaseResultCallbackWarning;
    })();
    Adaptive.IDatabaseResultCallbackWarning = IDatabaseResultCallbackWarning;
    /**
       @enum {Adaptive.IDatabaseTableResultCallbackError} Adaptive.IDatabaseTableResultCallbackError
       Enumeration IDatabaseTableResultCallbackError
    */
    var IDatabaseTableResultCallbackError = (function () {
        function IDatabaseTableResultCallbackError(value) {
            this.value = value;
        }
        IDatabaseTableResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IDatabaseTableResultCallbackError}
        */
        IDatabaseTableResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IDatabaseTableResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [NoSpace='NoSpace']
        */
        IDatabaseTableResultCallbackError.NoSpace = new IDatabaseTableResultCallbackError("NoSpace");
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [ReadOnlyTable='ReadOnlyTable']
        */
        IDatabaseTableResultCallbackError.ReadOnlyTable = new IDatabaseTableResultCallbackError("ReadOnlyTable");
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [SqlException='SqlException']
        */
        IDatabaseTableResultCallbackError.SqlException = new IDatabaseTableResultCallbackError("SqlException");
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [DatabaseNotFound='DatabaseNotFound']
        */
        IDatabaseTableResultCallbackError.DatabaseNotFound = new IDatabaseTableResultCallbackError("DatabaseNotFound");
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [NoTableFound='NoTableFound']
        */
        IDatabaseTableResultCallbackError.NoTableFound = new IDatabaseTableResultCallbackError("NoTableFound");
        /**
           @property {Adaptive.IDatabaseTableResultCallbackError} [Unknown='Unknown']
        */
        IDatabaseTableResultCallbackError.Unknown = new IDatabaseTableResultCallbackError("Unknown");
        return IDatabaseTableResultCallbackError;
    })();
    Adaptive.IDatabaseTableResultCallbackError = IDatabaseTableResultCallbackError;
    /**
       @enum {Adaptive.IDatabaseTableResultCallbackWarning} Adaptive.IDatabaseTableResultCallbackWarning
       Enumeration IDatabaseTableResultCallbackWarning
    */
    var IDatabaseTableResultCallbackWarning = (function () {
        function IDatabaseTableResultCallbackWarning(value) {
            this.value = value;
        }
        IDatabaseTableResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IDatabaseTableResultCallbackWarning}
        */
        IDatabaseTableResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IDatabaseTableResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IDatabaseTableResultCallbackWarning} [TableExists='TableExists']
        */
        IDatabaseTableResultCallbackWarning.TableExists = new IDatabaseTableResultCallbackWarning("TableExists");
        /**
           @property {Adaptive.IDatabaseTableResultCallbackWarning} [TableLocked='TableLocked']
        */
        IDatabaseTableResultCallbackWarning.TableLocked = new IDatabaseTableResultCallbackWarning("TableLocked");
        /**
           @property {Adaptive.IDatabaseTableResultCallbackWarning} [NoResults='NoResults']
        */
        IDatabaseTableResultCallbackWarning.NoResults = new IDatabaseTableResultCallbackWarning("NoResults");
        /**
           @property {Adaptive.IDatabaseTableResultCallbackWarning} [Unknown='Unknown']
        */
        IDatabaseTableResultCallbackWarning.Unknown = new IDatabaseTableResultCallbackWarning("Unknown");
        return IDatabaseTableResultCallbackWarning;
    })();
    Adaptive.IDatabaseTableResultCallbackWarning = IDatabaseTableResultCallbackWarning;
    /**
       @enum {Adaptive.IFileDataLoadResultCallbackError} Adaptive.IFileDataLoadResultCallbackError
       Enumeration IFileDataLoadResultCallbackError
    */
    var IFileDataLoadResultCallbackError = (function () {
        function IFileDataLoadResultCallbackError(value) {
            this.value = value;
        }
        IFileDataLoadResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileDataLoadResultCallbackError}
        */
        IFileDataLoadResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IFileDataLoadResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileDataLoadResultCallbackError} [InexistentFile='InexistentFile']
        */
        IFileDataLoadResultCallbackError.InexistentFile = new IFileDataLoadResultCallbackError("InexistentFile");
        /**
           @property {Adaptive.IFileDataLoadResultCallbackError} [InsufficientSpace='InsufficientSpace']
        */
        IFileDataLoadResultCallbackError.InsufficientSpace = new IFileDataLoadResultCallbackError("InsufficientSpace");
        /**
           @property {Adaptive.IFileDataLoadResultCallbackError} [Unauthorized='Unauthorized']
        */
        IFileDataLoadResultCallbackError.Unauthorized = new IFileDataLoadResultCallbackError("Unauthorized");
        /**
           @property {Adaptive.IFileDataLoadResultCallbackError} [Unknown='Unknown']
        */
        IFileDataLoadResultCallbackError.Unknown = new IFileDataLoadResultCallbackError("Unknown");
        return IFileDataLoadResultCallbackError;
    })();
    Adaptive.IFileDataLoadResultCallbackError = IFileDataLoadResultCallbackError;
    /**
       @enum {Adaptive.IFileDataLoadResultCallbackWarning} Adaptive.IFileDataLoadResultCallbackWarning
       Enumeration IFileDataLoadResultCallbackWarning
    */
    var IFileDataLoadResultCallbackWarning = (function () {
        function IFileDataLoadResultCallbackWarning(value) {
            this.value = value;
        }
        IFileDataLoadResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileDataLoadResultCallbackWarning}
        */
        IFileDataLoadResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "ExceedMaximumSize":
                        return IFileDataLoadResultCallbackWarning.ExceedMaximumSize;
                    case "Unknown":
                        return IFileDataLoadResultCallbackWarning.Unknown;
                    default:
                        return IFileDataLoadResultCallbackWarning.Unknown;
                }
            }
            else {
                return IFileDataLoadResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileDataLoadResultCallbackWarning} [ExceedMaximumSize='ExceedMaximumSize']
        */
        IFileDataLoadResultCallbackWarning.ExceedMaximumSize = new IFileDataLoadResultCallbackWarning("ExceedMaximumSize");
        /**
           @property {Adaptive.IFileDataLoadResultCallbackWarning} [Unknown='Unknown']
        */
        IFileDataLoadResultCallbackWarning.Unknown = new IFileDataLoadResultCallbackWarning("Unknown");
        return IFileDataLoadResultCallbackWarning;
    })();
    Adaptive.IFileDataLoadResultCallbackWarning = IFileDataLoadResultCallbackWarning;
    /**
       @enum {Adaptive.IFileDataStoreResultCallbackError} Adaptive.IFileDataStoreResultCallbackError
       Enumeration IFileDataStoreResultCallbackError
    */
    var IFileDataStoreResultCallbackError = (function () {
        function IFileDataStoreResultCallbackError(value) {
            this.value = value;
        }
        IFileDataStoreResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileDataStoreResultCallbackError}
        */
        IFileDataStoreResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IFileDataStoreResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileDataStoreResultCallbackError} [InexistentFile='InexistentFile']
        */
        IFileDataStoreResultCallbackError.InexistentFile = new IFileDataStoreResultCallbackError("InexistentFile");
        /**
           @property {Adaptive.IFileDataStoreResultCallbackError} [InsufficientSpace='InsufficientSpace']
        */
        IFileDataStoreResultCallbackError.InsufficientSpace = new IFileDataStoreResultCallbackError("InsufficientSpace");
        /**
           @property {Adaptive.IFileDataStoreResultCallbackError} [Unauthorized='Unauthorized']
        */
        IFileDataStoreResultCallbackError.Unauthorized = new IFileDataStoreResultCallbackError("Unauthorized");
        /**
           @property {Adaptive.IFileDataStoreResultCallbackError} [Unknown='Unknown']
        */
        IFileDataStoreResultCallbackError.Unknown = new IFileDataStoreResultCallbackError("Unknown");
        return IFileDataStoreResultCallbackError;
    })();
    Adaptive.IFileDataStoreResultCallbackError = IFileDataStoreResultCallbackError;
    /**
       @enum {Adaptive.IFileDataStoreResultCallbackWarning} Adaptive.IFileDataStoreResultCallbackWarning
       Enumeration IFileDataStoreResultCallbackWarning
    */
    var IFileDataStoreResultCallbackWarning = (function () {
        function IFileDataStoreResultCallbackWarning(value) {
            this.value = value;
        }
        IFileDataStoreResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileDataStoreResultCallbackWarning}
        */
        IFileDataStoreResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "ExceedMaximumSize":
                        return IFileDataStoreResultCallbackWarning.ExceedMaximumSize;
                    case "Unknown":
                        return IFileDataStoreResultCallbackWarning.Unknown;
                    default:
                        return IFileDataStoreResultCallbackWarning.Unknown;
                }
            }
            else {
                return IFileDataStoreResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileDataStoreResultCallbackWarning} [ExceedMaximumSize='ExceedMaximumSize']
        */
        IFileDataStoreResultCallbackWarning.ExceedMaximumSize = new IFileDataStoreResultCallbackWarning("ExceedMaximumSize");
        /**
           @property {Adaptive.IFileDataStoreResultCallbackWarning} [Unknown='Unknown']
        */
        IFileDataStoreResultCallbackWarning.Unknown = new IFileDataStoreResultCallbackWarning("Unknown");
        return IFileDataStoreResultCallbackWarning;
    })();
    Adaptive.IFileDataStoreResultCallbackWarning = IFileDataStoreResultCallbackWarning;
    /**
       @enum {Adaptive.IFileListResultCallbackError} Adaptive.IFileListResultCallbackError
       Enumeration IFileListResultCallbackError
    */
    var IFileListResultCallbackError = (function () {
        function IFileListResultCallbackError(value) {
            this.value = value;
        }
        IFileListResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileListResultCallbackError}
        */
        IFileListResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "InexistentFile":
                        return IFileListResultCallbackError.InexistentFile;
                    case "Unauthorized":
                        return IFileListResultCallbackError.Unauthorized;
                    case "Unknown":
                        return IFileListResultCallbackError.Unknown;
                    default:
                        return IFileListResultCallbackError.Unknown;
                }
            }
            else {
                return IFileListResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileListResultCallbackError} [InexistentFile='InexistentFile']
        */
        IFileListResultCallbackError.InexistentFile = new IFileListResultCallbackError("InexistentFile");
        /**
           @property {Adaptive.IFileListResultCallbackError} [Unauthorized='Unauthorized']
        */
        IFileListResultCallbackError.Unauthorized = new IFileListResultCallbackError("Unauthorized");
        /**
           @property {Adaptive.IFileListResultCallbackError} [Unknown='Unknown']
        */
        IFileListResultCallbackError.Unknown = new IFileListResultCallbackError("Unknown");
        return IFileListResultCallbackError;
    })();
    Adaptive.IFileListResultCallbackError = IFileListResultCallbackError;
    /**
       @enum {Adaptive.IFileListResultCallbackWarning} Adaptive.IFileListResultCallbackWarning
       Enumeration IFileListResultCallbackWarning
    */
    var IFileListResultCallbackWarning = (function () {
        function IFileListResultCallbackWarning(value) {
            this.value = value;
        }
        IFileListResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileListResultCallbackWarning}
        */
        IFileListResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "PartialResult":
                        return IFileListResultCallbackWarning.PartialResult;
                    case "Unknown":
                        return IFileListResultCallbackWarning.Unknown;
                    default:
                        return IFileListResultCallbackWarning.Unknown;
                }
            }
            else {
                return IFileListResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileListResultCallbackWarning} [PartialResult='PartialResult']
        */
        IFileListResultCallbackWarning.PartialResult = new IFileListResultCallbackWarning("PartialResult");
        /**
           @property {Adaptive.IFileListResultCallbackWarning} [Unknown='Unknown']
        */
        IFileListResultCallbackWarning.Unknown = new IFileListResultCallbackWarning("Unknown");
        return IFileListResultCallbackWarning;
    })();
    Adaptive.IFileListResultCallbackWarning = IFileListResultCallbackWarning;
    /**
       @enum {Adaptive.IFileResultCallbackError} Adaptive.IFileResultCallbackError
       Enumeration IFileResultCallbackError
    */
    var IFileResultCallbackError = (function () {
        function IFileResultCallbackError(value) {
            this.value = value;
        }
        IFileResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileResultCallbackError}
        */
        IFileResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IFileResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileResultCallbackError} [FileExists='FileExists']
        */
        IFileResultCallbackError.FileExists = new IFileResultCallbackError("FileExists");
        /**
           @property {Adaptive.IFileResultCallbackError} [SourceInexistent='SourceInexistent']
        */
        IFileResultCallbackError.SourceInexistent = new IFileResultCallbackError("SourceInexistent");
        /**
           @property {Adaptive.IFileResultCallbackError} [DestionationExists='DestionationExists']
        */
        IFileResultCallbackError.DestionationExists = new IFileResultCallbackError("DestionationExists");
        /**
           @property {Adaptive.IFileResultCallbackError} [InsufficientSpace='InsufficientSpace']
        */
        IFileResultCallbackError.InsufficientSpace = new IFileResultCallbackError("InsufficientSpace");
        /**
           @property {Adaptive.IFileResultCallbackError} [Unauthorized='Unauthorized']
        */
        IFileResultCallbackError.Unauthorized = new IFileResultCallbackError("Unauthorized");
        /**
           @property {Adaptive.IFileResultCallbackError} [Unknown='Unknown']
        */
        IFileResultCallbackError.Unknown = new IFileResultCallbackError("Unknown");
        return IFileResultCallbackError;
    })();
    Adaptive.IFileResultCallbackError = IFileResultCallbackError;
    /**
       @enum {Adaptive.IFileResultCallbackWarning} Adaptive.IFileResultCallbackWarning
       Enumeration IFileResultCallbackWarning
    */
    var IFileResultCallbackWarning = (function () {
        function IFileResultCallbackWarning(value) {
            this.value = value;
        }
        IFileResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileResultCallbackWarning}
        */
        IFileResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "SourceNotDeleted":
                        return IFileResultCallbackWarning.SourceNotDeleted;
                    case "RootDirectory":
                        return IFileResultCallbackWarning.RootDirectory;
                    case "Unknown":
                        return IFileResultCallbackWarning.Unknown;
                    default:
                        return IFileResultCallbackWarning.Unknown;
                }
            }
            else {
                return IFileResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileResultCallbackWarning} [SourceNotDeleted='SourceNotDeleted']
        */
        IFileResultCallbackWarning.SourceNotDeleted = new IFileResultCallbackWarning("SourceNotDeleted");
        /**
           @property {Adaptive.IFileResultCallbackWarning} [RootDirectory='RootDirectory']
        */
        IFileResultCallbackWarning.RootDirectory = new IFileResultCallbackWarning("RootDirectory");
        /**
           @property {Adaptive.IFileResultCallbackWarning} [Unknown='Unknown']
        */
        IFileResultCallbackWarning.Unknown = new IFileResultCallbackWarning("Unknown");
        return IFileResultCallbackWarning;
    })();
    Adaptive.IFileResultCallbackWarning = IFileResultCallbackWarning;
    /**
       @enum {Adaptive.IFileSystemSecurity} Adaptive.IFileSystemSecurity
       Enumeration IFileSystemSecurity
    */
    var IFileSystemSecurity = (function () {
        function IFileSystemSecurity(value) {
            this.value = value;
        }
        IFileSystemSecurity.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileSystemSecurity}
        */
        IFileSystemSecurity.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IFileSystemSecurity.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileSystemSecurity} [Default='Default']
        */
        IFileSystemSecurity.Default = new IFileSystemSecurity("Default");
        /**
           @property {Adaptive.IFileSystemSecurity} [Protected='Protected']
        */
        IFileSystemSecurity.Protected = new IFileSystemSecurity("Protected");
        /**
           @property {Adaptive.IFileSystemSecurity} [Encrypted='Encrypted']
        */
        IFileSystemSecurity.Encrypted = new IFileSystemSecurity("Encrypted");
        /**
           @property {Adaptive.IFileSystemSecurity} [Unknown='Unknown']
        */
        IFileSystemSecurity.Unknown = new IFileSystemSecurity("Unknown");
        return IFileSystemSecurity;
    })();
    Adaptive.IFileSystemSecurity = IFileSystemSecurity;
    /**
       @enum {Adaptive.IFileSystemStorageType} Adaptive.IFileSystemStorageType
       Enumeration IFileSystemStorageType
    */
    var IFileSystemStorageType = (function () {
        function IFileSystemStorageType(value) {
            this.value = value;
        }
        IFileSystemStorageType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileSystemStorageType}
        */
        IFileSystemStorageType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IFileSystemStorageType.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileSystemStorageType} [Application='Application']
        */
        IFileSystemStorageType.Application = new IFileSystemStorageType("Application");
        /**
           @property {Adaptive.IFileSystemStorageType} [Document='Document']
        */
        IFileSystemStorageType.Document = new IFileSystemStorageType("Document");
        /**
           @property {Adaptive.IFileSystemStorageType} [Cloud='Cloud']
        */
        IFileSystemStorageType.Cloud = new IFileSystemStorageType("Cloud");
        /**
           @property {Adaptive.IFileSystemStorageType} [Protected='Protected']
        */
        IFileSystemStorageType.Protected = new IFileSystemStorageType("Protected");
        /**
           @property {Adaptive.IFileSystemStorageType} [Cache='Cache']
        */
        IFileSystemStorageType.Cache = new IFileSystemStorageType("Cache");
        /**
           @property {Adaptive.IFileSystemStorageType} [External='External']
        */
        IFileSystemStorageType.External = new IFileSystemStorageType("External");
        /**
           @property {Adaptive.IFileSystemStorageType} [Unknown='Unknown']
        */
        IFileSystemStorageType.Unknown = new IFileSystemStorageType("Unknown");
        return IFileSystemStorageType;
    })();
    Adaptive.IFileSystemStorageType = IFileSystemStorageType;
    /**
       @enum {Adaptive.IFileSystemType} Adaptive.IFileSystemType
       Enumeration IFileSystemType
    */
    var IFileSystemType = (function () {
        function IFileSystemType(value) {
            this.value = value;
        }
        IFileSystemType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IFileSystemType}
        */
        IFileSystemType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Directory":
                        return IFileSystemType.Directory;
                    case "File":
                        return IFileSystemType.File;
                    case "Unknown":
                        return IFileSystemType.Unknown;
                    default:
                        return IFileSystemType.Unknown;
                }
            }
            else {
                return IFileSystemType.Unknown;
            }
        };
        /**
           @property {Adaptive.IFileSystemType} [Directory='Directory']
        */
        IFileSystemType.Directory = new IFileSystemType("Directory");
        /**
           @property {Adaptive.IFileSystemType} [File='File']
        */
        IFileSystemType.File = new IFileSystemType("File");
        /**
           @property {Adaptive.IFileSystemType} [Unknown='Unknown']
        */
        IFileSystemType.Unknown = new IFileSystemType("Unknown");
        return IFileSystemType;
    })();
    Adaptive.IFileSystemType = IFileSystemType;
    /**
       @enum {Adaptive.IGeolocationListenerError} Adaptive.IGeolocationListenerError
       Enumeration IGeolocationListenerError
    */
    var IGeolocationListenerError = (function () {
        function IGeolocationListenerError(value) {
            this.value = value;
        }
        IGeolocationListenerError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IGeolocationListenerError}
        */
        IGeolocationListenerError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IGeolocationListenerError.Unknown;
            }
        };
        /**
           @property {Adaptive.IGeolocationListenerError} [Disabled='Disabled']
        */
        IGeolocationListenerError.Disabled = new IGeolocationListenerError("Disabled");
        /**
           @property {Adaptive.IGeolocationListenerError} [RestrictedAccess='RestrictedAccess']
        */
        IGeolocationListenerError.RestrictedAccess = new IGeolocationListenerError("RestrictedAccess");
        /**
           @property {Adaptive.IGeolocationListenerError} [DeniedAccess='DeniedAccess']
        */
        IGeolocationListenerError.DeniedAccess = new IGeolocationListenerError("DeniedAccess");
        /**
           @property {Adaptive.IGeolocationListenerError} [StatusNotDetermined='StatusNotDetermined']
        */
        IGeolocationListenerError.StatusNotDetermined = new IGeolocationListenerError("StatusNotDetermined");
        /**
           @property {Adaptive.IGeolocationListenerError} [Unknown='Unknown']
        */
        IGeolocationListenerError.Unknown = new IGeolocationListenerError("Unknown");
        return IGeolocationListenerError;
    })();
    Adaptive.IGeolocationListenerError = IGeolocationListenerError;
    /**
       @enum {Adaptive.IGeolocationListenerWarning} Adaptive.IGeolocationListenerWarning
       Enumeration IGeolocationListenerWarning
    */
    var IGeolocationListenerWarning = (function () {
        function IGeolocationListenerWarning(value) {
            this.value = value;
        }
        IGeolocationListenerWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IGeolocationListenerWarning}
        */
        IGeolocationListenerWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "HighDoP":
                        return IGeolocationListenerWarning.HighDoP;
                    case "StaleData":
                        return IGeolocationListenerWarning.StaleData;
                    case "Unknown":
                        return IGeolocationListenerWarning.Unknown;
                    default:
                        return IGeolocationListenerWarning.Unknown;
                }
            }
            else {
                return IGeolocationListenerWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IGeolocationListenerWarning} [HighDoP='HighDoP']
        */
        IGeolocationListenerWarning.HighDoP = new IGeolocationListenerWarning("HighDoP");
        /**
           @property {Adaptive.IGeolocationListenerWarning} [StaleData='StaleData']
        */
        IGeolocationListenerWarning.StaleData = new IGeolocationListenerWarning("StaleData");
        /**
           @property {Adaptive.IGeolocationListenerWarning} [Unknown='Unknown']
        */
        IGeolocationListenerWarning.Unknown = new IGeolocationListenerWarning("Unknown");
        return IGeolocationListenerWarning;
    })();
    Adaptive.IGeolocationListenerWarning = IGeolocationListenerWarning;
    /**
       @enum {Adaptive.ILifecycleListenerError} Adaptive.ILifecycleListenerError
       Enumeration ILifecycleListenerError
    */
    var ILifecycleListenerError = (function () {
        function ILifecycleListenerError(value) {
            this.value = value;
        }
        ILifecycleListenerError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ILifecycleListenerError}
        */
        ILifecycleListenerError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ILifecycleListenerError.Unknown;
            }
        };
        /**
           @property {Adaptive.ILifecycleListenerError} [Runtime='Runtime']
        */
        ILifecycleListenerError.Runtime = new ILifecycleListenerError("Runtime");
        /**
           @property {Adaptive.ILifecycleListenerError} [Implementation='Implementation']
        */
        ILifecycleListenerError.Implementation = new ILifecycleListenerError("Implementation");
        /**
           @property {Adaptive.ILifecycleListenerError} [Killed='Killed']
        */
        ILifecycleListenerError.Killed = new ILifecycleListenerError("Killed");
        /**
           @property {Adaptive.ILifecycleListenerError} [Unknown='Unknown']
        */
        ILifecycleListenerError.Unknown = new ILifecycleListenerError("Unknown");
        return ILifecycleListenerError;
    })();
    Adaptive.ILifecycleListenerError = ILifecycleListenerError;
    /**
       @enum {Adaptive.ILifecycleListenerWarning} Adaptive.ILifecycleListenerWarning
       Enumeration ILifecycleListenerWarning
    */
    var ILifecycleListenerWarning = (function () {
        function ILifecycleListenerWarning(value) {
            this.value = value;
        }
        ILifecycleListenerWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ILifecycleListenerWarning}
        */
        ILifecycleListenerWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "MemoryLow":
                        return ILifecycleListenerWarning.MemoryLow;
                    case "BatteryLow":
                        return ILifecycleListenerWarning.BatteryLow;
                    case "Unknown":
                        return ILifecycleListenerWarning.Unknown;
                    default:
                        return ILifecycleListenerWarning.Unknown;
                }
            }
            else {
                return ILifecycleListenerWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.ILifecycleListenerWarning} [MemoryLow='MemoryLow']
        */
        ILifecycleListenerWarning.MemoryLow = new ILifecycleListenerWarning("MemoryLow");
        /**
           @property {Adaptive.ILifecycleListenerWarning} [BatteryLow='BatteryLow']
        */
        ILifecycleListenerWarning.BatteryLow = new ILifecycleListenerWarning("BatteryLow");
        /**
           @property {Adaptive.ILifecycleListenerWarning} [Unknown='Unknown']
        */
        ILifecycleListenerWarning.Unknown = new ILifecycleListenerWarning("Unknown");
        return ILifecycleListenerWarning;
    })();
    Adaptive.ILifecycleListenerWarning = ILifecycleListenerWarning;
    /**
       @enum {Adaptive.ILoggingLogLevel} Adaptive.ILoggingLogLevel
       Enumeration ILoggingLogLevel
    */
    var ILoggingLogLevel = (function () {
        function ILoggingLogLevel(value) {
            this.value = value;
        }
        ILoggingLogLevel.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ILoggingLogLevel}
        */
        ILoggingLogLevel.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return ILoggingLogLevel.Unknown;
            }
        };
        /**
           @property {Adaptive.ILoggingLogLevel} [DEBUG='DEBUG']
        */
        ILoggingLogLevel.DEBUG = new ILoggingLogLevel("DEBUG");
        /**
           @property {Adaptive.ILoggingLogLevel} [WARN='WARN']
        */
        ILoggingLogLevel.WARN = new ILoggingLogLevel("WARN");
        /**
           @property {Adaptive.ILoggingLogLevel} [ERROR='ERROR']
        */
        ILoggingLogLevel.ERROR = new ILoggingLogLevel("ERROR");
        /**
           @property {Adaptive.ILoggingLogLevel} [INFO='INFO']
        */
        ILoggingLogLevel.INFO = new ILoggingLogLevel("INFO");
        /**
           @property {Adaptive.ILoggingLogLevel} [Unknown='Unknown']
        */
        ILoggingLogLevel.Unknown = new ILoggingLogLevel("Unknown");
        return ILoggingLogLevel;
    })();
    Adaptive.ILoggingLogLevel = ILoggingLogLevel;
    /**
       @enum {Adaptive.IMessagingCallbackError} Adaptive.IMessagingCallbackError
       Enumeration IMessagingCallbackError
    */
    var IMessagingCallbackError = (function () {
        function IMessagingCallbackError(value) {
            this.value = value;
        }
        IMessagingCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IMessagingCallbackError}
        */
        IMessagingCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IMessagingCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IMessagingCallbackError} [SIMNotPresent='SIMNotPresent']
        */
        IMessagingCallbackError.SIMNotPresent = new IMessagingCallbackError("SIMNotPresent");
        /**
           @property {Adaptive.IMessagingCallbackError} [EmailAccountNotFound='EmailAccountNotFound']
        */
        IMessagingCallbackError.EmailAccountNotFound = new IMessagingCallbackError("EmailAccountNotFound");
        /**
           @property {Adaptive.IMessagingCallbackError} [NotSent='NotSent']
        */
        IMessagingCallbackError.NotSent = new IMessagingCallbackError("NotSent");
        /**
           @property {Adaptive.IMessagingCallbackError} [WrongParams='WrongParams']
        */
        IMessagingCallbackError.WrongParams = new IMessagingCallbackError("WrongParams");
        /**
           @property {Adaptive.IMessagingCallbackError} [NotSupported='NotSupported']
        */
        IMessagingCallbackError.NotSupported = new IMessagingCallbackError("NotSupported");
        /**
           @property {Adaptive.IMessagingCallbackError} [Unknown='Unknown']
        */
        IMessagingCallbackError.Unknown = new IMessagingCallbackError("Unknown");
        return IMessagingCallbackError;
    })();
    Adaptive.IMessagingCallbackError = IMessagingCallbackError;
    /**
       @enum {Adaptive.IMessagingCallbackWarning} Adaptive.IMessagingCallbackWarning
       Enumeration IMessagingCallbackWarning
    */
    var IMessagingCallbackWarning = (function () {
        function IMessagingCallbackWarning(value) {
            this.value = value;
        }
        IMessagingCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IMessagingCallbackWarning}
        */
        IMessagingCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "UnableToSentAll":
                        return IMessagingCallbackWarning.UnableToSentAll;
                    case "UnableToFetchAttachment":
                        return IMessagingCallbackWarning.UnableToFetchAttachment;
                    case "Unknown":
                        return IMessagingCallbackWarning.Unknown;
                    default:
                        return IMessagingCallbackWarning.Unknown;
                }
            }
            else {
                return IMessagingCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IMessagingCallbackWarning} [UnableToSentAll='UnableToSentAll']
        */
        IMessagingCallbackWarning.UnableToSentAll = new IMessagingCallbackWarning("UnableToSentAll");
        /**
           @property {Adaptive.IMessagingCallbackWarning} [UnableToFetchAttachment='UnableToFetchAttachment']
        */
        IMessagingCallbackWarning.UnableToFetchAttachment = new IMessagingCallbackWarning("UnableToFetchAttachment");
        /**
           @property {Adaptive.IMessagingCallbackWarning} [Unknown='Unknown']
        */
        IMessagingCallbackWarning.Unknown = new IMessagingCallbackWarning("Unknown");
        return IMessagingCallbackWarning;
    })();
    Adaptive.IMessagingCallbackWarning = IMessagingCallbackWarning;
    /**
       @enum {Adaptive.INetworkReachabilityCallbackError} Adaptive.INetworkReachabilityCallbackError
       Enumeration INetworkReachabilityCallbackError
    */
    var INetworkReachabilityCallbackError = (function () {
        function INetworkReachabilityCallbackError(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.INetworkReachabilityCallbackError}
        */
        INetworkReachabilityCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return INetworkReachabilityCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [Forbidden='Forbidden']
        */
        INetworkReachabilityCallbackError.Forbidden = new INetworkReachabilityCallbackError("Forbidden");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [NotFound='NotFound']
        */
        INetworkReachabilityCallbackError.NotFound = new INetworkReachabilityCallbackError("NotFound");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [MethodNotAllowed='MethodNotAllowed']
        */
        INetworkReachabilityCallbackError.MethodNotAllowed = new INetworkReachabilityCallbackError("MethodNotAllowed");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [NotAllowed='NotAllowed']
        */
        INetworkReachabilityCallbackError.NotAllowed = new INetworkReachabilityCallbackError("NotAllowed");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [NotAuthenticated='NotAuthenticated']
        */
        INetworkReachabilityCallbackError.NotAuthenticated = new INetworkReachabilityCallbackError("NotAuthenticated");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [TimeOut='TimeOut']
        */
        INetworkReachabilityCallbackError.TimeOut = new INetworkReachabilityCallbackError("TimeOut");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [NoResponse='NoResponse']
        */
        INetworkReachabilityCallbackError.NoResponse = new INetworkReachabilityCallbackError("NoResponse");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [Unreachable='Unreachable']
        */
        INetworkReachabilityCallbackError.Unreachable = new INetworkReachabilityCallbackError("Unreachable");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [Wrong_Params='Wrong_Params']
        */
        INetworkReachabilityCallbackError.Wrong_Params = new INetworkReachabilityCallbackError("Wrong_Params");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [MalformedUrl='MalformedUrl']
        */
        INetworkReachabilityCallbackError.MalformedUrl = new INetworkReachabilityCallbackError("MalformedUrl");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [DomainUnresolvable='DomainUnresolvable']
        */
        INetworkReachabilityCallbackError.DomainUnresolvable = new INetworkReachabilityCallbackError("DomainUnresolvable");
        /**
           @property {Adaptive.INetworkReachabilityCallbackError} [Unknown='Unknown']
        */
        INetworkReachabilityCallbackError.Unknown = new INetworkReachabilityCallbackError("Unknown");
        return INetworkReachabilityCallbackError;
    })();
    Adaptive.INetworkReachabilityCallbackError = INetworkReachabilityCallbackError;
    /**
       @enum {Adaptive.INetworkReachabilityCallbackWarning} Adaptive.INetworkReachabilityCallbackWarning
       Enumeration INetworkReachabilityCallbackWarning
    */
    var INetworkReachabilityCallbackWarning = (function () {
        function INetworkReachabilityCallbackWarning(value) {
            this.value = value;
        }
        INetworkReachabilityCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.INetworkReachabilityCallbackWarning}
        */
        INetworkReachabilityCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return INetworkReachabilityCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [IncorrectScheme='IncorrectScheme']
        */
        INetworkReachabilityCallbackWarning.IncorrectScheme = new INetworkReachabilityCallbackWarning("IncorrectScheme");
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [NotSecure='NotSecure']
        */
        INetworkReachabilityCallbackWarning.NotSecure = new INetworkReachabilityCallbackWarning("NotSecure");
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [NotTrusted='NotTrusted']
        */
        INetworkReachabilityCallbackWarning.NotTrusted = new INetworkReachabilityCallbackWarning("NotTrusted");
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [Redirected='Redirected']
        */
        INetworkReachabilityCallbackWarning.Redirected = new INetworkReachabilityCallbackWarning("Redirected");
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [NotRegisteredService='NotRegisteredService']
        */
        INetworkReachabilityCallbackWarning.NotRegisteredService = new INetworkReachabilityCallbackWarning("NotRegisteredService");
        /**
           @property {Adaptive.INetworkReachabilityCallbackWarning} [Unknown='Unknown']
        */
        INetworkReachabilityCallbackWarning.Unknown = new INetworkReachabilityCallbackWarning("Unknown");
        return INetworkReachabilityCallbackWarning;
    })();
    Adaptive.INetworkReachabilityCallbackWarning = INetworkReachabilityCallbackWarning;
    /**
       @enum {Adaptive.INetworkStatusListenerError} Adaptive.INetworkStatusListenerError
       Enumeration INetworkStatusListenerError
    */
    var INetworkStatusListenerError = (function () {
        function INetworkStatusListenerError(value) {
            this.value = value;
        }
        INetworkStatusListenerError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.INetworkStatusListenerError}
        */
        INetworkStatusListenerError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "NoPermission":
                        return INetworkStatusListenerError.NoPermission;
                    case "Unreachable":
                        return INetworkStatusListenerError.Unreachable;
                    case "Unknown":
                        return INetworkStatusListenerError.Unknown;
                    default:
                        return INetworkStatusListenerError.Unknown;
                }
            }
            else {
                return INetworkStatusListenerError.Unknown;
            }
        };
        /**
           @property {Adaptive.INetworkStatusListenerError} [NoPermission='NoPermission']
        */
        INetworkStatusListenerError.NoPermission = new INetworkStatusListenerError("NoPermission");
        /**
           @property {Adaptive.INetworkStatusListenerError} [Unreachable='Unreachable']
        */
        INetworkStatusListenerError.Unreachable = new INetworkStatusListenerError("Unreachable");
        /**
           @property {Adaptive.INetworkStatusListenerError} [Unknown='Unknown']
        */
        INetworkStatusListenerError.Unknown = new INetworkStatusListenerError("Unknown");
        return INetworkStatusListenerError;
    })();
    Adaptive.INetworkStatusListenerError = INetworkStatusListenerError;
    /**
       @enum {Adaptive.INetworkStatusListenerWarning} Adaptive.INetworkStatusListenerWarning
       Enumeration INetworkStatusListenerWarning
    */
    var INetworkStatusListenerWarning = (function () {
        function INetworkStatusListenerWarning(value) {
            this.value = value;
        }
        INetworkStatusListenerWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.INetworkStatusListenerWarning}
        */
        INetworkStatusListenerWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "IpAddressNotAssigned":
                        return INetworkStatusListenerWarning.IpAddressNotAssigned;
                    case "IpAddressChanged":
                        return INetworkStatusListenerWarning.IpAddressChanged;
                    case "Unknown":
                        return INetworkStatusListenerWarning.Unknown;
                    default:
                        return INetworkStatusListenerWarning.Unknown;
                }
            }
            else {
                return INetworkStatusListenerWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.INetworkStatusListenerWarning} [IpAddressNotAssigned='IpAddressNotAssigned']
        */
        INetworkStatusListenerWarning.IpAddressNotAssigned = new INetworkStatusListenerWarning("IpAddressNotAssigned");
        /**
           @property {Adaptive.INetworkStatusListenerWarning} [IpAddressChanged='IpAddressChanged']
        */
        INetworkStatusListenerWarning.IpAddressChanged = new INetworkStatusListenerWarning("IpAddressChanged");
        /**
           @property {Adaptive.INetworkStatusListenerWarning} [Unknown='Unknown']
        */
        INetworkStatusListenerWarning.Unknown = new INetworkStatusListenerWarning("Unknown");
        return INetworkStatusListenerWarning;
    })();
    Adaptive.INetworkStatusListenerWarning = INetworkStatusListenerWarning;
    /**
       @enum {Adaptive.IOSType} Adaptive.IOSType
       Enumeration IOSType
    */
    var IOSType = (function () {
        function IOSType(value) {
            this.value = value;
        }
        IOSType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IOSType}
        */
        IOSType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IOSType.Unknown;
            }
        };
        /**
           @property {Adaptive.IOSType} [iOS='iOS']
        */
        IOSType.iOS = new IOSType("iOS");
        /**
           @property {Adaptive.IOSType} [OSX='OSX']
        */
        IOSType.OSX = new IOSType("OSX");
        /**
           @property {Adaptive.IOSType} [Windows='Windows']
        */
        IOSType.Windows = new IOSType("Windows");
        /**
           @property {Adaptive.IOSType} [WindowsPhone='WindowsPhone']
        */
        IOSType.WindowsPhone = new IOSType("WindowsPhone");
        /**
           @property {Adaptive.IOSType} [Android='Android']
        */
        IOSType.Android = new IOSType("Android");
        /**
           @property {Adaptive.IOSType} [Linux='Linux']
        */
        IOSType.Linux = new IOSType("Linux");
        /**
           @property {Adaptive.IOSType} [Blackberry='Blackberry']
        */
        IOSType.Blackberry = new IOSType("Blackberry");
        /**
           @property {Adaptive.IOSType} [Tizen='Tizen']
        */
        IOSType.Tizen = new IOSType("Tizen");
        /**
           @property {Adaptive.IOSType} [FirefoxOS='FirefoxOS']
        */
        IOSType.FirefoxOS = new IOSType("FirefoxOS");
        /**
           @property {Adaptive.IOSType} [Chromium='Chromium']
        */
        IOSType.Chromium = new IOSType("Chromium");
        /**
           @property {Adaptive.IOSType} [Unspecified='Unspecified']
        */
        IOSType.Unspecified = new IOSType("Unspecified");
        /**
           @property {Adaptive.IOSType} [Unknown='Unknown']
        */
        IOSType.Unknown = new IOSType("Unknown");
        return IOSType;
    })();
    Adaptive.IOSType = IOSType;
    /**
       @enum {Adaptive.ISecurityResultCallbackError} Adaptive.ISecurityResultCallbackError
       Enumeration ISecurityResultCallbackError
    */
    var ISecurityResultCallbackError = (function () {
        function ISecurityResultCallbackError(value) {
            this.value = value;
        }
        ISecurityResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ISecurityResultCallbackError}
        */
        ISecurityResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "NoPermission":
                        return ISecurityResultCallbackError.NoPermission;
                    case "NoMatchesFound":
                        return ISecurityResultCallbackError.NoMatchesFound;
                    case "Unknown":
                        return ISecurityResultCallbackError.Unknown;
                    default:
                        return ISecurityResultCallbackError.Unknown;
                }
            }
            else {
                return ISecurityResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.ISecurityResultCallbackError} [NoPermission='NoPermission']
        */
        ISecurityResultCallbackError.NoPermission = new ISecurityResultCallbackError("NoPermission");
        /**
           @property {Adaptive.ISecurityResultCallbackError} [NoMatchesFound='NoMatchesFound']
        */
        ISecurityResultCallbackError.NoMatchesFound = new ISecurityResultCallbackError("NoMatchesFound");
        /**
           @property {Adaptive.ISecurityResultCallbackError} [Unknown='Unknown']
        */
        ISecurityResultCallbackError.Unknown = new ISecurityResultCallbackError("Unknown");
        return ISecurityResultCallbackError;
    })();
    Adaptive.ISecurityResultCallbackError = ISecurityResultCallbackError;
    /**
       @enum {Adaptive.ISecurityResultCallbackWarning} Adaptive.ISecurityResultCallbackWarning
       Enumeration ISecurityResultCallbackWarning
    */
    var ISecurityResultCallbackWarning = (function () {
        function ISecurityResultCallbackWarning(value) {
            this.value = value;
        }
        ISecurityResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ISecurityResultCallbackWarning}
        */
        ISecurityResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "EntryOverride":
                        return ISecurityResultCallbackWarning.EntryOverride;
                    case "Unknown":
                        return ISecurityResultCallbackWarning.Unknown;
                    default:
                        return ISecurityResultCallbackWarning.Unknown;
                }
            }
            else {
                return ISecurityResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.ISecurityResultCallbackWarning} [EntryOverride='EntryOverride']
        */
        ISecurityResultCallbackWarning.EntryOverride = new ISecurityResultCallbackWarning("EntryOverride");
        /**
           @property {Adaptive.ISecurityResultCallbackWarning} [Unknown='Unknown']
        */
        ISecurityResultCallbackWarning.Unknown = new ISecurityResultCallbackWarning("Unknown");
        return ISecurityResultCallbackWarning;
    })();
    Adaptive.ISecurityResultCallbackWarning = ISecurityResultCallbackWarning;
    /**
       @enum {Adaptive.IServiceProtocolVersion} Adaptive.IServiceProtocolVersion
       Enumeration IServiceProtocolVersion
    */
    var IServiceProtocolVersion = (function () {
        function IServiceProtocolVersion(value) {
            this.value = value;
        }
        IServiceProtocolVersion.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceProtocolVersion}
        */
        IServiceProtocolVersion.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "HttpProtocolVersion10":
                        return IServiceProtocolVersion.HttpProtocolVersion10;
                    case "HttpProtocolVersion11":
                        return IServiceProtocolVersion.HttpProtocolVersion11;
                    case "Unknown":
                        return IServiceProtocolVersion.Unknown;
                    default:
                        return IServiceProtocolVersion.Unknown;
                }
            }
            else {
                return IServiceProtocolVersion.Unknown;
            }
        };
        /**
           @property {Adaptive.IServiceProtocolVersion} [HttpProtocolVersion10='HttpProtocolVersion10']
        */
        IServiceProtocolVersion.HttpProtocolVersion10 = new IServiceProtocolVersion("HttpProtocolVersion10");
        /**
           @property {Adaptive.IServiceProtocolVersion} [HttpProtocolVersion11='HttpProtocolVersion11']
        */
        IServiceProtocolVersion.HttpProtocolVersion11 = new IServiceProtocolVersion("HttpProtocolVersion11");
        /**
           @property {Adaptive.IServiceProtocolVersion} [Unknown='Unknown']
        */
        IServiceProtocolVersion.Unknown = new IServiceProtocolVersion("Unknown");
        return IServiceProtocolVersion;
    })();
    Adaptive.IServiceProtocolVersion = IServiceProtocolVersion;
    /**
       @enum {Adaptive.IServiceMethod} Adaptive.IServiceMethod
       Enumeration IServiceMethod
    */
    var IServiceMethod = (function () {
        function IServiceMethod(value) {
            this.value = value;
        }
        IServiceMethod.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceMethod}
        */
        IServiceMethod.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Post":
                        return IServiceMethod.Post;
                    case "Get":
                        return IServiceMethod.Get;
                    case "Unknown":
                        return IServiceMethod.Unknown;
                    default:
                        return IServiceMethod.Unknown;
                }
            }
            else {
                return IServiceMethod.Unknown;
            }
        };
        /**
           @property {Adaptive.IServiceMethod} [Post='Post']
        */
        IServiceMethod.Post = new IServiceMethod("Post");
        /**
           @property {Adaptive.IServiceMethod} [Get='Get']
        */
        IServiceMethod.Get = new IServiceMethod("Get");
        /**
           @property {Adaptive.IServiceMethod} [Unknown='Unknown']
        */
        IServiceMethod.Unknown = new IServiceMethod("Unknown");
        return IServiceMethod;
    })();
    Adaptive.IServiceMethod = IServiceMethod;
    /**
       @enum {Adaptive.IServiceType} Adaptive.IServiceType
       Enumeration IServiceType
    */
    var IServiceType = (function () {
        function IServiceType(value) {
            this.value = value;
        }
        IServiceType.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceType}
        */
        IServiceType.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IServiceType.Unknown;
            }
        };
        /**
           @property {Adaptive.IServiceType} [ServiceTypeAmfSerialization='ServiceTypeAmfSerialization']
        */
        IServiceType.ServiceTypeAmfSerialization = new IServiceType("ServiceTypeAmfSerialization");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeGwtRpc='ServiceTypeGwtRpc']
        */
        IServiceType.ServiceTypeGwtRpc = new IServiceType("ServiceTypeGwtRpc");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeOctetBinary='ServiceTypeOctetBinary']
        */
        IServiceType.ServiceTypeOctetBinary = new IServiceType("ServiceTypeOctetBinary");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRemotingSerialization='ServiceTypeRemotingSerialization']
        */
        IServiceType.ServiceTypeRemotingSerialization = new IServiceType("ServiceTypeRemotingSerialization");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRestJson='ServiceTypeRestJson']
        */
        IServiceType.ServiceTypeRestJson = new IServiceType("ServiceTypeRestJson");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeRestXml='ServiceTypeRestXml']
        */
        IServiceType.ServiceTypeRestXml = new IServiceType("ServiceTypeRestXml");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeSoapJson='ServiceTypeSoapJson']
        */
        IServiceType.ServiceTypeSoapJson = new IServiceType("ServiceTypeSoapJson");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeSoapXml='ServiceTypeSoapXml']
        */
        IServiceType.ServiceTypeSoapXml = new IServiceType("ServiceTypeSoapXml");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeXmlRpcJson='ServiceTypeXmlRpcJson']
        */
        IServiceType.ServiceTypeXmlRpcJson = new IServiceType("ServiceTypeXmlRpcJson");
        /**
           @property {Adaptive.IServiceType} [ServiceTypeXmlRpcXml='ServiceTypeXmlRpcXml']
        */
        IServiceType.ServiceTypeXmlRpcXml = new IServiceType("ServiceTypeXmlRpcXml");
        /**
           @property {Adaptive.IServiceType} [Unknown='Unknown']
        */
        IServiceType.Unknown = new IServiceType("Unknown");
        return IServiceType;
    })();
    Adaptive.IServiceType = IServiceType;
    /**
       @enum {Adaptive.IServiceResultCallbackError} Adaptive.IServiceResultCallbackError
       Enumeration IServiceResultCallbackError
    */
    var IServiceResultCallbackError = (function () {
        function IServiceResultCallbackError(value) {
            this.value = value;
        }
        IServiceResultCallbackError.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceResultCallbackError}
        */
        IServiceResultCallbackError.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IServiceResultCallbackError.Unknown;
            }
        };
        /**
           @property {Adaptive.IServiceResultCallbackError} [Forbidden='Forbidden']
        */
        IServiceResultCallbackError.Forbidden = new IServiceResultCallbackError("Forbidden");
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotFound='NotFound']
        */
        IServiceResultCallbackError.NotFound = new IServiceResultCallbackError("NotFound");
        /**
           @property {Adaptive.IServiceResultCallbackError} [MethodNotAllowed='MethodNotAllowed']
        */
        IServiceResultCallbackError.MethodNotAllowed = new IServiceResultCallbackError("MethodNotAllowed");
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotAllowed='NotAllowed']
        */
        IServiceResultCallbackError.NotAllowed = new IServiceResultCallbackError("NotAllowed");
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotAuthenticated='NotAuthenticated']
        */
        IServiceResultCallbackError.NotAuthenticated = new IServiceResultCallbackError("NotAuthenticated");
        /**
           @property {Adaptive.IServiceResultCallbackError} [TimeOut='TimeOut']
        */
        IServiceResultCallbackError.TimeOut = new IServiceResultCallbackError("TimeOut");
        /**
           @property {Adaptive.IServiceResultCallbackError} [NoResponse='NoResponse']
        */
        IServiceResultCallbackError.NoResponse = new IServiceResultCallbackError("NoResponse");
        /**
           @property {Adaptive.IServiceResultCallbackError} [ServerError='ServerError']
        */
        IServiceResultCallbackError.ServerError = new IServiceResultCallbackError("ServerError");
        /**
           @property {Adaptive.IServiceResultCallbackError} [Unreachable='Unreachable']
        */
        IServiceResultCallbackError.Unreachable = new IServiceResultCallbackError("Unreachable");
        /**
           @property {Adaptive.IServiceResultCallbackError} [MalformedUrl='MalformedUrl']
        */
        IServiceResultCallbackError.MalformedUrl = new IServiceResultCallbackError("MalformedUrl");
        /**
           @property {Adaptive.IServiceResultCallbackError} [NotRegisteredService='NotRegisteredService']
        */
        IServiceResultCallbackError.NotRegisteredService = new IServiceResultCallbackError("NotRegisteredService");
        /**
           @property {Adaptive.IServiceResultCallbackError} [Unknown='Unknown']
        */
        IServiceResultCallbackError.Unknown = new IServiceResultCallbackError("Unknown");
        return IServiceResultCallbackError;
    })();
    Adaptive.IServiceResultCallbackError = IServiceResultCallbackError;
    /**
       @enum {Adaptive.IServiceResultCallbackWarning} Adaptive.IServiceResultCallbackWarning
       Enumeration IServiceResultCallbackWarning
    */
    var IServiceResultCallbackWarning = (function () {
        function IServiceResultCallbackWarning(value) {
            this.value = value;
        }
        IServiceResultCallbackWarning.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.IServiceResultCallbackWarning}
        */
        IServiceResultCallbackWarning.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return IServiceResultCallbackWarning.Unknown;
            }
        };
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [NotSecure='NotSecure']
        */
        IServiceResultCallbackWarning.NotSecure = new IServiceResultCallbackWarning("NotSecure");
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [NotTrusted='NotTrusted']
        */
        IServiceResultCallbackWarning.NotTrusted = new IServiceResultCallbackWarning("NotTrusted");
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [Redirected='Redirected']
        */
        IServiceResultCallbackWarning.Redirected = new IServiceResultCallbackWarning("Redirected");
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [Wrong_Params='Wrong_Params']
        */
        IServiceResultCallbackWarning.Wrong_Params = new IServiceResultCallbackWarning("Wrong_Params");
        /**
           @property {Adaptive.IServiceResultCallbackWarning} [Unknown='Unknown']
        */
        IServiceResultCallbackWarning.Unknown = new IServiceResultCallbackWarning("Unknown");
        return IServiceResultCallbackWarning;
    })();
    Adaptive.IServiceResultCallbackWarning = IServiceResultCallbackWarning;
    /**
       @enum {Adaptive.ITelephonyStatus} Adaptive.ITelephonyStatus
       Enumeration ITelephonyStatus
    */
    var ITelephonyStatus = (function () {
        function ITelephonyStatus(value) {
            this.value = value;
        }
        ITelephonyStatus.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.ITelephonyStatus}
        */
        ITelephonyStatus.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
                    case "Dialing":
                        return ITelephonyStatus.Dialing;
                    case "Failed":
                        return ITelephonyStatus.Failed;
                    case "Unknown":
                        return ITelephonyStatus.Unknown;
                    default:
                        return ITelephonyStatus.Unknown;
                }
            }
            else {
                return ITelephonyStatus.Unknown;
            }
        };
        /**
           @property {Adaptive.ITelephonyStatus} [Dialing='Dialing']
        */
        ITelephonyStatus.Dialing = new ITelephonyStatus("Dialing");
        /**
           @property {Adaptive.ITelephonyStatus} [Failed='Failed']
        */
        ITelephonyStatus.Failed = new ITelephonyStatus("Failed");
        /**
           @property {Adaptive.ITelephonyStatus} [Unknown='Unknown']
        */
        ITelephonyStatus.Unknown = new ITelephonyStatus("Unknown");
        return ITelephonyStatus;
    })();
    Adaptive.ITelephonyStatus = ITelephonyStatus;
    /**
       @enum {Adaptive.LifecycleState} Adaptive.LifecycleState
       Enumeration LifecycleState
    */
    var LifecycleState = (function () {
        function LifecycleState(value) {
            this.value = value;
        }
        LifecycleState.prototype.toString = function () {
            return this.value;
        };
        /**
           @method
           @static
           Convert JSON parsed object to enumeration.
           @return {Adaptive.LifecycleState}
        */
        LifecycleState.toObject = function (object) {
            if (object != null && object.value != null) {
                switch (object.value) {
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
            }
            else {
                return LifecycleState.Unknown;
            }
        };
        /**
           @property {Adaptive.LifecycleState} [Starting='Starting']
        */
        LifecycleState.Starting = new LifecycleState("Starting");
        /**
           @property {Adaptive.LifecycleState} [Started='Started']
        */
        LifecycleState.Started = new LifecycleState("Started");
        /**
           @property {Adaptive.LifecycleState} [Running='Running']
        */
        LifecycleState.Running = new LifecycleState("Running");
        /**
           @property {Adaptive.LifecycleState} [Pausing='Pausing']
        */
        LifecycleState.Pausing = new LifecycleState("Pausing");
        /**
           @property {Adaptive.LifecycleState} [PausedIdle='PausedIdle']
        */
        LifecycleState.PausedIdle = new LifecycleState("PausedIdle");
        /**
           @property {Adaptive.LifecycleState} [PausedRun='PausedRun']
        */
        LifecycleState.PausedRun = new LifecycleState("PausedRun");
        /**
           @property {Adaptive.LifecycleState} [Resuming='Resuming']
        */
        LifecycleState.Resuming = new LifecycleState("Resuming");
        /**
           @property {Adaptive.LifecycleState} [Stopping='Stopping']
        */
        LifecycleState.Stopping = new LifecycleState("Stopping");
        /**
           @property {Adaptive.LifecycleState} [Unknown='Unknown']
        */
        LifecycleState.Unknown = new LifecycleState("Unknown");
        return LifecycleState;
    })();
    Adaptive.LifecycleState = LifecycleState;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Adaptive.js.map