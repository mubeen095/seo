import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SubMenu = ({ title, links, iconSrc, hoverKey, bottomPosition }) => {

    const closeTimeout = useRef(null);

    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleMouseEnter = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setShowSubMenu(true);

    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setShowSubMenu(false);
        }, 100);
    };

    return (
        <div
            className="flex items-center cursor-pointer relative pb-[25px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image src={iconSrc} className="ml-[10px] mr-[16px]" width={40} alt="" />
            <div>
                <h6 className="program-menu-option hover:text-black text-[16px] tracking-[-1px] font-semibold text-[rgba(135,135,135,1)]">
                    {title}
                </h6>
            </div>
            <div
                className={`absolute right-[-375px] pl-[13px] transition-opacity duration-300 ${showSubMenu ? 'opacity-100 block' : 'opacity-0 hidden'
                    }`}
                style={{ bottom: bottomPosition }}
            >
                <div className="program-sublink-menu rounded-[20px] border border-[rgba(211,211,211,1)] bg-white p-[20px] w-[334px]">
                    <div className="mb-[21px]">
                        <p className="sublink-menu-para text-[10px] font-bold text-black tracking-[3px] leading-none">
                            {title.toUpperCase()}
                        </p>
                    </div>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className="nav-sub-link mt-[20px] flex items-center no-underline mb-[21px]">
                            <Image src={link.icon} alt="" className="ml-[10px] mr-4" />
                            <div>
                                <h6 className="program-submenu-option text-[16px] font-medium text-black">{link.label}</h6>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubMenu;
