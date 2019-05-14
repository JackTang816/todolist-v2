import React from "react";
import { Form, Input, Button, DatePicker, InputNumber } from 'antd';

import axios from 'axios'


class Update extends React.Component {

  handlePut=(data)=>{
    axios.put(`http://127.0.0.1:8000/api/${this.props.location.state.id}/update/`,
        {'title':data.title, 
        'expire':data.expire, 
        'priority':data.priority, 
        'done':'Ongoing'
      }).then((response)=>{
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      }
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    let data = {
      'title' : event.target.elements.title.value,
      'expire' : event.target.elements.expire.value===''?null:event.target.elements.expire.value,
      'priority' : event.target.elements.priority.value===''?null:event.target.elements.priority.value,
      'done' : event.target.elements.done.value,
    }
    this.handlePut(data)
    this.props.history.goBack()

}

  render() {
    return (
      <div>
        <h2>Update a thing to do</h2>
        <Form onSubmit={ this.handleSubmit } style={{width:500}}>
          <Form.Item label="todoTitle" >
            <Input name='title' placeholder="input things to do" />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker name='expire' style={{width:500}}/>
          </Form.Item>
          <Form.Item label="input the priority">
            <InputNumber min={0} max={5} name='priority' placeholder="input the priority" style={{width:500}}/>
          </Form.Item>
          <Form.Item label="input the completion condition">
            <Input name='done' placeholder="input the completion condition" />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType='submit'>Update</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Update
