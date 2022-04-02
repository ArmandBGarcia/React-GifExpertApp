import * as ReactDOMClient from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './index.css'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(<GifExpertApp />);