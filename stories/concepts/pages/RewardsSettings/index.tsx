/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import { Grid, Column } from '../../../../components/gridSystem'
import Box from '../../../../components/rewards/box'

// Assets
import locale from './fakeLocale'
import '../../../assets/fonts/muli.css'
import '../../../assets/fonts/poppins.css'
import List from '../../../../components/rewards/list';
import Tokens from '../../../../components/rewards/tokens';
import Select from '../../../../components/rewards/select';
import Checkbox from '../../../../components/rewards/checkbox';
import DisabledContent from '../../../../components/rewards/disabledContent';
import MainToggle from '../../../../components/rewards/mainToggle';
import Panel from '../../../../components/rewards/panel';
import ContributeTable, { DetailRow as ContributeDetailRow } from '../../../../components/rewards/contributeTable';
import { boolean } from '@storybook/addon-knobs';
import Alert from '../../../../components/rewards/alert';
import DonationTable, { DetailRow as DonationDetailRow } from '../../../../components/rewards/donationTable';
import ModalContribute from '../../../../components/rewards/modalContribute';
import ModalBackupRestore, { TabsType } from '../../../../components/rewards/modalBackupRestore';

// Images
const donateImg = require('../../../assets/img/rewards_donate.svg')
const adsImg = require('../../../assets/img/rewards_ads.svg')
const contributeImg = require('../../../assets/img/rewards_contribute.svg')
const wallet = require('../../../assets/img/rewards_wallet.svg')
const activity = require('../../../assets/img/rewards_activity.svg')
const funds = require('../../../assets/img/rewards_funds.svg')
const gear = require('../../../assets/img/rewards_gear.svg')
const bartBaker = require('../../../assets/img/bartBaker.jpeg')
const ddgo = require('../../../assets/img/ddgo.jpg')
const wiki = require('../../../assets/img/wiki.jpg')
const buzz = require('../../../assets/img/buzz.jpg')
const guardian = require('../../../assets/img/guardian.jpg')
const eich = require('../../../assets/img/eich.jpg')

interface State {
  adsToggle: boolean
  contributeToggle: boolean
  mainToggle: boolean
  modalContribute: boolean
  modalBackup: boolean
  modalBackupActive: TabsType
}

