import { APPLY_URL } from '../../config/site.js';

export default function ApplyButton({ className = '' }) {
  return (
    <a className={`btn ${className}`} href={APPLY_URL} target="_blank" rel="noopener noreferrer">
      Apply
    </a>
  );
}
