import React, { useState } from 'react'

import AppBarCompnent from './AppBarCompnent'
import DrawerNavigator from './DrawerNavigator';

const HeaderComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div>
            <AppBarCompnent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
            <DrawerNavigator openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
    )
}

export default HeaderComponent