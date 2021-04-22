/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Shortener from '../components/sections/shortener';

describe('Copy Link process', () => {
  let shortenerSectionComponent;

  beforeEach(() => {
    shortenerSectionComponent = mount(<Shortener />);
  });

  it('Shortener section should render two children', () => {
    expect(shortenerSectionComponent.find('.shorten-wrapper > article').at(0).props().children).toHaveLength(2);
  });

  it('Clicking shorten button with empty url should trigger the appropriate error text', () => {
    const shortenButton = shortenerSectionComponent.find('.shorten-button').at(0);

    shortenButton.simulate('click');

    expect(shortenerSectionComponent.find('.error-text').at(0).text()).toEqual('Please add a link');
  });

  it('Clicking shorten button with invalid url should not appropriate the error text', () => {
    const shortenButton = shortenerSectionComponent.find('.shorten-button').at(0);
    const shortenInput = shortenerSectionComponent.find('.shorten-input').at(0);

    shortenInput.simulate('change', {
      target: { value: 'randomaddress' },
    });
    shortenButton.simulate('click');

    expect(shortenerSectionComponent.find('.error-text').at(0).text()).toEqual('Please enter a valid link');
  });

  it('Clicking shorten button with valid url should not change the error text', async () => {
    const shortenButton = shortenerSectionComponent.find('.shorten-button').at(0);
    const shortenInput = shortenerSectionComponent.find('.shorten-input').at(0);

    shortenInput.simulate('change', {
      target: { value: 'randomaddress' },
    });
    await act(async () => {
      shortenButton.simulate('click');
    });

    expect(shortenerSectionComponent.find('.error-text').at(0).exists()).not.toBeTruthy();
  });

  // it('Clicking shorten button with a url should trigger the shorten API', () => {
  //   // test assertion
  // });

  // it('Clicking shorten button multiple times on the same url should trigger the shorten API once', () => {
  //   // test assertion
  // });

  afterEach(() => {
    shortenerSectionComponent.unmount();
  });
});
