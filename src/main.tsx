import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store.ts'
import { fetchCategories } from './features/categories/categoriesSlice.ts'

store.dispatch(fetchCategories())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
