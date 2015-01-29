Ext.data.JsonP.Adaptive_GeolocationBridge({"tagname":"class","name":"Adaptive.GeolocationBridge","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-GeolocationBridge"}],"extends":"Adaptive.BaseSensorBridge","author":[{"tagname":"author","name":"Francisco Javier Martin Bueno","email":null}],"since":"ARP 2.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.GeolocationBridge","id":"method-constructor","meta":{}},{"name":"addGeolocationListener","tagname":"method","owner":"Adaptive.GeolocationBridge","id":"method-addGeolocationListener","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseSensorBridge","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseSensorBridge","id":"method-getAPIVersion","meta":{}},{"name":"removeGeolocationListener","tagname":"method","owner":"Adaptive.GeolocationBridge","id":"method-removeGeolocationListener","meta":{}},{"name":"removeGeolocationListeners","tagname":"method","owner":"Adaptive.GeolocationBridge","id":"method-removeGeolocationListeners","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.GeolocationBridge","component":false,"superclasses":["Adaptive.BaseSensorBridge"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.BaseSensorBridge' rel='Adaptive.BaseSensorBridge' class='docClass'>Adaptive.BaseSensorBridge</a><div class='subclass '><strong>Adaptive.GeolocationBridge</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-GeolocationBridge' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Interface for Managing the Geolocation operations</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.GeolocationBridge'>Adaptive.GeolocationBridge</span><br/><a href='source/Adaptive.html#Adaptive-GeolocationBridge-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.GeolocationBridge-method-constructor' class='name expandable'>Adaptive.GeolocationBridge</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.GeolocationBridge\" rel=\"Adaptive.GeolocationBridge\" class=\"docClass\">Adaptive.GeolocationBridge</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default constructor. ...</div><div class='long'><p>Default constructor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.GeolocationBridge\" rel=\"Adaptive.GeolocationBridge\" class=\"docClass\">Adaptive.GeolocationBridge</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BaseSensorBridge-method-constructor\" rel=\"Adaptive.BaseSensorBridge-method-constructor\" class=\"docClass\">Adaptive.BaseSensorBridge.constructor</a></p></div></div></div><div id='method-addGeolocationListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.GeolocationBridge'>Adaptive.GeolocationBridge</span><br/><a href='source/Adaptive.html#Adaptive-GeolocationBridge-method-addGeolocationListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.GeolocationBridge-method-addGeolocationListener' class='name expandable'>addGeolocationListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Register a new listener that will receive geolocation events. ...</div><div class='long'><p>Register a new listener that will receive geolocation events.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : <a href=\"#!/api/Adaptive.GeolocationListener\" rel=\"Adaptive.GeolocationListener\" class=\"docClass\">Adaptive.GeolocationListener</a><div class='sub-desc'><p>listener to be registered.</p>\n</div></li></ul></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseSensorBridge' rel='Adaptive.BaseSensorBridge' class='defined-in docClass'>Adaptive.BaseSensorBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseSensorBridge-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseSensorBridge-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API group for the given interface. ...</div><div class='long'><p>Return the API group for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseSensorBridge' rel='Adaptive.BaseSensorBridge' class='defined-in docClass'>Adaptive.BaseSensorBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseSensorBridge-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseSensorBridge-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-removeGeolocationListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.GeolocationBridge'>Adaptive.GeolocationBridge</span><br/><a href='source/Adaptive.html#Adaptive-GeolocationBridge-method-removeGeolocationListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.GeolocationBridge-method-removeGeolocationListener' class='name expandable'>removeGeolocationListener</a>( <span class='pre'>listener</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>De-registers an existing listener from receiving geolocation events. ...</div><div class='long'><p>De-registers an existing listener from receiving geolocation events.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listener</span> : <a href=\"#!/api/Adaptive.GeolocationListener\" rel=\"Adaptive.GeolocationListener\" class=\"docClass\">Adaptive.GeolocationListener</a><div class='sub-desc'><p>listener to be registered.</p>\n</div></li></ul></div></div></div><div id='method-removeGeolocationListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.GeolocationBridge'>Adaptive.GeolocationBridge</span><br/><a href='source/Adaptive.html#Adaptive-GeolocationBridge-method-removeGeolocationListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.GeolocationBridge-method-removeGeolocationListeners' class='name expandable'>removeGeolocationListeners</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removed all existing listeners from receiving geolocation events. ...</div><div class='long'><p>Removed all existing listeners from receiving geolocation events.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n</div></div></div></div></div></div></div>","meta":{}});