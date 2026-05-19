import React, { useState, useEffect } from 'react';
import api from './api';
import type { User, Publicacion, Comentario } from './interfaz'; 
import SideBar from './components/SideBar';
import StoriesBar from './components/StoriesBar';
import PostCard from './components/PostCard';
import SuggestionsBar from './components/SuggestionsBar';

export default function App() {
    const [usuarios, setUsuarios] = useState<User[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);

    useEffect(() => {
        const cargarUsuariosYFotos = async () => {
            try {
                const respuesta = await api.get('images/search?limit=10');
                const fotosGatos = respuesta.data;
                const seisUsuarios: User[] = [
                    {
                        nombre: 'SofiVicky',
                        imagen: 'public/sofiVicky.jpg',
                        biografia: 'Amo a mis michis más que a nada en el mundo. 🐾💕',
                        cantSeguidores: 500,
                        cantSeguidos: 120,
                        publicaciones: [
                            {
                                imagen: fotosGatos[0]?.url || '',
                                nombreUsuario: 'SofiVicky',
                                descrpcion: '¡Hola a todos! Miren esta fotito mía. #michi #catlife',
                                likes: 125,
                                fecha: 'Hace 1 hora',
                                comentarios: [
                                    { nombreUsuario: 'ValuAilu', comentario: '¡Qué preciosidad! 😍', fotoUsuario: 'public/valuailu.jpg', likeado: false }
                                ]
                            },
                            {
                                imagen: fotosGatos[1]?.url || '',
                                nombreUsuario: 'SofiVicky',
                                descrpcion: 'Haciendo la siesta número 5 del día... 😴',
                                likes: 430,
                                fecha: 'Hace 5 horas',
                                comentarios: [
                                    { nombreUsuario: 'CeciClari', comentario: 'Te entiendo totalmente, amiga.', fotoUsuario: 'public/ceciclari.jpg', likeado: true }
                                ]
                            }
                        ]
                    },
                    {
                        nombre: 'ValuAilu',
                        imagen: 'public/valuAilu.jpg',
                        biografia: 'Buscando aventuras y un buen tazón de leche ⚔️🥛',
                        cantSeguidores: 9800,
                        cantSeguidos: 450,
                        publicaciones: [
                            {
                                imagen: fotosGatos[2]?.url || '',
                                nombreUsuario: 'ValuAilu',
                                descrpcion: 'Hoy exploramos el jardín trasero. Todo bajo control. 🌿',
                                likes: 850,
                                fecha: 'Hace 3 horas',
                                comentarios: []
                            }
                        ]
                    },
                    {
                        nombre: 'CeciClari',
                        imagen: 'public/ceciClari.jpg',
                        biografia: 'Odio los lunes. Amo la lasagna y dormir 🍕💤',
                        cantSeguidores: 15000,
                        cantSeguidos: 10,
                        publicaciones: [
                            {
                                imagen: fotosGatos[3]?.url || '',
                                nombreUsuario: 'CeciClari',
                                descrpcion: '¿Alguien dijo lasagna? Es mi momento de brillar.',
                                likes: 2300,
                                fecha: 'Hace 30 min',
                                comentarios: []
                            },
                            {
                                imagen: fotosGatos[4]?.url || '',
                                nombreUsuario: 'CeciClari',
                                descrpcion: 'Por favor, no me despierten hasta el martes.',
                                likes: 4100,
                                fecha: 'Hace 18 horas',
                                comentarios: []
                            }
                        ]
                    },
                    {
                        nombre: 'FioEli',
                        imagen: 'public/fioEli.jpg',
                        biografia: 'Una gatita muy fina y selectiva con sus humanos 👑',
                        cantSeguidores: 3200,
                        cantSeguidos: 580,
                        publicaciones: [
                            {
                                imagen: fotosGatos[5]?.url || '',
                                nombreUsuario: 'FioEli',
                                descrpcion: 'Juzgando a mis humanos en silencio como siempre.',
                                likes: 190,
                                fecha: 'Hace 4 horas',
                                comentarios: []
                            },
                            {
                                imagen: fotosGatos[6]?.url || '',
                                nombreUsuario: 'FioEli',
                                descrpcion: 'Rayos de sol perfectos para mi tarde de spa. ☀️',
                                likes: 250,
                                fecha: 'Hace 2 días',
                                comentarios: []
                            }
                        ]
                    },
                    {
                        nombre: 'SantiAgus',
                        imagen: 'public/santiAgus.jpg',
                        biografia: 'Convierto café en bugs y cazo ratones de biblioteca 💻🐭',
                        cantSeguidores: 4100,
                        cantSeguidos: 890,
                        publicaciones: [
                            {
                                imagen: fotosGatos[7]?.url || '',
                                nombreUsuario: 'SantiAgus',
                                descrpcion: 'Mi teclado es el mejor lugar para dormir, no me importa tu código.',
                                likes: 560,
                                fecha: 'Hace 45 min',
                                comentarios: []
                            },
                            {
                                imagen: fotosGatos[8]?.url || '',
                                nombreUsuario: 'SantiAgus',
                                descrpcion: 'Buscando el bug... creo que me lo comí. 🐜',
                                likes: 710,
                                fecha: 'Hace 8 horas',
                                comentarios: []
                            }
                        ]
                    },
                    {
                        nombre: 'Warriors',
                        imagen: 'public/warriors.jpg',
                        biografia: 'Ven por un café y llévate mimos gratis ☕🐾',
                        cantSeguidores: 8300,
                        cantSeguidos: 210,
                        publicaciones: [
                            {
                                imagen: fotosGatos[9]?.url || '',
                                nombreUsuario: 'Warriors',
                                descrpcion: '¡Muffin los espera hoy para tomar el té! 🧁',
                                likes: 640,
                                fecha: 'Hace 2 horas',
                                comentarios: []
                            }
                        ]
                    }
                ];
                setUsuarios(seisUsuarios);

            } catch (error) {
                console.error('Error cargando los michis de la API:', error);
            } finally {
                setCargando(false);
            }
        };

        cargarUsuariosYFotos();
    }, []);

    if (cargando) return <div >Creando perfiles de michis... 🐈</div>;

    const todasLasPublicaciones = usuarios.flatMap(u => u.publicaciones);

    return (
        <div className="app-layout">
            <main className="main-content" >
                <div className="feed-section" >
                    {todasLasPublicaciones.map((post, index) => (
                        <PostCard key={index} publicacion={post} />
                    ))}
                </div>
            </main>
        </div>
    );
}