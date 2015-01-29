Ext.data.JsonP.Adaptive_APIRequest({"tagname":"class","name":"Adaptive.APIRequest","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-APIRequest"}],"author":[{"tagname":"author","name":"Carlos Lozano Diez","email":null}],"since":"v2.0","members":[{"name":"asyncIdProperty","tagname":"property","owner":"Adaptive.APIRequest","id":"property-asyncIdProperty","meta":{}},{"name":"bridgeTypeProperty","tagname":"property","owner":"Adaptive.APIRequest","id":"property-bridgeTypeProperty","meta":{}},{"name":"methodNameProperty","tagname":"property","owner":"Adaptive.APIRequest","id":"property-methodNameProperty","meta":{}},{"name":"parametersProperty","tagname":"property","owner":"Adaptive.APIRequest","id":"property-parametersProperty","meta":{}},{"name":"constructor","tagname":"method","owner":"Adaptive.APIRequest","id":"method-constructor","meta":{}},{"name":"getAsyncId","tagname":"method","owner":"Adaptive.APIRequest","id":"method-getAsyncId","meta":{}},{"name":"getBridgeType","tagname":"method","owner":"Adaptive.APIRequest","id":"method-getBridgeType","meta":{}},{"name":"getMethodName","tagname":"method","owner":"Adaptive.APIRequest","id":"method-getMethodName","meta":{}},{"name":"getParameters","tagname":"method","owner":"Adaptive.APIRequest","id":"method-getParameters","meta":{}},{"name":"setAsyncId","tagname":"method","owner":"Adaptive.APIRequest","id":"method-setAsyncId","meta":{}},{"name":"setBridgeType","tagname":"method","owner":"Adaptive.APIRequest","id":"method-setBridgeType","meta":{}},{"name":"setMethodName","tagname":"method","owner":"Adaptive.APIRequest","id":"method-setMethodName","meta":{}},{"name":"setParameters","tagname":"method","owner":"Adaptive.APIRequest","id":"method-setParameters","meta":{}},{"name":"toObject","tagname":"method","owner":"Adaptive.APIRequest","id":"static-method-toObject","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.APIRequest","short_doc":"Structure representing a HTML5 request to the native API. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-APIRequest' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Structure representing a HTML5 request to the native API.</p>\n\n<p>@version 1.0</p>\n        <p>Available since: <b>v2.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-asyncIdProperty' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-property-asyncIdProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-property-asyncIdProperty' class='name expandable'>asyncIdProperty</a> : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Identifier of callback or listener for async operations. ...</div><div class='long'><p>Identifier of callback or listener for async operations. The 'asyncIdProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'asyncId'.</p>\n</div></div></div><div id='property-bridgeTypeProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-property-bridgeTypeProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-property-bridgeTypeProperty' class='name expandable'>bridgeTypeProperty</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>String representing the bridge type to obtain. ...</div><div class='long'><p>String representing the bridge type to obtain. The 'bridgeTypeProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'bridgeType'.</p>\n</div></div></div><div id='property-methodNameProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-property-methodNameProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-property-methodNameProperty' class='name expandable'>methodNameProperty</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>String representing the method name to call. ...</div><div class='long'><p>String representing the method name to call. The 'methodNameProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'methodName'.</p>\n</div></div></div><div id='property-parametersProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-property-parametersProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-property-parametersProperty' class='name expandable'>parametersProperty</a> : string[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Parameters of the request as JSON formatted strings. ...</div><div class='long'><p>Parameters of the request as JSON formatted strings. The 'parametersProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'parameters'.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.APIRequest-method-constructor' class='name expandable'>Adaptive.APIRequest</a>( <span class='pre'>bridgeType, methodName, parameters, asyncId</span> ) : <a href=\"#!/api/Adaptive.APIRequest\" rel=\"Adaptive.APIRequest\" class=\"docClass\">Adaptive.APIRequest</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with all the parameters ...</div><div class='long'><p>Constructor with all the parameters</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bridgeType</span> : string<div class='sub-desc'><p>Name of the bridge to be invoked.</p>\n</div></li><li><span class='pre'>methodName</span> : string<div class='sub-desc'><p>Name of the method</p>\n</div></li><li><span class='pre'>parameters</span> : string[]<div class='sub-desc'><p>Array of parameters as JSON formatted strings.</p>\n</div></li><li><span class='pre'>asyncId</span> : number<div class='sub-desc'><p>Id of callback or listener or zero if none for synchronous calls.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.APIRequest\" rel=\"Adaptive.APIRequest\" class=\"docClass\">Adaptive.APIRequest</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAsyncId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-getAsyncId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-method-getAsyncId' class='name expandable'>getAsyncId</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the callback or listener id assigned to this request OR zero if there is no associated callback or\nlistener. ...</div><div class='long'><p>Returns the callback or listener id assigned to this request OR zero if there is no associated callback or\nlistener.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>long with the unique id of the callback or listener, or zero if there is no associated async event.</p>\n</div></li></ul></div></div></div><div id='method-getBridgeType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-getBridgeType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-method-getBridgeType' class='name expandable'>getBridgeType</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Bridge Type Getter ...</div><div class='long'><p>Bridge Type Getter</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>Bridge Type</p>\n</div></li></ul></div></div></div><div id='method-getMethodName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-getMethodName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-method-getMethodName' class='name expandable'>getMethodName</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Method name Getter ...</div><div class='long'><p>Method name Getter</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>Method name</p>\n</div></li></ul></div></div></div><div id='method-getParameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-getParameters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-method-getParameters' class='name expandable'>getParameters</a>( <span class='pre'></span> ) : string[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Parameters Getter ...</div><div class='long'><p>Parameters Getter</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string[]</span><div class='sub-desc'><p>Parameters</p>\n</div></li></ul></div></div></div><div id='method-setAsyncId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-setAsyncId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-method-setAsyncId' class='name expandable'>setAsyncId</a>( <span class='pre'>asyncId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the callback or listener id to the request. ...</div><div class='long'><p>Sets the callback or listener id to the request.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>asyncId</span> : number<div class='sub-desc'><p>The unique id of the callback or listener.</p>\n</div></li></ul></div></div></div><div id='method-setBridgeType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-setBridgeType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-method-setBridgeType' class='name expandable'>setBridgeType</a>( <span class='pre'>bridgeType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bridge Type Setter ...</div><div class='long'><p>Bridge Type Setter</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bridgeType</span> : string<div class='sub-desc'><p>Bridge Type</p>\n</div></li></ul></div></div></div><div id='method-setMethodName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-setMethodName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-method-setMethodName' class='name expandable'>setMethodName</a>( <span class='pre'>methodName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Method name Setter ...</div><div class='long'><p>Method name Setter</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>methodName</span> : string<div class='sub-desc'><p>Method name</p>\n</div></li></ul></div></div></div><div id='method-setParameters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-method-setParameters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-method-setParameters' class='name expandable'>setParameters</a>( <span class='pre'>parameters</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Parameters Setter ...</div><div class='long'><p>Parameters Setter</p>\n        <p>Available since: <b>v2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : string[]<div class='sub-desc'><p>Parameters, JSON formatted strings of objects.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-toObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.APIRequest'>Adaptive.APIRequest</span><br/><a href='source/Adaptive.html#Adaptive-APIRequest-static-method-toObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.APIRequest-static-method-toObject' class='name expandable'>toObject</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Adaptive.APIRequest\" rel=\"Adaptive.APIRequest\" class=\"docClass\">Adaptive.APIRequest</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Convert JSON parsed object to typed equivalent. ...</div><div class='long'><p>Convert JSON parsed object to typed equivalent.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>JSON parsed structure of type <a href=\"#!/api/Adaptive.APIRequest\" rel=\"Adaptive.APIRequest\" class=\"docClass\">Adaptive.APIRequest</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.APIRequest\" rel=\"Adaptive.APIRequest\" class=\"docClass\">Adaptive.APIRequest</a></span><div class='sub-desc'><p>Wrapped object instance.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});