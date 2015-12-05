/**
 * Created by ben on 12/1/15.
 */
import configuration from './grid/configuration';

export function configure(aurelia, config) {
    aurelia.globalResources(
        './grid/grid',
        './grid/column-definition',
        './grid/components/grid-column',
        './grid/components/grid-row');

    if (typeof(config) === 'function') {
        config(configuration);
    }
}