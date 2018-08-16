# FluxNotesTreatmentOptionsRestClient.DefaultApi

All URIs are relative to *http://localhost:3001/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findTreatmentOptionsByPatientStats**](DefaultApi.md#findTreatmentOptionsByPatientStats) | **GET** /treatmentOptions | Get treatment options given filters
[**treatmentOptionsOptions**](DefaultApi.md#treatmentOptionsOptions) | **OPTIONS** /treatmentOptions | 


<a name="findTreatmentOptionsByPatientStats"></a>
# **findTreatmentOptionsByPatientStats**
> [TreatmentOptions] findTreatmentOptionsByPatientStats(disease, opts)

Get treatment options given filters

Return treatment options for the following filters

### Example
```javascript
var FluxNotesTreatmentOptionsRestClient = require('flux_notes_treatment_options_rest_client');

var apiInstance = new FluxNotesTreatmentOptionsRestClient.DefaultApi();

var disease = "disease_example"; // String | disease filter

var opts = { 
  'race': "race_example", // String | race filter
  'dxGrade': "dxGrade_example" // String | grade of disease filter
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTreatmentOptionsByPatientStats(disease, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disease** | **String**| disease filter | 
 **race** | **String**| race filter | [optional] 
 **dxGrade** | **String**| grade of disease filter | [optional] 

### Return type

[**[TreatmentOptions]**](TreatmentOptions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="treatmentOptionsOptions"></a>
# **treatmentOptionsOptions**
> treatmentOptionsOptions()



### Example
```javascript
var FluxNotesTreatmentOptionsRestClient = require('flux_notes_treatment_options_rest_client');

var apiInstance = new FluxNotesTreatmentOptionsRestClient.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.treatmentOptionsOptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

