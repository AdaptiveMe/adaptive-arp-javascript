Ext.data.JsonP.Adaptive_DeviceOrientationListener({"tagname":"class","name":"Adaptive.DeviceOrientationListener","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-DeviceOrientationListener"}],"extends":"Adaptive.BaseListener","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.DeviceOrientationListener","id":"method-constructor","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getAPIVersion","meta":{}},{"name":"getId","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getId","meta":{}},{"name":"onError","tagname":"method","owner":"Adaptive.DeviceOrientationListener","id":"method-onError","meta":{}},{"name":"onResult","tagname":"method","owner":"Adaptive.DeviceOrientationListener","id":"method-onResult","meta":{}},{"name":"onWarning","tagname":"method","owner":"Adaptive.DeviceOrientationListener","id":"method-onWarning","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.DeviceOrientationListener","component":false,"superclasses":["Adaptive.BaseListener"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.BaseListener' rel='Adaptive.BaseListener' class='docClass'>Adaptive.BaseListener</a><div class='subclass '><strong>Adaptive.DeviceOrientationListener</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-DeviceOrientationListener' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceOrientationListener'>Adaptive.DeviceOrientationListener</span><br/><a href='source/Adaptive.html#Adaptive-DeviceOrientationListener-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.DeviceOrientationListener-method-constructor' class='name expandable'>Adaptive.DeviceOrientationListener</a>( <span class='pre'>onErrorFunction, onResultFunction, onWarningFunction</span> ) : <a href=\"#!/api/Adaptive.DeviceOrientationListener\" rel=\"Adaptive.DeviceOrientationListener\" class=\"docClass\">Adaptive.DeviceOrientationListener</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with anonymous handler functions for listener. ...</div><div class='long'><p>Constructor with anonymous handler functions for listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onErrorFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.IDeviceOrientationListenerError\" rel=\"Adaptive.IDeviceOrientationListenerError\" class=\"docClass\">Adaptive.IDeviceOrientationListenerError</a></p>\n</div></li><li><span class='pre'>onResultFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a></p>\n</div></li><li><span class='pre'>onWarningFunction</span> : Function<div class='sub-desc'><p>Function receiving parameters of type: <a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a>, <a href=\"#!/api/Adaptive.IDeviceOrientationListenerWarning\" rel=\"Adaptive.IDeviceOrientationListenerWarning\" class=\"docClass\">Adaptive.IDeviceOrientationListenerWarning</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.DeviceOrientationListener\" rel=\"Adaptive.DeviceOrientationListener\" class=\"docClass\">Adaptive.DeviceOrientationListener</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BaseListener-method-constructor\" rel=\"Adaptive.BaseListener-method-constructor\" class=\"docClass\">Adaptive.BaseListener.constructor</a></p></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseListener' rel='Adaptive.BaseListener' class='defined-in docClass'>Adaptive.BaseListener</a><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'><p>Return the API group for the given interface.</p>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseListener' rel='Adaptive.BaseListener' class='defined-in docClass'>Adaptive.BaseListener</a><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseListener' rel='Adaptive.BaseListener' class='defined-in docClass'>Adaptive.BaseListener</a><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> ) : number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>number</span><div class='sub-desc'><p>Get the listener id.</p>\n</div></li></ul></div></div></div><div id='method-onError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceOrientationListener'>Adaptive.DeviceOrientationListener</span><br/><a href='source/Adaptive.html#Adaptive-DeviceOrientationListener-method-onError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DeviceOrientationListener-method-onError' class='name expandable'>onError</a>( <span class='pre'>error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Although extremely unlikely, this event will be fired if something beyond the control of the\nplatform impedes the rot...</div><div class='long'><p>Although extremely unlikely, this event will be fired if something beyond the control of the\nplatform impedes the rotation of the device.</p>\n        <p>Available since: <b>v2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : <a href=\"#!/api/Adaptive.IDeviceOrientationListenerError\" rel=\"Adaptive.IDeviceOrientationListenerError\" class=\"docClass\">Adaptive.IDeviceOrientationListenerError</a><div class='sub-desc'><p>error The error condition... generally unknown as it is unexpected!</p>\n</div></li></ul></div></div></div><div id='method-onResult' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceOrientationListener'>Adaptive.DeviceOrientationListener</span><br/><a href='source/Adaptive.html#Adaptive-DeviceOrientationListener-method-onResult' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DeviceOrientationListener-method-onResult' class='name expandable'>onResult</a>( <span class='pre'>event</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event fired with the successful start and finish of a rotation. ...</div><div class='long'><p>Event fired with the successful start and finish of a rotation.</p>\n        <p>Available since: <b>v2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a><div class='sub-desc'><p>event RotationEvent containing origin, destination and state of the event.</p>\n</div></li></ul></div></div></div><div id='method-onWarning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.DeviceOrientationListener'>Adaptive.DeviceOrientationListener</span><br/><a href='source/Adaptive.html#Adaptive-DeviceOrientationListener-method-onWarning' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.DeviceOrientationListener-method-onWarning' class='name expandable'>onWarning</a>( <span class='pre'>event, warning</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Event fired with a warning when the rotation is aborted. ...</div><div class='long'><p>Event fired with a warning when the rotation is aborted. In specific, this\nevent may be fired if the devices vetoes the rotation before rotation is completed.</p>\n        <p>Available since: <b>v2.0.5</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/Adaptive.RotationEvent\" rel=\"Adaptive.RotationEvent\" class=\"docClass\">Adaptive.RotationEvent</a><div class='sub-desc'><p>event   RotationEvent containing origin, destination and state of the event.</p>\n</div></li><li><span class='pre'>warning</span> : <a href=\"#!/api/Adaptive.IDeviceOrientationListenerWarning\" rel=\"Adaptive.IDeviceOrientationListenerWarning\" class=\"docClass\">Adaptive.IDeviceOrientationListenerWarning</a><div class='sub-desc'><p>warning Type of condition that aborted rotation execution.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});