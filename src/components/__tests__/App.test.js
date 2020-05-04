import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommnetBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommnetBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});