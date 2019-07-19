let _ = require('lodash');
let services = require('../../../src/protos/applications_v1_grpc_pb');
let messages = require('../../../src/protos/applications_v1_pb');

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { GrpcClient } from 'pip-services3-grpc-node';

import { IApplicationsClientV1 } from './IApplicationsClientV1';
import { ApplicationV1 } from './ApplicationV1';
import { ApplicationsGrpcConverterV1 } from './ApplicationsGrpcConverterV1';

export class ApplicationsGrpcClientV1 extends GrpcClient implements IApplicationsClientV1 {
        
    public constructor() {
        super(services.ApplicationsClient);
    }

    public getApplications(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, result: DataPage<ApplicationV1>) => void): void {

        let request = new messages.ApplicationPageRequest();

        ApplicationsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(ApplicationsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'applications.get_applications');

        this.call('get_applications',
            correlationId, 
            request,
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = ApplicationsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? ApplicationsGrpcConverterV1.toApplicationPage(response.getPage())
                    : null;

                callback(err, result);
            }
        );
    }

    public getApplicationById(correlationId: string, applicationId: string,
        callback: (err: any, result: ApplicationV1) => void): void {

        let request = new messages.ApplicationIdRequest();
        request.setApplicationId(applicationId);

        let timing = this.instrument(correlationId, 'applications.get_application_by_id');

        this.call('get_application_by_id',
            correlationId,
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = ApplicationsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? ApplicationsGrpcConverterV1.toApplication(response.getApplication())
                    : null;

                callback(err, result);
            }
        );        
    }

    public createApplication(correlationId: string, application: ApplicationV1,
        callback: (err: any, result: ApplicationV1) => void): void {

        let applicationObj = ApplicationsGrpcConverterV1.fromApplication(application);

        let request = new messages.ApplicationObjectRequest();
        request.setApplication(applicationObj);

        let timing = this.instrument(correlationId, 'applications.create_application');

        this.call('create_application',
            correlationId,
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = ApplicationsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? ApplicationsGrpcConverterV1.toApplication(response.getApplication())
                    : null;

                callback(err, result);
            }
        );
    }

    public updateApplication(correlationId: string, application: ApplicationV1,
        callback: (err: any, result: ApplicationV1) => void): void {

        let applicationObj = ApplicationsGrpcConverterV1.fromApplication(application);

        let request = new messages.ApplicationObjectRequest();
        request.setApplication(applicationObj);
    
        let timing = this.instrument(correlationId, 'applications.update_application');

        this.call('update_application',
            correlationId, 
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = ApplicationsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? ApplicationsGrpcConverterV1.toApplication(response.getApplication())
                    : null;

                callback(err, result);
            }
        );
    }

    public deleteApplicationById(correlationId: string, applicationId: string,
        callback: (err: any, result: ApplicationV1) => void): void {

        let request = new messages.ApplicationIdRequest();
        request.setApplicationId(applicationId);

        let timing = this.instrument(correlationId, 'applications.delete_application_by_id');

        this.call('delete_application_by_id',
            correlationId, 
            request, 
            (err, response) => {
                timing.endTiming();

                if (err == null && response.error != null)
                    err = ApplicationsGrpcConverterV1.toError(response.error);

                let result = response 
                    ? ApplicationsGrpcConverterV1.toApplication(response.getApplication())
                    : null;

                callback(err, result);
            }
        );
    }
  
}
