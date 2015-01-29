Ext.data.JsonP.Adaptive_FileSystemBridge({"tagname":"class","name":"Adaptive.FileSystemBridge","autodetected":{},"files":[{"filename":"Adaptive.js","href":"Adaptive.html#Adaptive-FileSystemBridge"}],"extends":"Adaptive.BaseDataBridge","author":[{"tagname":"author","name":"Carlos Lozano Diez","email":null}],"since":"ARP 2.0","members":[{"name":"constructor","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-constructor","meta":{}},{"name":"createFileDescriptor","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-createFileDescriptor","meta":{}},{"name":"getAPIGroup","tagname":"method","owner":"Adaptive.BaseDataBridge","id":"method-getAPIGroup","meta":{}},{"name":"getAPIVersion","tagname":"method","owner":"Adaptive.BaseDataBridge","id":"method-getAPIVersion","meta":{}},{"name":"getApplicationCacheFolder","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-getApplicationCacheFolder","meta":{}},{"name":"getApplicationCloudFolder","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-getApplicationCloudFolder","meta":{}},{"name":"getApplicationDocumentsFolder","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-getApplicationDocumentsFolder","meta":{}},{"name":"getApplicationFolder","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-getApplicationFolder","meta":{}},{"name":"getApplicationProtectedFolder","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-getApplicationProtectedFolder","meta":{}},{"name":"getSeparator","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-getSeparator","meta":{}},{"name":"getSystemExternalFolder","tagname":"method","owner":"Adaptive.FileSystemBridge","id":"method-getSystemExternalFolder","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Adaptive.FileSystemBridge","component":false,"superclasses":["Adaptive.BaseDataBridge"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Adaptive.BaseDataBridge' rel='Adaptive.BaseDataBridge' class='docClass'>Adaptive.BaseDataBridge</a><div class='subclass '><strong>Adaptive.FileSystemBridge</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Adaptive.html#Adaptive-FileSystemBridge' target='_blank'>Adaptive.js</a></div></pre><div class='doc-contents'><p>Interface for Managing the File System operations</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Adaptive.FileSystemBridge-method-constructor' class='name expandable'>Adaptive.FileSystemBridge</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.FileSystemBridge\" rel=\"Adaptive.FileSystemBridge\" class=\"docClass\">Adaptive.FileSystemBridge</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Default constructor. ...</div><div class='long'><p>Default constructor.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.FileSystemBridge\" rel=\"Adaptive.FileSystemBridge\" class=\"docClass\">Adaptive.FileSystemBridge</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Adaptive.BaseDataBridge-method-constructor\" rel=\"Adaptive.BaseDataBridge-method-constructor\" class=\"docClass\">Adaptive.BaseDataBridge.constructor</a></p></div></div></div><div id='method-createFileDescriptor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-createFileDescriptor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.FileSystemBridge-method-createFileDescriptor' class='name expandable'>createFileDescriptor</a>( <span class='pre'>parent, name</span> ) : <a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new reference to a new or existing location in the filesystem. ...</div><div class='long'><p>Creates a new reference to a new or existing location in the filesystem.\nThis method does not create the actual file in the specified folder.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parent</span> : <a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a><div class='sub-desc'><p>parent Parent directory.</p>\n</div></li><li><span class='pre'>name</span> : string<div class='sub-desc'><p>name   Name of new file or directory.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a></span><div class='sub-desc'><p>A reference to a new or existing location in the filesystem.</p>\n</div></li></ul></div></div></div><div id='method-getAPIGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseDataBridge' rel='Adaptive.BaseDataBridge' class='defined-in docClass'>Adaptive.BaseDataBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseDataBridge-method-getAPIGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseDataBridge-method-getAPIGroup' class='name expandable'>getAPIGroup</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API group for the given interface. ...</div><div class='long'><p>Return the API group for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.IAdaptiveRPGroup\" rel=\"Adaptive.IAdaptiveRPGroup\" class=\"docClass\">Adaptive.IAdaptiveRPGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAPIVersion' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Adaptive.BaseDataBridge' rel='Adaptive.BaseDataBridge' class='defined-in docClass'>Adaptive.BaseDataBridge</a><br/><a href='source/Adaptive.html#Adaptive-BaseDataBridge-method-getAPIVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.BaseDataBridge-method-getAPIVersion' class='name expandable'>getAPIVersion</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the API version for the given interface. ...</div><div class='long'><p>Return the API version for the given interface.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>The version of the API.</p>\n</div></li></ul></div></div></div><div id='method-getApplicationCacheFolder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-getApplicationCacheFolder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.FileSystemBridge-method-getApplicationCacheFolder' class='name expandable'>getApplicationCacheFolder</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a reference to the cache folder for the current application. ...</div><div class='long'><p>Returns a reference to the cache folder for the current application.\nThis path must always be writable by the current application.\nThis path is volatile and may be cleaned by the OS periodically.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a></span><div class='sub-desc'><p>Path to the application's cache folder.</p>\n</div></li></ul></div></div></div><div id='method-getApplicationCloudFolder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-getApplicationCloudFolder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.FileSystemBridge-method-getApplicationCloudFolder' class='name expandable'>getApplicationCloudFolder</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a reference to the cloud synchronizable folder for the current application. ...</div><div class='long'><p>Returns a reference to the cloud synchronizable folder for the current application.\nThis path must always be writable by the current application.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a></span><div class='sub-desc'><p>Path to the application's cloud storage folder.</p>\n</div></li></ul></div></div></div><div id='method-getApplicationDocumentsFolder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-getApplicationDocumentsFolder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.FileSystemBridge-method-getApplicationDocumentsFolder' class='name expandable'>getApplicationDocumentsFolder</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a reference to the documents folder for the current application. ...</div><div class='long'><p>Returns a reference to the documents folder for the current application.\nThis path must always be writable by the current application.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a></span><div class='sub-desc'><p>Path to the application's documents folder.</p>\n</div></li></ul></div></div></div><div id='method-getApplicationFolder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-getApplicationFolder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.FileSystemBridge-method-getApplicationFolder' class='name expandable'>getApplicationFolder</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a reference to the application installation folder. ...</div><div class='long'><p>Returns a reference to the application installation folder.\nThis path may or may not be directly readable or writable - it usually contains the app binary and data.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a></span><div class='sub-desc'><p>Path to the application folder.</p>\n</div></li></ul></div></div></div><div id='method-getApplicationProtectedFolder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-getApplicationProtectedFolder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.FileSystemBridge-method-getApplicationProtectedFolder' class='name expandable'>getApplicationProtectedFolder</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a reference to the protected storage folder for the current application. ...</div><div class='long'><p>Returns a reference to the protected storage folder for the current application.\nThis path must always be writable by the current application.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a></span><div class='sub-desc'><p>Path to the application's protected storage folder.</p>\n</div></li></ul></div></div></div><div id='method-getSeparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-getSeparator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.FileSystemBridge-method-getSeparator' class='name expandable'>getSeparator</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the file system dependent file separator. ...</div><div class='long'><p>Returns the file system dependent file separator.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>char with the directory/file separator.</p>\n</div></li></ul></div></div></div><div id='method-getSystemExternalFolder' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Adaptive.FileSystemBridge'>Adaptive.FileSystemBridge</span><br/><a href='source/Adaptive.html#Adaptive-FileSystemBridge-method-getSystemExternalFolder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Adaptive.FileSystemBridge-method-getSystemExternalFolder' class='name expandable'>getSystemExternalFolder</a>( <span class='pre'></span> ) : <a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a reference to the external storage folder provided by the OS. ...</div><div class='long'><p>Returns a reference to the external storage folder provided by the OS. This may\nbe an external SSD card or similar. This type of storage is removable and by\ndefinition, not secure.\nThis path may or may not be writable by the current application.</p>\n        <p>Available since: <b>ARP 2.0</b></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Adaptive.FileDescriptor\" rel=\"Adaptive.FileDescriptor\" class=\"docClass\">Adaptive.FileDescriptor</a></span><div class='sub-desc'><p>Path to the application's documents folder.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});