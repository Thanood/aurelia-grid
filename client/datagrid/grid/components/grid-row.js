/**
 * Created by ben on 12/3/15.
 */
import {inject, bindable, containerless} from 'aurelia-framework';

@containerless()
@bindable('model')
@bindable('columns')
export class GridRow {
    constructor(){

    }
}