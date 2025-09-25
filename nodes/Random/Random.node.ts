import type {
    IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription
} from 'n8n-workflow';
// import { NodeConnectionType, NodeOperationError } from 'n8n-workflow';

export class Random implements INodeType {
    description: INodeTypeDescription = {
		displayName: 'Random',
        name: 'Random',
        icon: 'file:random.svg',
        group: ['transform'],
        version: 1,
        description: 'Consume RANDOM.ORG API to generate a random integer between two values.',
        defaults: {
            name: 'Random',
        },
        inputs: ['main'],
        outputs: ['main'],
	    properties: [
            {
                displayName: 'Valor Mínimo',
                name: 'min',
                type: 'number',
                required: true,
                typeOptions: {
                    maxValue: 999999999,
                    minValue: -1000000000,
                    numberPrecision: 0,
                },
                default: 1,
                description: 'Valor mínimo que pode ser gerado.',
                hint: 'Mínimo: -1000000000'
            },
            {
                displayName: 'Valor Máximo',
                name: 'max',
                type: 'number',
                required: true,
                typeOptions: {
                    maxValue: 1000000000,
                    minValue: -999999999,
                    numberPrecision: 0,
                },
                default: 10,
                description: 'Valor máximo que pode ser gerado.',
                hint: 'Máximo: 1000000000'
            }
	    ],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const responseData: IDataObject[] = [];
        const min = this.getNodeParameter('min', 0) as number;
        const max = this.getNodeParameter('max', 0) as number;
        const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

        const response = await this.helpers.httpRequest({
                method: 'GET',
                url,
                json: false
            });

        responseData.push({ random: response });
        return [this.helpers.returnJsonArray(responseData)];
    }
}
