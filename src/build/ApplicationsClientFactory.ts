import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';

import { ApplicationsDirectClientV1 } from '../version1/ApplicationsDirectClientV1';
import { ApplicationsHttpClientV1 } from '../version1/ApplicationsHttpClientV1';
import { ApplicationsSenecaClientV1 } from '../version1/ApplicationsSenecaClientV1';
import { ApplicationsLambdaClientV1 } from '../version1/ApplicationsLambdaClientV1';

export class ApplicationsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-applications', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-applications', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-applications', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-applications', 'client', 'seneca', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('pip-services-applications', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ApplicationsClientFactory.DirectClientV1Descriptor, ApplicationsDirectClientV1);
		this.registerAsType(ApplicationsClientFactory.HttpClientV1Descriptor, ApplicationsHttpClientV1);
		this.registerAsType(ApplicationsClientFactory.SenecaClientV1Descriptor, ApplicationsSenecaClientV1);
		this.registerAsType(ApplicationsClientFactory.LambdaClientV1Descriptor, ApplicationsLambdaClientV1);
	}
	
}
