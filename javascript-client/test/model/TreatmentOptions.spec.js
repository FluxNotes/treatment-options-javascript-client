/**
 * FluxNotes Treatment Options Rest Client
 * FluxNotes Treatment Options Rest Client
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FluxNotesTreatmentOptionsRestClient);
  }
}(this, function(expect, FluxNotesTreatmentOptionsRestClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FluxNotesTreatmentOptionsRestClient.TreatmentOptions();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TreatmentOptions', function() {
    it('should create an instance of TreatmentOptions', function() {
      // uncomment below and update the code to test TreatmentOptions
      //var instane = new FluxNotesTreatmentOptionsRestClient.TreatmentOptions();
      //expect(instance).to.be.a(FluxNotesTreatmentOptionsRestClient.TreatmentOptions);
    });

    it('should have the property isAlive (base name: "isAlive")', function() {
      // uncomment below and update the code to test the property isAlive
      //var instane = new FluxNotesTreatmentOptionsRestClient.TreatmentOptions();
      //expect(instance).to.be();
    });

    it('should have the property survivalMonths (base name: "survivalMonths")', function() {
      // uncomment below and update the code to test the property survivalMonths
      //var instane = new FluxNotesTreatmentOptionsRestClient.TreatmentOptions();
      //expect(instance).to.be();
    });

    it('should have the property treatOptions (base name: "treatOptions")', function() {
      // uncomment below and update the code to test the property treatOptions
      //var instane = new FluxNotesTreatmentOptionsRestClient.TreatmentOptions();
      //expect(instance).to.be();
    });

  });

}));
