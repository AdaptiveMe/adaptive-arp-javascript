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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="ContactAddress.ts"/>
///<reference path="ContactEmail.ts"/>
///<reference path="ContactPersonalInfo.ts"/>
///<reference path="ContactPhone.ts"/>
///<reference path="ContactProfessionalInfo.ts"/>
///<reference path="ContactSocial.ts"/>
///<reference path="ContactTag.ts"/>
///<reference path="ContactUid.ts"/>
///<reference path="ContactWebsite.ts"/>
var Adaptive;
(function (Adaptive) {
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
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.Contact.
           @return {Adaptive.Contact} Wrapped object instance.
        */
        Contact.toObject = function (object) {
            var result = new Contact(null, null, null, null, null, null, null, null, null);
            // Assign values to parent bean fields.
            if (object != null && object.contactId != null)
                result.contactId = object.contactId;
            // Assign values to bean fields.
            if (object != null && object.personalInfo != null) {
                result.personalInfo = Adaptive.ContactPersonalInfo.toObject(object.personalInfo);
            }
            else {
                result.personalInfo = Adaptive.ContactPersonalInfo.toObject(null);
            }
            if (object != null && object.professionalInfo != null) {
                result.professionalInfo = Adaptive.ContactProfessionalInfo.toObject(object.professionalInfo);
            }
            else {
                result.professionalInfo = Adaptive.ContactProfessionalInfo.toObject(null);
            }
            if (object != null && object.contactAddresses != null) {
                result.contactAddresses = new Array();
                for (var i = 0; i < object.contactAddresses.length; i++) {
                    var __value__ = object.contactAddresses[i];
                    if (__value__ != null) {
                        result.contactAddresses.push(Adaptive.ContactAddress.toObject(__value__));
                    }
                    else {
                        result.contactAddresses.push(Adaptive.ContactAddress.toObject(null));
                    }
                }
            }
            if (object != null && object.contactPhones != null) {
                result.contactPhones = new Array();
                for (var i = 0; i < object.contactPhones.length; i++) {
                    var __value__ = object.contactPhones[i];
                    if (__value__ != null) {
                        result.contactPhones.push(Adaptive.ContactPhone.toObject(__value__));
                    }
                    else {
                        result.contactPhones.push(Adaptive.ContactPhone.toObject(null));
                    }
                }
            }
            if (object != null && object.contactEmails != null) {
                result.contactEmails = new Array();
                for (var i = 0; i < object.contactEmails.length; i++) {
                    var __value__ = object.contactEmails[i];
                    if (__value__ != null) {
                        result.contactEmails.push(Adaptive.ContactEmail.toObject(__value__));
                    }
                    else {
                        result.contactEmails.push(Adaptive.ContactEmail.toObject(null));
                    }
                }
            }
            if (object != null && object.contactWebsites != null) {
                result.contactWebsites = new Array();
                for (var i = 0; i < object.contactWebsites.length; i++) {
                    var __value__ = object.contactWebsites[i];
                    if (__value__ != null) {
                        result.contactWebsites.push(Adaptive.ContactWebsite.toObject(__value__));
                    }
                    else {
                        result.contactWebsites.push(Adaptive.ContactWebsite.toObject(null));
                    }
                }
            }
            if (object != null && object.contactSocials != null) {
                result.contactSocials = new Array();
                for (var i = 0; i < object.contactSocials.length; i++) {
                    var __value__ = object.contactSocials[i];
                    if (__value__ != null) {
                        result.contactSocials.push(Adaptive.ContactSocial.toObject(__value__));
                    }
                    else {
                        result.contactSocials.push(Adaptive.ContactSocial.toObject(null));
                    }
                }
            }
            if (object != null && object.contactTags != null) {
                result.contactTags = new Array();
                for (var i = 0; i < object.contactTags.length; i++) {
                    var __value__ = object.contactTags[i];
                    if (__value__ != null) {
                        result.contactTags.push(Adaptive.ContactTag.toObject(__value__));
                    }
                    else {
                        result.contactTags.push(Adaptive.ContactTag.toObject(null));
                    }
                }
            }
            return result;
        };
        return Contact;
    })(Adaptive.ContactUid);
    Adaptive.Contact = Contact;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=Contact.js.map