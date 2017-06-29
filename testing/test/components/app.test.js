import React from 'react';
import App from '../../src/components/app';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';

describe('App test ', () => {

    let wrapper = mountComponent(App, {comments: ['comment']});

    test('shows a comment box', () => {
        expect(wrapper.find('.comment-box').length).toBe(1);
    });

    test('shows a comment list', () => {
        expect(wrapper.find('.comment-list').length).toBe(1);
    });
});

function mountComponent(ComponentClass, props) {
    const mockStore = configureStore([]);
    const store = mockStore(props);
    return mount(
        <Provider store={store}>
            <ComponentClass {...props} />
        </Provider>);
}
