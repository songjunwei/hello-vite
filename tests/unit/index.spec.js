import { sum } from '../../src/utils/index';
import {mount} from '@vue/test-utils';
import TestComponents from '../../src/components/TestComponents.vue';

test('test', () => {
    console.log(mount(TestComponents));
    expect(sum(1, 1)).toBe(2);
}); 