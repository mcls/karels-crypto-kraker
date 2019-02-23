import WordSearch from './WordSearch'
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});


test('renders with default values', () => {
  const component = renderer.create(
    <WordSearch />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders results on change', () => {
  const component = shallow(<WordSearch />);
  expect(component.text().includes('0 karakter(s)')).toBeTruthy();
});
