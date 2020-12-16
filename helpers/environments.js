/*
 * Title: Environment
 * Description:  Handle all environment realated things
 * Author: Md. Iqram khan
 */

 //dependies

 //module Sacffolding

 const environments = {}

 environments.staging = {
       port : 3000,
       envName : 'staging',
       secretKey : 'hdsjfhj',
       maxChecks : 5
 }

 environments.production = {
      port : 5000,
      envName : 'production',
      secretKey : 'rewtuhio',
      maxChecks : 5
}

//determined which environment was passed 
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

//export corresponding environment object 
const environmentToExport = typeof(environments[currentEnvironment]) === 'object' ? environments[currentEnvironment] : environments.staging;

//export module
module.exports = environmentToExport
