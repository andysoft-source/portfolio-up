import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import Skeleton from './Skeleton';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  aspectRatio = "aspect-video",
  showSkeleton = true,
  onLoad,
  onError,
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [src]);

  // Cached / already-complete images often never fire onLoad; opacity would stay 0 forever.
  useLayoutEffect(() => {
    const el = imgRef.current;
    if (el?.complete && el.naturalHeight > 0) {
      setImageLoaded(true);
    }
  }, [src]);

  const handleLoad = (e) => {
    setImageLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setImageError(true);
    if (onError) onError(e);
  };

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {/* Skeleton loading state */}
      {showSkeleton && !imageLoaded && !imageError && (
        <Skeleton 
          variant="image" 
          className="absolute inset-0 w-full h-full" 
        />
      )}

      {/* Error state */}
      {imageError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
          <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">Failed to load image</span>
        </div>
      )}

      {/* Actual image */}
      {!imageError && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            className="h-full w-full object-cover"
            {...props}
          />
        </motion.div>
      )}
    </div>
  );
};

export default OptimizedImage;