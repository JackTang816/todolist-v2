import React, { Component } from 'react'

import axios from 'axios'

import { Table, Divider, Button, Popconfirm, Icon } from 'antd';
import { Link } from "react-router-dom"

import moment from 'moment'


const { Column } = Table
  
class Taday extends Component {
    constructor(props){
        super(props)
        this.state={
          data : []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then((res)=>{
                this.setState({
                    data:res.data.filter((a)=>(a.expire === moment().format('YYYY-MM-DD')))
                })
                console.log(this.state.data[0].expire, moment().format('YYYY-MM-DD'))
            })
            .catch((error)=>{
                console.log(error)
            })
    }
   
    render(){
      return (
        <div>
          <Table dataSource={ this.state.data } rowKey='id'>
            <Column title='Title' dataIndex='title' />
            <Column title='Priority' dataIndex='priority' sorter={(a,b)=>{return a.priority - b.priority}}/>
            <Column title='Expire' dataIndex='expire'/>

            <Column title='State' dataIndex='done' render={
              (text=>(text==='Ongoing'?
              <Button type='primary'><Icon type='arrow-right'/>{text}</Button>:
              <Button type='dashed'><Icon type='check'/>{text}</Button>))}
            />
           
            <Column
              title="Action"
              key="action"
              render=  { (record) => (
                <div>
                  <Link to={{ pathname:'/update/', state:record }}> <Button> <Icon type='edit'/>update </Button></Link>
                  <Divider type='vertical'/>
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
                    <Button type='danger'> <Icon type='close'/>delete </Button>
                  </Popconfirm>
                </div>
              )}
            />
          </Table>
          <br/>
        </div>
      )
    }

    handleDelete=(id)=>{
      axios.delete(`http://127.0.0.1:8000/api/${id}/delete/`)
      .then(res=>{
        return console.log(res)
      })
      const dataSource = [...this.state.data];
      dataSource.splice(dataSource.findIndex(item=>item.id===id), 1)
      console.log(dataSource)
      this.setState({ data : dataSource})
    }
      
}
            
export default Taday