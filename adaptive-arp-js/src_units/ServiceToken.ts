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

    * @version v2.1.0

-------------------------------------------| aut inveniam viam aut faciam |--------------------------------------------
*/

///<reference path="APIBean.ts"/>
///<reference path="IServiceMethod.ts"/>

module Adaptive {

     /**
        @class Adaptive.ServiceToken
        @extends Adaptive.APIBean
        Object representing a specific service, path, function and invocation method for accessing external services.

        @author Carlos Lozano Diez
        @since v2.0.6
        @version 1.0
     */
     export class ServiceToken extends APIBean {

          /**
             @property {Adaptive.IServiceMethod} invocationMethod
             Http method to be used by the invocation - this is typically GET or POST albeit the platform may support
other invocation methods. This is also defined per function of each endpoint in the platform's XML file.
          */
          invocationMethod : IServiceMethod;

          /**
             @property {Adaptive.IServiceMethod} invocationMethod
             Http method to be used by the invocation - this is typically GET or POST albeit the platform may support
other invocation methods. This is also defined per function of each endpoint in the platform's XML file. The 'invocationMethodProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'invocationMethod'.
          */
          get invocationMethodProperty() : IServiceMethod {
               return this.invocationMethod;
          }

          set invocationMethodProperty(invocationMethod:IServiceMethod) {
               this.invocationMethod = invocationMethod;
          }

          /**
             @property {string} endpointName
             Name of the endpoint configured in the platform's services XML file. This is a reference to a specific schema,
host and port combination for a given service.
          */
          endpointName : string;

          /**
             @property {string} endpointName
             Name of the endpoint configured in the platform's services XML file. This is a reference to a specific schema,
host and port combination for a given service. The 'endpointNameProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'endpointName'.
          */
          get endpointNameProperty() : string {
               return this.endpointName;
          }

          set endpointNameProperty(endpointName:string) {
               this.endpointName = endpointName;
          }

          /**
             @property {string} functionName
             Name of the function configured in the platform's services XML file for a specific endpoint. This is a reference
to a relative path of a function published on a remote service.
          */
          functionName : string;

          /**
             @property {string} functionName
             Name of the function configured in the platform's services XML file for a specific endpoint. This is a reference
to a relative path of a function published on a remote service. The 'functionNameProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'functionName'.
          */
          get functionNameProperty() : string {
               return this.functionName;
          }

          set functionNameProperty(functionName:string) {
               this.functionName = functionName;
          }

          /**
             @property {string} serviceName
             Name of the service configured in the platform's services XML file.
          */
          serviceName : string;

          /**
             @property {string} serviceName
             Name of the service configured in the platform's services XML file. The 'serviceNameProperty' is registered with the ECMAScript 5 Object.defineProperty() for the class field 'serviceName'.
          */
          get serviceNameProperty() : string {
               return this.serviceName;
          }

          set serviceNameProperty(serviceName:string) {
               this.serviceName = serviceName;
          }

          /**
             @method constructor
             Convenience constructor.

             @param {string} serviceName      Name of the configured service.
             @param {string} endpointName     Name of the endpoint configured for the service.
             @param {string} functionName     Name of the function configured for the endpoint.
             @param {Adaptive.IServiceMethod} invocationMethod Method type configured for the function.
             @since v2.0.6
          */
          constructor(serviceName: string, endpointName: string, functionName: string, invocationMethod: IServiceMethod) {
               super();
               this.serviceName = serviceName;
               this.endpointName = endpointName;
               this.functionName = functionName;
               this.invocationMethod = invocationMethod;
          }

          /**
             @method
             Get token's invocation method type.

             @return {Adaptive.IServiceMethod} Invocation method type.
             @since v2.0.6
          */
          getInvocationMethod() : IServiceMethod {
               return this.invocationMethod;
          }

          /**
             @method
             Sets the invocation method type.

             @param {Adaptive.IServiceMethod} invocationMethod Method type.
             @since v2.0.6
          */
          setInvocationMethod(invocationMethod: IServiceMethod) {
               this.invocationMethod = invocationMethod;
          }

          /**
             @method
             Get token's endpoint name.

             @return {string} Endpoint name.
             @since v2.0.6
          */
          getEndpointName() : string {
               return this.endpointName;
          }

          /**
             @method
             Set the endpoint name.

             @param {string} endpointName Endpoint name.
             @since v2.0.6
          */
          setEndpointName(endpointName: string) {
               this.endpointName = endpointName;
          }

          /**
             @method
             Get token's function name.

             @return {string} Function name.
             @since v2.0.6
          */
          getFunctionName() : string {
               return this.functionName;
          }

          /**
             @method
             Sets the function name.

             @param {string} functionName Function name.
             @since v2.0.6
          */
          setFunctionName(functionName: string) {
               this.functionName = functionName;
          }

          /**
             @method
             Get token's service name.

             @return {string} Service name.
             @since v2.0.6
          */
          getServiceName() : string {
               return this.serviceName;
          }

          /**
             @method
             Sets token's service name.

             @param {string} serviceName Service name.
             @since v2.0.6
          */
          setServiceName(serviceName: string) {
               this.serviceName = serviceName;
          }

          /**
             @method
             @static
             Convert JSON parsed object to typed equivalent.
             @param {Object} object JSON parsed structure of type Adaptive.ServiceToken.
             @return {Adaptive.ServiceToken} Wrapped object instance.
          */
          static toObject(object : any) : ServiceToken {
               var result : ServiceToken = new ServiceToken(null, null, null, null);

               // Assign values to bean fields.
               if (object!=null && object.serviceName!=null) result.serviceName = object.serviceName;
               if (object!=null && object.endpointName!=null) result.endpointName = object.endpointName;
               if (object!=null && object.functionName!=null) result.functionName = object.functionName;
               if (object!=null && object.invocationMethod!=null) {
                    result.invocationMethod = IServiceMethod.toObject(object.invocationMethod);
               } else {
                    result.invocationMethod = IServiceMethod.toObject(null);
               }

               return result;
          }

     }
}

/**
------------------------------------| Engineered with ♥ in Barcelona, Catalonia |--------------------------------------
*/