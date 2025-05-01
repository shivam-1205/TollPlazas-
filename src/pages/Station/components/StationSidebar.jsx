import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { HiOutlineHome, HiOutlineUsers, HiOutlineCurrencyDollar, HiOutlineClipboardList } from 'react-icons/hi';
import { TbSettingsCog, TbCameraPlus, TbFileSettings, TbUserShield, TbCar } from 'react-icons/tb';
import { RiBankCardLine } from 'react-icons/ri';
import { GiMoneyStack, GiCarKey, GiPoliceBadge } from 'react-icons/gi';

export default function StationSidebar({ setPath }) {
    return (
        <Sidebar
            backgroundColor='#fff'
            collapsedWidth='0px'
            collapsed={false}
            className='h-screen font-Poppins border-r shadow-sm'
            menuItemStyles={{
                button: {
                    [`&.active`]: {},
                },
            }}>
            <Menu className='space-y-4 px-4'>
                <h1 className='text-center mt-6 text-green-600 text-3xl font-bold tracking-wide'>FlexiPASS</h1>

                <MenuItem
                    onClick={() => setPath("dashboard")}
                    className='mt-8 text-base font-medium text-gray-700'
                    icon={<HiOutlineHome size={20} />}>
                    Dashboard
                </MenuItem>

                <SubMenu label="Toll Management" icon={<TbSettingsCog size={18} />}>
                    <MenuItem onClick={() => setPath("toll")} icon={<TbFileSettings size={18} />}>Toll</MenuItem>
                    <MenuItem onClick={() => setPath("camera")} icon={<TbCameraPlus size={18} />}>Camera</MenuItem>
                    <MenuItem onClick={() => setPath("employee")} icon={<TbUserShield size={18} />}>Toll Employee</MenuItem>
                </SubMenu>

                <SubMenu label="Compliance" icon={<HiOutlineClipboardList size={18} />}>
                    <MenuItem onClick={() => setPath("ownership")} icon={<TbUserShield size={18} />}>Ownership</MenuItem>
                </SubMenu>

                <SubMenu label="Expenses" icon={<GiMoneyStack size={18} />}>
                    <MenuItem onClick={() => setPath("expenses")} icon={<GiMoneyStack size={18} />}>Tolls Expenses</MenuItem>
                </SubMenu>

                <SubMenu label="Customer" icon={<HiOutlineUsers size={18} />}>
                    <MenuItem onClick={() => setPath("customer")} icon={<HiOutlineUsers size={18} />}>Customer</MenuItem>
                    <MenuItem onClick={() => setPath("vehicle")} icon={<TbCar size={18} />}>Vehicle</MenuItem>
                </SubMenu>

                <SubMenu label="Wallet Ledger" icon={<HiOutlineCurrencyDollar size={18} />}>
                    <MenuItem onClick={() => setPath("walletm")} icon={<RiBankCardLine size={18} />}>Balance Management</MenuItem>
                </SubMenu>
                <SubMenu label="Unauthorized Vehicle" icon={<GiPoliceBadge size={18} />}>
                    <MenuItem onClick={() => setPath("unauthorized")} icon={<GiCarKey size={18} />}>Vehicle List</MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
}