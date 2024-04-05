import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand logo" />
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggle}
            data-testid="navbar-toggle"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mr-auto" data-testid="navbar-items">
              <NavItem href="/" text="Home" testId="navbar-home" />
              {user && (
                <>
                  <NavItem href="/csr" text="Client-side rendered page" testId="navbar-csr" />
                  <NavItem href="/ssr" text="Server-side rendered page" testId="navbar-ssr" />
                  <NavItem href="/external" text="External API" testId="navbar-external" />
                </>
              )}
            </ul>
            <ul className="navbar-nav d-none d-md-block">
              {!isLoading && !user && (
                <NavItem href="/api/auth/login" text="Log in" className="btn btn-primary btn-margin" testId="navbar-login-desktop" />
              )}
              {user && (
                <NavItemDropdown user={user} />
              )}
            </ul>
            <ul className="navbar-nav d-md-none">
              {!isLoading && !user && (
                <NavItem href="/api/auth/login" text="Log in" className="btn btn-primary btn-block" testId="navbar-login-mobile" />
              )}
              {user && (
                <NavItemMobile user={user} />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavItem = ({ href, text, className, testId }) => (
  <li className="nav-item">
    <PageLink href={href} className={`nav-link ${className}`} testId={testId}>
      {text}
    </PageLink>
  </li>
);

const NavItemDropdown = ({ user }) => (
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      href="#"
      id="profileDropDown"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      data-testid="navbar-menu-desktop"
    >
      <img
        src={user.picture}
        alt="Profile"
        className="nav-user-profile rounded-circle"
        width="50"
        height="50"
        data-testid="navbar-picture-desktop"
      />
    </a>
    <div className="dropdown-menu" aria-labelledby="profileDropDown">
      <h6 className="dropdown-header" data-testid="navbar-user-desktop">{user.name}</h6>
      <DropdownItem href="/profile" icon="user" text="Profile" testId="navbar-profile-desktop" />
      <DropdownItem href="/api/auth/logout" icon="power-off" text="Log out" testId="navbar-logout-desktop" />
    </div>
  </li>
);

const DropdownItem = ({ href, icon, text, testId }) => (
  <a href={href} className="dropdown-item" data-testid={testId}>
    {icon && <i className={`fas fa-${icon} mr-2`}></i>}
    {text}
  </a>
);

const NavItemMobile = ({ user }) => (
  <li className="nav-item">
    <span className="user-info">
      <img
        src={user.picture}
        alt="Profile"
        className="nav-user-profile d-inline-block rounded-circle mr-3"
        width="50"
        height="50"
        data-testid="navbar-picture-mobile"
      />
      <span className="d-inline-block" data-testid="navbar-user-mobile">{user.name}</span>
    </span>
    <NavItem href="/profile" text="Profile" testId="navbar-profile-mobile" />
    <NavItem href="/api/auth/logout" text="Log out" className="btn btn-link p-0" testId="navbar-logout-mobile" />
  </li>
);

export default NavBar;
