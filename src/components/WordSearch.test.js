import WordSearch from './WordSearch'
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});


test('renders with default values', () => {
  const component = renderer.create(
    <WordSearch />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('correctly renders initial value', () => {
  let component = null
  component = mount(<WordSearch />);
  console.log(component.text());
  expect(component.text()).toMatch(/0 karakters/)

  component = mount(<WordSearch initialValue={'x'} />);
  expect(component.text()).toMatch(/1 karakter/)
  expect(component.text()).not.toMatch(/1 karakters/)

  component = mount(<WordSearch initialValue={'xyz'} />);
  expect(component.text()).toMatch(/3 karakters/)
});
