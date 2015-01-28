Ext.data.JsonP.DatabaseResultCallback({"tagname":"class","name":"DatabaseResultCallback","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#DatabaseResultCallback"}],"params":[{"tagname":"params","name":"onErrorFunction","doc":"<p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.IDatabaseResultCallbackError\" rel=\"Adaptive.IDatabaseResultCallbackError\" class=\"docClass\">Adaptive.IDatabaseResultCallbackError</a></p>\n"},{"tagname":"params","name":"onResultFunction","doc":"<p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Database\" rel=\"Adaptive.Database\" class=\"docClass\">Adaptive.Database</a></p>\n"},{"tagname":"params","name":"onWarningFunction","doc":"<p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Database\" rel=\"Adaptive.Database\" class=\"docClass\">Adaptive.Database</a>, <a href=\"#!/api/Adaptive.IDatabaseResultCallbackWarning\" rel=\"Adaptive.IDatabaseResultCallbackWarning\" class=\"docClass\">Adaptive.IDatabaseResultCallbackWarning</a></p>\n"}],"members":[{"name":"registeredDatabaseTableResultCallback","tagname":"property","owner":"DatabaseResultCallback","id":"property-registeredDatabaseTableResultCallback","meta":{}},{"name":"handleDatabaseTableResultCallbackError","tagname":"method","owner":"DatabaseResultCallback","id":"method-handleDatabaseTableResultCallbackError","meta":{}},{"name":"onError","tagname":"method","owner":"DatabaseResultCallback","id":"method-onError","meta":{}},{"name":"onResult","tagname":"method","owner":"DatabaseResultCallback","id":"method-onResult","meta":{}},{"name":"onWarning","tagname":"method","owner":"DatabaseResultCallback","id":"method-onWarning","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-DatabaseResultCallback","short_doc":"Constructor with anonymous handler functions for callback. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#DatabaseResultCallback' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Constructor with anonymous handler functions for callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onErrorFunction</span> : <div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.IDatabaseResultCallbackError\" rel=\"Adaptive.IDatabaseResultCallbackError\" class=\"docClass\">Adaptive.IDatabaseResultCallbackError</a></p>\n</div></li><li><span class='pre'>onResultFunction</span> : <div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Database\" rel=\"Adaptive.Database\" class=\"docClass\">Adaptive.Database</a></p>\n</div></li><li><span class='pre'>onWarningFunction</span> : <div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Database\" rel=\"Adaptive.Database\" class=\"docClass\">Adaptive.Database</a>, <a href=\"#!/api/Adaptive.IDatabaseResultCallbackWarning\" rel=\"Adaptive.IDatabaseResultCallbackWarning\" class=\"docClass\">Adaptive.IDatabaseResultCallbackWarning</a></p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-registeredDatabaseTableResultCallback' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DatabaseResultCallback'>DatabaseResultCallback</span><br/><a href='source/Adaptive.html#DatabaseResultCallback-property-registeredDatabaseTableResultCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DatabaseResultCallback-property-registeredDatabaseTableResultCallback' class='name expandable'>registeredDatabaseTableResultCallback</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>DatabaseTableResultCallback control dictionary.</p>\n</div><div class='long'><p>DatabaseTableResultCallback control dictionary.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-handleDatabaseTableResultCallbackError' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DatabaseResultCallback'>DatabaseResultCallback</span><br/><a href='source/Adaptive.html#DatabaseResultCallback-method-handleDatabaseTableResultCallbackError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DatabaseResultCallback-method-handleDatabaseTableResultCallbackError' class='name expandable'>handleDatabaseTableResultCallbackError</a>( <span class='pre'>id, error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>DatabaseTableResultCallback global callback handlers. ...</div><div class='long'><p>DatabaseTableResultCallback global callback handlers.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>error</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-onError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DatabaseResultCallback'>DatabaseResultCallback</span><br/><a href='source/Adaptive.html#DatabaseResultCallback-method-onError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DatabaseResultCallback-method-onError' class='name expandable'>onError</a>( <span class='pre'>error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Result callback for error responses ...</div><div class='long'><p>Result callback for error responses</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Object<div class='sub-desc'><p>Returned error</p>\n</div></li></ul></div></div></div><div id='method-onResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DatabaseResultCallback'>DatabaseResultCallback</span><br/><a href='source/Adaptive.html#DatabaseResultCallback-method-onResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DatabaseResultCallback-method-onResult' class='name expandable'>onResult</a>( <span class='pre'>database</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Result callback for correct responses ...</div><div class='long'><p>Result callback for correct responses</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>database</span> : Object<div class='sub-desc'><p>Returns the database</p>\n</div></li></ul></div></div></div><div id='method-onWarning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DatabaseResultCallback'>DatabaseResultCallback</span><br/><a href='source/Adaptive.html#DatabaseResultCallback-method-onWarning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DatabaseResultCallback-method-onWarning' class='name expandable'>onWarning</a>( <span class='pre'>database, warning</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Result callback for warning responses ...</div><div class='long'><p>Result callback for warning responses</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>database</span> : Object<div class='sub-desc'><p>Returns the database</p>\n</div></li><li><span class='pre'>warning</span> : Object<div class='sub-desc'><p>Returned Warning</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});