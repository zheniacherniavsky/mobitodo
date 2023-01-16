/* eslint-disable react/react-in-jsx-scope */
const { default: TodoList } = require('.');
import { shallow } from 'enzyme';

jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: '',
}));

const mockTodos = [
  {
    id: 0,
    shortName: 'test1',
    description: 'test1',
    xp: 10,
    createdAt: new Date(),
  },
  {
    id: 1,
    shortName: 'test2',
    description: 'test2',
    xp: 10,
    createdAt: new Date(),
  },
];

describe('<TodoList/> testing', () => {
  it('should render without issues', () => {
    const component = shallow(<TodoList />);
    expect(component.length).toBe(1);
  });

  it('should render all items in todos', () => {
    const wrapper = shallow(<TodoList todos={mockTodos} />);

    expect(wrapper.find({ testId: 'todo_test' }).length).toBe(mockTodos.length);
  });
});
