import React, { Component } from 'react'

import axios from 'axios'

import { Table, Divider, Button, Popconfirm, Icon } from 'antd';
import { Link } from "react-router-dom"


const { Column } = Table
  
class TodoLists extends Component {
    constructor(props){
        super(props)
        this.state={
          data : []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
            .then((res)=>{
                console.log(res.status)
                this.setState({
                    data:res.data
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
   
    render(){
      return (
        <div>
          <Table dataSource={ this.state.data } rowKey='id' onRow={record => {
              return {
                onDoubleClick: event=>{                 
                const dataSource = [...this.state.data];
                let index = dataSource.findIndex(item=>item.id===record.id)
                dataSource[index].done = dataSource[index].done==='Complete'?'Ongoing':'Complete'
                this.setState({data:dataSource})
                axios.put(`http://127.0.0.1:8000/api/${record.id}/update/`, 
                  {'title':this.state.data[index].title, 
                  'expire':this.state.data[index].expire, 
                  'priority':this.state.data[index].priority, 
                  'done':this.state.data[index].done
                  })
                  .then(res=>{
                    return console.log(res)
                  })
                  .catch(err=>{
                    return console.log(err)
                  })
                }, 
              }
            }}
          >
            <Column title='Title' dataIndex='title' />
            <Column title='Priority' dataIndex='priority' sorter={(a,b)=>{return a.priority - b.priority}}/>
            <Column title='Expire' dataIndex='expire'  sorter={(a,b)=>{return a.priority - b.priority}}/>

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
            
export default TodoLists