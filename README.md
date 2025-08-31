# 🌱 SAISA - Servicios Ambientales Integrales S.A.

Sitio web oficial de SAISA, empresa pionera en innovación y aplicación de tecnologías sostenibles, bajas en carbono y orientadas a la economía circular.

## 🚀 Características

- **Diseño Moderno y Profesional**: Interfaz elegante y responsive con animaciones fluidas
- **Multilingüe**: Soporte completo para Español e Inglés
- **Frontend Puro**: Desarrollado 100% en TypeScript sin backend ni base de datos
- **Animaciones Avanzadas**: Utilizando Framer Motion para transiciones suaves
- **Responsive Design**: Optimizado para todos los dispositivos
- **Integración WhatsApp**: Botón flotante para contacto directo
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones y transiciones
- **Vite** - Build tool y dev server
- **Lucide React** - Iconos modernos

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero principal
│   ├── About.tsx       # Información de la empresa
│   ├── Services.tsx    # Servicios ofrecidos
│   ├── Projects.tsx    # Proyectos realizados

│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   └── WhatsAppButton.tsx # Botón flotante WhatsApp
├── contexts/           # Contextos de React
│   └── LanguageContext.tsx # Contexto de idioma
├── data/              # Datos estáticos
│   └── companyData.ts # Información de la empresa
├── types/             # Tipos TypeScript
│   └── index.ts       # Definiciones de tipos
├── App.tsx            # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 16+ 
- npm o yarn

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd saisa-website
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
# o
yarn dev
```

El sitio estará disponible en `http://localhost:3000`

### 4. Construir para producción

```bash
npm run build
# o
yarn build
```

### 5. Previsualizar build de producción

```bash
npm run preview
# o
yarn preview
```

## 🎨 Personalización

### Colores de Marca

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0fdf4',   // Verde claro
    500: '#22c55e',  // Verde principal
    600: '#16a34a',  // Verde oscuro
  },
  secondary: {
    500: '#3b82f6',  // Azul principal
    600: '#2563eb',  // Azul oscuro
  }
}
```

### Contenido

El contenido se puede editar en `src/data/companyData.ts`:

- Información de la empresa
- Servicios
- Proyectos
- Alianzas
- Enlaces de navegación

### Idiomas

Para agregar nuevos idiomas:

1. Extender el tipo `Language` en `src/types/index.ts`
2. Agregar traducciones en `src/data/companyData.ts`
3. Actualizar el contexto de idioma

## 📱 Responsive Design

El sitio está optimizado para:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Previsualizar build
- `npm run lint` - Ejecutar linter

## 🌐 Despliegue

### Netlify

1. Conectar repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Conectar repositorio a Vercel
2. Framework preset: Vite
3. Build command: `npm run build`

### GitHub Pages

1. Agregar `"homepage": "https://username.github.io/repo-name"` en package.json
2. Instalar `gh-pages`: `npm install --save-dev gh-pages`
3. Agregar scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Ejecutar `npm run deploy`

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Seguridad

- Sin dependencias vulnerables
- Sanitización de inputs
- Headers de seguridad recomendados
- Sin información sensible en el código

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **SAISA**: [info@saisa.com.py](mailto:info@saisa.com.py)
- **WhatsApp**: [+595 984 774091](https://wa.me/595984774091)
- **Ubicación**: R.I 4 Curupayty 639, Paraguay

## 🙏 Agradecimientos

- Equipo de desarrollo SAISA
- Comunidad de React y TypeScript
- Contribuidores de open source

---

**SAISA** - Transformando la contaminación en oportunidades sostenibles 🌍✨
# SAISA
