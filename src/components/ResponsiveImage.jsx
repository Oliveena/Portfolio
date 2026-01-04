import React from 'react';
import PropTypes from 'prop-types';

/**
 * ResponsiveImage component that serves optimized WebP images with fallbacks
 *
 * Features:
 * - Automatically generates srcSet for responsive loading
 * - WebP format with PNG/JPG fallback
 * - Lazy loading by default
 * - Proper aspect ratio handling
 *
 * @param {string} src - Image filename (e.g., "BudgetApp.png")
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS classes to apply
 * @param {array} sizes - Viewport sizes config (e.g., ["(max-width: 768px) 100vw", "50vw"])
 * @param {boolean} eager - Set to true to disable lazy loading (for above-fold images)
 * @param {string} folder - Subfolder within /images/ (e.g., "readBooks")
 */
const ResponsiveImage = ({
  src,
  alt,
  className = '',
  sizes = ['(max-width: 768px) 100vw', '50vw'],
  eager = false,
  folder = '',
  ...props
}) => {
  // Extract base filename without extension
  const getBaseName = (filename) => {
    const lastDot = filename.lastIndexOf('.');
    return lastDot > 0 ? filename.substring(0, lastDot) : filename;
  };

  const baseName = getBaseName(src);
  const basePath = folder ? `/images/${folder}` : '/images';

  // Generate srcSet for WebP images
  const webpSrcSet = [320, 640, 1024, 1920]
    .map((width) => `${basePath}/${baseName}-${width}w.webp ${width}w`)
    .join(', ');

  // Fallback full-size WebP
  const webpSrc = `${basePath}/${baseName}.webp`;

  // Original fallback (for browsers without WebP support - very rare now)
  const fallbackSrc = `${basePath}/${src}`;

  return (
    <picture>
      {/* Modern WebP format with responsive sizes */}
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes.join(', ')}
      />

      {/* Fallback for older browsers (PNG/JPG) */}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={eager ? 'eager' : 'lazy'}
        {...props}
      />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.string),
  eager: PropTypes.bool,
  folder: PropTypes.string,
};

export default ResponsiveImage;
