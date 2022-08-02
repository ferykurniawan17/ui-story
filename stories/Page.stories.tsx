import React from 'react'
import { Page } from '../components/Page'
import * as HeaderStories from './Header.stories'

export default {
  title: 'Example/Page',
  component: Page,
} as any;

const Template: any = (args: any) => <Page {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
