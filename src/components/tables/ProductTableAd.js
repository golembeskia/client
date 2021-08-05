import React, { useState } from "react";
import { Table } from 'antd';
import reqwest from 'reqwest';

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: true,
    // render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    // filters: [
    //   { text: 'Male', value: 'male' },
    //   { text: 'Female', value: 'female' },
    // ],
    width: '20%',
  },
  {
    title: 'Protein',
    dataIndex: 'protein',
  },
];

const products = params => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

class App extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      // url: ('mongodb://localhost:27017/ecom-udemy',{useNewUrlParser: true}),
      url: 'http://localhost:8000/api/products/I',
      method: 'get',
      type: 'json',
      data: products(params),
    }).then(data => {
      console.log(data);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200,
          // 200 is mock data, you should read it from server
          // total: data.totalCount,
        },
      });
    });
  };

  render() {
    const { data, pagination, loading } = this.state;
    return (
      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default App