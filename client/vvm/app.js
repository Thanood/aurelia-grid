/**
 * Created by weagl on 11/19/2015.
 */
import {inject} from 'aurelia-dependency-injection';

export class App {
    constructor() {
        this.data = [
            {
                name: 'benjamin',
                age: 31,
                sex: 'M'
            },
            {
                name: 'joy',
                age: 30,
                sex: 'F'
            }
        ]
    }
}