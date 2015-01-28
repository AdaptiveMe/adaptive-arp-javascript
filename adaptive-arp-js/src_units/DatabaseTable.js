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

    * @version v2.0.4

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="APIBean.ts"/>
///<reference path="DatabaseColumn.ts"/>
///<reference path="DatabaseRow.ts"/>
var Adaptive;
(function (Adaptive) {
    /**
       @class Adaptive.DatabaseTable
       @extends Adaptive.APIBean
       Represents a data table composed of databaseColumns and databaseRows.

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    var DatabaseTable = (function (_super) {
        __extends(DatabaseTable, _super);
        /**
           @method constructor
           Constructor using fields

           @param {string} name            The name of the table
           @param {number} columnCount     The number of databaseColumns
           @param {number} rowCount        The number of databaseRows
           @param {Adaptive.DatabaseColumn[]} databaseColumns The databaseColumns of the table
           @param {Adaptive.DatabaseRow[]} databaseRows    The databaseRows of the table
           @since ARP1.0
        */
        function DatabaseTable(name, columnCount, rowCount, databaseColumns, databaseRows) {
            _super.call(this);
            this.name = name;
            this.columnCount = columnCount;
            this.rowCount = rowCount;
            this.databaseColumns = databaseColumns;
            this.databaseRows = databaseRows;
        }
        /**
           @method
           Get the number of databaseColumns

           @return {number} The number of databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.getColumnCount = function () {
            return this.columnCount;
        };
        /**
           @method
           Sets the number of databaseColumns

           @param {number} columnCount The number of databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.setColumnCount = function (columnCount) {
            this.columnCount = columnCount;
        };
        /**
           @method
           Get the databaseColumns

           @return {Adaptive.DatabaseColumn[]} The databaseColumns
           @since ARP1.0
        */
        DatabaseTable.prototype.getDatabaseColumns = function () {
            return this.databaseColumns;
        };
        /**
           @method
           Sets the databaseColumns of the table

           @param {Adaptive.DatabaseColumn[]} databaseColumns The databaseColumns of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setDatabaseColumns = function (databaseColumns) {
            this.databaseColumns = databaseColumns;
        };
        /**
           @method
           Get the databaseRows of the table

           @return {Adaptive.DatabaseRow[]} The databaseRows of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.getDatabaseRows = function () {
            return this.databaseRows;
        };
        /**
           @method
           Sets the databaseRows of the table

           @param {Adaptive.DatabaseRow[]} databaseRows The databaseRows of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setDatabaseRows = function (databaseRows) {
            this.databaseRows = databaseRows;
        };
        /**
           @method
           Returns the name of the table

           @return {string} The name of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.getName = function () {
            return this.name;
        };
        /**
           @method
           Sets the name of the table

           @param {string} name The name of the table
           @since ARP1.0
        */
        DatabaseTable.prototype.setName = function (name) {
            this.name = name;
        };
        /**
           @method
           Get the number of databaseRows

           @return {number} The number of databaseRows
           @since ARP1.0
        */
        DatabaseTable.prototype.getRowCount = function () {
            return this.rowCount;
        };
        /**
           @method
           Sets the number of databaseRows

           @param {number} rowCount The number of databaseRows
           @since ARP1.0
        */
        DatabaseTable.prototype.setRowCount = function (rowCount) {
            this.rowCount = rowCount;
        };
        /**
           Convert JSON parsed object to typed equivalent.
        */
        DatabaseTable.toObject = function (object) {
            var result = new DatabaseTable(null, null, null, null, null);
            // Assign values to bean fields.
            if (object != null && object.name != null)
                result.name = object.name;
            if (object != null && object.columnCount != null)
                result.columnCount = object.columnCount;
            if (object != null && object.rowCount != null)
                result.rowCount = object.rowCount;
            if (object != null && object.databaseColumns != null) {
                result.databaseColumns = new Array();
                for (var i = 0; i < object.databaseColumns.length; i++) {
                    var __value__ = object.databaseColumns[i];
                    if (__value__ != null) {
                        result.databaseColumns.push(Adaptive.DatabaseColumn.toObject(__value__));
                    }
                    else {
                        result.databaseColumns.push(Adaptive.DatabaseColumn.toObject(null));
                    }
                }
            }
            if (object != null && object.databaseRows != null) {
                result.databaseRows = new Array();
                for (var i = 0; i < object.databaseRows.length; i++) {
                    var __value__ = object.databaseRows[i];
                    if (__value__ != null) {
                        result.databaseRows.push(Adaptive.DatabaseRow.toObject(__value__));
                    }
                    else {
                        result.databaseRows.push(Adaptive.DatabaseRow.toObject(null));
                    }
                }
            }
            return result;
        };
        return DatabaseTable;
    })(Adaptive.APIBean);
    Adaptive.DatabaseTable = DatabaseTable;
})(Adaptive || (Adaptive = {}));
//# sourceMappingURL=DatabaseTable.js.map