"use client";
import React from 'react';
import Wiki from '@/components/wiki/Wiki';
import SidebarUi from '../sidebar/Sidebar';

function Hero() {

    return (
        <div className="space-y-4   ">
            {/* Chat area */}
            <div className=" grid grid-cols-4 ">
                <SidebarUi />
                <Wiki />
            </div>

            {/* Input + send button */}

        </div>
    );
}

export default Hero;
