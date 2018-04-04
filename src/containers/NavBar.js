import React from 'react'
import styled from 'styled-components'
import { Router, Link } from 'react-static'

export default () => (
  <div>
      <nav>
        <div className="nav-content">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/pcos">PCOS</Link>
      </div>
    </nav>
    </div>
)
