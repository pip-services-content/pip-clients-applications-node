let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services-commons-node';

import { ApplicationV1 } from '../../src/version1/ApplicationV1';
import { IApplicationsClientV1 } from '../../src/version1/IApplicationsClientV1';

let APPLICATION1: ApplicationV1 = {
    id: '1',
    name: { en: 'App 1' },
    product: 'Product 1',
    copyrights: 'PipDevs 2018',
    min_ver: 0,
    max_ver: 9999
};
let APPLICATION2: ApplicationV1 = {
    id: '2',
    name: { en: 'App 2' },
    product: 'Product 1',
    copyrights: 'PipDevs 2018',
    min_ver: 0,
    max_ver: 9999
};

export class ApplicationsClientFixtureV1 {
    private _client: IApplicationsClientV1;
    
    constructor(client: IApplicationsClientV1) {
        this._client = client;
    }
        
    testCrudOperations(done) {
        let application1, application2: ApplicationV1;

        async.series([
        // Create one application
            (callback) => {
                this._client.createApplication(
                    null,
                    APPLICATION1,
                    (err, application) => {
                        assert.isNull(err);

                        assert.isObject(application);
                        assert.equal(application.name.en, APPLICATION1.name.en);
                        assert.equal(application.product, APPLICATION1.product);
                        assert.equal(application.copyrights, APPLICATION1.copyrights);

                        application1 = application;

                        callback();
                    }
                );
            },
        // Create another application
            (callback) => {
                this._client.createApplication(
                    null,
                    APPLICATION2,
                    (err, application) => {
                        assert.isNull(err);

                        assert.isObject(application);
                        assert.equal(application.name.en, APPLICATION2.name.en);
                        assert.equal(application.product, APPLICATION2.product);
                        assert.equal(application.copyrights, APPLICATION2.copyrights);

                        application2 = application;

                        callback();
                    }
                );
            },
        // Get all applications
            (callback) => {
                this._client.getApplications(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, applications) => {
                        assert.isNull(err);

                        assert.isObject(applications);
                        assert.isTrue(applications.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the application
            (callback) => {
                application1.name.en = 'Updated Name 1';

                this._client.updateApplication(
                    null,
                    application1,
                    (err, application) => {
                        assert.isNull(err);

                        assert.isObject(application);
                        assert.equal(application.name.en, 'Updated Name 1');
                        assert.equal(application.id, APPLICATION1.id);

                        application1 = application;

                        callback();
                    }
                );
            },
        // Delete application
            (callback) => {
                this._client.deleteApplicationById(
                    null,
                    application1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete application
            (callback) => {
                this._client.getApplicationById(
                    null,
                    application1.id,
                    (err, application) => {
                        assert.isNull(err);
                        
                        assert.isNull(application || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
