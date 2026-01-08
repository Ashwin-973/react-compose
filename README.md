# React Fundamentals Practice Project

A React practice project covering core concepts including state management, hooks, routing, API integration, and component composition. Built with React 19, React Router, and Vite.

## 🎯 Purpose

Brush up on React fundamentals through hands-on implementation of common patterns and features.

## 🏗️ Project Structure

```
mini-project3/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation with movie selection
│   │   ├── Hero.jsx             # Dynamic movie display
│   │   ├── Thrillers.jsx        # List rendering
│   │   ├── ThrillerCard.jsx     # Reusable card component
│   │   ├── NomineeForm.jsx      # Form handling with useState & useRef
│   │   ├── MovieList.jsx        # API fetching with useEffect
│   │   ├── CarRouter.jsx        # React Router setup
│   │   ├── CarLayout.jsx        # Nested routing layout
│   │   ├── CarHome.jsx          # Home route
│   │   ├── Cars.jsx             # Car list with links
│   │   ├── Car.jsx              # Dynamic route with useParams
│   │   └── Footer.jsx           # Footer component
│   ├── css/
│   │   ├── Hero.module.css      # CSS Modules example
│   │   └── ThrillerCard.css     # Regular CSS
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # Entry point with BrowserRouter
├── index.html
├── package.json
└── vite.config.js
```

## ✨ React Concepts Covered

### 1. **State Management**
- `useState` for local component state
- State lifting (movie selection in Header → Hero)
- Controlled form inputs

### 2. **Hooks**
- **useState**: Movie selection, form inputs, API data, loading states
- **useEffect**: API calls with cleanup
- **useRef**: Uncontrolled form input
- **useCallback**: Memoized navigation function
- **useParams**: Dynamic route parameters
- **useNavigate**: Programmatic navigation

### 3. **Component Patterns**
- Props drilling
- Component composition
- Reusable components (ThrillerCard)
- Layout components (CarLayout with Outlet)

### 4. **React Router (v7)**
- BrowserRouter setup
- Routes and Route configuration
- Nested routing with Outlet
- Dynamic routes with useParams
- NavLink with active styling
- Programmatic navigation with useNavigate

### 5. **Event Handling**
- Click handlers
- Form submission
- Event delegation (ul onClick)
- Preventing default behavior

### 6. **Conditional Rendering**
- State-based UI (loading, error, success)
- Ternary operators
- Logical && operator

### 7. **List Rendering**
- Array.map() for rendering lists
- Key prop usage
- Array.find() for filtering

### 8. **API Integration**
- Fetch API with async/await
- Error handling with try/catch
- Loading states
- State machine pattern (idle, loading, success, error)
- Environment variables (import.meta.env)

### 9. **Styling Approaches**
- CSS Modules (Hero.module.css)
- Regular CSS (ThrillerCard.css)
- Inline styles (MovieList, Header)

### 10. **Forms**
- Controlled components (useState)
- Uncontrolled components (useRef)
- Form validation (required attribute)
- Form submission handling

## 🎬 Features

### Movie Case Studies
- **Header Navigation**: Click movie names to switch displayed movie
- **Hero Section**: Displays selected movie poster and name
- **State Lifting**: Movie selection state managed in App, passed to Header and Hero

### Thriller Cards
- Static list of thriller movies
- Component composition with ThrillerCard
- Props passing (number, title, director)

### Nomination Form
- Controlled inputs for actor and character (useState)
- Uncontrolled input for movie (useRef)
- Form submission with alert

### Movie List (API Integration)
- Fetches top-rated movies from TMDB API
- Loading, error, and success states
- State machine pattern for async operations
- Displays movie titles and synopses

### Car Showcase (React Router)
- **Home Route** (`/`): Welcome message
- **Cars List** (`/cars`): Links to individual car brands
- **Car Detail** (`/cars/:brand`): Dynamic route showing car details
- **Navigation**: NavLink with active state styling
- **Layout**: Shared header/footer with Outlet for nested routes
- **Programmatic Navigation**: "Head Home" button using useNavigate

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview
```bash
npm preview
```

