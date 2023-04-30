import React, { Component } from 'react'
import { Layout, Typography, Card, Row, Col } from 'antd'
import { contentStyle, colStyle } from '../../styles'
import svg1 from '../../images/flaticon/001-bitcoin.svg'
import svgExchangeRate from '../../images/flaticon/004-exchange.svg'
import svgChat from '../../images/flaticon/001-chat.svg'
import svgMobile from '../../images/flaticon/003-smartphone.svg'
import svgUpdate from '../../images/flaticon/005-idea.svg'
import svgWorldwide from '../../images/flaticon/worldwide.svg'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setHeaderMenuItem } from '../../redux_actions'

const { Content } = Layout
const { Meta } = Card
const { Title, Paragraph } = Typography


class ReactHome extends Component {
  componentDidMount () {
    this.props.setHeaderMenuItem('home')
  }

  render () {
    return (
      <Layout style={{ padding: '1rem' , textAlign:'center'}}>
        <Content style={contentStyle}>
          <Title level={6} textAlign="center" style={{  fontSize: "48px",
  fontWeight: "bold",
  color: 'black',
  textShadow: '2px 2px #ccc',
  textAlign:" center",
  }}>CRYPTON</Title>
          <Paragraph>
            Bringing you cryptocurrency related data in a user friendly,
            digestible dashboard platform.
          </Paragraph>
         
                    
          <Title level={3} style={{ padding: '1rem', textAlign:'left'}}>Features</Title>

          <Row gutter={16} style={{ textAlign: 'center' }} type="flex">
          <Col
                
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
                style={colStyle}
             >
             
                <Link to='/trending-coins'>
                 <Card
                  style={{ border: 'none' }}
                  cover={
                    <img
                      alt="Home page crypto svg"
                      style={{
                        padding: '2rem',
                        maxWidth: '160px',
                        margin: 'auto'
                      }}
                      src={svg1}
                    />
                  }
                > <h2>Trending Coins</h2>
                  <p>Statistics and charts are available in real-time.</p>
                </Card>
                </Link></Col>
                <Col
                
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
                style={colStyle}
             >
                <Link to='/coins'>
                 <Card
                  style={{ border: 'none' }}
                  cover={
                    <img
                      alt="Home page crypto svg"
                      style={{
                        padding: '2rem',
                        maxWidth: '160px',
                        margin: 'auto'
                      }}
                      src={svgUpdate}
                    />
                  }
                >
                  <h2>Coin  Listing</h2>
                  <p>This site aims to be mobile friendly. View website on any device you like.</p>
                </Card>
                </Link></Col>
                <Col
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
                style={colStyle}
             >
                <Link to='/exchanges/list'>
                 <Card
                  style={{ border: 'none' }}
                  cover={
                    <img
                      alt="Home page crypto svg"
                      style={{
                        padding: '2rem',
                        maxWidth: '160px',
                        margin: 'auto'
                      }}
                      src={svgMobile}
                    />
                  }
                >
                  <h2>Exchange Lists</h2>
                  <p>Exchange lists provides the exchange rates of various exchange platforms.</p>
                </Card>
                </Link></Col>
                <Col
                
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
                style={colStyle}
             >
                <Link to='/exchange-rates'>
                 <Card
                  style={{ border: 'none' }}
                  cover={
                    <img
                      alt="Home page crypto svg"
                      style={{
                        padding: '2rem',
                        maxWidth: '160px',
                        margin: 'auto'
                      }}
                      src={svgExchangeRate}
                    />
                  }
                >
                  <h2>Exchange Rates Listing</h2>
                  <p>Exchange Rates Listing provides the user with the current cryptocurrency value in terms of bitcoin.</p>
                </Card>
                </Link></Col>
                <Col
                
                xs={24}
                sm={24}
                md={8}
                lg={8}
                xl={8}
                style={colStyle}
             >
                <Link to='/global'>
                 <Card
                  style={{ border: 'none' }}
                  cover={
                    <img
                      alt="Home page crypto svg"
                      style={{
                        padding: '2rem',
                        maxWidth: '160px',
                        margin: 'auto'
                      }}
                      src={svgWorldwide}
                    />
                  }
                ><h2>Global Data</h2>
                  <p>'Data availability on a global scale'</p>
                </Card>
                </Link>
              </Col>
          </Row>
          </Content>
      </Layout>
    )
  }
}

const mapActionsToProps = {
  setHeaderMenuItem
}

export default connect(null, mapActionsToProps)(ReactHome)
