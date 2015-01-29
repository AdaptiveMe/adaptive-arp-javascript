Ext.data.JsonP.Adaptive_DatabaseResultCallback({"tagname":"class","name":"Adaptive.DatabaseResultCallback","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-DatabaseResultCallback"}],"extends":"Adaptive.BaseCallback","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.DatabaseResultCallback","id":"method-constructor","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseCallback","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseCallback","id":"method-getAPIVersion","meta":{}},{"name":"getId","tagname":"method","owner":"Adaptive.BaseCallback","id":"method-getId","meta":{}},{"name":"onError","tagname":"method","owner":"Adaptive.DatabaseResultCallback","id":"method-onError","meta":{}},{"name":"onResult","tagname":"method","owner":"Adaptive.DatabaseResultCallback","id":"method-onResult","meta":{}},{"name":"onWarning","tagname":"method","owner":"Adaptive.DatabaseResultCallback","id":"method-onWarning","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.DatabaseResultCallback","component":false,"superclasses":["Adaptive.BaseCallback"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.BaseCallback' rel='Adaptive.BaseCallback' class='docClass'>Adaptive.BaseCallback</a><div class='subclass '><strong>Adaptive.DatabaseResultCallback</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-DatabaseResultCallback' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DatabaseResultCallback'>Adaptive.DatabaseResultCallback</span><br/><a href='source/Adaptive.html#Adaptive-DatabaseResultCallback-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.DatabaseResultCallback-method-constructor' class='name expandable'>Adaptive.DatabaseResultCallback</a>( <span class='pre'>onErrorFunction, onResultFunction, onWarningFunction</span> ) : <a href=\"#!/api/Adaptive.DatabaseResultCallback\" rel=\"Adaptive.DatabaseResultCallback\" class=\"docClass\">Adaptive.DatabaseResultCallback</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with anonymous handler functions for callback. ...</div><div class='long'><p>Constructor with anonymous handler functions for callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onErrorFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.IDatabaseResultCallbackError\" rel=\"Adaptive.IDatabaseResultCallbackError\" class=\"docClass\">Adaptive.IDatabaseResultCallbackError</a></p>\n</div></li><li><span class='pre'>onResultFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Database\" rel=\"Adaptive.Database\" class=\"docClass\">Adaptive.Database</a></p>\n</div></li><li><span class='pre'>onWarningFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.Database\" rel=\"Adaptive.Database\" class=\"docClass\">Adaptive.Database</a>, <a href=\"#!/api/Adaptive.IDatabaseResultCallbackWarning\" rel=\"Adaptive.IDatabaseResultCallbackWarning\" class=\"docClass\">Adaptive.IDatabaseResultCallbackWarning</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.DatabaseResultCallback\" rel=\"Adaptive.DatabaseResultCallback\" class=\"docClass\">Adaptive.DatabaseResultCallback</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BaseCallback-method-constructor\" rel=\"Adaptive.BaseCallback-method-constructor\" class=\"docClass\">Adaptive.BaseCallback.constructor</a></p></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseCallback' rel='Adaptive.BaseCallback' class='defined-in docClass'>Adaptive.BaseCallback</a><br/><a href='source/Adaptive.html#Adaptive-BaseCallback-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseCallback-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'><p>Return the API group for the given interface.</p>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseCallback' rel='Adaptive.BaseCallback' class='defined-in docClass'>Adaptive.BaseCallback</a><br/><a href='source/Adaptive.html#Adaptive-BaseCallback-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseCallback-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseCallback' rel='Adaptive.BaseCallback' class='defined-in docClass'>Adaptive.BaseCallback</a><br/><a href='source/Adaptive.html#Adaptive-BaseCallback-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseCallback-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Get the callback id.</p>\n</div></li></ul></div></div></div><div id='method-onError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DatabaseResultCallback'>Adaptive.DatabaseResultCallback</span><br/><a href='source/Adaptive.html#Adaptive-DatabaseResultCallback-method-onError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DatabaseResultCallback-method-onError' class='name expandable'>onError</a>( <span class='pre'>error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Result callback for error responses ...</div><div class='long'><p>Result callback for error responses</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : <a href=\"#!/api/Adaptive.IDatabaseResultCallbackError\" rel=\"Adaptive.IDatabaseResultCallbackError\" class=\"docClass\">Adaptive.IDatabaseResultCallbackError</a><div class='sub-desc'><p>error Returned error</p>\n</div></li></ul></div></div></div><div id='method-onResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DatabaseResultCallback'>Adaptive.DatabaseResultCallback</span><br/><a href='source/Adaptive.html#Adaptive-DatabaseResultCallback-method-onResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DatabaseResultCallback-method-onResult' class='name expandable'>onResult</a>( <span class='pre'>database</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Result callback for correct responses ...</div><div class='long'><p>Result callback for correct responses</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>database</span> : <a href=\"#!/api/Adaptive.Database\" rel=\"Adaptive.Database\" class=\"docClass\">Adaptive.Database</a><div class='sub-desc'><p>database Returns the database</p>\n</div></li></ul></div></div></div><div id='method-onWarning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DatabaseResultCallback'>Adaptive.DatabaseResultCallback</span><br/><a href='source/Adaptive.html#Adaptive-DatabaseResultCallback-method-onWarning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DatabaseResultCallback-method-onWarning' class='name expandable'>onWarning</a>( <span class='pre'>database, warning</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Result callback for warning responses ...</div><div class='long'><p>Result callback for warning responses</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>database</span> : <a href=\"#!/api/Adaptive.Database\" rel=\"Adaptive.Database\" class=\"docClass\">Adaptive.Database</a><div class='sub-desc'><p>database Returns the database</p>\n</div></li><li><span class='pre'>warning</span> : <a href=\"#!/api/Adaptive.IDatabaseResultCallbackWarning\" rel=\"Adaptive.IDatabaseResultCallbackWarning\" class=\"docClass\">Adaptive.IDatabaseResultCallbackWarning</a><div class='sub-desc'><p>warning  Returned Warning</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});