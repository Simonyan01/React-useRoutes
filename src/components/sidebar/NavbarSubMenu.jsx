import { useState } from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarSubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav((prev) => !prev);

    const SidebarLabel = styled.span`
    margin-left: 2rem;
    `
    const DropdownLink = styled(Link)`
    height: 55px;
    padding-left: 2.6rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 16.5px;
    transition: all .3s linear;
    cursor: pointer;

    &:hover {
        background: #969595;
    }
    `
    return (
        <>
            <Link to={item.path} onClick={item.subNav && showSubnav}>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon className="text-2xl">
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                        {item.subNav && subnav
                            ? item.iconOpened
                            : item.subNav
                                ? item.iconClosed
                                : null}
                    </ListItemButton>
                </ListItem>
            </Link>
            {subnav && item.subNav.map((item, index) => (
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            ))}
        </>
    )
}

export default NavbarSubMenu