class Settings extends React.PureComponent<{}, State> {
  constructor (props: {}) {
    super(props)
    this.state = {
      adsToggle: false,
      contributeToggle: true,
      mainToggle: true,
      modalContribute: false,
      modalBackup: false,
      modalBackupActive: 'backup'
    }
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
        contribute: {
          attention: 40,
          tokens: 4,
          converted: 5
        },
        onRemove: () => {}
      },
      {
        profile: {
          name: 'duckduckgo.com',
          verified: true,
          src: ddgo
        },
        contribute: {
          attention: 20,
          tokens: 2,
          converted: 1
        },
        onRemove: () => {
        }
      },
      {
        profile: {
          name: 'buzzfeed.com',
          verified: false,
          src: buzz
        },
        contribute: {
          attention: 10,
          tokens: 1,
          converted: 0.5
        },
        onRemove: () => {}
      },
      {
        profile: {
          name: 'theguardian.com',
          verified: true,
          src: guardian
        },
        contribute: {
          attention: 5,
          tokens: 0.5,
          converted: 0.25
        },
        onRemove: () => {}
      },
      {
        profile: {
          name: 'wikipedia.org',
          verified: false,
          src: wiki
        },
        contribute: {
          attention: 4,
          tokens: 0.4,
          converted: 0.25
        },
        onRemove: () => {}
      }
    ]
  }

  get donationRows (): DonationDetailRow[] {
    return [
      {
        profile: {
          name: 'Bart Baker',
          verified: true,
          provider: 'youtube',
          src: bartBaker
        },
        type: 'recurring',
        contribute: {
          tokens: 2,
          converted: 0.2
        },
        onRemove: () => {}
      },
      {
        profile: {
          verified: false,
          name: 'theguardian.com',
          src: guardian
        },
        type: 'donation',
        contribute: {
          tokens: 12,
          converted: 6.2
        },
        text: 'May 7',
      },
      {
        profile: {
          verified: false,
          name: 'BrendanEich',
          provider: 'twitter',
          src: eich
        },
        type: 'tip',
        contribute: {
          tokens: 7,
          converted: 3.2
        },
        text: 'May 2',
      }
    ]
  }

  adsSettingsChild = () => {
    return <>
      <Grid columns={1} theme={{maxWidth: '270px', margin: '0 auto'}}>
          <Column size={1} theme={{justifyContent: 'center', flexWrap: 'wrap'}}>
            <Select title={locale.adsMode}>
              <div data-value='1'>Notifications</div>
              <div data-value='2'>Page</div>
              <div data-value='3'>Sounds</div>
            </Select>
            <Select title={locale.adsFreq}>
                <div data-value='10'>10 ads daily (10 tokens/month)</div>
                <div data-value='5'>5 ads daily (5 tokens/month)</div>
                <div data-value='1'>1 ads daily (1 token/month)</div>
            </Select>
            <Select title={locale.adsMode}>
              <div data-value='1'>Notifications</div>
              <div data-value='2'>Page</div>
              <div data-value='3'>Sounds</div>
            </Select>
            <Select title={locale.adsFreq}>
              <div data-value='10'>10 ads daily (10 tokens/month)</div>
              <div data-value='5'>5 ads daily (5 tokens/month)</div>
              <div data-value='1'>1 ads daily (1 token/month)</div>
            </Select>
            <Select title={locale.adsMode}>
              <div data-value='1'>Notifications</div>
              <div data-value='2'>Page</div>
              <div data-value='3'>Sounds</div>
            </Select>
            <Select title={locale.adsFreq}>
              <div data-value='10'>10 ads daily (10 tokens/month)</div>
              <div data-value='5'>5 ads daily (5 tokens/month)</div>
              <div data-value='1'>1 ads daily (1 token/month)</div>
            </Select>
          </Column>
        </Grid>
    </>
  }

  adsDisabled () {
    return <DisabledContent
      image={adsImg}
      theme={{color: '#ceb4e1', boldColor: '#b490cf'}}
    >
      • Earnings paid every month. <br/>
      • Set your <b>desired frequency</b> for ads  based on the desired earning.
    </DisabledContent>
  }

  contributeSettingsChild = () => {
    return <>
      <Grid columns={1} theme={{maxWidth: '270px', margin: '0 auto'}}>
          <Column size={1} theme={{justifyContent: 'center', flexWrap: 'wrap'}}>
            <Select title={locale.contributionMonthly}>
              <div data-value='10'><Tokens value={10} converted={'4'}/></div>
              <div data-value='20'><Tokens value={20} converted={'6'}/></div>
              <div data-value='40'><Tokens value={40} converted={'12'}/></div>
              <div data-value='100'><Tokens value={100} converted={'40'}/></div>
            </Select>
             <Select title={locale.contributionSitesLimit}>
              <div data-value='0'>{locale.contributionSitesNoLimit}</div>
              <div data-value='10'>{locale.contributionSitesLimit10}</div>
              <div data-value='50'>{locale.contributionSitesLimit50}</div>
            </Select>
          </Column>
        </Grid>
    </>
  }

  contributeDisabled () {
    return <DisabledContent
      image={contributeImg}
      theme={{color: '#ce9ccf', boldColor: '#c16fc2'}}
    >
      • Pay directly for the content you love. <br/>
      • Your <b>monthly allowance</b> gets divided based on your attention metric.
    </DisabledContent>
  }

  donationSettingsChild = () => {
    return <>
      <Grid columns={1} theme={{maxWidth: '270px', margin: '0 auto'}}>
          <Column size={1} theme={{justifyContent: 'center', flexWrap: 'wrap'}}>
            <Checkbox
              title={'Enable ability to give tips on ‘Like’ posts'}
              value={{'yt': true, 'tw': false, 'inst': false}}
              multiple
            >
              <div data-key='yt'>YouTube</div>
              <div data-key='tw'>Twitter</div>
              <div data-key='inst'>Instagram</div>
            </Checkbox>
          </Column>
        </Grid>
    </>
  }

  donationDisabled () {
    return <DisabledContent
      image={donateImg}
      theme={{color: '#AC9CCF', boldColor: '#696fdc'}}
    >
      • Donate on the spot as you find gems. <br/>
      • <b>Enable Tips </b> on Twitter, YouTube, and more, to give tips to posts you ‘Like’.
    </DisabledContent>
  }

  render () {
    const showNotification = boolean('Show notification', false)
    const self = this

    return (
      <div style={{maxWidth: '1000px', margin: '50px auto'}}>
        <Grid columns={3} theme={{gridGap: '32px'}}>
          <Column size={2} theme={{justifyContent: 'center', flexWrap: 'wrap'}}>
            <MainToggle
              onToggle={() => {this.setState({mainToggle: !this.state.mainToggle})}}
              enabled={this.state.mainToggle}
            />
            <Box
              title={locale.adsTitle}
              theme={{titleColor: '#9752cb'}}
              description={locale.adsDesc}
              toggle
              checked={this.state.adsToggle}
              settingsChild={this.adsSettingsChild()}
              disabledContent={this.adsDisabled()}
              onToggle={() => {this.setState({adsToggle: !this.state.adsToggle})}}
            >
              <List title={locale.adsEarnings}>
                <Tokens value={10} converted={4} />
              </List>
              <List title={locale.adsDisplayed}>
                <Tokens value={17} hideText/>
              </List>
            </Box>
            <Box
              title={locale.contributionTitle}
              theme={{titleColor: '#9f22a1'}}
              description={locale.contributionDesc}
              toggle
              checked={this.state.contributeToggle}
              settingsChild={this.contributeSettingsChild()}
              disabledContent={this.contributeDisabled()}
              onToggle={() => {this.setState({contributeToggle: !this.state.contributeToggle})}}
            >
              {
                this.state.modalContribute
                ? <ModalContribute
                    rows={this.contributeRows}
                    onClose={() => self.setState({modalContribute: false})}
                  />
                : null
              }
              <List title={locale.contributionMonthly}>
                <Tokens value={15} converted={6} />
              </List>
              <List title={locale.contributionSites}>
                <Tokens value={55} hideText/>
              </List>
              <ContributeTable
                header={[
                  'Site visited',
                  'Attentions',
                  'Tokens'
                ]}
                rows={this.contributeRows}
                allSites={false}
                numSites={55}
                onShowAll={() => self.setState({modalContribute: true})}
              >
                Please visit some sites
              </ContributeTable>
            </Box>
            <Box
              title={locale.donationTitle}
              theme={{titleColor: '#4c54d2'}}
              description={locale.donationDesc}
              settingsChild={this.donationSettingsChild()}
              disabledContent={this.donationDisabled()}
            >
              <List title={locale.donationTotal}>
                <Tokens value={21} converted={7} />
              </List>
              <List title={locale.donationList}>
                <Tokens value={3} hideText/>
              </List>
              <DonationTable
                rows={this.donationRows}
                allItems
              >
                Please visit some sites
              </DonationTable>
            </Box>
          </Column>
          <Column size={1}>
            {
                this.state.modalBackup
                ? <ModalBackupRestore
                  activeTabId={this.state.modalBackupActive}
                  recoveryKey={'crouch  hint  glow  recall  round  angry  weasel  luggage save  hood  census  near  still   power  vague  balcony camp  law  now  certain  wagon  affair  butter  choice '}
                  onTabChange={(tabId: TabsType) => self.setState({ modalBackupActive: tabId })}
                  onClose={() => self.setState({modalBackup: false})}
                  onCopy={() => {}}
                  onPrint={() => {}}
                  onSaveFile={() => {}}
                  onRestore={() => {}}
                  onImport={() => {}}
                  />
                : null
              }
            <Panel
              title={'Your Wallet'}
              balanceTitle={'balance'}
              tokens={25}
              actions={[
                {
                  name: 'Add funds',
                  action: () => {},
                  icon: wallet
                },
                {
                  name: 'Withdraw Funds',
                  action: () => {},
                  icon: funds
                },
                {
                  name: 'Wallet Activity',
                  action: () => {},
                  icon: activity
                },
                {
                  name: 'Backup & Restore',
                  action: () => self.setState({modalBackup: true}),
                  icon: gear
                }
              ]}
              showCopy
            >
              {
                showNotification
                ? <Alert type={'error'} theme={{position: 'absolute'}}>
                    <b>Funds received!</b> 25 tokens are added to your wallet successfully.
                </Alert>
                : null
              }
             Some content
            </Panel>
          </Column>
        </Grid>
      </div>
    )
  }
}

export default Settings
