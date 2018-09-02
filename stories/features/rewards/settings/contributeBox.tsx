/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import {
  Box,
  DisabledContent,
  List,
  ModalContribute,
  TableContribute,
  Tokens
} from '../../../../src/features/rewards'
import { Column, Grid, Select, ControlWrapper } from '../../../../src/components'
import { DetailRow as ContributeDetailRow } from '../../../../src/features/rewards/tableContribute'
import ModalRestore, { DetailRow as RestoreDetailRow } from '../../../../src/features/rewards/modalRestore'

// Utils
import locale from './fakeLocale'
import NextContribution from '../../../../src/features/rewards/nextContribution'

// Assets
const bartBaker = require('../../../assets/img/bartBaker.jpeg')
const buzz = require('../../../assets/img/buzz.jpg')
const contributeImg = require('../../../assets/img/rewards_contribute.svg')
const ddgo = require('../../../assets/img/ddgo.jpg')
const guardian = require('../../../assets/img/guardian.jpg')
const wiki = require('../../../assets/img/wiki.jpg')

const doNothing = () => {
  console.log('nothing')
}

interface State {
  contributeToggle: boolean
  modalContribute: boolean
  modalRestore: boolean
}

class ContributeBox extends React.Component<{}, State> {
  constructor (props: {}) {
    super(props)
    this.state = {
      contributeToggle: true,
      modalContribute: false,
      modalRestore: false
    }
  }

  contributeSettingsChild = () => {
    return (
      <>
        <Grid columns={1} customStyle={{ maxWidth: '270px', margin: '0 auto' }}>
            <Column size={1} customStyle={{ justifyContent: 'center', flexWrap: 'wrap' }}>
              <ControlWrapper text={locale.contributionMonthly}>
                <Select>
                  <div data-value='10'><Tokens value={10} converted={4}/></div>
                  <div data-value='20'><Tokens value={20} converted={6}/></div>
                  <div data-value='40'><Tokens value={40} converted={12}/></div>
                  <div data-value='100'><Tokens value={100} converted={40}/></div>
                </Select>
              </ControlWrapper>
              <ControlWrapper text={locale.contributionSitesLimit}>
                <Select>
                  <div data-value='0'>{locale.contributionSitesNoLimit}</div>
                  <div data-value='10'>{locale.contributionSitesLimit10}</div>
                  <div data-value='50'>{locale.contributionSitesLimit50}</div>
                </Select>
              </ControlWrapper>
            </Column>
          </Grid>
      </>
    )
  }

  get contributeRows (): ContributeDetailRow[] {
    return [
      {
        profile: {
          name: 'Bart Baker',
          verified: true,
          provider: 'youtube',
          src: bartBaker
        },
        url: 'https://brave.com',
        attention: 40,
        onRemove: doNothing
      },
      {
        profile: {
          name: 'duckduckgo.com',
          verified: true,
          src: ddgo
        },
        url: 'https://brave.com',
        attention: 20,
        onRemove: doNothing
      },
      {
        profile: {
          name: 'buzzfeed.com',
          verified: false,
          src: buzz
        },
        url: 'https://brave.com',
        attention: 10,
        onRemove: doNothing
      },
      {
        profile: {
          name: 'theguardian.com',
          verified: true,
          src: guardian
        },
        url: 'https://brave.com',
        attention: 5,
        onRemove: doNothing
      },
      {
        profile: {
          name: 'wikipedia.org',
          verified: false,
          src: wiki
        },
        url: 'https://brave.com',
        attention: 4,
        onRemove: doNothing
      }
    ]
  }

  get restoreRows (): RestoreDetailRow[] {
    return [
      {
        profile: {
          name: 'Bart Baker',
          verified: true,
          provider: 'youtube',
          src: bartBaker
        },
        url: 'https://brave.com',
        onRestore: doNothing
      },
      {
        profile: {
          name: 'duckduckgo.com',
          verified: true,
          src: ddgo
        },
        url: 'https://brave.com',
        onRestore: doNothing
      },
      {
        profile: {
          name: 'buzzfeed.com',
          verified: false,
          src: buzz
        },
        url: 'https://brave.com',
        onRestore: doNothing
      },
      {
        profile: {
          name: 'theguardian.com',
          verified: true,
          src: guardian
        },
        url: 'https://brave.com',
        onRestore: doNothing
      },
      {
        profile: {
          name: 'wikipedia.org',
          verified: false,
          src: wiki
        },
        url: 'https://brave.com',
        onRestore: doNothing
      }
    ]
  }

  contributeDisabled () {
    return (
      <DisabledContent
        image={contributeImg}
        type={'contribute'}
      >
        • Pay directly for the content you love. <br/>
        • Your <b>monthly allowance</b> gets divided based on your attention metric.
      </DisabledContent>
    )
  }

  onContributeToggle = () => {
    this.setState({ contributeToggle: !this.state.contributeToggle })
  }

  onContributeModalToggle = () => {
    this.setState({ modalContribute: !this.state.modalContribute })
  }

  onRestoreModalToggle = () => {
    this.setState({ modalRestore: !this.state.modalRestore })
  }

  render () {
    return (
      <Box
        title={locale.contributionTitle}
        type={'contribute'}
        description={locale.contributionDesc}
        toggle={true}
        checked={this.state.contributeToggle}
        settingsChild={this.contributeSettingsChild()}
        disabledContent={this.contributeDisabled()}
        onToggle={this.onContributeToggle}
      >
        {
          this.state.modalContribute
            ? <ModalContribute
              rows={this.contributeRows}
              onClose={this.onContributeModalToggle.bind(self)}
            />
            : null
        }
        {
          this.state.modalRestore
            ? <ModalRestore
              rows={this.restoreRows}
              onClose={this.onRestoreModalToggle.bind(self)}
              onRestoreAll={doNothing}
            />
            : null
        }
        <List title={locale.contributionMonthly}>
          <Select floating={true}>
            <div data-value='10'><Tokens value={10} converted={4}/></div>
            <div data-value='20'><Tokens value={20} converted={6}/></div>
            <div data-value='40'><Tokens value={40} converted={12}/></div>
            <div data-value='100'><Tokens value={100} converted={40}/></div>
          </Select>
        </List>
        <List
          title={locale.contributionNextDate}
        >
          <NextContribution>July 25th</NextContribution>
        </List>
        <List title={locale.contributionSites}>
          Total &nbsp;<Tokens value={55} hideText={true} toFixed={false}/>
        </List>
        <TableContribute
          header={[
            'Site',
            'Attention'
          ]}
          rows={this.contributeRows}
          allSites={false}
          numSites={55}
          onShowAll={this.onContributeModalToggle.bind(self)}
          onShowRestore={this.onRestoreModalToggle.bind(self)}
          headerColor={true}
          deletedPublishers={true}
        >
          Please visit some sites
        </TableContribute>
      </Box>
    )
  }
}

export default ContributeBox
