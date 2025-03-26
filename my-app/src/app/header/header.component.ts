import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    imports: []
})
export class Header {

    private _companyName: string;
    private _imageUrl: string;

    constructor(){
        this._companyName = "NICE";
        this._imageUrl = 'assets/nice-logo-1.png'

        setTimeout(() => {
            this._imageUrl = 'assets/nice-logo-2.png'
        }, 7000);
    }

    public get imageUrl() {
        return this._imageUrl;
    }

    public get companyName(){
        return this._companyName;
    }

}