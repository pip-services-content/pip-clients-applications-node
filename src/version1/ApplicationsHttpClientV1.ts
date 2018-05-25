import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-net-node';

import { ApplicationV1 } from './ApplicationV1';
import { IApplicationsClientV1 } from './IApplicationsClientV1';

export class ApplicationsHttpClientV1 extends CommandableHttpClient implements IApplicationsClientV1 {       
    
    constructor(config?: any) {
        super('v1/applications');

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
