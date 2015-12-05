/**
 * Created by ben on 12/2/15.
 */
import {inject, bindable, LogManager, BindingEngine} from 'aurelia-framework';

@inject(BindingEngine)
@bindable('data')
export class Grid{
    constructor(bindingEngine){
        this._bindingEngine = bindingEngine;
        this.columnDefinitions = [];
        this.rows = [];
    }

    bind(bindingContext){

    }

    addColumnDefinition(columnDefinition){
        this.columnDefinitions.push(columnDefinition);
    }

    attached(){

    }
}