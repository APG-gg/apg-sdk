import React from 'react';
import Icon from '@ant-design/icons';

const HamburgerSvg = () => (
  <svg id="a" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M3,6v-2c0-.5523,.4477-1,1-1H20c.5523,0,1,.4477,1,1v2c0,.5522-.4477,1-1,1H4c-.5523,0-1-.4478-1-1Zm1,8H20c.5523,0,1-.4478,1-1v-2c0-.5523-.4477-1-1-1H4c-.5523,0-1,.4477-1,1v2c0,.5522,.4477,1,1,1Zm0,7H20c.5523,0,1-.4478,1-1v-2c0-.5523-.4477-1-1-1H4c-.5523,0-1,.4477-1,1v2c0,.5522,.4477,1,1,1Z"/></svg>
);

export default (props: any) => <Icon component={HamburgerSvg} {...props} />;