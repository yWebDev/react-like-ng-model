import React, { Component } from 'react';

class ManagedForm extends Component {
  constructor(args) {
    super(args);

    const { model } = this.props;

    this.state = {
      model
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { model } = this.state;

    onSubmit(model);
  }

  renderChild(child, index) {
    const { props: { children } = {} } = child;

    if (!this.isFormField(child) && children && children.length > 0) {
      return React.cloneElement(child, {
        children: React.Children.toArray(children).map((child, index) => this.renderChild(child, index))
      });
    } else if (!this.isFormField(child)) {
      return child;
    }

    const { model } = this.state;

    return React.cloneElement(child, {
      value: model[child.props.name] ? model[child.props.name] : '',
      onChange: this.onModelChange.bind(this),
      key: index
    });
  }

  isFormField(node) {
    return (node.type === 'input' || node.type === 'textarea') && node.props.type !== 'submit';
  }

  onModelChange(e) {
    const { name, value } = e.target;
    const { model } = this.state;

    model[name] = value;

    this.setState({
      model
    });
  }

  render() {
    const { children } = this.props;

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        {React.Children.toArray(children).map((child, index) => this.renderChild(child, index))}
      </form>
    );
  }
}

export default ManagedForm;
