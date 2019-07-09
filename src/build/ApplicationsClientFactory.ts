import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { ApplicationsNullClientV1 } from '../version1/ApplicationsNullClientV1';
import { ApplicationsDirectClientV1 } from '../version1/ApplicationsDirectClientV1';
import { ApplicationsHttpClientV1 } from '../version1/ApplicationsHttpClientV1';
import { ApplicationsLambdaClientV1 } from '../version1/ApplicationsLambdaClientV1';

export class ApplicationsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-applications', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-applications', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-applications', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-applications', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-applications', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ApplicationsClientFactory.NullClientV1Descriptor, ApplicationsNullClientV1);
		this.registerAsType(ApplicationsClientFactory.DirectClientV1Descriptor, ApplicationsDirectClientV1);
		this.registerAsType(ApplicationsClientFactory.HttpClientV1Descriptor, ApplicationsHttpClientV1);
		this.registerAsType(ApplicationsClientFactory.LambdaClientV1Descriptor, ApplicationsLambdaClientV1);
	}
	
}
