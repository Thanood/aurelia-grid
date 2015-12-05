/**
 * Created by ben on 12/2/15.
 */
import {inject, bindable, noView, customElement, Container} from 'aurelia-framework';

@noView()
@customElement('column-definition')
@inject(Container)
@bindable('heading')
@bindable('property')
@bindable('sortable')
@bindable('filterable')
export class ColumnDefinition {
    constructor(container){
        this._parent = container.parent.viewModel;
        this._parent.addColumnDefinition(this);
    }
}