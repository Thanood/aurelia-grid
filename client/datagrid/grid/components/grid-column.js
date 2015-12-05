/**
 * Created by ben on 12/1/15.
 */
import {inject, bindable, containerless, BindingEngine} from 'aurelia-framework';

@inject(BindingEngine)
@containerless()
@bindable('model')
@bindable('template')
export class GridColumn {
    constructor(bindingEngine){

    }

    bind(bindingContext){

    }
}