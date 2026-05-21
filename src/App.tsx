import React, { useState, useEffect } from 'react';
import api from './api';
import type { User, Publicacion, Comentario } from './interfaz';
import SideBar from './components/SideBar';
import StoriesBar from './components/StoriesBar';
import PostCard from './components/PostCard';
import SuggestionsBar from './components/SuggestionsBar';
import './index.css';

export default function App() {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [postSeleccionado, setPostSeleccionado] = useState<Publicacion | null>(null);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<User | null>(null);

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
            cantPublicaciones: 2,
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
            cantPublicaciones: 1,
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
            cantPublicaciones: 2,
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
            cantPublicaciones: 2,
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
            cantPublicaciones: 2,
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
            cantPublicaciones: 1,
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
      {/* 1. Pasamos las funciones a la barra lateral */}
      <SideBar 
        onGoHome={() => {
          setUsuarioSeleccionado(null);
          setPostSeleccionado(null);
        }}
        onGoToProfile={() => {
          if (usuarios.length > 0) {
            setUsuarioSeleccionado(usuarios[0]); // Selecciona a SofiVicky
            setPostSeleccionado(null);           // Cierra posts abiertos
          }
        }}
      />
      
      <main>
        {/* 2. SI HAY UN USUARIO SELECCIONADO, MUESTRA LA PANTALLA DE PERFIL */}
        {usuarioSeleccionado ? (
          <div className="profile-screen-container" style={{ padding: '20px' }}>
            <button 
              onClick={() => setUsuarioSeleccionado(null)}
              style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}
            >
              ← Volver al Feed
            </button>
            
            {/* Cabecera del Perfil con info dinámica */}
            <div className="profile-header" style={{ display: 'flex', gap: '30px', marginBottom: '30px', alignItems: 'center' }}>
              <img 
                src={usuarioSeleccionado.imagen} 
                alt={usuarioSeleccionado.nombre} 
                style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h2 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>{usuarioSeleccionado.nombre}</h2>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                  <span><strong>{usuarioSeleccionado.cantPublicaciones}</strong> posts</span>
                  <span><strong>{usuarioSeleccionado.cantSeguidores}</strong> followers</span>
                  <span><strong>{usuarioSeleccionado.cantSeguidos}</strong> following</span>
                </div>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{usuarioSeleccionado.nombre}</p>
                <p style={{ margin: '5px 0 0 0', color: '#666' }}>{usuarioSeleccionado.biografia}</p>
              </div>
            </div>

            {/* Grilla de publicaciones del Perfil */}
            <div className="profile-posts-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', borderTop: '1px solid #dbdbdb', paddingTop: '20px' }}>
              {usuarioSeleccionado.publicaciones.map((post, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {
                    setPostSeleccionado(post);
                    setUsuarioSeleccionado(null); // Al abrir la foto vamos al detalle
                  }}
                  style={{ cursor: 'pointer', aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#f0f0f0' }}
                >
                  <img src={post.imagen} alt="Post de perfil" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        ) : postSeleccionado ? (
          /* 3. VISTA DE DETALLE DE UN POST SINGULAR */
          <div className="singular-post-view">
            <button onClick={() => setPostSeleccionado(null)}>
              Volver al Feed
            </button>

            <div className="detailed-post">
              <h2>{postSeleccionado.nombreUsuario}</h2>
              <img src={postSeleccionado.imagen} alt="Post Singular Ampliado" />

              <div className="post-interactions">
                <button>❤️</button>
                <button>💬</button>
              </div>

              <p className="likes-count">{postSeleccionado.likes} likes</p>
              <p className="caption"><strong>{postSeleccionado.nombreUsuario}</strong> {postSeleccionado.descrpcion}</p>

              <div className="extended-comments">
                <h3>Comentarios:</h3>
                {postSeleccionado.comentarios?.map((item, index) => (
                  <div key={index} className="comment-row">
                    <strong>{item.nombreUsuario}:</strong> {item.comentario}
                  </div>
                ))}
              </div>

              <div className="additional-info">
                <p>Fecha de publicación: 19 de Mayo de 2026</p>
                <p>Ubicación: Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
        ) : (
          /* 4. VISTA POR DEFECTO: EL FEED NORMAL */
          <div className="feed-section">
            <StoriesBar usuarios={usuarios} onSelectUser={setUsuarioSeleccionado} />

            {todasLasPublicaciones.map((post, index) => (
              <PostCard
                key={index}
                publicacion={post}
                onSelect={() => setPostSeleccionado(post)}
                onSelectUser={() => {
                  const usuarioEncontrado = usuarios.find(u => u.nombre === post.nombreUsuario);
                  if (usuarioEncontrado) {
                    setUsuarioSeleccionado(usuarioEncontrado);
                  }
                }}
              />
            ))}
          </div>
        )}
        
        {/* Las sugerencias laterales solo se muestran en el Feed principal */}
        {!postSeleccionado && !usuarioSeleccionado && (
          <div className="suggestions-section">
            <SuggestionsBar listaSugeridos={usuarios} onSelectUser={setUsuarioSeleccionado} />
          </div>
        )}
      </main>
    </div>
  );
}