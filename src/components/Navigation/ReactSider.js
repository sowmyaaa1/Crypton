import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { iconStyle } from '../../styles'
import {
  AlertOutlined,
  DollarOutlined,
  BankOutlined,
  GlobalOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'

const { Sider } = Layout
const { SubMenu } = Menu

class ReactSider extends Component {
  render () {
    return (
      <React.Fragment>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width={240}
          style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[this.props.sider_selected]}
            defaultOpenKeys={['menu-exchange-rates', 'menu-updates', 'menu-coins', 'menu-events', 'menu-global', 'menu-exchanges']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {/* Status updates */}
            <Menu.Item key="trending-coins"><Link to='/trending-coins'>Trending coins</Link></Menu.Item>
            {/* Coin Sub Menu */}
            <Menu.Item key="coin-list"><Link to='/coins'>Coin Listing</Link></Menu.Item>

            {/* Exchanges Menu */}
            <Menu.Item key="exchanges-list"><Link to='/exchanges/list'>Exchanges Listing</Link></Menu.Item>

            {/* Exchange Rates Menu */}
            <Menu.Item key="exchange-rates-list"><Link to='/exchange-rates'>Exchange Rates Listing</Link></Menu.Item>

            {/* Global Sub Menu */}
            <Menu.Item key="global-main"><Link to='/global'>Data</Link></Menu.Item>

          </Menu>
        </Sider>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sider_selected: state.sider_selected
  }
}

export default connect(mapStateToProps)(ReactSider)
