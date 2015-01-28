Ext.data.JsonP.ContactResultCallback({"tagname":"class","name":"ContactResultCallback","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#ContactResultCallback"}],"params":[{"tagname":"params","name":"onErrorFunction","doc":"<p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.IContactResultCallbackError\" rel=\"Adaptive.IContactResultCallbackError\" class=\"docClass\">Adaptive.IContactResultCallbackError</a></p>\n"},{"tagname":"params","name":"onResultFunction","doc":"<p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Contact\" rel=\"Adaptive.Contact\" class=\"docClass\">Adaptive.Contact</a>[]</p>\n"},{"tagname":"params","name":"onWarningFunction","doc":"<p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Contact\" rel=\"Adaptive.Contact\" class=\"docClass\">Adaptive.Contact</a>[], <a href=\"#!/api/Adaptive.IContactResultCallbackWarning\" rel=\"Adaptive.IContactResultCallbackWarning\" class=\"docClass\">Adaptive.IContactResultCallbackWarning</a></p>\n"}],"members":[{"name":"registeredDatabaseResultCallback","tagname":"property","owner":"ContactResultCallback","id":"property-registeredDatabaseResultCallback","meta":{}},{"name":"handleDatabaseResultCallbackError","tagname":"method","owner":"ContactResultCallback","id":"method-handleDatabaseResultCallbackError","meta":{}},{"name":"onError","tagname":"method","owner":"ContactResultCallback","id":"method-onError","meta":{}},{"name":"onResult","tagname":"method","owner":"ContactResultCallback","id":"method-onResult","meta":{}},{"name":"onWarning","tagname":"method","owner":"ContactResultCallback","id":"method-onWarning","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-ContactResultCallback","short_doc":"Constructor with anonymous handler functions for callback. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#ContactResultCallback' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Constructor with anonymous handler functions for callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onErrorFunction</span> : <div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.IContactResultCallbackError\" rel=\"Adaptive.IContactResultCallbackError\" class=\"docClass\">Adaptive.IContactResultCallbackError</a></p>\n</div></li><li><span class='pre'>onResultFunction</span> : <div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Contact\" rel=\"Adaptive.Contact\" class=\"docClass\">Adaptive.Contact</a>[]</p>\n</div></li><li><span class='pre'>onWarningFunction</span> : <div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Contact\" rel=\"Adaptive.Contact\" class=\"docClass\">Adaptive.Contact</a>[], <a href=\"#!/api/Adaptive.IContactResultCallbackWarning\" rel=\"Adaptive.IContactResultCallbackWarning\" class=\"docClass\">Adaptive.IContactResultCallbackWarning</a></p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-registeredDatabaseResultCallback' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactResultCallback'>ContactResultCallback</span><br/><a href='source/Adaptive.html#ContactResultCallback-property-registeredDatabaseResultCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactResultCallback-property-registeredDatabaseResultCallback' class='name expandable'>registeredDatabaseResultCallback</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>DatabaseResultCallback control dictionary.</p>\n</div><div class='long'><p>DatabaseResultCallback control dictionary.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-handleDatabaseResultCallbackError' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactResultCallback'>ContactResultCallback</span><br/><a href='source/Adaptive.html#ContactResultCallback-method-handleDatabaseResultCallbackError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactResultCallback-method-handleDatabaseResultCallbackError' class='name expandable'>handleDatabaseResultCallbackError</a>( <span class='pre'>id, error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>DatabaseResultCallback global callback handlers. ...</div><div class='long'><p>DatabaseResultCallback global callback handlers.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>error</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactResultCallback'>ContactResultCallback</span><br/><a href='source/Adaptive.html#ContactResultCallback-method-onError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactResultCallback-method-onError' class='name expandable'>onError</a>( <span class='pre'>error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called on Error ...</div><div class='long'><p>This method is called on Error</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Object<div class='sub-desc'><p>returned by the platform</p>\n</div></li></ul></div></div></div><div id='method-onResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactResultCallback'>ContactResultCallback</span><br/><a href='source/Adaptive.html#ContactResultCallback-method-onResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactResultCallback-method-onResult' class='name expandable'>onResult</a>( <span class='pre'>contacts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called on Result ...</div><div class='long'><p>This method is called on Result</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contacts</span> : Object<div class='sub-desc'><p>returned by the platform</p>\n</div></li></ul></div></div></div><div id='method-onWarning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactResultCallback'>ContactResultCallback</span><br/><a href='source/Adaptive.html#ContactResultCallback-method-onWarning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactResultCallback-method-onWarning' class='name expandable'>onWarning</a>( <span class='pre'>contacts, warning</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called on Warning ...</div><div class='long'><p>This method is called on Warning</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contacts</span> : Object<div class='sub-desc'><p>returned by the platform</p>\n</div></li><li><span class='pre'>warning</span> : Object<div class='sub-desc'><p>returned by the platform</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});