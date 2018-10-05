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
  'dxGrade': "dxGrade_example", // String | grade of disease filter
  'ageAtDiagnosis': "ageAtDiagnosis_example", // String | age at diagnosis filter
  'gender': "gender_example", // String | patient gender filter
  'stageAtDiagnosis': "stageAtDiagnosis_example", // String | stage at diagnosis filter
  'mitosisCount': "mitosisCount_example", // String | mitosis count filter
  'cancerSite': "cancerSite_example", // String | cancer site filer
  'surgery': "surgery_example", // String | surgery recieved filter
  'pastTreatments': ["pastTreatments_example"], // [String] | Treatments recieved in past
  'hemoglobin': "hemoglobin_example", // String | lab result for hemoglobin filter
  'albumin': "albumin_example", // String | lab result for albumin filter
  'cD117KIT': "cD117KIT_example", // String | immunohistochemical finding
  'cD34': "cD34_example", // String | immunohistochemical finding
  'smoothMuscleActin': "smoothMuscleActin_example", // String | immunohistochemical finding
  'desmin': "desmin_example", // String | immunohistochemical finding
  's100': "s100_example", // String | immunohistochemical finding
  'ki67Index': "ki67Index_example" // String | immunohistochemical finding
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
 **ageAtDiagnosis** | **String**| age at diagnosis filter | [optional] 
 **gender** | **String**| patient gender filter | [optional] 
 **stageAtDiagnosis** | **String**| stage at diagnosis filter | [optional] 
 **mitosisCount** | **String**| mitosis count filter | [optional] 
 **cancerSite** | **String**| cancer site filer | [optional] 
 **surgery** | **String**| surgery recieved filter | [optional] 
 **pastTreatments** | [**[String]**](String.md)| Treatments recieved in past | [optional] 
 **hemoglobin** | **String**| lab result for hemoglobin filter | [optional] 
 **albumin** | **String**| lab result for albumin filter | [optional] 
 **cD117KIT** | **String**| immunohistochemical finding | [optional] 
 **cD34** | **String**| immunohistochemical finding | [optional] 
 **smoothMuscleActin** | **String**| immunohistochemical finding | [optional] 
 **desmin** | **String**| immunohistochemical finding | [optional] 
 **s100** | **String**| immunohistochemical finding | [optional] 
 **ki67Index** | **String**| immunohistochemical finding | [optional] 

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

