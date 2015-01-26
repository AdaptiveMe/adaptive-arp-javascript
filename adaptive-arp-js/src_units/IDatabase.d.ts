/// <reference path="Database.d.ts" />
/// <reference path="DatabaseTable.d.ts" />
/// <reference path="IAdaptiveRPGroup.d.ts" />
/// <reference path="IBaseData.d.ts" />
/// <reference path="IDatabaseResultCallback.d.ts" />
/// <reference path="IDatabaseTableResultCallback.d.ts" />
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

    * @version v2.0.3

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/
declare module Adaptive {
    /**
       Interface for Managing the Cloud operations

       @author Ferran Vila Conesa
       @since ARP1.0
       @version 1.0
    */
    interface IDatabase extends IBaseData {
        /**
           Creates a database on default path for every platform.
           @param callback Asynchronous callback
           @param database Database object to create
           @since ARP1.0
        */
        createDatabase(database: Database, callback: IDatabaseResultCallback): any;
        /**
           Creates a databaseTable inside a database for every platform.
           @param database      Database for databaseTable creating.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        createTable(database: Database, databaseTable: DatabaseTable, callback: IDatabaseTableResultCallback): any;
        /**
           Deletes a database on default path for every platform.
           @param database Database object to delete
           @param callback Asynchronous callback
           @since ARP1.0
        */
        deleteDatabase(database: Database, callback: IDatabaseResultCallback): any;
        /**
           Deletes a databaseTable inside a database for every platform.
           @param database      Database for databaseTable removal.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @param callback      DatabaseTable callback with the response
           @since ARP1.0
        */
        deleteTable(database: Database, databaseTable: DatabaseTable, callback: IDatabaseTableResultCallback): any;
        /**
           Executes SQL statement into the given database. The replacements
should be passed as a parameter
           @param database     The database object reference.
           @param statement    SQL statement.
           @param replacements List of SQL statement replacements.
           @param callback     DatabaseTable callback with the response.
           @since ARP1.0
        */
        executeSqlStatement(database: Database, statement: string, replacements: string[], callback: IDatabaseTableResultCallback): any;
        /**
           Executes SQL transaction (some statements chain) inside given database.
           @param database     The database object reference.
           @param statements   The statements to be executed during transaction.
           @param rollbackFlag Indicates if rollback should be performed when any
                  statement execution fails.
           @param callback     DatabaseTable callback with the response.
           @since ARP1.0
        */
        executeSqlTransactions(database: Database, statements: string[], rollbackFlag: boolean, callback: IDatabaseTableResultCallback): any;
        /**
           Checks if database exists by given database name.
           @param database Database Object to check if exists
           @return True if exists, false otherwise
           @since ARP1.0
        */
        existsDatabase(database: Database): boolean;
        /**
           Checks if databaseTable exists by given database name.
           @param database      Database for databaseTable consulting.
           @param databaseTable DatabaseTable object with the name of the databaseTable inside.
           @return True if exists, false otherwise
           @since ARP1.0
        */
        existsTable(database: Database, databaseTable: DatabaseTable): boolean;
    }
}