import * as React from 'react';
import sidePanelElement from './components/SidePanel/element';
import render from './components/render';
import Top from './components/TopPanel/Top';
import renderTop from './components/TopPanel/render';
import {loadPolyfills} from 'core-coderoad';
import {onActivate, onDeactivate} from './subscriptions';
import store from './store';
import {setupVerify} from './modules/setup';

class Main {
  root: HTMLElement;
  top: HTMLElement;
  constructor() {
    loadPolyfills();
    // run startup checks
    store.dispatch(setupVerify());
    this.root = sidePanelElement.init();
    this.top = Top.init();
  }
  activate(): void {
    // create atom panel
    atom.workspace.addRightPanel({
      item: this.root,
      priority: 0,
    });
    atom.workspace.addTopPanel({
      item: this.top,
      priority: 1100,
    });
    onActivate();
    // render React component
    render(this.root);
    renderTop(this.top);
  }
  deactivate(): void {
    // remove subscriptions & unmount react app
    onDeactivate();
  }
};
export = new Main();
