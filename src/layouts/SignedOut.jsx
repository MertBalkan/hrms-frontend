import React from "react";

import { Menu, Button, Icon } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Icon name="sign in"></Icon>
        <Button onClick = {signIn} primary>Sign in</Button>
        
        <Button primary style={{marginLeft:'0.5em'}}>Sign up</Button>
      </Menu.Item>
    </div>
  );
}
