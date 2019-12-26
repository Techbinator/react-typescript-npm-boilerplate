import * as React from 'react';
import Hello from '..';
import * as TestRenderer from 'react-test-renderer';

describe('Component', () => {
  it("should show text 'Hello World' with className demo", () => {
    const component = TestRenderer.create(<Hello text="World" />);
    const testInstance = component.root;

    expect(testInstance.findByType(Hello).props.text).toBe('World');

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
