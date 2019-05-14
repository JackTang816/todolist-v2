import React from 'react'
import { Link } from 'react-router-dom'

import {
  Layout, Menu, Icon,
} from 'antd';
import './Layout.css'

const {
  Header, Content, Footer, Sider,
} = Layout;
  
 const TodoLayout=(props)=>{
     return (
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px', fontSize:40}}
        >
          <Menu.Item key="1">
          <Icon type='check' style={{fontSize: 40}} />
          <span><Link to='/' style={{color:'#fff'}}>Todo List</Link></span>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' , height:800}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <Menu.Item key="1">
                <Icon type="form" />
                <span><Link to='/'>All Todos</Link></span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="calendar" />
                <span><Link to='/today/'>Today</Link></span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="plus-circle" />
                <span><Link to='/add'>Add a new todo</Link></span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            { props.children }
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        
      </Footer>
    </Layout>
     )
 }

 export default TodoLayout