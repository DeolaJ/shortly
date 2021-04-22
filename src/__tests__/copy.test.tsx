/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import ShortenedListItem from '../components/partials/shortened-list-item';

describe('Copy Link process', () => {
  let listItemComponent;

  beforeEach(() => {
    listItemComponent = mount(<ShortenedListItem original="https://aim.com" shortLink="https://shrtco.de/acJQQ1" />);
  });

  it('Shortened List item should render three child', () => {
    expect(listItemComponent.find('.list-item').at(0).props().children).toHaveLength(3);
  });

  it('Clicking copy button should trigger the copy operation', async () => {
    const copyButton = listItemComponent.find('.list-item button').at(0);
    document.execCommand = jest.fn();

    await act(async () => {
      copyButton.simulate('click');
    });

    expect(document.execCommand).toHaveBeenCalledWith('Copy');
  });

  // it('Clicking copy button multiple times should trigger copy process only once', () => {
  //   // test assertion
  // });

  afterEach(() => {
    listItemComponent.unmount();
  });
});
