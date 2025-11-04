import React, { useState, useEffect } from 'react';
import MainHeader from './assets/components/header/MainHeader.jsx';
import LoginModal from './assets/components/modals/LoginModal.jsx';
import ProfilePhotoModal from './assets/components/modals/ProfilePhotoModal.jsx';
import MainProduct from './assets/components/product/MainProduct.jsx';
import PromocionBanner from './assets/components/product/PromocionBanner.jsx';
import FeaturedProducts from './assets/components/product/FeaturedProducts.jsx';
import FooterProduct from './assets/components/product/FooterProduct.jsx';
import CategoryPage from './assets/components/pages/CategoryPage.jsx';
import { users } from '../src/data/user.js'; // Asegúrate que la ruta a user.js sea correcta

const HomePage = () => (
    <>
        <MainProduct />
        <PromocionBanner />
        <FeaturedProducts />
        <FooterProduct />
    </>
);

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Estado de carga inicial

    // ===== RESTAURAR SESIÓN AL CARGAR LA APP =====
    useEffect(() => {
        const restoreSession = () => {
            try {
                // Buscar usuario guardado en localStorage
                const savedUser = localStorage.getItem('currentUser');
                
                if (savedUser) {
                    const userData = JSON.parse(savedUser);
                    
                    // Cargar también la foto de perfil (guardada como Base64)
                    const savedPhoto = localStorage.getItem(`profilePhoto_${userData.username}`);
                    
                    setCurrentUser({
                        ...userData,
                        profilePhoto: savedPhoto || null
                    });
                    
                    console.log('Sesión restaurada:', userData.name);
                }
            } catch (error) {
                console.error('Error al restaurar sesión:', error);
                // Si hay error, limpiar localStorage
                localStorage.removeItem('currentUser');
            } finally {
                setIsLoading(false); // Termina la carga
            }
        };

        restoreSession();
    }, []); // El array vacío [] asegura que esto solo se ejecute UNA VEZ al montar

    // ===== GUARDAR DATOS DEL USUARIO CUANDO CAMBIA =====
    // Este useEffect se dispara CADA VEZ que 'currentUser' cambia
    useEffect(() => {
        if (currentUser) {
            // Guardar usuario en localStorage (sin la foto, esa se guarda separada)
            const userToSave = {
                id: currentUser.id, // Guardamos ID por si acaso
                username: currentUser.username,
                name: currentUser.name,
                email: currentUser.email || `${currentUser.username}@shoreline.com`
            };
            localStorage.setItem('currentUser', JSON.stringify(userToSave));
        } else {
            // Si no hay usuario (logout), eliminar del localStorage
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]); // Se ejecuta cuando 'currentUser' cambia

    const login = (username, password) => {
        const foundUser = users.find(u => u.username === username && u.password === password);
        if (foundUser) {
            // Cargar foto guardada (Base64) si existe
            const savedPhoto = localStorage.getItem(`profilePhoto_${username}`);
            
            const userWithPhoto = {
                ...foundUser,
                email: foundUser.email || `${username}@shoreline.com`,
                profilePhoto: savedPhoto || null
            };
            
            setCurrentUser(userWithPhoto);
            console.log('Login exitoso:', userWithPhoto.name);
            return true;
        }
        return false;
    };

    const logout = () => { 
        // Limpiar sesión de localStorage (el useEffect de arriba lo hará, pero
        // somos explícitos por si acaso)
        localStorage.removeItem('currentUser');
        console.log('Sesión cerrada');
        
        setCurrentUser(null); 
        navigateTo('home'); 
    };

    const updateProfilePhoto = (photoDataURL) => {
        if (currentUser) {
            // Guardar o eliminar foto en localStorage
            if (photoDataURL) {
                // Guardamos la imagen como un string Base64
                localStorage.setItem(`profilePhoto_${currentUser.username}`, photoDataURL);
            } else {
                localStorage.removeItem(`profilePhoto_${currentUser.username}`);
            }
            
            // Actualizar estado
            setCurrentUser(prev => ({
                ...prev,
                profilePhoto: photoDataURL
            }));
        }
    };

    const navigateTo = (page) => { setCurrentPage(page); };

    const renderPage = () => {
        switch (currentPage) {
            case 'Medicinas':
                return <CategoryPage title="Artículos para mascotas" category="Animales" />;
            case 'Animales':
                return <CategoryPage title="Medicamentos para caballos" category="Medicinas" />;
            case 'Donaciones':
                return <CategoryPage title="Medicamentos para caballos" category="Donaciones" />;
            case 'about':
                // Puedes reemplazar esto por tu componente AboutPage si lo tienes
                return <div className="container mx-auto py-20 px-4"><h1 className="text-4xl font-bold">Acerca de Nosotros</h1></div>;
            default:
                return <HomePage />;
        }
    };

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);
    const openProfilePhotoModal = () => setIsProfilePhotoModalOpen(true);
    const closeProfilePhotoModal = () => setIsProfilePhotoModalOpen(false);

    // Mostrar un "loading" mientras se restaura la sesión
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-teal-300">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-950 mb-4"></div>
                    <p className="text-black font-semibold">Cargando...</p>
                </div>
            </div>
        );
    }

    // App principal
    return (
        <div>
            <MainHeader
                navigateTo={navigateTo}
                currentUser={currentUser}
                onLogout={logout}
                onShowLogin={openLoginModal}
                onShowProfilePhoto={openProfilePhotoModal} // Nueva prop
            />
            
            {renderPage()}
            
            {/* --- Modales --- */}
            {isLoginModalOpen && <LoginModal onLogin={login} onClose={closeLoginModal} />}
            
            {isProfilePhotoModalOpen && currentUser && (
                <ProfilePhotoModal 
                    currentUser={currentUser}
                    onUpdatePhoto={updateProfilePhoto}
                    onClose={closeProfilePhotoModal}
                />
            )}
        </div>
    );
};

export default App;