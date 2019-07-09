import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { IApplicationsClientV1 } from './IApplicationsClientV1';
import { ApplicationV1 } from './ApplicationV1';

export class ApplicationsNullClientV1 implements IApplicationsClientV1 {
            
    public getApplications(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<ApplicationV1>) => void): void {
        callback(null, new DataPage<ApplicationV1>([], 0));
    }

    public getApplicationById(correlationId: string, applicationId: string, 
        callback: (err: any, application: ApplicationV1) => void): void {
        callback(null, null);
    }

    public createApplication(correlationId: string, application: ApplicationV1, 
        callback: (err: any, application: ApplicationV1) => void): void {
        callback(null, application);
    }

    public updateApplication(correlationId: string, application: ApplicationV1, 
        callback: (err: any, application: ApplicationV1) => void): void {
        callback(null, application);
    }

    public deleteApplicationById(correlationId: string, applicationId: string,
        callback: (err: any, application: ApplicationV1) => void): void {
        callback(null, null);
    }
}