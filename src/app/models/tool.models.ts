import { OperativeSystems } from  './operative-systems.models'

export class Tool {
    public id:number;
    public name:string;
    public description :string;
    public usage_restrictions : string;
    public url_site :string;
    public url_download: string;
    public license_type :string;
    public version: string;    
    public state : string;
    public integration_lms: string;
    public systems : OperativeSystems[] = [];
    public key_words : string;

    constructor(){}
}
