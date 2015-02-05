/**
--| ADAPTIVE RUNTIME PLATFORM |----------------------------------------------------------------------------------------

(C) Copyright 2013-2015 Carlos Lozano Diez t/a Adaptive.me <http://adaptive.me>.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the
License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 . Unless required by appli-
-cable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,  WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the  License  for the specific language governing
permissions and limitations under the License.

Original author:

    * Carlos Lozano Diez
            <http://github.com/carloslozano>
            <http://twitter.com/adaptivecoder>
            <mailto:carlos@adaptive.me>

Contributors:

    * Ferran Vila Conesa
             <http://github.com/fnva>
             <http://twitter.com/ferran_vila>
             <mailto:ferran.vila.conesa@gmail.com>

    * See source code files for contributors.

Release:

    * @version v2.1.5

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIRequest.ts"/>
///<reference path="APIResponse.ts"/>
///<reference path="BaseDataBridge.ts"/>
///<reference path="CommonUtil.ts"/>
///<reference path="Database.ts"/>
///<reference path="DatabaseResultCallback.ts"/>
///<reference path="DatabaseTable.ts"/>
///<reference path="DatabaseTableResultCallback.ts"/>
///<reference path="IAdaptiveRPGroup.ts"/>
///<reference path="IBaseData.ts"/>
///<reference path="IDatabase.ts"/>
///<reference path="IDatabaseResultCallback.ts"/>
///<reference path="IDatabaseTableResultCallback.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.DatabaseBridge
       @extends Adaptive.BaseDataBridge
       Interface for Managing the Cloud operations

       @author Ferran Vila Conesa
       @since v2.0
    */
    var DatabaseBridge = (function (_super) {
        __extends(DatabaseBridge, _super);
        /**
           @method constructor
           Default constructor.
        */
        function DatabaseBridge() {
            _super.call(this);
        }
        /**
           @method
           Creates a database on default path for every platform.

           @param {Adaptive.Database} database database Database object to create
           @param {Adaptive.DatabaseResultCallback} callback callback Asynchronous callback
           @since v2.0
        */
        DatabaseBridge.prototype.createDatabase = function (database, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var apiRequest = new Adaptive.APIRequest("IDatabase", "createDatabase", arParams, callback.getId());
            apiRequest.setApiVersion("v2.1.5");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.IDatabaseResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.createDatabase' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.IDatabaseResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.createDatabase' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.createDatabase' request.");
            }
        };
        /**
           @method
           Creates a databaseTable inside a database for every platform.

           @param {Adaptive.Database} database database      Database for databaseTable creating.
           @param {Adaptive.DatabaseTable} databaseTable databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param {Adaptive.DatabaseTableResultCallback} callback callback      DatabaseTable callback with the response
           @since v2.0
        */
        DatabaseBridge.prototype.createTable = function (database, databaseTable, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var apiRequest = new Adaptive.APIRequest("IDatabase", "createTable", arParams, callback.getId());
            apiRequest.setApiVersion("v2.1.5");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.createTable' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.createTable' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.createTable' request.");
            }
        };
        /**
           @method
           Deletes a database on default path for every platform.

           @param {Adaptive.Database} database database Database object to delete
           @param {Adaptive.DatabaseResultCallback} callback callback Asynchronous callback
           @since v2.0
        */
        DatabaseBridge.prototype.deleteDatabase = function (database, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var apiRequest = new Adaptive.APIRequest("IDatabase", "deleteDatabase", arParams, callback.getId());
            apiRequest.setApiVersion("v2.1.5");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.IDatabaseResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.deleteDatabase' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.IDatabaseResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.deleteDatabase' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.deleteDatabase' request.");
            }
        };
        /**
           @method
           Deletes a databaseTable inside a database for every platform.

           @param {Adaptive.Database} database database      Database for databaseTable removal.
           @param {Adaptive.DatabaseTable} databaseTable databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param {Adaptive.DatabaseTableResultCallback} callback callback      DatabaseTable callback with the response
           @since v2.0
        */
        DatabaseBridge.prototype.deleteTable = function (database, databaseTable, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var apiRequest = new Adaptive.APIRequest("IDatabase", "deleteTable", arParams, callback.getId());
            apiRequest.setApiVersion("v2.1.5");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.deleteTable' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.deleteTable' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.deleteTable' request.");
            }
        };
        /**
           @method
           Executes SQL statement into the given database. The replacements
should be passed as a parameter

           @param {Adaptive.Database} database database     The database object reference.
           @param {string} statement statement    SQL statement.
           @param {string[]} replacements replacements List of SQL statement replacements.
           @param {Adaptive.DatabaseTableResultCallback} callback callback     DatabaseTable callback with the response.
           @since v2.0
        */
        DatabaseBridge.prototype.executeSqlStatement = function (database, statement, replacements, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(statement));
            arParams.push(JSON.stringify(replacements));
            var apiRequest = new Adaptive.APIRequest("IDatabase", "executeSqlStatement", arParams, callback.getId());
            apiRequest.setApiVersion("v2.1.5");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.executeSqlStatement' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.executeSqlStatement' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.executeSqlStatement' request.");
            }
        };
        /**
           @method
           Executes SQL transaction (some statements chain) inside given database.

           @param {Adaptive.Database} database database     The database object reference.
           @param {string[]} statements statements   The statements to be executed during transaction.
           @param {boolean} rollbackFlag rollbackFlag Indicates if rollback should be performed when any
                  statement execution fails.
           @param {Adaptive.DatabaseTableResultCallback} callback callback     DatabaseTable callback with the response.
           @since v2.0
        */
        DatabaseBridge.prototype.executeSqlTransactions = function (database, statements, rollbackFlag, callback) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(statements));
            arParams.push(JSON.stringify(rollbackFlag));
            var apiRequest = new Adaptive.APIRequest("IDatabase", "executeSqlTransactions", arParams, callback.getId());
            apiRequest.setApiVersion("v2.1.5");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            // Add callback reference to local dictionary.
            Adaptive.registeredDatabaseTableResultCallback.add("" + callback.getId(), callback);
            xhr.send(JSON.stringify(apiRequest));
            // Check response.
            if (xhr.status == 200) {
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                    }
                    else {
                        // Remove callback reference from local dictionary due to invalid response.
                        Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                        callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.executeSqlTransactions' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    // Remove callback reference from local dictionary due to invalid response.
                    Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                    callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                    console.error("ERROR: 'DatabaseBridge.executeSqlTransactions' incorrect response received.");
                }
            }
            else {
                // Unknown error - remove from dictionary and notify callback.
                Adaptive.registeredDatabaseTableResultCallback.remove("" + callback.getId());
                callback.onError(Adaptive.IDatabaseTableResultCallbackError.Unknown);
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.executeSqlTransactions' request.");
            }
        };
        /**
           @method
           Checks if database exists by given database name.

           @param {Adaptive.Database} database database Database Object to check if exists
           @return {boolean} True if exists, false otherwise
           @since v2.0
        */
        DatabaseBridge.prototype.existsDatabase = function (database) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            var apiRequest = new Adaptive.APIRequest("IDatabase", "existsDatabase", arParams, -1);
            apiRequest.setApiVersion("v2.1.5");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.existsDatabase' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DatabaseBridge.existsDatabase' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.existsDatabase' request.");
            }
            return response;
        };
        /**
           @method
           Checks if databaseTable exists by given database name.

           @param {Adaptive.Database} database database      Database for databaseTable consulting.
           @param {Adaptive.DatabaseTable} databaseTable databaseTable DatabaseTable object with the name of the databaseTable inside.
           @return {boolean} True if exists, false otherwise
           @since v2.0
        */
        DatabaseBridge.prototype.existsTable = function (database, databaseTable) {
            // Create and populate API request.
            var arParams = [];
            arParams.push(JSON.stringify(database));
            arParams.push(JSON.stringify(databaseTable));
            var apiRequest = new Adaptive.APIRequest("IDatabase", "existsTable", arParams, -1);
            apiRequest.setApiVersion("v2.1.5");
            var apiResponse = new Adaptive.APIResponse("", 200, "");
            // Create and send JSON request.
            var xhr = new XMLHttpRequest();
            xhr.open("POST", Adaptive.bridgePath, false);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(apiRequest));
            // Prepare response.
            var response = false;
            // Check response.
            if (xhr.status == 200) {
                // Process response.
                if (xhr.responseText != null && xhr.responseText != '') {
                    apiResponse = Adaptive.APIResponse.toObject(JSON.parse(xhr.responseText));
                    if (apiResponse != null && apiResponse.getStatusCode() == 200) {
                        response = !!apiResponse.getResponse();
                    }
                    else {
                        console.error("ERROR: " + apiResponse.getStatusCode() + " receiving response in 'DatabaseBridge.existsTable' [" + apiResponse.getStatusMessage() + "].");
                    }
                }
                else {
                    console.error("ERROR: 'DatabaseBridge.existsTable' incorrect response received.");
                }
            }
            else {
                console.error("ERROR: " + xhr.status + " sending 'DatabaseBridge.existsTable' request.");
            }
            return response;
        };
        return DatabaseBridge;
    })(Adaptive.BaseDataBridge);
    Adaptive.DatabaseBridge = DatabaseBridge;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=DatabaseBridge.js.map