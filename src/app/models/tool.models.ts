import { OperativeSystems } from  './operative-systems.models'

export class Tool {
    public id:number;
    public name:string;
    public description :string;
    public usageRestrictions : string;
    public urlSite :string;
    public urlDownload: string;
    public licenseType :string;
    public version: string;    
    public state : string;
    public integrationLms: string;
    public systems : OperativeSystems[] = [];

    constructor(){}
}
