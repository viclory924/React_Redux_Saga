import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";

const menuData = [
  {
    title: "Customers",
    icon: "icon fa fa-building",
    items: [
      {
        name: "Manage",
        route: "/dashboard/customers"
      },
      {
        name: "API Usage",
        route: "#"
      }
    ]
  },
  {
    title: "Users",
    icon: "icon fa fa-users",
    items: [
      {
        name: "Manage",
        route: "/dashboard/users"
      },
      {
        name: "API Usage",
        route: "#"
      },
      {
        name: "UI Usage",
        route: "#"
      }
    ]
  },
  {
    title: "Audit Logs",
    icon: "icon fa fa-eye",
    items: [
      {
        name: "Manage",
        route: "/dashboard/audits-manage"
      },
      {
        name: "API Usage",
        route: "/dashboard/audits-api"
      },
      {
        name: "UI Usage",
        route: "/dashboard/audits-ui"
      },
      {
        name: "Configure",
        route: "/dashboard/audits-configure"
      }
    ]
  },
  {
    title: "Events",
    icon: "icon fa fa-calendar-alt",
    items: [
      {
        name: "Manage",
        route: "/dashboard/audits-manage"
      },
      {
        name: "API Usage",
        route: "#"
      },
      {
        name: "UI Usage",
        route: "#"
      }
    ]
  },
  {
    title: "Subscriptions",
    icon: "icon fa fa-wallet",
    items: [
      {
        name: "Manage",
        route: "/dashboard/app-edit"
      },
      {
        name: "API Usage",
        route: "#"
      },
      {
        name: "UI Usage",
        route: "#"
      }
    ]
  }
];

const SideMenu = props => {
  const [menu] = useState(menuData);
  const [collapse, setCollapse] = useState({
    isCollapse: false,
    collapseIndex: 0,
    itemIndex: 0
  });

  const renderCollapse = menuData =>
    menuData.map((data, index) => (
      <Collapsible
        handleTriggerClick={() => {
          collapse.collapseIndex === index
            ? setCollapse({
                ...collapse,
                isCollapse: !collapse.isCollapse,
                collapseIndex: index
              })
            : setCollapse({
                isCollapse: true,
                collapseIndex: index,
                itemIndex: 0
              });
        }}
        open={collapse.isCollapse && collapse.collapseIndex === index}
        key={index}
        onOpening={() => props.history.push(data.items[0].route)}
        triggerWhenOpen={
          <div className="formStepper">
            <p className="tagP">
              <i className={data.icon} /> {data.title}
            </p>
            <i className="icon fa fa-chevron-up navFontIcon" />
          </div>
        }
        trigger={
          <div className="formStepper">
            <p className="tagP">
              <i className={data.icon} /> {data.title}
            </p>
            <i className="icon fa fa-chevron-down navFontIcon" />
          </div>
        }
        triggerClassName="sidebar-nav-link"
        triggerOpenedClassName="sidebar-nav-link"
        contentInnerClassName="navColContentInner">
        <ul className="navUl">
          {data.items.map((child, i) => (
            <li
              onClick={() =>
                setCollapse({
                  ...collapse,
                  itemIndex: i
                })
              }
              className={collapse.itemIndex === i ? "activeLink" : null}
              key={i}>
              <Link className="navLink" to={child.route}>
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      </Collapsible>
    ));

  return (
    <div className="slim-sidebar">
      <label className="sidebar-label">Navigation</label>
      <ul className="nav nav-sidebar">
        <li
          className="sidebar-nav-item"
          onClick={() =>
            setCollapse({
              isCollapse: false,
              collapseIndex: 0,
              itemIndex: 0
            })
          }>
          <Link
            to="/dashboard/home"
            className="overview-menu-item sidebar-nav-link">
            <i className="icon fa fa-home" />
            Overview
          </Link>
        </li>
        <div style={{ width: "100%" }}>{renderCollapse(menu)}</div>

        <li
          className="sidebar-nav-item"
          onClick={() =>
            setCollapse({
              isCollapse: false,
              collapseIndex: 0,
              itemIndex: 0
            })
          }>
          <Link
            to="/dashboard/settings"
            className="settings-menu-item sidebar-nav-link">
            <i className="icon fa fa-cog" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
