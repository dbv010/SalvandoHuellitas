// src/assets/components/header/MainHeader.jsx
import React, { useState } from 'react';
import LogoSneakes from '@/assets/images/logo.png';
import MenuIcon from '../icons/MenuIcons.jsx';
import CartIcon from '../icons/CartIcon.jsx';
import CloseIcon from '../icons/CloseIcon.jsx';
import NavLinkHeader from './NavLinkHeader.jsx';

const LoginIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
);

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
);

const MainHeader = ({ 
    navigateTo, 
    currentUser, 
    onLogout, 
    onShowLogin, 
    onShowProfilePhoto, 
    cartItemCount = 0, 
    onCartClick 
}) => {
    const COMPANY_NAME = "";
    const [navClass, setnavClass] = useState("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 p-8 md:static md:p-0 md:h-auto");
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleOpenMenu = () => {
        setnavClass("absolute w-4/5 font-bold flex flex-col md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 bg-purple-100 h-full p-8 gap-y-[21px] md:static md:p-0 md:h-auto z-10 shadow-2xl");
    };
    
    const handleClosedMenu = () => {
        setnavClass("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 p-8 md:static md:p-0 md:h-auto");
    };

    return (
        <header className='container mx-auto flex items-center px-4 gap-8 bg-purple-200 h-20 border-b border-purple-300 sticky top-0 z-50 shadow-sm'>
            {/* LOGO */}
            <img
                src={LogoSneakes}
                alt="Logo sneakers"
                onClick={() => navigateTo('home')}
                className="mr-auto md:mr-0 h-6 cursor-pointer"
            />

            {/* MENU RESPONSIVE */}
            <button className='md:hidden hover:bg-purple-300 p-2 rounded-lg transition-colors duration-200' onClick={handleOpenMenu}>
                <MenuIcon />
            </button>
            
            {/* NOMBRE EMPRESA (oculto si hay logo) */}
            <div 
                onClick={() => navigateTo('home')} 
                className='mr-auto md:mr-0 font-black text-3xl text-purple-950 tracking-wider cursor-pointer hover:text-teal-500 transition-colors duration-200'
            >
                {COMPANY_NAME}
            </div>
            
            {/* NAV */}
            <nav className={navClass}>
                <button className='mb-12 md:hidden hover:bg-purple-300 p-2 rounded-lg transition-colors duration-200 self-start' onClick={handleClosedMenu}>
                    <CloseIcon />
                </button>

                <NavLinkHeader text="Animales" onClick={() => { navigateTo('Animales'); handleClosedMenu(); }} />
                <NavLinkHeader text="Medicinas" onClick={() => { navigateTo('Medicinas'); handleClosedMenu(); }} />
                <NavLinkHeader text="Donaciones" onClick={() => { navigateTo('Donaciones'); handleClosedMenu(); }} />
                <NavLinkHeader text="Acerca de nosotros" onClick={() => { navigateTo('Acerca de nosotros'); handleClosedMenu(); }} />
            </nav>
            
            {/* ICONOS DERECHA */}
            <div className='flex items-center gap-4 ml-auto'>
                {/* BOTÓN CARRITO */}
                <button 
                    onClick={onCartClick}
                    className="relative hover:bg-purple-950 p-2 rounded-lg transition-all duration-200 group text-purple-950 hover:text-purple-300"
                >
                    <CartIcon />
                    {cartItemCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition-transform px-1">
                            {cartItemCount}
                        </span>
                    )}
                </button>
                
                {/* SESIÓN DE USUARIO */}
                {currentUser ? (
                    <div className="relative">
                        <button 
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-3 hover:bg-purple-100 px-3 py-2 rounded-full transition-all duration-200"
                        >
                            {currentUser.profilePhoto ? (
                                <img 
                                    src={currentUser.profilePhoto} 
                                    alt={currentUser.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-purple-300 hover:border-purple-500 transition-all duration-200 shadow-sm"
                                />
                            ) : (
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-purple-200 hover:border-purple-400 transition-all duration-200 shadow-sm">
                                    {currentUser.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <span className="hidden sm:block font-semibold text-purple-950 text-sm">
                                ¡Hola, {currentUser.name.split(' ')[0]}!
                            </span>
                            <svg className={`w-4 h-4 text-purple-600 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {showUserMenu && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-purple-200 py-2 z-50 animate-slideUp">
                                <div className="px-4 py-3 border-b border-purple-100">
                                    <p className="text-sm font-semibold text-purple-900">{currentUser.name}</p>
                                    <p className="text-xs text-gray-500">{currentUser.email || 'usuario@email.com'}</p>
                                </div>
                                
                                <button 
                                    onClick={() => {
                                        setShowUserMenu(false);
                                        onShowProfilePhoto();
                                    }}
                                    className="w-full px-4 py-2 text-left text-sm text-purple-700 hover:bg-purple-50 flex items-center gap-3 transition-colors duration-150"
                                >
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Cambiar foto de perfil
                                </button>

                                <button 
                                    onClick={() => {
                                        setShowUserMenu(false);
                                        onLogout();
                                    }}
                                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors duration-150 border-t border-purple-100 mt-2 pt-2"
                                >
                                    <LogoutIcon />
                                    Cerrar sesión
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button 
                        onClick={onShowLogin} 
                        className="flex items-center gap-2 text-white font-semibold bg-gradient-to-r from-purple-800 to-teal-500 hover:from-purple-950 hover:to-teal-600 px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg group"
                    >
                        <LoginIcon />
                        <span className="hidden sm:inline">Iniciar Sesión</span>
                    </button>
                )}
            </div>
        </header>
    );
};

export default MainHeader;
