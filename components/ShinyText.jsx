import './ShinyText.css';

// Adapted from React Bits' ShinyText: a slow highlight that glides across the text.
const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => (
  <span
    className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
    style={{ animationDuration: `${speed}s` }}
  >
    {text}
  </span>
);

export default ShinyText;
