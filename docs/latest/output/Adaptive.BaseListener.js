Ext.data.JsonP.Adaptive_BaseListener({"tagname":"class","name":"Adaptive.BaseListener","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-BaseListener"}],"members":[{"name":"constructor","tagname":"method","owner":"Adaptive.BaseListener","id":"method-constructor","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getAPIVersion","meta":{}},{"name":"getId","tagname":"method","owner":"Adaptive.BaseListener","id":"method-getId","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.BaseListener","component":false,"superclasses":[],"subclasses":["Adaptive.AccelerationListener","Adaptive.ButtonListener","Adaptive.DeviceOrientationListener","Adaptive.DisplayOrientationListener","Adaptive.GeolocationListener","Adaptive.LifecycleListener","Adaptive.NetworkStatusListener"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Adaptive.AccelerationListener' rel='Adaptive.AccelerationListener' class='docClass'>Adaptive.AccelerationListener</a></div><div class='dependency'><a href='#!/api/Adaptive.ButtonListener' rel='Adaptive.ButtonListener' class='docClass'>Adaptive.ButtonListener</a></div><div class='dependency'><a href='#!/api/Adaptive.DeviceOrientationListener' rel='Adaptive.DeviceOrientationListener' class='docClass'>Adaptive.DeviceOrientationListener</a></div><div class='dependency'><a href='#!/api/Adaptive.DisplayOrientationListener' rel='Adaptive.DisplayOrientationListener' class='docClass'>Adaptive.DisplayOrientationListener</a></div><div class='dependency'><a href='#!/api/Adaptive.GeolocationListener' rel='Adaptive.GeolocationListener' class='docClass'>Adaptive.GeolocationListener</a></div><div class='dependency'><a href='#!/api/Adaptive.LifecycleListener' rel='Adaptive.LifecycleListener' class='docClass'>Adaptive.LifecycleListener</a></div><div class='dependency'><a href='#!/api/Adaptive.NetworkStatusListener' rel='Adaptive.NetworkStatusListener' class='docClass'>Adaptive.NetworkStatusListener</a></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-BaseListener' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.BaseListener'>Adaptive.BaseListener</span><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.BaseListener-method-constructor' class='name expandable'>Adaptive.BaseListener</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Adaptive.BaseListener\" rel=\"Adaptive.BaseListener\" class=\"docClass\">Adaptive.BaseListener</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Constructor with listener id. ...</div><div class='long'><p>Constructor with listener id.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : number<div class='sub-desc'><p>The id of the listener.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.BaseListener\" rel=\"Adaptive.BaseListener\" class=\"docClass\">Adaptive.BaseListener</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAPIGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.BaseListener'>Adaptive.BaseListener</span><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'><p>Return the API group for the given interface.</p>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.BaseListener'>Adaptive.BaseListener</span><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-getId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.BaseListener'>Adaptive.BaseListener</span><br/><a href='source/Adaptive.html#Adaptive-BaseListener-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseListener-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the unique listener identifier. ...</div><div class='long'><p>Return the unique listener identifier. This is used to check if two listeners are the same\nin every platform. This id is populated by the Javascript platform</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Unique Listener identifier</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});