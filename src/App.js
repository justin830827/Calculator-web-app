import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Icon,
  Form,
  Segment,
  Grid,
} from 'semantic-ui-react';
import logo from './rdu.jpg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      price: '',
      discount: 1,
      shipping: 0,
      answer: 0,
    };
  }

  handleChange = (key) => (event, data) => {
    this.setState({ [key]: data.value });
  }

  handleSubmit = () => {
    const { price, discount, shipping } = this.state;
    const ntd = Math.ceil(((price * discount) * 1.0675 + shipping) * 32 + 150);

    this.setState({
      answer: ntd,
    });
  };

  render() {
    const productOptions = [
      { key: 'empty', value: 0, text: 'Select Project Type' },
      { key: 'Backpack', value: 15, text: 'Backpack' },
      { key: 'Cloth', value: 2, text: 'Cloth' },
      { key: 'Crossbag', value: 10, text: 'Crossbag' },
      { key: 'Crossbag', value: 1, text: 'Litte things' },
      { key: 'Shoes', value: 15, text: 'Shoes' },
      { key: 'Wallet', value: 5, text: 'Wallet' },
      { key: 'Wristles', value: 3, text: 'Wristles' },
    ];

    const discountOptions = [
      { key: 'empty', value: 1, text: 'Select Discount' },
      { key: 'Crossbag', value: 0.4, text: '60% off' },
      { key: 'Backpack', value: 0.3, text: '70% off' },
      { key: 'Backpack', value: 0.3 * 0.8, text: '70% + 20% off' },
      { key: 'Backpack', value: 0.3 * 0.75, text: '70% + 25% off' },
      { key: 'Cloth', value: 0.2, text: '80% off' },
    ];
    return (
          <Segment inverted>
            <Grid columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <Icon name="add" size="huge"/>
                </Grid.Column>
                <Grid.Column>
                  <Icon name="minus" size="huge"/>
                </Grid.Column>
                <Grid.Column>
                  <Icon name="times" size="huge"/>
                </Grid.Column>
                <Grid.Column>
                  <Icon name="thumbs up" size="huge"/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          <Segment inverted>
            <div className= "Answer">{this.state.answer}</div>
          </Segment>
          <Form inverted size="huge" onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input
                clearable
                fluid
                label='Price'
                placeholder='Price'
                onChange={this.handleChange('price')}
                value={this.state.value}
              />
              <Form.Select
                fluid
                scrolling
                search
                clearable
                label='Discount'
                placeholder='Discount'
                options={discountOptions}
                value={this.state.value}
                onChange={this.handleChange('discount')}
              />
              <Form.Select
                fluid
                scrolling
                search
                clearable
                label='Product type'
                options={productOptions}
                onChange={this.handleChange('shipping')}
                placeholder='Select Product Type'
              />
              <Form.Button floated="right" content="Enter" />
            </Form.Group>
          </Form>
          <div className= "img"><img src= {logo} alt="rdu"/></div>
        </Segment>

    );
  }
};

export default App;