### Lint
```bash
npm run lint
```


## 📦 Dependencies

- **react** (^19.2.0): Core React library
- **react-dom** (^19.2.0): React DOM rendering
- **react-router-dom** (^7.10.1): Client-side routing

## 🛠️ Dev Dependencies

- **vite** (^7.2.4): Build tool and dev server
- **@vitejs/plugin-react** (^5.1.1): React plugin for Vite
- **eslint** (^9.39.1): Code linting
- **eslint-plugin-react-hooks**: React Hooks linting rules
- **eslint-plugin-react-refresh**: React Fast Refresh linting

## 🎓 Key Learning Points

### State Management
```javascript
const [currentMovie, setCurrentMovie] = useState('Prisoners');

function onMovieChange(movieName) {
    setCurrentMovie(movieName);
}
```

### useEffect with Async/Await
```javascript
useEffect(() => {
    const movieFetch = async () => {
        try {
            setState('loading');
            const res = await fetch(url, options);
            const data = await res.json();
            setMovies(data?.results);
            setState('success');
        } catch(e) {
            setState('error');
        }
    }
    movieFetch();
}, []);
```

### useRef for Uncontrolled Inputs
```javascript
const movieRef = useRef('');

<input ref={movieRef} id="movie" type="text" />
// Access value: movieRef.current.value
```

### Dynamic Routing
```javascript
<Route path="cars/:brand" element={<Car cars={cars}/>}/>

// In component:
const {brand} = useParams();
const car = cars.find(c => c.brand === brand);
```

### NavLink Active Styling
```javascript
<NavLink to="/cars" style={({isActive}) => ({
    color: isActive ? 'green' : 'red'
})}>
    Cars
</NavLink>
```

### useCallback for Memoization
```javascript
const navigateHome = useCallback(() => {
    navigate('/');
}, [navigate]);
```

## 🎨 Data Examples

### Movies
- Prisoners
- La La Land
- Memento

### Thrillers
- Se7en (David Fincher)
- Old Boy (Park Chan-wook)
- The Sixth Sense (M Night Shyamalan)

### Cars
- BMW M8 Competition Coupe
- Porsche Taycan 4S
- Mercedes-Benz CLE Cabriolet
- Audi Q8

## 🔑 Component Breakdown

| Component | Purpose | Hooks Used |
|-----------|---------|------------|
| App | Root component, state management | useState |
| Header | Navigation, movie selection | - |
| Hero | Display selected movie | - |
| Thrillers | Render thriller list | - |
| ThrillerCard | Reusable card UI | - |
| NomineeForm | Form handling | useState, useRef |
| MovieList | API data fetching | useState, useEffect |
| CarRouter | Route configuration | - |
| CarLayout | Nested route layout | useNavigate, useCallback |
| CarHome | Home route content | - |
| Cars | Car list with links | - |
| Car | Individual car details | useParams |
| Footer | Footer content | - |

## 📝 Notes

- Uses React 19 with latest features
- Vite for fast development and HMR
- React Router v7 for routing
- Mix of controlled and uncontrolled form inputs
- State machine pattern for async operations
- CSS Modules and regular CSS demonstrated
- Environment variables for API keys (TMDB_SECRET)

## 🎯 Practice Goals Achieved

✅ Component composition and reusability
✅ State management with useState
✅ Side effects with useEffect
✅ Refs with useRef
✅ Memoization with useCallback
✅ Client-side routing with React Router
✅ Dynamic routes and URL parameters
✅ API integration and async operations
✅ Form handling (controlled and uncontrolled)
✅ Conditional rendering
✅ List rendering with keys
✅ Event handling
✅ Props passing and lifting state
✅ CSS Modules and styling approaches
