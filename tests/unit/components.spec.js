import TestComponents from '../../src/components/TestComponents.vue';
import { mount } from '@vue/test-utils';

test('components-test', () => {
  const wrapper = mount(TestComponents);
  expect(wrapper.html()).toContain('<span>TestComponents</span>');
});
