Ext.data.JsonP.Adaptive_Contact({"tagname":"class","name":"Adaptive.Contact","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-Contact"}],"extends":"Adaptive.ContactUid","author":[{"tagname":"author","name":"Francisco Javier Martin Bueno","email":null}],"since":"ARP1.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.Contact","id":"method-constructor","meta":{}},{"name":"getContactAddresses","tagname":"method","owner":"Adaptive.Contact","id":"method-getContactAddresses","meta":{}},{"name":"getContactEmails","tagname":"method","owner":"Adaptive.Contact","id":"method-getContactEmails","meta":{}},{"name":"getContactId","tagname":"method","owner":"Adaptive.ContactUid","id":"method-getContactId","meta":{}},{"name":"getContactPhones","tagname":"method","owner":"Adaptive.Contact","id":"method-getContactPhones","meta":{}},{"name":"getContactSocials","tagname":"method","owner":"Adaptive.Contact","id":"method-getContactSocials","meta":{}},{"name":"getContactTags","tagname":"method","owner":"Adaptive.Contact","id":"method-getContactTags","meta":{}},{"name":"getContactWebsites","tagname":"method","owner":"Adaptive.Contact","id":"method-getContactWebsites","meta":{}},{"name":"getPersonalInfo","tagname":"method","owner":"Adaptive.Contact","id":"method-getPersonalInfo","meta":{}},{"name":"getProfessionalInfo","tagname":"method","owner":"Adaptive.Contact","id":"method-getProfessionalInfo","meta":{}},{"name":"setContactAddresses","tagname":"method","owner":"Adaptive.Contact","id":"method-setContactAddresses","meta":{}},{"name":"setContactEmails","tagname":"method","owner":"Adaptive.Contact","id":"method-setContactEmails","meta":{}},{"name":"setContactId","tagname":"method","owner":"Adaptive.ContactUid","id":"method-setContactId","meta":{}},{"name":"setContactPhones","tagname":"method","owner":"Adaptive.Contact","id":"method-setContactPhones","meta":{}},{"name":"setContactSocials","tagname":"method","owner":"Adaptive.Contact","id":"method-setContactSocials","meta":{}},{"name":"setContactTags","tagname":"method","owner":"Adaptive.Contact","id":"method-setContactTags","meta":{}},{"name":"setContactWebsites","tagname":"method","owner":"Adaptive.Contact","id":"method-setContactWebsites","meta":{}},{"name":"setPersonalInfo","tagname":"method","owner":"Adaptive.Contact","id":"method-setPersonalInfo","meta":{}},{"name":"setProfessionalInfo","tagname":"method","owner":"Adaptive.Contact","id":"method-setProfessionalInfo","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.Contact","id":"method-toObject","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.Contact","short_doc":"Structure representing the data elements of a contact. ...","component":false,"superclasses":["Adaptive.APIBean","Adaptive.ContactUid"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.APIBean' rel='Adaptive.APIBean' class='docClass'>Adaptive.APIBean</a><div class='subclass '><a href='#!/api/Adaptive.ContactUid' rel='Adaptive.ContactUid' class='docClass'>Adaptive.ContactUid</a><div class='subclass '><strong>Adaptive.Contact</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-Contact' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Structure representing the data elements of a contact.</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>ARP1.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.Contact-method-constructor' class='name expandable'>Adaptive.Contact</a>( <span class='pre'>contactId, personalInfo, professionalInfo, contactAddresses, contactPhones, contactEmails, contactWebsites, contactSocials, contactTags</span> ) : <a href=\"#!/api/Adaptive.Contact\" rel=\"Adaptive.Contact\" class=\"docClass\">Adaptive.Contact</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with all the fields ...</div><div class='long'><p>Constructor with all the fields</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contactId</span> : string<div class='sub-desc'><p>Identifier of the contact</p>\n</div></li><li><span class='pre'>personalInfo</span> : <a href=\"#!/api/Adaptive.ContactPersonalInfo\" rel=\"Adaptive.ContactPersonalInfo\" class=\"docClass\">Adaptive.ContactPersonalInfo</a><div class='sub-desc'><p>Personal Information</p>\n</div></li><li><span class='pre'>professionalInfo</span> : <a href=\"#!/api/Adaptive.ContactProfessionalInfo\" rel=\"Adaptive.ContactProfessionalInfo\" class=\"docClass\">Adaptive.ContactProfessionalInfo</a><div class='sub-desc'><p>Professional Information</p>\n</div></li><li><span class='pre'>contactAddresses</span> : <a href=\"#!/api/Adaptive.ContactAddress\" rel=\"Adaptive.ContactAddress\" class=\"docClass\">Adaptive.ContactAddress</a>[]<div class='sub-desc'><p>Addresses of the contact</p>\n</div></li><li><span class='pre'>contactPhones</span> : <a href=\"#!/api/Adaptive.ContactPhone\" rel=\"Adaptive.ContactPhone\" class=\"docClass\">Adaptive.ContactPhone</a>[]<div class='sub-desc'><p>Phones of the contact</p>\n</div></li><li><span class='pre'>contactEmails</span> : <a href=\"#!/api/Adaptive.ContactEmail\" rel=\"Adaptive.ContactEmail\" class=\"docClass\">Adaptive.ContactEmail</a>[]<div class='sub-desc'><p>Emails of the contact</p>\n</div></li><li><span class='pre'>contactWebsites</span> : <a href=\"#!/api/Adaptive.ContactWebsite\" rel=\"Adaptive.ContactWebsite\" class=\"docClass\">Adaptive.ContactWebsite</a>[]<div class='sub-desc'><p>Websites of the contact</p>\n</div></li><li><span class='pre'>contactSocials</span> : <a href=\"#!/api/Adaptive.ContactSocial\" rel=\"Adaptive.ContactSocial\" class=\"docClass\">Adaptive.ContactSocial</a>[]<div class='sub-desc'><p>Social Networks of the contact</p>\n</div></li><li><span class='pre'>contactTags</span> : <a href=\"#!/api/Adaptive.ContactTag\" rel=\"Adaptive.ContactTag\" class=\"docClass\">Adaptive.ContactTag</a>[]<div class='sub-desc'><p>Tags of the contact</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.Contact\" rel=\"Adaptive.Contact\" class=\"docClass\">Adaptive.Contact</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.ContactUid-method-constructor\" rel=\"Adaptive.ContactUid-method-constructor\" class=\"docClass\">Adaptive.ContactUid.constructor</a></p></div></div></div><div id='method-getContactAddresses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-getContactAddresses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-getContactAddresses' class='name expandable'>getContactAddresses</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ContactAddress\" rel=\"Adaptive.ContactAddress\" class=\"docClass\">Adaptive.ContactAddress</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all the addresses of the Contact ...</div><div class='long'><p>Returns all the addresses of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ContactAddress\" rel=\"Adaptive.ContactAddress\" class=\"docClass\">Adaptive.ContactAddress</a>[]</span><div class='sub-desc'><p>ContactAddress[]</p>\n</div></li></ul></div></div></div><div id='method-getContactEmails' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-getContactEmails' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-getContactEmails' class='name expandable'>getContactEmails</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ContactEmail\" rel=\"Adaptive.ContactEmail\" class=\"docClass\">Adaptive.ContactEmail</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all the emails of the Contact ...</div><div class='long'><p>Returns all the emails of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ContactEmail\" rel=\"Adaptive.ContactEmail\" class=\"docClass\">Adaptive.ContactEmail</a>[]</span><div class='sub-desc'><p>ContactEmail[]</p>\n</div></li></ul></div></div></div><div id='method-getContactId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.ContactUid' rel='Adaptive.ContactUid' class='defined-in docClass'>Adaptive.ContactUid</a><br/><a href='source/Adaptive.html#Adaptive-ContactUid-method-getContactId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ContactUid-method-getContactId' class='name expandable'>getContactId</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the contact id ...</div><div class='long'><p>Returns the contact id</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>Contactid Internal unique contact id.</p>\n</div></li></ul></div></div></div><div id='method-getContactPhones' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-getContactPhones' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-getContactPhones' class='name expandable'>getContactPhones</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ContactPhone\" rel=\"Adaptive.ContactPhone\" class=\"docClass\">Adaptive.ContactPhone</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all the phones of the Contact ...</div><div class='long'><p>Returns all the phones of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ContactPhone\" rel=\"Adaptive.ContactPhone\" class=\"docClass\">Adaptive.ContactPhone</a>[]</span><div class='sub-desc'><p>ContactPhone[]</p>\n</div></li></ul></div></div></div><div id='method-getContactSocials' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-getContactSocials' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-getContactSocials' class='name expandable'>getContactSocials</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ContactSocial\" rel=\"Adaptive.ContactSocial\" class=\"docClass\">Adaptive.ContactSocial</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all the social network info of the Contact ...</div><div class='long'><p>Returns all the social network info of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ContactSocial\" rel=\"Adaptive.ContactSocial\" class=\"docClass\">Adaptive.ContactSocial</a>[]</span><div class='sub-desc'><p>ContactSocial[]</p>\n</div></li></ul></div></div></div><div id='method-getContactTags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-getContactTags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-getContactTags' class='name expandable'>getContactTags</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ContactTag\" rel=\"Adaptive.ContactTag\" class=\"docClass\">Adaptive.ContactTag</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the additional tags of the Contact ...</div><div class='long'><p>Returns the additional tags of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ContactTag\" rel=\"Adaptive.ContactTag\" class=\"docClass\">Adaptive.ContactTag</a>[]</span><div class='sub-desc'><p>ContactTag[]</p>\n</div></li></ul></div></div></div><div id='method-getContactWebsites' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-getContactWebsites' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-getContactWebsites' class='name expandable'>getContactWebsites</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ContactWebsite\" rel=\"Adaptive.ContactWebsite\" class=\"docClass\">Adaptive.ContactWebsite</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns all the websites of the Contact ...</div><div class='long'><p>Returns all the websites of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ContactWebsite\" rel=\"Adaptive.ContactWebsite\" class=\"docClass\">Adaptive.ContactWebsite</a>[]</span><div class='sub-desc'><p>ContactWebsite[]</p>\n</div></li></ul></div></div></div><div id='method-getPersonalInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-getPersonalInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-getPersonalInfo' class='name expandable'>getPersonalInfo</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ContactPersonalInfo\" rel=\"Adaptive.ContactPersonalInfo\" class=\"docClass\">Adaptive.ContactPersonalInfo</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the personal info of the Contact ...</div><div class='long'><p>Returns the personal info of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ContactPersonalInfo\" rel=\"Adaptive.ContactPersonalInfo\" class=\"docClass\">Adaptive.ContactPersonalInfo</a></span><div class='sub-desc'><p>ContactPersonalInfo of the Contact</p>\n</div></li></ul></div></div></div><div id='method-getProfessionalInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-getProfessionalInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-getProfessionalInfo' class='name expandable'>getProfessionalInfo</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.ContactProfessionalInfo\" rel=\"Adaptive.ContactProfessionalInfo\" class=\"docClass\">Adaptive.ContactProfessionalInfo</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the professional info of the Contact ...</div><div class='long'><p>Returns the professional info of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ContactProfessionalInfo\" rel=\"Adaptive.ContactProfessionalInfo\" class=\"docClass\">Adaptive.ContactProfessionalInfo</a></span><div class='sub-desc'><p>Array of personal info</p>\n</div></li></ul></div></div></div><div id='method-setContactAddresses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-setContactAddresses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-setContactAddresses' class='name expandable'>setContactAddresses</a>( <span class='pre'>contactAddresses</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the addresses of the Contact ...</div><div class='long'><p>Set the addresses of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contactAddresses</span> : <a href=\"#!/api/Adaptive.ContactAddress\" rel=\"Adaptive.ContactAddress\" class=\"docClass\">Adaptive.ContactAddress</a>[]<div class='sub-desc'><p>Addresses of the contact</p>\n</div></li></ul></div></div></div><div id='method-setContactEmails' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-setContactEmails' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-setContactEmails' class='name expandable'>setContactEmails</a>( <span class='pre'>contactEmails</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the emails of the Contact ...</div><div class='long'><p>Set the emails of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contactEmails</span> : <a href=\"#!/api/Adaptive.ContactEmail\" rel=\"Adaptive.ContactEmail\" class=\"docClass\">Adaptive.ContactEmail</a>[]<div class='sub-desc'><p>Emails of the contact</p>\n</div></li></ul></div></div></div><div id='method-setContactId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.ContactUid' rel='Adaptive.ContactUid' class='defined-in docClass'>Adaptive.ContactUid</a><br/><a href='source/Adaptive.html#Adaptive-ContactUid-method-setContactId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ContactUid-method-setContactId' class='name expandable'>setContactId</a>( <span class='pre'>contactId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the id of the Contact ...</div><div class='long'><p>Set the id of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contactId</span> : string<div class='sub-desc'><p>Internal unique contact id.</p>\n</div></li></ul></div></div></div><div id='method-setContactPhones' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-setContactPhones' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-setContactPhones' class='name expandable'>setContactPhones</a>( <span class='pre'>contactPhones</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the phones of the Contact ...</div><div class='long'><p>Set the phones of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contactPhones</span> : <a href=\"#!/api/Adaptive.ContactPhone\" rel=\"Adaptive.ContactPhone\" class=\"docClass\">Adaptive.ContactPhone</a>[]<div class='sub-desc'><p>Phones of the contact</p>\n</div></li></ul></div></div></div><div id='method-setContactSocials' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-setContactSocials' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-setContactSocials' class='name expandable'>setContactSocials</a>( <span class='pre'>contactSocials</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the social network info of the Contact ...</div><div class='long'><p>Set the social network info of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contactSocials</span> : <a href=\"#!/api/Adaptive.ContactSocial\" rel=\"Adaptive.ContactSocial\" class=\"docClass\">Adaptive.ContactSocial</a>[]<div class='sub-desc'><p>Social Networks of the contact</p>\n</div></li></ul></div></div></div><div id='method-setContactTags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-setContactTags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-setContactTags' class='name expandable'>setContactTags</a>( <span class='pre'>contactTags</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the additional tags of the Contact ...</div><div class='long'><p>Set the additional tags of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contactTags</span> : <a href=\"#!/api/Adaptive.ContactTag\" rel=\"Adaptive.ContactTag\" class=\"docClass\">Adaptive.ContactTag</a>[]<div class='sub-desc'><p>Tags of the contact</p>\n</div></li></ul></div></div></div><div id='method-setContactWebsites' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-setContactWebsites' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-setContactWebsites' class='name expandable'>setContactWebsites</a>( <span class='pre'>contactWebsites</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the websites of the Contact ...</div><div class='long'><p>Set the websites of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contactWebsites</span> : <a href=\"#!/api/Adaptive.ContactWebsite\" rel=\"Adaptive.ContactWebsite\" class=\"docClass\">Adaptive.ContactWebsite</a>[]<div class='sub-desc'><p>Websites of the contact</p>\n</div></li></ul></div></div></div><div id='method-setPersonalInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-setPersonalInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-setPersonalInfo' class='name expandable'>setPersonalInfo</a>( <span class='pre'>personalInfo</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the personal info of the Contact ...</div><div class='long'><p>Set the personal info of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>personalInfo</span> : <a href=\"#!/api/Adaptive.ContactPersonalInfo\" rel=\"Adaptive.ContactPersonalInfo\" class=\"docClass\">Adaptive.ContactPersonalInfo</a><div class='sub-desc'><p>Personal Information</p>\n</div></li></ul></div></div></div><div id='method-setProfessionalInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-setProfessionalInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-setProfessionalInfo' class='name expandable'>setProfessionalInfo</a>( <span class='pre'>professionalInfo</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the professional info of the Contact ...</div><div class='long'><p>Set the professional info of the Contact</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>professionalInfo</span> : <a href=\"#!/api/Adaptive.ContactProfessionalInfo\" rel=\"Adaptive.ContactProfessionalInfo\" class=\"docClass\">Adaptive.ContactProfessionalInfo</a><div class='sub-desc'><p>Professional Information</p>\n</div></li></ul></div></div></div><div id='method-toObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.Contact'>Adaptive.Contact</span><br/><a href='source/Adaptive.html#Adaptive-Contact-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.Contact-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.ContactUid-method-toObject\" rel=\"Adaptive.ContactUid-method-toObject\" class=\"docClass\">Adaptive.ContactUid.toObject</a></p></div></div></div></div></div></div></div>","meta":{}});