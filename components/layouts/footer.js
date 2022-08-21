import React from 'react'
import Link from 'next/link'

export default function Footer({ children }) {
    return <div id="footer" className="page-footer hide">
    <div className="d-flex p-3">
        <span className="text-sm text-muted flex">&copy; Copyright. flatfull.com</span>
        <div className="text-sm text-muted">Version 1.1.1</div>
    </div>
</div>
  }