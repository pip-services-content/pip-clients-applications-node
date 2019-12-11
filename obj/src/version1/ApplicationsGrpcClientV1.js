"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let services = require('../../../src/protos/applications_v1_grpc_pb');
let messages = require('../../../src/protos/applications_v1_pb');
const pip_services3_grpc_node_1 = require("pip-services3-grpc-node");
const ApplicationsGrpcConverterV1_1 = require("./ApplicationsGrpcConverterV1");
class ApplicationsGrpcClientV1 extends pip_services3_grpc_node_1.GrpcClient {
    constructor() {
        super(services.ApplicationsClient);
    }
    getApplications(correlationId, filter, paging, callback) {
        let request = new messages.ApplicationPageRequest();
        ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.fromPagingParams(paging));
        let timing = this.instrument(correlationId, 'applications.get_applications');
        this.call('get_applications', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
            let result = response
                ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplicationPage(response.getPage())
                : null;
            callback(err, result);
        });
    }
    getApplicationById(correlationId, applicationId, callback) {
        let request = new messages.ApplicationIdRequest();
        request.setApplicationId(applicationId);
        let timing = this.instrument(correlationId, 'applications.get_application_by_id');
        this.call('get_application_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
            let result = response
                ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplication(response.getApplication())
                : null;
            callback(err, result);
        });
    }
    createApplication(correlationId, application, callback) {
        let applicationObj = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.fromApplication(application);
        let request = new messages.ApplicationObjectRequest();
        request.setApplication(applicationObj);
        let timing = this.instrument(correlationId, 'applications.create_application');
        this.call('create_application', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
            let result = response
                ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplication(response.getApplication())
                : null;
            callback(err, result);
        });
    }
    updateApplication(correlationId, application, callback) {
        let applicationObj = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.fromApplication(application);
        let request = new messages.ApplicationObjectRequest();
        request.setApplication(applicationObj);
        let timing = this.instrument(correlationId, 'applications.update_application');
        this.call('update_application', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
            let result = response
                ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplication(response.getApplication())
                : null;
            callback(err, result);
        });
    }
    deleteApplicationById(correlationId, applicationId, callback) {
        let request = new messages.ApplicationIdRequest();
        request.setApplicationId(applicationId);
        let timing = this.instrument(correlationId, 'applications.delete_application_by_id');
        this.call('delete_application_by_id', correlationId, request, (err, response) => {
            timing.endTiming();
            if (err == null && response.error != null)
                err = ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toError(response.error);
            let result = response
                ? ApplicationsGrpcConverterV1_1.ApplicationsGrpcConverterV1.toApplication(response.getApplication())
                : null;
            callback(err, result);
        });
    }
}
exports.ApplicationsGrpcClientV1 = ApplicationsGrpcClientV1;
//# sourceMappingURL=ApplicationsGrpcClientV1.js.map