let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { ApplicationV1 } from './ApplicationV1';
import { IApplicationsClientV1 } from './IApplicationsClientV1';

export class ApplicationsLambdaClientV1 extends CommandableLambdaClient implements IApplicationsClientV1 {       

    constructor(config?: any) {
        super('applications');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getApplications(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<ApplicationV1>) => void): void {
        this.callCommand( 
            'get_applications', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getApplicationById(correlationId: string, applicationId: string,
        callback: (err: any, application: ApplicationV1) => void): void {
        this.callCommand( 
            'get_application_by_id',
            correlationId,
            {
                application_id: applicationId
            }, 
            callback
        );        
    }

    public createApplication(correlationId: string, application: ApplicationV1,
        callback: (err: any, application: ApplicationV1) => void): void {
        this.callCommand(
            'create_application',
            correlationId,
            {
                application: application
            }, 
            callback
        );
    }

    public updateApplication(correlationId: string, application: ApplicationV1,
        callback: (err: any, application: ApplicationV1) => void): void {
        this.callCommand(
            'update_application', 
            correlationId,
            {
                application: application
            }, 
            callback
        );
    }

    public deleteApplicationById(correlationId: string, applicationId: string,
        callback: (err: any, application: ApplicationV1) => void): void {
        this.callCommand(
            'delete_application_by_id', 
            correlationId,
            {
                application_id: applicationId
            }, 
            callback
        );
    }
    
}
