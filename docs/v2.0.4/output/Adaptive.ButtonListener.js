Ext.data.JsonP.Adaptive_ButtonListener({"tagname":"class","name":"Adaptive.ButtonListener","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-ButtonListener"}],"extends":"Adaptive.BaseListener","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.ButtonListener","id":"method-constructor","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getAPIVersion","meta":{}},{"name":"getId","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getId","meta":{}},{"name":"onError","tagname":"method","owner":"Adaptive.ButtonListener","id":"method-onError","meta":{}},{"name":"onResult","tagname":"method","owner":"Adaptive.ButtonListener","id":"method-onResult","meta":{}},{"name":"onWarning","tagname":"method","owner":"Adaptive.ButtonListener","id":"method-onWarning","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.ButtonListener","component":false,"superclasses":["Adaptive.BaseListener"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.BaseListener' rel='Adaptive.BaseListener' class='docClass'>Adaptive.BaseListener</a><div class='subclass '><strong>Adaptive.ButtonListener</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-ButtonListener' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ButtonListener'>Adaptive.ButtonListener</span><br/><a href='source/Adaptive.html#Adaptive-ButtonListener-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.ButtonListener-method-constructor' class='name expandable'>Adaptive.ButtonListener</a>( <span class='pre'>onErrorFunction, onResultFunction, onWarningFunction</span> ) : <a href=\"#!/api/Adaptive.ButtonListener\" rel=\"Adaptive.ButtonListener\" class=\"docClass\">Adaptive.ButtonListener</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with anonymous handler functions for listener. ...</div><div class='long'><p>Constructor with anonymous handler functions for listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onErrorFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.IButtonListenerError\" rel=\"Adaptive.IButtonListenerError\" class=\"docClass\">Adaptive.IButtonListenerError</a></p>\n</div></li><li><span class='pre'>onResultFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Button\" rel=\"Adaptive.Button\" class=\"docClass\">Adaptive.Button</a></p>\n</div></li><li><span class='pre'>onWarningFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Button\" rel=\"Adaptive.Button\" class=\"docClass\">Adaptive.Button</a>, <a href=\"#!/api/Adaptive.IButtonListenerWarning\" rel=\"Adaptive.IButtonListenerWarning\" class=\"docClass\">Adaptive.IButtonListenerWarning</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.ButtonListener\" rel=\"Adaptive.ButtonListener\" class=\"docClass\">Adaptive.ButtonListener</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BaseListener-method-constructor\" rel=\"Adaptive.BaseListener-method-constructor\" class=\"docClass\">Adaptive.BaseListener.constructor</a></p></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseListener' rel='Adaptive.BaseListener' class='defined-in docClass'>Adaptive.BaseListener</a><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'><p>Return the API group for the given interface.</p>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseListener' rel='Adaptive.BaseListener' class='defined-in docClass'>Adaptive.BaseListener</a><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseListener' rel='Adaptive.BaseListener' class='defined-in docClass'>Adaptive.BaseListener</a><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Get the listener id.</p>\n</div></li></ul></div></div></div><div id='method-onError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ButtonListener'>Adaptive.ButtonListener</span><br/><a href='source/Adaptive.html#Adaptive-ButtonListener-method-onError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ButtonListener-method-onError' class='name expandable'>onError</a>( <span class='pre'>error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>No data received ...</div><div class='long'><p>No data received</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : <a href=\"#!/api/Adaptive.IButtonListenerError\" rel=\"Adaptive.IButtonListenerError\" class=\"docClass\">Adaptive.IButtonListenerError</a><div class='sub-desc'><p>error occurred</p>\n</div></li></ul></div></div></div><div id='method-onResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ButtonListener'>Adaptive.ButtonListener</span><br/><a href='source/Adaptive.html#Adaptive-ButtonListener-method-onResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ButtonListener-method-onResult' class='name expandable'>onResult</a>( <span class='pre'>button</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called on button pressed ...</div><div class='long'><p>Called on button pressed</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>button</span> : <a href=\"#!/api/Adaptive.Button\" rel=\"Adaptive.Button\" class=\"docClass\">Adaptive.Button</a><div class='sub-desc'><p>button pressed</p>\n</div></li></ul></div></div></div><div id='method-onWarning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.ButtonListener'>Adaptive.ButtonListener</span><br/><a href='source/Adaptive.html#Adaptive-ButtonListener-method-onWarning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.ButtonListener-method-onWarning' class='name expandable'>onWarning</a>( <span class='pre'>button, warning</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Data received with warning ...</div><div class='long'><p>Data received with warning</p>\n        <p>Available since: <b>ARP1.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>button</span> : <a href=\"#!/api/Adaptive.Button\" rel=\"Adaptive.Button\" class=\"docClass\">Adaptive.Button</a><div class='sub-desc'><p>button  pressed</p>\n</div></li><li><span class='pre'>warning</span> : <a href=\"#!/api/Adaptive.IButtonListenerWarning\" rel=\"Adaptive.IButtonListenerWarning\" class=\"docClass\">Adaptive.IButtonListenerWarning</a><div class='sub-desc'><p>warning happened</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});