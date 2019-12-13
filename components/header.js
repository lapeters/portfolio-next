import React, { Component } from 'react'
import Meta from './meta'
import Nav from './nav'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { scroll } = this.state
    const isTop = window.scrollY > 40
    if (isTop) {
      this.setState({
        scroll: true
      })
    } else {
      this.setState({
        scroll: false
      })
    }
  }

  render() {
    const { scroll } = this.state;
    return (
      <>
      <Meta />
      <header className={`header ${(scroll ? 'scroll' : '')}`}>
        <Nav />
        <style jsx>{`
          header {
            transition: all 0.2s;
          }
        `}</style>
      </header>
      </>
    )
  }
}
export default Header;
