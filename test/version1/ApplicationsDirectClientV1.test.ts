let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ApplicationsMemoryPersistence } from 'pip-services-Applications-node';
import { ApplicationsController } from 'pip-services-Applications-node';
import { IApplicationsClientV1 } from '../../src/version1/IApplicationsClientV1';
import { ApplicationsDirectClientV1 } from '../../src/version1/ApplicationsDirectClientV1';
import { ApplicationsClientFixtureV1 } from './ApplicationsClientFixtureV1';

suite('ApplicationsDirectClientV1', ()=> {
    let client: ApplicationsDirectClientV1;
    let fixture: ApplicationsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ApplicationsMemoryPersistence();
        let controller = new ApplicationsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-applications', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-applications', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new ApplicationsDirectClientV1();
        client.setReferences(references);

        fixture = new ApplicationsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
