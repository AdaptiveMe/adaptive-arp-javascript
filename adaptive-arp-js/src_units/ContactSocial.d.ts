/// <reference path="APIBean.d.ts" />
/// <reference path="ContactSocialNetwork.d.ts" />
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

    * @version v2.2.15

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       @class Adaptive.ContactSocial
       @extends Adaptive.APIBean
       Structure representing the social data elements of a contact.

       @author Francisco Javier Martin Bueno
       @since v2.0
       @version 1.0
    */
    class ContactSocial extends APIBean {
        /**
           @property {Adaptive.ContactSocialNetwork} socialNetwork
           The social network
        */
        socialNetwork: ContactSocialNetwork;
        /**
           @property {Adaptive.ContactSocialNetwork} socialNetwork
           The social network The 'socialNetworkProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'socialNetwork'.
        */
        socialNetworkProperty: ContactSocialNetwork;
        /**
           @property {string} profileUrl
           The profileUrl
        */
        profileUrl: string;
        /**
           @property {string} profileUrl
           The profileUrl The 'profileUrlProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'profileUrl'.
        */
        profileUrlProperty: string;
        /**
           @method constructor
           Constructor used by the implementation

           @param {Adaptive.ContactSocialNetwork} socialNetwork of the profile
           @param {string} profileUrl    of the user
           @since v2.0
        */
        constructor(socialNetwork: ContactSocialNetwork, profileUrl: string);
        /**
           @method
           Returns the social network

           @return {Adaptive.ContactSocialNetwork} socialNetwork
           @since v2.0
        */
        getSocialNetwork(): ContactSocialNetwork;
        /**
           @method
           Set the social network

           @param {Adaptive.ContactSocialNetwork} socialNetwork of the profile
           @since v2.0
        */
        setSocialNetwork(socialNetwork: ContactSocialNetwork): void;
        /**
           @method
           Returns the profile url of the user

           @return {string} profileUrl
           @since v2.0
        */
        getProfileUrl(): string;
        /**
           @method
           Set the profile url of the iser

           @param {string} profileUrl of the user
           @since v2.0
        */
        setProfileUrl(profileUrl: string): void;
        /**
           @method
           @static
           Convert JSON parsed object to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ContactSocial.
           @return {Adaptive.ContactSocial} Wrapped object instance.
        */
        static toObject(object: any): ContactSocial;
        /**
           @method
           @static
           Convert JSON parsed object array to typed equivalent.
           @param {Object} object JSON parsed structure of type Adaptive.ContactSocial[].
           @return {Adaptive.ContactSocial[]} Wrapped object array instance.
        */
        static toObjectArray(object: any): ContactSocial[];
    }
}
