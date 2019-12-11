import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { GrpcClient } from 'pip-services3-grpc-node';
import { IApplicationsClientV1 } from './IApplicationsClientV1';
import { ApplicationV1 } from './ApplicationV1';
export declare class ApplicationsGrpcClientV1 extends GrpcClient implements IApplicationsClientV1 {
    constructor();
    getApplications(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<ApplicationV1>) => void): void;
    getApplicationById(correlationId: string, applicationId: string, callback: (err: any, result: ApplicationV1) => void): void;
    createApplication(correlationId: string, application: ApplicationV1, callback: (err: any, result: ApplicationV1) => void): void;
    updateApplication(correlationId: string, application: ApplicationV1, callback: (err: any, result: ApplicationV1) => void): void;
    deleteApplicationById(correlationId: string, applicationId: string, callback: (err: any, result: ApplicationV1) => void): void;
}
